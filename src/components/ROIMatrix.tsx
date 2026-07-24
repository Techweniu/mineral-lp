"use client";

import { Wallet, Zap, Clock, TrendingUp } from "lucide-react";

export function ROIMatrix() {
  return (
    <section id="roi" className="w-full py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-slate-100 border border-slate-200">
            <span className="text-xs font-bold tracking-widest uppercase text-slate-700">Comparativo de Lucratividade</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            O potencial de lucro do seu estacionamento
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Simulação baseada em um investimento médio de R$ 150.000. Vender recarga para veículos elétricos gera um retorno financeiro muito superior ao aluguel comercial tradicional da mesma área.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-slate-200 shadow-sm">
          
          {/* Coluna 1: Ativo Tradicional */}
          <div className="bg-slate-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-700">Aluguel Tradicional</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Retorno Anual Médio</p>
                  <p className="text-4xl font-bold text-slate-400">6% a 8%</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Recuperação do Investimento</p>
                  <p className="text-2xl font-bold text-slate-600">12 a 15 anos</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Formato de Receita</p>
                  <p className="text-lg font-bold text-slate-700">Valor fixo mensal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Estação de Recarga Fast Charge */}
          <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-mineral-orange"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-mineral-orange flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Estação de Recarga Rápida</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Margem de Lucro (Energia)</p>
                  <p className="text-5xl font-black text-mineral-yellow">35% a 50%</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Recuperação do Investimento</p>
                  <div className="flex items-center gap-3">
                    <p className="text-3xl font-bold text-white">24 a 36 meses</p>
                    <Clock className="w-6 h-6 text-slate-500" />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Formato de Receita</p>
                  <p className="text-lg font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-mineral-orange" /> Venda automática via App
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">* Baseado em fluxo diário de 10 veículos.</span>
              <a href="#simulador" className="text-sm font-bold text-mineral-orange hover:text-white uppercase tracking-wide transition-colors">
                Fazer Simulação &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}