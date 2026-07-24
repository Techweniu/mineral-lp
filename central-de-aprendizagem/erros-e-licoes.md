# 🧠 Central de Aprendizagem — Erros & Lições (Mineral LP)

## 📅 [24/07/2026] — Reformulação total da Landing Page Mineral LP (Anti-Slop Estrito)

**Contexto:** Solicitação do usuário para aplicar as diretrizes `/design-taste-frontend` e `/clone-website` reconstruindo uma LP completamente nova, 100% livre de AI Slop, preservando a totalidade dos textos e funções originais da Mineral Engenharia (WEG).
**Erro:** O componente `HeroSection` alterado anteriormente ainda mantinha vícios ou estruturas com sensação de template genérico de IA.
**Consequência:** A página não atingia a qualidade visual artesanal e profissional desejada.
**Correção aplicada:** Registro na Central de Aprendizagem (PASSO 1), elaboração do draft de projeto via equipe de subagentes e reconstrução modular de todas as seções (Navbar, Hero, MarketOpportunity, ROIMatrix, TurnkeyProcess, LeadForm, FAQ e Footer) com tipografia editorial refinada, layouts bento assimétricos e paleta oficial.
**Lição:** Aplicar os critérios da `taste-skill` em **todas** as seções da página de forma integrada (não apenas no Hero), garantindo visual único, ritmo de grid variável e zero clichês.

## 📅 [24/07/2026] — Sintaxe do Turbopack root no Next.js 16

**Contexto:** Ajuste de compilação da raiz do workspace no `next.config.ts`.
**Erro:** O Turbopack no Next.js 16 aceita `turbopack: { root: __dirname }` no nível superior da configuração (fora de `experimental`).
**Consequência:** A sintaxe direta é mais estável e limpa.
**Correção aplicada:** Atualizada a declaração no [next.config.ts](file:///c:/Users/LuisG/Projetos/mineral-lp-main/next.config.ts) para usar `turbopack: { root: __dirname }` diretamente.
**Lição:** Manter `turbopack.root` no nível raiz do objeto `nextConfig`.

## 📅 [24/07/2026] — Correção de codebase e alinhamento total ao projeto Mineral LP

**Contexto:** O usuário forneceu o repositório oficial da Landing Page Mineral Engenharia (`https://github.com/Techweniu/mineral-lp/tree/main`).
**Erro:** O agente havia lido arquivos de outro projeto residual que estava na pasta local.
**Consequência:** A Landing Page 2.0 foi inicialmente gerada para um propósito de negócio divergente.
**Correção aplicada:** Sincronizada a branch `main` oficial do `Techweniu/mineral-lp` (Next.js 16, React 19, Tailwind v4, WEG Fast Charge, Engenharia de Recarga EV), reconstruído o [HeroSection.tsx](file:///c:/Users/LuisG/Projetos/mineral-lp-main/src/components/HeroSection.tsx) com princípios anti-slop (sem clichês de brilho roxo, paleta institucional Mineral Orange/Yellow/Blue e métricas 150kW) e recriada a governança.
**Lição:** Sempre resincronizar e validar os arquivos contra a branch `main` do GitHub oficial indicado antes de iniciar qualquer ciclo de desenvolvimento.
