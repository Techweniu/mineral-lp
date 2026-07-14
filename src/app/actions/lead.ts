"use server";

import { leadSchema, LeadFormData } from "@/lib/validations/lead";

export async function processLead(data: LeadFormData) {
  const validatedFields = leadSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Falha na validação de dados." };
  }

  try {
    const API_TOKEN = process.env.SOLARMARKET_TOKEN;
    const RESPONSIBLE_ID = process.env.SOLARMARKET_RESPONSIBLE_ID;

    if (!API_TOKEN || !RESPONSIBLE_ID) {
      return { error: "Falha na configuração do servidor." };
    }

    const responsibleIdNum = parseInt(RESPONSIBLE_ID, 10);

    // 1. Autenticação
    const authResponse = await fetch("https://business.solarmarket.com.br/api/v2/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: API_TOKEN }),
    });

    if (!authResponse.ok) return { error: "Falha de autenticação no CRM." };
    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // 2. Criação do Projeto e Cliente (Sem chaves de funil na raiz)
    const rawDescription = `LP. CNPJ:${validatedFields.data.cnpj} Ponto:${validatedFields.data.pointType} CapEx:${validatedFields.data.investmentCapital}`;
    const safeDescription = rawDescription.substring(0, 100);

    const projectPayload = {
      name: `Lead Site: ${validatedFields.data.name}`,
      description: safeDescription,
      responsibleId: responsibleIdNum,
      client: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        primaryPhone: validatedFields.data.phone,
        cnpjCpf: validatedFields.data.cnpj,
        responsibleId: responsibleIdNum,
      }
    };

    const projectResponse = await fetch("https://business.solarmarket.com.br/api/v2/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(projectPayload),
    });

    if (!projectResponse.ok) {
      console.error("Falha ao criar:", await projectResponse.text());
      return { error: "Falha ao registrar a oportunidade no CRM." };
    }

    // Extrair o ID do projeto recém-criado
    const createdProject = await projectResponse.json();
    const projectId = createdProject.id;

    // 3. Atualização de Roteamento para o Kanban (Funil MINERAL, Etapa PROSPECÇÃO)
    const movePayload = {
      stageId: 115197
    };

    // A chamada PATCH exige o ID do projeto na URL
    const moveResponse = await fetch(`https://business.solarmarket.com.br/api/v2/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(movePayload),
    });

    if (!moveResponse.ok) {
        console.error("Projeto criado, mas falha ao mover para o funil:", await moveResponse.text());
        // Não retornar erro para o front-end, pois o lead já existe na raiz
    }

    return { success: true };

  } catch (error) {
    console.error("Erro crítico em processLead:", error);
    return { error: "Erro interno no servidor." };
  }
}