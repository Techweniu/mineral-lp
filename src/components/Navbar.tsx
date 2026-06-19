"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      {/* Mudamos de grid para flex com posições relativas para dar espaço ao centro */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* Esquerda: Logo */}
        <div className="flex items-center">
          <a href="#" className="inline-block">
            <Image 
              src="/images/logo-mineral-icon.webp" 
              alt="Mineral Engenharia" 
              width={56} 
              height={56} 
              priority
              className="object-contain"
            />
          </a>
        </div>
        
        {/* Centro: Navegação com posicionamento absoluto para garantir centralização perfeita sem quebrar */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <a href="#oportunidade" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Mercado</a>
          <a href="#roi" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Análise Financeira</a>
          <a href="#solucoes" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Operação Turnkey</a>
          <a href="#faq" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Direita: Botão CTA */}
        <div className="hidden lg:flex items-center">
          <a 
            href="#simulador" 
            className="inline-flex items-center justify-center rounded-md bg-mineral-orange hover:bg-[#d95a26] text-white font-bold h-10 px-6 text-sm transition-all"
          >
            Análise Técnica
          </a>
        </div>

        {/* Mobile: Botão Hambúrguer */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2 transition-colors focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden w-full bg-slate-950 border-b border-slate-800 absolute top-20 left-0 right-0 animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col p-6 gap-4">
            <a 
              href="#oportunidade" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-white py-2 transition-colors border-b border-slate-900"
            >
              Mercado
            </a>
            <a 
              href="#roi" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-white py-2 transition-colors border-b border-slate-900"
            >
              Análise Financeira
            </a>
            <a 
              href="#solucoes" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-white py-2 transition-colors border-b border-slate-900"
            >
              Operação Turnkey
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-white py-2 transition-colors border-b border-slate-900"
            >
              FAQ
            </a>
            <a 
              href="#simulador" 
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-mineral-orange hover:bg-[#d95a26] text-white font-bold h-12 px-6 text-base transition-all mt-2"
            >
              Análise Técnica
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}