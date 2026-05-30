export type Language = 'pt' | 'en' | 'es';

export interface TranslationDict {
  header: {
    home: string;
    materials: string;
    commercial: string;
    sustainability: string;
    contactSales: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    terms: string;
    bulkSales: string;
    partnerPortal: string;
    privacyTitle: string;
    privacyText: string;
    termsTitle: string;
    termsText: string;
    portalTitle: string;
    portalText: string;
    regionalTitle: string;
    regionalText: string;
    esgTitle: string;
    esgText: string;
    supportTitle: string;
    supportText: string;
  };
  home: {
    transformingResidues: string;
    heroTitle: string;
    heroSub: string;
    budgetBtn: string;
    catalogBtn: string;
    impactMetric: string;
    recycledTires: string;
    co2Reduction: string;
    industrialOperation: string;
    whyChooseTitle: string;
    whyChooseSub: string;
    superiorQuality: string;
    superiorQualityText: string;
    isoCert: string;
    isoCertText: string;
    isoPopTitle: string;
    isoPopText: string;
    knowStandards: string;
    integratedLogistics: string;
    integratedLogisticsText: string;
    seeLogisticsBtn: string;
    circularEconomyPrac: string;
    circularEconomyPracText: string;
    processTitle: string;
    processSub: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    readySust: string;
    readySustSub: string;
    requestSample: string;
    speakConsultant: string;
    speakConsultantTitle: string;
    speakConsultantText: string;
    opStatus: string;
    granulesStock: string;
    inStock: string;
    regionalLogistics: string;
    operational: string;
    scheduledCollections: string;
    scheduled: string;
    updatedToday: string;
    circular100: string;
  };
  materials: {
    catalogTag: string;
    headerTitle: string;
    headerSub: string;
    bestSeller: string;
    granuleTitle: string;
    granuleDesc: string;
    purityMin: string;
    densityAvg: string;
    purityVal: string;
    densityVal: string;
    insightTitle: string;
    insightText: string;
    powderTitle: string;
    powderDesc: string;
    powderPoint1: string;
    powderPoint2: string;
    powderFocusTitle: string;
    powderFocusDesc: string;
    chipsTitle: string;
    chipsDesc: string;
    chipsCalorific: string;
    chipsCalorificLabel: string;
    chipsFocusTitle: string;
    chipsFocusDesc: string;
    steelTag: string;
    steelTitle: string;
    steelDesc: string;
    steelHighTraction: string;
    steelHighTractionSub: string;
    steelRecyclable: string;
    steelRecyclableSub: string;
    precisTitle: string;
    precisDesc: string;
    precisPoint1: string;
    precisPoint2: string;
    precisPoint3: string;
    formTitle: string;
    formSub: string;
    selectMaterial: string;
    respName: string;
    companyName: string;
    emailWork: string;
    sendBtn: string;
    formSuccessTitle: string;
    formSuccessSub: string;
    formSuccessText: string;
    newRequestBtn: string;
    placeholderName: string;
    placeholderCompany: string;
    placeholderEmail: string;
    reqError: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  };
  commercial: {
    solutionsTag: string;
    heroTitle: string;
    heroSub: string;
    orderBtn: string;
    benefitsBtn: string;
    statTons: string;
    statTonsSub: string;
    statPartners: string;
    statPartnersSub: string;
    statHours: string;
    statHoursSub: string;
    statCo2: string;
    whyPartnerTitle: string;
    whyPartnerSub: string;
    logisticsTitle: string;
    logisticsDesc: string;
    logisticsPoint1: string;
    logisticsPoint2: string;
    pricesTitle: string;
    pricesDesc: string;
    consultTerms: string;
    certTitle: string;
    certDesc: string;
    supportTitle: string;
    supportDesc: string;
    talkEngineer: string;
    formTitle: string;
    formSub: string;
    salesPhone: string;
    corporateEmail: string;
    colRespName: string;
    colCompany: string;
    colEmail: string;
    colVolume: string;
    colInterest: string;
    colMessage: string;
    colMessagePlaceholder: string;
    colSendBtn: string;
    colTermsAgree: string;
    colSuccessTitle: string;
    colSuccessSub: string;
    colDetailsHeader: string;
    colDetailsEmail: string;
    colDetailsVolume: string;
    colDetailsResponse: string;
    colNewRequestBtn: string;
    colNationalPresence: string;
    colNationalPresenceSub: string;
    colCoverFromEndToEnd: string;
    popPriceTitle: string;
    popPriceText: string;
    volumeOption1: string;
    volumeOption2: string;
    volumeOption3: string;
    volumeOption4: string;
    interestOption1: string;
    interestOption2: string;
    interestOption3: string;
    asuDesc: string;
    asuDetails: string;
    cdeDesc: string;
    cdeDetails: string;
    encDesc: string;
    encDetails: string;
    formFieldError: string;
  };
  sustainability: {
    innovationTag: string;
    heroTitle: string;
    heroSub: string;
    metricsTitle: string;
    metricsSub: string;
    projectTag: string;
    projectTitle: string;
    projectSub: string;
    technicalSheetBtn: string;
    sheetPopDesc: string;
    stampTag: string;
    stampTitle: string;
    stampSub: string;
    calcTag: string;
    calcTitle: string;
    calcSub: string;
    formCompLabel: string;
    formCompPlaceholder: string;
    formVolumeLabel: string;
    btnSimulate: string;
    btnSimulating: string;
    certOfficialTag: string;
    certTitleMain: string;
    certOfficialReg: string;
    certPara1: string;
    certPara2: string;
    certPara3: string;
    certPara4: string;
    certCouncilTitle: string;
    certCouncilDept: string;
    printBtn: string;
    newIssueBtn: string;
    noStampTitle: string;
    noStampSub: string;
    formError: string;
    proj1Desc: string;
    proj2Desc: string;
    proj3Desc: string;
  };
  modalContact: {
    tag: string;
    title: string;
    sub: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successSub: string;
    fieldCompany: string;
    fieldEmail: string;
    fieldPhone: string;
    successNotice: string;
    concludeBtn: string;
    errorAlert: string;
  };
  esgCalc: {
    calcTag: string;
    title: string;
    sub: string;
    volumeLabel: string;
    volumeUnit: string;
    fiveTons: string;
    twoFiftyTons: string;
    fiveHundredTons: string;
    sevenFiftyTons: string;
    oneThousandTons: string;
    co2Title: string;
    co2Desc: string;
    treesTitle: string;
    treesDesc: string;
    waterTitle: string;
    waterDesc: string;
    tiresTitle: string;
    tiresDesc: string;
    tiresUnit: string;
    activeCircular: string;
    subtextGranulado: string;
    subtextPo: string;
    subtextChips: string;
    subtextAco: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  pt: {
    header: {
      home: 'Home',
      materials: 'Materiais',
      commercial: 'Comercial',
      sustainability: 'Sustentabilidade',
      contactSales: 'Contatar Vendas'
    },
    footer: {
      tagline: '© 2024 EcoTire Paraguay. Transformando Resíduos em Recursos.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      bulkSales: 'Vendas Corporativas',
      partnerPortal: 'Portal de Parceiros',
      privacyTitle: 'Política de Privacidade',
      privacyText: 'Sua privacidade é importante para nós. A EcoTire Paraguay adota políticas rigorosas em conformidade com as diretrizes ambientais e de privacidade de dados para garantir que todas as transações, contatos comerciais e especificações técnicas de lotes e COA permaneçam estritamente confidenciais e protegidos em servidores seguros.',
      termsTitle: 'Termos de Serviço',
      termsText: 'Ao acessar e encomendar nossos produtos (Granulado de Borracha, Chips TDF, Pó de Borracha ou Aço de Pneu Scrap), sua empresa concorda em utilizá-los de acordo com as normas industriais e de destinação sustentável autorizadas pelo Ministério do Meio Ambiente e Desenvolvimento Sustentável (MADES) do Paraguai.',
      portalTitle: 'Portal de Parceiros',
      portalText: 'O EcoTire Portal de Parceiros é a plataforma B2B para rastreamento de entregas de frotas, histórico de Certificados de Análise (CoA), faturamento e agendamentos de logística reversa e coleta de pneus usados no Paraguai. Para credenciamento e login, fale com nossa equipe industrial em vendas@ecotire.com.py.',
      regionalTitle: 'Presença Regional',
      regionalText: 'Operações sediadas estrategicamente no Paraguai com centros logísticos em Asunción, Ciudad del Este (Alto Paraná) e Encarnación, facilitando conexões fluídas terrestres e fluviais para o Cone Sul.',
      esgTitle: 'Certificação & Auditoria ESG',
      esgText: 'Certificações integradas de conformidade ambiental. Fornecemos selos auditáveis para apoiar os objetivos de sustentabilidade corporativos de sua empresa.',
      supportTitle: 'Suporte Técnico',
      supportText: 'Nosso canal direto para engenharia de materiais: envie um e-mail para eng@ecotire.com.py ou solicite amostras técnicas através do formulário na aba Materiais.'
    },
    home: {
      transformingResidues: 'Transformando Resíduos',
      heroTitle: 'Transformando Pneus Usados em Recursos Industriais de Alta Performance.',
      heroSub: 'Lideramos a revolução da economia circular no Paraguai, convertendo resíduos de borracha em soluções sustentáveis para indústrias globais.',
      budgetBtn: 'Solicitar Orçamento',
      catalogBtn: 'Ver Catálogo Técnico',
      impactMetric: 'Métrica de Impacto em Tempo Real',
      recycledTires: 'Pneus Reciclados em 2024',
      co2Reduction: 'Redução de CO2',
      industrialOperation: 'Operação Industrial',
      whyChooseTitle: 'Por que escolher a EcoTire?',
      whyChooseSub: 'Compromisso com a precisão técnica e responsabilidade ambiental em cada etapa.',
      superiorQuality: 'Qualidade Superior',
      superiorQualityText: 'Nossos processos de granulação e separação garantem pureza de 99.9% para aplicações industriais e infraestrutura de alta exigência.',
      isoCert: 'Certificação ISO',
      isoCertText: 'Atendemos aos mais rigorosos padrões internacionais de qualidade em gestão de processos e segurança operacional integrados.',
      isoPopTitle: 'Atendimento ISO',
      isoPopText: 'Nossa corporação possui processos certificados que atendem as normas ISO 9001 de controle de qualidade e ISO 14001 de sustentabilidade operacional.',
      knowStandards: 'Conhecer Padrões',
      integratedLogistics: 'Logística Integrada',
      integratedLogisticsText: 'Coleta especializada de pneus descartados e entrega pontual em todo o território nacional paraguaio com frota própria rastreada por satélite.',
      seeLogisticsBtn: 'Ver Rotas Logísticas',
      circularEconomyPrac: 'Economia Circular na Prática',
      circularEconomyPracText: 'Transformamos passivos ambientais crônicos de pneus descartados em matérias-primas industriais de alto valor agregado, reduzindo a pegada de carbono geral.',
      processTitle: 'Nosso Processo Industrial',
      processSub: 'Do pneu descartado à matéria-prima de laboratório: uma jornada de tecnologia e precisão.',
      step1Title: 'Coleta e Triagem',
      step1Desc: 'Coletamos pneus de todo o Paraguai, classificando-os por tipo e estado para otimizar o processamento.',
      step2Title: 'Trituração Criogênica',
      step2Desc: 'Utilizamos tecnologia de ponta para reduzir a borracha a grânulos precisos sem comprometer suas propriedades elásticas.',
      step3Title: 'Refino e Controle',
      step3Desc: 'Separação eletromagnética de aço e fibras têxteis, resultando em granulado de borracha de pureza extrema.',
      readySust: 'Pronto para impulsionar sua sustentabilidade?',
      readySustSub: 'Nossa equipe operacional e comercial está estruturada para fornecer amostras técnicas, cotações personalizadas e coordenar fornecimentos industriais seguros no Paraguai.',
      requestSample: 'Solicitar Amostra',
      speakConsultant: 'Falar com consultor',
      speakConsultantTitle: 'Falar com Consultor',
      speakConsultantText: 'Entre em contato diretamente com nosso suporte técnico e comercial de materiais pelo e-mail vendas@ecotire.com.py ou pelo telefone corporativo +595 21 000-0000.',
      opStatus: 'STATUS DA OPERAÇÃO ECOTIRE',
      granulesStock: 'Estoque Granulado',
      inStock: 'Em Estoque',
      regionalLogistics: 'Logística Regional',
      operational: 'Operacional',
      scheduledCollections: 'Coletas Programadas',
      scheduled: 'Agendadas',
      updatedToday: 'Atualizado hoje',
      circular100: '100% Circular'
    },
    materials: {
      catalogTag: 'Catálogo Técnico 2024',
      headerTitle: 'Matérias-Primas de Alta Performance',
      headerSub: 'Transformamos pneus descartados em recursos industriais precisos através de processos avançados de pirólise e trituração criogênica de alta tecnologia, garantindo pureza refinada, homogeneidade de lotes e sustentabilidade certificada para sua cadeia produtiva.',
      bestSeller: 'MAIS VENDIDO',
      granuleTitle: 'Granulado de Borracha',
      granuleDesc: 'Granulometria rigorosamente controlada entre 1.0mm e 4.0mm. Produto isento de fibras têxteis e de arames de aço graças ao nosso sistema patenteado de separação magnética tripla sequencial de alto fluxo.',
      purityMin: 'Pureza Mínima',
      densityAvg: 'Densidade Média',
      purityVal: '99.8%',
      densityVal: '0.48 g/cm³',
      insightTitle: 'Comercial Insight',
      insightText: 'Ideal para gramados sintéticos padrão FIFA, pistas multiusográficas de atletismo e playgrounds infantis amortecedores de impacto. Oferece drenagem extraordinária e tratamento contra raios UV.',
      powderTitle: 'Pó de Borracha',
      powderDesc: 'Malha ultrafina premium selecionada (mesh 40-80). Processado em ambiente de criogenia a baixas temperaturas controladas para salvaguardar as propriedades de elasticidade e alongamento originais do polímero.',
      powderPoint1: 'Alta estabilidade e adesão em ligantes asfálticos',
      powderPoint2: 'Elevada área superficial para reatividade química',
      powderFocusTitle: 'Foco de Aplicação: Asfalto',
      powderFocusDesc: 'Aumenta a vida útil da pavimentação asfáltica padrão nacional em 40% e reduz expressivamente o ruído sonoro de rolagem em áreas urbanas de tráfego pesado.',
      chipsTitle: 'Chips (TDF)',
      chipsDesc: 'Fragmentos padronizados de borracha vulcanizada medindo de 20mm a 50mm. Combustível derivado de pneus triturados de alto poder calorífico específico voltado expressivamente para fornalhas termelétricas e fornos industriais.',
      chipsCalorific: '7.500 kcal/kg',
      chipsCalorificLabel: 'Poder Calorífico Médio Garantido',
      chipsFocusTitle: 'Energia Termoindustrial',
      chipsFocusDesc: 'Excelente aditivo térmico homogêneo para caldeiras industriais e fornos de cimento, agindo como substituto ecologicamente avançado para coques de carvão mineral de alta emissão.',
      steelTag: 'Recurso Circular',
      steelTitle: 'Aço de Pneu (Scrap)',
      steelDesc: 'Fios de aço trefilados de alta resistência mecânica à tração estrutural, obtidos mecanicamente no estágio de destalação e trituração fina de pneus de carga. O material passa por desmagnetização terminal e é entregue enfardado, livre de vulcanizados e pronto para refundição siderúrgica.',
      steelHighTraction: 'Alta Tração',
      steelHighTractionSub: 'Classe Industrial A',
      steelRecyclable: '100% Reciclável',
      steelRecyclableSub: 'Forja Siderúrgica',
      precisTitle: 'Compromisso Técnico com a Precisão',
      precisDesc: 'Todos os lotes de borracha granulada, fina e resíduos secundários metálicos produzidos pela EcoTire Paraguay passam por rasteio laboratorial e ensaios normatizados por amostragem. Fornecemos um Certificado de Análise técnica completo (CoA) anexado à documentação fiscal em 100% dos embarques realizados de nossa planta.',
      precisPoint1: 'ISO 9001: Gestão de Qualidade',
      precisPoint2: 'ISO 14001: Gestão Ambiental',
      precisPoint3: 'ASTM D5603 Companhia Normatizada',
      formTitle: 'Fazer Solicitação Amostral',
      formSub: 'Amostragem',
      selectMaterial: 'Selecione o Material Desejado',
      respName: 'Nome do Responsável *',
      companyName: 'Empresa (Razão Social) *',
      emailWork: 'E-mail de Trabalho *',
      sendBtn: 'Enviar Amostra Técnica',
      formSuccessTitle: 'Solicitação Registrada!',
      formSuccessSub: 'Prezado {name} da empresa {company}.',
      formSuccessText: 'Agendamos o despacho do kit de amostragem referente ao {material}. Você receberá um código de rastreamento da frota no e-mail {email} em até 24 horas úteis.',
      newRequestBtn: 'Nova Solicitação',
      placeholderName: 'Ex: Juan Ramirez',
      placeholderCompany: 'Ex: Construtora B2B',
      placeholderEmail: 'Ex: r&d@empresa.com.py',
      reqError: 'Por favor, preencha as informações obrigatórias para prosseguir comercialmente.',
      option1: 'Granulado de Borracha (1.0mm - 4.0mm)',
      option2: 'Pó de Borracha (Mesh 40-80)',
      option3: 'Chips Vulcanizados (TDF)',
      option4: 'Aço de Pneu Scrap'
    },
    commercial: {
      solutionsTag: 'Soluções Corporativas',
      heroTitle: 'Escalabilidade Industrial com Responsabilidade Ambiental',
      heroSub: 'Abastecemos a cadeia produtiva metalúrgica, de engenharia asfáltica e manufatura de polímeros no Paraguai com matéria-prima reciclada de alta uniformidade térmica e granulométrica. Pedidos volumosos em faturamento corporativo B2B e contratos anuais.',
      orderBtn: 'Solicitar Pedido',
      benefitsBtn: 'Ver Benefícios B2B',
      statTons: '15.000+',
      statTonsSub: 'Toneladas Recicladas/Ano',
      statPartners: '450+',
      statPartnersSub: 'Parceiros B2B Ativos',
      statHours: '24h',
      statHoursSub: 'Logística em todo Paraguai',
      statCo2: '-30% Emissões de CO2 em transporte de logística reversa',
      whyPartnerTitle: 'Por que ser um parceiro EcoTire?',
      whyPartnerSub: 'Fornecemos muito mais do que matéria-prima reciclada de precisão. Entregamos uma infraestrutura logística, tributária e técnica robusta sob medida para as demandas comerciais mais complexas.',
      logisticsTitle: 'Logística de Ponta a Ponta',
      logisticsDesc: 'Nossa diretoria logística de frotas mantém veículos dedicados transitando em todos os departamentos do território paraguaio, assegurando agendamentos de bulk orders precisos no pátio da sua caldeira ou cimenteira.',
      logisticsPoint1: 'Rastreamento em tempo real do faturamento e embarques',
      logisticsPoint2: 'Pontos de coleta e fardagem instalados em Asunción e CDE',
      pricesTitle: 'Preços Competitivos',
      pricesDesc: 'Temos modelos flexíveis de precificação escalonada estruturados para contratos anuais programados e grandes volumes industriais. Apoie seu planejamento orçamentário reduzindo custos de insumos virgens em até 25% com material circular.',
      consultTerms: 'Consultar Termos B2B',
      certTitle: 'Certificação Ambiental',
      certDesc: 'Sua empresa adquire o selo homologado corporativo \'Parceiro Sustentável EcoTire\', respaldando diretamente relatórios oficiais de auditoria de impacto ESG e balanços ecológicos frente a agências de desenvolvimento federais.',
      supportTitle: 'Suporte Técnico Dedicado',
      supportDesc: 'Engenheiros de processos especializados o auxiliam virtual ou presencialmente a ajustar a vazão térmica, asfalto ou vulcanização de acordo com a reatividade do lote adquirido.',
      talkEngineer: 'Falar com Engenheiro de Materiais',
      formTitle: 'Pronto para escalar seu negócio?',
      formSub: 'Preencha o formulário institucional ao lado para receber uma cotação oficial comercial, agendar uma triagem logística ou solicitar homologação de fornecimento industrial junto à EcoTire Paraguay. Nossa equipe retornará em até 24 horas úteis.',
      salesPhone: 'Telefone de Vendas B2B',
      corporateEmail: 'E-mail Corporativo',
      colRespName: 'Nome do Responsável *',
      colCompany: 'Empresa (Razão Social) *',
      colEmail: 'E-mail Corporativo *',
      colVolume: 'Volume Mensal Estimado',
      colInterest: 'Interesse Principal',
      colMessage: 'Mensagem / Requisitos Especiais',
      colMessagePlaceholder: 'Fale detalhadamente sobre suas exigências técnicas, frequência de fornecimento térmico ou faturamento específico...',
      colSendBtn: 'Enviar Solicitação B2B',
      colTermsAgree: 'Ao enviar, sua corporação concorda com os nossos Termos de Fornecimento B2B e Política de Privacidade da EcoTire Paraguay.',
      colSuccessTitle: 'Solicitação Comercial Enviada!',
      colSuccessSub: 'Agradecemos seu contato técnico, {nome}. Registramos os requisitos de {interesse} para a corporação {empresa}.',
      colDetailsHeader: 'Detalhes Registrados:',
      colDetailsEmail: 'E-mail B2B',
      colDetailsVolume: 'Volume Estimado',
      colDetailsResponse: 'Prazo de Resposta: Em até 24 horas úteis',
      colNewRequestBtn: 'Fazer nova solicitação B2B',
      colNationalPresence: 'Presença Nacional Estratégica',
      colNationalPresenceSub: 'Nossa logística cobre de ponta a ponta as maiores metrópole industriais do Paraguai. Clique ou passe o mouse nos marcadores do mapa para ver capacidades locais de triagem e depósitos.',
      colCoverFromEndToEnd: 'Nós Cobrimos de Ponta a Ponta:',
      popPriceTitle: 'Tabela de Preços B2B',
      popPriceText: 'Modelos de preços escalonados vigentes para as indústrias do Paraguai (faturamento em Guaianíes e Dólares). Para receber o termo oficial, entre em contato com nosso diretor financeiro corporativo pelo vendas@ecotire.com.py.',
      volumeOption1: 'Até 5 toneladas',
      volumeOption2: '5 - 20 toneladas',
      volumeOption3: '20 - 50 toneladas',
      volumeOption4: 'Acima de 50 toneladas',
      interestOption1: 'Solicitar Pedido',
      interestOption2: 'Tornar-se um Parceiro',
      interestOption3: 'Agendar Logística Reversa',
      asuDesc: 'Sede Comercial & Distribuição Central (Central)',
      asuDetails: 'Estoque Avançado: 200 t. Coleta diária de frotas.',
      cdeDesc: 'Centro de Triagem Alto Paraná (Fronteira)',
      cdeDetails: 'Planta Parceira. Capacidade de faturamento rápido.',
      encDesc: 'Depósito Sul de Abastecimento (Itapúa)',
      encDetails: 'Logística de transbordo regional fluvial.',
      formFieldError: 'Por favor, preencha os campos obrigatórios (*).'
    },
    sustainability: {
      innovationTag: 'Inovação e Meio Ambiente',
      heroTitle: 'Liferando a Revolução Circular no Paraguai',
      heroSub: 'Promovemos a preservação das florestas nativas do Gran Chaco e aceleramos a descarbonização industrial de caldeiras e indústrias parceiras através da correta destinação, fardagem e refino físico de passivos de pneus usados.',
      metricsTitle: 'Métricas de Impacto Ambiental',
      metricsSub: 'Abaixo, calcule as economias que a destinação sustentável regulada oferece diretamente à sua corporação em equivalentes florestais:',
      projectTag: 'Portfólio na Prática',
      projectTitle: 'Projetos de Inovação',
      projectSub: 'Conheça algumas das principais obras públicas corporativas e projetos de engenharia civil pesada viabilizados através de nossos materiais circulares no Cone Sul.',
      technicalSheetBtn: 'Ver Ficha Técnica',
      sheetPopDesc: 'Um marco para a engenharia ambiental do Paraguai, feito com puro polímero regenerado EcoTire.',
      stampTag: 'Autenticidade Corporativa',
      stampTitle: 'Selo Ambiental Auditável',
      stampSub: 'Sua corporação pode gerenciar o faturamento ecológico direto de seus lotes! Use o formulário abaixo para simular a emissão do seu Certificado Oficial de Sustentabilidade de Lote EcoTire de acordo com as toneladas destinadas.',
      calcTag: 'Calculadora',
      calcTitle: 'Calculadora de Impacto ESG',
      calcSub: 'Estime as métricas da sua parceria com EcoTire',
      formCompLabel: 'Razão Social da Empresa *',
      formCompPlaceholder: 'Ex: Companhia Construtora Del Chaco',
      formVolumeLabel: 'Volume de Pneus Destinados (Tons)',
      btnSimulate: 'Simular Meu Selo Ambiental',
      btnSimulating: 'Processando Métricas...',
      certOfficialTag: 'ECOTIRE PARAGUAY CERTIFICATION',
      certTitleMain: 'Certificado de Responsabilidade Circular',
      certOfficialReg: 'Registro oficial',
      certPara1: 'Certifica-se para todos os devidos fins de inventários de emissões e boas práticas ESG corporativas que a empresa:',
      certPara2: 'destinou com absoluto sucesso e responsabilidade técnica regulada o montante correspondente a {tons} toneladas métricas de passivos de pneus vulcanizados descartados pneu-a-pneu junto aos centros avançados da EcoTire.',
      certPara3: 'Esta auditoria simbólica garante uma mitigação física aproximada equivalente a {co2} toneladas de CO₂ atmosféricos evitados e salva cerca de {trees} árvores nativas na bacia florestal do Chaco.',
      certPara4: 'Paraguai, 2026. Documento válido para balanços nacionais auditados.',
      certCouncilTitle: 'HOMOLOGAÇÃO PARAGUAY',
      certCouncilDept: 'Comitê de Sustentabilidade EcoTire',
      printBtn: 'Imprimir',
      newIssueBtn: 'Nova Emissão',
      noStampTitle: 'Nenhum Selo Solicitado',
      noStampSub: 'Preencha os dados da sua empresa no assistente ao lado para modelar e visualizar o seu Certificado de Impacto Circular em tempo real.',
      formError: 'Por favor, digite o nome completo da empresa e a estimativa de toneladas.',
      proj1Desc: 'Utilização de polímeros de borracha para pistas de atletismo com absorção de impacto superior.',
      proj2Desc: 'Rodovias nacionais com 30% mais durabilidade e redução de ruído sonoro em 15%.',
      proj3Desc: 'Painéis de alta densidade desenvolvidos para estúdios e centros corporativos de alto padrão.'
    },
    modalContact: {
      tag: 'Suporte Corporativo',
      title: 'Contatar Seção Comercial',
      sub: 'Preencha o formulário institucional para receber uma resposta do nosso pátio de triagem e direção comercial.',
      nameLabel: 'Nome Completo *',
      namePlaceholder: 'Ex: Carlos Sanches',
      companyLabel: 'Razão Social de Empresa',
      companyPlaceholder: 'Ex: Pavimentações Paraguayas S.A.',
      emailLabel: 'E-mail de Trabalho *',
      emailPlaceholder: 'Ex: compras@empresa.com',
      phoneLabel: 'Telefone / WhatsApp',
      phonePlaceholder: 'Ex: +595 981 123456',
      messageLabel: 'Frequência e Requisitos Técnicos',
      messagePlaceholder: 'Comente brevemente sobre o volume mensal desejado ou requisitos de pureza de lote específicos...',
      submitBtn: 'Solicitar Atendimento Comercial',
      successTitle: 'Contato Registrado!',
      successSub: 'Prezado {name}, registramos seus dados de contato e os direcionamos ao nosso diretor do polo industrial.',
      fieldCompany: 'Empresa',
      fieldEmail: 'E-mail',
      fieldPhone: 'Telefone',
      successNotice: 'Entraremos em contato em até 24h úteis para detalhar soluções de faturamento e volumes de frotas EcoTire.',
      concludeBtn: 'Concluir',
      errorAlert: 'Por favor, preencha o seu nome e e-mail corporativo para contato.'
    },
    esgCalc: {
      calcTag: 'Calculadora de Impacto ESG',
      title: 'Estime as Métricas da sua Parceria',
      sub: 'Arraste o cursor abaixo para ver o impacto ecológico gerado pela reciclagem industrial direta.',
      volumeLabel: 'Volume de Coleta Estimado:',
      volumeUnit: 'Toneladas',
      fiveTons: '5 Tons',
      twoFiftyTons: '250 Tons',
      fiveHundredTons: '500 Tons',
      sevenFiftyTons: '750 Tons',
      oneThousandTons: '1000 Tons',
      co2Title: 'Redução de CO2',
      co2Desc: 'Minimizadas do ciclo produtivo global.',
      treesTitle: 'Árvores Preservadas',
      treesDesc: 'Preservadas na região do Gran Chaco paraguaio.',
      waterTitle: 'Água Preservada',
      waterDesc: 'Evitadas de consumo e poluição de efluentes.',
      tiresTitle: 'Pneus Retirados',
      tiresDesc: 'Unidades de pneus reciclados retirados do ambiente.',
      tiresUnit: 'ud',
      activeCircular: 'Ativo Circular Estimado:',
      subtextGranulado: 'Substitui elastômeros virgens de petróleo, evitando a extração de {tons} toneladas de polímeros sintéticos.',
      subtextPo: 'Aditivo de alto desempenho para asfalto ecológico, pavimentando {tons} km de vias públicas de grande durabilidade.',
      subtextChips: 'Substitui combustível fóssil sólido em fornos de cimento, poupando {tons} toneladas de Coque de Petróleo importado.',
      subtextAco: 'Recupera {tons} toneladas de fios de aço de ultra resistência prontos para forja direta sem emissões de mina siliciosa.'
    }
  },
  en: {
    header: {
      home: 'Home',
      materials: 'Materials',
      commercial: 'Commercial',
      sustainability: 'Sustainability',
      contactSales: 'Contact Sales'
    },
    footer: {
      tagline: '© 2024 EcoTire Paraguay. Transforming Waste into Resources.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      bulkSales: 'Corporate Sales',
      partnerPortal: 'Partner Portal',
      privacyTitle: 'Privacy Policy',
      privacyText: 'Your privacy is highly valuable to us. EcoTire Paraguay adopts strict policies compliant with environmental guidelines and data privacy regulations to ensure that all business operations, corporate contacts, and technical batch specifications (CoA) remain confidential and secured in protected servers.',
      termsTitle: 'Terms of Service',
      termsText: 'By accessing and ordering our products (Rubber Granules, TDF Chips, Rubber Powder, or Scrap Tire Steel), your company agrees to utilize them strictly in accordance with industrial standards and sustainable final disposal regulations authorized by the Ministry of the Environment and Sustainable Development (MADES) of Paraguay.',
      portalTitle: 'Partner Portal',
      portalText: 'The EcoTire Partner Portal is our B2B interface to track fleet deliveries, historic Certificates of Analysis (CoA), invoicing, and reverse-logistics scheduling. For access credentials, contact our industrial support team at sales@ecotire.com.py.',
      regionalTitle: 'Regional Presence',
      regionalText: 'Operations strategically based in Paraguay with logistics facilities in Asunción, Ciudad del Este (Alto Paraná), and Encarnación, guaranteeing smooth land and river transport connections across the Southern Cone.',
      esgTitle: 'ESG Verification & Audit',
      esgText: 'Integrated environmental compliance certifications. We supply verifiable green credentials to seamlessly support your corporate sustainability objectives.',
      supportTitle: 'Technical Support',
      supportText: 'Our direct channel for materials engineering: email tech@ecotire.com.py or register directly to receive industrial raw samples through the form in the Materials section.'
    },
    home: {
      transformingResidues: 'Transforming Waste',
      heroTitle: 'Transforming Used Tires into High-Performance Industrial Resources.',
      heroSub: 'We lead the circular economy revolution in Paraguay, converting tire rubber waste into sustainable, certified raw materials for global industries.',
      budgetBtn: 'Request Quote',
      catalogBtn: 'Technical Catalog',
      impactMetric: 'Real-Time Environmental Impact',
      recycledTires: 'Tires Recycled in 2024',
      co2Reduction: 'CO2 Reduction',
      industrialOperation: 'Industrial Operation',
      whyChooseTitle: 'Why choose EcoTire?',
      whyChooseSub: 'A steadfast commitment to technical performance and ecological safety in every single batch.',
      superiorQuality: 'Premium Quality',
      superiorQualityText: 'Our granulation and separation technology ensures a 99.9% purity rate, matching high-requirement structural industrial applications.',
      isoCert: 'ISO Certified',
      isoCertText: 'Our management entirely complies with ISO 9001 and ISO 14001 standards for quality control and operational sustainability.',
      isoPopTitle: 'ISO Performance standards',
      isoPopText: 'We comply with international ISO 9001 and ISO 14001 quality specifications regarding manufacturing controls and environmental safety practices.',
      knowStandards: 'View Standards',
      integratedLogistics: 'Integrated Logistics',
      integratedLogisticsText: 'In-house collection networks and punctual sat-tracked deliveries structured to cover all departments in Paraguay.',
      seeLogisticsBtn: 'View Routes',
      circularEconomyPrac: 'Circular Economy in Action',
      circularEconomyPracText: 'Transforming critical environmental liabilities of discarded tires into premium grade industrial raw materials, effectively reducing cumulative carbon footprints.',
      processTitle: 'Our Industrial Process',
      processSub: 'From waste tires to laboratory-purity raw materials: a story of advanced engineering.',
      step1Title: 'Collection & Sorting',
      step1Desc: 'We gather tires across Paraguay, cataloging by scale and compound density to optimize physical raw refining.',
      step2Title: 'Cryogenic Crushing',
      step2Desc: 'State-of-the-art cold crushing structures that preserve original polymer stretching and high elasticity.',
      step3Title: 'Sifting & Quality Check',
      step3Desc: 'Sequential electromagnetic sifting ensuring 99.9% clean rubber particles, free of cord wire and fabric.',
      readySust: 'Ready to accelerate your circular footprint?',
      readySustSub: 'Our technical and sales teams are prepared to dispatch technical samples, coordinate custom quotes, and secure commercial supply contracts in Paraguay.',
      requestSample: 'Request Sample',
      speakConsultant: 'Talk to Consultant',
      speakConsultantTitle: 'Technical Consultant',
      speakConsultantText: 'Get in touch directly with our materials sales board via sales@ecotire.com.py or through our corporate line at +595 21 000-0000.',
      opStatus: 'ECOTIRE OPERATIONAL UPDATE',
      granulesStock: 'Rubber Granules',
      inStock: 'In Stock',
      regionalLogistics: 'Regional Logistics',
      operational: 'Operational',
      scheduledCollections: 'Reverse Collection',
      scheduled: 'Scheduled',
      updatedToday: 'Updated Today',
      circular100: '100% Circular'
    },
    materials: {
      catalogTag: 'Technical Catalog 2024',
      headerTitle: 'Premium Industrial Raw Materials',
      headerSub: 'We process environmental waste liabilities into high-specification materials utilizing state-of-the-art physical recovery. Our processing guarantees thermal homogeneity, batch consistency, and verified eco-friendly credentials for modern supply chains.',
      bestSeller: 'BEST SELLER',
      granuleTitle: 'Premium Rubber Granules',
      granuleDesc: 'Controlled sizing between 1.0mm and 4.0mm. Sifted clean from any reinforcing steel wires and synthetic fibers via our proprietary triple sequential high-intensity magnetic conveyor belts.',
      purityMin: 'Minimum Purity',
      densityAvg: 'Average Density',
      purityVal: '99.8%',
      densityVal: '0.48 g/cm³',
      insightTitle: 'Commercial Insight',
      insightText: 'Perfect for FIFA-compliant synthetic turf fields, athletic running tracks, and absorbing rubber layers. Delivers remarkable drainage performance and integrated UV stabilization.',
      powderTitle: 'Ultrafine Rubber Powder',
      powderDesc: 'Mesh 40-80 premium grading. Separated and refined in cryogenic low-temperature cells to safeguard natural structural elasticity and original polymer elongation properties.',
      powderPoint1: 'Improves binding performance and lifespan in asphalt mixtures',
      powderPoint2: 'High specific surface area for enhanced compound reactivity',
      powderFocusTitle: 'Core Application: Tar & Asphalt',
      powderFocusDesc: 'Extends public highway pavement durability by 40% while significantly dampening tire interaction noise in high-traffic commercial zones.',
      chipsTitle: 'TDF Shredded Chips',
      chipsDesc: 'Sized vulcanized rubber fragments from 20mm to 50mm. Tire-Derived Fuel (TDF) with high calorific and low moisture characteristics, custom prepared for heavy rotary furnaces and thermal boilers.',
      chipsCalorific: '7,500 kcal/kg',
      chipsCalorificLabel: 'Guaranteed Average Heat Value',
      chipsFocusTitle: 'Industrial Thermal Energy',
      chipsFocusDesc: 'Excellent heat value additive for industrial kilns, acting as a highly efficient and carbon-reducing replacement for dirty coal or petroleum coke.',
      steelTag: 'Circular Sourcing',
      steelTitle: 'High-Tensile Scrap Steel Wire',
      steelDesc: 'Tough reinforcement steel fibers extracted physically during secondary stage tire crushing. Demagnetized, compacted into high-density bales, and prepared to feed steel mills with zero mineral mining burden.',
      steelHighTraction: 'High Tensile strength',
      steelHighTractionSub: 'Industrial Grade A',
      steelRecyclable: '100% Recyclable',
      steelRecyclableSub: 'Furnace Ready',
      precisTitle: 'Rigorous Quality Assurance Standards',
      precisDesc: 'Every single batch of rubber granules, fine powder, or structural steel scrap processed by EcoTire Paraguay undergoes systematic laboratory monitoring. We supply an on-site Certificate of Analysis (CoA) with 100% of our domestic shipments.',
      precisPoint1: 'ISO 9001: Quality Management',
      precisPoint2: 'ISO 14001: Environmental Policy',
      precisPoint3: 'ASTM D5603 Raw Material Standards',
      formTitle: 'Submit Material Sample Request',
      formSub: 'Technical Samples',
      selectMaterial: 'Select Target Compound',
      respName: 'Representative Name *',
      companyName: 'Company (Corporate Name) *',
      emailWork: 'Work Email *',
      sendBtn: 'Send Sample Request',
      formSuccessTitle: 'Sample Request Logged!',
      formSuccessSub: 'Dear {name} from {company}.',
      formSuccessText: 'We have registered your sample interest in {material}. A sat-tracked courier tracking code will be dispatched to {email} within 24 working hours.',
      newRequestBtn: 'New Request',
      placeholderName: 'E.g., John Ramirez',
      placeholderCompany: 'E.g., Asphalt Construction LLC',
      placeholderEmail: 'E.g., engineering@asphalt.com',
      reqError: 'Please fill in all mandatory fields before submitting.',
      option1: 'Rubber Granules (1.0mm - 4.0mm)',
      option2: 'Rubber Powder (Mesh 40-80)',
      option3: 'Vulcanized Fuel Chips (TDF)',
      option4: 'Tyre Scrap Steel Wire'
    },
    commercial: {
      solutionsTag: 'Corporate Solutions',
      heroTitle: 'Industrial Sourcing Scale with Ecological Responsibility',
      heroSub: 'We supply metallurgical, civil engineering, and polymer plants across Paraguay with superior quality circular raw materials in bulk. Flexible annual delivery scheduling and automated corporate reporting.',
      orderBtn: 'Place Order Inquiry',
      benefitsBtn: 'View B2B Benefits',
      statTons: '15,000+',
      statTonsSub: 'Tons Recycled/Year',
      statPartners: '450+',
      statPartnersSub: 'Active B2B Partners',
      statHours: '24h',
      statHoursSub: 'Nationwide Logistics Coverage',
      statCo2: '-30% CO2 in Reverse Supply Transportation logistics',
      whyPartnerTitle: 'Why partner with EcoTire?',
      whyPartnerSub: 'We deliver far more than pure recovered rubber. We handle the logistical, fiscal, and technical infrastructure required to secure high-volume corporate supply chains.',
      logisticsTitle: 'End-to-End Fleet Logistics',
      logisticsDesc: 'Our logistics control office runs dedicated cargo vehicles operating across all departments of Paraguay, securing bulk orders direct to your boilers, kilns, or construction yards with zero delay.',
      logisticsPoint1: 'Real-time billing, dispatch, and transit tracking updates',
      logisticsPoint2: 'Consolidation, shredding, and loading hubs operating in Asunción & CDE',
      pricesTitle: 'Tiered Corporate Pricing',
      pricesDesc: 'Highly scalable tiered pricing models structured for long-term annual supply agreements and high-volume operations. Save up to 25% compared to petroleum-based virgin polymers.',
      consultTerms: 'Consult B2B Framework',
      certTitle: 'Authorized ESG Validation',
      certDesc: 'Your company officially gains our registered \'EcoTire Sustainable Partner\' seal to natively support your sustainability audits and greenhouse gas annual statements.',
      supportTitle: 'On-Demand Technical Advisory',
      supportDesc: 'Our engineering board offers virtual and on-site support to optimize thermal load, mixing ratios, and polymer reactions specifically for your plants.',
      talkEngineer: 'Connect with Materials Engineer',
      formTitle: 'Ready to scale your business?',
      formSub: 'Fill out our B2B request form to receive customized pricing, coordinate freight routes, or request a technical supplier verification document. Our commercial office replies within 24 working hours.',
      salesPhone: 'B2B Sales desk',
      corporateEmail: 'Corporate Email',
      colRespName: 'Representative Name *',
      colCompany: 'Company (Corporate Name) *',
      colEmail: 'Corporate Email *',
      colVolume: 'Estimated Monthly Volume',
      colInterest: 'Core Objective',
      colMessage: 'Additional Details / Specifications',
      colMessagePlaceholder: 'List specific technical sizing, compound testing rules, loading limits, or invoice requirements...',
      colSendBtn: 'Submit B2B Inquiry',
      colTermsAgree: 'By submitting, your company agrees to our B2B Supply Terms and the EcoTire Paraguay data policy.',
      colSuccessTitle: 'B2B Inquiry Registry Complete!',
      colSuccessSub: 'Thank you for contacting our tech desk, {nome}. We have logged your {interesse} requirement for {empresa}.',
      colDetailsHeader: 'Registered Inquiry Details:',
      colDetailsEmail: 'Corporate Mail',
      colDetailsVolume: 'Target Volume',
      colDetailsResponse: 'Response Timeframe: Within 24 commercial hours',
      colNewRequestBtn: 'Submit Another Inquiry',
      colNationalPresence: 'Strategic National Coverage',
      colNationalPresenceSub: 'Our sat-tracked fleet easily connects Paraguay\'s major industrial capitals. Click or hover on the markers to reveal local terminal performance and storage values.',
      colCoverFromEndToEnd: 'We Cover All Regions:',
      popPriceTitle: 'B2B Pricing Matrix',
      popPriceText: 'Tiered volume-based pricing scales for Paraguay industries (available in Gs. and USD). To request the formal matrix and standard contract terms, contact our commercial director at sales@ecotire.com.py.',
      volumeOption1: 'Up to 5 Tons',
      volumeOption2: '5 - 20 Tons',
      volumeOption3: '20 - 50 Tons',
      volumeOption4: 'Over 50 Tons',
      interestOption1: 'Procure Materials',
      interestOption2: 'Establish Partnership',
      interestOption3: 'Schedule Reverse Logistics',
      asuDesc: 'Commercial Headquarters & Central Freight Terminal',
      asuDetails: 'Active Inventory: 200 t. Sat-tracked collection networks.',
      cdeDesc: 'Alto Paraná Sorting & Shredding Facility (Border)',
      cdeDetails: 'Integrated operations. Fast crossing clearance capability.',
      encDesc: 'Southern Transit & Barge Hub (Itapúa)',
      encDetails: 'River barge trans-loading and southern land corridors.',
      formFieldError: 'Please populate all mandatory fields (*).'
    },
    sustainability: {
      innovationTag: 'Innovation & Environment',
      heroTitle: 'Leading the Circular Revolution in Paraguay',
      heroSub: 'We preserve Gran Chaco native woodlands and speed up green carbon transitions by managing the professional retrieval, packaging, and sorting of abandoned tires.',
      metricsTitle: 'Environmental Footprint Calculator',
      metricsSub: 'Use our ESG tool below to view the actual carbon and woodland savings your industrial sourcing generates in real time:',
      projectTag: 'Civil Works Portfolio',
      projectTitle: 'Strategic Green Infrastructure',
      projectSub: 'Review public and private construction milestones constructed with our engineering compounds throughout the region.',
      technicalSheetBtn: 'Technical Sheets',
      sheetPopDesc: 'A landmark engineering project representing Paraguayan infrastructure innovation via EcoTire compounds.',
      stampTag: 'Auditable Sourcing',
      stampTitle: 'EcoTire Ecological Shield',
      stampSub: 'Monitor and declare the positive carbon footprint your industrial batches accomplish! Complete this simulation engine to preview and print your authorized ESG certificate.',
      calcTag: 'Calculators',
      calcTitle: 'ESG Impact Calculator',
      calcSub: 'Model your partnership metrics with EcoTire',
      formCompLabel: 'Registered Company Name *',
      formCompPlaceholder: 'E.g., Chaco Infrastructure S.A.',
      formVolumeLabel: 'Recovered Tire Volume (Tons)',
      btnSimulate: 'Simulate My Circular Certificate',
      btnSimulating: 'Processing Certificate Metrics...',
      certOfficialTag: 'ECOTIRE PARAGUAY CERTIFICATION',
      certTitleMain: 'Certificate of Circular Sourcing',
      certOfficialReg: 'Registered document ID',
      certPara1: 'This documents and confirms for greenhouse gas auditing and standard ESG compliance records that:',
      certPara2: 'has successfully repurposed {tons} metric tons of vulcanized tires pneu-a-pneu utilizing high-precision processing inside EcoTire industrial facilities.',
      certPara3: 'This circular audit represents a net reduction of approximately {co2} metric tons of atmospheric Carbon Dioxide and spares nearly {trees} mature trees in the Gran Chaco forests.',
      certPara4: 'Paraguay, 2026. Certified audit-ready documentation.',
      certCouncilTitle: 'REPUBLIC OF PARAGUAY CERTIFICATION',
      certCouncilDept: 'EcoTire Environmental Council Board',
      printBtn: 'Print',
      newIssueBtn: 'New Simulation',
      noStampTitle: 'No Certificate Generated',
      noStampSub: 'Input your corporate information in our tool to visualize and simulate your auditable circular stamp in real time.',
      formError: 'Please enter a valid company name and positive tonnage value.',
      proj1Desc: 'Purity-graded rubber compounds applied on public athletic fields, offering remarkable impact absorption.',
      proj2Desc: 'State public road networks fortified with fine-mesh tar compound, increasing lifespan by 30%.',
      proj3Desc: 'Noise-canceling compound layers developed for recording studios and professional recording studios.'
    },
    modalContact: {
      tag: 'Corporate Support',
      title: 'Contact Commercial Board',
      sub: 'Please provide corporate details to route your inquiry directly to our regional industrial logistics office.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'E.g., Alan Sanches',
      companyLabel: 'Company Name',
      companyPlaceholder: 'E.g., Paraguay Pavers Corp.',
      emailLabel: 'Work Email *',
      emailPlaceholder: 'E.g., procurement@paverspg.com',
      phoneLabel: 'Phone / Whatsapp',
      phonePlaceholder: 'E.g., +595 981 123456',
      messageLabel: 'Target Volumes / Custom Sizing rules',
      messagePlaceholder: 'Please briefly list required monthly tonnage, compound purity requests, or scheduled delivery routes...',
      submitBtn: 'Submit Business Request',
      successTitle: 'Inquiry Logged!',
      successSub: 'Dear {name}, we have registered your message and assigned it to our industrial operations team.',
      fieldCompany: 'Company',
      fieldEmail: 'Email',
      fieldPhone: 'Phone',
      successNotice: 'A regional manager will reach out within 24 commercial hours to address pricing matrixes and bulk transport schedules.',
      concludeBtn: 'Conclude',
      errorAlert: 'Please enter your name and business email to submit the inquiry.'
    },
    esgCalc: {
      calcTag: 'ESG Impact Calculator',
      title: 'Model Your Circular Impact Metrics',
      sub: 'Drag the slider to preview the real carbon reduction and forest savings accomplished through tire recycling.',
      volumeLabel: 'Target Material Recycling Volume:',
      volumeUnit: 'Tons',
      fiveTons: '5 Tons',
      twoFiftyTons: '250 Tons',
      fiveHundredTons: '500 Tons',
      sevenFiftyTons: '750 Tons',
      oneThousandTons: '1000 Tons',
      co2Title: 'Carbon Mitigation',
      co2Desc: 'Prevented from global warming cycles.',
      treesTitle: 'Spared Trees',
      treesDesc: 'Preserved in Paraguayan Chaco woodlands.',
      waterTitle: 'Conserved Water',
      waterDesc: 'Diverted from industrial processing and pollution.',
      tiresTitle: 'Tires Replaced',
      tiresDesc: 'Tire units removed from landfill hazards.',
      tiresUnit: 'pcs',
      activeCircular: 'Estimated Sourcing Benefits:',
      subtextGranulado: 'Acts as replacement for synthetic petroleum elastomers, sparing {tons} tons of newly synthesized carbon compounds.',
      subtextPo: 'Aids asphalt durability, enabling {tons} km of high-performance urban public roads.',
      subtextChips: 'Acts as a climate-smart kiln fuel additive, replacing {tons} tons of standard imported petroleum coke.',
      subtextAco: 'Recovers {tons} tons of grade-A tensile strength steel lines, directly feeding furnaces without mining operations.'
    }
  },
  es: {
    header: {
      home: 'Inicio',
      materials: 'Materiales',
      commercial: 'Comercial',
      sustainability: 'Sostenibilidad',
      contactSales: 'Contacto Ventas'
    },
    footer: {
      tagline: '© 2024 EcoTire Paraguay. Transformando Residuos en Recursos.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      bulkSales: 'Ventas Corporativas',
      partnerPortal: 'Portal de Socios',
      privacyTitle: 'Política de Privacidad',
      privacyText: 'Su privacidad es de suma importancia. EcoTire Paraguay procesa la información en estricto cumplimiento de las normativas ambientales y de confidencialidad de datos corporativos, manteniendo sus datos de contacto y especificaciones técnicas (CoA) con total resguardo.',
      termsTitle: 'Términos de Servicio',
      termsText: 'Al acceder e interactuar con nuestros productos (Granulado de Caucho, Chips Tdf, Polvo de Caucho o Acero Scrap), su empresa se compromete a gestionarlos según los estándares autorizados por el Ministerio del Ambiente y Desarrollo Sostenible (MADES) de Paraguay.',
      portalTitle: 'Portal de Socios B2B',
      portalText: 'El Portal de Socios es nuestro sistema exclusivo donde distribuidores e industrias monitorean embarques de flotas, descargan Certificados de Análisis (CoA) e ingresan solicitudes de logística inversa. Para registrar su acceso, consulte a ventas@ecotire.com.py.',
      regionalTitle: 'Cobertura Regional',
      regionalText: 'Centros logísticos situados de manera estratégica en Asunción, Ciudad del Este y Encarnación para agilizar despachos terrestres y fluviales hacia todo el Cono Sur.',
      esgTitle: 'Certificación ESG Auditada',
      esgText: 'Garantizamos soporte técnico en declaraciones de huella ecológica brindándole credenciales válidas ante entes financieros y gubernamentales.',
      supportTitle: 'Canal de Ingeniería',
      supportText: 'Canal técnico permanente para desarrollos de materiales: contacte vía eng@ecotire.com.py o gestione sus muestras industriales mediante el formulario de Materiales.'
    },
    home: {
      transformingResidues: 'Transformando Residuos',
      heroTitle: 'Transformando Neumáticos Usados en Recursos Industriales de Alto Desempeño.',
      heroSub: 'Lideramos la revolución de la economía circular en Paraguay, convirtiendo pasivos ambientales de caucho en materias primas confiables de clase mundial.',
      budgetBtn: 'Solicitar Presupuesto',
      catalogBtn: 'Ver Catálogo Técnico',
      impactMetric: 'Métrica de Impacto Ecológico en Tiempo Real',
      recycledTires: 'Neumáticos Reciclados en 2024',
      co2Reduction: 'Mitigación de CO2',
      industrialOperation: 'Operación Industrial',
      whyChooseTitle: '¿Por qué elegir EcoTire?',
      whyChooseSub: 'Compromiso riguroso con la consistencia granulométrica, pureza magnética y sustentabilidad.',
      superiorQuality: 'Calidad Premium',
      superiorQualityText: 'Nuestros sistemas industriales garantizan un 99.9% de pureza en caucho granulado, excelente para las normas de infraestructura más demandantes.',
      isoCert: 'Sistemas ISO',
      isoCertText: 'Nuestra gestión opera en conformidad con estándares internacionales de calidad y control ecológico de procesos ISO 9001 e ISO 14001.',
      isoPopTitle: 'Normativas ISO Integradas',
      isoPopText: 'Ofrecemos procesos certificados bajo metodologías ambientales validadas que aseguran la máxima eficiencia en nuestras plantas de tratamiento.',
      knowStandards: 'Ver Estándares',
      integratedLogistics: 'Logística Integrada',
      integratedLogisticsText: 'Recolección especializada y transporte de carga satelital asegurando abastecimiento óptimo a nivel nacional en Paraguay.',
      seeLogisticsBtn: 'Ver Cobertura',
      circularEconomyPrac: 'La Economía Circular en Marcha',
      circularEconomyPracText: 'Tomamos pasivos ambientales críticos y los introducimos a cadenas industriales, protegiendo las reservas naturales y ahorrando huella de carbono.',
      processTitle: 'Tecnología en Procesos',
      processSub: 'Del neumático descartado al compuesto de precisión: una ruta de ingeniería avanzada.',
      step1Title: 'Recepción y Clasificación',
      step1Desc: 'Recogemos neumáticos en todo Paraguay, organizándolos por tamaño y densidad de caucho para potenciar la molienda.',
      step2Title: 'Molienda Criogénica',
      step2Desc: 'Uso de sistemas de frío extremo para preservar la elasticidad, el agarre y la tracción original del elastómero.',
      step3Title: 'Control y Desmagnetizado',
      step3Desc: 'Separadores magnéticos industriales que filtran fibras textiles y acero, garantizando partículas de alta pureza.',
      readySust: '¿Listo para incorporar valor ecológico a su industria?',
      readySustSub: 'Nuestros asesores técnicos e ingenieros están listos para enviar kits de muestras físicas, diseñar cotizaciones a medida y organizar planes de flete en Paraguay.',
      requestSample: 'Solicitar Muestra',
      speakConsultant: 'Hablar con Consultor',
      speakConsultantTitle: 'Asesor Técnico',
      speakConsultantText: 'Comuníquese directo con nuestro departamento de selección enviando un email a ventas@ecotire.com.py o llámenos a la línea corporativa +595 21 000-0000.',
      opStatus: 'ACTUALIZACIÓN OPERATIVA ECOTIRE',
      granulesStock: 'Granulado de Caucho',
      inStock: 'En Stock',
      regionalLogistics: 'Logística Regional',
      operational: 'Operativo',
      scheduledCollections: 'Retiro de Neumáticos',
      scheduled: 'Agendado',
      updatedToday: 'Actualizado hoy',
      circular100: '100% Circular'
    },
    materials: {
      catalogTag: 'Catálogo Técnico 2024',
      headerTitle: 'Materias Primas de Alta Especificación',
      headerSub: 'Procesamos neumáticos en desuso bajo exigentes normas científicas de molienda y pirólise, asegurando consistencia térmica, pureza, y homogeneidad certificada en cada lote distribuido para su fábrica.',
      bestSeller: 'MÁS VENDIDO',
      granuleTitle: 'Granulado de Caucho Premium',
      granuleDesc: 'Gramos de caucho con tamaño controlado entre 1.0mm y 4.0mm. Libre de alambres de acero y fibras gracias a nuestro sistema patentado de triple filtrado magnético de alto flujo.',
      purityMin: 'Pureza Mínima',
      densityAvg: 'Densidad Promedio',
      purityVal: '99.8%',
      densityVal: '0.48 g/cm³',
      insightTitle: 'Commercial Insight',
      insightText: 'Perfecto para campos sintéticos aprobados por FIFA, pistas de atletismo profesionales y parques de juegos. Cuenta con óptimo drenaje y aditivos contra la radiación UV.',
      powderTitle: 'Polvo de Caucho Fino',
      powderDesc: 'Malla mesh 40-80 ultra fina. Producto refinado de bajas temperaturas para proteger la elasticidad natural del polímero y maximizar su reanudación en bitumen.',
      powderPoint1: 'Gran adherencia y estabilidad en ligantes asfálticos nacionales',
      powderPoint2: 'Amplio rango de área superficial permitiendo reacciones térmicas estables',
      powderFocusTitle: 'Uso Principal: Mezcla Asfáltica',
      powderFocusDesc: 'Aumenta hasta un 40% la durabilidad del asfalto urbano, reduciendo los ruidos por rozamiento vial en avenidas metropolitanas.',
      chipsTitle: 'Chips Vulcanizados (TDF)',
      chipsDesc: 'Trozos limpios de caucho vulcanizado de 20mm a 50mm. Combustible derivado (TDF) con excelente valor térmico ideal para hornos rotativos siderurgicos y cementeras.',
      chipsCalorific: '7.500 kcal/kg',
      chipsCalorificLabel: 'Poder Calorífico Mínimo Garantizado',
      chipsFocusTitle: 'Valorización Energética',
      chipsFocusDesc: 'Insumo de gran poder calorífico para hornos industriales y calderas pesadas, actuando como sustituto ambiental del carbón o del coque de petróleo.',
      steelTag: 'Sostenibilidad Circular',
      steelTitle: 'Acero de Neumático (Scrap)',
      steelDesc: 'Filamentos de acero de alta resistencia recuperados en la trituración primaria. Desmagnetizados, compactados en fardos y distribuidos como scrap listo para fundiciones de metal con baja huella de carbono.',
      steelHighTraction: 'Alta Resistencia',
      steelHighTractionSub: 'Grado Industrial A',
      steelRecyclable: '100% Reciclable',
      steelRecyclableSub: 'Listo para Horno',
      precisTitle: 'Garantía y Responsabilidad Comercial',
      precisDesc: 'Cada despacho de goma triturada, polvo fino de caucho, o cordones de metal de EcoTire Paraguay incluye un Certificado de Análisis (CoA) detallando las pruebas de laboratorio de calidad que respaldan sus características técnicas.',
      precisPoint1: 'ISO 9001: Aseguramiento de Calidad',
      precisPoint2: 'ISO 14001: Gestión de Procesos Ambientales',
      precisPoint3: 'ASTM D5603 Directrices de Materias Primas',
      formTitle: 'Solicitar Kit de Muestra de Material',
      formSub: 'Muestreo Técnico',
      selectMaterial: 'Material Requerido',
      respName: 'Nombre del Responsable *',
      companyName: 'Empresa (Razón Social) *',
      emailWork: 'Email Corporativo *',
      sendBtn: 'Enviar Solicitud',
      formSuccessTitle: 'Muestreo Agendado!',
      formSuccessSub: 'Estimado {name} de {company}.',
      formSuccessText: 'Hemos ingresado con éxito su pedido de muestras de {material}. Se despachará vía courier corporativo y recibirá la guía de tracking en el correo {email} en 24 horas hábiles.',
      newRequestBtn: 'Nueva Solicitud',
      placeholderName: 'Ej: Juan Ramírez',
      placeholderCompany: 'Ej: Constructoras del Norte S.A.',
      placeholderEmail: 'Ej: ingenieria@empresa.com.py',
      reqError: 'Por favor complete todos los datos obligatorios para registrar su solicitud.',
      option1: 'Granulado de Caucho (1.0mm - 4.0mm)',
      option2: 'Polvo de Caucho (Mesh 40-80)',
      option3: 'Chips Vulcanizados (TDF)',
      option4: 'Acero Scrap de Neumático'
    },
    commercial: {
      solutionsTag: 'Soluciones Corporativas',
      heroTitle: 'Abastecimiento de Escala con Conciencia Ecológica',
      heroSub: 'Suministramos caucho recuperado con estricto apego a normas de pureza granulométrica a industrias y constructoras viales de Paraguay. Cobertura nacional mediante fletes programados y acuerdos institucionales de largo plazo.',
      orderBtn: 'Enviar Solicitud B2B',
      benefitsBtn: 'Ver Beneficios B2B',
      statTons: '15.000+',
      statTonsSub: 'Toneladas Recicladas/Año',
      statPartners: '450+',
      statPartnersSub: 'Parceiros B2B Activos',
      statHours: '24h',
      statHoursSub: 'Cobertura Logística Nacional',
      statCo2: '-30% Emisiones de CO2 en transporte de logística reversa',
      whyPartnerTitle: '¿Por qué sumarse como socio corporativo?',
      whyPartnerSub: 'Proveemos mucho más que caucho recuperado. Desarrollamos la infraestructura legal, logística y tributaria necesaria para respaldar las auditorías internacionales de su cadena de valor.',
      logisticsTitle: 'Flotas con Seguimiento Satelital',
      logisticsDesc: 'Contamos con camiones de carga de gran volumen transitando diariamente las principales rutas del país, lo cual garantiza que sus chips TDF o gránulos lleguen con puntualidad directo a su planta.',
      logisticsPoint1: 'Seguimiento en línea y coordinación de descargas en tiempo real',
      logisticsPoint2: 'Centros de distribución operativos en San Lorenzo (Asu) y Ciudad del Este',
      pricesTitle: 'Precios por Escala de Volumen',
      pricesDesc: 'Ofrecemos convenientes esquemas de precios para contratos anuales programados y grandes volúmenes de consumo industrial. Reduzca costos de importación de resinas virgenes hasta un 25%.',
      consultTerms: 'Consultar Esquema Comercial',
      certTitle: 'Homologación de Huella Sostenible',
      certDesc: 'Su compañía obtiene de forma oficial el sello registrado institucional \'Socio Sustentable EcoTire\', avalando directamente auditorías de responsabilidad ecológica regulada ante organismos sectoriales.',
      supportTitle: 'Asistencia en Planta',
      supportDesc: 'Nuestros equipos de desarrollo industrial le brindarán asistencia presencial y por videollamada para definir las dosificaciones de asfalto, pirólisis o calderas y optimizar su producción.',
      talkEngineer: 'Contactar Ingeniero de Compuestos',
      formTitle: 'Planifique su suministro con nosotros',
      formSub: 'Complete el formulario institucional para programar envíos y cotizaciones, o solicitar acreditación técnica comercial. Nuestro equipo responderá en un plazo máximo de 24 horas hábiles.',
      salesPhone: 'Mesa de Ventas B2B',
      corporateEmail: 'Correo Corporativo',
      colRespName: 'Responsable de Compra *',
      colCompany: 'Empresa (Razón Social) *',
      colEmail: 'Email Comercial *',
      colVolume: 'Cantidad Mensual Proyectada',
      colInterest: 'Propósito Comercial',
      colMessage: 'Requisitos Particulares o Mensaje',
      colMessagePlaceholder: 'Comente sobre características especiales, frecuencias de entrega, puntos de descarga, etc...',
      colSendBtn: 'Registrar Consulta Corporativa',
      colTermsAgree: 'Al enviar, su empresa presta conformidad a nuestros términos de fletamento B2B y políticas de datos de EcoTire Paraguay.',
      colSuccessTitle: '¡Consulta Recibida con Éxito!',
      colSuccessSub: 'Estimado {nome}, registramos su solicitud de {interesse} para la firma {empresa}.',
      colDetailsHeader: 'Resumen del Registro:',
      colDetailsEmail: 'Correo Comercial',
      colDetailsVolume: 'Volumen Objetivo',
      colDetailsResponse: 'Tiempo de respuesta: Menos de 24 horas hábiles',
      colNewRequestBtn: 'Registrar nueva consulta B2B',
      colNationalPresence: 'Presencia en Puntos Clave',
      colNationalPresenceSub: 'Nuestra red de fletes conecta de manera ágil los principales polos comerciales de Paraguay. Haga hover o click en los indicadores para ver información de depósitos.',
      colCoverFromEndToEnd: 'Distribución y Almacenaje:',
      popPriceTitle: 'Estructura Tarifaria B2B',
      popPriceText: 'Gama de tarifas escalonadas vigentes para Paraguay (facturación en Gs. o USD). Para solicitar los términos legales estándar y la matriz de precios oficiales, escriba a ventas@ecotire.com.py.',
      volumeOption1: 'Hasta 5 toneladas',
      volumeOption2: '5 - 20 toneladas',
      volumeOption3: '20 - 50 toneladas',
      volumeOption4: 'Más de 50 toneladas',
      interestOption1: 'Adquirir Materiales',
      interestOption2: 'Alianza Estratégica',
      interestOption3: 'Coordinar Logística Inversa',
      asuDesc: 'Sede Comercial B2B y Centro de Carga Central',
      asuDetails: 'Garantía en Depósito: 200 t. Logística de fletes nacionales.',
      cdeDesc: 'Depósito Alto Paraná y Planta de Clasificación',
      cdeDetails: 'Operaciones de clasificación. Despachos rápidos de frontera.',
      encDesc: 'Centro Logístico Encarnación (Itapúa)',
      encDetails: 'Cruce para transporte regional y accesos navegables directos.',
      formFieldError: 'Por favor, ingrese todos los campos con marca de obligatorio (*).'
    },
    sustainability: {
      innovationTag: 'Ambiente y Sostenibilidad',
      heroTitle: 'Liderando el Cambio Ecológico de Paraguay',
      heroSub: 'Cuidamos la valiosa biodiversidad de los bosques secos del Chaco paraguayo y aceleramos metas de descarbonización industrial, canalizando el tratamiento y almacenamiento legal de neumáticos en desuso.',
      metricsTitle: 'Herramientas de Evaluación de Impacto',
      metricsSub: 'Calcule las incidencias ambientales positivas simulando el volumen de caucho recuperado por su organización:',
      projectTag: 'Infraestructura Ambiental',
      projectTitle: 'Desarrollos de Sostenibilidad',
      projectSub: 'Revise algunos de los principales complejos viales y deportivos construidos con nuestras tecnologías circulares en la región.',
      technicalSheetBtn: 'Ficha Técnica',
      sheetPopDesc: 'Un hito de pavimentación vial e infraestructura ecológica paraguaya con aditivos EcoTire.',
      stampTag: 'Sello Auditado',
      stampTitle: 'Sello Verde de Responsabilidad',
      stampSub: '¡Compruebe el impacto de sus compras de economía circular! Ingrese los datos de su firma y obtenga un certificado oficial estimulado a partir de sus cargas recicladas.',
      calcTag: 'Calculadoras',
      calcTitle: 'Calculadora de Impacto ESG',
      calcSub: 'Simule las constantes del impacto ecológico con EcoTire',
      formCompLabel: 'Razón Social de la Empresa *',
      formCompPlaceholder: 'Ej: Constructora del Chaco S.A.',
      formVolumeLabel: 'Toneladas de Goma Destinadas',
      btnSimulate: 'Simular Mi Sello de Sostenibilidad',
      btnSimulating: 'Procesando Datos de Auditoría...',
      certOfficialTag: 'ECOTIRE PARAGUAY CERTIFICATION',
      certTitleMain: 'Certificado de Responsabilidad Circular',
      certOfficialReg: 'ID de Documento Auditado',
      certPara1: 'Documenta y avala a todos los efectos de balance anual de sustentabilidad, de reducción de residuos industriales y políticas internas de ESG, que la empresa:',
      certPara2: 'reincorporó con éxito total y absoluta conformidad regulatoria del Paraguay la cantidad de {tons} toneladas de neumáticos en desuso molienda molienda en EcoTire.',
      certPara3: 'Este aporte circular representa una minimización aproximada de {co2} toneladas de CO₂ liberados, equivalente a conservar más de {trees} árboles adultos en la bacia del gran Chaco.',
      certPara4: 'Paraguay, 2026. Sello corporativo auditado oficial.',
      certCouncilTitle: 'AUTORIDAD NACIONAL DE ECOTIRE',
      certCouncilDept: 'Comité de Auditoría de Sostenibilidad',
      printBtn: 'Imprimir Certificado',
      newIssueBtn: 'Restablecer Formulario',
      noStampTitle: 'Sin datos de sello',
      noStampSub: 'Rellene los datos corporativos del asistente para calcular y modelar su Sello Circular en tiempo real.',
      formError: 'Ingrese un nombre de empresa correcto y cantidad mayor de 5.',
      proj1Desc: 'Polímeros de caucho especiales colocados en pistas públicas ofreciendo excelente balance en el rebote.',
      proj2Desc: 'Caminos nacionales reforzados con bitumen fino de mesh modificado, aumentando la durabilidad 30%.',
      proj3Desc: 'Compuestos aislantes de alta performance acústica para estudios multimedia y salas de control corporativas.'
    },
    modalContact: {
      tag: 'Soporte Corporativo',
      title: 'Contactar Sección Comercial',
      sub: 'Complete el formulario institucional para recibir una respuesta de nuestro patio de clasificación y dirección comercial.',
      nameLabel: 'Nombre Completo *',
      namePlaceholder: 'Ej: Carlos Sánchez',
      companyLabel: 'Razón Social de la Empresa',
      companyPlaceholder: 'Ej: Pavimentaciones Paraguayas S.A.',
      emailLabel: 'Email de Trabajo *',
      emailPlaceholder: 'Ej: compras@empresa.com',
      phoneLabel: 'Teléfono / WhatsApp',
      phonePlaceholder: 'Ej: +595 981 123456',
      messageLabel: 'Frecuencia y Requisitos Técnicos',
      messagePlaceholder: 'Comente brevemente sobre el volumen mensual deseado o requisitos de pureza de lote específicos...',
      submitBtn: 'Solicitar Atención Comercial',
      successTitle: '¡Contacto Registrado!',
      successSub: 'Estimado {name}, registramos sus datos de contacto y los direccionamos a nuestro director del polo industrial.',
      fieldCompany: 'Empresa',
      fieldEmail: 'Email',
      fieldPhone: 'Teléfono',
      successNotice: 'Un gerente regional se comunicará en un plazo de 24 horas hábiles para tratar matrices de precios y cronogramas de transporte.',
      concludeBtn: 'Concluir',
      errorAlert: 'Por favor complete la información obligatoria para continuar con la solicitud.'
    },
    esgCalc: {
      calcTag: 'Calculadora de Impacto ESG',
      title: 'Estime las Métricas de su Alianza',
      sub: 'Arrastre el cursor a continuación para ver el impacto ecológico generado por el reciclaje industrial directo.',
      volumeLabel: 'Volumen de Recolección Estimado:',
      volumeUnit: 'Toneladas',
      fiveTons: '5 Tons',
      twoFiftyTons: '250 Tons',
      fiveHundredTons: '500 Tons',
      sevenFiftyTons: '750 Tons',
      oneThousandTons: '1000 Tons',
      co2Title: 'Mitigación de CO2',
      co2Desc: 'Minimizadas del ciclo productivo global.',
      treesTitle: 'Árboles Preservados',
      treesDesc: 'Preservados en la región del Gran Chaco paraguayo.',
      waterTitle: 'Agua Preservada',
      waterDesc: 'Evitadas de consumo y contaminación de efluentes.',
      tiresTitle: 'Neumáticos Retirados',
      tiresDesc: 'Unidades de neumáticos reciclados retirados del ambiente.',
      tiresUnit: 'unid',
      activeCircular: 'Activo Circular Estimado:',
      subtextGranulado: 'Sustituye elastómeros vírgenes de petróleo, evitando la extracción de {tons} toneladas de polímeros sintéticos.',
      subtextPo: 'Aditivo de alto desempeño para asfalto ecológico, pavimentando {tons} km de vías públicas de gran durabilidad.',
      subtextChips: 'Sustituye combustible fósil sólido en hornos de cemento, ahorrando {tons} toneladas de Coque de Petróleo importado.',
      subtextAco: 'Recupera {tons} toneladas de alambres de acero de ultra alta resistencia listos para forja directa sin emisiones de minería.'
    }
  }
};
