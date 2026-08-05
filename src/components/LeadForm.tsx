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

interface LeadFormProps {
  variant?: "default" | "hero";
}

export function LeadForm({ variant = "default" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const isHero = variant === "hero";

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
          console.info("[Pixel Meta] Evento 'Lead' registrado com sucesso!");
        } else {
          console.warn("[Pixel Meta] AVISO: 'window.fbq' não encontrado. O Pixel não carregou na página ou foi bloqueado por alguma extensão.");
        }
      }
      setSubmitStatus({ success: true, message: "Solicitação enviada para nossa engenharia." });
      form.reset();
    }
    
    setIsSubmitting(false);
  }

  if (submitStatus?.success) {
    return (
      <div className={`p-6 ${isHero ? "bg-emerald-950/80 text-emerald-200 border border-emerald-800" : "bg-green-50 text-green-900 border border-green-200"} rounded-xl text-center`}>
        <p className="font-bold text-lg">{submitStatus.message}</p>
        <p className="text-xs mt-2 opacity-90">Entraremos em contato via WhatsApp/E-mail nas próximas horas.</p>
      </div>
    );
  }

  const labelClass = isHero ? "text-slate-200 font-medium text-xs md:text-sm" : "text-slate-700 font-medium text-sm";
  const inputClass = isHero 
    ? "h-11 bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500 focus:border-mineral-orange focus:ring-mineral-orange/40 text-sm" 
    : "h-11 text-sm";
  const selectTriggerClass = isHero 
    ? "h-11 bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500 focus:ring-mineral-orange/40 text-sm" 
    : "h-11 text-sm";
  const selectContentClass = isHero 
    ? "bg-slate-900 border-slate-700 text-slate-100" 
    : "bg-white text-slate-900";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${isHero ? "space-y-4" : "space-y-6"} text-left`}>
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel className={labelClass}>Nome Completo</FormLabel>
            <FormControl>
              <Input placeholder="Identificação corporativa" className={inputClass} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>E-mail Corporativo</FormLabel>
              <FormControl>
                <Input type="email" placeholder="gestao@empresa.com.br" className={inputClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="(00) 00000-0000" className={inputClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="cnpj" render={({ field }) => (
          <FormItem>
            <FormLabel className={labelClass}>CNPJ</FormLabel>
            <FormControl>
              <Input placeholder="00.000.000/0000-00" className={inputClass} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField control={form.control} name="pointType" render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Perfil do Ponto Commercial</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={selectTriggerClass}>
                    <SelectValue placeholder="Selecione a tipologia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className={selectContentClass}>
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
              <FormLabel className={labelClass}>Disponibilidade de CapEx</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={selectTriggerClass}>
                    <SelectValue placeholder="Selecione o teto de investimento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className={selectContentClass}>
                  <SelectItem value="menos_50k">Até R$ 50.000</SelectItem>
                  <SelectItem value="50k_a_100k">R$ 50.000 a R$ 100.000</SelectItem>
                  <SelectItem value="100k_a_200k">R$ 100.000 a R$ 200.000</SelectItem>
                  <SelectItem value="mais_200k">Acima de R$ 200.000</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {submitStatus && !submitStatus.success && (
          <div className="text-red-400 text-sm font-medium text-center bg-red-950/80 p-3 rounded-md border border-red-800">
            {submitStatus.message}
          </div>
        )}

        <Button 
          type="submit" 
          className={`w-full bg-mineral-orange hover:bg-[#d95a26] text-white font-heading font-bold ${isHero ? "h-13 text-base shadow-[0_0_25px_-5px_rgba(241,113,60,0.4)]" : "h-14 text-lg shadow-lg"} transition-all`} 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processando..." : "Submeter para Análise Gratuita"}
        </Button>
      </form>
    </Form>
  );
}