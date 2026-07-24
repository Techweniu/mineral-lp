import { Map, HardHat, PlugZap, ShieldCheck } from "lucide-react";

export function TurnkeyProcess() {
  const steps = [
    {
      id: "01",
      icon: Map,
      title: "Estudo e Projeto",
      description: "Avaliamos a capacidade elétrica atual do seu imóvel e elaboramos o projeto exato para garantir o melhor custo-benefício na instalação."
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: "Trâmites Legais",
      description: "Resolvemos 100% da burocracia com a concessionária de energia local para aprovar o aumento de carga, sem que você precise intervir."
    },
    {
      id: "03",
      icon: HardHat,
      title: "Obra e Instalação",
      description: "Executamos a adequação do local com obras civis e elétricas rápidas, focando em segurança e na mínima interferência na sua rotina."
    },
    {
      id: "04",
      icon: PlugZap,
      title: "Ativação e Software",
      description: "Instalamos o equipamento WEG, configuramos o aplicativo de cobrança e entregamos a estação pronta para gerar faturamento."
    }
  ];

  return (
    <section id="solucoes" className="w-full py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Processo de Implantação Completa
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Você disponibiliza o espaço e o capital. Nossa equipe executa toda a operação, do projeto inicial até a máquina começar a faturar.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-4 py-2 bg-slate-900 text-white font-bold text-sm tracking-widest uppercase">
              Turnkey 360°
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative flex flex-col group">
              {/* Top border indicator */}
              <div className="h-1 w-full bg-slate-100 mb-8 relative">
                <div className={`absolute top-0 left-0 h-full bg-mineral-blue transition-all duration-500 w-0 group-hover:w-full`}></div>
                {/* Fixed marker */}
                <div className="absolute -top-1.5 left-0 w-4 h-4 bg-slate-900"></div>
              </div>
              
              <div className="mb-6 flex justify-between items-start">
                <span className="text-4xl font-black text-slate-200 group-hover:text-mineral-orange transition-colors">
                  {step.id}
                </span>
                <step.icon className="w-6 h-6 text-slate-400 group-hover:text-mineral-blue transition-colors" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}