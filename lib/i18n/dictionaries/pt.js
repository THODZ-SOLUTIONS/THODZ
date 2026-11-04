// Portuguese UI strings (European Portuguese). Mirrors en.js key for key.
// Addresses the reader directly without "você", which reads as Brazilian in
// pt-PT: "a sua equipa", "fale connosco", verb forms in the third person.

const pt = {
  meta: {
    title: 'THODZ SOLUTIONS: estúdio de engenharia full-stack',
    template: '%s · THODZ SOLUTIONS',
    description:
      'A THODZ SOLUTIONS desenha, constrói e opera sistemas web, móveis, de desktop e de infraestrutura para equipas que precisam de os ter bem feitos à primeira. Sediada na Argélia, a trabalhar remotamente em francês, inglês e árabe.',
    ogDescription: 'Um parceiro técnico. Todos os sistemas de que precisa.',
    orgDescription:
      'Estúdio de engenharia full-stack para web, mobile, desktop, DevOps, segurança, IA/ML, automação, UI/UX e consultoria técnica.',
  },

  nav: {
    problems: 'O que resolvemos',
    work: 'Projetos',
    howItRuns: 'Como funciona',
    pricing: 'Preços',
    faq: 'Perguntas',
    about: 'Sobre nós',
    bookCall: 'Marcar uma conversa',
    startProject: 'Começar um projeto',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    theme: {
      system: 'Tema: a seguir o navegador',
      light: 'Tema: claro',
      dark: 'Tema: escuro',
    },
    languageAuto: 'Automático',
    languageAutoHint: 'Seguir o navegador',
    languageLabel: 'Idioma',
  },

  footer: {
    blurb:
      'Um estúdio de engenharia full-stack. Sistemas web, móveis, de desktop e de infraestrutura, construídos e operados por uma equipa que responde por eles.',
    locale: 'Argélia (UTC+1) · a trabalhar remotamente',
    company: 'Empresa',
    contact: 'Contacto',
    elsewhere: 'Noutros sítios',
    rights: 'Todos os direitos reservados.',
    privacy: 'Privacidade',
    terms: 'Termos',
  },

  engagementCard: {
    scoped: 'Orçamentado por projeto',
    placeholderFlag: 'valor indicativo',
    bestFor: 'Indicado para',
    billing: 'Faturação',
    includes: 'Inclui',
  },

  notFound: {
    title: 'Página não encontrada',
    body: 'A página que procurava não existe, ou foi movida.',
    backHome: 'Voltar à página inicial',
  },

  home: {
    // --- hero
    heroEyebrow: 'Estúdio de engenharia · Argélia',
    heroTitle: 'Todas as camadas do seu software. Uma equipa que responde por elas.',
    heroSub:
      'Desenhamos, construímos e operamos os sistemas web, móveis, de desktop e de infraestrutura de que o seu negócio depende, e continuamos contactáveis depois do lançamento.',
    heroCtaPrimary: 'Marcar conversa de 30 min',
    heroCtaSecondary: 'Ver projetos entregues',
    heroAssuranceReply: 'Resposta em 1 dia útil',
    heroAssurancePrice: 'Preço fechado antes de começar',

    // --- 01 problems
    problemLabel: 'Começar pelo problema',
    problemTitle: 'Diga-nos o que está a travar. Mostramos-lhe o que construiríamos.',
    problemSub:
      'Não precisa de saber qual é a tecnologia certa. Escolha a frase que se parece com a sua semana.',
    pickerLabel: 'Problemas comuns',
    whatWedBuild: 'O que construiríamos',
    firstStep: 'Primeiro passo',
    weveShipped: 'Já entregámos isto',
    disciplinesNote: 'Áreas envolvidas neste trabalho, das nossas nove',

    // --- 02 shipped
    shippedLabel: 'Entregue',
    shippedTitle: 'Sistemas reais, usados todos os dias.',
    before: 'Antes',
    after: 'Depois',
    previous: 'Projeto anterior',
    next: 'Projeto seguinte',
    readCase: 'Ler o caso de estudo',
    viewAllProjects: 'Ver todos os projetos',

    // --- proof (hidden until a real, approved quote exists)
    proofEyebrow: 'O que dizem os clientes',

    // --- open source
    openSourceLabel: 'Código aberto',
    openSourceTitle: 'Ferramentas que construímos para o mundo, a trabalhar dentro da sua aplicação.',
    openSourceSub:
      'Não construímos apenas aplicações. Construímos as ferramentas em que outros programadores confiam. Partilhamo-las livremente com programadores de todo o mundo no pub.dev, a casa oficial das ferramentas Flutter. Ao trabalhar connosco, tem esse mesmo nível de engenharia desde o primeiro dia.',
    openSourceCta: 'Ver no pub.dev',
    openSourceClosing:
      'É este o cuidado que levamos a todos os projetos, incluindo o seu.',

    // --- 03 timeline
    timelineLabel: 'Como funciona',
    timelineTitle: 'O que recebe em cada passo. Sem surpresas.',
    timelineSub:
      'Fala diretamente com quem está a construir o seu projeto e vê progresso real do princípio ao fim, não apenas no final.',

    // --- 04 pricing
    pricingLabel: 'Preços',
    pricingTitle: 'Vê o valor antes de escrevermos uma linha de código.',
    pricingSub:
      'Três formas de trabalharmos juntos. Responda a duas perguntas e indicamos a que se ajusta.',
    qKnown: 'Sabe exatamente o que precisa de ser construído?',
    qLive: 'O sistema já está no ar?',
    yes: 'Sim',
    no: 'Não',
    notYet: 'Ainda não',
    fitsYourAnswers: 'Ajusta-se às suas respostas',
    cardCta: 'Começar aqui',
    pricingCta: 'Todos os modelos, faturação e condições',

    // --- 05 faq
    faqLabel: 'Antes de assinar',
    faqTitle: 'As perguntas que os clientes nos fazem primeiro.',
    faqSub: 'Mais alguma coisa? Pergunte em',

    // --- 06 start
    startLabel: 'Começar',
    startTitle: 'Diga-nos o que está lento, partido ou em falta.',
    preferToTalk: 'Prefere falar?',
    channelBookSub: 'Escolha um horário que lhe dê jeito',
    channelEmail: 'E-mail',
    startNote:
      'Argélia · UTC+1 · a trabalhar remotamente com clientes em francês, inglês e árabe.',
  },

  about: {
    metaTitle: 'Sobre nós',
    metaDescription:
      'A THODZ SOLUTIONS é um estúdio de engenharia full-stack: um parceiro técnico único para equipas que precisam de ter as coisas bem feitas à primeira. Conheça quem está por trás.',
    ogDescription: 'As pessoas por trás do estúdio de engenharia, e como trabalhamos.',
    headEyebrow: 'Sobre nós',
    heroTitle:
      'A THODZ SOLUTIONS constrói os sistemas de que o seu roadmap precisa, e continua disponível depois do lançamento.',
    intro1:
      'Somos um estúdio de engenharia full-stack: uma equipa a cobrir web, mobile, desktop, DevOps, segurança, IA/ML, automação, UI/UX e consultoria técnica. Assim orçamenta um sistema uma vez, em vez de gerir nove fornecedores.',
    intro2:
      'Trabalhamos remotamente com clientes em vários fusos horários e entregamos em francês, inglês e árabe quando o projeto o exige. Cada trabalho leva uma arquitetura documentada, um manual de operação e um engenheiro que continua contactável depois de o sistema entrar no ar, em vez de uma passagem para uma fila de suporte.',
    teamEyebrow: 'Com quem vai trabalhar',
    teamTitleSingle: 'A pessoa que responde ao seu e-mail.',
    teamTitlePlural: 'As pessoas que respondem aos seus e-mails.',
    teamSub:
      'Sem gestores de conta entre si e os engenheiros. Fala com quem escreve o código.',
    coverEyebrow: 'O que cobrimos',
    ctaTitle: 'Tem um sistema para construir?',
    ctaPrimary: 'Começar um projeto',
    ctaSecondary: 'Ver como faturamos',
  },

  contact: {
    metaTitle: 'Contacto',
    metaDescription:
      'Fale à THODZ SOLUTIONS do sistema de que precisa. Chegue até nós por formulário, WhatsApp, e-mail ou uma conversa marcada. Respondemos em um dia útil.',
    ogDescription:
      'Uma conversa com um engenheiro, não com um comercial. Respondemos em um dia útil.',
    eyebrow: 'Começar um projeto',
    title: 'Fale-nos do sistema de que precisa.',
    bookingDetail: 'Escolha um horário que lhe dê jeito',
    whatsappLabel: 'WhatsApp',
    whatsappPrefill: 'Olá THODZ, gostava de falar sobre um projeto.',
    emailLabel: 'E-mail',
    callLabel: 'Telefonar',
    divider: 'ou envie os detalhes',
    nextEyebrow: 'O que acontece a seguir',
    nextSteps: [
      {
        title: 'Lemos a sua mensagem',
        body: 'Quem lê a mensagem é um engenheiro. Não é uma ferramenta de encaminhamento nem um comercial.',
      },
      {
        title: 'Respondemos em um dia útil',
        body: 'Com as primeiras perguntas, uma leitura honesta sobre o encaixe e uma proposta de horário para falar.',
      },
      {
        title: 'Definimos o âmbito juntos',
        body: 'Uma conversa para fechar o problema, depois um âmbito escrito e um valor antes de se construir o que quer que seja.',
      },
    ],
  },

  form: {
    name: 'Nome',
    email: 'E-mail profissional',
    company: 'Empresa',
    projectType: 'Tipo de projeto',
    // Values are what the API receives and stay stable across locales; only
    // labels translate.
    typeOptions: [
      { value: 'Web', label: 'Web' },
      { value: 'Mobile', label: 'Mobile' },
      { value: 'Desktop', label: 'Desktop' },
      { value: 'DevOps', label: 'DevOps' },
      { value: 'Cybersecurity', label: 'Cibersegurança' },
      { value: 'AI/ML', label: 'IA/ML' },
      { value: 'Automation', label: 'Automação' },
      { value: 'UI/UX', label: 'UI/UX' },
      { value: 'Consulting', label: 'Consultoria' },
    ],
    timeline: 'Prazo',
    timelineAsap: 'O mais cedo possível',
    timelineQuarter: '1 a 3 meses',
    timelineFlexible: 'Flexível',
    details: 'Detalhes do projeto',
    detailsPlaceholder: 'Uma ou duas frases sobre o que está a construir',
    nda: 'Este projeto está sob acordo de confidencialidade',
    error:
      'Algo correu mal ao enviar a sua mensagem. Escreva-nos diretamente para support@thodz.com.',
    sending: 'A enviar…',
    send: 'Enviar',
    privacyPre: 'Usamos estes dados apenas para lhe responder. Consulte a ',
    privacyLink: 'política de privacidade',
    privacyPost: '.',
    sentTitle: 'Mensagem enviada',
    sentBody: 'Um engenheiro da THODZ responde em um dia útil.',
  },

  pricing: {
    metaTitle: 'Preços e formas de trabalho',
    metaDescription:
      'Como os trabalhos da THODZ SOLUTIONS são estruturados e faturados: projetos a preço fechado, avenças mensais, planos de suporte e consultoria. E ainda: de quem é o código, o que o contrato cobre e o que acontece depois do lançamento.',
    ogDescription: 'Quatro formas de trabalhar connosco, e as condições por trás delas.',
    headEyebrow: 'Preços e formas de trabalho',
    headTitle: 'Quatro formas de trabalhar connosco.',
    headSub:
      'Cada projeto é definido e orçamentado antes de começar, por isso aprova um valor em vez de o ver acumular-se. Estas são as formas que esses orçamentos tomam.',
    unsure:
      'Não tem a certeza de qual se ajusta? Descreva o problema e dizemos-lhe qual destas é, incluindo quando a resposta for «nenhuma delas, não precisa de nós para isto».',
    faqEyebrow: 'Os detalhes',
    faqTitle: 'As perguntas que vale a pena fazer antes de assinar.',
    faqSub: 'Propriedade do código, faturação, contratos, e o que acontece quando o sistema entra no ar.',
    ctaTitle: 'Um valor, não um folheto.',
    ctaBody:
      'Diga-nos o que está a construir e voltamos em um dia útil com o modelo que se ajusta e quanto custaria.',
    ctaButton: 'Começar um projeto',
  },

  work: {
    metaTitle: 'Projetos',
    metaDescription:
      'Trabalhos selecionados entregues pela THODZ SOLUTIONS: retalho, saúde, fintech, logística, educação e visão computacional aplicada, com imagens do que foi para o ar.',
    ogDescription: 'Trabalhos selecionados, com imagens do que foi realmente para o ar.',
    headEyebrow: 'Trabalhos selecionados',
    headTitle: 'O que já entregámos.',
    headSub:
      'Um registo contínuo dos nossos trabalhos. Novas entradas aparecem aqui à medida que os projetos terminam.',
  },

  caseStudy: {
    breadcrumbHome: 'Início',
    breadcrumbWork: 'Projetos',
    back: 'Voltar aos projetos',
    clientPrefix: 'Cliente / ',
    headlineResult: 'RESULTADO PRINCIPAL',
    challenge: 'O desafio',
    approach: 'A abordagem',
    result: 'O resultado',
    whatShipped: 'O que foi entregue',
    insideBuild: 'Por dentro',
    nextCase: 'Caso seguinte',
    nextArrow: '→',
    startProject: 'Começar um projeto',
  },

  privacy: {
    metaTitle: 'Política de privacidade',
    metaDescription:
      'O que a THODZ SOLUTIONS recolhe quando nos contacta, porquê, e como pedir a remoção.',
    ogDescription: 'O que recolhemos, porquê, e como pedir a remoção.',
    title: 'Política de privacidade',
    updated: 'Última atualização: agosto de 2026',
    intro:
      'Este site é operado pela THODZ SOLUTIONS, um estúdio de engenharia sediado na Argélia. Esta página descreve que dados pessoais o site trata, porquê, e o que pode fazer quanto a isso. A versão curta: recolhemos o que escreve no formulário de contacto, usamo-lo para lhe responder, e mais nada.',
    sections: [
      {
        h: 'O que recolhemos',
        items: [
          {
            lead: 'Formulário de contacto.',
            text: 'Nome, e-mail profissional, empresa, tipo de projeto, prazo e os detalhes do projeto que escrever. Ao enviar o formulário, são exatamente esses campos que nos chegam, por e-mail, para que um engenheiro possa responder.',
          },
          {
            lead: 'Canais diretos.',
            text: 'Se nos escrever, telefonar ou enviar mensagem por WhatsApp, vemos o que esses serviços nos mostram: o seu endereço ou número e a sua mensagem.',
          },
          {
            lead: 'Preferência de tema.',
            text: 'O botão claro/escuro guarda a sua escolha no seu próprio navegador (localStorage). Nunca sai do seu dispositivo.',
          },
        ],
      },
      {
        h: 'O que não fazemos',
        items: [
          { text: 'Sem rastreadores publicitários e sem venda ou partilha dos seus dados com terceiros.' },
          { text: 'Sem listas de marketing: contactar-nos não o inscreve em nada.' },
          { text: 'Sem criação de perfis: a sua mensagem é lida por um engenheiro, não pontuada por uma ferramenta.' },
        ],
      },
      {
        h: 'Durante quanto tempo guardamos',
        ps: [
          'Os pedidos de projeto ficam guardados enquanto a conversa, ou o trabalho que dela resulte, estiver a decorrer. Se nada vier de um pedido, não temos razão para o manter.',
        ],
      },
      {
        h: 'As suas opções',
        ps: [
          'Escreva para {email} para saber que dados temos sobre si, pedir a sua correção ou a sua eliminação. Respondemos em um dia útil, a mesma promessa que fazemos para pedidos de projeto.',
        ],
      },
      {
        h: 'Prestadores de serviços',
        ps: [
          'O site está alojado na Cloudflare, as submissões do formulário de contacto são guardadas numa base de dados alojada pela Supabase, e essas submissões chegam também à nossa caixa de entrada através de um serviço de envio de e-mail. Os três tratam dados por nossa conta para prestar essas funções e para mais nenhum fim.',
        ],
      },
      {
        h: 'Alterações',
        ps: [
          'Se esta política mudar, a data no topo muda com ela. As alterações substanciais ficam assinaladas aqui, e não introduzidas em silêncio.',
        ],
      },
    ],
  },

  terms: {
    metaTitle: 'Termos de serviço',
    metaDescription:
      'As condições que regem a utilização de thodz.com e as condições de base em que assentam os trabalhos da THODZ SOLUTIONS.',
    ogDescription:
      'As condições por trás do site, e a base de que parte cada contrato de projeto.',
    title: 'Termos de serviço',
    updated: 'Última atualização: agosto de 2026',
    intro:
      'Estes termos abrangem a utilização deste site. Os trabalhos com clientes regem-se por um contrato escrito assinado por projeto; os compromissos de base abaixo descrevem aquilo em que esses contratos assentam, para que conheça a forma do acordo antes sequer de ver um.',
    sections: [
      {
        h: 'Utilização deste site',
        items: [
          { text: 'O conteúdo aqui serve para descrever os nossos serviços e trabalhos anteriores.' },
          {
            text: 'Os casos de estudo descrevem trabalhos reais. Quando um cliente não pode ser identificado, o trabalho é descrito sem o identificar.',
          },
          {
            text: 'Não faça uso indevido do site: sem recolha automática a ritmos abusivos, sondagens ou tentativas de o perturbar.',
          },
        ],
      },
      {
        h: 'Base de cada trabalho',
        ps: ['Todos os contratos de projeto que assinamos partem destas posições:'],
        items: [
          {
            lead: 'O trabalho é seu.',
            text: 'Com o pagamento integral, o código, os desenhos e a documentação produzidos para o seu projeto passam para si.',
          },
          {
            lead: 'Âmbito e preço ficam escritos antes de o trabalho começar.',
            text: 'As alterações são acordadas como alterações, não descobertas numa fatura.',
          },
          {
            lead: 'A confidencialidade é a regra.',
            text: 'Assinamos um acordo de confidencialidade razoável e tratamos os detalhes não publicados do projeto como confidenciais, quer haja ou não um assinado.',
          },
          {
            lead: 'Depois do lançamento.',
            text: 'A entrega inclui documentação e um manual de operação, e a correção de erros definida no contrato.',
          },
        ],
      },
      {
        h: 'Sem garantia sobre o conteúdo do site',
        ps: [
          'O site é fornecido tal como está. Mantemo-lo rigoroso, mas não é aconselhamento nem é um contrato: nada aqui cria um trabalho até que um âmbito seja assinado por ambas as partes.',
        ],
      },
      {
        h: 'Responsabilidade',
        ps: [
          'Na medida permitida por lei, não somos responsáveis por danos decorrentes da utilização deste site. A responsabilidade dentro de um trabalho com cliente é definida no contrato desse trabalho.',
        ],
      },
      {
        h: 'Contacto',
        ps: ['Questões sobre estes termos: {email}.'],
      },
    ],
  },
};

export default pt;
