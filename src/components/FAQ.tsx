import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="w-full py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Especificações e Operação
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Esclarecimentos técnicos referentes à infraestrutura e gestão da estação.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-slate-200 bg-white px-6 data-[state=open]:border-mineral-blue transition-colors">
            <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-900 hover:no-underline py-6">
              Qual a necessidade de aumento de carga junto à concessionária?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pb-6">
              Carregadores Fast Charge (acima de 40kW DC) exigem demanda contratada compatível. Nossa engenharia realiza o estudo do quadro geral de baixa tensão (QGBT) atual e, se necessário, executa o trâmite legal de solicitação de aumento de carga diretamente com a concessionária estadual.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-slate-200 bg-white px-6 data-[state=open]:border-mineral-blue transition-colors">
            <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-900 hover:no-underline py-6">
              Como é realizada a cobrança pela recarga?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pb-6">
              As estações WEG operam integradas a um software de gestão (OCPP). O usuário final desbloqueia a recarga via aplicativo de smartphone, e o pagamento (cartão de crédito/Pix) é processado automaticamente, sendo o valor líquido depositado diretamente na conta do proprietário do ponto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-slate-200 bg-white px-6 data-[state=open]:border-mineral-blue transition-colors">
            <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-900 hover:no-underline py-6">
              Qual é a política de manutenção e garantia dos equipamentos?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pb-6">
              Os equipamentos WEG possuem garantia de fábrica estruturada para operações severas industriais. A manutenção preventiva, atualizações de firmware e suporte remoto são contemplados no escopo de serviço, minimizando o tempo de inatividade da máquina (downtime).
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-slate-200 bg-white px-6 data-[state=open]:border-mineral-blue transition-colors">
            <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-900 hover:no-underline py-6">
              Qual o impacto em vagas de estacionamento existentes?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pb-6">
              Cada estação de recarga converte de 1 a 2 vagas tradicionais em vagas preferenciais para veículos elétricos. Além da receita da energia, isso eleva o tempo de permanência do cliente (dwell time) no estabelecimento secundário (ex: loja de conveniência ou supermercado).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}