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

  // O fluxo de integração (banco e e-mail) entrará aqui depois.
  return { success: true };
}