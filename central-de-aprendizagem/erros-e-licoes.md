# 🧠 Central de Aprendizagem — Erros & Lições (Mineral LP)

## 📅 [24/07/2026] — Resolução de raiz de workspace no Turbopack (Next.js 16)

**Contexto:** Execução do build do Next.js via CLI local (`npx next build`).
**Erro:** O Turbopack no Next.js 16 não conseguia inferir o diretório raiz do projeto sem a propriedade `turbopack.root` em `next.config.ts`.
**Consequência:** Falha ao compilar o projeto em ambientes sem `node_modules` locais pré-instalados.
**Correção aplicada:** Adicionada a propriedade `experimental: { turbopack: { root: __dirname } }` em `next.config.ts`.
**Lição:** Em projetos Next.js 16 usando Turbopack, declarar explicitamente a raiz do projeto no `next.config.ts` para evitar erros de resolução de diretório em builds locais e remotos.

## 📅 [24/07/2026] — Correção de codebase e alinhamento total ao projeto Mineral LP

**Contexto:** O usuário forneceu o repositório oficial da Landing Page Mineral Engenharia (`https://github.com/Techweniu/mineral-lp/tree/main`).
**Erro:** O agente havia lido arquivos de outro projeto residual que estava na pasta local.
**Consequência:** A Landing Page 2.0 foi inicialmente gerada para um propósito de negócio divergente.
**Correção aplicada:** Sincronizada a branch `main` oficial do `Techweniu/mineral-lp` (Next.js 16, React 19, Tailwind v4, WEG Fast Charge, Engenharia de Recarga EV), reconstruído o [HeroSection.tsx](file:///c:/Users/LuisG/Projetos/mineral-lp-main/src/components/HeroSection.tsx) com princípios anti-slop (sem clichês de brilho roxo, paleta institucional Mineral Orange/Yellow/Blue e métricas 150kW) e recriada a governança.
**Lição:** Sempre resincronizar e validar os arquivos contra a branch `main` do GitHub oficial indicado antes de iniciar qualquer ciclo de desenvolvimento.
