"use client";

import { BatteryCharging, TrendingUp, Zap, MapPin } from "lucide-react";

export function MarketOpportunity() {
  return (
    <section id="oportunidade" className="w-full py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            A Janela de Oportunidade
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            O mercado de mobilidade elétrica no Brasil dobrou em 2023. Enquanto as vendas de veículos elétricos disparam, a infraestrutura de recarga não acompanha esse ritmo. Isso cria uma janela de oportunidade sem precedentes para proprietários de espaços comerciais.
          </p>
        </div>

        {/* Bento Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[320px]">
          
          {/* Card 1: Dark (24/7) */}
          <div className="md:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Zap className="w-32 h-32 text-mineral-orange" />
            </div>
            <div className="relative z-10">
               <div className="inline-flex items-center justify-center w-12 h-12 bg-mineral-orange text-white mb-6">
                <BatteryCharging className="w-6 h-6" />
               </div>
               <h3 className="font-heading text-3xl font-bold mb-3">Rentabilidade 24/7</h3>
               <p className="text-slate-400 max-w-md text-base leading-relaxed">
                 Transforme espaços ociosos em ativos de alta performance. Uma estação de recarga rápida opera ininterruptamente, gerando receita recorrente sem necessidade de funcionários locais.
               </p>
            </div>
          </div>

          {/* Card 2: Light (Tráfego Qualificado) */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 text-mineral-blue mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Tráfego Qualificado</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proprietários de veículos elétricos possuem alto poder aquisitivo. Ao oferecer recarga, você atrai esse público para consumir no seu estabelecimento (shoppings, supermercados, hotéis) enquanto o veículo carrega.
              </p>
            </div>
          </div>

          {/* Card 3: Mini gráfico de potência */}
          <div className="bg-mineral-blue text-white p-8 flex flex-col justify-between md:col-span-1">
             <div>
              <h3 className="font-heading text-xl font-bold mb-1">Demanda Escalável</h3>
              <p className="text-mineral-yellow/80 text-sm font-semibold uppercase tracking-wider mb-6">Evolução de Potência</p>
             </div>
             
             {/* Gráfico Minimalista */}
             <div className="flex items-end justify-between h-32 gap-2 border-b border-white/20 pb-2">
                <div className="w-1/4 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-white/20 h-[20%] hover:bg-white/40 transition-colors"></div>
                  <span className="text-[10px] font-bold mt-2">7kW</span>
                </div>
                <div className="w-1/4 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-white/40 h-[40%] hover:bg-white/60 transition-colors"></div>
                  <span className="text-[10px] font-bold mt-2">22kW</span>
                </div>
                <div className="w-1/4 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-white/60 h-[60%] hover:bg-white/80 transition-colors"></div>
                  <span className="text-[10px] font-bold mt-2">60kW</span>
                </div>
                <div className="w-1/4 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-mineral-yellow h-[100%] shadow-[0_0_15px_rgba(251,203,42,0.4)]"></div>
                  <span className="text-[10px] font-bold mt-2 text-mineral-yellow">150kW</span>
                </div>
             </div>
          </div>

          {/* Card 4: Light Textura */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-center items-start md:col-span-2 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10 flex items-start gap-6">
              <div className="shrink-0 p-4 bg-slate-50 border border-slate-100">
                <TrendingUp className="w-8 h-8 text-slate-800" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Engenharia Comercial</h3>
                <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
                  Não somos apenas integradores. Desenhamos o modelo de negócio (CapEx / OpEx) para garantir que sua estação seja dimensionada para o máximo de TIR (Taxa Interna de Retorno).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}