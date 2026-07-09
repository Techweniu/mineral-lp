import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

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
  metadataBase: new URL("https://www.mineralprojetoseconsultoria.com/"),
  title: "Mineral Engenharia",
  description: "Soluções completas em infraestrutura de recarga para veículos elétricos. Rentabilize seu ativo corporativo.",
  openGraph: {
    title: "Mineral Engenharia",
    description: "Soluções completas em infraestrutura de recarga para veículos elétricos. Rentabilize seu ativo corporativo.",
    url: "https://www.mineralprojetoseconsultoria.com/", 
    siteName: "Mineral Engenharia",
    images: [
      {
        url: "/images/og-mineral.png", 
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1017517044600834');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}