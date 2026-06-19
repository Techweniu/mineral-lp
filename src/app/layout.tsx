import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuração da Fonte Primária (Textos gerais - TTF)
const kabrio = localFont({
  src: [
    {
      path: "../fonts/Kabrio-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Kabrio-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kabrio",
  display: "swap",
});

// Configuração da Fonte Secundária (Títulos - OTF)
const lemonMilk = localFont({
  src: [
    {
      path: "../fonts/LemonMilk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lemon-milk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mineral Engenharia",
  description: "Soluções completas em infraestrutura de recarga para veículos elétricos. Rentabilize seu ativo corporativo.",
  openGraph: {
    title: "Mineral Engenharia",
    description: "Soluções completas em infraestrutura de recarga para veículos elétricos. Rentabilize seu ativo corporativo.",
    url: "https://mineral-lp-virid.vercel.app/", 
    siteName: "Mineral Engenharia",
    images: [
      {
        url: "/images/logo-mineral-full.webp", 
        width: 1200,
        height: 630,
        alt: "Mineral Engenharia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${kabrio.variable} ${lemonMilk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}