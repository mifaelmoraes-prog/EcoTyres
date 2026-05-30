import { MaterialInfo, ProjectInfo, BenefitCard, ProcessStep } from './types';

export const materialsData: MaterialInfo[] = [
  {
    id: 'granulado',
    title: 'Granulado de Borracha',
    description: 'Granulometria controlada entre 1.0mm e 4.0mm. Isento de fibras têxteis e arames de aço através de separação magnética tripla.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYmOwfEiwH--H8lxfzcmHLaYT0McNBH4HqJg7Tu_gHFycP5svscKlP5YvhTOn_zCO7QaexvaM0be-arNzD7YcCeFdGHBKWXdWGhs165-tkHdqnS2c5UdqzFMEWXeFu7xc4YZqx1M5V7nizvyMbOqJQfbpxpI854vqGSQdeE3sscj_ZKCFkSaPmtwXb_3g8SOlN24fi8-X-hRUxlMJq2K8htOFg8FUKk9PqY6UIDv1brecr5p2Ov3_mopxrdGIJH93rCyWCHzfU1I5Y',
    tag: 'MAIS VENDIDO',
    purity: '99.8%',
    density: '0.48 g/cm³',
    insightTitle: 'Comercial Insight',
    insightText: 'Ideal para campos de grama sintética e playgrounds amortecedores. Oferece excelente drenagem e durabilidade UV.'
  },
  {
    id: 'po',
    title: 'Pó de Borracha',
    description: 'Malha ultrafina (mesh 40-80). Processado em baixa temperatura para manter as propriedades elásticas originais do polímero.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3vIlkJkC21v7rm9z3_eEEiO4QP0_RbPwJwsVoiMeuBM7IhX8sknLQoFa62NNpZIKUOybffg0iLTYMYLUkzuJqkAgsI4SEcBnka1nHRIvd4L1QyblHkQBKjeMb5-HlN5n5pK6baRXueCMKt75AgXkc-ksahiKreToXxST9Of7qef7h2MGoc2CyMUD9WA15KrpRhZ4asGmXvvdxHQKb_vLQudMDSalXd1-f_yr4eRIizqsXX5kUdGZbIMr4NlqSHJMELKiIrprKfwA5',
    features: [
      'Adesão superior em ligantes',
      'Alta área superficial'
    ],
    highlightTitle: 'Uso em Asfalto',
    highlightText: 'Aumenta a vida útil da pavimentação em 40% e reduz o ruído de rolagem urbana.'
  },
  {
    id: 'chips',
    title: 'Chips (TDF)',
    description: 'Fragmentos de 20mm a 50mm. Tire Derived Fuel (TDF) com alto poder calorífico para fornos industriais.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGu7IghXKO7UUEHhkX-e6VJNM12aTP7E_4wQrL6B7XkPWW1rt8y7Iy8KM1fmkEnoA3W_10jpVMbcsXmS5ymi6MssCXXjMjnHUDj375MsbHMtsgYhvbOPlx7eVGZWr4TbANfzlNtv95u2rJdoEQ7Q-AjSw5s4iDSPvoYrMdZTuQzKyaRgkfXhtA-9fr_YxovgDhWnU3_MbOnvDSW427sHFNkDNUava3wk4hme5iOSNayCca39qJ6He3yJLgP-YeTazMxm2p7h83Blhi',
    calorific: '7.500 kcal/kg',
    calorificLabel: 'Poder Calorífico Médio',
    highlightTitle: 'Energia Industrial',
    highlightText: 'Substituto eficiente para o coque de petróleo em cimenteiras, reduzindo a pegada de carbono operacional.'
  },
  {
    id: 'aco',
    title: 'Aço de Pneu (Scrap)',
    description: 'Aço de alta resistência extraído mecanicamente durante o processo de trituração. Material pronto para remoldagem na indústria siderúrgica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLLs_9ZRRFX23m4zOH9h79vGrKy3gitSxFlCnXiU6pkhXqfWMzZj2n9kI9ywhQk6h2ITargX8srzH56Laoz9M-xqL0ZtORfbQPNhu5r9qJchbrCnG7LY1-kyHtVikA3lLuu24sBxIRtgtVvAe11qfFms_r2xbInde-34gBl6RzmDy-BmYeHXvuS3rvdwl-NKP65d7hgZxp493Kow92-dLyfHpcF-xEJKMzKBAXDR_K9z9fMMNdgx3O6exmc41cL_LrfKsmpclfMAee',
    tag: 'RECURSO CIRCULAR',
    advancedFeatures: [
      { title: 'Resistência', sub: 'Grade Industrial' },
      { title: 'Sustentável', sub: '100% Reciclável' }
    ]
  }
];

export const projectsData: ProjectInfo[] = [
  {
    id: 'ecopark',
    title: 'EcoPark Asunción',
    category: 'Pavimentação Urbana',
    description: 'Utilização de polímeros de borracha para pistas de atletismo com absorção de impacto superior.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXJeOe3QmmOGRYjlH1crSPZ3oK5LVKTWubJG2p3v-wr9w8XUFUtaQw35NjAw-LrcKQV5ciune2LAjyf5AeG45XtDeDkkwqRhiIvuvll3ce06wQAIxw8bLyvwG3lKShq5HRCzpdFiGhu_qhKxzYAYj8BJrU1S9SzZw5fr7Kz77cqRBTNxb7uWmzEXc6p0t_xJlvzId6bsBzvOFOFGzU79Ew9pSDV-coZyAYenymZ9raIr0ZEZXDDNm-D2LGr2JioIt7_m4DfjxOb2fg'
  },
  {
    id: 'asfalto',
    title: 'Asfalto Emborrachado',
    category: 'Engenharia Civil',
    description: 'Rodovias nacionais com 30% mais durabilidade e redução de ruído sonoro em 15%.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLkmfKrIo2bgyfK-gYXIIi3MVVg72sRX6dGU_GrsuDYG3LVhaJK0bBmierqo_5_JOpTjZhCw_vX0af8Orlk9KbETjljzu5FDdiHP7dK9WvQOaw48lRPMEjwukodUMMmjDFxnu70PENRwMEvgmS0RTK41MV30WqruIOJDkFq6YS1jkifuzgSsnL7azxxX9CKCBfP_kBUVWYhXmEmzMDCADnAn-nTPzX8fgfbYaiYwnABmxzMTgmcky7yCfLpqn51boSyR6K20X4qyPo'
  },
  {
    id: 'isolamento',
    title: 'Isolamento Acústico',
    category: 'Arquitetura',
    description: 'Painéis de alta densidade desenvolvidos para estúdios e centros corporativos de alto padrão.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjB_D6Pkr1vcKxE0EbBjgv0Ma0aBWU5Kt_NkhGj4scm450MJJtCky5_DZahfW4UUOgYstLj_85AIFk_BzBWcOLkEJsoRjhvXKlx0as6rc2zMzo7mvMoaGBMLLqOZjYoArjPdzP43Ewtn4jUQQZmm_CP4UJhjwtxse5hwAvjhE0jUimHc1E-tXpqEni1I6qAm7s33uViAx5Q8KYYgsHGg3RoRnbQ5-1niGnKK4lUSm-lCDMAsEKYqZQf1jnB6SiBjizrZVLBTSKMGUe'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Coleta e Triagem',
    description: 'Coletamos pneus de todo o Paraguai, classificando-os por tipo e estado para otimizar o processamento.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzmLeX7r1GLXaUWl415gUdnFrh4ub-1IDtfuydr2lfMkaIz1qiv_0XcodwyPP9z9pYYyx-zKIOxPAPjPQpR96INc98iTsygfkjV3gj3RNkvDH6bY0yIlMB26Ea8q5QpwmjqPvFJoLLWEDNN8ngFAZUBDqlDM_hDCARk7xu_Ul7SWEDxFtQtkMxZplam7c4iGmVDmAtL8VF5-N-FOARODVt79x-nDepcka__wvLbu5fIP_seh98WvuFky4KomYG2IqIrk8nHQmvv1VP'
  },
  {
    step: '02',
    title: 'Trituração Criogênica',
    description: 'Utilizamos tecnologia de ponta para reduzir a borracha a grânulos precisos sem comprometer suas propriedades elásticas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK0blEtms6phleKdLcYmwsg6MDQV_0q4Kqz7d3om1U4BCNnI4s-JziRNNUZodQBISTI5GJaC__EKz36iv7va5ZvyddUQO1wiuEKMtvMB9h8q_LDIwAOaXXn0Ey58A62Yp7De935UIn17H0gPWsSTD-44JQMTqDkwbkPFzGmcUmYumAGUsGaArjyTvSOYpHXtkvmFoRBcIqk2mY_9XNx3XCY3rBgb8HoWfcHfHJhUEsKW0ig7RDguY3EX9-hWz4QItGIkoxG01Azx72'
  },
  {
    step: '03',
    title: 'Refino e Controle',
    description: 'Separação eletromagnética de aço e fibras têxteis, resultando em granulado de borracha de pureza extrema.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQiZs0l1eyquzXdTMWDoFPcDF-iC65p6UiK6JdhiiBjjWraVBNNu-4vAhlrg9fjSvO34kuJYhVKE5FoalHk-gk8bgTEJk0I2jAZTCQsWi2qprZy9q14q2x_OlFr01-zxHxhK3bO9Y_A6ZmJUYpv-IAU9BM8T6XvdDawOGSSjBMfDzAorq35M2neMd4ikuu4u8TOOx_EGEPvChlDBWeW9YMke5lxk8bWsg_t70_lpMRRiNoWFCLrKfiJxTbws4XXOr_w9oALceU1-Yc'
  }
];

export const benefitsData: BenefitCard[] = [
  {
    id: 'logistica',
    icon: 'local_shipping',
    title: 'Logística de Ponta a Ponta',
    description: 'Nossa frota dedicada cobre todos os departamentos do Paraguai, garantindo pontualidade em pedidos de bulk orders e suporte técnico no local de descarga.',
    points: [
      'Rastreamento em tempo real',
      'Pontos de distribuição em Asunción e CDE'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB01VOESVWWt7UozSmLDITVcKcJw2IyS6QPlmDCzLXXysSYrksI96qKNqBNVY5485GEiTIKnaD3GWLCs5NLKsGwT_HdWEZgjz5GDAaBHdgFa_VSa9iNSB89YwQXcImiQsLCi6cP-vUSFHWcGMfrocYzcBCIgG5kGF4HcQLzdQZnk28NbHMI9F6lzOwfITQPHe5hVceckTAmmT9bHF9zRA7t7tquJppKSSBGZ4-h2fiIVo4vJroRxXWj9sIUuiV3W2O5_fJ-ZH21u9OP',
    className: 'col-span-12 md:col-span-8'
  },
  {
    id: 'competitivo',
    icon: 'handshake',
    title: 'Preços Competitivos',
    description: 'Modelos de precificação escalonados para contratos anuais e grandes volumes. Reduza seus custos de insumos em até 25%.',
    ctaText: 'Consultar Tabela B2B',
    className: 'col-span-12 md:col-span-4 bg-tertiary-container text-on-tertiary'
  },
  {
    id: 'certificacao',
    icon: 'verified',
    title: 'Certificação Ambiental',
    description: 'Sua empresa recebe o selo \'Parceiro Sustentável EcoTire\', válido para auditorias ESG e relatórios de impacto ambiental oficiais.',
    className: 'col-span-12 md:col-span-4'
  },
  {
    id: 'suporte',
    icon: 'engineering',
    title: 'Suporte Técnico Dedicado',
    description: 'Nossa equipe de engenharia auxilia na integração de nossos grânulos e materiais em seus processos produtivos específicos.',
    className: 'col-span-12 md:col-span-8 bg-primary-fixed text-on-primary-fixed'
  }
];
