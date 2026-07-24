"use server";

import { leadSchema, LeadFormData } from "@/lib/validations/lead";

export async function processLead(data: LeadFormData) {
  const validatedFields = leadSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Falha na validação de dados." };
  }

  try {
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "https://n8n.srv966092.hstgr.cloud/webhook/273dc2f8-8088-450b-a032-780bd2047915";

    const payload = {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      phone: validatedFields.data.phone,
      company: `CNPJ: ${validatedFields.data.cnpj}`,
      parkingType: validatedFields.data.pointType || "Não informado",
      message: `CapEx: ${validatedFields.data.investmentCapital || "Não informado"} | Ponto: ${validatedFields.data.pointType || "Não informado"}`,
      cnpj: validatedFields.data.cnpj,
      investmentCapital: validatedFields.data.investmentCapital,
      pointType: validatedFields.data.pointType
    };

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Falha ao enviar lead para o webhook n8n:", await response.text());
      return { error: "Falha ao registrar oportunidade no n8n." };
    }

    // --- ARMAZENAMENTO LOCAL DE BACKUP ---
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
    }
    // -------------------------------------

    return { success: true };

  } catch (error) {
    console.error("Erro crítico em processLead:", error);
    return { error: "Erro interno no servidor." };
  }
}