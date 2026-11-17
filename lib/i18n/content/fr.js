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
      a: 'Nous sommes basés à Alger, en Algérie (UTC+1) et travaillons à distance avec des clients en Europe, au Moyen-Orient et en Amérique du Nord. Nos horaires couvrent toute la journée ouvrée européenne et la majeure partie de la matinée de la côte Est américaine.',
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

  servicePages: {
    'web-development': {
      title: 'Développement web',
      metaTitle: 'Agence de développement web à Alger',
      metaDescription:
        'Développement web full-stack à Alger : front-ends React et Next.js sur des API adossées à Postgres, conçus pour être repris par votre propre équipe.',
      summary:
        'Des applications full-stack et des sites qui tiennent sous une vraie charge, bâtis sur la stack que nous devrons maintenir ensuite.',
      problem:
        'La plupart des projets web échouent deux fois. D’abord quand le prestataire construit pour la démo plutôt que pour la charge, puis un an plus tard quand plus personne dans l’entreprise ne peut rien changer sans casser quelque chose. Le code se lit comme un prototype parce qu’il en était un, et les décisions d’architecture qui comptent — comment l’état circule, où les données sont validées, ce qui se passe quand une requête est rejouée — n’ont jamais été prises.',
      approach:
        'Nous construisons avec React et Next.js côté interface et Node contre PostgreSQL derrière, rendu côté serveur là où les moteurs de recherche doivent lire la page, et côté client seulement là où l’interaction l’exige vraiment. La validation vit à un seul endroit, sur le serveur, et le client partage son schéma plutôt que de le dupliquer. Chaque projet reçoit des frontières typées entre les couches, pour qu’un changement de schéma échoue au build et non à deux heures du matin.',
      delivery:
        'Vous recevez le dépôt, le document d’architecture, un runbook couvrant les déploiements et les retours arrière, et une session de passation avec vos propres ingénieurs. La stack est volontairement ordinaire — React, Postgres, un hébergeur géré — parce que les choix exotiques sont la façon la plus sûre de rendre un code inmaintenable dès que ceux qui les ont faits sont partis.',
      outcomes: [
        'Pages rendues côté serveur là où les moteurs doivent les lire',
        'Un seul schéma de validation, partagé entre client et serveur',
        'Des frontières typées : un changement de schéma échoue au build',
        'Dépôt, document d’architecture et runbook remis à la livraison',
      ],
    },
    'mobile-app-development': {
      title: 'Développement d’applications mobiles',
      metaTitle: 'Applications mobiles à Alger',
      metaDescription:
        'Applications Flutter pour iOS et Android, pensées hors-ligne d’abord pour de vraies conditions réseau et publiées sur les deux stores.',
      summary:
        'Des applications natives et cross-platform qui arrivent sur le store, fonctionnent sur une mauvaise connexion et passent la revue.',
      problem:
        'Une application qui suppose une bonne connexion est une application qui ne marche pas dans la plus grande partie du monde. L’échec habituel ne vient pas du code : il vient d’une conception qui traite le réseau comme fiable, perd ce que l’utilisateur a saisi quand une requête expire, et ne révèle le problème qu’une fois de vraies personnes sur de vrais réseaux. Reste la partie que personne ne chiffre : la revue du store, la signature, les canaux de publication et la deuxième soumission après le premier refus.',
      approach:
        'Nous développons en Flutter depuis une seule base de code pour iOS et Android, et traitons la base locale comme la source de vérité plutôt que comme un cache. Les écritures atterrissent d’abord sur l’appareil et se synchronisent au retour du réseau : une coupure ne coûte rien à l’utilisateur. Là où une plateforme a réellement besoin de code natif — un service en arrière-plan, une intégration matérielle — nous l’écrivons en natif et faisons le pont, plutôt que de lutter contre le framework.',
      delivery:
        'Livrer veut dire soumis, revu et en ligne, avec les clés de signature entre vos mains et un processus de publication que votre équipe peut répéter. Nous publions des paquets Flutter sur pub.dev : l’outillage sous votre application est celui sur lequel d’autres développeurs s’appuient.',
      outcomes: [
        'Une seule base de code Flutter pour iOS et Android',
        'Hors-ligne d’abord : l’appareil écrit, la synchro suit',
        'Du code natif là où la plateforme l’exige vraiment',
        'Soumis, revu et en ligne, les clés de signature chez vous',
      ],
    },
    'desktop-software': {
      title: 'Logiciels desktop',
      metaTitle: 'Logiciels desktop sur mesure',
      metaDescription:
        'Applications Windows, macOS et Linux hors-ligne d’abord, sur base locale, pour les comptoirs, les ateliers et les environnements réglementés.',
      summary:
        'Des outils desktop multiplateformes pour les opérations internes, quand les données doivent rester sur une machine que vous contrôlez.',
      problem:
        'Beaucoup d’entreprises tournent sur un comptoir, pas sur un cloud. Une agence de location, un atelier, un cabinet : le logiciel doit s’ouvrir instantanément, continuer quand la ligne tombe, et garder les dossiers clients sur une machine que le propriétaire contrôle plutôt que sur le serveur d’un tiers. Une application web derrière un login échoue sur les trois points, et l’alternative SaaS échoue souvent sur un quatrième : elle facture par poste et à vie quelque chose qui aurait dû s’acheter une fois.',
      approach:
        'Nous construisons avec Electron et une base SQLite locale, accessible via une couche IPC typée, pour que l’interface ne touche jamais la base directement. Les règles métier qui ne doivent pas être violées sont appliquées à l’intérieur de la transaction d’écriture, pas seulement dans le formulaire : une vérification qui ne tourne que dans l’interface est une vérification qui saute dès que deux personnes agissent en même temps. Les sauvegardes tournent en local selon un calendrier et, si le client le souhaite, chiffrées vers un stockage objet avant de quitter la machine.',
      delivery:
        'Un installeur signé par utilisateur, sans droits administrateur, des mises à jour automatiques en arrière-plan qui prennent une sauvegarde avant de migrer, et un fichier de log que le propriétaire peut ouvrir et vous envoyer. Les migrations s’exécutent après une copie de sécurité et reviennent en arrière plutôt que de laisser une base à moitié migrée.',
      outcomes: [
        'Fonctionne hors ligne sur une base locale, chez le propriétaire',
        'Règles appliquées dans la transaction, pas seulement au formulaire',
        'Sauvegardes locales planifiées, chiffrées avant toute sortie',
        'Installeur signé par utilisateur, mises à jour en arrière-plan',
      ],
    },
    devops: {
      title: 'DevOps et infrastructure',
      metaTitle: 'Conseil DevOps et infrastructure cloud',
      metaDescription:
        'CI/CD, conteneurs et infrastructure-as-code, avec des déploiements en minutes et un retour arrière réellement testé.',
      summary:
        'Pipelines, conteneurs et infrastructure définie en code, pour qu’un déploiement redevienne un geste ordinaire.',
      problem:
        'L’angoisse du déploiement est un défaut de conception, pas un trait de caractère. Elle vient des mêmes causes à chaque fois : un processus de livraison qui vit dans la tête d’une seule personne, une infrastructure configurée à la main dont personne ne peut décrire l’état réel, et un plan de retour arrière jamais répété. Le coût apparaît en équipes qui livrent une fois par mois parce que livrer fait peur.',
      approach:
        'L’infrastructure est définie en code et relue comme du code : la configuration devient lisible et reproductible au lieu d’être mémorisée. Les builds tournent en CI à chaque changement, l’artefact qui a passé les tests est celui qui part en production, et le pipeline échoue bruyamment plutôt que de déployer quelque chose de non vérifié. Le retour arrière est un chemin testé, avec une durée connue, pas un espoir.',
      delivery:
        'Un runbook que votre équipe possède, couvrant le déploiement, le retour arrière et la conduite à tenir à trois heures du matin devant ce que vous n’aviez pas prévu. Une supervision qui réveille un humain pour les conditions qui le méritent, et se tait le reste du temps.',
      outcomes: [
        'Infrastructure définie en code et relue comme du code',
        'Un artefact construit une fois, promu d’un environnement à l’autre',
        'Un retour arrière répété, à la durée connue',
        'Des alertes réglées pour ne réveiller personne sans raison',
      ],
    },
    cybersecurity: {
      title: 'Cybersécurité',
      metaTitle: 'Cybersécurité et architecture sécurisée',
      metaDescription:
        'Modélisation des menaces, durcissement et architecture sécurisée par défaut, menés par un ingénieur titulaire d’un master en cryptographie.',
      summary:
        'Modélisation des menaces, durcissement et architecture sécurisée par défaut, pour ceux qui ne peuvent s’offrir ni une fuite ni du théâtre.',
      problem:
        'La sécurité arrive presque toujours trop tard pour être bon marché. Un test d’intrusion deux semaines avant le lancement trouve des problèmes architecturaux, et un problème architectural ne se corrige pas dans un délai. Pendant ce temps, les choses réellement dangereuses sont rarement exotiques : un identifiant commité dans un dépôt public, un mot de passe haché avec une fonction rapide, une route d’administration protégée par rien d’autre qu’une URL difficile à deviner.',
      approach:
        'Nous modélisons les menaces avant que l’architecture ne soit figée, parce que c’est le seul moment où la réponse est encore peu coûteuse. Les secrets n’atteignent jamais le bundle client ni le dépôt. Les mots de passe sont hachés avec une fonction coûteuse en mémoire, Argon2 plutôt que quoi que ce soit de rapide. Les données qui quittent une machine sont chiffrées avant de partir. L’autorisation est vérifiée côté serveur à chaque requête, jamais déduite de ce que l’interface a choisi d’afficher.',
      delivery:
        'Un modèle de menaces écrit, que vous pouvez remettre à un client ou à un auditeur, le durcissement réellement appliqué plutôt que recommandé, et la courte liste des risques acceptés sciemment avec le raisonnement joint. THODZ est dirigé par un ingénieur titulaire d’un master en cryptographie et sécurité de l’information : c’est la discipline fondatrice du studio.',
      outcomes: [
        'Modélisation des menaces tant que l’architecture peut changer',
        'Hachage coûteux en mémoire, jamais une empreinte rapide',
        'Secrets tenus hors du bundle client et du dépôt',
        'Autorisation vérifiée côté serveur à chaque requête',
      ],
    },
    'ai-ml': {
      title: 'IA et apprentissage automatique',
      metaTitle: 'IA et machine learning appliqué',
      metaDescription:
        'Du ML appliqué mis en production : vision par ordinateur, prévision et workflows adossés aux LLM, y compris des modèles qui tournent sur l’appareil.',
      summary:
        'De l’apprentissage automatique qui atteint la production : recommandation, prévision, vision par ordinateur et workflows adossés aux LLM.',
      problem:
        'Ce qui manque à la plupart des projets d’IA, ce n’est pas le modèle. C’est tout ce qui l’entoure : d’où viennent les données, ce qu’on fait d’une prédiction dont le modèle n’est pas sûr, comment savoir six mois plus tard s’il fonctionne encore, et ce que cela coûte par appel une fois le vrai volume arrivé. Un notebook avec une bonne précision n’est pas un système, et une surcouche sur l’API d’un autre n’est pas un avantage.',
      approach:
        'Nous partons de la décision que le modèle doit soutenir, et remontons jusqu’à la question de savoir si l’apprentissage automatique est le bon outil : souvent une règle est meilleure, moins chère et auditable. Quand un modèle s’impose, nous l’exportons là où il doit tourner — ONNX ou TFLite sur l’appareil quand la latence, le coût ou la confidentialité l’exigent — plutôt qu’une facture par appel pour ce qui pouvait tourner en local. Les seuils de confiance renvoient les cas incertains vers un humain au lieu de deviner.',
      delivery:
        'Un jeu d’évaluation reflétant vos données réelles plutôt qu’un benchmark public, un pipeline supervisé, et un énoncé honnête de ce que le système fait mal. Nous avons livré un pipeline de vérification de documents d’identité faisant tourner YOLOv8 sur l’appareil via Flutter : l’étude de cas ci-dessous en donne le détail.',
      outcomes: [
        'La décision d’abord, puis la question de savoir si le ML s’impose',
        'Inférence sur l’appareil quand latence, coût ou vie privée l’exigent',
        'Les prédictions incertaines vont à un humain, pas à une devinette',
        'Évaluation sur vos données, pas sur un benchmark public',
      ],
    },
    automation: {
      title: 'Automatisation des processus',
      metaTitle: 'Automatisation des processus métier',
      metaDescription:
        'Des pipelines qui survivent à la panne : synchronisation de données, reporting et outillage interne qui rejouent au lieu de s’arrêter.',
      summary:
        'Des opérations manuelles remplacées par des pipelines qui rejouent, journalisent et préviennent quand ils s’arrêtent.',
      problem:
        'Le tableur que trois personnes mettent à jour à la main n’est pas le problème. Le problème, c’est que personne ne sait quelle copie fait foi, que le rapport mensuel prend une journée à assembler, et que le travail s’arrête dès que la personne qui le comprend part en congé. Une automatisation qui échoue en silence est pire encore : une synchronisation cassée depuis quinze jours sans que personne ne l’ait vu coûte plus cher que le processus manuel qu’elle remplaçait.',
      approach:
        'Nous cartographions le processus tel qu’il se déroule vraiment, exceptions comprises — celles que les gens traitent sans y penser — parce que c’est précisément là qu’une automatisation naïve se casse. Puis nous construisons des pipelines idempotents, qu’on peut relancer sans risque, avec des reprises explicites, des logs structurés et une file d’échec pour les enregistrements qui ne passent pas. Un traitement qui échoue fait du bruit.',
      delivery:
        'L’automatisation, un tableau de bord indiquant ce qui a tourné et ce qui n’a pas tourné, et la documentation des cas particuliers pour que la personne suivante comprenne pourquoi une règle existe. Quand un processus ne devrait pas être automatisé, nous le disons : certaines exceptions méritent un humain.',
      outcomes: [
        'Le processus réel cartographié d’abord, exceptions comprises',
        'Des traitements idempotents, qu’on peut relancer sans risque',
        'Reprises explicites et file d’échec pour les enregistrements fautifs',
        'Une panne qui fait du bruit au lieu de passer inaperçue',
      ],
    },
    'ui-ux-design': {
      title: 'Design UI et UX',
      metaTitle: 'Design UI/UX pour produits logiciels',
      metaDescription:
        'Des interfaces conçues pour ceux qui les utilisent chaque jour : systèmes en tokens, accessibles par défaut, et de vraies mises en page de droite à gauche.',
      summary:
        'Des interfaces conçues pour les gens qui les utiliseront tous les jours, pas pour la capture d’écran du deck.',
      problem:
        'Un design optimisé pour la démo est optimisé pour le mauvais utilisateur. La personne qui compte voit cet écran quarante fois par jour, sait exactement où se trouve chaque chose, et se fait ralentir par l’animation qui avait impressionné le client. Par ailleurs, une interface livrée en images plutôt qu’en système dérive en un mois, parce que chaque nouvel écran est une interprétation de plus.',
      approach:
        'Nous concevons en tokens — couleur, échelle typographique, espacement — pour que le système soit le livrable et qu’un nouvel écran hérite des décisions au lieu de les réinventer. Le contraste et les états de focus font partie du design, pas d’une passe d’accessibilité ajoutée ensuite. L’arabe reçoit une vraie mise en page de droite à gauche, bâtie sur des propriétés logiques, pas un miroir après coup.',
      delivery:
        'Un système de design que vos développeurs peuvent implémenter sans deviner, y compris les états que personne ne pense à dessiner : vide, chargement, erreur, et trop de données. Quand nous construisons aussi le produit, les tokens du design et ceux du code sont le même fichier.',
      outcomes: [
        'Un système en tokens : les nouveaux écrans héritent des décisions',
        'Contraste et états de focus conçus d’emblée, pas ajoutés après',
        'Un vrai RTL pour l’arabe, via les propriétés logiques',
        'États vide, chargement, erreur et débordement spécifiés',
      ],
    },
    'technical-consulting': {
      title: 'Conseil technique',
      metaTitle: 'Due diligence et revue d’architecture',
      metaDescription:
        'Revue d’architecture, audit de code et due diligence technique pour des dirigeants qui attendent une réponse exploitable, pas une présentation.',
      summary:
        'Due diligence, revue d’architecture et planification de feuille de route pour les dirigeants qui hésitent entre construire, acheter ou sauver.',
      problem:
        'Les décisions techniques les plus coûteuses se prennent avec le moins d’information : réécrire ou refactorer, savoir si l’équipe que vous vous apprêtez à racheter a un code ou un passif, savoir si le chiffrage qu’on vous a donné tient. Ceux qui pourraient répondre honnêtement ont en général un intérêt dans la réponse.',
      approach:
        'Nous lisons le code, lançons le build et parlons aux ingénieurs plutôt qu’aux dirigeants. Le livrable est une évaluation écrite, preuves jointes : ce que nous avons regardé, ce que nous avons trouvé, ce que nous n’avons pas pu vérifier dans le temps imparti, et ce que nous ferions pour chaque point, dans quel ordre. Quand la réponse est que le système existant va bien et que le problème est ailleurs, c’est la réponse.',
      delivery:
        'Un rapport écrit que vous pouvez remettre à un conseil ou à un investisseur, une liste priorisée de ce qu’il faut corriger en premier, et un énoncé clair de ce qui est resté inconnu. Aucun forfait n’est requis pour le recevoir, et nous vous dirons quand le travail que vous décrivez n’a pas besoin de nous.',
      outcomes: [
        'Le code lu et le build lancé, pas seulement des entretiens',
        'Des preuves jointes à chaque constat',
        'Ce qui n’a pas pu être vérifié, dit clairement',
        'Une liste priorisée, pas une liste de tout',
      ],
    },
  },

  landing: {
    'nearshore-development-algeria': {
      title: 'Développement nearshore en Algérie',
      metaTitle: 'Développement nearshore en Algérie',
      metaDescription:
        'Une équipe d’ingénierie nearshore à Alger pour les entreprises françaises et européennes : UTC+1, français, anglais et arabe, et le code vous revient.',
      summary:
        'Une équipe d’ingénierie à une heure de Paris en horloge plutôt qu’en avion, pour les entreprises qui veulent le recouvrement du nearshore sans le prix de l’onshore.',
      facts: [
        { label: 'Fuseau horaire', value: 'UTC+1 — toute la journée de travail européenne, et la matinée de la côte est américaine' },
        { label: 'Langues de travail', value: 'Français, anglais et arabe — réunions, documentation et le produit lui-même' },
        { label: 'Facturation', value: 'En EUR, USD ou DZD, par virement bancaire' },
        { label: 'Propriété du code', value: 'Vous revient intégralement au paiement final, historique du dépôt compris' },
        { label: 'Première réponse', value: 'Sous un jour ouvré, par un ingénieur' },
      ],
      sections: [
        {
          heading: 'Pourquoi l’Algérie, concrètement',
          body: 'L’argument du nearshore, c’est le recouvrement, et le recouvrement est un chiffre. Alger est à UTC+1 : la même heure que Paris, Madrid, Rome et Berlin une grande partie de l’année, une de plus que Londres, et assez proche du Golfe pour qu’un appel en fin de notre journée tombe au début de la vôtre. Pas de fenêtre de passation à concevoir, pas de point à sept heures du matin, pas de question posée le lundi et répondue le mercredi. Le français, l’anglais et l’arabe sont tous des langues de travail ici — pas la langue d’un chef de projet, mais celle des commentaires du code, du document d’architecture et de l’appel client.',
        },
        {
          heading: 'Comment le travail est structuré',
          body: 'Quatre formes, et nous vous dirons laquelle correspond à votre problème. Un projet à prix fixe quand le périmètre est connaissable : audit de découverte, périmètre écrit, architecture avant le code, et des incréments hebdomadaires visibles en environnement de staging dès la première semaine. Un forfait mensuel quand il s’agit d’une feuille de route plutôt que d’un livrable, avec une capacité convenue et un accès direct aux ingénieurs qui font le travail. Un contrat de support pour un système déjà en production. Une mission de conseil quand ce qu’il vous faut est une décision et non un développement — et nous le dirons quand c’est le cas.',
        },
        {
          heading: 'La partie commerciale, par écrit',
          body: 'Un accord écrit avant tout démarrage, couvrant le périmètre, les jalons, les conditions de paiement, le transfert de propriété intellectuelle, la confidentialité et la façon dont chaque partie peut mettre fin à la mission. Les factures sont payables en EUR, USD ou DZD par virement, et chaque facture indique exactement ce qu’elle couvre. Au paiement final, l’ensemble du code source, des designs et de la documentation vous revient intégralement, historique du dépôt compris ; nous ne gardons aucune licence sur votre produit et ne réutilisons pas votre code chez un autre client. Nous signons votre NDA plutôt que d’imposer le nôtre, et toute mission est couverte par une confidentialité mutuelle, qu’un NDA soit signé ou non.',
        },
        {
          heading: 'Ce que le nearshore ne veut pas dire ici',
          body: 'Pas un vivier de prestataires interchangeables appariés à votre fiche de poste. Les ingénieurs qui cadrent votre projet sont ceux qui le construisent, et la personne qui répond à votre question est celle qui a écrit ce dont vous parlez. Chaque projet est livré avec un runbook, un document d’architecture et une session de passation, pour que votre équipe puisse opérer le système sans nous. Le forfait à prix fixe inclut trente jours de couverture des bugs après la mise en production ; ensuite vous passez à un contrat de support ou vous reprenez tout en interne. Les deux sont des fins normales.',
        },
      ],
      faq: [
        {
          q: 'À qui appartient le code que vous écrivez pour nous ?',
          a: 'À vous, intégralement, au paiement final : sources, designs, documentation et historique du dépôt. Nous n’en gardons aucune licence et ne le réutilisons pas ailleurs. Les composants open source conservent leurs licences, toutes listées dans la documentation de passation.',
        },
        {
          q: 'Comment facturez-vous une entreprise hors d’Algérie ?',
          a: 'Par virement bancaire, en EUR, USD ou DZD. Les projets à prix fixe sont facturés sur jalons acceptés ; les forfaits et contrats de support sont facturés mensuellement d’avance. Chaque facture indique précisément ce qu’elle couvre.',
        },
        {
          q: 'Quelles heures allons-nous réellement partager ?',
          a: 'Nous sommes à UTC+1 : une équipe européenne partage toute la journée de travail, une équipe sur la côte est américaine en partage l’essentiel de la matinée. La première réponse arrive sous un jour ouvré, et le premier appel de cadrage a généralement lieu dans la semaine.',
        },
        {
          q: 'Signez-vous notre NDA ?',
          a: 'Oui, et le vôtre plutôt que le nôtre. Cochez la case NDA sur le formulaire de contact et il est traité avant que vous n’envoyiez quoi que ce soit de sensible. La confidentialité mutuelle s’applique de toute façon, NDA séparé ou non.',
        },
      ],
    },
    'hire-full-stack-developers': {
      title: 'Recruter des développeurs full-stack',
      metaTitle: 'Développeurs full-stack en renfort',
      metaDescription:
        'Une équipe full-stack plutôt qu’une pile de CV : une capacité convenue chaque mois, un accès direct aux ingénieurs, et 30 jours de préavis pour arrêter.',
      summary:
        'Une capacité d’ingénierie dédiée, au mois, par une seule équipe responsable — ou un développement défini à prix fixe. Les deux, avec les mêmes personnes du début à la fin.',
      facts: [
        { label: 'Forme', value: 'Forfait mensuel pour une capacité, ou prix fixe pour un périmètre défini' },
        { label: 'Préavis', value: 'Résiliation du forfait avec 30 jours de préavis' },
        { label: 'Accès', value: 'Un canal direct vers les ingénieurs qui écrivent le code' },
        { label: 'Reporting', value: 'Un résumé écrit des avancées chaque mois' },
        { label: 'Langues', value: 'Français, anglais et arabe, à UTC+1' },
      ],
      sections: [
        {
          heading: 'Deux façons de faire, et celle qu’il vous faut',
          body: 'Si vous savez ce qui doit être construit et que cela a des contours, prenez le prix fixe : un périmètre écrit, des jalons que vous acceptez un par un, et un montant convenu avant la première ligne de code. Si le périmètre bouge — une feuille de route, un produit plutôt qu’un projet, un backlog qui grandit à mesure que vous apprenez — prenez le forfait : une capacité d’ingénierie convenue chaque mois, planifiée avec vous et repriorisée quand les choses changent. La plupart des missions qui commencent sous une forme et auraient dû prendre l’autre le font parce que personne n’a posé la question assez tôt. Nous la posons au premier appel.',
        },
        {
          heading: 'À quoi ressemble vraiment une équipe dédiée',
          body: 'Une capacité convenue chaque mois, une planification faite avec vous plutôt que rapportée, une livraison continue dans vos environnements, et un canal direct vers les ingénieurs — pas un commercial qui relaie les questions. Un résumé écrit arrive chaque mois, pour qu’il existe une trace de ce que la capacité a produit, présentable à un comité. Résiliation avec trente jours de préavis : pas d’engagement long, parce qu’une équipe que vous gardez par obligation contractuelle n’est pas une équipe qui donne le meilleur d’elle-même.',
        },
        {
          heading: 'La stack pour laquelle vous recrutez',
          body: 'Le web sur React et Next.js, avec Node et PostgreSQL derrière. Le mobile en Flutter, une seule base de code pour les deux stores, hors-ligne d’abord là où le réseau ne se laisse pas faire confiance. Le desktop en Electron contre une base SQLite locale, pour les endroits que le cloud n’atteint pas. L’apprentissage automatique appliqué en Python, exporté pour tourner sur l’appareil quand la latence, le coût ou la confidentialité l’exigent. L’infrastructure définie en code, déployée via CI sur Cloudflare et des conteneurs. Les études de cas ci-dessous sont chacune de ces briques en production, pas une liste de compétences.',
        },
        {
          heading: 'Ce que vous ne recrutez pas',
          body: 'Pas une société de placement qui apparie des CV à une fiche de poste, ni une équipe qui disparaît derrière une file de tickets. Les mêmes ingénieurs cadrent, construisent et opèrent, et restent joignables après la mise en production. Si ce qu’il vous faut est un spécialiste pour trois semaines plutôt qu’une équipe, nous vous le dirons — et si le travail n’a pas besoin de nous du tout, nous le dirons aussi.',
        },
      ],
      faq: [
        {
          q: 'Peut-on commencer petit ?',
          a: 'Oui, et nous le préférons. Une courte mission de conseil ou un seul jalon à prix fixe est une bien meilleure façon de voir si nous travaillons bien ensemble qu’un engagement de six mois pris pendant un appel commercial.',
        },
        {
          q: 'Qui encadre les développeurs ?',
          a: 'Nous. Vous avez un accès direct aux ingénieurs et votre mot à dire sur les priorités ; vous n’avez pas la charge de les manager. Si vous préférez les faire tourner dans votre propre process, c’est possible aussi : dites-le au premier appel et nous nous y adaptons.',
        },
        {
          q: 'Que se passe-t-il si nous devons arrêter ?',
          a: 'Trente jours de préavis sur un forfait. Vous gardez tout : le code, l’historique du dépôt, le document d’architecture et le runbook. Une passation propre est une fin normale, pas un échec, et nous la ferons correctement.',
        },
        {
          q: 'Pouvez-vous travailler avec notre équipe existante ?',
          a: 'Oui, c’est fréquent. Nous prenons les parties pour lesquelles votre équipe n’a ni le temps ni la spécialité, dans vos dépôts et votre process de revue, plutôt que de construire un système parallèle à côté du sien.',
        },
      ],
    },
  },

  caseStudies: {
    'sadjia-ceram': {
      before: 'Les clients appelaient la boutique pour obtenir un prix, carreau par carreau et projet par projet.',
      after: 'Ils parcourent le catalogue et obtiennent seuls une estimation en DZD en temps réel pour leur pièce.',
      tag: 'Retail · Web',
      title: 'SADJIA CERAM : showroom digital',
      metaDescription: 'Catalogue produit digital et estimateur de prix en temps réel pour un détaillant de carrelage à Oran, en libre-service.',
      client: 'SADJIA CERAM, Es Senia, Oran',
      summary: 'Un catalogue produit digital et un estimateur de prix en temps réel pour un détaillant de carrelage à Oran, remplaçant les devis par téléphone par une consultation et un chiffrage en libre-service.',
      metric: 'Catalogue + estimateur + admin, en un seul développement',
      challenge: 'SADJIA CERAM vend du carrelage haut de gamme pour sols et murs depuis un showroom à Es Senia, Oran. Chaque demande passait par le même goulot d’étranglement : un client voyait un carreau quelque part, appelait le showroom, le décrivait, et attendait qu’on lui calcule le prix d’une pièce entière. Rien du catalogue ni des prix n’existait à un endroit accessible au client, si bien que l’équipe passait ses journées à chiffrer par téléphone au lieu de vendre, et que les clients arrivaient sans aucune idée de budget.',
      approach: 'Nous avons fait du showroom un produit que les clients utilisent avant d’appeler. Le catalogue se filtre par collection, dimension et type de carreau, pour passer de la liste complète aux quatre références qui comptent. Chaque fiche produit affiche les vraies dimensions et le vrai prix au mètre carré. L’estimateur vient par-dessus : saisissez une surface, ajoutez plusieurs carreaux à un projet, et il renvoie un total formaté en dinars algériens, calculé avec les mêmes règles de prix que le showroom applique à la main. Derrière, un tableau de bord d’administration permet à l’équipe d’ajouter des produits, de téléverser des visuels, et de modifier dimensions et prix sans toucher au code ni nous attendre. WhatsApp, Instagram et la fiche Google Maps du showroom sont reliés à chaque page, parce que sur ce marché la demande finit sur WhatsApp, qu’on l’ait prévu ou non.',
      result: 'Le showroom dispose désormais d’un catalogue en ligne et d’un outil de chiffrage que les clients utilisent avant même de décrocher le téléphone, et d’un tableau de bord que l’équipe opère au quotidien. Un changement de prix prend une minute à une personne, au lieu d’un appel à un développeur, ce qui compte dans une catégorie où le prix au mètre carré bouge avec le taux de change.',
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
      metaTitle: 'Tableau de bord logistique et distribution',
      metaDescription: 'Un tableau de bord desktop et web pour suivre les opérations de transport et de distribution, packagé en application native.',
      summary: 'Un tableau de bord desktop et web pour suivre les opérations de transport et de distribution, packagé en application native avec un déploiement web sur Supabase.',
      metric: 'Desktop + web depuis un seul codebase',
      challenge:
        'Une activité de transport et de distribution avait besoin d’un seul système pour suivre la flotte, les livraisons et le volet financier, déployable à la fois en outil de bureau installé et en application web hébergée. Le volet financier est celui qui échappe d’habitude : les courses sont réparties à un endroit, les avances aux chauffeurs réglées à un autre, les factures fournisseurs arrivent sur papier, et ce qu’un client doit réellement est reconstitué en fin de mois à partir de plusieurs tableurs qui se contredisent. Personne ne peut répondre à la seule question qui compte — combien de trésorerie l’entreprise a-t-elle maintenant, et qui détient le reste. La flotte est visible ; l’argent ne l’est pas.',
      approach:
        'Nous avons construit le tableau de bord une fois en Vite et TypeScript et l’avons livré de deux façons : une version Electron pour un usage installé et tolérant à l’absence de réseau, et un déploiement web adossé à Supabase, depuis la même base de code et la même couche de données. L’argent est modélisé comme une réconciliation et non comme un rapport : la trésorerie est dérivée des encaissements clients, moins les paiements aux chauffeurs, moins les paiements aux fournisseurs, moins les charges d’exploitation, et le montant est affiché sous forme d’équation plutôt que de total, de sorte qu’un chiffre qui semble faux se remonte jusqu’au côté qui a bougé. Autour viennent des comptes clients portant le facturé, l’encaissé, le restant dû et les avances ; le règlement des comptes chauffeurs ; les comptes fournisseurs ; et les autres charges de flotte, chacun filtrable sur une plage de dates. L’interface est entièrement en arabe, disposée de droite à gauche.',
      result:
        'Un tableau de bord unique couvrant les opérations de distribution et les finances qui les sous-tendent, empaqueté pour l’installation comme pour le web, où la position de trésorerie est un chiffre dérivé qu’un responsable peut auditer plutôt qu’un nombre saisi par quelqu’un. Avances et dettes vivent sur la fiche client et non dans un carnet séparé : la question « que nous doit ce client » a une seule réponse, et c’est la même sur les deux versions. La fin de mois cesse d’être une reconstitution.',
      outcomes: [
        'Une base de code TypeScript, deux cibles de livraison',
        'Version Electron pour un usage installé, local d’abord',
        'Déploiement web sur Supabase partageant la même couche de données',
        'Trésorerie dérivée d’une équation, traçable jusqu’à l’écriture qui l’a fait bouger',
        'Comptes clients : facturé, encaissé, restant dû et avances',
        'Règlement chauffeurs et comptes fournisseurs dans le même filtre de période',
        'Interface en arabe, de droite à gauche de bout en bout',
      ],
      images: [
        { alt: 'Tableau de bord financier unifié montrant la trésorerie, les soldes clients et le règlement des chauffeurs', caption: 'Le tableau de bord unifié : trésorerie, comptes clients, règlement des chauffeurs' },
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
      challenge:
        'Les personnes en situation de handicap en Algérie avaient besoin d’une plateforme publique pour montrer leur travail créatif et professionnel : une plateforme qui se lise comme une vitrine soignée et non comme une page caritative. Cette distinction est tout le cahier des charges, et elle se joue surtout dans les choix de conception, pas dans les mots. Une page caritative met le besoin en avant, emploie des couleurs douces et des photos de banque d’images, et place un bouton de don là où devrait être le travail. Une vitrine met le travail en avant, nomme la personne et sa spécialité comme le ferait un portfolio, et traite le lecteur comme quelqu’un qui pourrait l’embaucher. La seconde est plus difficile : il faut que la matière se porte toute seule.',
      approach:
        'Nous avons conçu un site statique accessible et visuellement engageant : une galerie de talents avec la spécialité et la localisation de chaque personne, des statistiques nationales sur les talents inscrits et les wilayas représentées, une section événements pour les ateliers et expositions, et une inscription à la newsletter. La galerie est la page : chaque carte porte un nom, une spécialité, une wilaya et des étiquettes, soit l’information dont un visiteur a besoin pour prendre quelqu’un au sérieux plutôt qu’en pitié. Les compteurs nationaux se placent sous l’en-tête comme contexte, pas comme argument. Le site est construit pour charger vite sans dépendance serveur, et écrit en arabe et en anglais pour se lire nativement dans sa langue plutôt que comme la traduction de l’autre.',
      result:
        'Un site vitrine en ligne et accessible, mettant en avant des talents de toutes les wilayas d’Algérie. Sans backend, il n’y a rien à maintenir en marche et rien qui puisse tomber le jour où une exposition y envoie du trafic — ce qui compte pour une plateforme dont les moments les plus chargés sont ceux qu’elle ne peut pas programmer. Le site est aussi assez peu coûteux à héberger indéfiniment, ce qui pour un projet associatif n’est pas un détail : ceux qui disparaissent le font généralement parce que quelqu’un a cessé de payer un serveur, pas parce que la matière s’est épuisée.',
      outcomes: [
        'Galerie de talents avec spécialité, localisation et étiquettes par personne',
        'Statistiques nationales : talents inscrits, wilayas, œuvres, événements',
        'Section événements pour ateliers, expositions et concours',
        'Écrit nativement en arabe et en anglais, pas traduit de l’un vers l’autre',
        'Build statique : rien à exploiter, rien qui tombe un jour de forte affluence',
        'Bilingue arabe/anglais, sans dépendance backend',
      ],
      images: [
        { alt: 'Page d’accueil d’Ability Beyond Disability : héros, talent de la semaine et statistiques nationales', caption: 'Accueil : le talent de la semaine, et les compteurs nationaux en dessous' },
        { alt: 'Cartes de la galerie de talents indiquant la spécialisation, la wilaya et les étiquettes de chaque personne', caption: 'La galerie : spécialisation, wilaya et étiquettes par personne' },
        { alt: 'Section événements listant ateliers, expositions et concours', caption: 'Événements : ateliers, expositions et concours' },
      ],
    },

    'little-hafiz': {
      before: 'La mémorisation dépendait de la présence d’un enseignant ou d’un exemplaire imprimé.',
      after: 'Écoute verset par verset et suivi de progression sur n’importe quel téléphone, même hors ligne.',
      tag: 'EdTech · Mobile',
      title: 'Little Hafiz : application de mémorisation du Coran',
      metaDescription: 'Application Flutter de mémorisation du Coran, avec écoute verset par verset, suivi de progression et build web hors ligne.',
      summary: 'Une application Flutter de mémorisation du Coran pour enfants et adultes, avec écoute verset par verset, suivi de progression, et un build web installable utilisable hors ligne.',
      metric: 'Web, iOS & Android depuis un seul codebase',
      challenge:
        'Les applications de mémorisation du Coran sont nombreuses, mais peu sont conçues spécifiquement pour les enfants, avec une progression que les parents peuvent réellement suivre. Une application pour enfant a des contraintes que celle d’un adulte n’a pas : l’écran d’accueil doit offrir des destinations et non un menu, les cibles doivent convenir à une main de six ans, et rien ne doit sanctionner une mauvaise touche. Le parent a besoin d’une porte d’entrée où l’enfant ne s’égare pas. Et l’audio n’est pas une fonctionnalité ici, c’est le produit : la mémorisation passe par l’écoute et la répétition, donc un verset qui s’arrête pour se mettre en mémoire tampon ne dégrade pas la séance, il y met fin — et les lieux où ces applications servent ne sont pas toujours connectés. Un enfant ne réessaie pas un chargement raté ; il repose le téléphone.',
      approach:
        'Une seule base de code Flutter couvre l’ensemble : écoute verset par verset, plusieurs méthodes de mémorisation, suivi de progression, et des versions iOS, Android et web issues de la même source. L’écran d’accueil propose quatre destinations plutôt qu’un menu — mémoriser une sourate, écouter et répéter, jeux, et mode parent derrière un verrou — en arabe, de droite à gauche, avec des cibles dimensionnées pour un enfant et non réduites depuis une mise en page de bureau. L’audio est mis en cache pour que la boucle écoute-répétition continue sans connexion, parce que la boucle est la méthode. La progression est enregistrée par sourate, ce sur quoi un parent peut agir ; le temps passé dans l’application, non.',
      result:
        'Une application de mémorisation multiplateforme installable directement depuis le navigateur, sans passage obligé par un magasin d’applications. Cela compte plus qu’il n’y paraît pour la portée : un parent peut l’utiliser une minute après avoir suivi un lien partagé, sans compte à créer, sans file de validation entre un correctif et l’enfant qui en a besoin, et sans gros téléchargement sur une connexion peut-être facturée au volume. La même source produit toujours les versions iOS et Android pour les familles qui préfèrent installer depuis un magasin.',
      outcomes: [
        'Écoute verset par verset avec navigation par sourate',
        'Plusieurs méthodes de mémorisation et suivi de progression',
        'Quatre destinations sur l’écran d’accueil, pas un menu',
        'Audio mis en cache : la boucle écoute-répétition fonctionne hors ligne',
        'Mode parent derrière un verrou, progression enregistrée par sourate',
        'Interface en arabe, de droite à gauche, dimensionnée pour une main d’enfant',
        'PWA installable et utilisable hors ligne, plus les versions iOS et Android',
      ],
      images: [
        { alt: 'Écran d’accueil de Little Hafiz avec mémoriser, écouter et répéter, jeux, et mode parent', caption: 'Accueil : mémoriser, écouter et répéter, jeux, et mode parent' },
        { alt: 'Écran du mode parent sur téléphone, protégé par un verrou', caption: 'Le mode parent sur la version mobile' },
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
      metaTitle: 'Détection et segmentation de cartes d’identité',
      metaDescription: 'Un pipeline de vision par ordinateur qui détecte et redresse les cartes d’identité algériennes, pour un recadrage prêt pour l’OCR.',
      summary: 'Un pipeline de vision par ordinateur qui détecte, segmente et corrige la perspective des cartes d’identité algériennes depuis la caméra d’un téléphone, produisant un recadrage prêt pour l’OCR.',
      metric: 'De l’image caméra au recadrage prêt pour l’OCR, sur l’appareil',
      challenge:
        'Lire une carte d’identité de façon fiable depuis une photo de téléphone suppose de gérer la rotation, le cadrage partiel et un éclairage inconstant avant même que l’OCR ne tourne. La photo prise au comptoir n’est jamais celle sur laquelle un jeu de données a été construit : la carte est posée de biais sur un bureau, un coin sort du cadre, une fenêtre jette un reflet sur le lamifié, et la main qui tient le téléphone bouge au déclenchement. Donnez cela tel quel à un moteur d’OCR et il n’échoue pas — il renvoie une absurdité plausible, des caractères qui ressemblent à un nom et à un numéro sans être ni l’un ni l’autre. C’est pire que ne rien renvoyer : une absence est manifestement un échec, une absurdité plausible finit en base de données.',
      approach:
        'Nous avons entraîné un modèle de segmentation YOLOv8 sur le jeu de données MIDV-500 pour localiser et masquer la carte, associé à un détecteur léger à boîtes orientées pour le cadrage en direct sur une caméra qui bouge. La détection passe en premier et porte un score de confiance : une image dont le modèle n’est pas sûr est rejetée plutôt que transmise à la suite — l’endroit le moins coûteux pour arrêter une mauvaise lecture est avant qu’elle ne commence. La segmentation donne ensuite le masque de la carte et, à partir de lui, les quatre coins. Ces coins sont tout l’intérêt de la deuxième étape : ils permettent à la troisième d’appliquer une correction de perspective qui projette la carte sur un rectangle, si bien qu’un document photographié de biais ressort plat et non trapézoïdal. La sortie est un recadrage fixe de 1024 × 646, redressé et contrôlé contre les reflets avant de quitter la chaîne. Les deux modèles s’exportent en ONNX et TFLite : l’inférence tourne sur le téléphone.',
      result:
        'Une chaîne caméra-vers-recadrage — détecter, segmenter, redresser — qui remet au moteur d’OCR une image plate et de taille constante plutôt qu’une photographie, ce qui fait la différence entre un OCR qui marche et un OCR qui marche à peu près. Tourner sur l’appareil compte pour deux raisons distinctes : pas de facture à l’appel auprès d’une API de vision quand le volume monte, et un document d’identité ne quitte jamais le téléphone sur lequel il a été photographié — une réponse nettement plus courte à donner à un régulateur qu’un contrat de sous-traitance.',
      outcomes: [
        'Segmentation YOLOv8 entraînée sur le jeu de données MIDV-500',
        'Détecteur à boîtes orientées pour le cadrage mobile en direct',
        'Seuil de confiance : une image incertaine est rejetée, pas transmise à l’OCR',
        'Extraction des quatre coins alimentant une correction de perspective : les cartes de biais ressortent plates',
        'Sortie fixe 1024 × 646, redressée et contrôlée contre les reflets',
        'Exports ONNX et TFLite : inférence sur l’appareil, documents jamais téléversés',
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
      metaDescription: 'Un créateur de sites en glisser-déposer pour assembler un portfolio professionnel à partir de templates, sans écrire de code.',
      client: 'THODZ SOLUTIONS (produit interne)',
      summary: 'Un créateur de sites en glisser-déposer qui permet à chacun d’assembler un portfolio professionnel à partir de templates personnalisables, sans écrire de code.',
      metric: '5 templates · éditeur en glisser-déposer',
      challenge:
        'Les indépendants qui ont besoin d’un site portfolio veulent rarement le coder à la main, et souvent ne le peuvent pas. Les outils qui leur sont destinés se divisent en deux moitiés décevantes : des constructeurs si génériques que tous les résultats se ressemblent, et des constructeurs si verrouillés que la première chose que l’on veut changer est justement celle qu’on ne peut pas. Nous voulions le milieu : de vrais templates réellement modifiables, sans jamais plonger qui que ce soit dans un éditeur de code. Le plus difficile n’est pas le glisser-déposer. C’est que « modifiable » et « interchangeable » tirent en sens contraire : plus un template laisse changer de choses, plus votre travail est lié à ce template, et moins vous pouvez en essayer un autre sans tout recommencer.',
      approach:
        'Nous avons construit l’éditeur autour de la manipulation directe. Les sections se réordonnent par glisser-déposer (@dnd-kit), et chaque élément se modifie sur place : cliquez le texte et tapez, cliquez l’image et remplacez-la, ouvrez le panneau de style et changez couleurs, polices et espacements. Cinq templates sont livrés avec de vrais partis pris plutôt que des variations de couleur d’une même mise en page : Modern Minimal, Creative Bold, Developer Tech, Designer Elegant et Business Professional, et passer de l’un à l’autre conserve votre contenu intact. Cette dernière propriété est la raison d’être du modèle de données : le contenu vit séparément de la présentation qui l’affiche, de sorte qu’un template est une façon de montrer ce que vous avez écrit et non l’endroit où c’est rangé. Tout s’enregistre automatiquement. Comptes, persistance et stockage des médias tournent sur Supabase avec Prisma au-dessus de Postgres, pour qu’un site à moitié fait soit encore là demain.',
      result:
        'Un constructeur sans code opérationnel, couvrant le choix du template, l’édition par glisser-déposer, la personnalisation du style et l’inscription jusqu’à la gestion de compte, de bout en bout. « De bout en bout » est l’affirmation à vérifier dans un constructeur, parce que la démonstration montre toujours l’éditeur alors que ce qui décide si quelqu’un termine son site, c’est tout le reste : s’inscrire, revenir une semaine plus tard à un brouillon exactement là où on l’avait laissé, et changer d’avis sur le template sans perdre une soirée d’écriture.',
      outcomes: [
        'Réordonnancement des sections par glisser-déposer, sur @dnd-kit',
        'Cinq templates distincts, interchangeables sans perdre le contenu',
        'Contenu stocké séparément de la présentation : c’est ce qui rend le changement sûr',
        'Édition sur place du texte, des images, des couleurs, des polices et des espacements',
        'Ajouter, supprimer, réordonner et masquer des sections',
        'Enregistrement automatique, comptes Supabase sur Prisma + Postgres',
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
      metaDescription: 'Une application web à rôles où les patients enregistrent leurs mesures et reçoivent des recommandations validées par un médecin.',
      summary: 'Une application web à rôles où les patients enregistrent leurs mesures de santé et reçoivent des recommandations rédigées par IA puis validées par un médecin.',
      metric: 'Rôles patient + médecin · sortie validée par un médecin',
      challenge:
        'Les patients qui gèrent une maladie chronique ont besoin d’un moyen simple de consigner leurs mesures et de recevoir des conseils en retour. Un modèle d’IA peut rédiger ces conseils en quelques secondes, et c’est précisément le problème : des suggestions médicales non relues, livrées directement au patient, sont un risque, pas une fonctionnalité. Le système devait être assez utile pour que les patients continuent de saisir, et assez sûr pour que rien ne leur parvienne sans qu’un clinicien l’ait lu. C’est la seconde exigence qui décide de l’architecture, parce qu’une règle ne suffit pas. Une consigne disant qu’un médecin doit valider avant diffusion est une consigne que quelqu’un saute un soir chargé ; la garantie ne tient que si sauter l’étape est quelque chose que le système ne sait pas exprimer.',
      approach: 'Nous avons intégré l’étape de validation clinique dans le modèle de données plutôt que de l’ajouter après coup. Les patients soumettent leurs mesures, issues de capteurs médicaux, via un parcours mobile-first et consultent tout leur historique. Chaque soumission génère un rapport rédigé par IA côté backend uniquement, jamais dans le navigateur, et ce brouillon atterrit dans la file d’un médecin, pas dans la boîte du patient. Le compte médecin relit, modifie et approuve chaque rapport et chaque prescription avant que le patient ne voie quoi que ce soit ; un brouillon non validé n’a aucun chemin vers le patient. L’authentification tourne sur Firebase avec vérification d’e-mail par OTP et connexion Google, sur une Realtime Database qui garde les deux historiques synchronisés.',
      result:
        'Une boucle patient/médecin opérationnelle (saisie, rédaction par l’IA, relecture clinique, diffusion), avec un historique complet des deux côtés et aucun chemin permettant à une sortie non relue d’atteindre un patient. Cette dernière clause est la conception même : la relecture clinique n’est pas une étape d’un flux que l’on pourrait réordonner ou sauter sous pression, c’est la seule arête entre un brouillon et la vue du patient. La différence compte précisément quand le système est chargé, pas quand on en fait la démonstration — et c’est le seul moment où une propriété de sûreté est réellement mise à l’épreuve.',
      outcomes: [
        'Deux rôles dans un même système : saisie patient, relecture médecin',
        'Rédaction par l’IA confinée au backend, derrière une validation clinique',
        'Le médecin modifie et valide chaque rapport et ordonnance avant diffusion',
        'Relecture imposée par le modèle de données, pas par une procédure qu’on peut sauter',
        'Historique complet des mesures et des traitements pour les deux rôles',
        'Firebase Auth avec vérification d’e-mail par code et connexion Google',
        'Responsive mobile-first sur tous les écrans',
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
      metaDescription: 'Boutique arabophone pour une marque de bijoux : panier, paiement, livraison par wilaya et administration des commandes.',
      summary: 'Une boutique arabophone pour une marque de bijoux, avec panier, paiement, livraison par wilaya et une administration depuis laquelle l’équipe traite les commandes.',
      metric: 'Boutique + admin + tarifs de livraison',
      challenge:
        'Vendre des bijoux en ligne en Algérie, c’est traiter ce qu’un panier hébergé ne traite pas : une livraison tarifée par wilaya, des commandes confirmées par téléphone, et une équipe de boutique qui doit gérer stock et commandes sans toucher au code. Une plateforme hébergée suppose un tarif d’expédition unique, un paiement par carte et un client qui ne parle à personne. Rien de tout cela ne tient ici : le coût de livraison diffère entre quarante-huit wilayas, la plupart des commandes se règlent à la livraison après un appel de confirmation, et la personne qui tient la boutique est bijoutière, pas exploitante de logiciel. Tout ce qui exige un développeur pour changer un prix ou un tarif de livraison est un système que la boutique cessera d’utiliser.',
      approach:
        'La vitrine est volontairement sans dépendance côté front : HTML, CSS et JavaScript écrits à la main pour que les pages restent rapides sur des connexions mobiles, avec une mise en page arabe de droite à gauche de bout en bout et un sélecteur de langue dans l’en-tête. Ce choix n’est pas stylistique. Le bijou se vend par la photographie, donc les pages sont construites autour de grandes images, et le budget que ces images consomment sur une connexion mobile est un budget qu’un framework ne peut pas prendre en plus. Derrière se trouve un service Express et MongoDB couvrant produits, commandes, villes et langue, avec le téléversement d’images traité côté serveur. L’administration fait partie du même build : création et édition de produits, liste des commandes, et une vue par commande que la boutique utilise pour avancer dans sa journée, derrière une connexion à session.',
      result:
        'Une boucle de vente complète que la boutique exploite elle-même, du client qui parcourt le catalogue à l’équipe qui marque une commande comme honorée. Les parties qui réclament d’habitude un développeur — ajouter un produit, remplacer ses photos, changer le coût de livraison vers une wilaya, faire avancer une commande dans ses états — sont toutes des choses que la bijoutière fait depuis l’administration, ce qui fait la différence entre une vitrine à jour et une vitrine exacte pendant un mois puis discrètement fausse. La boutique n’attend pas un développeur pour mettre quelque chose de nouveau en vente, et rien ne se périme en attendant.',
      outcomes: [
        'Catalogue, pages produit, panier et commande en arabe',
        'Livraison traitée par ville plutôt qu’un tarif unique',
        'Catalogue porté par l’image, sans framework front qui dispute la bande passante',
        'Arabe et anglais, avec un sélecteur dans l’en-tête',
        'Administration des produits, des images et du statut des commandes',
        'Connexion à session pour l’équipe de la boutique',
      ],
      images: [
        { alt: 'Page d’accueil Onyxia avec le logo de la marque sur un ciel étoilé sombre', caption: 'La page d’accueil' },
      ],
    },
    'sotex': {
      tag: 'Commerce · Web',
      title: 'Sotex : une boutique, n’importe quel produit, chaque commande suivie',
      metaTitle: 'Sotex : une boutique, n’importe quel produit',
      metaDescription: 'Boutique arabophone mono-produit relancée pour ce qui est en vente, avec chaque commande dans un tableau de bord.',
      summary: 'Une boutique arabophone mono-produit relancée pour ce qui est en vente, d’un coffret beauté à l’isolation de véhicules, avec chaque commande dans un tableau de bord.',
      metric: 'Même boutique, tout produit · 58 wilayas',
      challenge:
        'Les petits vendeurs en Algérie poussent souvent un produit à la fois et changent quand arrive le suivant. Reconstruire une boutique à chaque lancement est lent, et les commandes qui arrivent par message ou par e-mail se perdent avant que quelqu’un ne rappelle le client. Le vendeur ne tiendra pas non plus un catalogue : il y a un produit, il est toute la page, et quand le produit change la page change avec lui. Ce qui varie d’un lancement à l’autre, ce n’est pas la mise en page mais les conditions commerciales — ce que coûte la chose, comment ce coût se calcule, et quelle livraison est incluse — donc ce sont ces parties-là qui doivent être de la configuration et non du code.',
      approach: 'La boutique est pensée pour un produit à la fois : une galerie, un bloc prix et un formulaire de commande côte à côte sur ordinateur, empilés sur mobile. Le produit, sa règle de prix et l’offre de livraison changent à chaque lancement : la même page a vendu un coffret beauté à 5 900 DA avec livraison offerte, et une isolation de véhicule à 750 DA le mètre carré, 700 DA au-delà de dix, livraison au bureau ou à domicile en plus. L’étape adresse couvre les 58 wilayas et leurs baladiyat, et le téléphone est validé au format algérien avant d’accepter la commande. Les commandes sont enregistrées dans Firestore, et une page d’administration protégée par Firebase Auth les liste avec les commandes en attente, terminées et le total des ventes.',
      result:
        'Une boutique que l’on peut pointer rapidement vers un nouveau produit, avec toutes les commandes au même endroit plutôt que dispersées dans des messages. Parce que la tarification est une règle et non un nombre, la même page a déjà vendu un article au prix unitaire et un autre au mètre carré avec un palier de volume, sans qu’aucun des deux soit un cas particulier écrit pour lui. Pointer la boutique vers le produit suivant est un changement de contenu : c’est la différence entre un lancement qui a lieu cette semaine et un lancement qui attend qu’un développeur se libère.',
      outcomes: [
        'Une vitrine réutilisée pour des produits et des règles de prix différents',
        'Prix forfaitaire et prix au mètre carré, avec un palier de volume',
        'Tarification exprimée comme une règle : un nouveau lancement est de la configuration, pas du code',
        'Sélection complète de la wilaya et de la baladiya sur les 58 wilayas',
        'Validation des numéros de téléphone algériens à l’envoi',
        'Tableau de bord d’administration avec statut des commandes et total des ventes',
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
      metaTitle: 'Gensior : services pharmaceutiques en allemand',
      summary: 'Un site germanophone pour un cabinet de conseil pharmaceutique spécialisé dans la gestion des eaux thermales, avec catalogue produits et prise de contact.',
      metric: 'Catalogue + contact, sans serveur',
      challenge:
        'Un cabinet de conseil en environnement réglementé a besoin d’un site qui inspire confiance à des pharmaciens et à des communes, présente une gamme de produits et reçoit les demandes, sans monter un backend à maintenir. L’audience est étroite et experte : embouteilleurs, sources thermales et services des eaux municipaux, qui jugeront le cabinet dès le premier paragraphe à la justesse du vocabulaire de la personne qualifiée et de l’audit BPF, en allemand. Une prose d’agence générique échoue immédiatement à ce test. La seconde contrainte est plus discrète : le cabinet, c’est une consultante, donc ce qui est construit doit continuer de fonctionner des années sans personne pour l’exploiter — ce qui écarte la réponse habituelle, un CMS avec une administration à corriger et une base à sauvegarder.',
      approach:
        'Construit comme une application React monopage sur Vite, avec les pages de services, le catalogue produit et le panier en composants distincts et Framer Motion pour les transitions : passer d’une section à l’autre ne coûte aucun aller-retour et se lit comme un geste voulu plutôt que comme des pages qui se rechargent. Le chemin de contact et de commande passe par une fonction Netlify plutôt que par un serveur, et elle existe pour une seule raison : la clé d’API du service d’e-mail doit vivre ailleurs que dans le navigateur, et une fonction est la plus petite chose qui convienne. Tout le reste est du fichier statique sur un CDN. Le texte allemand est organisé autour de la promesse réelle du cabinet — sécurité, conformité et qualité, de la source jusqu’à la libération — et non autour d’une liste de fonctionnalités.',
      result:
        'Un site qui présente le cabinet et ses produits en allemand et achemine les demandes vers l’équipe, déployé sans infrastructure à exploiter. Toute la surface dont un mainteneur doit se soucier est un dépôt Git et une variable d’environnement. Il n’y a pas de serveur qui puisse rester sans correctif, pas d’administration à compromettre, pas de base à restaurer — ce qui, pour un cabinet d’une personne, n’est pas tant une économie que la différence entre un site qui fonctionne encore dans trois ans et un site qui s’est arrêté sans bruit.',
      outcomes: [
        'Sections services, à propos et produits en allemand',
        'Catalogue produit avec un parcours de panier',
        'Application monopage : changer de section ne coûte aucun aller-retour',
        'Demandes traitées par une fonction serverless, seul endroit où une clé d’API peut vivre',
        'Pas de base de données, pas d’administration, rien à corriger périodiquement',
        'Déploiement statique, aucun serveur à maintenir',
      ],
      images: [
        { alt: 'Page d’accueil Gensior : accroche services pharmaceutiques sur une image d’eau', caption: 'Accueil : positionnement sur la gestion des eaux thermales' },
      ],
    },
    'focuslock': {
      tag: 'Productivité · Desktop',
      title: 'Focus Lock : méritez votre temps de jeu',
      metaDescription: 'Une application Windows qui garde jeux et applications verrouillés tant que les tâches du jour ne sont pas faites.',
      summary: 'Une application Windows qui garde les jeux et les applications choisies verrouillés tant que les tâches du jour ne sont pas faites, avec XP et niveaux à la clé.',
      metric: 'Verrouillage par tâches, XP et niveaux',
      challenge:
        'Les bloqueurs qui se contentent d’interdire une application sont désactivés en une semaine. Le comportement ne tient que si ce qui est bloqué peut être regagné. Tous les bloqueurs échouent de la même façon : ils fonctionnent tant que dure la nouveauté, puis l’utilisateur les désactive, parce que la seule chose entre lui et le jeu est sa propre volonté et que le logiciel s’est posé en adversaire. Durcir l’application du blocage n’y change rien — sur sa propre machine, on finit toujours par gagner cette dispute. Ce qui survit, c’est de changer la nature de la récompense : quelque chose que l’on gagne plutôt que quelque chose dont on est privé.',
      approach:
        'Focus Lock inverse le bloqueur habituel : au lieu d’interdire les jeux, il les garde derrière la liste de tâches et les libère quand le travail est fait. Le cadrage est donné dès la première ligne de l’interface — gagnez votre temps de jeu — et le mode focus est un bouton que l’on presse, pas un horaire imposé, ce qui laisse l’utilisateur auteur de la contrainte plutôt que son sujet. Les tâches portent une priorité et rapportent de l’XP à la validation, ce qui alimente des niveaux et des accomplissements. Trois compteurs surmontent la liste : niveau courant, progression d’XP, et tâches faites sur celles du jour, de sorte que l’état de la barrière est visible avant de commencer plutôt que découvert au moment où quelque chose refuse de se lancer. C’est une application Electron avec un rendu React et TypeScript, l’état dans Zustand, et SQLite pour un stockage local durable : rien ne quitte la machine.',
      result:
        'Une version Windows fonctionnelle, publiée sous licence MIT avec un guide de contribution et un code de conduite. L’open source est la bonne valeur par défaut pour cet outil-là : un logiciel qui décide de ce que vous avez le droit de lancer sur votre propre ordinateur est un logiciel que vous devriez pouvoir lire. Il n’y a par ailleurs ni compte, ni synchronisation, ni serveur — donc rien qui puisse être injoignable au moment précis où vous voulez débloquer quelque chose, une panne qui détruirait définitivement la confiance dans un outil de productivité.',
      outcomes: [
        'Liste de tâches avec priorités et suivi d’achèvement',
        'XP, niveaux et accomplissements liés au travail terminé',
        'Mode focus qui verrouille les applications sélectionnées',
        'Trois compteurs au-dessus de la liste : niveau, progression d’XP, tâches du jour',
        'Mode focus lancé volontairement, pas imposé par un horaire',
        'Stockage local SQLite, sans compte ni synchronisation',
        'Open source sous licence MIT, avec un guide de contribution',
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
      metaTitle: 'Djalil Location : tableau de bord pour loueur',
      metaDescription: 'Application Windows hors-ligne d’abord pour une agence de location : flotte, clients, réservations et disponibilité en local.',
      summary:
        'Une application de bureau Windows hors-ligne d’abord pour une agence de location : flotte, clients, réservations et disponibilité sur une base locale, pour que le comptoir continue de tourner sans connexion.',
      metric: 'Hors-ligne d’abord · double réservation bloquée deux fois',
      challenge:
        'Une agence de location tourne sur un comptoir, pas sur un cloud. Le système doit s’ouvrir instantanément, continuer à fonctionner quand la connexion tombe, et garder les données clients et contrats sur une machine que le propriétaire contrôle plutôt que sur le serveur d’un tiers. L’erreur coûteuse dans ce métier, c’est de louer deux fois la même voiture sur les mêmes heures : les règles de réservation doivent tenir même quand deux réservations sont saisies à quelques minutes d’intervalle.',
      approach:
        'Construit en Electron avec une interface Vue 3 et SQLite sur disque, accessible via une couche IPC typée protégée par un verrou, afin que le rendu ne touche jamais directement la base. L’accès est tenu par le propriétaire : mot de passe défini au premier lancement, hachage Argon2, code de récupération écrit, limitation à cinq tentatives, et verrouillage automatique à l’inactivité ou au verrouillage de Windows. Le chevauchement est vérifié deux fois — en direct dans le formulaire de réservation, qui nomme la réservation ou la période d’entretien en conflit et garde le bouton Enregistrer désactivé, puis de nouveau à l’intérieur de la transaction d’écriture. La règle est semi-ouverte à la minute : une voiture rendue à 10:00 peut repartir à 10:00. La disponibilité est une frise dont les barres sont placées à la minute, avec une plage de dates conservée dans l’URL. Les sauvegardes tournent en local chaque jour et vers n’importe quel stockage compatible S3, compressées et chiffrées en AES-256-GCM avant de quitter la machine.',
      result:
        'Les six phases sont en place : la coquille applicative et la base, les voitures et les clients, les réservations avec protection contre le chevauchement, la disponibilité et le tableau de bord, les réglages et les sauvegardes, et un installeur par utilisateur signé avec mises à jour en arrière-plan. Le chemin de sauvegarde cloud est testé contre un serveur local parlant S3 ; il n’a pas encore tourné contre un compte réel chez un fournisseur.',
      outcomes: [
        'Fonctionne hors ligne sur une base SQLite locale',
        'Double réservation bloquée deux fois : en direct dans le formulaire, puis dans la transaction d’écriture',
        'Frise de disponibilité à la minute, avec la date à laquelle chaque voiture se libère',
        'Arabe, français et anglais avec une vraie mise en page RTL, thèmes clair et sombre',
        'Sauvegardes locales quotidiennes et copies cloud chiffrées compatibles S3, restaurées via un redémarrage protégé',
        'Installeur Windows par utilisateur avec mises à jour automatiques en arrière-plan',
      ],
      images: [
        { alt: 'Tableau de bord propriétaire en français : compteurs de flotte, prochaines réservations, départs et retours du jour, état de la flotte en direct', caption: 'Le tableau de bord : flotte, revenu du mois, et ce qui bouge aujourd’hui' },
        { alt: 'Grille de la flotte en français avec filtres par catégorie et une pastille de statut sur chaque voiture', caption: 'La flotte, filtrée par catégorie, chaque voiture marquée libre, louée ou en entretien' },
        { alt: 'Le même écran de flotte en arabe, inversé de droite à gauche avec la barre latérale à droite', caption: 'Le même écran en arabe, inversé de droite à gauche' },
        { alt: 'Écran de disponibilité avec périodes prédéfinies et une frise des réservations par voiture sur quatre jours', caption: 'Disponibilité : périodes, frise par voiture, et quand chaque voiture se libère' },
        { alt: 'Fenêtre de nouvelle réservation avec client, voiture, dates et heures, une confirmation verte que la voiture est libre, et un total estimé', caption: 'Le formulaire de réservation : la vérification de conflit tourne au fil des dates' },
        { alt: 'Page de détail d’une réservation avec un parcours de statut en trois étapes, les fiches client et voiture, les dates et le montant', caption: 'Une réservation : parcours de statut, client, voiture et montant' },
        { alt: 'Le même tableau de bord en mode sombre', caption: 'Le même tableau de bord en mode sombre' },
      ],
    },
  },
};

export default fr;
