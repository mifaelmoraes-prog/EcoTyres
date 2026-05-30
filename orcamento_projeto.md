# 💼 Proposta Comercial e Estimativa de Preço: EcoTyres Web App

Este documento apresenta uma análise detalhada do escopo técnico implementado no projeto **EcoTyres** e sugere uma precificação baseada nos padrões atuais do mercado de desenvolvimento web de alto padrão (Premium).

---

## 🛠️ 1. Detalhamento do que foi Desenvolvido (Escopo Técnico)

A solução entregue é um **Web App Single Page Application (SPA)** de alta fidelidade visual, com foco em sustentabilidade e captação de clientes B2B. As entregas compreendem:

### **A. Core e Infraestrutura do App**
*   **Tecnologia:** React 19 + TypeScript + Tailwind CSS v4.
*   **Desempenho:** Arquitetura *clean* rodando sobre o Vite com altíssima pontuação de performance (SEO, Acessibilidade e Best Practices).
*   **Multilíngue nativo (i18n):** Sistema completo de internacionalização em **Português, Inglês e Espanhol** gerenciado via contexto (`SettingsContext.tsx`).
*   **Design Responsivo:** Adaptável de celulares pequenos a grandes telas Ultra-Wide.

### **B. Módulos e Componentes Funcionais**
*   **Home com Live Tracker:** Painel com animações micro-interativas (`motion`) e um simulador em tempo real de pneus reciclados para engajamento imediato do visitante.
*   **Catálogo Técnico de Materiais:** Seção dedicada com especificações rigorosas de densidade/pureza dos insumos (Granulado, Pó, Chips e Aço Scrap) e formulário para solicitação de amostras.
*   **Portal Comercial B2B:**
    *   Tabela de preços corporativos escalonados por volume.
    *   **Mapa Geográfico Interativo:** Marcações animadas nos principais polos industriais do Paraguai (*Asunción*, *Ciudad del Este* e *Encarnación*) para demonstrar cobertura logística.
    *   Formulário de qualificação de leads corporativos.
*   **Calculadora ESG & Selo Digital (Sustentabilidade):**
    *   Estimador em tempo real que converte toneladas de pneu destinadas em: redução de CO₂, árvores salvas, água economizada e unidades de pneus retiradas.
    *   **Certificado de Responsabilidade Circular:** Geração de documento oficial estilizado na tela, preenchido dinamicamente com os dados do cliente, pronto para impressão em PDF.

---

## 💰 2. Estimativa de Valor de Mercado (Preço Sugerido)

No mercado de agências sênior e desenvolvedores independentes *premium*, o valor sugerido para a entrega desta solução completa (com i18n, design customizado e ferramentas interativas) é de:

### **Resumo do Orçamento**

| Item / Módulo | Descrição do Trabalho | Valor Estimado (R$) |
| :--- | :--- | :---: |
| **Arquitetura & Setup** | Configuração inicial, estrutura multilíngue (3 idiomas), Tailwind v4 e Responsividade. | **R$ 3.000,00** |
| **UI/UX & Home View** | Design moderno com tema escuro premium, micro-animações, e o *Live Impact Tracker*. | **R$ 3.500,00** |
| **Catálogo de Materiais** | Layout técnico de insumos e fluxo de requisição de amostras. | **R$ 2.000,00** |
| **Painel Comercial B2B** | Tabela de preços e o **Mapa Interativo** de cobertura regional com tooltips. | **R$ 3.000,00** |
| **Calculadora ESG + PDF** | Lógica de conversão matemática ESG e o gerador de certificado imprimível. | **R$ 4.000,00** |
| **Integração Git & Deploy** | Deploy automatizado em produção e controle de versão. | **R$ 1.000,00** |
| **TOTAL SUGERIDO (Produto Final)** | **Valor à vista ou parcelado do projeto** | **R$ 16.500,00** |

> [!NOTE]
> **Preço Mínimo de Mercado (Freelancer Pleno/Sênior):** R$ 12.000,00
> **Preço Máximo de Mercado (Agência de Software):** R$ 25.000,00

---

## ⚡ 3. Custos Adicionais Recomendados (Para cobrar à parte)

Além do valor de desenvolvimento do site, é recomendado repassar os custos recorrentes de infraestrutura ou cobrar uma taxa de administração para gerenciá-los:

1. **Hospedagem (Vercel):** 
   - *Plano Hobby:* Gratuito (suficiente para o lançamento).
   - *Plano Pro:* **US$ 20.00/mês** (recomendado caso haja múltiplos colaboradores editando ou alta volumetria de acessos).
2. **Domínio (Registro .com.py ou similar):** Aproximadamente **R$ 150,00 a R$ 250,00/ano**.
3. **Manutenção Mensal (Opcional):** Cobrar uma taxa de **R$ 500,00 a R$ 1.000,00/mês** para garantir atualizações de bibliotecas, pequenos ajustes de texto e suporte caso a API do Gemini precise ser integrada futuramente.
