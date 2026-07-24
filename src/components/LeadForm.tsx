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
import { AlertCircle, CheckCircle2 } from "lucide-react";

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
      if (typeof window !== "undefined") {
        if (typeof window.fbq === "function") {
          console.info("[Pixel Meta] Registrando evento 'Lead'...");
          window.fbq("track", "Lead");
        }
      }
      setSubmitStatus({ success: true, message: "Solicitação enviada para nossa engenharia. Entraremos em contato em até 48 horas." });
      form.reset();
    }
    
    setIsSubmitting(false);
  }

  if (submitStatus?.success) {
    return (
      <div className="p-8 bg-slate-900 border-l-4 border-mineral-orange text-left">
        <CheckCircle2 className="w-8 h-8 text-mineral-orange mb-4" />
        <h3 className="font-heading text-xl font-bold text-white mb-2">Viabilidade Recebida</h3>
        <p className="text-slate-400 font-medium">{submitStatus.message}</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-700">Nome Completo</FormLabel>
            <FormControl>
              <Input className="rounded-none border-slate-300 focus:border-mineral-blue focus:ring-0 shadow-none h-12 bg-white text-slate-900" placeholder="Identificação corporativa" {...field} />
            </FormControl>
            <FormMessage className="text-xs text-[#D32F2F] font-semibold" />
          </FormItem>
        )} />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-700">E-mail Corporativo</FormLabel>
              <FormControl>
                <Input className="rounded-none border-slate-300 focus:border-mineral-blue focus:ring-0 shadow-none h-12 bg-white text-slate-900" type="email" placeholder="gestao@empresa.com.br" {...field} />
              </FormControl>
              <FormMessage className="text-xs text-[#D32F2F] font-semibold" />
            </FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-700">WhatsApp</FormLabel>
              <FormControl>
                <Input className="rounded-none border-slate-300 focus:border-mineral-blue focus:ring-0 shadow-none h-12 bg-white text-slate-900" placeholder="(00) 00000-0000" {...field} />
              </FormControl>
              <FormMessage className="text-xs text-[#D32F2F] font-semibold" />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="cnpj" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-700">CNPJ</FormLabel>
            <FormControl>
              <Input className="rounded-none border-slate-300 focus:border-mineral-blue focus:ring-0 shadow-none h-12 bg-white text-slate-900" placeholder="00.000.000/0000-00" {...field} />
            </FormControl>
            <FormMessage className="text-xs text-[#D32F2F] font-semibold" />
          </FormItem>
        )} />

        <FormField control={form.control} name="pointType" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-700">Perfil do Ponto Comercial</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="rounded-none border-slate-300 focus:border-mineral-blue focus:ring-0 shadow-none h-12 bg-white text-slate-900">
                  <SelectValue placeholder="Selecione a tipologia" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="rounded-none border-slate-200">
                <SelectItem value="posto_combustivel">Posto de Combustível</SelectItem>
                <SelectItem value="padaria_supermercado">Centro Comercial / Supermercado</SelectItem>
                <SelectItem value="farmacia_academia">Varejo de Fluxo (Farmácia / Academia)</SelectItem>
                <SelectItem value="investidor_sem_ponto">Greenfield (Investidor sem ponto)</SelectItem>
                <SelectItem value="outro">Outros</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage className="text-xs text-[#D32F2F] font-semibold" />
          </FormItem>
        )} />

        <FormField control={form.control} name="investmentCapital" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-700">Disponibilidade de CapEx</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="rounded-none border-slate-300 focus:border-mineral-blue focus:ring-0 shadow-none h-12 bg-white text-slate-900">
                  <SelectValue placeholder="Selecione o teto de investimento" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="rounded-none border-slate-200">
                <SelectItem value="menos_50k">Até R$ 50.000</SelectItem>
                <SelectItem value="50k_a_100k">R$ 50.000 a R$ 100.000</SelectItem>
                <SelectItem value="100k_a_200k">R$ 100.000 a R$ 200.000</SelectItem>
                <SelectItem value="mais_200k">Acima de R$ 200.000</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage className="text-xs text-[#D32F2F] font-semibold" />
          </FormItem>
        )} />

        {submitStatus && !submitStatus.success && (
          <div className="flex items-start gap-3 p-4 bg-[#FFF4F4] border border-[#FFCDD2] text-[#D32F2F]">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold">{submitStatus.message}</p>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full rounded-none bg-mineral-blue hover:bg-slate-900 text-white font-bold h-14 text-sm uppercase tracking-widest transition-colors shadow-none" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processando..." : "Submeter para Análise"}
        </Button>
      </form>
    </Form>
  );
}