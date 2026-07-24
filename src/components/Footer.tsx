import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-20 pb-8 border-t-4 border-mineral-blue z-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5">
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/logo-mineral-icon.webp" 
                  alt="Ícone Mineral Engenharia" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
                <span className="font-heading font-black text-2xl text-white tracking-tight uppercase">MINERAL ENGENHARIA</span>
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">MINERAL PROJETOS E CONSULTORIA ENERGETICA LTDA</span>
              <span className="text-xs text-slate-500 font-bold tracking-widest">CNPJ: 49.088.664/0001-43</span>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <a 
                href="https://www.instagram.com/mineralgestaoenergetica/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-slate-800 flex items-center justify-center hover:bg-mineral-orange hover:text-white transition-colors"
                aria-label="Instagram da Mineral Engenharia"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/Mineral-Projetos-e-Consultoria/61561771711417/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-slate-800 flex items-center justify-center hover:bg-mineral-orange hover:text-white transition-colors"
                aria-label="Facebook da Mineral Engenharia"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border-l-2 border-mineral-blue text-xs font-bold text-slate-300 uppercase tracking-widest">
              Parceiro Homologado WEG
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-4">Contato Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-mineral-orange" />
                <span className="leading-relaxed">Av. Iraque, 370 - Sala 01 Loja<br/>Loteamento Botânico<br/>Uberlândia - MG, 38410-663</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 shrink-0 text-mineral-orange" />
                <span>comercial@mineralprojetoeconsultoria.com.br</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 shrink-0 text-mineral-orange" />
                <span>+55 (34) 9946-6334</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-slate-800 pb-4">Compliance LGPD</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li>
                <Dialog>
                  <DialogTrigger className="hover:text-mineral-orange transition-colors cursor-pointer uppercase tracking-wider text-xs">
                    Termos de Uso
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-none border-none">
                    <DialogHeader>
                      <DialogTitle className="font-heading font-black text-2xl text-slate-900 border-b border-slate-200 pb-4 mb-4">Termos de Uso</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm text-slate-700 space-y-6">
                      <p><strong>1. Aceitação dos Termos:</strong> Ao utilizar esta página para submeter seus dados corporativos, você concorda com as condições descritas nestes Termos de Uso. O objetivo deste canal é estritamente B2B (Business-to-Business) para fins de estudo de viabilidade em infraestrutura de recarga elétrica.</p>
                      <p><strong>2. Natureza da Solicitação:</strong> O preenchimento do formulário de viabilidade não estabelece vínculo contratual, prestação de serviços ou obrigatoriedade de investimento. Trata-se de uma etapa preliminar de qualificação técnica.</p>
                      <p><strong>3. Propriedade Intelectual:</strong> Todos os materiais estruturais e imagens apresentadas nesta interface são protegidos por direitos autorais e propriedade industrial. É vedada a reprodução não autorizada.</p>
                      <p><strong>4. Limitação de Responsabilidade:</strong> As métricas de Retorno sobre Investimento (ROI) possuem caráter preditivo. O desempenho financeiro real da estação dependerá de variáveis de mercado e custos tarifários.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>

              <li>
                <Dialog>
                  <DialogTrigger className="hover:text-mineral-orange transition-colors cursor-pointer uppercase tracking-wider text-xs">
                    Política de Privacidade
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-none border-none">
                    <DialogHeader>
                      <DialogTitle className="font-heading font-black text-2xl text-slate-900 border-b border-slate-200 pb-4 mb-4">Política de Privacidade (LGPD)</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm text-slate-700 space-y-6">
                      <p><strong>1. Coleta de Dados:</strong> Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), informamos que a coleta de dados tem a finalidade exclusiva de processar a viabilidade técnica da implementação de infraestrutura.</p>
                      <p><strong>2. Uso e Compartilhamento:</strong> Os dados coletados não serão comercializados. Eles serão armazenados na infraestrutura de gestão da Mineral Engenharia para contato estrito de vendas e engenharia.</p>
                      <p><strong>3. Base Legal:</strong> O tratamento de dados é realizado sob a base legal do legítimo interesse comercial, mediante o consentimento ativo no ato da submissão do formulário.</p>
                      <p><strong>4. Retenção e Exclusão:</strong> Os dados serão mantidos em base segura pelo tempo necessário para a efetivação do contato comercial. O titular poderá solicitar a exclusão através do e-mail de contato oficial.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} MINERAL PROJETOS. TODOS OS DIREITOS RESERVADOS.</p>
          <p>
            Desenvolvido por <a href="https://weniu.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">weniu</a>
          </p>
        </div>
      </div>
    </footer>
  );
}