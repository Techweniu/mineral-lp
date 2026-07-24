import { ArrowRight, ShieldCheck, Zap, Cog, Activity, Sparkles, Building2, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-slate-950 text-white pt-28 pb-20 overflow-hidden">
      
      {/* Background Micro-Grid de Engenharia Anti-Slop */}
      <div 
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Glow discreto nas cores institucionais (Laranja & Amarelo Mineral, sem roxo genérico) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-mineral-orange/15 via-mineral-yellow/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Principal: Proposta de Valor */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Badge de Homologação / Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-mineral-yellow shrink-0" />
              <span className="text-xs font-mono tracking-wider uppercase text-slate-200 font-semibold">
                Parceiro Homologado WEG · Engenharia Turnkey
              </span>
            </div>

            {/* Headline Anti-Slop (Direta, 2 linhas no desktop) */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white drop-shadow-md">
              Rentabilize seu estacionamento com <span className="text-transparent bg-clip-text bg-gradient-to-r from-mineral-yellow via-mineral-orange to-amber-500">recarga rápida de veículos elétricos.</span>
            </h1>

            {/* Subtítulo sucinto (max 25 palavras) */}
            <p className="text-base md:text-lg text-slate-300 font-medium max-w-xl leading-relaxed">
              Engenharia completa da aprovação na concessionária à instalação e gestão da estação. Atraia clientes premium e gere renda passiva.
            </p>

            {/* CTAs de Alta Conversão */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a 
                href="#simulador" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-mineral-orange hover:bg-[#d95a26] text-white font-heading font-bold h-13 px-8 text-base shadow-[0_0_30px_-5px_rgba(241,113,60,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Solicitar Estudo Gratuito <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#solucoes" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-heading font-semibold h-13 px-7 text-base backdrop-blur-md transition-all"
              >
                Ver Como Funciona
              </a>
            </div>

            {/* Micro-prova social / Indicadores */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-400 font-mono border-t border-slate-800/80 w-full">
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-mineral-yellow" /> Projeto Turnkey 100% Legalizado</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> ROI em 24-36 Meses</span>
            </div>

          </div>

          {/* Coluna Secundária: Widget Interativo da Estação WEG 150kW */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Estação de Recarga Operacional</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-mineral-yellow/10 text-mineral-yellow border border-mineral-yellow/30 font-bold">
                  WEG Fast Charge
                </span>
              </div>

              {/* Métricas Dinâmicas de Performance */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Potência Máxima</p>
                  <p className="font-heading font-bold text-2xl text-white mt-1">150 kW <span className="text-xs text-mineral-yellow font-normal">DC</span></p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Tempo de Carga</p>
                  <p className="font-heading font-bold text-2xl text-emerald-400 mt-1">15 - 30 min</p>
                </div>
              </div>

              {/* Status de Atendimento ao Vivo */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-mineral-orange" /> Modelo de Negócio</span>
                  <span className="font-semibold text-white">Venda por kWh</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-mineral-orange to-mineral-yellow h-full w-[85%] rounded-full" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>Gestão Automática</span>
                  <span>Sem Funcionários</span>
                </div>
              </div>

              <div className="text-center pt-1">
                <p className="text-xs text-slate-400 font-mono">Simule o retorno financeiro do seu imóvel abaixo ↓</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}