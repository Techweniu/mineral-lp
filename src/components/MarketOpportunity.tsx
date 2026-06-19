import { TrendingUp, CarFront, BarChart3, BatteryCharging } from "lucide-react";

export function MarketOpportunity() {
  return (
    <section className="w-full py-32 bg-slate-50 relative overflow-hidden">
      {/* Linha de separação super sutil no topo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho Editorial */}
        <div className="mb-20 max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            A frota elétrica explodiu. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mineral-orange to-mineral-yellow">
              A infraestrutura não acompanhou.
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            O número de veículos elétricos cresce a cada dia, mas faltam pontos de recarga adequados. Transforme as vagas ociosas do seu estacionamento na solução exata que esses motoristas procuram.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card Principal (Colunas 1 a 8) - Foco em Demanda */}
          <div className="md:col-span-8 bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
             {/* Elemento de background decorativo */}
             <div className="absolute -top-12 -right-12 bg-slate-50 w-64 h-64 rounded-full border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <CarFront className="w-32 h-32 text-slate-200/50" />
             </div>
             
             <div className="relative z-10">
               <div className="w-16 h-16 rounded-2xl bg-blue-50 text-mineral-blue flex items-center justify-center mb-8 border border-blue-100 shadow-inner">
                 <BarChart3 className="w-8 h-8" />
               </div>
               <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4">Tráfego Altamente Qualificado</h3>
               <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                 Motoristas de carros elétricos planejam suas rotas buscando locais de recarga confiáveis. Ofereça essa comodidade e faça do seu comércio um destino obrigatório, atraindo um público que consome no seu estabelecimento enquanto aguarda o veículo carregar.
               </p>
             </div>
          </div>

          {/* Card Secundário (Colunas 9 a 12) - Foco Financeiro (Dark Mode Invertido) */}
          <div className="md:col-span-4 bg-slate-900 rounded-3xl p-10 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between hover:border-slate-700 transition-colors">
             <div className="absolute top-0 right-0 bg-mineral-yellow text-slate-900 text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-bl-2xl shadow-md">
               Gestão Zero
             </div>
             <div>
               <div className="w-16 h-16 rounded-2xl bg-slate-800/80 backdrop-blur-md flex items-center justify-center mb-8 border border-slate-700 shadow-inner">
                 <TrendingUp className="w-8 h-8 text-mineral-yellow" />
               </div>
               <h3 className="font-heading text-2xl font-bold mb-4">Renda Automática 24/7</h3>
               <p className="text-slate-400 leading-relaxed">
                 O equipamento trabalha por você. Todo o processo de cobrança e liberação de energia é feito via aplicativo, sem necessidade de contratar novos funcionários ou gerenciar estoque.
               </p>
             </div>
          </div>

          {/* Card Amplo Inferior (12 Colunas) - Foco Técnico com Mini-Gráfico Visual */}
          <div className="md:col-span-12 bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-12 hover:shadow-xl transition-all duration-500">
             <div className="w-full md:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-mineral-orange flex items-center justify-center mb-6 border border-orange-100 shadow-inner">
                  <BatteryCharging className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4">Recarga Ultrarrápida</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Não instalamos carregadores residenciais lentos. Nossas estações comerciais possuem alta potência (Fast Charge). Entregamos recargas em minutos, o que garante um alto giro de veículos por dia.
                </p>
             </div>
             
             {/* Micro-Dashboard Integrado (Simulação Visual) */}
             <div className="w-full md:w-1/2 h-64 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                
                <div className="w-full max-w-sm flex items-end justify-between gap-4 h-full relative z-10 pt-10">
                   <div className="w-1/4 bg-slate-200 rounded-t-lg h-[30%] relative group transition-all hover:bg-slate-300">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">7kW</span>
                   </div>
                   <div className="w-1/4 bg-slate-300 rounded-t-lg h-[50%] relative group transition-all hover:bg-slate-400">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">22kW</span>
                   </div>
                   <div className="w-1/4 bg-slate-400 rounded-t-lg h-[70%] relative group transition-all hover:bg-slate-500">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600">60kW</span>
                   </div>
                   <div className="w-1/4 bg-gradient-to-t from-mineral-orange to-mineral-yellow rounded-t-lg h-[100%] relative group shadow-[0_0_20px_rgba(241,113,60,0.3)]">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-black text-mineral-orange">150kW</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}