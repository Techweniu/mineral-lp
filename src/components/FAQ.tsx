import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="w-full py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            Especificações e Operação
          </h2>
          <p className="text-slate-600">Esclarecimentos técnicos referentes à infraestrutura e gestão da estação.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-bold text-slate-800">Qual a necessidade de aumento de carga junto à concessionária?</AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              Carregadores Fast Charge (acima de 40kW DC) exigem demanda contratada compatível. Nossa engenharia realiza o estudo do quadro geral de baixa tensão (QGBT) atual e, se necessário, executa o trâmite legal de solicitação de aumento de carga diretamente com a concessionária estadual.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-bold text-slate-800">Como é realizada a cobrança pela recarga?</AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              As estações WEG operam integradas a um software de gestão (OCPP). O usuário final desbloqueia a recarga via aplicativo de smartphone, e o pagamento (cartão de crédito/Pix) é processado automaticamente, sendo o valor líquido depositado diretamente na conta do proprietário do ponto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-bold text-slate-800">Qual é a política de manutenção e garantia dos equipamentos?</AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              Os equipamentos WEG possuem garantia de fábrica estruturada para operações severas industriais. A manutenção preventiva, atualizações de firmware e suporte remoto são contemplados no escopo de serviço, minimizando o tempo de inatividade da máquina (downtime).
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-bold text-slate-800">Qual o impacto em vagas de estacionamento existentes?</AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed">
              Cada estação de recarga converte de 1 a 2 vagas tradicionais em vagas preferenciais para veículos elétricos. Além da receita da energia, isso eleva o tempo de permanência do cliente (dwell time) no estabelecimento secundário (ex: loja de conveniência ou supermercado).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}