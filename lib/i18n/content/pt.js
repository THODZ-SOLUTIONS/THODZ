// Portuguese content overlay (European Portuguese). Lists mirror the order of
// lib/content.js and carry only the translatable fields; case studies are
// keyed by slug. Structural data (slugs, stacks, images, links) lives once,
// in lib/content.js.
//
// Retail vocabulary follows pt-PT: an order placed in a shop is an
// "encomenda", not a "pedido" — "pedido" is kept for project enquiries.

const pt = {
  services: [
    { title: 'Desenvolvimento web', description: 'Aplicações full-stack e sites institucionais construídos para escalar, de frontends em React a APIs sobre Postgres.' },
    { title: 'Aplicações móveis', description: 'Aplicações nativas iOS/Android e multiplataforma publicadas na loja, não apenas um ficheiro de Figma.' },
    { title: 'Software de desktop', description: 'Ferramentas de desktop multiplataforma para operações internas, engenharia e ambientes regulados.' },
    { title: 'DevOps', description: 'CI/CD, orquestração de contentores e infraestrutura como código, com implementações medidas em minutos.' },
    { title: 'Cibersegurança', description: 'Modelação de ameaças, endurecimento e arquitetura segura por omissão, para equipas que não podem dar-se ao luxo de uma falha.' },
    { title: 'Soluções de IA / ML', description: 'ML aplicado: recomendação, previsão e fluxos apoiados em LLM, colocados em produção.' },
    { title: 'Automação', description: 'Substitua o trabalho manual por processos robustos: sincronização de dados, relatórios, ferramentas internas.' },
    { title: 'Design UI/UX', description: 'Interfaces desenhadas para quem as vai usar todos os dias, não apenas para a demonstração.' },
    { title: 'Consultoria de projeto', description: 'Auditoria técnica, revisão de arquitetura e planeamento de roadmap para equipas de direção.' },
  ],

  process: [
    { title: 'Descobrir', description: 'Âmbito, restrições e métricas de sucesso: uma auditoria técnica curta, não uma apresentação comercial.' },
    { title: 'Desenhar', description: 'Desenho do sistema, registo de riscos e um plano de entrega que a sua equipa pode rever linha a linha.' },
    { title: 'Construir', description: 'Entrega iterativa em incrementos semanais, visíveis num ambiente de testes desde a primeira semana.' },
    { title: 'Lançar', description: 'Entrada em produção com plano de recuo, monitorização e um manual de operação que fica com a sua equipa.' },
    { title: 'Acompanhar', description: 'Disponibilidade permanente e contrato de manutenção, ou uma passagem limpa. A escolha é sua.' },
  ],

  values: [
    { title: 'Uma equipa que responde', description: 'Sem passagens entre desconhecidos. Os engenheiros que definem o seu projeto são os que o entregam.' },
    { title: 'Documentado por omissão', description: 'As decisões de arquitetura, os manuais de operação e os contratos de API ficam escritos, não na cabeça de alguém.' },
    { title: 'Construído para ser entregue', description: 'Cada trabalho termina com a sua equipa capaz de operar o sistema sem nós, quer nos mantenha em avença quer não.' },
  ],

  team: [
    {
      role: 'Fundador e responsável técnico',
      bio: 'O Hatem define e lidera cada trabalho da THODZ. Vem da criptografia e da segurança de sistemas, e trabalhou como responsável técnico em entregas de web, mobile e ML aplicado: as mesmas três áreas onde aterram a maioria dos projetos da THODZ.',
      credentials: [
        'Mestrado em criptografia e segurança da informação',
        'Responsável técnico em entregas de web, mobile e ML aplicado',
        'Trabalha em francês, inglês e árabe',
      ],
    },
  ],

  engagements: [
    {
      name: 'Projeto a preço fechado',
      placeholderPrice: 'A partir de 6.000 €',
      bestFor: 'Um sistema definido com âmbito conhecido: construir um produto, refazê-lo ou migrá-lo.',
      billing: 'Por marcos. Um adiantamento para começar e o restante distribuído pelos marcos de entrega acordados.',
      includes: [
        'Auditoria inicial e âmbito por escrito',
        'Documento de arquitetura e registo de riscos',
        'Incrementos semanais num ambiente de testes',
        'Manual de operação e passagem na entrega',
        '30 dias de cobertura de erros após o lançamento',
      ],
    },
    {
      name: 'Avença mensal',
      placeholderPrice: 'A partir de 2.500 € / mês',
      bestFor: 'Trabalho de produto contínuo em que o âmbito se move: um roadmap em vez de uma única entrega.',
      billing: 'Um valor mensal fixo por uma capacidade acordada. Cancelável com 30 dias de aviso.',
      includes: [
        'Capacidade de engenharia acordada todos os meses',
        'Planeamento e priorização do roadmap',
        'Entrega contínua para os seus ambientes',
        'Canal direto com os engenheiros que estão a construir',
        'Resumo escrito do progresso todos os meses',
      ],
    },
    {
      name: 'Suporte e operação',
      placeholderPrice: 'A partir de 600 € / mês',
      bestFor: 'Um sistema já em produção, seu ou nosso, mantido atualizado, monitorizado e vivo.',
      billing: 'Um valor mensal fixo consoante o nível de resposta. Sem período mínimo para além dos primeiros três meses.',
      includes: [
        'Monitorização, alertas e atualização de dependências',
        'Janela de resposta acordada para incidentes',
        'Pequenas alterações e correções dentro de um plafond mensal',
        'Revisão trimestral de segurança e dependências',
        'Via de escalada para a equipa que construiu',
      ],
    },
    {
      name: 'Consultoria e auditoria',
      placeholderPrice: 'A partir de 1.200 €',
      bestFor: 'Precisa de uma decisão, não de uma construção: revisão de arquitetura, auditoria técnica, uma segunda opinião.',
      billing: 'Preço fechado para um trabalho definido, ou valor diário para acompanhamento contínuo.',
      includes: [
        'Revisão do código e da arquitetura',
        'Avaliação de segurança e infraestrutura',
        'Conclusões por escrito com correções priorizadas',
        'Sessão de apresentação à sua equipa ou administração',
      ],
    },
  ],

  faq: [
    {
      q: 'De quem é o código que escrevem?',
      a: 'É seu. Com o pagamento final, todo o código-fonte, os desenhos e a documentação produzidos para o seu projeto passam inteiramente para si, incluindo o histórico do repositório. Não ficamos com qualquer licença sobre o seu produto e não reutilizamos o seu código no sistema de outro cliente. Quando um projeto usa componentes de código aberto, as licenças desses componentes continuam a aplicar-se, e listamos todas na documentação de passagem.',
    },
    {
      q: 'Como funciona a faturação?',
      a: 'Os projetos a preço fechado são faturados contra marcos de entrega: um adiantamento para começar e depois o restante à medida que cada marco é aceite. As avenças e os planos de suporte são faturados mensalmente e antecipadamente. As faturas são pagas em EUR, USD ou DZD por transferência bancária. Cada fatura indica exatamente o que cobre.',
    },
    {
      q: 'O que cobre o contrato?',
      a: 'Um acordo escrito antes de qualquer trabalho começar, a cobrir âmbito, marcos, condições de pagamento, transferência de propriedade intelectual, confidencialidade e como qualquer uma das partes pode terminar o trabalho. Os pedidos de alteração são orçamentados e acordados por escrito antes de serem construídos, por isso o âmbito nunca cresce em silêncio dentro da sua fatura.',
    },
    {
      q: 'Assinam um acordo de confidencialidade?',
      a: 'Sim, e assinamos o seu em vez de insistir no nosso. Assinale a caixa de confidencialidade no formulário de contacto e tratamos disso antes de nos enviar fosse o que fosse de sensível. Todos os trabalhos estão cobertos por confidencialidade mútua, quer haja ou não um acordo em separado assinado.',
    },
    {
      q: 'O que acontece depois do lançamento?',
      a: 'Cada projeto é entregue com um manual de operação, um documento de arquitetura e uma sessão de passagem, para que a sua equipa possa operar o sistema sem nós. Os projetos a preço fechado incluem 30 dias de cobertura de erros após o lançamento. A partir daí pode passar para um plano de suporte, ou levar tudo para dentro de casa: ambos são finais normais, e não retemos a sua infraestrutura para o reter a si.',
    },
    {
      q: 'Com que rapidez respondem?',
      a: 'Em um dia útil a contar da sua primeira mensagem, da parte de um engenheiro e não de uma equipa comercial. A partir daí, a primeira conversa para definir o trabalho acontece normalmente na mesma semana.',
    },
    {
      q: 'Onde estão sediados e que fusos horários cobrem?',
      a: 'Estamos sediados na Argélia (UTC+1) e trabalhamos remotamente com clientes na Europa, no Médio Oriente e na América do Norte. O nosso horário cobre todo o dia útil europeu e boa parte da manhã da costa leste dos Estados Unidos.',
    },
    {
      q: 'Em que idiomas trabalham?',
      a: 'Francês, inglês e árabe. Isso abrange reuniões, documentação escrita e o próprio produto: construímos interfaces multilingues, incluindo disposições da direita para a esquerda em árabe, como parte normal da entrega e não como um acrescento.',
    },
  ],

  disciplines: ['Web', 'Mobile', 'Desktop', 'DevOps', 'Cibersegurança', 'IA / ML', 'Automação', 'UI/UX', 'Consultoria'],

  problems: [
    {
      title: 'Quero vender ou aceitar marcações online',
      build: 'Uma loja online ou plataforma de marcações com pagamento online e à cobrança, cálculo de portes e uma área de gestão que a sua equipa usa sozinha.',
      gets: ['Catálogo, carrinho e pagamento', 'Gestão de encomendas, stock e preços', 'Alojamento, cópias de segurança e monitorização'],
      first: 'Uma conversa de 30 min e, na primeira semana, um âmbito por escrito.',
      refLabel: 'SADJIA CERAM: catálogo e simulador de preço em tempo real',
    },
    {
      title: 'As nossas operações ainda vivem em folhas de cálculo e telefonemas',
      build: 'Uma única ferramenta interna para o que hoje controla à mão (encomendas, expedições, faturas, pessoal), com os relatórios incluídos.',
      gets: ['Aplicação de desktop ou web, como preferir', 'Faturação e relatórios num só sítio', 'Perfis para cada pessoa ver a sua parte'],
      first: 'Sentamo-nos a ver como a sua equipa trabalha hoje e mapeamos isso.',
      refLabel: 'Painel de distribuição: desktop e web, uma só base de código',
    },
    {
      title: 'Temos uma ideia de aplicação e é preciso lançá-la',
      build: 'O seu produto levado da ideia à App Store e ao Google Play: iOS, Android e web a partir de uma só base de código.',
      gets: ['Desenho navegável antes do código', 'Versões semanais que pode instalar', 'Publicação nas lojas tratada'],
      first: 'Uma sessão de definição para cortar a versão um ao que interessa.',
      refLabel: 'Little Hafiz: aplicação Flutter que funciona offline',
    },
    {
      title: 'O nosso sistema atual é lento, frágil ou inseguro',
      build: 'Uma auditoria e depois uma decisão por escrito: corrigir o que tem ou reconstruí-lo, seguida de endurecimento, CI/CD e monitorização.',
      gets: ['Auditoria de segurança e desempenho', 'Lista de correções priorizada e com custos', 'Implementações automáticas e alertas'],
      first: 'Acesso de leitura e um relatório de auditoria curto.',
      refLabel: null,
    },
    {
      title: 'Queremos usar IA onde realmente ajude',
      build: 'IA integrada num fluxo de trabalho real, com um passo de aprovação humana: redigir, classificar, prever ou recomendar.',
      gets: ['Um fluxo, medido antes e depois', 'Revisão humana onde importa', 'Os seus dados continuam sob o seu controlo'],
      first: 'Escolhemos um fluxo e definimos o que significa «melhor».',
      refLabel: 'Plataforma de doença crónica: a IA redige, os médicos aprovam',
    },
    {
      title: 'Precisamos de uma segunda opinião técnica',
      build: 'Uma revisão independente de uma arquitetura, de uma proposta de fornecedor ou de uma base de código, por escrito e em linguagem clara.',
      gets: ['Revisão de arquitetura e de código', 'Riscos ordenados por impacto', 'Um roadmap que a sua equipa consegue seguir'],
      first: 'Partilhe o que tem; confirmamos âmbito e preço.',
      refLabel: null,
    },
  ],

  timeline: [
    { title: 'Fala com um engenheiro, não com um comercial.', text: 'Quem lê a sua mensagem é quem percebe da tecnologia. É essa pessoa que lhe liga para perceber o seu negócio e o que precisa.' },
    { title: 'Um plano claro por escrito.', text: 'Estudamos o seu projeto e pomos tudo por escrito: o que vamos construir, o que pode correr mal e como vamos medir o sucesso. Sem promessas vagas.' },
    { title: 'Um preço fechado.', text: 'Recebe o plano completo e um preço fechado. Nada começa até o aprovar.' },
    { title: 'Experimente enquanto construímos.', text: 'Cedo no processo tem uma versão privada do seu produto que pode abrir e usar. É atualizada com regularidade, por isso dá a sua opinião enquanto as alterações ainda são fáceis e baratas.' },
    { title: 'Entrar no ar em segurança.', text: 'Lançamos para os seus clientes e ficamos atentos. Se alguma coisa correr mal, voltamos à versão anterior em minutos, antes mesmo de os seus clientes darem por isso. Recebe também um guia simples para o operar.' },
    { title: 'Correção de erros incluída, depois decide.', text: 'Qualquer erro depois do lançamento é corrigido como parte do projeto, dentro do período de suporte incluído. Depois disso, mantenha-nos para o suporte, ou assuma tudo, com tudo entregue.' },
  ],

  openSource: [
    {
      tagline: 'O seu cliente paga uma vez. Nunca duas.',
      description: 'Um cliente toca em «Pagar» mesmo quando a ligação cai. O pagamento passou? A maioria das aplicações adivinha, e adivinhar significa cobranças em duplicado, telefonemas irritados e devoluções. A nossa confirma com o seu sistema e obtém a resposta verdadeira, sempre. O seu dinheiro e a sua reputação ficam protegidos, mesmo com a pior rede.',
    },
    {
      tagline: 'Dados atuais, sem a espera.',
      description: 'Os preços mudam, o stock esgota, as encomendas são atualizadas. A maioria das aplicações ou mostra informação desatualizada ou recarrega tantas vezes que gasta a bateria e fica lenta. A nossa atualiza tudo no momento certo, numa única atualização limpa. Os seus clientes veem sempre a realidade, e a aplicação continua rápida.',
    },
    {
      tagline: 'As suas mensagens chegam mesmo.',
      description: 'Gasta dinheiro a trazer clientes de volta com promoções, lembretes e avisos de encomenda. Mas nos Android e iPhone mais recentes, muitas aplicações perdem em silêncio a autorização para notificar, e essas mensagens nunca chegam. A nossa trata cada caso corretamente, por isso cada mensagem que paga para enviar chega a uma pessoa real.',
    },
  ],

  caseStudies: {
    'sadjia-ceram': {
      tag: 'Retalho · Web',
      title: 'SADJIA CERAM: showroom digital',
      client: 'SADJIA CERAM, Es Senia, Orão',
      summary: 'Um catálogo de produto digital e um simulador de preço em tempo real para um distribuidor de azulejos em Orão, que substitui o orçamento por telefone por uma consulta e um cálculo em autosserviço.',
      metric: 'Catálogo, simulador e gestão numa só entrega',
      before: 'Os clientes telefonavam à loja para saber o preço de cada azulejo e de cada obra.',
      after: 'Agora percorrem o catálogo e obtêm sozinhos uma estimativa em DZD em tempo real para a sua divisão.',
      challenge: 'A SADJIA CERAM vende azulejos de pavimento e parede de gama alta a partir de um showroom em Es Senia, Orão. Cada pedido passava pelo mesmo estrangulamento: o cliente via um azulejo algures, telefonava ao showroom, descrevia-o e esperava enquanto alguém calculava quanto custaria uma divisão inteira. Nem o catálogo nem os preços existiam em qualquer sítio a que o cliente pudesse chegar sozinho, por isso a equipa passava o dia a orçamentar ao telefone em vez de vender, e os clientes chegavam sem ideia de orçamento.',
      approach: 'Construímos o showroom como um produto que o cliente pode usar antes de telefonar. O catálogo filtra-se por coleção, dimensão e tipo, de modo que o cliente reduz aos quatro azulejos que vale a pena considerar em vez de percorrer uma folha de cálculo. Cada ficha leva as dimensões reais e o preço real por metro quadrado. Por cima está o simulador: introduz-se uma área, juntam-se vários azulejos a uma obra e devolve um total formatado em dinares argelinos, calculado com as mesmas regras que o showroom aplica à mão. Por trás, uma área de gestão permite à equipa acrescentar produtos, carregar imagens e alterar dimensões e preços sem tocar em código nem esperar por nós. O WhatsApp, o Instagram e a localização do showroom no Google Maps estão ligados em todas as páginas, porque neste mercado o pedido acaba no WhatsApp quer se conte com isso quer não.',
      result: 'O showroom tem agora um catálogo vivo e uma ferramenta de orçamento que os clientes usam antes de pegarem no telefone, além de uma área de gestão que a equipa opera todos os dias. Mudar preços leva um minuto a uma pessoa em vez de um telefonema a um programador.',
      outcomes: [
        'Catálogo em autosserviço com filtros por dimensão, tipo e coleção',
        'Simulador de obra em tempo real, com preço por m² e formato em DZD',
        'Gestão de produtos, imagens, dimensões e preços',
        'WhatsApp, redes sociais e Maps para o showroom físico em todas as páginas',
        'Adaptado a telemóvel, tablet e desktop',
      ],
      images: [
        { alt: 'Página inicial da SADJIA CERAM: coleções e produtos em destaque com preço por metro quadrado', caption: 'Início: coleções e produtos em destaque, com preço por m²' },
        { alt: 'Catálogo de produtos filtrado por dimensão e tipo de azulejo', caption: 'Filtragem do catálogo por dimensão e tipo' },
        { alt: 'Ficha de produto de um azulejo com dimensões e preço', caption: 'Ficha de produto com dimensões e preço' },
        { alt: 'Área de gestão de produtos, dimensões e preços', caption: 'A área de gestão que a equipa do showroom usa todos os dias' },
      ],
    },
    'logistics-dashboard': {
      tag: 'Logística · Desktop',
      title: 'Painel de gestão de logística e distribuição',
      summary: 'Um painel de desktop e web para acompanhar operações de transporte e distribuição, entregue como aplicação nativa e, em paralelo, como aplicação web sobre Supabase.',
      metric: 'Desktop e web a partir de uma só base de código',
      before: 'Transporte e distribuição acompanhados entre ferramentas separadas e folhas de cálculo.',
      after: 'Uma aplicação nativa, mais uma versão web da mesma base de código, acompanha tudo.',
      challenge: 'Uma operação de transporte e distribuição precisava de um único sistema para acompanhar a frota, as entregas e a parte financeira do negócio, instalável tanto como ferramenta de desktop como aplicação web alojada.',
      approach: 'Construímos o painel uma vez em Vite e TypeScript e entregámo-lo de duas formas: uma versão de desktop em Electron para uso local e offline, e uma versão web sobre Supabase, com a mesma base de código e a mesma camada de dados.',
      result: 'Um único painel que cobre as operações de distribuição e as finanças, preparado tanto para instalação em desktop como para acesso web.',
      outcomes: [
        'Uma só base de código TypeScript, dois destinos de entrega',
        'Versão em Electron para uso instalado e local',
        'Versão web sobre Supabase a partilhar a mesma camada de dados',
      ],
      images: [
        { alt: 'Painel financeiro unificado com fluxo de caixa, saldos de clientes e acertos de motoristas', caption: 'O painel unificado: fluxo de caixa, contas de clientes e acertos' },
      ],
    },
    'ability-beyond-disability': {
      tag: 'Impacto social · Web',
      title: 'Ability Beyond Disability',
      client: 'رغم إعاقتي أبدع: mostra nacional de talento, Argélia',
      summary: 'Uma página bilingue (árabe/inglês) que mostra os talentos e as conquistas de pessoas com deficiência em toda a Argélia.',
      metric: 'Mostra nacional de talento',
      before: 'Pessoas com deficiência e com talento em toda a Argélia não tinham uma mostra comum.',
      after: 'Uma página bilingue árabe / inglês que apresenta os seus talentos e conquistas a nível nacional.',
      challenge: 'As pessoas com deficiência em toda a Argélia precisavam de uma plataforma pública para mostrar o seu trabalho criativo e profissional: uma que se leia como uma mostra cuidada e não como uma página de caridade.',
      approach: 'Desenhámos um site estático acessível e visualmente apelativo: uma galeria de talento com especialidade e localização de cada pessoa, estatísticas nacionais de talentos registados e províncias representadas, uma secção de eventos para workshops e exposições, e uma subscrição de newsletter. Feito para carregar depressa sem depender de um backend, e escrito em árabe e inglês para se ler com naturalidade ao seu público.',
      result: 'Um site de mostra acessível e em produção que dá visibilidade ao talento das províncias da Argélia.',
      outcomes: [
        'Galeria de talento com especialidade, localização e etiquetas por pessoa',
        'Estatísticas nacionais: talentos registados, províncias, obras, eventos',
        'Secção de eventos para workshops, exposições e concursos',
        'Bilingue árabe/inglês, sem dependência de backend',
      ],
      images: [
        { alt: 'Início do Ability Beyond Disability: destaque, talento da semana e estatísticas nacionais', caption: 'Início: o talento da semana e os contadores nacionais por baixo' },
        { alt: 'Cartões da galeria de talento com especialidade, província e etiquetas', caption: 'A galeria: especialidade, província e etiquetas por pessoa' },
        { alt: 'Secção de eventos com workshops, exposições e concursos', caption: 'Eventos: workshops, exposições e concursos' },
      ],
    },
    'little-hafiz': {
      tag: 'Educação · Mobile',
      title: 'Little Hafiz: aplicação de memorização do Corão',
      summary: 'Uma aplicação Flutter de memorização do Corão para crianças e adultos, com escuta versículo a versículo, acompanhamento do progresso e uma versão web instalável que funciona offline.',
      metric: 'Web, iOS e Android a partir de uma só base de código',
      before: 'A prática de memorização dependia de ter por perto um professor ou um exemplar impresso.',
      after: 'Escuta versículo a versículo e acompanhamento do progresso em qualquer telemóvel, mesmo offline.',
      challenge: 'Aplicações de memorização do Corão há muitas, mas poucas são feitas especificamente para crianças, com um progresso que os pais consigam mesmo acompanhar.',
      approach: 'Construímos uma só base de código Flutter a cobrir a escuta versículo a versículo, vários métodos de memorização e o acompanhamento do progresso, entregue como aplicação web progressiva instalável e capaz de funcionar offline, com versões móveis da mesma origem.',
      result: 'Uma aplicação de memorização multiplataforma instalável diretamente a partir do navegador, sem passar pelo crivo das lojas.',
      outcomes: [
        'Escuta versículo a versículo com navegação por suratas',
        'Vários métodos de memorização e acompanhamento do progresso',
        'Aplicação web progressiva instalável e utilizável offline, mais versões iOS e Android',
      ],
      images: [
        { alt: 'Ecrã inicial do Little Hafiz com memorizar, ouvir e repetir, jogos e modo de pais', caption: 'Início: memorizar, ouvir e repetir, jogos e modo de pais' },
        { alt: 'Ecrã do modo de pais no telemóvel, protegido por bloqueio', caption: 'Modo de pais na versão para telemóvel' },
      ],
    },
    'sahafood': {
      tag: 'Alimentação · Mobile',
      title: 'SahaFood: aplicação de entrega de comida',
      summary: 'Uma aplicação Flutter de entrega de comida que cobre o percurso de encomenda do cliente. Atualmente em desenvolvimento ativo.',
      metric: 'Em desenvolvimento ativo',
      challenge: 'A entrega de comida no mercado alvo funciona à base de encomendas por telefone e de aplicações de terceiros que ficam com uma parte de cada venda. A SahaFood precisava do seu próprio canal de encomendas.',
      approach: 'Estamos a construir primeiro a aplicação Flutter virada para o cliente: navegar, encomendar e pagar, com os sistemas do comerciante e da entrega a seguir.',
      result: 'A aplicação de encomendas está em desenvolvimento ativo. Esta entrada será atualizada à medida que avança.',
      outcomes: [
        'Percurso de navegação, encomenda e pagamento para o cliente',
        'Sistemas do comerciante e da entrega a seguir',
      ],
    },
    'id-verification-pipeline': {
      tag: 'Visão computacional · IA/ML',
      title: 'Pipeline de deteção e segmentação de documentos de identificação',
      summary: 'Um pipeline de visão computacional que deteta, segmenta e corrige a perspetiva de documentos de identificação argelinos a partir de uma imagem de câmara, produzindo um recorte pronto para OCR.',
      metric: 'Da câmara a um recorte pronto para OCR, no dispositivo',
      challenge: 'Ler um documento de identificação de forma fiável a partir de uma fotografia de telemóvel obriga a resolver a rotação, os enquadramentos parciais e a iluminação irregular antes sequer de correr o OCR.',
      approach: 'Treinámos um modelo de segmentação YOLOv8 sobre o conjunto de dados MIDV-500 para localizar e mascarar o documento, acompanhado de um detetor leve de caixas orientadas para o enquadramento no telemóvel, exportando ambos para ONNX e TFLite para inferência no dispositivo.',
      result: 'Um pipeline da câmara ao recorte (detetar, segmentar, corrigir perspetiva) pronto a alimentar qualquer motor de OCR, a correr no próprio dispositivo móvel.',
      outcomes: [
        'Segmentação YOLOv8 treinada sobre o conjunto de dados MIDV-500',
        'Detetor de caixas orientadas para o enquadramento em direto no telemóvel',
        'Exportação para ONNX e TFLite para inferência no dispositivo',
        'Recorte de saída com perspetiva corrigida, pronto para OCR',
      ],
      images: [
        { alt: 'As etapas do pipeline: deteção, segmentação e correção de perspetiva de um documento de identificação', caption: 'Detetar, segmentar, corrigir: da câmara a um recorte pronto para OCR' },
      ],
    },
    'tradevirtual': {
      tag: 'Fintech · Web',
      title: 'TradeVirtual: plataforma de negociação simulada de criptomoedas',
      summary: 'Uma plataforma com elementos de jogo para praticar a negociação de criptomoedas com fundos simulados: cotações em direto, XP e classificações, sem dinheiro real em risco.',
      metric: '6 ativos acompanhados · cotações em direto',
      challenge: 'Quem começa a negociar quer perceber como é mesmo negociar cripto sem arriscar dinheiro, e a maioria das ferramentas de simulação parece mais uma folha de cálculo do que um produto.',
      approach: 'Construímos um simulador de negociação completo sobre Next.js e Prisma: cotações em direto obtidas da Binance a cada cinco segundos para BTC, ETH, BNB, SOL, ADA e DOGE, um percurso real de compra e venda com histórico completo, e uma camada de jogo (XP por operação, níveis, classificação global e troca de XP por saldo) para manter o interesse. A entrada faz-se com autenticação do Telegram em vez de mais uma palavra-passe para esquecer.',
      result: 'Uma plataforma de negociação simulada em direto com cotações em tempo real e uma classificação competitiva, não uma demonstração estática.',
      outcomes: [
        'Cotações em direto de seis ativos, atualizadas a cada cinco segundos a partir da Binance',
        'Percurso completo de compra e venda com carteira e histórico de operações',
        'XP, níveis, classificação global e troca de XP por saldo',
        'Autenticação com Telegram em vez de mais uma palavra-passe',
      ],
    },
    'thodz-builder': {
      tag: 'SaaS · Web',
      title: 'THODZ Builder: construtor de portefólios sem código',
      client: 'THODZ SOLUTIONS (produto interno)',
      summary: 'Um construtor de sites de arrastar e largar que permite a qualquer pessoa montar um portefólio profissional a partir de modelos personalizáveis, sem escrever código.',
      metric: '5 modelos · editor de arrastar e largar',
      before: 'Ter um site de portefólio profissional passava por contratar um programador.',
      after: 'Escolhe um modelo, arrasta os blocos para o lugar e publica, sem código.',
      challenge: 'Quem precisa de um portefólio raramente o quer programar, e muitas vezes não consegue. As ferramentas feitas para esse público dividem-se em duas metades desapontantes: construtores tão genéricos que todos os resultados se parecem, e construtores tão fechados que a primeira coisa que se quer mudar é justamente a que não se pode. Procurávamos o meio-termo: modelos a sério, mesmo editáveis, sem atirar ninguém para um editor de código.',
      approach: 'Construímos o editor à volta da manipulação direta. As secções reordenam-se a arrastar (@dnd-kit) e qualquer elemento se edita no lugar: toca-se no texto e escreve-se, toca-se na imagem e troca-se, abre-se o painel de estilo e mudam-se cores, tipos de letra e espaçamento. Cinco modelos com pontos de vista a sério, não variações de cor do mesmo desenho: Modern Minimal, Creative Bold, Developer Tech, Designer Elegant e Business Professional, e alternar entre eles mantém o conteúdo. Tudo se guarda sozinho. Contas, persistência e armazenamento de ficheiros funcionam sobre Supabase com Prisma e Postgres, por isso um site a meio continua lá amanhã.',
      result: 'Um construtor sem código a funcionar de ponta a ponta: seleção de modelo, edição por arrastamento, personalização de estilo e registo com gestão de conta.',
      outcomes: [
        'Reordenação de secções por arrastamento sobre @dnd-kit',
        'Cinco modelos distintos, trocáveis sem perder o conteúdo',
        'Edição no lugar de textos, imagens, cores, tipos de letra e espaçamento',
        'Acrescentar, remover, reordenar e ocultar secções',
        'Gravação automática com contas Supabase sobre Prisma e Postgres',
      ],
      images: [
        { alt: 'Editor com o modelo Developer Tech e o painel de estilo aberto', caption: 'Editor: o modelo Developer Tech com o painel de estilo aberto' },
        { alt: 'Seleção de modelos com cinco pontos de partida distintos', caption: 'Seleção de modelo: cinco pontos de partida distintos' },
        { alt: 'Ecrã de registo e criação de conta', caption: 'Registo e criação de conta' },
      ],
    },
    'chronic-disease-monitoring': {
      tag: 'Saúde · Web',
      title: 'Plataforma de monitorização de doenças crónicas',
      summary: 'Uma aplicação web por perfis onde os doentes registam as suas medições e recebem orientações de tratamento redigidas por IA e revistas por um médico.',
      metric: 'Perfis de doente e médico · saída aprovada por um médico',
      before: 'As medições dos doentes e as orientações de seguimento viviam em notas dispersas.',
      after: 'Os doentes registam medições; a IA redige orientações que um médico revê antes de serem enviadas.',
      challenge: 'Quem gere uma doença crónica precisa de uma forma simples de registar medições e receber orientações de volta. Um modelo de IA consegue redigir essas orientações em segundos, e é precisamente aí que está o problema: entregar sugestões médicas por rever diretamente a um doente é um risco, não uma funcionalidade. O sistema tinha de ser útil o suficiente para os doentes continuarem a registar, e seguro o suficiente para que nada lhes chegasse sem um clínico o ter lido.',
      approach: 'Integrámos o passo de revisão clínica no modelo de dados em vez de o acrescentarmos por cima. Os doentes submetem medições, recolhidas de sensores médicos, através de um percurso pensado primeiro para telemóvel, e veem todo o seu histórico. Cada submissão gera um relatório redigido por IA apenas no backend, nunca no navegador, e esse rascunho cai na fila de um médico, não na caixa de entrada do doente. A conta de médico revê, edita e aprova cada relatório e cada receita antes de o doente ver fosse o que fosse; um rascunho por rever não tem qualquer via até ao doente. A autenticação funciona sobre Firebase com verificação de e-mail por código único e entrada com Google, sobre uma Realtime Database que mantém os dois lados do histórico sincronizados.',
      result: 'Um ciclo de monitorização doente/médico a funcionar (submissão, redação por IA, revisão clínica, publicação) com histórico completo dos dois lados e sem qualquer via para uma saída por rever chegar a um doente.',
      outcomes: [
        'Dois perfis num mesmo sistema: submissão do doente, revisão do médico',
        'Redação por IA confinada ao backend, condicionada à aprovação clínica',
        'Os médicos editam e aprovam cada relatório e receita antes da publicação',
        'Histórico completo de medições e tratamentos para ambos os perfis',
        'Firebase Auth com verificação de e-mail por código único e entrada com Google',
        'Desenho adaptável pensado primeiro para telemóvel em todos os ecrãs',
      ],
      images: [
        { alt: 'Painel do doente com as medições registadas e o histórico', caption: 'Painel do doente: medições e histórico' },
        { alt: 'Formulário onde o doente submete um novo conjunto de medições', caption: 'Submissão de um novo conjunto de medições' },
        { alt: 'Ecrã de revisão do médico para editar e aprovar um relatório redigido por IA', caption: 'Revisão médica: cada rascunho é editado e aprovado antes de ser publicado' },
      ],
    },
    'giftili': {
      tag: 'Design de produto · Web',
      title: 'Giftili: enviar um presente para casa, para a Argélia',
      summary: 'Um design de produto de 25 ecrãs para um serviço de presentes da diáspora: escolhe-se o presente a partir do estrangeiro, desenha-se o cartão que o acompanha e é entregue em mão na Argélia.',
      metric: '13 ecrãs de cliente · 12 de gestão',
      challenge: 'Alguém em Paris, Montreal ou no Dubai quer ser o primeiro a dar os parabéns à mãe em Batna. Cada parte é incómoda: pagar a partir do estrangeiro, escolher algo que chegue mesmo, escrever um cartão numa língua que a loja talvez não leia, e saber que foi entregue. Uma loja sozinha não resolve isto, porque metade do problema acontece depois da encomenda.',
      approach: 'Desenhado de ponta a ponta e não como uma loja. O lado do cliente cobre o catálogo de presentes e as fichas de produto, um editor de cartões onde a mensagem é composta sobre um cartão real que é impresso e colocado na encomenda, presentes de grupo para que várias pessoas contribuam, lembretes de ocasiões, acompanhamento da encomenda e um mural de reações para o momento da entrega. O lado das operações está desenhado com o mesmo peso: encomendas e entrega, estafetas, clientes, produtos e stock, zonas de entrega e códigos promocionais, marketing, conteúdo do site, perfis de equipa com entrada em dois passos, e análises. Cada ecrã está pensado em inglês, francês e árabe, porque quem envia e quem recebe raramente leem a mesma língua.',
      result: 'Um protótipo completo e navegável que cobre os dois lados do serviço, de quem envia a partir da diáspora à rota do estafeta na Argélia.',
      outcomes: [
        'Editor de cartões com frente e interior, autocolantes, fotografias e acabamentos de impressão',
        'Presentes de grupo para os quais várias pessoas contribuem',
        'Entrega em 67 wilayas com atribuição de estafeta por encomenda',
        'Gestão de encomendas, stock, estafetas, promoções, conteúdo e perfis',
        'Trilingue de ponta a ponta, incluindo o árabe da direita para a esquerda',
      ],
      images: [
        { alt: 'Início do Giftili: escolha um presente, escreva umas palavras, entregue na Argélia', caption: 'Início: destinatário, ocasião e orçamento' },
        { alt: 'Editor de cartões com modelos, ferramentas de texto e autocolantes, e acabamentos de impressão', caption: 'O editor de cartões: o que é impresso e acompanha o presente' },
        { alt: 'Ficha de produto de um ramo com tamanho, cor, extras e escolha da data de entrega', caption: 'Produto: tamanho, extras, wilaya e data de entrega' },
        { alt: 'Painel de encomendas e entrega com país de origem, wilaya do destinatário, estafeta e estado', caption: 'Operações: encomendas do estrangeiro, encaminhadas para estafetas na Argélia' },
      ],
    },
    'djalil-location': {
      tag: 'Aluguer · Desktop',
      title: 'Djalil Location: painel para um negócio de aluguer de automóveis',
      summary:
        'Uma aplicação de desktop para Windows que funciona offline: frota, clientes, reservas e disponibilidade sobre uma base de dados local, para que o escritório continue a funcionar sem ligação.',
      metric: 'Offline primeiro · reserva dupla bloqueada duas vezes',
      challenge:
        'Um escritório de aluguer funciona sobre um balcão, não sobre a nuvem. O sistema tem de abrir instantaneamente, continuar a funcionar quando a ligação cai e guardar os dados de clientes e contratos numa máquina que o proprietário controla, e não no servidor de outra pessoa. O erro caro neste negócio é alugar o mesmo automóvel duas vezes para as mesmas horas, por isso as regras de reserva têm de aguentar mesmo quando duas reservas são introduzidas com minutos de diferença.',
      approach:
        'Construída como aplicação Electron com interface em Vue 3 e SQLite em disco, acedida por uma camada IPC tipada com um bloqueio, de modo que a interface nunca toca diretamente na base de dados. O acesso é controlado pelo proprietário: palavra-passe definida no primeiro arranque, hash com Argon2, um código de recuperação escrito, limite de cinco tentativas e bloqueio automático quando a máquina fica inativa ou o Windows bloqueia. A sobreposição é verificada duas vezes: ao vivo no formulário de reserva, que nomeia a reserva ou o período de manutenção em conflito e mantém Guardar desativado, e outra vez dentro da transação de escrita. A regra é semiaberta ao minuto, por isso um automóvel devolvido às 10:00 pode voltar a sair às 10:00. A disponibilidade é uma linha de tempo com barras colocadas ao minuto e um intervalo de datas guardado no URL. As cópias de segurança correm localmente todos os dias e para qualquer armazenamento compatível com S3, comprimidas e cifradas com AES-256-GCM antes de saírem da máquina.',
      result:
        'As seis fases estão no lugar: a estrutura e a base de dados, os automóveis e os clientes, as reservas com proteção contra sobreposições, a disponibilidade e o painel, as definições e as cópias de segurança, e um instalador por utilizador assinado com atualizações em segundo plano. O caminho de cópia para a nuvem está testado contra um servidor local que fala S3; ainda não correu contra uma conta real de um fornecedor.',
      outcomes: [
        'Funciona offline sobre uma base de dados SQLite local',
        'Reserva dupla bloqueada duas vezes: ao vivo no formulário e dentro da transação de escrita',
        'Linha de tempo de disponibilidade ao minuto, com a data em que cada automóvel fica livre',
        'Árabe, francês e inglês com uma disposição RTL a sério, mais tema claro e escuro',
        'Cópias locais diárias e cópias na nuvem cifradas compatíveis com S3, restauradas com um reinício protegido',
        'Instalador de Windows por utilizador com atualizações automáticas em segundo plano',
      ],
      images: [
        { alt: 'Painel do proprietário em francês: contadores da frota, próximas reservas, levantamentos e devoluções do dia e o estado da frota em direto', caption: 'O painel: frota, receita do mês e o que se move hoje' },
        { alt: 'Grelha da frota em francês com filtros por categoria e um selo de estado em cada automóvel', caption: 'A frota, filtrada por categoria, cada automóvel marcado como livre, alugado ou em manutenção' },
        { alt: 'O mesmo ecrã da frota em árabe, invertido da direita para a esquerda com a barra lateral à direita', caption: 'O mesmo ecrã em árabe, invertido da direita para a esquerda' },
        { alt: 'Ecrã de disponibilidade com períodos predefinidos e uma linha de tempo das reservas por automóvel ao longo de quatro dias', caption: 'Disponibilidade: períodos, linha de tempo por automóvel e quando cada um fica livre' },
        { alt: 'Janela de nova reserva com cliente, automóvel, datas e horas, uma confirmação verde de que o automóvel está livre e um total estimado', caption: 'O formulário de reserva: a verificação de conflitos corre à medida que as datas são escolhidas' },
        { alt: 'Página de detalhe de uma reserva com um percurso de estado em três passos, os cartões de cliente e automóvel, e as datas e o montante', caption: 'Uma reserva: percurso de estado, cliente, automóvel e montante' },
        { alt: 'O mesmo painel em modo escuro', caption: 'O mesmo painel em modo escuro' },
      ],
    },
    'onyxia-jewelry': {
      tag: 'Retalho · Web',
      title: 'Onyxia: loja de joalharia e balcão de encomendas',
      summary: 'Uma loja em árabe para uma marca de joalharia, com carrinho, pagamento, entrega por wilaya e uma área de gestão a partir da qual a loja trata das encomendas.',
      metric: 'Loja, gestão e preços de entrega',
      challenge: 'Vender joalharia online na Argélia implica resolver o que um carrinho alojado não cobre: entrega com preço por wilaya, encomendas confirmadas por telefone e uma equipa de loja que precisa de gerir stock e encomendas sem tocar em código.',
      approach: 'A loja é deliberadamente livre de dependências no frontend: HTML, CSS e JavaScript escritos à mão para que as páginas se mantenham rápidas em ligações móveis, com disposição em árabe da direita para a esquerda em todo o site. Por trás está um serviço em Express e MongoDB que cobre produtos, encomendas, cidades e idioma, com o carregamento de imagens tratado no servidor. A parte de gestão faz parte da mesma entrega: criação e edição de produtos, uma lista de encomendas e uma vista por encomenda que a loja usa para ir despachando o dia.',
      result: 'Um ciclo de venda completo que a própria loja opera, do cliente que percorre o catálogo à equipa que marca uma encomenda como entregue.',
      outcomes: [
        'Catálogo, fichas de produto, carrinho e pagamento em árabe',
        'Entrega tratada por cidade em vez de um preço único',
        'Gestão de produtos, imagens e estado das encomendas',
        'Entrada por sessão para a equipa da loja',
      ],
      images: [
        { alt: 'Página inicial da Onyxia com o logótipo da marca sobre um céu estrelado escuro', caption: 'A página inicial' },
      ],
    },
    'sotex': {
      tag: 'Retalho · Web',
      title: 'Sotex: uma loja, qualquer produto, todas as encomendas controladas',
      summary: 'Uma loja em árabe de um só produto que é relançada para o que houver para vender, de um kit de beleza ao isolamento de viaturas, com cada encomenda a aterrar numa área de gestão.',
      metric: 'A mesma loja, qualquer produto · 58 wilayas',
      challenge: 'Os pequenos vendedores na Argélia costumam empurrar um produto de cada vez e mudar quando chega o seguinte. Refazer uma loja para cada lançamento é lento, e as encomendas que chegam por mensagem ou e-mail perdem-se antes de alguém ligar de volta ao cliente.',
      approach: 'A loja é construída à volta de um produto de cada vez: uma galeria, um bloco de preço e um formulário de encomenda que convivem no desktop e se empilham no telemóvel. O produto, a sua regra de preço e a oferta de entrega mudam a cada lançamento, de modo que a mesma página já vendeu um kit de beleza a 5.900 DA com entrega gratuita e isolamento de viaturas a 750 DA o metro quadrado, a descer para 700 DA acima de dez, com entrega em escritório ou ao domicílio acrescentada à parte. O passo da morada cobre as 58 wilayas e as suas baladiyat, e o telefone é validado contra os formatos argelinos antes de a encomenda ser aceite. As encomendas são escritas no Firestore, e uma página de gestão separada, protegida por Firebase Auth, lista-as com as contagens de pendentes e concluídas e o total de vendas.',
      result: 'Uma loja que se pode apontar rapidamente a um produto novo, com cada encomenda guardada num só sítio em vez de dispersa por mensagens.',
      outcomes: [
        'Uma mesma loja reutilizada para produtos e regras de preço diferentes',
        'Preço fixo e preço por metro quadrado, com escalão por volume',
        'Seleção completa de wilaya e baladiya na morada',
        'Validação do número de telefone argelino ao submeter',
        'Área de gestão com estado das encomendas e total de vendas',
        'Disposição da direita para a esquerda pensada primeiro para telemóvel',
      ],
      images: [
        { alt: 'Primeiro lançamento: um kit de beleza a preço fixo com entrega gratuita', caption: 'Lançamento um: um kit de beleza a preço fixo, com entrega gratuita' },
        { alt: 'A mesma página a vender isolamento por metro quadrado', caption: 'Lançamento dois: a mesma página a vender isolamento por metro quadrado' },
        { alt: 'Encomenda de 12 m² que entra no escalão de 700 DA, com a entrega somada ao total', caption: 'Encomenda: 12 m² entram no escalão de 700 DA, com a entrega somada ao total' },
        { alt: 'Área de gestão com cada encomenda, o seu estado e os totais de venda', caption: 'Gestão: cada encomenda com o seu estado, e os totais de venda' },
        { alt: 'Ecrã de entrada na gestão, sobre Firebase Auth', caption: 'Entrada na gestão, sobre Firebase Auth' },
      ],
    },
    'gensior': {
      tag: 'Saúde · Web',
      title: 'Gensior: um site alemão de serviços farmacêuticos',
      summary: 'Um site em alemão para uma consultora farmacêutica especializada em gestão de águas medicinais, com catálogo de produtos e um percurso de pedido de informação.',
      metric: 'Catálogo e pedidos, sem servidor',
      challenge: 'Uma consultora regulada precisa de um site que resulte credível perante farmacêuticos e câmaras municipais, que apresente uma gama de produtos e recolha pedidos de informação, sem levantar um backend para manter.',
      approach: 'Construído como aplicação React de página única sobre Vite, com as páginas de serviços, o catálogo de produtos e o carrinho como componentes separados e o Framer Motion a tratar das transições. O percurso de contacto e encomenda passa por uma função da Netlify em vez de um servidor, de modo que o envio de e-mail tem onde guardar a sua chave de API e a publicação continua estática.',
      result: 'Um site que apresenta a consultora e os seus produtos em alemão e encaminha os pedidos para a equipa, publicado sem infraestrutura para operar.',
      outcomes: [
        'Secções de serviços, apresentação e produtos em alemão',
        'Catálogo de produtos com percurso de carrinho',
        'Pedidos tratados por uma função sem servidor',
        'Publicação estática, sem servidor para manter',
      ],
      images: [
        { alt: 'Início da Gensior: título de serviços farmacêuticos sobre uma imagem de água', caption: 'Início: posicionamento em gestão de águas medicinais' },
      ],
    },
    'focuslock': {
      tag: 'Produtividade · Desktop',
      title: 'Focus Lock: ganhe o seu tempo de jogo',
      summary: 'Uma aplicação de desktop para Windows que mantém bloqueados os jogos e as aplicações que escolher até as tarefas do dia estarem feitas, com XP e níveis por as concluir.',
      metric: 'Bloqueio condicionado a tarefas, com XP e níveis',
      challenge: 'Os bloqueadores que se limitam a proibir uma aplicação acabam desligados numa semana. O hábito só se mantém se o que está bloqueado for algo que se possa reconquistar.',
      approach: 'O Focus Lock inverte o bloqueador habitual: em vez de proibir os jogos, mantém-nos atrás da lista de tarefas e liberta-os quando o trabalho está feito. Cada tarefa tem uma prioridade e dá XP ao ser concluída, o que alimenta níveis e conquistas. É uma aplicação Electron com interface em React e TypeScript, estado em Zustand e SQLite para o armazenamento local duradouro, por isso nada sai da máquina.',
      result: 'Uma versão de Windows a funcionar, publicada sob licença MIT com guia de contribuição e código de conduta.',
      outcomes: [
        'Lista de tarefas com prioridades e acompanhamento da conclusão',
        'XP, níveis e conquistas ligados ao trabalho concluído',
        'Modo de foco que bloqueia as aplicações selecionadas',
        'Armazenamento local com SQLite, sem conta e sem sincronização',
        'Código aberto sob licença MIT',
      ],
      images: [
        { alt: 'Painel do Focus Lock com o nível, o progresso de XP, as tarefas concluídas e a lista de tarefas', caption: 'O painel: nível, XP e as tarefas do dia' },
      ],
    },
  },
};

export default pt;
