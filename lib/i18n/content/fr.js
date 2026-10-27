// French content overlay. Lists mirror the order of lib/content.js and carry
// only the translatable fields; case studies are keyed by slug. Structural
// data (slugs, stacks, images, links) lives once, in lib/content.js.

const fr = {
  services: [
    { title: 'Développement web', description: 'Applications full-stack et sites marketing conçus pour durer, des frontends React aux API sur Postgres.' },
    { title: 'Applications mobiles', description: 'Apps natives iOS/Android et cross-platform livrées sur les stores, pas juste une maquette Figma.' },
    { title: 'Logiciels desktop', description: 'Outils desktop multiplateformes pour les opérations internes, l’ingénierie et les environnements réglementés.' },
    { title: 'DevOps', description: 'CI/CD, orchestration de conteneurs et infrastructure-as-code, avec des déploiements mesurés en minutes.' },
    { title: 'Cybersécurité', description: 'Modélisation des menaces, durcissement et architecture sécurisée par défaut pour les équipes qui ne peuvent pas se permettre une faille.' },
    { title: 'IA / ML', description: 'ML appliqué : recommandation, prévision et workflows adossés aux LLM, mis en production.' },
    { title: 'Automatisation', description: 'Remplacez les opérations manuelles par des pipelines résilients : synchronisation de données, reporting, outillage interne.' },
    { title: 'Design UI/UX', description: 'Des interfaces conçues pour ceux qui les utiliseront au quotidien, pas seulement pour la démo.' },
    { title: 'Conseil projet', description: 'Due diligence technique, revue d’architecture et planification de feuille de route pour les équipes dirigeantes.' },
  ],

  process: [
    { title: 'Découvrir', description: 'Périmètre, contraintes et métriques de succès : un court audit technique, pas un deck commercial.' },
    { title: 'Architecturer', description: 'Conception du système, registre des risques et un plan de livraison que votre équipe peut relire ligne par ligne.' },
    { title: 'Construire', description: 'Livraison itérative par incréments hebdomadaires, visibles en environnement de staging dès la première semaine.' },
    { title: 'Livrer', description: 'Mise en production avec plan de rollback, monitoring, et un runbook que votre équipe conserve.' },
    { title: 'Accompagner', description: 'Astreinte et contrat de maintenance, ou une passation propre. À vous de choisir.' },
  ],

  values: [
    { title: 'Une seule équipe responsable', description: 'Pas de passage de relais entre inconnus. Les ingénieurs qui cadrent votre projet sont ceux qui le livrent.' },
    { title: 'Documenté par défaut', description: 'Décisions d’architecture, runbooks et contrats d’API sont écrits, pas du savoir tribal.' },
    { title: 'Conçu pour la passation', description: 'Chaque mission se termine avec votre équipe capable de faire tourner le système sans nous, que vous nous gardiez en maintenance ou non.' },
  ],

  team: [
    {
      role: 'Fondateur & responsable technique',
      bio: 'Hatem cadre et dirige chaque mission THODZ. Son parcours est en cryptographie et sécurité des systèmes, et il a été responsable technique sur des livraisons web, mobiles et de ML appliqué : les trois domaines où atterrissent la plupart des projets THODZ.',
      credentials: [
        'Master en cryptographie & sécurité de l’information',
        'Responsable technique sur des livraisons web, mobiles et ML appliqué',
        'Travaille en français, en anglais et en arabe',
      ],
    },
  ],

  engagements: [
    {
      name: 'Projet à prix fixe',
      placeholderPrice: 'À partir de 6 000 €',
      bestFor: 'Un système défini avec un périmètre connu : un produit à construire, une refonte, une migration.',
      billing: 'Par jalons. Un acompte pour démarrer, le solde réparti sur des jalons de livraison convenus.',
      includes: [
        'Audit de découverte et périmètre écrit',
        'Document d’architecture et registre des risques',
        'Incréments hebdomadaires en environnement de staging',
        'Runbook et passation à la livraison',
        '30 jours de correction de bugs après lancement',
      ],
    },
    {
      name: 'Forfait mensuel',
      placeholderPrice: 'À partir de 2 500 € / mois',
      bestFor: 'Du travail produit continu où le périmètre évolue : une feuille de route plutôt qu’un livrable unique.',
      billing: 'Un forfait mensuel fixe pour une capacité convenue. Résiliable avec 30 jours de préavis.',
      includes: [
        'Capacité d’ingénierie convenue chaque mois',
        'Planification et priorisation de la feuille de route',
        'Livraison continue vers vos environnements',
        'Canal direct avec les ingénieurs qui construisent',
        'Synthèse d’avancement écrite chaque mois',
      ],
    },
    {
      name: 'Support & opérations',
      placeholderPrice: 'À partir de 600 € / mois',
      bestFor: 'Un système déjà en production, le vôtre ou le nôtre, maintenu à jour, surveillé et en vie.',
      billing: 'Un forfait mensuel fixe par niveau de réponse. Aucun engagement au-delà des trois premiers mois.',
      includes: [
        'Monitoring, alertes et mise à jour des dépendances',
        'Fenêtre de réponse convenue pour les incidents',
        'Petites évolutions et correctifs dans une enveloppe mensuelle',
        'Revue trimestrielle sécurité et dépendances',
        'Escalade vers l’équipe qui a construit le système',
      ],
    },
    {
      name: 'Conseil & audit',
      placeholderPrice: 'À partir de 1 200 €',
      bestFor: 'Vous avez besoin d’une décision, pas d’un développement : revue d’architecture, due diligence technique, second avis.',
      billing: 'Forfait pour une mission définie, ou tarif journalier pour un accompagnement continu.',
      includes: [
        'Revue du code et de l’architecture',
        'Évaluation sécurité et infrastructure',
        'Conclusions écrites avec remédiation priorisée',
        'Session de restitution avec votre équipe ou votre direction',
      ],
    },
  ],

  faq: [
    {
      q: 'Qui possède le code que vous écrivez ?',
      a: 'Vous. Au paiement final, l’ensemble du code source, des designs et de la documentation produits pour votre projet vous est transféré intégralement, historique du dépôt compris. Nous ne conservons aucune licence sur votre produit et nous ne réutilisons pas votre code dans le système d’un autre client. Quand un projet utilise des composants open source, leurs licences propres continuent de s’appliquer, et nous les listons toutes dans la documentation de passation.',
    },
    {
      q: 'Comment fonctionne la facturation ?',
      a: 'Les projets à prix fixe sont facturés par jalons de livraison : un acompte pour démarrer, puis le solde libéré à l’acceptation de chaque jalon. Les forfaits et contrats de support sont facturés mensuellement d’avance. Les factures sont payables en EUR, USD ou DZD par virement bancaire. Chaque facture indique exactement ce qu’elle couvre.',
    },
    {
      q: 'Que couvre le contrat ?',
      a: 'Un accord écrit avant tout démarrage, couvrant le périmètre, les jalons, les conditions de paiement, le transfert de propriété intellectuelle, la confidentialité, et la façon dont chaque partie peut mettre fin à la mission. Les demandes de changement sont chiffrées et validées par écrit avant d’être construites : le périmètre ne s’étend jamais discrètement dans votre facture.',
    },
    {
      q: 'Signez-vous des NDA ?',
      a: 'Oui, et nous signons le vôtre plutôt que d’imposer le nôtre. Cochez la case NDA sur le formulaire de contact et nous nous en occupons avant que vous ne nous envoyiez quoi que ce soit de sensible. Chaque mission est couverte par une confidentialité mutuelle, qu’un NDA distinct soit signé ou non.',
    },
    {
      q: 'Que se passe-t-il après le lancement ?',
      a: 'Chaque projet est livré avec un runbook, un document d’architecture et une session de passation, pour que votre équipe puisse opérer le système sans nous. Les projets à prix fixe incluent 30 jours de correction de bugs après lancement. Ensuite, vous pouvez passer sur un contrat de support ou tout internaliser : les deux sont des fins normales, et nous ne prenons pas votre infrastructure en otage pour vous garder.',
    },
    {
      q: 'En combien de temps répondez-vous ?',
      a: 'Sous un jour ouvré après votre premier message, par un ingénieur plutôt qu’une équipe commerciale. Ensuite, un premier appel de cadrage a généralement lieu la même semaine.',
    },
    {
      q: 'Où êtes-vous basés, et quels fuseaux horaires couvrez-vous ?',
      a: 'Nous sommes basés en Algérie (UTC+1) et travaillons à distance avec des clients en Europe, au Moyen-Orient et en Amérique du Nord. Nos horaires couvrent toute la journée ouvrée européenne et la majeure partie de la matinée de la côte Est américaine.',
    },
    {
      q: 'Dans quelles langues travaillez-vous ?',
      a: 'Français, anglais et arabe. Cela couvre les réunions, la documentation écrite et le produit lui-même : nous construisons des interfaces multilingues, y compris des mises en page de droite à gauche pour l’arabe, comme une partie normale de la livraison, pas comme un supplément.',
    },
  ],

  disciplines: ['Web', 'Mobile', 'Desktop', 'DevOps', 'Cybersécurité', 'IA / ML', 'Automatisation', 'UI/UX', 'Conseil'],

  problems: [
    {
      title: 'Je veux vendre ou prendre des réservations en ligne',
      build: 'Une boutique ou une plateforme de réservation avec paiement en ligne et à la livraison, devis de livraison, et une administration que votre équipe pilote seule.',
      gets: ['Catalogue, panier et paiement', 'Admin pour commandes, stock et prix', 'Hébergement, sauvegardes et supervision'],
      first: 'Un appel de 30 min, puis un périmètre écrit dès la première semaine.',
      refLabel: 'SADJIA CERAM : catalogue + estimateur de prix en direct',
    },
    {
      title: 'Nos opérations tournent encore sur des tableurs et des appels',
      build: 'Un seul outil interne pour ce que vous suivez à la main aujourd’hui (commandes, expéditions, factures, personnel), avec le reporting intégré.',
      gets: ['Application desktop ou web, à votre choix', 'Facturation et reporting au même endroit', 'Des rôles pour que chacun voie sa partie'],
      first: 'Nous observons le fonctionnement actuel de votre équipe et le cartographions.',
      refLabel: 'Tableau de bord distribution : desktop + web, un seul codebase',
    },
    {
      title: 'Nous avons une idée d’application et il faut la livrer',
      build: 'Votre produit mené de l’idée à l’App Store et Google Play : iOS, Android et web depuis un seul codebase.',
      gets: ['Design cliquable avant le code', 'Builds hebdomadaires installables', 'Publication sur les stores prise en charge'],
      first: 'Une session de cadrage pour réduire la version un à l’essentiel.',
      refLabel: 'Little Hafiz : application Flutter, fonctionne hors ligne',
    },
    {
      title: 'Notre système actuel est lent, fragile ou vulnérable',
      build: 'Un audit, puis une décision écrite : réparer l’existant ou le reconstruire, suivie de durcissement, CI/CD et supervision.',
      gets: ['Audit de sécurité et de performance', 'Liste de correctifs priorisée et chiffrée', 'Déploiements automatisés et alertes'],
      first: 'Un accès en lecture seule et un court rapport d’audit.',
      refLabel: null,
    },
    {
      title: 'Nous voulons utiliser l’IA là où elle aide vraiment',
      build: 'De l’IA intégrée à un workflow réel, avec une étape de validation humaine : rédaction, classification, prévision ou recommandation.',
      gets: ['Un workflow, mesuré avant et après', 'Revue humaine là où ça compte', 'Vos données restent sous votre contrôle'],
      first: 'Choisir un workflow et définir ce que « mieux » veut dire.',
      refLabel: 'Plateforme de suivi chronique : l’IA rédige, les médecins valident',
    },
    {
      title: 'Nous avons besoin d’un second avis technique',
      build: 'Une revue indépendante d’une architecture, d’une proposition fournisseur ou d’un code source, par écrit et en langage clair.',
      gets: ['Revue d’architecture et de code', 'Risques classés par impact', 'Une feuille de route exploitable par votre équipe'],
      first: 'Partagez ce que vous avez ; nous confirmons périmètre et prix.',
      refLabel: null,
    },
  ],

  timeline: [
    { title: 'Vous parlez à un ingénieur, pas à un commercial.', text: 'La personne qui lit votre message est celle qui maîtrise la technique. Elle vous appelle pour comprendre votre activité et vos besoins.' },
    { title: 'Un plan clair, par écrit.', text: 'Nous étudions votre projet et mettons tout par écrit : ce que nous allons construire, ce qui pourrait mal tourner, et comment nous mesurerons la réussite. Pas de promesses floues.' },
    { title: 'Un prix fixe, unique.', text: 'Vous recevez le plan complet et un prix fixe. Rien ne commence avant votre accord.' },
    { title: 'Essayez-le vous-même pendant la construction.', text: 'Très tôt, vous recevez une version privée de votre produit que vous pouvez ouvrir et utiliser. Elle est mise à jour régulièrement, pour que vous donniez votre avis tant que les changements sont encore simples et peu coûteux.' },
    { title: 'Une mise en ligne sans risque.', text: 'Nous le lançons pour vos clients et le surveillons de près. En cas de problème, nous pouvons revenir à la version précédente en quelques minutes, avant même que vos clients ne s’en aperçoivent. Vous recevez aussi un guide simple pour le faire tourner.' },
    { title: 'Corrections de bugs incluses, puis à vous de choisir.', text: 'Tout bug après la mise en ligne est corrigé dans le cadre du projet, pendant la période de support incluse. Ensuite, gardez-nous pour le support, ou reprenez entièrement la main avec tout ce qu’il faut entre vos mains.' },
  ],

  // Package names, versions and links stay in English (lib/content.js).
  openSource: [
    { tagline: 'Votre client paie une fois. Jamais deux.', description: 'Un client appuie sur « Payer » au moment où sa connexion coupe. Le paiement est-il passé ? La plupart des applications devinent, et deviner, c’est des doubles débits, des appels mécontents et des remboursements. La nôtre vérifie auprès de votre système et obtient la vraie réponse, à chaque fois. Votre argent et votre réputation restent protégés, même avec le signal le plus faible.' },
    { tagline: 'Des données en direct, sans latence.', description: 'Les prix changent, les stocks s’épuisent, les commandes évoluent. La plupart des applications affichent des informations périmées, ou se rechargent si souvent qu’elles vident la batterie et deviennent lentes. La nôtre met tout à jour au bon moment, en un seul rafraîchissement fluide. Vos clients voient toujours la réalité, et l’application reste rapide.' },
    { tagline: 'Vos messages arrivent vraiment.', description: 'Vous dépensez de l’argent pour faire revenir vos clients avec des promotions, des rappels et des suivis de commande. Mais sur les Android récents et les iPhone, beaucoup d’applications perdent silencieusement l’autorisation d’envoyer des notifications, et ces messages n’arrivent jamais. La nôtre gère chaque cas correctement, pour que chaque message que vous payez atteigne une vraie personne.' },
  ],

  caseStudies: {
    'sadjia-ceram': {
      before: 'Les clients appelaient la boutique pour obtenir un prix, carreau par carreau et projet par projet.',
      after: 'Ils parcourent le catalogue et obtiennent seuls une estimation en DZD en temps réel pour leur pièce.',
      tag: 'Retail · Web',
      title: 'SADJIA CERAM : showroom digital',
      client: 'SADJIA CERAM, Es Senia, Oran',
      summary: 'Un catalogue produit digital et un estimateur de prix en temps réel pour un détaillant de carrelage à Oran, remplaçant les devis par téléphone par une consultation et un chiffrage en libre-service.',
      metric: 'Catalogue + estimateur + admin, en un seul développement',
      challenge: 'SADJIA CERAM vend du carrelage haut de gamme pour sols et murs depuis un showroom à Es Senia, Oran. Chaque demande passait par le même goulot d’étranglement : un client voyait un carreau quelque part, appelait le showroom, le décrivait, et attendait qu’on lui calcule le prix d’une pièce entière. Rien du catalogue ni des prix n’existait à un endroit accessible au client, si bien que l’équipe passait ses journées à chiffrer par téléphone au lieu de vendre, et que les clients arrivaient sans aucune idée de budget.',
      approach: 'Nous avons fait du showroom un produit que les clients utilisent avant d’appeler. Le catalogue se filtre par collection, dimension et type de carreau, pour passer de la liste complète aux quatre références qui comptent. Chaque fiche produit affiche les vraies dimensions et le vrai prix au mètre carré. L’estimateur vient par-dessus : saisissez une surface, ajoutez plusieurs carreaux à un projet, et il renvoie un total formaté en dinars algériens, calculé avec les mêmes règles de prix que le showroom applique à la main. Derrière, un tableau de bord d’administration permet à l’équipe d’ajouter des produits, de téléverser des visuels, et de modifier dimensions et prix sans toucher au code ni nous attendre. WhatsApp, Instagram et la fiche Google Maps du showroom sont reliés à chaque page, parce que sur ce marché la demande finit sur WhatsApp, qu’on l’ait prévu ou non.',
      result: 'Le showroom dispose désormais d’un catalogue en ligne et d’un outil de chiffrage que les clients utilisent avant même de décrocher le téléphone, et d’un tableau de bord que l’équipe opère au quotidien. Un changement de prix prend une minute à une personne, au lieu d’un appel à un développeur.',
      outcomes: [
        'Catalogue en libre-service filtrable par dimension, type et collection',
        'Estimateur de projet en temps réel au m², formaté en DZD',
        'Tableau de bord admin pour produits, visuels, dimensions et prix',
        'WhatsApp, réseaux sociaux et Maps vers le showroom sur chaque page',
        'Responsive sur mobile, tablette et desktop',
      ],
      images: [
        { alt: 'Page d’accueil SADJIA CERAM : hero, collections et produits phares avec prix au mètre carré', caption: 'Accueil : collections et produits phares, prix au m²' },
        { alt: 'Catalogue produit filtré par dimension et type de carreau', caption: 'Filtrage du catalogue par dimension et type' },
        { alt: 'Fiche produit d’un carreau avec dimensions et prix', caption: 'Fiche produit avec dimensions et prix' },
        { alt: 'Tableau de bord admin pour gérer produits, dimensions et prix', caption: 'Le tableau de bord que l’équipe du showroom opère au quotidien' },
      ],
    },

    'logistics-dashboard': {
      before: 'Transport et distribution suivis entre des outils séparés et des tableurs.',
      after: 'Une application native, plus une version web issue du même codebase, suit l’ensemble.',
      tag: 'Logistique · Desktop',
      title: 'Tableau de bord de gestion logistique et distribution',
      summary: 'Un tableau de bord desktop et web pour suivre les opérations de transport et de distribution, packagé en application native avec un déploiement web sur Supabase.',
      metric: 'Desktop + web depuis un seul codebase',
      challenge: 'Une activité de transport et de distribution avait besoin d’un système unique pour suivre la flotte, les livraisons et le volet financier, déployable à la fois comme outil desktop installé et comme application web hébergée.',
      approach: 'Nous avons construit le tableau de bord une seule fois en Vite et TypeScript et l’avons livré sous deux formes : un build desktop Electron pour l’usage local/hors ligne, et un déploiement web adossé à Supabase, avec le même codebase et la même couche de données.',
      result: 'Un tableau de bord unique couvrant les opérations de distribution et les finances, packagé pour l’installation desktop comme pour l’accès web.',
      outcomes: [
        'Un codebase TypeScript, deux cibles de livraison',
        'Build Electron pour un usage installé, local d’abord',
        'Déploiement web sur Supabase partageant la même couche de données',
      ],
    },

    'ability-beyond-disability': {
      before: 'Des personnes talentueuses en situation de handicap n’avaient aucune vitrine commune en Algérie.',
      after: 'Une page bilingue arabe / anglais présentant leurs talents et réalisations à l’échelle nationale.',
      tag: 'Impact social · Web',
      title: 'Ability Beyond Disability',
      client: 'رغم إعاقتي أبدع : vitrine nationale des talents, Algérie',
      summary: 'Une landing page bilingue (arabe/anglais) mettant en valeur les talents et réalisations de personnes en situation de handicap à travers l’Algérie.',
      metric: 'Vitrine nationale des talents',
      challenge: 'Les personnes en situation de handicap à travers l’Algérie avaient besoin d’une plateforme publique pour présenter leur travail créatif et professionnel : une vitrine soignée, pas une page caritative.',
      approach: 'Nous avons conçu un site statique accessible et visuellement engageant : une galerie de talents avec spécialité et localisation pour chaque personne, des statistiques nationales sur les talents inscrits et les wilayas représentées, une section événements pour les ateliers et expositions, et une inscription à la newsletter. Construit pour charger vite sans dépendance backend, et rédigé en arabe et en anglais pour parler nativement à son audience.',
      result: 'Un site vitrine en ligne et accessible, mettant en lumière des talents de toutes les wilayas d’Algérie.',
      outcomes: [
        'Galerie de talents avec spécialité, localisation et tags par personne',
        'Statistiques nationales : talents inscrits, wilayas, œuvres, événements',
        'Section événements pour ateliers, expositions et concours',
        'Bilingue arabe/anglais, sans dépendance backend',
      ],
    },

    'little-hafiz': {
      before: 'La mémorisation dépendait de la présence d’un enseignant ou d’un exemplaire imprimé.',
      after: 'Écoute verset par verset et suivi de progression sur n’importe quel téléphone, même hors ligne.',
      tag: 'EdTech · Mobile',
      title: 'Little Hafiz : application de mémorisation du Coran',
      summary: 'Une application Flutter de mémorisation du Coran pour enfants et adultes, avec écoute verset par verset, suivi de progression, et un build web installable utilisable hors ligne.',
      metric: 'Web, iOS & Android depuis un seul codebase',
      challenge: 'Les applications de mémorisation du Coran sont courantes, mais rares sont celles pensées spécifiquement pour les enfants, avec une progression que les parents peuvent réellement suivre.',
      approach: 'Nous avons construit un seul codebase Flutter couvrant l’écoute verset par verset, plusieurs méthodes de mémorisation et le suivi de progression, livré comme Progressive Web App installable et utilisable hors ligne, avec des builds mobiles issus de la même source.',
      result: 'Une application de mémorisation multiplateforme installable directement depuis le navigateur, sans passage obligé par les app stores.',
      outcomes: [
        'Écoute verset par verset avec navigation par sourate',
        'Plusieurs méthodes de mémorisation et suivi de progression',
        'PWA installable et hors ligne, plus builds iOS et Android',
      ],
    },

    sahafood: {
      tag: 'Foodtech · Mobile',
      title: 'SahaFood : application de livraison de repas',
      summary: 'Une application Flutter de livraison de repas couvrant le parcours de commande côté client. Actuellement en développement actif.',
      metric: 'En développement actif',
      challenge: 'Sur le marché visé, la livraison de repas passe par les commandes téléphoniques et des applications tierces qui prélèvent une commission sur chaque vente. SahaFood avait besoin de son propre canal de commande.',
      approach: 'Nous construisons d’abord l’application Flutter côté client : navigation, commande, paiement, avec les systèmes marchands et livreurs à suivre.',
      result: 'L’application de commande est en développement actif. Cette fiche sera mise à jour au fil des livraisons.',
      outcomes: [
        'Parcours client : navigation, commande et paiement',
        'Systèmes marchands et livraison à suivre',
      ],
    },

    'id-verification-pipeline': {
      tag: 'Vision par ordinateur · IA/ML',
      title: 'Pipeline de détection et segmentation de cartes d’identité',
      summary: 'Un pipeline de vision par ordinateur qui détecte, segmente et corrige la perspective des cartes d’identité algériennes depuis la caméra d’un téléphone, produisant un recadrage prêt pour l’OCR.',
      metric: 'De l’image caméra au recadrage prêt pour l’OCR, sur l’appareil',
      challenge: 'Lire une carte d’identité de façon fiable depuis une photo de téléphone suppose de gérer la rotation, le cadrage partiel et l’éclairage inconstant avant même que l’OCR ne s’exécute.',
      approach: 'Nous avons entraîné un modèle de segmentation YOLOv8 sur le dataset MIDV-500 pour localiser et masquer la carte, associé à un détecteur léger à boîtes orientées pour le cadrage mobile, en exportant les deux vers ONNX et TFLite pour l’inférence sur l’appareil.',
      result: 'Un pipeline caméra-vers-recadrage (détection, segmentation, correction de perspective) prêt à alimenter n’importe quel moteur OCR, exécuté sur l’appareil mobile.',
      outcomes: [
        'Segmentation YOLOv8 entraînée sur le dataset MIDV-500',
        'Détecteur à boîtes orientées pour le cadrage mobile en direct',
        'Exports ONNX et TFLite pour l’inférence sur l’appareil',
        'Recadrage corrigé en perspective, prêt pour l’OCR',
      ],
      images: [
        { alt: 'Pipeline en trois étapes sur une carte spécimen : la carte détectée dans l’image de la caméra du téléphone, segmentée avec ses quatre coins, puis redressée en un recadrage plat prêt pour l’OCR', caption: 'Détecter, segmenter, redresser : de l’image caméra au recadrage prêt pour l’OCR' },
      ],
    },

    tradevirtual: {
      tag: 'Fintech · Web',
      title: 'TradeVirtual : plateforme de paper trading crypto',
      summary: 'Une plateforme gamifiée pour s’entraîner au trading de cryptomonnaies avec des fonds simulés : prix en direct, XP et classements, sans argent réel en jeu.',
      metric: '6 actifs suivis · prix en direct',
      challenge: 'Les nouveaux traders veulent ressentir ce qu’est vraiment le trading crypto sans risquer d’argent réel, et la plupart des outils de paper trading ressemblent à des tableurs, pas à des produits.',
      approach: 'Nous avons construit un simulateur de trading complet sur Next.js et Prisma : des prix en direct tirés de Binance toutes les cinq secondes sur BTC, ETH, BNB, SOL, ADA et DOGE, un vrai flux d’achat/vente avec historique complet des transactions, et une couche de gamification (XP par trade, niveaux, classement mondial et échange XP-contre-solde) pour maintenir l’engagement. La connexion passe par l’authentification Telegram plutôt qu’un mot de passe de plus à oublier.',
      result: 'Une plateforme de trading simulé en direct avec prix en temps réel et classement compétitif, pas une simple démo statique.',
      outcomes: [
        'Prix en direct sur six actifs, rafraîchis toutes les cinq secondes depuis Binance',
        'Flux d’achat/vente complet avec portefeuille et historique des transactions',
        'XP, niveaux, classement mondial et échange XP-contre-solde',
        'Authentification Telegram plutôt qu’un mot de passe de plus',
      ],
    },

    'thodz-builder': {
      before: 'Un site portfolio professionnel supposait d’embaucher un développeur.',
      after: 'On choisit un modèle, on glisse des blocs, on publie, sans écrire de code.',
      tag: 'SaaS · Web',
      title: 'THODZ Builder : créateur de portfolios no-code',
      client: 'THODZ SOLUTIONS (produit interne)',
      summary: 'Un créateur de sites en glisser-déposer qui permet à chacun d’assembler un portfolio professionnel à partir de templates personnalisables, sans écrire de code.',
      metric: '5 templates · éditeur en glisser-déposer',
      challenge: 'Les freelances qui ont besoin d’un site portfolio veulent rarement le coder à la main, et souvent ne le peuvent pas. Les outils qui leur sont destinés se partagent en deux moitiés décevantes : des builders si génériques que tous les résultats se ressemblent, et des builders si verrouillés que la première chose qu’on veut changer est celle qu’on ne peut pas. Nous voulions l’entre-deux : de vrais templates réellement modifiables, sans jamais plonger personne dans un éditeur de code.',
      approach: 'Nous avons construit l’éditeur autour de la manipulation directe. Les sections se réordonnent par glisser-déposer (@dnd-kit), et chaque élément s’édite sur place : cliquez sur le texte et tapez, cliquez sur l’image et remplacez-la, ouvrez le panneau de style et changez couleurs, polices et espacements. Cinq templates avec de vrais partis pris plutôt que des variations de couleur d’une même mise en page : Modern Minimal, Creative Bold, Developer Tech, Designer Elegant et Business Professional, et le passage de l’un à l’autre conserve votre contenu. Tout s’enregistre automatiquement. Comptes, persistance et stockage des assets tournent sur Supabase avec Prisma sur Postgres, pour qu’un site à moitié fini soit encore là demain.',
      result: 'Un builder no-code fonctionnel couvrant de bout en bout le choix de template, l’édition en glisser-déposer, la personnalisation du style, et de l’inscription à la gestion de compte.',
      outcomes: [
        'Réordonnancement de sections en glisser-déposer sur @dnd-kit',
        'Cinq templates distincts, interchangeables sans perdre le contenu',
        'Édition sur place du texte, des images, couleurs, polices et espacements',
        'Ajout, suppression, réordonnancement et masquage de sections',
        'Enregistrement automatique avec comptes Supabase sur Prisma + Postgres',
      ],
      images: [
        { alt: 'Éditeur THODZ Builder montrant le template Developer Tech avec le panneau de style ouvert', caption: 'Éditeur : le template Developer Tech avec le panneau de style ouvert' },
        { alt: 'Écran de sélection montrant les cinq templates disponibles', caption: 'Sélection de template : cinq points de départ distincts' },
        { alt: 'Écran d’inscription du système de comptes du builder', caption: 'Inscription et création de compte' },
      ],
    },

    'chronic-disease-monitoring': {
      before: 'Les mesures des patients et les consignes de suivi vivaient dans des notes éparpillées.',
      after: 'Les patients saisissent leurs mesures ; l’IA rédige des consignes qu’un médecin relit avant envoi.',
      tag: 'Healthtech · Web',
      title: 'Plateforme de suivi des maladies chroniques',
      summary: 'Une application web à rôles où les patients enregistrent leurs mesures de santé et reçoivent des recommandations rédigées par IA puis validées par un médecin.',
      metric: 'Rôles patient + médecin · sortie validée par un médecin',
      challenge: 'Les patients qui gèrent une maladie chronique ont besoin d’un moyen simple d’enregistrer leurs mesures et de recevoir des recommandations en retour. Un modèle d’IA peut rédiger ces recommandations en quelques secondes, et c’est précisément le problème : des suggestions médicales non relues livrées directement à un patient sont un risque, pas une fonctionnalité. Le système devait être assez utile pour que les patients continuent d’enregistrer, et assez sûr pour que rien ne leur parvienne sans qu’un clinicien l’ait lu.',
      approach: 'Nous avons intégré l’étape de validation clinique dans le modèle de données plutôt que de l’ajouter après coup. Les patients soumettent leurs mesures, issues de capteurs médicaux, via un parcours mobile-first et consultent tout leur historique. Chaque soumission génère un rapport rédigé par IA côté backend uniquement, jamais dans le navigateur, et ce brouillon atterrit dans la file d’un médecin, pas dans la boîte du patient. Le compte médecin relit, modifie et approuve chaque rapport et chaque prescription avant que le patient ne voie quoi que ce soit ; un brouillon non validé n’a aucun chemin vers le patient. L’authentification tourne sur Firebase avec vérification d’e-mail par OTP et connexion Google, sur une Realtime Database qui garde les deux historiques synchronisés.',
      result: 'Une boucle de suivi patient/médecin opérationnelle (soumission, rédaction par IA, validation clinique, publication) avec un historique complet des deux côtés et aucune voie pour qu’une sortie non validée atteigne un patient.',
      outcomes: [
        'Deux rôles dans un système : soumission patient, validation médecin',
        'Rédaction par IA confinée au backend, derrière l’approbation clinique',
        'Chaque rapport et prescription modifié et approuvé par un médecin avant publication',
        'Historique complet des mesures et traitements pour les deux rôles',
        'Firebase Auth avec vérification OTP par e-mail et connexion Google',
        'Mobile-first et responsive sur tous les écrans',
      ],
      images: [
        { alt: 'Tableau de bord patient affichant les mesures de santé enregistrées et l’historique', caption: 'Tableau de bord patient : mesures et historique' },
        { alt: 'Formulaire de nouveau bilan où un patient soumet ses mesures de santé', caption: 'Soumission d’une nouvelle série de mesures' },
        { alt: 'Écran de validation médecin pour modifier et approuver un rapport rédigé par IA', caption: 'Validation médecin : chaque brouillon est relu et approuvé avant publication' },
      ],
    },

    'onyxia-jewelry': {
      tag: 'Commerce · Web',
      title: 'Onyxia : boutique de bijoux et poste de commandes',
      summary: 'Une boutique arabophone pour une marque de bijoux, avec panier, paiement, livraison par wilaya et une administration depuis laquelle l’équipe traite les commandes.',
      metric: 'Boutique + admin + tarifs de livraison',
      challenge: 'Vendre des bijoux en ligne en Algérie suppose de gérer ce qu’un panier hébergé ne couvre pas : une livraison tarifée par wilaya, des commandes confirmées par téléphone, et une équipe qui doit gérer stock et commandes sans toucher au code.',
      approach: 'La vitrine est volontairement sans dépendances côté client : HTML, CSS et JavaScript écrits à la main pour rester rapides sur connexion mobile, avec une mise en page de droite à gauche. Derrière, un service Express et MongoDB couvre produits, commandes, villes et langue, l’upload d’images étant traité côté serveur. L’administration fait partie du même build : création et édition de produits, liste des commandes, et une vue par commande que la boutique utilise au quotidien.',
      result: 'Une boucle de vente complète que la boutique opère seule, du client qui parcourt le catalogue à l’équipe qui marque une commande comme livrée.',
      outcomes: [
        'Catalogue, fiches produit, panier et paiement en arabe',
        'Livraison gérée par ville plutôt qu’à tarif unique',
        'Admin pour les produits, les images et le statut des commandes',
        'Connexion par session pour l’équipe de la boutique',
      ],
      images: [
        { alt: 'Page d’accueil Onyxia avec le logo de la marque sur un ciel étoilé sombre', caption: 'La page d’accueil' },
      ],
    },
    'sotex': {
      tag: 'Commerce · Web',
      title: 'Sotex : une boutique, n’importe quel produit, chaque commande suivie',
      summary: 'Une boutique arabophone mono-produit relancée pour ce qui est en vente, d’un coffret beauté à l’isolation de véhicules, avec chaque commande dans un tableau de bord.',
      metric: 'Même boutique, tout produit · 58 wilayas',
      challenge: 'Beaucoup de petits vendeurs en Algérie poussent un produit à la fois et passent au suivant à l’arrivage. Refaire une boutique à chaque lancement prend du temps, et les commandes reçues par message ou e-mail se perdent avant que quelqu’un rappelle le client.',
      approach: 'La boutique est pensée pour un produit à la fois : une galerie, un bloc prix et un formulaire de commande côte à côte sur ordinateur, empilés sur mobile. Le produit, sa règle de prix et l’offre de livraison changent à chaque lancement : la même page a vendu un coffret beauté à 5 900 DA avec livraison offerte, et une isolation de véhicule à 750 DA le mètre carré, 700 DA au-delà de dix, livraison au bureau ou à domicile en plus. L’étape adresse couvre les 58 wilayas et leurs baladiyat, et le téléphone est validé au format algérien avant d’accepter la commande. Les commandes sont enregistrées dans Firestore, et une page d’administration protégée par Firebase Auth les liste avec les commandes en attente, terminées et le total des ventes.',
      result: 'Une boutique qu’on peut orienter vers un nouveau produit rapidement, avec toutes les commandes au même endroit plutôt qu’éparpillées dans les messages.',
      outcomes: [
        'Une seule boutique réutilisée pour des produits et des prix différents',
        'Prix fixe ou au mètre carré, avec palier de volume',
        'Sélection complète wilaya et baladiya',
        'Validation du numéro de téléphone algérien',
        'Tableau de bord avec statut des commandes et total des ventes',
        'Mise en page mobile-first de droite à gauche',
      ],
      images: [
        { alt: 'Boutique Sotex configurée pour un coffret beauté et soin à 5 900 DA avec livraison offerte partout en Algérie', caption: 'Premier lancement : un coffret beauté à prix fixe, livré gratuitement' },
        { alt: 'La même boutique Sotex configurée pour l’isolation de véhicules à 750 DA le mètre carré, livraison au bureau ou à domicile', caption: 'Deuxième lancement : la même page vend de l’isolation au mètre carré' },
        { alt: 'Formulaire de commande Sotex rempli : téléphone validé, wilaya et baladiya choisies, récapitulatif calculé', caption: 'Commande : 12 m² passent au palier de 700 DA, livraison ajoutée au total' },
        { alt: 'Tableau de bord Sotex avec totaux des commandes, en attente, terminées et ventes au-dessus de la liste des commandes', caption: 'Admin : chaque commande avec son statut, et le total des ventes' },
        { alt: 'Écran de connexion à l’administration Sotex', caption: 'Connexion admin via Firebase Auth' },
      ],
    },
    'gensior': {
      tag: 'Santé · Web',
      title: 'Gensior : un site de services pharmaceutiques en allemand',
      summary: 'Un site germanophone pour un cabinet de conseil pharmaceutique spécialisé dans la gestion des eaux thermales, avec catalogue produits et prise de contact.',
      metric: 'Catalogue + contact, sans serveur',
      challenge: 'Un cabinet réglementé a besoin d’un site crédible auprès des pharmaciens et des communes, qui présente une gamme et recueille les demandes, sans monter un backend à maintenir.',
      approach: 'Construit en React sur Vite, avec les pages de services, le catalogue et le panier en composants distincts et Framer Motion pour les transitions. Le parcours de contact et de commande passe par une fonction Netlify plutôt qu’un serveur, ce qui donne un endroit où garder la clé d’API d’envoi tout en gardant un déploiement statique.',
      result: 'Un site qui présente le cabinet et ses produits en allemand et achemine les demandes vers l’équipe, déployé sans infrastructure à exploiter.',
      outcomes: [
        'Sections services, à propos et produits en allemand',
        'Catalogue produits avec parcours panier',
        'Demandes traitées par une fonction serverless',
        'Déploiement statique, aucun serveur à maintenir',
      ],
      images: [
        { alt: 'Page d’accueil Gensior : accroche services pharmaceutiques sur une image d’eau', caption: 'Accueil : positionnement sur la gestion des eaux thermales' },
      ],
    },
    'focuslock': {
      tag: 'Productivité · Desktop',
      title: 'Focus Lock : méritez votre temps de jeu',
      summary: 'Une application Windows qui garde les jeux et les applications choisies verrouillés tant que les tâches du jour ne sont pas faites, avec XP et niveaux à la clé.',
      metric: 'Verrouillage par tâches, XP et niveaux',
      challenge: 'Les bloqueurs qui se contentent d’interdire une application sont désactivés en une semaine. Le comportement ne tient que si ce qui est bloqué peut être regagné.',
      approach: 'Focus Lock inverse le bloqueur habituel : au lieu d’interdire les jeux, il les garde derrière la liste de tâches et les libère une fois le travail fait. Chaque tâche porte une priorité et rapporte de l’XP, qui alimente niveaux et succès. C’est une application Electron avec un rendu React et TypeScript, l’état en Zustand et SQLite pour le stockage local durable : rien ne quitte la machine.',
      result: 'Un build Windows fonctionnel, publié sous licence MIT avec guide de contribution et code de conduite.',
      outcomes: [
        'Liste de tâches avec priorités et suivi d’achèvement',
        'XP, niveaux et succès liés au travail terminé',
        'Mode Focus qui verrouille les applications choisies',
        'Stockage local SQLite, sans compte ni synchronisation',
        'Open source sous licence MIT',
      ],
      images: [
        { alt: 'Tableau de bord Focus Lock : niveau, progression XP, tâches terminées et liste de tâches', caption: 'Le tableau de bord : niveau, XP et les tâches du jour' },
      ],
    },

    'giftili': {
      tag: 'Design produit · Web',
      title: 'Giftili : envoyer un cadeau au pays',
      summary: 'Un design produit de 25 écrans pour un service de cadeaux à destination de la diaspora : choisir un cadeau depuis l’étranger, composer la carte qui l’accompagne, et le faire livrer en main propre en Algérie.',
      metric: '13 écrans client · 12 écrans admin',
      challenge: 'Quelqu’un à Paris, Montréal ou Dubaï veut être le premier à souhaiter bon anniversaire à sa mère à Batna. Chaque étape coince : payer depuis l’étranger, choisir quelque chose qui arrivera vraiment, écrire une carte dans une langue que la boutique ne lit peut-être pas, et savoir que c’est livré. Une simple boutique ne règle rien, parce que la moitié du problème se joue après la commande.',
      approach: 'Conçu de bout en bout plutôt que comme un magasin. Côté client : le catalogue et les fiches produit, un éditeur de carte où le message se compose sur une vraie carte imprimée et glissée dans le colis, les cadeaux groupés auxquels plusieurs personnes participent, les rappels d’occasions, le suivi de commande et un mur de réactions pour le moment de la remise. Côté exploitation, traité avec le même soin : commandes et livraison, coursiers, clients, produits et stock, zones de livraison et codes promo, marketing, contenu du site, rôles d’équipe avec connexion en deux étapes, et analytique. Chaque écran est pensé en anglais, français et arabe, car l’expéditeur et le destinataire lisent rarement la même langue.',
      result: 'Un prototype complet et cliquable couvrant les deux faces du service, de l’expéditeur de la diaspora à la tournée du coursier en Algérie.',
      outcomes: [
        'Éditeur de carte : recto et intérieur, stickers, photos et finitions d’impression',
        'Cadeaux groupés financés à plusieurs',
        'Livraison sur les 58 wilayas avec affectation de coursier par commande',
        'Admin pour commandes, stock, coursiers, promos, contenu et rôles',
        'Trilingue de bout en bout, arabe de droite à gauche compris',
      ],
      images: [
        { alt: 'Page d’accueil Giftili : choisir un cadeau, écrire quelques mots, livré en Algérie', caption: 'Accueil : destinataire, occasion et budget' },
        { alt: 'Éditeur de carte avec modèles, outils texte et stickers, et finitions d’impression', caption: 'L’éditeur de carte : ce qui sera imprimé et glissé dans le cadeau' },
        { alt: 'Fiche produit d’un bouquet avec taille, couleur, options et choix de date de livraison', caption: 'Produit : taille, options, wilaya et date de livraison' },
        { alt: 'Tableau des commandes et livraisons : pays d’envoi, wilaya du destinataire, coursier et statut', caption: 'Exploitation : commandes venues de l’étranger, routées vers les coursiers' },
      ],
    },
    'djalil-location': {
      tag: 'Location · Desktop',
      title: 'Djalil Location : un tableau de bord pour loueur de voitures',
      summary: 'Une application de bureau Windows hors-ligne d’abord pour une agence de location, bâtie sur une base locale pour que le comptoir continue de tourner sans connexion.',
      metric: 'Hors-ligne d’abord · AR/FR/EN avec RTL',
      challenge: 'Une agence de location tourne sur un comptoir, pas sur un cloud. Le système doit s’ouvrir instantanément, continuer à fonctionner quand la connexion tombe, et garder les données clients et contrats sur une machine que le propriétaire contrôle plutôt que sur le serveur d’un tiers.',
      approach: 'Construit en Electron avec une interface Vue 3 et SQLite sur disque, accessible via une couche IPC typée protégée par un verrou, afin que le rendu ne touche jamais directement la base. L’accès est tenu par le propriétaire : mot de passe défini au premier lancement, hachage Argon2, code de récupération écrit, limitation à cinq tentatives, et verrouillage automatique à l’inactivité ou au verrouillage de Windows. L’interface existe en arabe, français et anglais, avec une vraie mise en page de droite à gauche plutôt qu’un miroir ajouté après coup, et un thème clair et sombre.',
      result: 'Les fondations sont au niveau production : la coquille applicative, la base et ses migrations, et tout le parcours d’accès propriétaire. Flotte, clients et réservations se construisent dessus.',
      outcomes: [
        'Fonctionne hors ligne sur une base SQLite locale',
        'Mot de passe propriétaire en Argon2, code de récupération et limitation des tentatives',
        'Verrouillage automatique à l’inactivité ou au verrouillage de Windows',
        'Arabe, français et anglais avec une vraie mise en page RTL',
        'Empaqueté en installeur Windows',
      ],
      images: [
        { alt: 'Tableau de bord Djalil Location en français avec barre latérale, barre supérieure et panneau d’accueil', caption: 'Le tableau de bord propriétaire' },
        { alt: 'Le même tableau de bord en arabe, entièrement inversé de droite à gauche', caption: 'Le même écran en arabe, inversé de droite à gauche' },
      ],
    },
  },
};

export default fr;
