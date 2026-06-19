"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { leadSchema, LeadFormData } from "@/lib/validations/lead";
import { processLead } from "@/app/actions/lead";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cnpj: "",
      investmentCapital: undefined,
      pointType: undefined,
    },
  });

  async function onSubmit(data: LeadFormData) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const response = await processLead(data);

    if (response.error) {
      setSubmitStatus({ success: false, message: response.error });
    } else {
      setSubmitStatus({ success: true, message: "Solicitação enviada para nossa engenharia." });
      form.reset();
    }
    
    setIsSubmitting(false);
  }

  if (submitStatus?.success) {
    return (
      <div className="p-6 bg-green-50 text-green-900 border border-green-200 rounded-lg text-center">
        <p className="font-bold">{submitStatus.message}</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem><FormLabel>Nome Completo</FormLabel><FormControl><Input placeholder="Identificação corporativa" {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>E-mail Corporativo</FormLabel><FormControl><Input type="email" placeholder="gestao@empresa.com.br" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem><FormLabel>WhatsApp</FormLabel><FormControl><Input placeholder="(00) 00000-0000" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        </div>

        <FormField control={form.control} name="cnpj" render={({ field }) => (
          <FormItem><FormLabel>CNPJ</FormLabel><FormControl><Input placeholder="00.000.000/0000-00" {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <FormField control={form.control} name="pointType" render={({ field }) => (
          <FormItem>
            <FormLabel>Perfil do Ponto Comercial</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl><SelectTrigger><SelectValue placeholder="Selecione a tipologia" /></SelectTrigger></FormControl>
              <SelectContent>
                <SelectItem value="posto_combustivel">Posto de Combustível</SelectItem>
                <SelectItem value="padaria_supermercado">Centro Comercial / Supermercado</SelectItem>
                <SelectItem value="farmacia_academia">Varejo de Fluxo (Farmácia/Academia)</SelectItem>
                <SelectItem value="investidor_sem_ponto">Greenfield (Investidor sem ponto)</SelectItem>
                <SelectItem value="outro">Outros</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="investmentCapital" render={({ field }) => (
          <FormItem>
            <FormLabel>Disponibilidade de CapEx</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl><SelectTrigger><SelectValue placeholder="Selecione o teto de investimento" /></SelectTrigger></FormControl>
              <SelectContent>
                <SelectItem value="menos_50k">Até R$ 50.000</SelectItem>
                <SelectItem value="50k_a_100k">R$ 50.000 a R$ 100.000</SelectItem>
                <SelectItem value="100k_a_200k">R$ 100.000 a R$ 200.000</SelectItem>
                <SelectItem value="mais_200k">Acima de R$ 200.000</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        {submitStatus && !submitStatus.success && (
          <div className="text-red-600 text-sm font-medium text-center bg-red-50 p-3 rounded-md border border-red-200">
            {submitStatus.message}
          </div>
        )}

        <Button type="submit" className="w-full bg-mineral-orange hover:bg-orange-600 text-white font-bold py-6 text-lg" disabled={isSubmitting}>
          {isSubmitting ? "Processando..." : "Submeter para Análise"}
        </Button>
      </form>
    </Form>
  );
}