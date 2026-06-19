import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { ROIMatrix } from "@/components/ROIMatrix";
import { TurnkeyProcess } from "@/components/TurnkeyProcess";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 pt-20">
      
      <Navbar />
      
      <HeroSection />

      <div id="oportunidade" className="w-full">
        <MarketOpportunity />
      </div>
      
      <div id="roi" className="w-full">
        <ROIMatrix />
      </div>

      <div id="solucoes" className="w-full">
        <TurnkeyProcess />
      </div>

      <section id="simulador" className="w-full py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Análise de Viabilidade de Engenharia</h2>
            <p className="text-slate-600 text-lg">Preencha os dados corporativos abaixo. Nossa equipe técnica analisará o potencial do seu estacionamento para dimensionar o CapEx inicial.</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
             <LeadForm />
          </div>
        </div>
      </section>

      <div id="faq" className="w-full">
        <FAQ />
      </div>

      <Footer />

      <WhatsAppButton />

    </main>
  );
}