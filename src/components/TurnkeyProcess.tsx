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
    <section className="w-full py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Processo de Implantação Completa
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl">
            Você disponibiliza o espaço e o capital. Nossa equipe executa toda a operação, do projeto inicial até a máquina começar a faturar.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Linha conectora oculta em mobile */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-slate-200 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-mineral-blue" />
              </div>
              <div className="text-sm font-black text-slate-300 mb-2">FASE {step.id}</div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}