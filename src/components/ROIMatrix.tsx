import { Calculator, ArrowRight, Wallet, Zap, Clock, ShieldCheck } from "lucide-react";

export function ROIMatrix() {
  return (
    <section className="w-full py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background de engenharia estrito */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-slate-800 border border-slate-700">
            <Calculator className="w-4 h-4 text-mineral-yellow" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Comparativo de Lucratividade</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            O potencial de lucro do <br/>seu estacionamento
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Simulação baseada em um investimento médio de R$ 150.000. Vender recarga para veículos elétricos gera um retorno financeiro muito superior ao aluguel comercial tradicional da mesma área.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Coluna 1: Ativo Tradicional (Ocioso/Locação) */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col justify-between grayscale opacity-80">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-xl font-bold text-slate-400">Aluguel Tradicional (Imóvel)</h3>
                <Wallet className="w-6 h-6 text-slate-600" />
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Retorno Anual Médio</p>
                  <p className="text-3xl font-bold text-slate-300">6% a 8%</p>
                </div>
                <div className="border-b border-slate-800 pb-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Recuperação do Investimento</p>
                  <p className="text-3xl font-bold text-slate-300">12 a 15 anos</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Forma de Ganho</p>
                  <p className="text-xl font-bold text-slate-400">Valor fixo mensal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Estação de Recarga Fast Charge */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-10 flex flex-col justify-between relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-mineral-orange to-mineral-yellow"></div>
            <div className="absolute -top-24 -right-24 bg-mineral-yellow/10 w-64 h-64 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-2xl font-bold text-white">Estação de Recarga Rápida</h3>
                <Zap className="w-8 h-8 text-mineral-yellow" />
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-slate-700 pb-4">
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Margem de Lucro (Energia)</p>
                  <p className="text-4xl font-bold text-mineral-yellow">35% a 50%</p>
                </div>
                <div className="border-b border-slate-700 pb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Recuperação do Investimento</p>
                    <p className="text-4xl font-bold text-white">24 a 36 meses</p>
                  </div>
                  <Clock className="w-8 h-8 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Forma de Ganho</p>
                  <p className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-400" /> Venda automática via App
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-slate-700 flex items-center justify-between">
              <span className="text-sm text-slate-400 font-medium">* Baseado em um fluxo diário de 10 veículos.</span>
              <a href="#simulador" className="text-mineral-orange hover:text-white font-bold flex items-center gap-2 transition-colors">
                Fazer Minha Simulação <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}