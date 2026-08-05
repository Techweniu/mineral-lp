"use client";

import { ArrowRight, ShieldCheck, Zap, Cog, Activity } from "lucide-react";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-slate-950 text-white pt-28 pb-16">
      
      {/* Camada 1: Fundo Otimizado para LCP */}
      <div className="absolute inset-0 z-0 bg-slate-950" aria-hidden="true">
        <Image 
          src="/images/background-hero.webp"
          alt="Estação de Recarga Rápida"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
      </div>

      {/* Camadas Gradientes de Mascaramento */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Layout Grid 2 Colunas no Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-600/50 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-mineral-yellow" />
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-200">Parceiro Homologado WEG</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
              Transforme seu Estacionamento em um <span className="text-mineral-yellow">Negócio Lucrativo.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 mb-8 font-medium leading-relaxed drop-shadow-md">
              <span className="text-mineral-yellow font-bold block mb-2 text-lg md:text-xl">
                Invista no mercado que mais cresce no Brasil, comece a lucrar!
              </span>
              Instale estações de recarga rápida para veículos elétricos. Nossa engenharia executa o projeto integralmente — da aprovação na concessionária à instalação —, atraindo clientes premium e gerando renda passiva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 md:mb-12">
              <a 
                href="https://wa.me/553499466334?text=Olá,%20gostaria%20de%20falar%20com%20um%20engenheiro%20sobre%20projetos%20de%20recarga%20EV."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-mineral-orange hover:bg-[#d95a26] text-white font-heading font-bold h-14 px-8 text-lg shadow-[0_0_40px_-10px_rgba(241,113,60,0.5)] transition-all"
              >
                Começar a lucrar agora! <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#solucoes" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold h-14 px-8 text-lg backdrop-blur-md transition-all"
              >
                Como Funciona
              </a>
            </div>

            {/* Grid de Atributos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-slate-800/50 pt-8">
              
              <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-lg">
                <div className="bg-mineral-yellow/20 p-3 rounded-lg shrink-0">
                  <Zap className="w-5 h-5 text-mineral-yellow" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Recarga Rápida</p>
                  <p className="font-heading font-bold text-sm md:text-base text-white">Até 150 kW (DC)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-lg">
                <div className="bg-mineral-orange/20 p-3 rounded-lg shrink-0">
                  <Cog className="w-5 h-5 text-mineral-orange" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Implantação</p>
                  <p className="font-heading font-bold text-sm md:text-base text-white">Ponta a Ponta</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-lg">
                <div className="bg-green-500/20 p-3 rounded-lg shrink-0">
                  <Activity className="w-5 h-5 text-green-400 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Operação</p>
                  <p className="font-heading font-bold text-sm md:text-base text-white">Suporte 24 Horas</p>
                </div>
              </div>

            </div>

          </div>

          {/* Coluna Direita: Card do Formulário no Topo */}
          <div className="lg:col-span-5 w-full z-20">
            <div className="w-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl relative">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mineral-yellow/10 border border-mineral-yellow/30 text-mineral-yellow text-xs font-bold uppercase tracking-wider mb-3">
                  Análise de Viabilidade Gratuita
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Preencha e descubra o potencial do seu ponto
                </h2>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Sem compromisso inicial. Dimensionamos o CapEx e a viabilidade técnica do seu estacionamento.
                </p>
              </div>
              
              <LeadForm variant="hero" />

              <p className="text-center text-[11px] text-slate-500 mt-4 font-medium">
                🔒 Seus dados estão seguros. Atendimento direto da engenharia Mineral.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}