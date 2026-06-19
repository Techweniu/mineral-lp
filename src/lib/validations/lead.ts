import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$|^\d{14}$/;

const investmentOptions = [
  "menos_50k",
  "50k_a_100k",
  "100k_a_200k",
  "mais_200k"
] as const;

const pointOptions = [
  "posto_combustivel",
  "padaria_supermercado",
  "farmacia_academia",
  "investidor_sem_ponto",
  "outro"
] as const;

export const leadSchema = z.object({
  name: z.string().min(3, { message: "Nome obrigatório." }),
  email: z.string().email({ message: "E-mail corporativo inválido." }),
  phone: z.string().regex(phoneRegex, { message: "Telefone inválido." }),
  cnpj: z.string().regex(cnpjRegex, { message: "CNPJ inválido." }),
  investmentCapital: z.enum(investmentOptions, {
    message: "Selecione o capital de investimento.",
  }),
  pointType: z.enum(pointOptions, {
    message: "Selecione o tipo do local.",
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;