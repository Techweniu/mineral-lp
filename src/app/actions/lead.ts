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
      return { error: "Falha na configuração da infraestrutura." };
    }

    const responsibleIdNum = parseInt(RESPONSIBLE_ID, 10);

    // 1. Autenticação REST
    const authResponse = await fetch("https://business.solarmarket.com.br/api/v2/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: API_TOKEN }),
    });

    if (!authResponse.ok) return { error: "Falha de autenticação." };
    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // 2. Criação REST com Roteamento Integrado
    const rawDescription = `LP. CNPJ:${validatedFields.data.cnpj} Ponto:${validatedFields.data.pointType} CapEx:${validatedFields.data.investmentCapital}`;
    const safeDescription = rawDescription.substring(0, 100);

    const projectPayload = {
      name: `Lead Site: ${validatedFields.data.name}`,
      description: safeDescription,
      responsibleId: responsibleIdNum,
      stageId: 117632, // Injeção documentada pelo suporte técnico
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
      console.error("Falha na gravação REST:", await projectResponse.text());
      return { error: "Falha ao registrar oportunidade no CRM." };
    }

    // --- NOVA VERIFICAÇÃO/ARMAZENAMENTO LOCAL ---
    // Salva um log local em arquivo para garantir que você possa verificar os leads independentemente do Pixel ou do CRM.
    try {
      const fs = require("fs");
      const path = require("path");
      
      const logEntry = {
        timestamp: new Date().toISOString(),
        leadData: validatedFields.data,
      };
      
      const logFilePath = path.join(process.cwd(), "leads-log.json");
      
      let existingLogs = [];
      if (fs.existsSync(logFilePath)) {
        const fileContent = fs.readFileSync(logFilePath, "utf8");
        existingLogs = JSON.parse(fileContent);
      }
      
      existingLogs.push(logEntry);
      fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2), "utf8");
    } catch (logError) {
      console.error("Falha ao salvar log local do lead:", logError);
      // Não retorna erro para o usuário pois o lead já foi salvo no CRM.
    }
    // ---------------------------------------------

    return { success: true };

  } catch (error) {
    console.error("Erro crítico em processLead:", error);
    return { error: "Erro interno no servidor." };
  }
}