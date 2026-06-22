"use server";

import { leadSchema, LeadFormData } from "@/lib/validations/lead";

export async function processLead(data: LeadFormData) {
  const validatedFields = leadSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Falha na validação de dados.",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("ERRO: N8N_WEBHOOK_URL não configurada no .env.local");
      return { error: "Erro de configuração no servidor." };
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      throw new Error(`Falha no Webhook: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Erro crítico ao enviar lead para o n8n:", error);
    return { error: "Erro de comunicação. Tente novamente mais tarde." };
  }
}