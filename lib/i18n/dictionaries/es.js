// Spanish UI strings. Mirrors en.js key for key; if you add a key there,
// add it here too. Neutral/international Spanish rather than a regional
// variant, since the audience is business clients across several countries.

const es = {
  meta: {
    title: 'THODZ SOLUTIONS: estudio de ingeniería full-stack',
    template: '%s · THODZ SOLUTIONS',
    description:
      'THODZ SOLUTIONS diseña, desarrolla y opera sistemas web, móviles, de escritorio e infraestructura para equipos que necesitan hacerlo bien a la primera. Con base en Argelia, trabajando en remoto en francés, inglés y árabe.',
    ogDescription: 'Un solo socio técnico. Todos los sistemas que necesitas.',
    orgDescription:
      'Estudio de ingeniería full-stack que entrega web, móvil, escritorio, DevOps, seguridad, IA/ML, automatización, UI/UX y consultoría técnica.',
  },

  nav: {
    problems: 'Lo que resolvemos',
    work: 'Proyectos',
    howItRuns: 'Cómo trabajamos',
    pricing: 'Precios',
    faq: 'Preguntas',
    about: 'Nosotros',
    bookCall: 'Agendar una llamada',
    startProject: 'Empezar un proyecto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    theme: {
      system: 'Tema: según tu navegador',
      light: 'Tema: claro',
      dark: 'Tema: oscuro',
    },
    languageAuto: 'Automático',
    languageAutoHint: 'Según el navegador',
    languageLabel: 'Idioma',
  },

  footer: {
    blurb:
      'Un estudio de ingeniería full-stack. Sistemas web, móviles, de escritorio e infraestructura, construidos y operados por un único equipo responsable.',
    locale: 'Argelia (UTC+1) · trabajando en remoto',
    company: 'Empresa',
    contact: 'Contacto',
    elsewhere: 'En otros sitios',
    rights: 'Todos los derechos reservados.',
    privacy: 'Privacidad',
    terms: 'Términos',
  },

  engagementCard: {
    scoped: 'Presupuestado por proyecto',
    placeholderFlag: 'provisional',
    bestFor: 'Ideal para',
    billing: 'Facturación',
    includes: 'Incluye',
  },

  notFound: {
    title: 'Página no encontrada',
    body: 'La página que buscas no existe o ha cambiado de sitio.',
    backHome: 'Volver al inicio',
  },

  home: {
    // --- hero
    heroEyebrow: 'Estudio de ingeniería · Argelia',
    heroTitle: 'Cada capa de tu software. Un equipo que responde por ella.',
    heroSub:
      'Diseñamos, desarrollamos y operamos los sistemas web, móviles, de escritorio e infraestructura de los que depende tu negocio, y seguimos disponibles después del lanzamiento.',
    heroCtaPrimary: 'Agendar llamada de 30 min',
    heroCtaSecondary: 'Ver proyectos entregados',
    heroAssuranceReply: 'Respuesta en 1 día hábil',
    heroAssurancePrice: 'Precio cerrado antes de empezar',

    // --- 01 problems
    problemLabel: 'Partimos del problema',
    problemTitle: 'Dinos qué te está frenando. Te mostramos qué construiríamos.',
    problemSub:
      'No necesitas saber qué tecnología hace falta. Elige la frase que se parezca a tu semana.',
    pickerLabel: 'Problemas frecuentes',
    whatWedBuild: 'Qué construiríamos',
    firstStep: 'Primer paso',
    weveShipped: 'Ya lo hemos entregado',
    disciplinesNote: 'Disciplinas de este trabajo, destacadas entre nuestras nueve',

    // --- 02 shipped
    shippedLabel: 'Entregado',
    shippedTitle: 'Sistemas reales, usados a diario.',
    before: 'Antes',
    after: 'Después',
    previous: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    readCase: 'Leer el caso',
    viewAllProjects: 'Ver todos los proyectos',

    // --- proof (hidden until a real, approved quote exists)
    proofEyebrow: 'Lo que dicen los clientes',

    // --- open source
    openSourceLabel: 'Código abierto',
    openSourceTitle: 'Herramientas que hicimos para el mundo, funcionando dentro de tu app.',
    openSourceSub:
      'No solo hacemos apps. Hacemos las herramientas en las que confían otros desarrolladores. Las compartimos libremente con desarrolladores de todo el mundo en pub.dev, el hogar oficial de las herramientas de Flutter. Cuando trabajas con nosotros, tienes ese mismo nivel de ingeniería desde el primer día.',
    openSourceCta: 'Ver en pub.dev',
    openSourceClosing: 'Este es el nivel de detalle que llevamos a cada proyecto, incluido el tuyo.',

    // --- 03 timeline
    timelineLabel: 'Cómo trabajamos',
    timelineTitle: 'Qué recibes en cada paso. Sin sorpresas.',
    timelineSub:
      'Hablas directamente con el ingeniero que construye tu proyecto, y ves avances reales durante todo el camino, no solo al final.',

    // --- 04 pricing
    pricingLabel: 'Precios',
    pricingTitle: 'Ves la cifra antes de que escribamos una línea de código.',
    pricingSub:
      'Tres formas de trabajar juntos. Responde dos preguntas y te indicamos la que encaja.',
    qKnown: '¿Sabes exactamente qué hay que construir?',
    qLive: '¿El sistema ya está en producción?',
    yes: 'Sí',
    no: 'No',
    notYet: 'Todavía no',
    fitsYourAnswers: 'Encaja con tus respuestas',
    cardCta: 'Empezar aquí',
    pricingCta: 'Todos los modelos, facturación y condiciones',

    // --- 05 faq
    faqLabel: 'Antes de firmar',
    faqTitle: 'Las preguntas que los clientes hacen primero.',
    faqSub: '¿Algo más? Pregúntanos por',

    // --- 06 start
    startLabel: 'Empezar',
    startTitle: 'Cuéntanos qué va lento, qué está roto o qué falta.',
    preferToTalk: '¿Prefieres hablar?',
    channelBookSub: 'Elige el horario que te convenga',
    channelEmail: 'Correo',
    startNote:
      'Argelia · UTC+1 · trabajando en remoto con clientes en francés, inglés y árabe.',
  },

  about: {
    metaTitle: 'Nosotros',
    metaDescription:
      'THODZ SOLUTIONS es un estudio de ingeniería full-stack: un socio técnico único para equipos que necesitan hacerlo bien a la primera. Conoce a quienes están detrás.',
    ogDescription: 'Las personas detrás del estudio de ingeniería, y cómo trabajamos.',
    headEyebrow: 'Sobre nosotros',
    heroTitle: 'THODZ SOLUTIONS construye los sistemas que tu hoja de ruta necesita, y sigue disponible tras el lanzamiento.',
    intro1:
      'Somos un estudio de ingeniería full-stack: un solo equipo que cubre web, móvil, escritorio, DevOps, seguridad, IA/ML, automatización, UI/UX y consultoría técnica, para que definas un sistema una vez y no nueve relaciones con proveedores.',
    intro2:
      'Trabajamos en remoto con clientes en distintas zonas horarias, y entregamos en francés, inglés y árabe cuando el proyecto lo pide. Cada encargo incluye una arquitectura documentada, un manual de operación y un ingeniero que sigue localizable después de la puesta en marcha, no un traspaso a una cola de soporte.',
    teamEyebrow: 'Con quién vas a trabajar',
    teamTitleSingle: 'La persona que responde tu correo.',
    teamTitlePlural: 'Las personas que responden tu correo.',
    teamSub: 'Sin gestores de cuenta entre tú y los ingenieros. Hablas con quienes escriben el código.',
    coverEyebrow: 'Qué cubrimos',
    ctaTitle: '¿Tienes un sistema que construir?',
    ctaPrimary: 'Empezar un proyecto',
    ctaSecondary: 'Ver cómo facturamos',
  },

  contact: {
    metaTitle: 'Contacto',
    metaDescription:
      'Cuéntale a THODZ SOLUTIONS qué sistema necesitas. Escríbenos por formulario, WhatsApp, correo o agenda una llamada. Respondemos en un día hábil.',
    ogDescription: 'Una llamada con un ingeniero, no con un comercial. Respondemos en un día hábil.',
    eyebrow: 'Empezar un proyecto',
    title: 'Cuéntanos qué sistema necesitas.',
    bookingDetail: 'Elige el horario que te convenga',
    whatsappLabel: 'WhatsApp',
    whatsappPrefill: 'Hola THODZ, me gustaría hablar sobre un proyecto.',
    emailLabel: 'Correo',
    callLabel: 'Llamar',
    divider: 'o envíanos los detalles',
    nextEyebrow: 'Qué pasa después',
    nextSteps: [
      { title: 'Lo leemos', body: 'Un ingeniero lee tu mensaje. No un sistema de tickets, y no un comercial.' },
      { title: 'Respondemos en un día hábil', body: 'Con las primeras preguntas, una opinión honesta sobre el encaje y una propuesta de horario para hablar.' },
      { title: 'Lo definimos juntos', body: 'Una llamada para concretar el problema, y después un alcance por escrito y una cifra antes de construir nada.' },
    ],
  },

  form: {
    name: 'Nombre',
    email: 'Correo de trabajo',
    company: 'Empresa',
    projectType: 'Tipo de proyecto',
    // Values are what the API receives and stay stable across locales; only
    // labels translate.
    typeOptions: [
      { value: 'Web', label: 'Web' },
      { value: 'Mobile', label: 'Móvil' },
      { value: 'Desktop', label: 'Escritorio' },
      { value: 'DevOps', label: 'DevOps' },
      { value: 'Cybersecurity', label: 'Ciberseguridad' },
      { value: 'AI/ML', label: 'IA/ML' },
      { value: 'Automation', label: 'Automatización' },
      { value: 'UI/UX', label: 'UI/UX' },
      { value: 'Consulting', label: 'Consultoría' },
    ],
    timeline: 'Plazo',
    timelineAsap: 'Lo antes posible',
    timelineQuarter: '1–3 meses',
    timelineFlexible: 'Flexible',
    details: 'Detalles del proyecto',
    detailsPlaceholder: 'Una o dos frases sobre lo que estás construyendo',
    nda: 'Este proyecto está bajo NDA',
    error: 'Algo falló al enviar tu mensaje. Escríbenos directamente a support@thodz.com.',
    sending: 'Enviando…',
    send: 'Enviar',
    privacyPre: 'Usamos estos datos únicamente para responderte. Consulta la ',
    privacyLink: 'política de privacidad',
    privacyPost: '.',
    sentTitle: 'Mensaje enviado',
    sentBody: 'Un ingeniero de THODZ responderá en un día hábil.',
  },

  pricing: {
    metaTitle: 'Precios y modalidades',
    metaDescription:
      'Cómo se estructuran y facturan los encargos de THODZ SOLUTIONS: proyectos a precio cerrado, iguala mensual, planes de soporte y consultoría. Además, quién es dueño del código, qué cubre el contrato y qué pasa tras el lanzamiento.',
    ogDescription: 'Cuatro formas de trabajar con nosotros, y las condiciones que hay detrás.',
    headEyebrow: 'Precios y modalidades',
    headTitle: 'Cuatro formas de trabajar con nosotros.',
    headSub:
      'Cada proyecto se define y se presupuesta antes de empezar, así apruebas una cifra en vez de verla crecer. Estas son las formas que toman esos presupuestos.',
    unsure:
      '¿No sabes cuál encaja? Descríbenos el problema y te diremos cuál de estas es, incluso cuando la respuesta sea «ninguna, para esto no nos necesitas».',
    faqEyebrow: 'Los detalles',
    faqTitle: 'Las preguntas que conviene hacer antes de firmar.',
    faqSub: 'Propiedad del código, facturación, contratos y qué pasa cuando el sistema está en producción.',
    ctaTitle: 'Una cifra, no un folleto.',
    ctaBody:
      'Cuéntanos qué estás construyendo y te respondemos en un día hábil con la modalidad que encaja y lo que costaría.',
    ctaButton: 'Empezar un proyecto',
  },

  work: {
    metaTitle: 'Proyectos',
    metaDescription:
      'Encargos seleccionados entregados por THODZ SOLUTIONS: retail, salud, fintech, logística, edtech y visión por computador aplicada, con capturas de lo entregado.',
    ogDescription: 'Encargos seleccionados, con capturas de lo que realmente se entregó.',
    headEyebrow: 'Proyectos seleccionados',
    headTitle: 'Lo que hemos entregado.',
    headSub: 'Un registro vivo de encargos. Las nuevas entradas aparecen aquí a medida que los proyectos terminan.',
  },

  caseStudy: {
    breadcrumbHome: 'Inicio',
    breadcrumbWork: 'Proyectos',
    back: 'Volver a proyectos',
    clientPrefix: 'Cliente / ',
    headlineResult: 'RESULTADO DESTACADO',
    challenge: 'El reto',
    approach: 'El enfoque',
    result: 'El resultado',
    whatShipped: 'Qué se entregó',
    insideBuild: 'Por dentro',
    nextCase: 'Siguiente caso',
    nextArrow: '→',
    startProject: 'Empezar un proyecto',
  },

  privacy: {
    metaTitle: 'Política de privacidad',
    metaDescription: 'Qué recoge THODZ SOLUTIONS cuando nos escribes, para qué, y cómo pedir que se elimine.',
    ogDescription: 'Qué recogemos, para qué, y cómo pedir que se elimine.',
    title: 'Política de privacidad',
    updated: 'Última actualización: agosto de 2026',
    intro:
      'Este sitio lo gestiona THODZ SOLUTIONS, un estudio de ingeniería con base en Argelia. Esta página describe qué información personal trata el sitio, para qué, y qué puedes hacer al respecto. En corto: recogemos lo que escribes en el formulario de contacto, lo usamos para responderte, y nada más.',
    sections: [
      {
        h: 'Qué recogemos',
        items: [
          {
            lead: 'Formulario de contacto.',
            text: 'Nombre, correo de trabajo, empresa, tipo de proyecto, plazo y los detalles que escribas. Al enviar el formulario nos llegan exactamente esos campos, por correo, para que un ingeniero pueda responder.',
          },
          {
            lead: 'Canales directos.',
            text: 'Si nos escribes por correo, nos llamas o nos mandas un mensaje por WhatsApp, vemos lo que esos servicios nos muestran: tu dirección o número y tu mensaje.',
          },
          {
            lead: 'Preferencia de tema.',
            text: 'El selector claro/oscuro guarda tu elección en tu propio navegador (localStorage). Nunca sale de tu dispositivo.',
          },
        ],
      },
      {
        h: 'Qué no hacemos',
        items: [
          { text: 'Sin rastreadores publicitarios y sin venta ni cesión de tus datos a terceros.' },
          { text: 'Sin listas de marketing: escribirnos no te suscribe a nada.' },
          { text: 'Sin perfilado: tu mensaje lo lee un ingeniero, no lo puntúa una herramienta.' },
        ],
      },
      {
        h: 'Cuánto tiempo lo conservamos',
        ps: [
          'Las consultas de proyecto se conservan mientras siga viva la conversación, o el encargo que surja de ella. Si una consulta no llega a nada, no tenemos motivo para conservarla.',
        ],
      },
      {
        h: 'Tus opciones',
        ps: [
          'Escribe a {email} para preguntar qué información tenemos sobre ti, corregirla o pedir que se elimine. Respondemos en un día hábil, la misma promesa que hacemos para las consultas de proyecto.',
        ],
      },
      {
        h: 'Proveedores de servicio',
        ps: [
          'El sitio está alojado en Cloudflare, los envíos del formulario de contacto se guardan en una base de datos alojada por Supabase, y esos envíos llegan además a nuestra bandeja a través de un servicio de entrega de correo. Los tres tratan datos por cuenta nuestra para prestar esas funciones y para ningún otro fin.',
        ],
      },
      {
        h: 'Cambios',
        ps: [
          'Si esta política cambia, la fecha de arriba cambia con ella. Los cambios sustanciales se indicarán aquí, no se colarán en silencio.',
        ],
      },
    ],
  },

  terms: {
    metaTitle: 'Términos del servicio',
    metaDescription:
      'Los términos que rigen el uso de thodz.com y las condiciones de base sobre las que se construyen los encargos de THODZ SOLUTIONS.',
    ogDescription: 'Los términos del sitio, y la base desde la que parte cada contrato.',
    title: 'Términos del servicio',
    updated: 'Última actualización: agosto de 2026',
    intro:
      'Estos términos cubren tu uso de este sitio web. Los encargos con clientes se rigen por un contrato escrito firmado para cada proyecto; los compromisos de base que siguen describen sobre qué se construyen esos contratos, para que conozcas la forma del acuerdo antes incluso de verlo.',
    sections: [
      {
        h: 'Uso de este sitio',
        items: [
          { text: 'El contenido está aquí para describir nuestros servicios y trabajos anteriores.' },
          {
            text: 'Los casos describen encargos reales. Cuando no se puede nombrar a un cliente, el trabajo se describe sin identificarlo.',
          },
          { text: 'No abuses del sitio: nada de scraping a ritmos abusivos, sondeos ni intentos de interrumpirlo.' },
        ],
      },
      {
        h: 'Base de cada encargo',
        ps: ['Cada contrato de proyecto que firmamos parte de estas posiciones:'],
        items: [
          {
            lead: 'El trabajo es tuyo.',
            text: 'Con el pago completo, el código, los diseños y la documentación producidos para tu proyecto pasan a ser tuyos.',
          },
          {
            lead: 'Alcance y precio se fijan por escrito antes de empezar.',
            text: 'Los cambios se acuerdan como cambios, no se descubren en una factura.',
          },
          {
            lead: 'La confidencialidad es lo normal.',
            text: 'Firmamos un NDA razonable, y tratamos como confidenciales los detalles no publicados del proyecto se firme o no.',
          },
          {
            lead: 'Después del lanzamiento.',
            text: 'La entrega incluye documentación y un manual de operación, además de la cobertura de errores fijada en el contrato.',
          },
        ],
      },
      {
        h: 'Sin garantía sobre el contenido del sitio',
        ps: [
          'El sitio se ofrece tal cual. Lo mantenemos exacto, pero no es asesoramiento ni es un contrato: nada de lo que hay aquí crea un encargo hasta que ambas partes firman un alcance.',
        ],
      },
      {
        h: 'Responsabilidad',
        ps: [
          'En la medida en que lo permita la ley, no respondemos por daños derivados del uso de este sitio web. La responsabilidad dentro de un encargo con cliente se define en el contrato de ese encargo.',
        ],
      },
      {
        h: 'Contacto',
        ps: ['Dudas sobre estos términos: {email}.'],
      },
    ],
  },
};

export default es;
