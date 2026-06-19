import { ArrowRight, ShieldCheck, Zap, Cog, Activity } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
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
        
        {/* Coluna de Texto Centralizada */}
        <div className="flex flex-col items-start text-left max-w-3xl z-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-600/50 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-mineral-yellow" />
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-200">Parceiro Homologado WEG</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
            Transforme seu Estacionamento em um <span className="text-mineral-yellow">Negócio Lucrativo.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 mb-8 font-medium max-w-2xl leading-relaxed drop-shadow-md">
            Instale estações de recarga rápida para veículos elétricos. Nossa engenharia executa o projeto integralmente da aprovação na concessionária à instalação, atraindo clientes premium e gerando renda passiva.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 md:mb-12">
            <a 
              href="#simulador" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-mineral-orange hover:bg-[#d95a26] text-white font-heading font-bold h-14 px-8 text-lg shadow-[0_0_40px_-10px_rgba(241,113,60,0.5)] transition-all"
            >
              Solicitar Estudo Gratuito <ArrowRight className="ml-2 w-5 h-5" />
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
      </div>
    </section>
  );
}