// Spanish content overlay. Lists mirror the order of lib/content.js and carry
// only the translatable fields; case studies are keyed by slug. Structural
// data (slugs, stacks, images, links) lives once, in lib/content.js.

const es = {
  services: [
    { title: 'Desarrollo web', description: 'Aplicaciones full-stack y sitios de marketing pensados para escalar, de frontends en React a APIs sobre Postgres.' },
    { title: 'Apps móviles', description: 'Apps nativas iOS/Android y multiplataforma publicadas en las tiendas, no un archivo de Figma.' },
    { title: 'Software de escritorio', description: 'Herramientas de escritorio multiplataforma para operaciones internas, ingeniería y entornos regulados.' },
    { title: 'DevOps', description: 'CI/CD, orquestación de contenedores e infraestructura como código, con despliegues medidos en minutos.' },
    { title: 'Ciberseguridad', description: 'Modelado de amenazas, endurecimiento y arquitectura segura por defecto para equipos que no pueden permitirse una brecha.' },
    { title: 'Soluciones de IA / ML', description: 'ML aplicado: recomendación, previsión y flujos apoyados en LLM, puestos en producción.' },
    { title: 'Automatización', description: 'Sustituye las operaciones manuales por procesos resilientes: sincronización de datos, informes, herramientas internas.' },
    { title: 'Diseño UI/UX', description: 'Interfaces diseñadas para quienes las usarán a diario, no solo para la demo.' },
    { title: 'Consultoría de proyecto', description: 'Due diligence técnica, revisión de arquitectura y planificación de hoja de ruta para equipos directivos.' },
  ],

  process: [
    { title: 'Descubrir', description: 'Alcance, restricciones y métricas de éxito: una auditoría técnica breve, no una presentación comercial.' },
    { title: 'Diseñar', description: 'Diseño del sistema, registro de riesgos y un plan de entrega que tu equipo puede revisar línea por línea.' },
    { title: 'Construir', description: 'Entrega iterativa en incrementos semanales, visibles en un entorno de pruebas desde la primera semana.' },
    { title: 'Lanzar', description: 'Puesta en producción con plan de vuelta atrás, monitorización y un manual de operación que se queda tu equipo.' },
    { title: 'Acompañar', description: 'Guardia y contrato de mantenimiento, o un traspaso limpio. Tú decides.' },
  ],

  values: [
    { title: 'Un solo equipo responsable', description: 'Sin traspasos entre desconocidos. Los ingenieros que definen tu proyecto son los que lo entregan.' },
    { title: 'Documentado por defecto', description: 'Las decisiones de arquitectura, los manuales de operación y los contratos de API quedan por escrito, no en la cabeza de alguien.' },
    { title: 'Pensado para el traspaso', description: 'Cada encargo termina con tu equipo capaz de operar el sistema sin nosotros, sigas o no con nosotros.' },
  ],

  team: [
    {
      role: 'Fundador y responsable técnico',
      bio: 'Hatem define y dirige cada encargo de THODZ. Viene de la criptografía y la seguridad de sistemas, y ha trabajado como responsable técnico en entregas de web, móvil y ML aplicado: las mismas tres áreas donde aterrizan la mayoría de los proyectos de THODZ.',
      credentials: [
        'Máster en criptografía y seguridad de la información',
        'Responsable técnico en entregas de web, móvil y ML aplicado',
        'Trabaja en francés, inglés y árabe',
      ],
    },
  ],

  engagements: [
    {
      name: 'Proyecto a precio cerrado',
      placeholderPrice: 'Desde 6.000 €',
      bestFor: 'Un sistema definido con un alcance conocido: construir un producto, rehacerlo o migrarlo.',
      billing: 'Por hitos. Un anticipo para empezar y el resto repartido entre los hitos de entrega acordados.',
      includes: [
        'Auditoría inicial y alcance por escrito',
        'Documento de arquitectura y registro de riesgos',
        'Incrementos semanales en un entorno de pruebas',
        'Manual de operación y traspaso en la entrega',
        '30 días de cobertura de errores tras el lanzamiento',
      ],
    },
    {
      name: 'Iguala mensual',
      placeholderPrice: 'Desde 2.500 € / mes',
      bestFor: 'Trabajo de producto continuo donde el alcance cambia: una hoja de ruta más que un entregable único.',
      billing: 'Una cuota mensual fija por una capacidad acordada. Cancelable con 30 días de preaviso.',
      includes: [
        'Capacidad de ingeniería acordada cada mes',
        'Planificación y priorización de la hoja de ruta',
        'Entrega continua a tus entornos',
        'Canal directo con los ingenieros que lo construyen',
        'Resumen mensual de avances por escrito',
      ],
    },
    {
      name: 'Soporte y operación',
      placeholderPrice: 'Desde 600 € / mes',
      bestFor: 'Un sistema ya en producción, tuyo o nuestro, mantenido al día, monitorizado y vivo.',
      billing: 'Una cuota mensual fija según el nivel de respuesta. Sin permanencia más allá de los tres primeros meses.',
      includes: [
        'Monitorización, alertas y actualización de dependencias',
        'Ventana de respuesta acordada para incidencias',
        'Cambios y arreglos pequeños dentro de un cupo mensual',
        'Revisión trimestral de seguridad y dependencias',
        'Vía de escalado al equipo que lo construyó',
      ],
    },
    {
      name: 'Consultoría y auditoría',
      placeholderPrice: 'Desde 1.200 €',
      bestFor: 'Necesitas una decisión, no una construcción: revisión de arquitectura, due diligence técnica, una segunda opinión.',
      billing: 'Precio cerrado para un encargo definido, o tarifa por jornada para asesoría continua.',
      includes: [
        'Revisión del código y de la arquitectura',
        'Evaluación de seguridad e infraestructura',
        'Hallazgos por escrito con remediación priorizada',
        'Sesión de presentación con tu equipo o tu consejo',
      ],
    },
  ],

  faq: [
    {
      q: '¿De quién es el código que escribís?',
      a: 'Tuyo. Con el pago final, todo el código fuente, los diseños y la documentación producidos para tu proyecto pasan a ser tuyos por completo, incluido el historial del repositorio. No nos quedamos ninguna licencia sobre tu producto y no reutilizamos tu código en el sistema de otro cliente. Cuando un proyecto usa componentes de código abierto, sus propias licencias siguen aplicando, y las listamos todas en la documentación de traspaso.',
    },
    {
      q: '¿Cómo funciona la facturación?',
      a: 'Los proyectos a precio cerrado se facturan contra hitos de entrega: un anticipo para empezar y después el resto a medida que se acepta cada hito. Las igualas y los planes de soporte se facturan mensualmente por adelantado. Las facturas se pagan en EUR, USD o DZD por transferencia bancaria. Cada factura indica exactamente qué cubre.',
    },
    {
      q: '¿Qué cubre el contrato?',
      a: 'Un acuerdo por escrito antes de empezar cualquier trabajo, que cubre alcance, hitos, condiciones de pago, cesión de propiedad intelectual, confidencialidad y cómo puede terminar el encargo cualquiera de las partes. Las peticiones de cambio se presupuestan y se acuerdan por escrito antes de construirlas, así el alcance nunca crece en silencio dentro de tu factura.',
    },
    {
      q: '¿Firmáis un NDA?',
      a: 'Sí, y firmamos el tuyo en vez de insistir en el nuestro. Marca la casilla de NDA en el formulario de contacto y lo resolvemos antes de que nos envíes nada sensible. Todo encargo está cubierto por confidencialidad mutua se firme o no un NDA aparte.',
    },
    {
      q: '¿Qué pasa después del lanzamiento?',
      a: 'Cada proyecto se entrega con un manual de operación, un documento de arquitectura y una sesión de traspaso, para que tu equipo pueda operar el sistema sin nosotros. Los proyectos a precio cerrado incluyen 30 días de cobertura de errores tras el lanzamiento. A partir de ahí puedes pasar a un plan de soporte, o llevarlo totalmente en casa: ambos son finales normales, y no retenemos tu infraestructura para retenerte a ti.',
    },
    {
      q: '¿Con qué rapidez respondéis?',
      a: 'En un día hábil desde tu primer mensaje, de parte de un ingeniero y no de un equipo comercial. A partir de ahí, la primera llamada para definir el trabajo suele ocurrir esa misma semana.',
    },
    {
      q: '¿Dónde estáis y qué zonas horarias cubrís?',
      a: 'Estamos en Argel, Argelia (UTC+1) y trabajamos en remoto con clientes de Europa, Oriente Medio y Norteamérica. Nuestro horario solapa toda la jornada laboral europea y buena parte de la mañana de la costa este de EE. UU.',
    },
    {
      q: '¿En qué idiomas trabajáis?',
      a: 'Francés, inglés y árabe. Eso cubre reuniones, documentación escrita y el propio producto: construimos interfaces multilingües, incluidas disposiciones de derecha a izquierda para el árabe, como parte normal de la entrega y no como un añadido.',
    },
  ],

  disciplines: ['Web', 'Móvil', 'Escritorio', 'DevOps', 'Ciberseguridad', 'IA / ML', 'Automatización', 'UI/UX', 'Consultoría'],

  problems: [
    {
      title: 'Quiero vender o aceptar reservas por internet',
      build: 'Una tienda o plataforma de reservas con pago en línea y contra reembolso, cálculo de envío y una administración que tu equipo maneja solo.',
      gets: ['Catálogo, carrito y pago', 'Administración de pedidos, stock y precios', 'Alojamiento, copias de seguridad y monitorización'],
      first: 'Una llamada de 30 min y, en la primera semana, un alcance por escrito.',
      refLabel: 'SADJIA CERAM: catálogo y estimador de precio en vivo',
    },
    {
      title: 'Nuestras operaciones siguen en hojas de cálculo y llamadas',
      build: 'Una única herramienta interna para lo que hoy llevas a mano (pedidos, envíos, facturas, personal), con los informes incluidos.',
      gets: ['App de escritorio o web, tú eliges', 'Facturación e informes en un solo sitio', 'Roles para que cada persona vea lo suyo'],
      first: 'Nos sentamos a ver cómo trabaja hoy tu equipo y lo mapeamos.',
      refLabel: 'Panel de distribución: escritorio y web, un solo código',
    },
    {
      title: 'Tenemos una idea de app y hay que sacarla',
      build: 'Tu producto llevado de la idea a App Store y Google Play: iOS, Android y web desde un solo código.',
      gets: ['Diseño navegable antes del código', 'Versiones semanales que puedes instalar', 'Publicación en tiendas incluida'],
      first: 'Una sesión de definición para recortar la versión uno a lo que importa.',
      refLabel: 'Little Hafiz: app Flutter que funciona sin conexión',
    },
    {
      title: 'Nuestro sistema actual es lento, frágil o inseguro',
      build: 'Una auditoría y después una decisión por escrito: arreglar lo que tienes o reconstruirlo, seguido de endurecimiento, CI/CD y monitorización.',
      gets: ['Auditoría de seguridad y rendimiento', 'Lista de arreglos priorizada y con costes', 'Despliegues automáticos y alertas'],
      first: 'Acceso de solo lectura y un informe de auditoría breve.',
      refLabel: null,
    },
    {
      title: 'Queremos usar IA donde de verdad ayude',
      build: 'IA integrada en un flujo real, con un paso de aprobación humana: redactar, clasificar, prever o recomendar.',
      gets: ['Un flujo, medido antes y después', 'Revisión humana donde importa', 'Tus datos siguen bajo tu control'],
      first: 'Elegimos un flujo y definimos qué significa «mejor».',
      refLabel: 'Plataforma de seguimiento crónico: la IA redacta, los médicos aprueban',
    },
    {
      title: 'Necesitamos una segunda opinión técnica',
      build: 'Una revisión independiente de una arquitectura, una propuesta de proveedor o un código, por escrito y en lenguaje claro.',
      gets: ['Revisión de arquitectura y código', 'Riesgos ordenados por impacto', 'Una hoja de ruta que tu equipo pueda seguir'],
      first: 'Comparte lo que tengas; confirmamos alcance y precio.',
      refLabel: null,
    },
  ],

  timeline: [
    { title: 'Hablas con un ingeniero, no con un comercial.', text: 'Quien lee tu mensaje es quien entiende la tecnología. Te llama para entender tu negocio y lo que necesitas.' },
    { title: 'Un plan claro por escrito.', text: 'Estudiamos tu proyecto y lo ponemos todo por escrito: qué vamos a construir, qué podría salir mal y cómo mediremos el éxito. Sin promesas vagas.' },
    { title: 'Un precio cerrado.', text: 'Recibes el plan completo y un precio cerrado. Nada empieza hasta que lo apruebas.' },
    { title: 'Pruébalo tú mientras lo construimos.', text: 'Desde pronto tienes una versión privada de tu producto que puedes abrir y usar. Se actualiza con regularidad, así das tu opinión cuando los cambios todavía son fáciles y baratos.' },
    { title: 'Salida a producción con red.', text: 'Lo lanzamos para tus clientes y lo vigilamos de cerca. Si algo va mal, podemos volver a la versión anterior en minutos, antes incluso de que tus clientes lo noten. También recibes una guía sencilla para operarlo.' },
    { title: 'Arreglo de errores incluido, y después decides.', text: 'Cualquier error tras el lanzamiento se arregla como parte del proyecto, dentro del periodo de soporte incluido. Después, sigue con nosotros para el soporte o toma el control por completo, con todo entregado.' },
  ],

  openSource: [
    {
      tagline: 'Tu cliente paga una vez. Nunca dos.',
      description: 'Un cliente pulsa «Pagar» justo cuando se le cae la conexión. ¿Se hizo el pago? La mayoría de las apps lo adivinan, y adivinar significa cobros duplicados, llamadas enfadadas y devoluciones. La nuestra lo consulta con tu sistema y obtiene la respuesta real, siempre. Tu dinero y tu reputación quedan protegidos, incluso con la peor cobertura.',
    },
    {
      tagline: 'Datos al día, sin la espera.',
      description: 'Los precios cambian, el stock se agota, los pedidos se actualizan. La mayoría de las apps o muestran información desfasada o recargan tanto que gastan batería y se vuelven lentas. La nuestra lo actualiza todo en el momento justo, en una sola recarga limpia. Tus clientes ven siempre la verdad, y la app sigue rápida.',
    },
    {
      tagline: 'Tus mensajes llegan de verdad.',
      description: 'Gastas dinero en recuperar clientes con promociones, recordatorios y avisos de pedido. Pero en los Android e iPhone más nuevos, muchas apps pierden en silencio el permiso para notificar, y esos mensajes nunca llegan. La nuestra gestiona cada caso correctamente, así que cada mensaje que pagas por enviar llega a una persona real.',
    },
  ],

  caseStudies: {
    'dentidz-dental-booking': {
      tag: 'Salud · SaaS',
      title: 'DentiDZ: reservas dentales para clínicas de Argelia',
      metaTitle: 'DentiDZ: citas dentales en Argelia',
      metaDescription: 'Plataforma multiclínica de citas dentales en Argelia: app de pacientes en Flutter, panel en árabe y depósitos que reducen las ausencias.',
      summary: 'Una plataforma multiclínica de citas dentales para Argelia: los pacientes reservan desde una app Flutter, las clínicas gestionan su día desde un panel en árabe y un depósito de reserva hace que la cita valga la pena cumplirla.',
      metric: '5 roles · 3 apps · 1 backend',
      before: 'Los pacientes reservaban por teléfono, y una cita perdida le costaba a la clínica todo el hueco.',
      after: 'Los pacientes reservan y pagan un depósito en la app; la clínica ve cada cita y cada pago en un solo panel.',
      challenge: 'Las clínicas dentales de Argelia pierden horas cada semana por citas a las que nadie acude. Se reserva por teléfono, el paciente no arriesga nada y la clínica descubre que el hueco está vacío cuando lo está el sillón. Una herramienta de reservas por sí sola no lo resuelve, y una para una sola clínica no escala: la plataforma tenía que alojar muchas clínicas independientes, separar estrictamente sus pacientes y su dinero, y aun así permitir que un paciente buscara en todas por wilaya, servicio y disponibilidad.',
      approach: 'Construimos un único backend FastAPI sobre PostgreSQL con tres clientes: una app Flutter para pacientes, un panel Next.js para el personal de la clínica y una consola de Super Admin para la plataforma. Cada petición lleva su clínica, y el control de acceso por roles separa propietario, dentista, secretaría, paciente y administrador, de modo que el aislamiento se impone en el servidor y no se confía a la interfaz. Los huecos se bloquean contra la doble reserva y cada cita sigue un ciclo de vida explícito: pago pendiente, confirmada, completada, cancelada, ausencia, reembolsada o caducada. Una capa de pagos cobra el depósito, con BaridiMob confirmado manualmente hasta conectar el pago con tarjeta. Las clínicas pagan una suscripción que la plataforma hace cumplir. Toda la interfaz está en árabe, de derecha a izquierda.',
      result: 'La plataforma está lista para demostración y preparada para el despliegue: las pruebas del backend pasan, las migraciones y los datos iniciales funcionan en Supabase y una prueba de humo valida la configuración de producción antes de cualquier puesta en marcha. El depósito, el ciclo de vida de las citas y las suscripciones pasaron control de calidad de principio a fin. Queda lo que depende de contratos externos y no de código: pagos reales con CIB y Edahabia, recordatorios por SMS y WhatsApp, mapas reales y la publicación en las tiendas.',
      outcomes: [
        'Varias clínicas, aisladas en el servidor por pertenencia',
        'Cinco roles: Super Admin, propietario, dentista, secretaría y paciente',
        'Búsqueda por wilaya, dentista, servicio y disponibilidad',
        'Doble reserva bloqueada y ciclo de vida de siete estados',
        'Depósitos mediante una capa de pagos, BaridiMob confirmado manualmente',
        'Planes SaaS y suscripción aplicada por clínica',
        'Autenticación JWT con rotación de tokens de refresco',
        'Panel web y app móvil en árabe, de derecha a izquierda',
      ],
      images: [
        { alt: 'Panel de clínica de DentiDZ en árabe con las citas de hoy, reservas confirmadas, ingresos y tasa de ausencias', caption: 'El panel de la clínica: citas de hoy, ingresos y ausencias' },
        { alt: 'Tres pantallas de la app de pacientes de DentiDZ: búsqueda por wilaya y servicio, dentistas cercanos y elección de hora', caption: 'La app del paciente: buscar, elegir dentista, elegir hora' },
        { alt: 'Perfil de un dentista, pago del depósito con CIB, Edahabia, BaridiMob o en la clínica, y próximas citas del paciente', caption: 'Perfil, depósito y las citas del paciente' },
        { alt: 'Gestión de citas de DentiDZ con estado de pago, aceptar y rechazar, y asistencia de cada reserva', caption: 'Citas: aceptar o rechazar, y registrar la asistencia' },
        { alt: 'Panel de Super Admin de DentiDZ con ingresos de la plataforma, clínicas, reservas y planes', caption: 'Super Admin: clínicas, planes e ingresos de la plataforma' },
      ],
    },
    'education-centre-management': {
      tag: 'Educación · Web',
      title: 'Una plataforma para academias y centros de formación',
      metaTitle: 'Plataforma para centros educativos',
      metaDescription: 'Plataforma para academias y centros de formación: cursos, profesores, avisos y web pública, gestionados desde un único panel en árabe.',
      summary: 'Una plataforma de gestión para academias de refuerzo y centros de formación: una web pública con cursos y noticias, un panel para cursos, profesores y contenidos, y un portal donde cada profesor mantiene su perfil.',
      metric: 'Web pública + panel + portal docente',
      before: 'Cursos, profesores y avisos vivían en hojas de cálculo, grupos de WhatsApp y papel.',
      after: 'Un solo panel publica cursos y noticias, y la web pública se actualiza con ellos.',
      challenge: 'Una academia o centro de formación vive de información que cambia cada semana: qué cursos empiezan, cuánto cuestan, quién los imparte, cuántas plazas quedan y qué aviso no pueden perderse los alumnos. La mayoría lo reparte entre hojas de cálculo, grupos de WhatsApp y una página de Facebook nunca del todo al día, y los padres llaman para preguntar lo que la web ya debería decir. El centro necesitaba una web pública siempre exacta porque se alimenta de los mismos datos con los que trabaja el equipo, y un panel lo bastante sencillo para publicar un curso sin un desarrollador.',
      approach: 'Construimos una aplicación React y TypeScript sobre Vite, con Tailwind y shadcn/ui para la interfaz y Supabase para la base de datos y el almacenamiento. La parte pública lista los cursos con precio, horario, aula, profesor y estado, publica avisos con cuatro niveles de prioridad y público destinatario, e incluye un blog para los artículos del centro. El panel crea, edita y retira cursos, profesores, avisos y entradas, y resume inscripciones, ingresos y ocupación de un vistazo. Los profesores tienen su propio portal para mantener su perfil y publicar para sus alumnos. La interfaz es primero en árabe, con inglés y tema oscuro, y cada tabla está protegida por la seguridad a nivel de fila de Supabase.',
      result: 'El centro publica desde un solo lugar y la web lo refleja al guardar: un curso nuevo, un precio cambiado o un aviso urgente llega a las familias sin que nadie edite una página. Los profesores mantienen su perfil en lugar de enviar cambios a la oficina. Las capturas proceden de una versión cargada con datos de demostración, así que las cifras son ilustrativas y no resultados de un cliente.',
      outcomes: [
        'Catálogo público con precio, horario, aula, profesor y plazas libres',
        'Avisos con cuatro niveles de prioridad y público destinatario',
        'Blog con visitas, me gusta y tiempo de lectura por artículo',
        'Panel para cursos, profesores, avisos y entradas',
        'Inscripciones, ingresos y ocupación resumidos en el panel',
        'Portal docente para perfiles y avisos',
        'Árabe e inglés, de derecha a izquierda, con tema claro y oscuro',
      ],
      images: [
        { alt: 'Panel de administración en árabe con ingresos, alumnos inscritos, ocupación y actividad reciente', caption: 'El panel de administración, con datos de demostración' },
        { alt: 'Catálogo público de cursos con búsqueda, filtros y tarjetas con precio, horario, aula y profesor', caption: 'El catálogo público: precio, horario y profesor en cada curso' },
        { alt: 'Tres pantallas móviles de la web del centro: lista de cursos, avisos con uno urgente y blog', caption: 'En el móvil: cursos, avisos y blog' },
        { alt: 'Gestión de cursos con inscripciones frente a capacidad y precio de cada curso', caption: 'Gestión de cursos: inscripciones frente a capacidad' },
        { alt: 'Gestión de avisos con prioridad, público, visitas, comentarios y me gusta de cada aviso', caption: 'Avisos: prioridad, público e interacción' },
      ],
    },
    'surgeon-digital-clinic': {
      tag: 'Salud · Web',
      title: 'La clínica digital de un cirujano, con triaje por IA',
      metaTitle: 'Clínica digital de un cirujano con triaje IA',
      metaDescription: 'La web de un cirujano que gestiona citas, orienta a los pacientes con un asistente de IA y cifra sus datos, desde un panel privado.',
      summary: 'Una web y plataforma de pacientes para un cirujano digestivo en Argelia: credenciales y divulgación quirúrgica en primer plano, un asistente de IA que hace triaje de las preguntas, reservas en línea y un panel privado para la consulta.',
      client: 'Un cirujano digestivo, Argelia',
      metric: 'Web, triaje IA y panel en uno',
      before: 'Los pacientes llegaban al cirujano por recomendación y hacían cada pregunta por teléfono.',
      after: 'Leen, preguntan al asistente y reservan en línea; el cirujano trabaja desde un solo panel.',
      challenge: 'Hoy los pacientes eligen cirujano en internet, a menudo antes de llamar, y llegan con preguntas que la recepción no puede responder y para las que el cirujano no tiene tiempo. Una web de presentación no cambia eso. La consulta necesitaba una web que generara confianza en la primera pantalla, respondiera con seguridad a las preguntas habituales, reconociera las que no lo son y convirtiera una visita en una cita reservada. Al tratarse de datos médicos, nombres, teléfonos y mensajes tenían que ser ilegibles para cualquiera salvo el cirujano.',
      approach: 'La construimos sobre Next.js 14 con TypeScript y Tailwind, con Framer Motion para un acabado sereno y premium en azul marino y oro. La parte pública presenta credenciales, hospitales y especialidades, una videoteca quirúrgica, una guía anatómica interactiva, resultados de antes y después y guías pre y postoperatorias. Un asistente basado en Google Gemini conversa con los pacientes, responde preguntas generales y deriva lo que parece urgente a urgencias en lugar de a una reserva. Citas, mensajes, opiniones y vídeos viven en Supabase tras seguridad a nivel de fila; nombres, teléfonos y mensajes se cifran con AES-256-GCM antes de guardarse, los formularios se sanean y los envíos repetidos se limitan. La web se instala como app en Android e iPhone.',
      result: 'El cirujano gestiona toda la parte en línea de la consulta desde un panel privado: citas que confirmar, cancelar o exportar a Excel, mensajes de pacientes, opiniones que aprobar y los vídeos y casos que muestra la web. Los pacientes obtienen respuestas a cualquier hora y reservan sin llamar. Las páginas públicas de estas capturas son la web en producción; el panel se muestra con datos de demostración porque el real contiene historiales.',
      outcomes: [
        'Web premium, primero en árabe, con credenciales, hospitales y especialidades',
        'Asistente de IA que hace triaje y deriva los casos urgentes a urgencias',
        'Reservas en línea con disponibilidad comprobada en el servidor',
        'Videoteca quirúrgica, anatomía interactiva y guías pre y postoperatorias',
        'Datos de pacientes cifrados con AES-256-GCM antes de guardarse',
        'Saneamiento de entradas y límite de envíos en cada formulario público',
        'Instalable como app en Android e iPhone',
        'Panel privado para citas, mensajes, opiniones y contenidos',
      ],
      images: [
        { alt: 'Página de inicio de la web del cirujano en azul marino y oro con monograma, especialidad, años de experiencia y botones de reserva', caption: 'La página de inicio en producción: credenciales y reserva en la primera pantalla' },
        { alt: 'Tres pantallas móviles de la web: inicio, videoteca quirúrgica y contacto', caption: 'En el móvil: inicio, videoteca y contacto' },
        { alt: 'Panel privado del cirujano con citas pendientes, confirmadas y de hoy, exportación a Excel y acciones de confirmar o cancelar', caption: 'El panel privado, con datos de demostración' },
        { alt: 'Guía preoperatoria sobre ayuno, medicación y pruebas necesarias, con descarga en PDF y enlace al chat médico', caption: 'Guía del paciente: qué hacer antes de la operación' },
        { alt: 'Bandeja de entrada del panel con los mensajes de pacientes, asunto y fecha', caption: 'Los mensajes de pacientes, en una sola bandeja' },
      ],
    },
    'sadjia-ceram': {
      tag: 'Retail · Web',
      title: 'SADJIA CERAM: showroom digital',
      metaDescription: 'Catálogo de producto digital y estimador de precio en tiempo real para un distribuidor de azulejos en Orán, en autoservicio.',
      summary: 'Un catálogo de producto digital y un estimador de precio en tiempo real para un distribuidor de azulejos en Orán, que sustituye el presupuesto por teléfono por una consulta y un cálculo autoservicio.',
      metric: 'Catálogo, estimador y administración en una sola entrega',
      client: 'SADJIA CERAM, Es Senia, Orán',
      before: 'Los clientes llamaban a la tienda para pedir precio, azulejo por azulejo y proyecto por proyecto.',
      after: 'Ahora recorren el catálogo y obtienen ellos mismos una estimación en DZD en tiempo real para su habitación.',
      challenge: 'SADJIA CERAM vende azulejos de suelo y pared de gama alta desde un showroom en Es Senia, Orán. Cada consulta pasaba por el mismo cuello de botella: el cliente veía un azulejo en algún sitio, llamaba al showroom, lo describía y esperaba mientras alguien calculaba cuánto costaría una habitación entera. Ni el catálogo ni los precios existían en ningún lugar accesible para el cliente, así que el equipo pasaba el día presupuestando por teléfono en vez de vendiendo, y los clientes llegaban sin idea de presupuesto.',
      approach: 'Construimos el showroom como un producto que el cliente puede usar antes de llamar. El catálogo se filtra por colección, dimensión y tipo, de modo que el cliente reduce a los cuatro azulejos que merece la pena considerar en vez de recorrer una hoja de cálculo. Cada ficha lleva las dimensiones reales y el precio real por metro cuadrado. Encima está el estimador: introduces una superficie, añades varios azulejos a un proyecto y devuelve un total formateado en dinares argelinos, calculado con las mismas reglas que el showroom aplica a mano. Detrás, un panel de administración permite al equipo añadir productos, subir imágenes y cambiar dimensiones y precios sin tocar código ni esperarnos. WhatsApp, Instagram y la ubicación del showroom en Google Maps están enlazados en cada página, porque en este mercado la consulta acaba en WhatsApp lo tengas previsto o no.',
      result: 'El showroom tiene ahora un catálogo vivo y una herramienta de presupuesto que los clientes usan antes de descolgar el teléfono, además de un panel de gestión que el equipo opera a diario. Cambiar precios le lleva un minuto a una persona en vez de una llamada a un desarrollador, lo que importa en una categoría donde el precio por metro cuadrado se mueve con el tipo de cambio.',
      outcomes: [
        'Catálogo autoservicio con filtros por dimensión, tipo y colección',
        'Estimador de proyecto en tiempo real, con precio por m² y formato en DZD',
        'Panel de administración para productos, imágenes, dimensiones y precios',
        'WhatsApp, redes y Maps hacia el showroom físico en cada página',
        'Adaptado a móvil, tableta y escritorio',
      ],
      images: [
        { alt: 'Página de inicio de SADJIA CERAM: colecciones y productos destacados con precio por metro cuadrado', caption: 'Inicio: colecciones y productos destacados, con precio por m²' },
        { alt: 'Catálogo de productos filtrado por dimensión y tipo de azulejo', caption: 'Filtrado del catálogo por dimensión y tipo' },
        { alt: 'Ficha de producto de un azulejo con dimensiones y precio', caption: 'Ficha de producto con dimensiones y precio' },
        { alt: 'Panel de administración para gestionar productos, dimensiones y precios', caption: 'El panel que el equipo del showroom usa a diario' },
      ],
    },
    'logistics-dashboard': {
      tag: 'Logística · Escritorio',
      title: 'Panel de gestión de logística y distribución',
      metaDescription: 'Un panel de escritorio y web para seguir las operaciones de transporte y distribución, empaquetado como app nativa.',
      summary: 'Un panel de escritorio y web para seguir las operaciones de transporte y distribución, empaquetado como app nativa junto a un despliegue web sobre Supabase.',
      metric: 'Escritorio y web desde un solo código',
      before: 'Transporte y distribución seguidos entre herramientas separadas y hojas de cálculo.',
      after: 'Una app nativa, más una versión web desde el mismo código, lo sigue todo.',
      challenge:
        'Una operación de transporte y distribución necesitaba un solo sistema para seguir la flota, las entregas y el lado financiero del negocio, desplegable tanto como herramienta de escritorio instalada como aplicación web alojada. El lado financiero es el que suele escaparse: los viajes se despachan en un sitio, los anticipos a conductores se liquidan en otro, las facturas de proveedores llegan en papel, y lo que un cliente debe realmente se reconstruye a fin de mes a partir de varias hojas de cálculo que no coinciden. Nadie puede responder a la única pregunta que importa: cuánta caja hay ahora mismo en el negocio y quién tiene el resto. La flota se ve; el dinero no.',
      approach:
        'Construimos el panel una vez en Vite y TypeScript y lo entregamos de dos formas: una versión Electron para uso instalado y tolerante a la falta de red, y un despliegue web sobre Supabase, desde el mismo código y la misma capa de datos. El dinero está modelado como una conciliación y no como un informe: la caja se deriva de los cobros a clientes, menos los pagos a conductores, menos los pagos a proveedores, menos los gastos de explotación, y la cifra se muestra como esa ecuación en lugar de como un total, de modo que un número que parece mal se puede rastrear hasta el lado que se movió. Alrededor hay cuentas por cliente con lo facturado, lo cobrado, lo pendiente y los anticipos; la liquidación de cuentas de conductores; las cuentas de proveedores; y otros gastos de flota, todo filtrable por rango de fechas. La interfaz es íntegramente en árabe, dispuesta de derecha a izquierda.',
      result:
        'Un único panel que cubre las operaciones de distribución y las finanzas que hay debajo, empaquetado tanto para instalación como para web, donde la posición de caja es una cifra derivada que un responsable puede auditar y no un número que alguien tecleó. Anticipos y deudas viven en la ficha del cliente y no en un libro aparte, así que la pregunta «qué nos debe este cliente» tiene una sola respuesta, y es la misma en ambas versiones. El cierre de mes deja de ser una reconstrucción.',
      outcomes: [
        'Un código TypeScript, dos destinos de entrega',
        'Versión Electron para uso instalado, local primero',
        'Despliegue web sobre Supabase compartiendo la misma capa de datos',
        'Caja derivada de una ecuación, rastreable hasta el apunte que la movió',
        'Cuentas por cliente con facturado, cobrado, pendiente y anticipos',
        'Liquidación de conductores y cuentas de proveedores en el mismo filtro de periodo',
        'Interfaz en árabe, de derecha a izquierda de principio a fin',
      ],
      images: [
        { alt: 'Panel financiero unificado con flujo de caja, saldos de clientes y liquidaciones de conductores', caption: 'El panel unificado: flujo de caja, cuentas de clientes y liquidaciones' },
      ],
    },
    'ability-beyond-disability': {
      tag: 'Impacto social · Web',
      title: 'Ability Beyond Disability',
      // The project name is the same in every language; this keeps the
      // <title> distinct from the other locales' versions of the page.
      metaTitle: 'Ability Beyond Disability: plataforma de talentos',
      summary: 'Una página bilingüe (árabe/inglés) que muestra los talentos y logros de personas con discapacidad en toda Argelia.',
      metric: 'Escaparate nacional de talento',
      client: 'رغم إعاقتي أبدع: escaparate nacional de talento, Argelia',
      before: 'Las personas con talento y con discapacidad de toda Argelia no tenían un escaparate común.',
      after: 'Una página bilingüe árabe / inglés que presenta sus talentos y logros a escala nacional.',
      challenge:
        'Las personas con discapacidad en Argelia necesitaban una plataforma pública donde mostrar su trabajo creativo y profesional: una que se lea como un escaparate cuidado y no como una página de caridad. Esa distinción es todo el encargo, y se decide sobre todo en decisiones de diseño, no en las palabras. Una página de caridad encabeza con la necesidad, usa colores suaves y fotos de archivo, y pone un botón de donación donde debería estar el trabajo. Un escaparate encabeza con el trabajo, nombra a la persona y su especialidad como haría un portafolio, y trata al lector como alguien que podría contratarla. Lo segundo es más difícil porque exige que el material se sostenga solo.',
      approach:
        'Diseñamos un sitio estático accesible y visualmente atractivo: una galería de talentos con la especialidad y la localidad de cada persona, estadísticas nacionales sobre talentos registrados y wilayas representadas, una sección de eventos para talleres y exposiciones, y una suscripción al boletín. La galería es la página: cada tarjeta lleva un nombre, una especialidad, una wilaya y etiquetas, que es la información que un visitante necesita para tomarse a alguien en serio y no con lástima. Los contadores nacionales van bajo la cabecera como contexto, no como argumento. Está construido para cargar rápido sin depender de un backend, y escrito en árabe y en inglés para que se lea de forma nativa en cada lengua y no como traducción de la otra.',
      result:
        'Un sitio escaparate en línea y accesible que destaca talento de todas las wilayas de Argelia. Sin backend no hay nada que mantener en marcha ni nada que pueda caerse el día que una exposición le manda tráfico, lo que importa en una plataforma cuyos momentos de más carga son los que no puede programar. El sitio además es lo bastante barato como para alojarlo indefinidamente, y para un proyecto comunitario eso no es un detalle: los que desaparecen suelen hacerlo porque alguien dejó de pagar un servidor, no porque se acabara el material.',
      outcomes: [
        'Galería de talentos con especialidad, localidad y etiquetas por persona',
        'Estadísticas nacionales: talentos registrados, wilayas, obras, eventos',
        'Sección de eventos para talleres, exposiciones y concursos',
        'Escrito de forma nativa en árabe e inglés, no traducido de uno al otro',
        'Build estático: nada que operar, nada que caiga en un día de mucho tráfico',
        'Bilingüe árabe/inglés, sin dependencia de backend',
      ],
      images: [
        { alt: 'Inicio de Ability Beyond Disability: portada, talento de la semana y estadísticas nacionales', caption: 'Inicio: el talento de la semana y los contadores nacionales debajo' },
        { alt: 'Tarjetas de la galería de talento con especialidad, provincia y etiquetas', caption: 'La galería: especialidad, provincia y etiquetas por persona' },
        { alt: 'Sección de eventos con talleres, exposiciones y concursos', caption: 'Eventos: talleres, exposiciones y concursos' },
      ],
    },
    'little-hafiz': {
      tag: 'EdTech · Móvil',
      title: 'Little Hafiz: app de memorización del Corán',
      metaDescription: 'App Flutter de memorización del Corán, con escucha versículo a versículo, seguimiento del progreso y versión web sin conexión.',
      summary: 'Una app Flutter de memorización del Corán para niños y adultos, con escucha versículo a versículo, seguimiento del progreso y una versión web instalable que funciona sin conexión.',
      metric: 'Web, iOS y Android desde un solo código',
      before: 'La práctica de memorización dependía de tener cerca a un maestro o un ejemplar impreso.',
      after: 'Escucha versículo a versículo y seguimiento del progreso en cualquier móvil, incluso sin conexión.',
      challenge:
        'Las apps de memorización del Corán abundan, pero pocas están hechas específicamente para niños, con un progreso que los padres puedan seguir de verdad. Una app infantil tiene restricciones que una de adultos no tiene: la pantalla de inicio deben ser destinos y no un menú, los objetivos han de ajustarse a una mano de seis años, y nada puede penalizar un toque equivocado. El padre necesita una puerta de entrada por la que el niño no se cuele. Y el audio aquí no es una función, es el producto: memorizar se hace escuchando y repitiendo, así que un versículo que se detiene a cargar no degrada la sesión, la termina — y los sitios donde se usan estas apps no siempre tienen conexión. Un niño no reintenta una carga fallida; deja el teléfono.',
      approach:
        'Un único código Flutter lo cubre todo: escucha versículo a versículo, varios métodos de memorización, seguimiento del progreso y compilaciones para iOS, Android y web desde la misma fuente. La pantalla de inicio ofrece cuatro destinos en vez de un menú —memorizar una sura, escuchar y repetir, juegos y modo padres tras un candado— en árabe, de derecha a izquierda, con objetivos dimensionados para un niño y no reducidos desde una maqueta de escritorio. El audio se cachea para que el bucle de escuchar y repetir siga funcionando sin conexión, porque el bucle es el método. El progreso se registra por sura, que es sobre lo que un padre puede actuar; el tiempo dentro de la app, no.',
      result:
        'Una app de memorización multiplataforma instalable directamente desde el navegador, sin la aduana de una tienda de aplicaciones. Para el alcance importa más de lo que parece: un padre puede estar usándola un minuto después de abrir un enlace compartido, sin cuenta que crear, sin cola de revisión entre un arreglo y el niño que lo necesita, y sin una descarga grande en una conexión que quizá se pague por volumen. La misma fuente sigue produciendo las versiones de iOS y Android para las familias que prefieren instalar desde una tienda.',
      outcomes: [
        'Escucha versículo a versículo con navegación por suras',
        'Varios métodos de memorización y seguimiento del progreso',
        'Cuatro destinos en la pantalla de inicio, no un menú',
        'Audio cacheado: el bucle de escuchar y repetir funciona sin conexión',
        'Modo padres tras un candado, con progreso registrado por sura',
        'Interfaz en árabe, de derecha a izquierda, a la medida de una mano infantil',
        'PWA instalable y utilizable sin conexión, más versiones iOS y Android',
      ],
      images: [
        { alt: 'Pantalla de inicio de Little Hafiz con memorizar, escuchar y repetir, juegos y modo padres', caption: 'Inicio: memorizar, escuchar y repetir, juegos y modo padres' },
        { alt: 'Pantalla de modo padres en el móvil, protegida con bloqueo', caption: 'Modo padres en la versión móvil' },
      ],
    },
    'sahafood': {
      tag: 'Foodtech · Móvil',
      title: 'SahaFood: app de reparto de comida',
      summary: 'Una app Flutter de reparto de comida que cubre el flujo de pedido del cliente. Actualmente en desarrollo activo.',
      metric: 'En desarrollo activo',
      challenge: 'El reparto de comida en el mercado objetivo funciona a base de pedidos por teléfono y apps de terceros que se llevan una comisión de cada venta. SahaFood necesitaba su propio canal de pedidos.',
      approach: 'Estamos construyendo primero la app Flutter de cara al cliente: navegación, pedido y pago, con los sistemas de comercio y reparto por venir.',
      result: 'La app de pedidos está en desarrollo activo. Esta ficha se actualizará a medida que avance.',
      outcomes: [
        'Flujo de navegación, pedido y pago para el cliente',
        'Sistemas de comercio y reparto por venir',
      ],
    },
    'id-verification-pipeline': {
      tag: 'Visión por computador · IA/ML',
      title: 'Pipeline de detección y segmentación de documentos de identidad',
      metaTitle: 'Detección y segmentación de documentos de identidad',
      metaDescription: 'Un pipeline de visión por computador que detecta y corrige la perspectiva de documentos de identidad argelinos, listo para OCR.',
      summary: 'Un pipeline de visión por computador que detecta, segmenta y corrige la perspectiva de documentos de identidad argelinos a partir de una imagen de cámara, produciendo un recorte listo para OCR.',
      metric: 'De la cámara a un recorte listo para OCR, en el dispositivo',
      challenge:
        'Leer un documento de identidad con fiabilidad desde la foto de un móvil implica resolver rotación, encuadre parcial e iluminación inconstante antes de que el OCR llegue a ejecutarse. La foto hecha en un mostrador nunca es la foto con la que se construyó un conjunto de datos: el documento está torcido sobre la mesa, una esquina queda fuera del encuadre, una ventana lanza un reflejo sobre el plastificado y la mano que sostiene el móvil se mueve al disparar. Entrega eso tal cual a un motor de OCR y no fallará: devolverá un disparate plausible, caracteres que parecen un nombre y un número sin ser ninguno de los dos. Y eso es peor que no devolver nada, porque la nada es un fallo evidente y el disparate plausible acaba escrito en una base de datos.',
      approach:
        'Entrenamos un modelo de segmentación YOLOv8 sobre el conjunto MIDV-500 para localizar y enmascarar el documento, junto a un detector ligero de cajas orientadas para el encuadre en vivo con la cámara en movimiento. La detección va primero y lleva una puntuación de confianza, de modo que un fotograma del que el modelo no está seguro se rechaza en vez de pasar adelante: el sitio más barato para detener una mala lectura es antes de que empiece. La segmentación entrega luego la máscara del documento y, a partir de ella, las cuatro esquinas. Esas esquinas son todo el sentido de la segunda etapa: permiten que la tercera aplique una corrección de perspectiva que proyecta el documento sobre un rectángulo, así que una imagen tomada en ángulo sale plana y no trapezoidal. La salida es un recorte fijo de 1024 × 646, enderezado y comprobado contra reflejos antes de abandonar la cadena. Ambos modelos se exportan a ONNX y TFLite: la inferencia corre en el teléfono.',
      result:
        'Una cadena de cámara a recorte —detectar, segmentar, corregir— que entrega al motor de OCR una imagen plana y de tamaño constante en lugar de una fotografía, que es la diferencia entre un OCR que funciona y uno que funciona más o menos. Ejecutarlo en el dispositivo importa por dos razones distintas: no hay factura por llamada de una API de visión en la nube cuando sube el volumen, y un documento de identidad nunca sale del teléfono con el que se fotografió, que es una respuesta mucho más corta de dar a un regulador que un contrato de encargo de tratamiento.',
      outcomes: [
        'Segmentación YOLOv8 entrenada sobre el conjunto MIDV-500',
        'Detector de cajas orientadas para el encuadre móvil en vivo',
        'Umbral de confianza: un fotograma dudoso se rechaza, no pasa al OCR',
        'Extracción de las cuatro esquinas que alimenta la corrección de perspectiva',
        'Salida fija de 1024 × 646, enderezada y comprobada contra reflejos',
        'Exportación a ONNX y TFLite: inferencia en el dispositivo, documentos nunca subidos',
      ],
      images: [
        { alt: 'Las etapas del pipeline: detección, segmentación y corrección de perspectiva de un documento de identidad', caption: 'Detectar, segmentar, corregir: de la cámara a un recorte listo para OCR' },
      ],
    },
    'tradevirtual': {
      tag: 'Fintech · Web',
      title: 'TradeVirtual: plataforma de trading simulado de criptomonedas',
      metaTitle: 'TradeVirtual: trading simulado de criptomonedas',
      summary: 'Una plataforma gamificada para practicar el trading de criptomonedas con fondos simulados: precios en vivo, XP y clasificaciones, sin dinero real en juego.',
      metric: '6 activos seguidos · precios en vivo',
      challenge: 'Quien empieza en el trading quiere aprender cómo se siente realmente operar con cripto sin arriesgar dinero, y la mayoría de las herramientas de simulación parecen hojas de cálculo más que productos.',
      approach: 'Construimos un simulador de trading completo sobre Next.js y Prisma: precios en vivo traídos de Binance cada cinco segundos para BTC, ETH, BNB, SOL, ADA y DOGE, un flujo real de compra y venta con historial completo de operaciones, y una capa de gamificación (XP por operación, niveles, clasificación global y canje de XP por saldo) para mantener el interés. El acceso se hace con autenticación de Telegram en vez de otra contraseña que olvidar.',
      result: 'Una plataforma de trading simulado en vivo con precios en tiempo real y una clasificación competitiva, no una demo estática.',
      outcomes: [
        'Precios en vivo de seis activos, actualizados cada cinco segundos desde Binance',
        'Flujo completo de compra y venta con cartera e historial de operaciones',
        'XP, niveles, clasificación global y canje de XP por saldo',
        'Autenticación con Telegram en lugar de otra contraseña',
      ],
    },
    'thodz-builder': {
      tag: 'SaaS · Web',
      title: 'THODZ Builder: creador de portafolios sin código',
      metaDescription: 'Un creador de sitios de arrastrar y soltar para montar un portafolio profesional a partir de plantillas, sin escribir código.',
      summary: 'Un creador de sitios web de arrastrar y soltar que permite a cualquiera montar un portafolio profesional a partir de plantillas personalizables, sin escribir código.',
      metric: '5 plantillas · editor de arrastrar y soltar',
      client: 'THODZ SOLUTIONS (producto interno)',
      before: 'Tener un sitio de portafolio profesional pasaba por contratar a un desarrollador.',
      after: 'Eliges una plantilla, arrastras los bloques a su sitio y publicas, sin escribir código.',
      challenge:
        'Los autónomos que necesitan un portafolio rara vez quieren programarlo a mano, y a menudo no pueden. Las herramientas pensadas para ellos se dividen en dos mitades decepcionantes: constructores tan genéricos que todos los resultados se parecen, y constructores tan cerrados que lo primero que quieres cambiar es justo lo que no puedes. Queríamos el término medio: plantillas de verdad, realmente editables, sin meter a nadie en un editor de código. Lo difícil no es arrastrar. Es que «editable» e «intercambiable» tiran en direcciones opuestas: cuanto más te deja cambiar una plantilla, más atado queda tu trabajo a esa plantilla, y menos puedes probar otra sin empezar de cero.',
      approach:
        'Construimos el editor alrededor de la manipulación directa. Las secciones se reordenan arrastrando (@dnd-kit) y cualquier elemento se edita en su sitio: haz clic en el texto y escribe, haz clic en la imagen y cámbiala, abre el panel de estilo y cambia colores, tipografías y espaciados. Se entregan cinco plantillas con puntos de vista reales y no variaciones de color de una misma maqueta: Modern Minimal, Creative Bold, Developer Tech, Designer Elegant y Business Professional, y cambiar entre ellas conserva tu contenido intacto. Esa última propiedad es para lo que existe el modelo de datos: el contenido vive aparte de la presentación que lo muestra, de modo que una plantilla es una forma de enseñar lo que escribiste y no el lugar donde se guarda. Todo se autoguarda. Cuentas, persistencia y almacenamiento de archivos corren en Supabase con Prisma sobre Postgres, así que un sitio a medias sigue ahí mañana.',
      result:
        'Un constructor sin código en funcionamiento, que cubre la elección de plantilla, la edición por arrastre, la personalización de estilo y el registro hasta la gestión de la cuenta, de principio a fin. «De principio a fin» es la afirmación que conviene comprobar en un constructor, porque la demo siempre enseña el editor y lo que decide si alguien termina su sitio es todo lo demás: registrarse, volver una semana después a un borrador exactamente donde lo dejaste, y cambiar de opinión sobre la plantilla sin perder una tarde de escritura.',
      outcomes: [
        'Reordenación de secciones por arrastre, sobre @dnd-kit',
        'Cinco plantillas distintas, intercambiables sin perder contenido',
        'Contenido guardado aparte de la presentación, que es lo que hace seguro el cambio',
        'Edición en el sitio de texto, imágenes, colores, tipografías y espaciados',
        'Añadir, quitar, reordenar y ocultar secciones',
        'Autoguardado con cuentas Supabase sobre Prisma + Postgres',
      ],
      images: [
        { alt: 'Editor con la plantilla Developer Tech y el panel de estilo abierto', caption: 'Editor: la plantilla Developer Tech con el panel de estilo abierto' },
        { alt: 'Selección de plantillas con cinco puntos de partida distintos', caption: 'Selección de plantilla: cinco puntos de partida distintos' },
        { alt: 'Pantalla de registro y creación de cuenta', caption: 'Registro y creación de cuenta' },
      ],
    },
    'chronic-disease-monitoring': {
      tag: 'Healthtech · Web',
      title: 'Plataforma de seguimiento de enfermedades crónicas',
      summary: 'Una aplicación web por roles donde los pacientes registran sus mediciones y reciben pautas de tratamiento redactadas por IA y revisadas por un médico.',
      metric: 'Roles de paciente y médico · salida aprobada por un médico',
      before: 'Las mediciones de los pacientes y las pautas de seguimiento vivían en notas dispersas.',
      after: 'Los pacientes registran sus mediciones; la IA redacta las pautas y un médico las revisa antes de enviarlas.',
      challenge:
        'Los pacientes que gestionan una enfermedad crónica necesitan una forma sencilla de registrar mediciones y recibir orientación a cambio. Un modelo de IA puede redactar esa orientación en segundos, y ahí está justamente el problema: sugerencias médicas sin revisar entregadas directamente al paciente son un riesgo, no una función. El sistema tenía que ser lo bastante útil para que los pacientes sigan registrando, y lo bastante seguro para que nada les llegue sin que un clínico lo haya leído. Es el segundo requisito el que decide la arquitectura, porque una regla no basta. Una norma que diga que un médico debe aprobar antes de enviar es una norma que alguien se salta una tarde ajetreada; la garantía solo se sostiene si saltársela es algo que el sistema no puede expresar.',
      approach: 'Integramos el paso de revisión clínica en el modelo de datos en lugar de añadirlo encima. Los pacientes envían mediciones, tomadas de sensores médicos, a través de un flujo pensado primero para móvil, y ven todo su historial. Cada envío genera un informe redactado por IA solo en el backend, nunca en el navegador, y ese borrador cae en la cola de un médico, no en la bandeja del paciente. La cuenta médica revisa, edita y aprueba cada informe y cada receta antes de que el paciente vea nada; un borrador sin revisar no tiene ninguna vía hacia el paciente. La autenticación funciona sobre Firebase con verificación de correo por OTP e inicio de sesión con Google, sobre una Realtime Database que mantiene sincronizados ambos lados del historial.',
      result:
        'Un circuito paciente/médico en funcionamiento (registro, redacción por IA, revisión clínica, envío), con historial completo en ambos lados y ninguna vía por la que una salida sin revisar llegue a un paciente. Esa última cláusula es el diseño: la revisión clínica no es una etapa de un flujo que se pueda reordenar o saltar bajo presión, es la única arista entre un borrador y la vista del paciente. La diferencia importa precisamente cuando el sistema está cargado y no cuando se está enseñando, que es el único momento en que una propiedad de seguridad se pone realmente a prueba.',
      outcomes: [
        'Dos roles en un mismo sistema: registro del paciente, revisión del médico',
        'Redacción por IA confinada al backend, tras una aprobación clínica',
        'El médico edita y aprueba cada informe y receta antes del envío',
        'Revisión impuesta por el modelo de datos, no por un procedimiento saltable',
        'Historial completo de mediciones y tratamientos para ambos roles',
        'Firebase Auth con verificación de correo por código y acceso con Google',
        'Responsive mobile-first en todas las pantallas',
      ],
      images: [
        { alt: 'Panel del paciente con las mediciones registradas y el historial', caption: 'Panel del paciente: mediciones e historial' },
        { alt: 'Formulario donde el paciente envía un nuevo conjunto de mediciones', caption: 'Envío de un nuevo conjunto de mediciones' },
        { alt: 'Pantalla de revisión del médico para editar y aprobar un informe redactado por IA', caption: 'Revisión médica: cada borrador se edita y se aprueba antes de publicarse' },
      ],
    },
    'giftili': {
      tag: 'Diseño de producto · Web',
      title: 'Giftili: enviar un regalo a casa, a Argelia',
      summary: 'Un diseño de producto de 25 pantallas para un servicio de regalos de la diáspora: eliges el regalo desde el extranjero, diseñas la tarjeta que lo acompaña y se entrega en mano en Argelia.',
      metric: '13 pantallas de cliente · 12 de administración',
      challenge: 'Alguien en París, Montreal o Dubái quiere ser el primero en felicitar a su madre en Batna. Cada parte resulta incómoda: pagar desde el extranjero, elegir algo que de verdad llegue, escribir una tarjeta en un idioma que la tienda quizá no lea, y saber que se entregó. Una tienda por sí sola no lo resuelve, porque la mitad del problema ocurre después del pedido.',
      approach: 'Diseñado de extremo a extremo y no como una tienda. El lado del cliente cubre el catálogo de regalos y las fichas de producto, un diseñador de tarjetas donde el mensaje se compone sobre una tarjeta real que se imprime y se mete en el paquete, regalos colectivos entre varias personas, recordatorios de ocasiones, seguimiento del pedido y un muro de reacciones para el momento de la entrega. El lado de operaciones está diseñado con el mismo peso: pedidos y entrega, repartidores, clientes, productos y stock, zonas de reparto y códigos promocionales, marketing, contenido del sitio, roles de equipo con acceso en dos pasos, y analítica. Cada pantalla está planteada en inglés, francés y árabe, porque quien envía y quien recibe rara vez leen el mismo.',
      result: 'Un prototipo completo y navegable que cubre ambos lados del servicio, desde quien envía desde la diáspora hasta la ruta del repartidor en Argelia.',
      outcomes: [
        'Diseñador de tarjetas con anverso e interior, pegatinas, fotos y acabados de impresión',
        'Regalos colectivos en los que participan varias personas',
        'Entrega en 67 wilayas con asignación de repartidor por pedido',
        'Administración de pedidos, stock, repartidores, promociones, contenido y roles',
        'Trilingüe de principio a fin, incluido el árabe de derecha a izquierda',
      ],
      images: [
        { alt: 'Inicio de Giftili: elige un regalo, escribe unas palabras, se entrega en Argelia', caption: 'Inicio: destinatario, ocasión y presupuesto' },
        { alt: 'Diseñador de tarjetas con plantillas, herramientas de texto y pegatinas, y acabados de impresión', caption: 'El diseñador de tarjetas: lo que se imprime y acompaña al regalo' },
        { alt: 'Ficha de producto de un ramo con tamaño, color, extras y selector de fecha de entrega', caption: 'Producto: tamaño, extras, wilaya y fecha de entrega' },
        { alt: 'Panel de pedidos y entrega con país de origen, wilaya del destinatario, repartidor y estado', caption: 'Operaciones: pedidos desde el extranjero, enrutados a repartidores en Argelia' },
      ],
    },
    'djalil-location': {
      tag: 'Alquiler · Escritorio',
      title: 'Djalil Location: panel para un negocio de alquiler de coches',
      metaTitle: 'Djalil Location: panel para alquiler de coches',
      metaDescription: 'Aplicación de escritorio para Windows que funciona sin conexión: flota, clientes, reservas y disponibilidad en una base local.',
      summary:
        'Una aplicación de escritorio para Windows que funciona sin conexión: flota, clientes, reservas y disponibilidad sobre una base de datos local, para que la oficina siga funcionando sin internet.',
      metric: 'Sin conexión primero · doble reserva bloqueada dos veces',
      challenge:
        'Una oficina de alquiler funciona sobre un mostrador, no sobre la nube. El sistema tiene que abrirse al instante, seguir funcionando cuando se cae la conexión y guardar los datos de clientes y contratos en una máquina que controla el propietario y no en el servidor de otro. El error caro en este negocio es alquilar el mismo coche dos veces en las mismas horas, así que las reglas de reserva tienen que aguantar incluso cuando dos reservas se introducen con minutos de diferencia.',
      approach:
        'Construida como aplicación Electron con interfaz en Vue 3 y SQLite en disco, a la que se accede por una capa IPC tipada con un cerrojo, de modo que la interfaz nunca toca la base de datos directamente. El acceso lo controla el propietario: contraseña fijada en el primer arranque, hash con Argon2, un código de recuperación escrito, límite de cinco intentos y bloqueo automático cuando el equipo queda inactivo o Windows se bloquea. El solapamiento se comprueba dos veces: en vivo en el formulario de reserva, que nombra la reserva o el periodo de mantenimiento en conflicto y mantiene Guardar desactivado, y otra vez dentro de la transacción de escritura. La regla es semiabierta al minuto, así que un coche devuelto a las 10:00 puede volver a salir a las 10:00. La disponibilidad es una línea de tiempo con barras colocadas al minuto y un rango de fechas guardado en la URL. Las copias de seguridad se hacen en local cada día y hacia cualquier almacenamiento compatible con S3, comprimidas y cifradas con AES-256-GCM antes de salir de la máquina.',
      result:
        'Las seis fases están en su sitio: el armazón y la base de datos, los coches y los clientes, las reservas con protección contra solapamientos, la disponibilidad y el panel, los ajustes y las copias de seguridad, y un instalador por usuario firmado con actualizaciones en segundo plano. El camino de copia en la nube está probado contra un servidor local que habla S3; todavía no se ha ejecutado contra una cuenta real de un proveedor.',
      outcomes: [
        'Funciona sin conexión sobre una base de datos SQLite local',
        'Doble reserva bloqueada dos veces: en vivo en el formulario y dentro de la transacción de escritura',
        'Línea de tiempo de disponibilidad al minuto, con la fecha en que se libera cada coche',
        'Árabe, francés e inglés con una disposición RTL real, además de tema claro y oscuro',
        'Copias locales diarias y copias en la nube cifradas compatibles con S3, restauradas con un reinicio protegido',
        'Instalador de Windows por usuario con actualizaciones automáticas en segundo plano',
      ],
      images: [
        { alt: 'Panel del propietario en francés: contadores de flota, próximas reservas, salidas y devoluciones del día y estado de la flota en directo', caption: 'El panel: flota, ingresos del mes y lo que se mueve hoy' },
        { alt: 'Cuadrícula de la flota en francés con filtros por categoría y una etiqueta de estado en cada coche', caption: 'La flota, filtrada por categoría, cada coche marcado como libre, alquilado o en mantenimiento' },
        { alt: 'La misma pantalla de flota en árabe, invertida de derecha a izquierda con la barra lateral a la derecha', caption: 'La misma pantalla en árabe, invertida de derecha a izquierda' },
        { alt: 'Pantalla de disponibilidad con periodos predefinidos y una línea de tiempo de reservas por coche a lo largo de cuatro días', caption: 'Disponibilidad: periodos, línea de tiempo por coche y cuándo se libera cada uno' },
        { alt: 'Ventana de nueva reserva con cliente, coche, fechas y horas, una confirmación verde de que el coche está libre y un total estimado', caption: 'El formulario de reserva: la comprobación de conflictos corre según se eligen las fechas' },
        { alt: 'Página de detalle de una reserva con un recorrido de estado en tres pasos, las fichas de cliente y coche, y las fechas y el importe', caption: 'Una reserva: recorrido de estado, cliente, coche e importe' },
        { alt: 'El mismo panel en modo oscuro', caption: 'El mismo panel en modo oscuro' },
      ],
    },
    'onyxia-jewelry': {
      tag: 'Retail · Web',
      title: 'Onyxia: tienda de joyería y mesa de pedidos',
      summary: 'Una tienda en árabe para una marca de joyería, con carrito, pago, entrega por wilaya y una administración desde la que la tienda gestiona los pedidos.',
      metric: 'Tienda, administración y tarifas de entrega',
      challenge:
        'Vender joyería en línea en Argelia implica resolver lo que un carrito alojado no resuelve: envío tarificado por wilaya, pedidos confirmados por teléfono y un equipo de tienda que debe gestionar stock y pedidos sin tocar código. Una plataforma alojada supone una sola tarifa de envío, un pago con tarjeta y un cliente que no habla con nadie. Nada de eso se cumple aquí: el coste de entrega difiere entre cuarenta y ocho wilayas, la mayoría de pedidos se liquidan contra entrega tras una llamada de confirmación, y quien lleva la tienda es joyera, no operadora de software. Todo lo que exija un desarrollador para cambiar un precio o una tarifa de envío es un sistema que la tienda dejará de usar.',
      approach:
        'El escaparate es deliberadamente sin dependencias en el front: HTML, CSS y JavaScript escritos a mano para que las páginas sigan siendo rápidas en conexiones móviles, con una disposición árabe de derecha a izquierda en todo el sitio y un selector de idioma en la cabecera. Esa decisión no es estilística. La joyería se vende por la fotografía, así que las páginas se construyen alrededor de imágenes grandes, y el presupuesto que esas imágenes consumen en una conexión móvil es presupuesto que un framework no puede ocupar además. Detrás hay un servicio Express y MongoDB para productos, pedidos, ciudades e idioma, con la subida de imágenes gestionada en el servidor. La administración forma parte del mismo build: creación y edición de productos, lista de pedidos y una vista por pedido con la que la tienda avanza en su jornada, tras un acceso con sesión.',
      result:
        'Un ciclo de venta completo que la tienda opera sola, desde el cliente que hojea el catálogo hasta el equipo que marca un pedido como servido. Las partes que suelen exigir un desarrollador —añadir un producto, cambiarle las fotos, modificar lo que cuesta la entrega a una wilaya, mover un pedido entre estados— son todas cosas que la joyera hace desde la administración, que es la diferencia entre un escaparate al día y uno que es exacto un mes y luego está discretamente mal. La tienda no espera a un desarrollador para poner algo nuevo a la venta, y nada se queda viejo mientras espera.',
      outcomes: [
        'Catálogo, fichas de producto, carrito y pago en árabe',
        'Entrega gestionada por ciudad en vez de una tarifa plana',
        'Catálogo guiado por la imagen, sin framework de front disputando ancho de banda',
        'Árabe e inglés, con selector en la cabecera',
        'Administración de productos, imágenes y estado de pedidos',
        'Acceso con sesión para el equipo de la tienda',
      ],
      images: [
        { alt: 'Página de inicio de Onyxia con el logotipo de la marca sobre un cielo estrellado oscuro', caption: 'La página de inicio' },
      ],
    },
    'sotex': {
      tag: 'Retail · Web',
      title: 'Sotex: una tienda, cualquier producto, todos los pedidos controlados',
      metaTitle: 'Sotex: una tienda, cualquier producto',
      metaDescription: 'Tienda en árabe de un solo producto que se relanza para lo que toque vender, con cada pedido en un panel de administración.',
      summary: 'Una tienda en árabe de un solo producto que se relanza para lo que toque vender, de un kit de belleza al aislamiento de vehículos, con cada pedido aterrizando en un panel de administración.',
      metric: 'La misma tienda, cualquier producto · 58 wilayas',
      challenge:
        'Los pequeños vendedores en Argelia suelen empujar un producto cada vez y cambian cuando llega el siguiente. Reconstruir una tienda en cada lanzamiento es lento, y los pedidos que llegan por mensaje o correo se pierden antes de que alguien devuelva la llamada al cliente. El vendedor tampoco va a mantener un catálogo: hay un producto, es la página entera, y cuando el producto cambia la página cambia con él. Lo que varía entre lanzamientos no es la maquetación sino las condiciones comerciales —cuánto cuesta la cosa, cómo se calcula ese coste y qué entrega va incluida—, así que son esas partes las que tienen que ser configuración y no código.',
      approach: 'La tienda se construye alrededor de un producto cada vez: una galería, un bloque de precio y un formulario de pedido que conviven en escritorio y se apilan en el móvil. El producto, su regla de precio y la oferta de entrega cambian con cada lanzamiento, de modo que la misma página ha vendido un kit de belleza a 5.900 DA con entrega gratuita y aislamiento de vehículos a 750 DA el metro cuadrado, bajando a 700 DA por encima de diez, con entrega en oficina o a domicilio añadida aparte. El paso de dirección cubre las 58 wilayas y sus baladiyas, y el teléfono se valida contra los formatos argelinos antes de aceptar el pedido. Los pedidos se escriben en Firestore, y una página de administración aparte, protegida por Firebase Auth, los lista con los recuentos de pendientes y completados y el total de ventas.',
      result:
        'Una tienda que se puede apuntar rápidamente a un producto nuevo, con todos los pedidos en un sitio en lugar de dispersos por mensajes. Como el precio es una regla y no un número, la misma página ya ha vendido algo por unidad y algo por metro cuadrado con un tramo por volumen, sin que ninguno fuera un caso especial escrito para él. Apuntar la tienda al siguiente producto es un cambio de contenido: esa es la diferencia entre un lanzamiento que ocurre esta semana y uno que espera a que un desarrollador se libere.',
      outcomes: [
        'Un escaparate reutilizado para distintos productos y reglas de precio',
        'Precio cerrado y precio por metro cuadrado, con un tramo por volumen',
        'Precio expresado como regla: un lanzamiento nuevo es configuración, no código',
        'Selección completa de wilaya y baladiya en las 58 wilayas',
        'Validación de números de teléfono argelinos al enviar',
        'Panel de administración con estado de pedidos y totales de venta',
        'Maquetación mobile-first de derecha a izquierda',
      ],
      images: [
        { alt: 'Primer lanzamiento: un kit de belleza a precio fijo con entrega gratuita', caption: 'Lanzamiento uno: un kit de belleza a precio fijo, con entrega gratuita' },
        { alt: 'La misma página vendiendo aislamiento por metro cuadrado', caption: 'Lanzamiento dos: la misma página vendiendo aislamiento por metro cuadrado' },
        { alt: 'Pedido de 12 m² que entra en el tramo de 700 DA, con la entrega sumada al total', caption: 'Pedido: 12 m² entran en el tramo de 700 DA, con la entrega sumada al total' },
        { alt: 'Panel de administración con cada pedido, su estado y los totales de venta', caption: 'Administración: cada pedido con su estado, y los totales de venta' },
        { alt: 'Pantalla de acceso a la administración, sobre Firebase Auth', caption: 'Acceso a la administración, sobre Firebase Auth' },
      ],
    },
    'gensior': {
      tag: 'Salud · Web',
      title: 'Gensior: un sitio alemán de servicios farmacéuticos',
      summary: 'Un sitio en alemán para una consultora farmacéutica especializada en gestión de aguas medicinales, con catálogo de productos y un flujo de consulta.',
      metric: 'Catálogo y consultas, sin servidor',
      challenge:
        'Una consultoría en un sector regulado necesita un sitio que resulte creíble a farmacéuticos y ayuntamientos, presente una gama de productos y recoja consultas, sin levantar un backend que mantener. El público es estrecho y experto: plantas embotelladoras, manantiales termales y servicios municipales de aguas, que juzgarán a la consultoría en el primer párrafo por si usa bien el vocabulario de la persona cualificada y de la auditoría GMP, en alemán. La prosa genérica de agencia suspende ese examen de inmediato. La segunda restricción es más callada: la consultoría es una sola persona, así que lo que se construya tiene que seguir funcionando años sin nadie que lo opere, lo que descarta la respuesta habitual de un CMS con un panel que parchear y una base de datos que respaldar.',
      approach:
        'Construido como una aplicación React de una sola página sobre Vite, con las páginas de servicios, el catálogo y el carrito como componentes separados y Framer Motion a cargo de las transiciones, de modo que pasar de una sección a otra no cuesta ninguna ida y vuelta y se lee como un gesto deliberado y no como páginas que se recargan. La vía de contacto y pedido pasa por una función de Netlify en lugar de un servidor, y existe por una sola razón: la clave de API del proveedor de correo tiene que vivir en algún sitio que no sea el navegador, y una función es lo más pequeño que sirve. Todo lo demás son ficheros estáticos en un CDN. El texto alemán se organiza en torno a la promesa real de la consultoría —seguridad, cumplimiento y calidad, del manantial a la liberación— y no en torno a una lista de funciones.',
      result:
        'Un sitio que presenta a la consultoría y sus productos en alemán y encamina las consultas al equipo, desplegado sin infraestructura que operar. Toda la superficie de la que un responsable debe preocuparse es un repositorio Git y una variable de entorno. No hay servidor que pueda quedarse sin parchear, ni panel que comprometer, ni base de datos que restaurar, lo que para una consultoría de una persona no es tanto un ahorro como la diferencia entre un sitio que sigue funcionando dentro de tres años y uno que se paró sin avisar.',
      outcomes: [
        'Secciones de servicios, sobre mí y productos en alemán',
        'Catálogo de producto con flujo de carrito',
        'Aplicación de una sola página: cambiar de sección no cuesta ida y vuelta',
        'Consultas atendidas por una función serverless, el único sitio donde cabe una clave de API',
        'Sin base de datos, sin panel de administración, nada que parchear periódicamente',
        'Despliegue estático, sin servidor que mantener',
      ],
      images: [
        { alt: 'Inicio de Gensior: titular de servicios farmacéuticos sobre una imagen de agua', caption: 'Inicio: posicionamiento en gestión de aguas medicinales' },
      ],
    },
    'focuslock': {
      tag: 'Productividad · Escritorio',
      title: 'Focus Lock: gánate tu tiempo de juego',
      metaDescription: 'Aplicación para Windows que mantiene bloqueados juegos y aplicaciones hasta que estén hechas las tareas del día.',
      summary: 'Una aplicación de escritorio para Windows que mantiene bloqueados los juegos y las aplicaciones que elijas hasta que estén hechas las tareas del día, con XP y niveles por completarlas.',
      metric: 'Bloqueo condicionado a tareas, con XP y niveles',
      challenge:
        'Los bloqueadores que se limitan a prohibir una aplicación se desactivan en una semana. La conducta solo se sostiene si aquello que se bloquea puede recuperarse ganándolo. Todos los bloqueadores fallan igual: funcionan mientras dura la novedad y luego el usuario los apaga, porque lo único entre él y el juego es su propia voluntad y el software se ha puesto en el papel de adversario. Endurecer el bloqueo no lo arregla: en tu propia máquina siempre acabas ganando esa discusión. Lo que sobrevive es cambiar qué es la recompensa: algo que se gana en vez de algo que se retiene.',
      approach:
        'Focus Lock invierte el bloqueador habitual: en lugar de prohibir los juegos, los retiene tras la lista de tareas y los libera cuando el trabajo está hecho. El encuadre está en la primera línea de la interfaz —gánate tu tiempo de juego— y el modo concentración es un botón que pulsas, no un horario impuesto, lo que mantiene al usuario como autor de la restricción y no como su sujeto. Las tareas llevan prioridad y dan XP al completarse, lo que alimenta niveles y logros. Sobre la lista hay tres contadores: nivel actual, progreso de XP y tareas hechas de las de hoy, de modo que el estado de la barrera se ve antes de empezar y no se descubre cuando algo se niega a abrirse. Es una app Electron con renderizador React y TypeScript, estado en Zustand y SQLite para almacenamiento local duradero: nada sale de la máquina.',
      result:
        'Una versión de Windows funcional, publicada bajo licencia MIT con guía de contribución y código de conducta. El código abierto es lo correcto para esta herramienta en concreto: un programa que decide qué puedes ejecutar en tu propio ordenador es un programa que deberías poder leer. Tampoco hay cuenta, ni sincronización, ni servidor, así que no hay nada que pueda estar caído justo cuando quieres desbloquear algo, un fallo que destruiría para siempre la confianza en una herramienta de productividad.',
      outcomes: [
        'Lista de tareas con prioridades y seguimiento de finalización',
        'XP, niveles y logros ligados al trabajo terminado',
        'Modo concentración que bloquea las aplicaciones elegidas',
        'Tres contadores sobre la lista: nivel, progreso de XP, tareas de hoy',
        'Modo concentración iniciado a propósito, no impuesto por horario',
        'Almacenamiento local SQLite, sin cuenta ni sincronización',
        'Código abierto bajo licencia MIT, con guía de contribución',
      ],
      images: [
        { alt: 'Panel de Focus Lock con el nivel, el progreso de XP, las tareas completadas y la lista de tareas', caption: 'El panel: nivel, XP y las tareas del día' },
      ],
    },
  },
};

export default es;
