# Walkthrough: EcoTire Paraguay Web Application

Este documento descreve detalhadamente a arquitetura, funcionalidades e componentes implementados no projeto **EcoTire Paraguay**, permitindo uma explicação clara e corporativa de toda a solução técnica de economia circular.

---

## 🛠️ Arquitetura Técnica e Dependências

A aplicação foi construída com um ecossistema moderno e de altíssimo desempenho (*Lean Stack*):
- **Core:** [React 19](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/) para uma interface tipada e segura.
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com suporte nativo a variáveis CSS e otimizações de build.
- **Bundler:** [Vite v6](https://vite.dev/) para compilação instantânea e Hot Module Replacement (HMR).
- **Animações:** [Motion](https://motion.dev/) (antigo Framer Motion) para micro-interações fluidas.
- **Ícones:** [Lucide React](https://lucide.dev/) para representações visuais modernas.
- **Internacionalização (i18n):** Sistema de dicionário nativo e dinâmico (`translations.ts`) suportando **Português**, **Inglês** e **Espanhol**.

---

## 📂 Principais Telas e Funcionalidades

### 1. Painel Inicial (Home)
Foco em marketing ecológico e apresentação do ecossistema de logística reversa.
- **Hero Section Imersiva:** Apresentação de alto contraste com chamadas de ação (CTA) para orçamentos e catálogos.
- **Live Impact Tracker:** Contador dinâmico que simula a reciclagem de pneus em tempo real e calcula a mitigação de CO₂.
- **Bento Grid Corporativo:** Cartões detalhando certificações ISO (9001 e 14001), logística satelital e economia circular na prática.
- **Processo Industrial Interativo:** Um carrossel navegável que explica o ciclo de vida do pneu (Coleta, Trituração Criogênica, Refino e Controle).

### 2. Catálogo Técnico (Materiais)
Apresentação técnica detalhada das matérias-primas produzidas:
*   **Granulado de Borracha (1.0mm - 4.0mm):** Pureza de 99.8%, voltado para gramados sintéticos FIFA e playgrounds.
*   **Pó de Borracha (Mesh 40-80):** Aditivo criogênico para ligantes asfálticos que aumenta a durabilidade de rodovias.
*   **Chips de Borracha (TDF):** Alternativa energética térmica de alto poder calorífico (7.500 kcal/kg) para fornos de cimento.
*   **Aço de Pneu (Scrap):** Fios de aço trefilados prontos para refundição siderúrgica limpa.
*   **Formulário de Amostras:** Permite a clientes industriais solicitar kits físicos de testes de materiais.

### 3. Portal Comercial (B2B)
Estrutura voltada à atração de grandes contas e fornecimento anual:
- **Tabela de Preços Escalonados:** Modelagem B2B customizada de acordo com o volume de toneladas demandado.
- **Mapa Interativo do Cone Sul:** Mapa vetorial destacando os polos de faturamento e centros de triagem da EcoTire no Paraguai:
  - **Asunción:** Sede e distribuição central.
  - **Ciudad del Este:** Centro de triagem de fronteira no Alto Paraná.
  - **Encarnación:** Logística de transbordo fluvial em Itapúa.
- **Formulário Institucional B2B:** Captura de dados comerciais avançados (volume mensal desejado e objetivos regulatórios).

### 4. Calculadora ESG e Certificação Ambiental (Sustentabilidade)
A ferramenta central para atrair clientes corporativos que precisam auditar sua pegada ecológica:
- **Calculadora ESG Interativa:** Slider dinâmico (5 a 1.000 toneladas) que estima instantaneamente:
  - Redução física de CO₂ (t).
  - Árvores salvas no Gran Chaco paraguaio.
  - Litros de água preservados.
  - Unidades de pneus retiradas do meio ambiente.
- **Gerador de Certificado Oficial:** Permite gerar, simular em tempo real e imprimir um **Certificado de Responsabilidade Circular** auditável para o balanço ecológico anual da empresa compradora.

---

## 🚀 Como Executar e Validar o Projeto

1. **Instalação das dependências:**
   ```powershell
   npm install
   ```
2. **Executar o servidor local:**
   ```powershell
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:3000/`.
