"use client";

import { useState } from "react";

// SVG nativo do WhatsApp
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Link de exemplo (inserir o número real depois)
  const whatsappUrl = "https://wa.me/553433051339?text=Olá,%20gostaria%20de%20falar%20com%20um%20engenheiro%20sobre%20projetos%20de%20recarga%20EV.";

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip elegante B2B */}
      <div 
        className={`hidden md:flex bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg border border-slate-800 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Fale com um Engenheiro
      </div>

      {/* Container do Botão + Animação */}
      <div className="relative flex items-center justify-center">
        
        {/* Anel de Pulso (Radar) - Animação CSS ultra leve */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping duration-1000"></span>
        
        {/* Botão Principal */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
          aria-label="Falar no WhatsApp"
        >
          <WhatsappIcon className="w-8 h-8" />
        </a>
      </div>
      
    </div>
  );
}