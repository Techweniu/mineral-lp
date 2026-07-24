"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm" : "bg-white border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Esquerda: Logo */}
        <div className="flex items-center">
          <a href="#" className="inline-block transition-transform hover:scale-105">
            <Image 
              src="/images/logo-mineral-icon.webp" 
              alt="Mineral Engenharia" 
              width={48} 
              height={48} 
              priority
              className="object-contain"
            />
          </a>
        </div>
        
        {/* Centro: Navegação - Anti-slop: typography afiada e hover states mínimos */}
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#oportunidade" className="text-[13px] font-bold tracking-wide uppercase text-slate-600 hover:text-mineral-blue transition-colors">Mercado</a>
          <a href="#roi" className="text-[13px] font-bold tracking-wide uppercase text-slate-600 hover:text-mineral-blue transition-colors">Análise Financeira</a>
          <a href="#solucoes" className="text-[13px] font-bold tracking-wide uppercase text-slate-600 hover:text-mineral-blue transition-colors">Operação Turnkey</a>
          <a href="#faq" className="text-[13px] font-bold tracking-wide uppercase text-slate-600 hover:text-mineral-blue transition-colors">FAQ</a>
        </nav>

        {/* Direita: Botão CTA - Sharp corners, contrast */}
        <div className="hidden lg:flex items-center">
          <a 
            href="#simulador" 
            className="inline-flex items-center justify-center bg-mineral-blue hover:bg-slate-900 text-white font-bold h-11 px-6 text-[13px] tracking-wide uppercase transition-colors"
          >
            Análise Técnica
          </a>
        </div>

        {/* Mobile: Botão Hambúrguer */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 p-2 focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 absolute top-20 left-0 right-0 shadow-lg">
          <nav className="flex flex-col p-6 gap-2">
            <a 
              href="#oportunidade" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-slate-800 py-3 border-b border-slate-100"
            >
              Mercado
            </a>
            <a 
              href="#roi" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-slate-800 py-3 border-b border-slate-100"
            >
              Análise Financeira
            </a>
            <a 
              href="#solucoes" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-slate-800 py-3 border-b border-slate-100"
            >
              Operação Turnkey
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-slate-800 py-3 border-b border-slate-100"
            >
              FAQ
            </a>
            <a 
              href="#simulador" 
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center bg-mineral-blue text-white font-bold h-12 px-6 text-sm uppercase tracking-wide"
            >
              Análise Técnica
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}