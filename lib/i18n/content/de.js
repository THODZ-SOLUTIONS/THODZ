// German content overlay. Lists mirror the order of lib/content.js and carry
// only the translatable fields; case studies are keyed by slug. Structural
// data (slugs, stacks, images, links) lives once, in lib/content.js.

const de = {
  services: [
    { title: 'Webentwicklung', description: 'Full-Stack-Anwendungen und Marketing-Websites, gebaut für Wachstum, von React-Frontends bis zu Postgres-gestützten APIs.' },
    { title: 'Mobile Apps', description: 'Native iOS-/Android- und plattformübergreifende Apps, die im Store landen, nicht nur in einer Figma-Datei.' },
    { title: 'Desktop-Software', description: 'Plattformübergreifende Desktop-Werkzeuge für interne Abläufe, Technik und regulierte Umgebungen.' },
    { title: 'DevOps', description: 'CI/CD, Container-Orchestrierung und Infrastructure as Code, mit Deploys im Minutenbereich.' },
    { title: 'Cybersicherheit', description: 'Bedrohungsmodellierung, Härtung und eine von Grund auf sichere Architektur für Teams, die sich keinen Vorfall leisten können.' },
    { title: 'KI-/ML-Lösungen', description: 'Angewandtes ML: Empfehlungen, Prognosen und LLM-gestützte Abläufe, in Produktion gebracht.' },
    { title: 'Automatisierung', description: 'Manuelle Abläufe durch robuste Pipelines ersetzen: Datenabgleich, Reporting, interne Werkzeuge.' },
    { title: 'UI/UX-Design', description: 'Oberflächen, entworfen für die Menschen, die täglich damit arbeiten, nicht nur für die Demo.' },
    { title: 'Projektberatung', description: 'Technische Due Diligence, Architekturprüfung und Roadmap-Planung für Führungsteams.' },
  ],

  process: [
    { title: 'Erfassen', description: 'Umfang, Randbedingungen und Erfolgskriterien: ein kurzes technisches Audit, kein Vertriebsdeck.' },
    { title: 'Entwerfen', description: 'Systemdesign, Risikoregister und ein Lieferplan, den Ihr Team Zeile für Zeile prüfen kann.' },
    { title: 'Bauen', description: 'Iterative Lieferung in wöchentlichen Schritten, ab der ersten Woche auf einer Staging-Umgebung sichtbar.' },
    { title: 'Ausliefern', description: 'Produktiv-Rollout mit Rollback-Plan, Monitoring und einem Betriebshandbuch, das bei Ihrem Team bleibt.' },
    { title: 'Begleiten', description: 'Rufbereitschaft und Wartungsvertrag, oder eine saubere Übergabe. Sie entscheiden.' },
  ],

  values: [
    { title: 'Ein Team, das geradesteht', description: 'Keine Übergaben zwischen Fremden. Wer Ihr Projekt kalkuliert, liefert es auch.' },
    { title: 'Dokumentiert von Haus aus', description: 'Architekturentscheidungen, Betriebshandbücher und API-Verträge stehen schriftlich fest und nicht nur in jemandes Kopf.' },
    { title: 'Auf Übergabe gebaut', description: 'Jeder Auftrag endet damit, dass Ihr Team das System ohne uns betreiben kann, ob Sie uns weiter beauftragen oder nicht.' },
  ],

  team: [
    {
      role: 'Gründer & technischer Leiter',
      bio: 'Hatem kalkuliert und leitet jeden Auftrag von THODZ. Sein Hintergrund liegt in Kryptografie und Systemsicherheit, und er hat als technischer Leiter in Web-, Mobile- und angewandten ML-Projekten gearbeitet: genau die drei Bereiche, in denen die meisten THODZ-Projekte landen.',
      credentials: [
        'Master in Kryptografie & Informationssicherheit',
        'Technischer Leiter in Web-, Mobile- und angewandten ML-Projekten',
        'Arbeitet auf Französisch, Englisch und Arabisch',
      ],
    },
  ],

  engagements: [
    {
      name: 'Festpreisprojekt',
      placeholderPrice: 'Ab 6.000 €',
      bestFor: 'Ein definiertes System mit bekanntem Umfang: eine Produktentwicklung, ein Neuaufbau, eine Migration.',
      billing: 'Nach Meilensteinen. Eine Anzahlung zum Start, der Rest verteilt auf vereinbarte Liefermeilensteine.',
      includes: [
        'Erfassungs-Audit und schriftlicher Leistungsumfang',
        'Architekturdokument und Risikoregister',
        'Wöchentliche Zwischenstände auf einer Staging-Umgebung',
        'Betriebshandbuch und Übergabe bei Lieferung',
        '30 Tage Fehlerbehebung nach dem Launch',
      ],
    },
    {
      name: 'Monatliches Kontingent',
      placeholderPrice: 'Ab 2.500 € / Monat',
      bestFor: 'Laufende Produktarbeit mit beweglichem Umfang: eine Roadmap statt eines einzelnen Ergebnisses.',
      billing: 'Eine feste Monatspauschale für eine vereinbarte Kapazität. Kündbar mit 30 Tagen Frist.',
      includes: [
        'Vereinbarte Entwicklungskapazität pro Monat',
        'Roadmap-Planung und Priorisierung',
        'Kontinuierliche Lieferung in Ihre Umgebungen',
        'Direkter Draht zu den Menschen, die es bauen',
        'Monatliche schriftliche Fortschrittsübersicht',
      ],
    },
    {
      name: 'Support & Betrieb',
      placeholderPrice: 'Ab 600 € / Monat',
      bestFor: 'Ein System, das bereits produktiv läuft, Ihres oder unseres: gepatcht, überwacht und am Leben gehalten.',
      billing: 'Eine feste Monatspauschale je nach Reaktionsstufe. Keine Mindestlaufzeit über die ersten drei Monate hinaus.',
      includes: [
        'Monitoring, Alarmierung und Pflege der Abhängigkeiten',
        'Vereinbartes Reaktionsfenster bei Störungen',
        'Kleine Änderungen und Korrekturen innerhalb eines Monatskontingents',
        'Quartalsweise Sicherheits- und Abhängigkeitsprüfung',
        'Eskalationsweg zum ursprünglichen Entwicklungsteam',
      ],
    },
    {
      name: 'Beratung & Audit',
      placeholderPrice: 'Ab 1.200 €',
      bestFor: 'Sie brauchen eine Entscheidung, keine Entwicklung: Architekturprüfung, technische Due Diligence, eine zweite Meinung.',
      billing: 'Festpreis für einen definierten Auftrag, oder ein Tagessatz für laufende Beratung.',
      includes: [
        'Prüfung von Codebasis und Architektur',
        'Bewertung von Sicherheit und Infrastruktur',
        'Schriftliche Befunde mit priorisierten Maßnahmen',
        'Vorstellung der Ergebnisse vor Ihrem Team oder Gremium',
      ],
    },
  ],

  faq: [
    {
      q: 'Wem gehört der Code, den Sie schreiben?',
      a: 'Ihnen. Mit der Schlusszahlung gehen sämtlicher Quellcode, alle Designs und die Dokumentation, die für Ihr Projekt entstanden sind, vollständig auf Sie über, einschließlich der Repository-Historie. Wir behalten keine Lizenz an Ihrem Produkt und verwenden Ihren Code nicht im System eines anderen Kunden wieder. Wo ein Projekt Open-Source-Komponenten nutzt, gelten deren eigene Lizenzen weiter, und wir führen jede einzelne in der Übergabedokumentation auf.',
    },
    {
      q: 'Wie läuft die Abrechnung?',
      a: 'Festpreisprojekte werden gegen Liefermeilensteine abgerechnet: eine Anzahlung zum Start, dann der Rest, sobald jeder Meilenstein abgenommen ist. Kontingente und Supportpläne werden monatlich im Voraus abgerechnet. Rechnungen sind in EUR, USD oder DZD per Überweisung zahlbar. Jede Rechnung nennt genau, was sie abdeckt.',
    },
    {
      q: 'Was deckt der Vertrag ab?',
      a: 'Eine schriftliche Vereinbarung, bevor irgendeine Arbeit beginnt, über Leistungsumfang, Meilensteine, Zahlungsbedingungen, Übertragung der Rechte, Vertraulichkeit und darüber, wie beide Seiten den Auftrag beenden können. Änderungswünsche werden angeboten und schriftlich vereinbart, bevor sie gebaut werden. So wächst der Umfang nie still und leise in Ihre Rechnung hinein.',
    },
    {
      q: 'Unterschreiben Sie eine Geheimhaltungsvereinbarung?',
      a: 'Ja, und wir unterschreiben Ihre, statt auf unserer zu bestehen. Setzen Sie im Kontaktformular das Häkchen bei der Geheimhaltungsvereinbarung, und wir regeln das, bevor Sie uns etwas Sensibles schicken. Jeder Auftrag unterliegt beidseitiger Vertraulichkeit, ob eine gesonderte Vereinbarung unterzeichnet wird oder nicht.',
    },
    {
      q: 'Was passiert nach dem Launch?',
      a: 'Jedes Projekt wird mit einem Betriebshandbuch, einem Architekturdokument und einer Übergabesitzung geliefert, damit Ihr Team das System ohne uns betreiben kann. Festpreisprojekte enthalten 30 Tage Fehlerbehebung nach dem Launch. Danach können Sie zu einem Supportplan wechseln oder alles vollständig selbst übernehmen: Beides sind normale Enden, und wir halten Ihre Infrastruktur nicht fest, um Sie zu halten.',
    },
    {
      q: 'Wie schnell antworten Sie?',
      a: 'Innerhalb eines Werktags nach Ihrer ersten Nachricht, von einer Entwicklerin oder einem Entwickler und nicht von einem Vertriebsteam. Ein erstes Gespräch zur Klärung des Umfangs findet danach meist noch in derselben Woche statt.',
    },
    {
      q: 'Wo sitzen Sie, und welche Zeitzonen decken Sie ab?',
      a: 'Wir sitzen in Algier, Algerien (UTC+1) und arbeiten remote mit Kunden in Europa, dem Nahen Osten und Nordamerika. Unsere Arbeitszeiten decken den gesamten europäischen Arbeitstag ab und den größten Teil des Vormittags an der US-Ostküste.',
    },
    {
      q: 'In welchen Sprachen arbeiten Sie?',
      a: 'Französisch, Englisch und Arabisch. Das gilt für Besprechungen, schriftliche Dokumentation und das Produkt selbst: Wir bauen mehrsprachige Oberflächen, einschließlich rechtsläufiger Layouts für Arabisch, als normalen Teil der Lieferung und nicht als Aufsatz.',
    },
  ],

  disciplines: ['Web', 'Mobile', 'Desktop', 'DevOps', 'Cybersicherheit', 'KI / ML', 'Automatisierung', 'UI/UX', 'Beratung'],

  problems: [
    {
      title: 'Ich will online verkaufen oder Buchungen annehmen',
      build: 'Ein Shop oder eine Buchungsplattform mit Online- und Nachnahmezahlung, Lieferkostenberechnung und einer Verwaltung, die Ihr Team allein bedient.',
      gets: ['Katalog, Warenkorb und Kasse', 'Verwaltung für Bestellungen, Bestand und Preise', 'Hosting, Backups und Monitoring'],
      first: 'Ein 30-Minuten-Gespräch, dann ein schriftlicher Umfang in Woche eins.',
      refLabel: 'SADJIA CERAM: Katalog + Live-Preisrechner',
    },
    {
      title: 'Unsere Abläufe laufen noch über Tabellen und Telefonate',
      build: 'Ein internes Werkzeug für das, was Sie heute von Hand erfassen (Bestellungen, Sendungen, Rechnungen, Personal), mit eingebauten Auswertungen.',
      gets: ['Desktop- oder Webanwendung, Sie entscheiden', 'Rechnungsstellung und Auswertung an einem Ort', 'Rollen, damit jede Person ihren Teil sieht'],
      first: 'Wir sehen uns an, wie Ihr Team heute arbeitet, und bilden es ab.',
      refLabel: 'Distributions-Dashboard: Desktop + Web, eine Codebasis',
    },
    {
      title: 'Wir haben eine App-Idee und brauchen sie im Store',
      build: 'Ihr Produkt von der Idee bis in den App Store und zu Google Play: iOS, Android und Web aus einer Codebasis.',
      gets: ['Klickbares Design vor dem Code', 'Wöchentliche Builds, die Sie installieren können', 'Veröffentlichung im Store inklusive'],
      first: 'Eine Sitzung, um Version eins auf das Wesentliche zu kürzen.',
      refLabel: 'Little Hafiz: Flutter-App, funktioniert offline',
    },
    {
      title: 'Unser System ist langsam, fragil oder unsicher',
      build: 'Ein Audit, dann eine schriftliche Entscheidung: reparieren, was da ist, oder neu bauen, gefolgt von Härtung, CI/CD und Monitoring.',
      gets: ['Sicherheits- und Performance-Audit', 'Priorisierte Maßnahmenliste mit Kosten', 'Automatische Deploys und Alarme'],
      first: 'Lesender Zugang und ein kurzer Auditbericht.',
      refLabel: null,
    },
    {
      title: 'Wir wollen KI dort einsetzen, wo sie wirklich hilft',
      build: 'KI, eingebaut in einen echten Arbeitsablauf, mit menschlichem Freigabeschritt: entwerfen, einordnen, prognostizieren oder empfehlen.',
      gets: ['Ein Ablauf, vorher und nachher gemessen', 'Menschliche Prüfung an der entscheidenden Stelle', 'Ihre Daten bleiben unter Ihrer Kontrolle'],
      first: 'Einen Ablauf auswählen und festlegen, was „besser“ bedeutet.',
      refLabel: 'Plattform für chronische Erkrankungen: KI entwirft, Ärzte geben frei',
    },
    {
      title: 'Wir brauchen eine zweite technische Meinung',
      build: 'Eine unabhängige Prüfung einer Architektur, eines Anbieterangebots oder einer Codebasis, schriftlich und in klarer Sprache.',
      gets: ['Architektur- und Code-Review', 'Risiken nach Auswirkung sortiert', 'Eine Roadmap, der Ihr Team folgen kann'],
      first: 'Teilen Sie, was Sie haben; wir bestätigen Umfang und Preis.',
      refLabel: null,
    },
  ],

  timeline: [
    { title: 'Sie sprechen mit einer Entwicklerin oder einem Entwickler, nicht mit dem Vertrieb.', text: 'Wer Ihre Nachricht liest, versteht die Technik. Diese Person ruft Sie an, um Ihr Geschäft und Ihren Bedarf zu verstehen.' },
    { title: 'Ein klarer, schriftlicher Plan.', text: 'Wir sehen uns Ihr Projekt an und halten alles schriftlich fest: was wir bauen, was schiefgehen könnte und woran wir Erfolg messen. Keine vagen Versprechen.' },
    { title: 'Ein Festpreis.', text: 'Sie bekommen den vollständigen Plan und einen Festpreis. Nichts beginnt, bevor Sie zustimmen.' },
    { title: 'Probieren Sie es selbst aus, während wir bauen.', text: 'Früh im Projekt bekommen Sie eine private Fassung Ihres Produkts, die Sie öffnen und benutzen können. Sie wird regelmäßig aktualisiert, damit Sie Rückmeldung geben, solange Änderungen noch leicht und günstig sind.' },
    { title: 'Sicher in Betrieb gehen.', text: 'Wir bringen es für Ihre Kundinnen und Kunden live und beobachten es genau. Geht etwas schief, können wir in Minuten auf die vorherige Fassung zurückschalten, bevor Ihre Kundschaft es überhaupt bemerkt. Sie bekommen außerdem eine einfache Anleitung für den Betrieb.' },
    { title: 'Fehlerbehebung inklusive, danach entscheiden Sie.', text: 'Jeder Fehler nach dem Launch wird als Teil des Projekts behoben, innerhalb des enthaltenen Supportzeitraums. Danach behalten Sie uns für den Support, oder Sie übernehmen vollständig, mit allem übergeben.' },
  ],

  openSource: [
    {
      tagline: 'Ihre Kundschaft zahlt einmal. Nie zweimal.',
      description: 'Eine Kundin tippt auf „Bezahlen“, genau als die Verbindung abbricht. Ist die Zahlung durchgegangen? Die meisten Apps raten, und Raten bedeutet doppelte Abbuchungen, verärgerte Anrufe und Rückerstattungen. Unsere fragt bei Ihrem System nach und bekommt jedes Mal die echte Antwort. Ihr Geld und Ihr Ruf bleiben geschützt, auch beim schwächsten Empfang.',
    },
    {
      tagline: 'Aktuelle Daten, ohne Verzögerung.',
      description: 'Preise ändern sich, Bestände gehen zur Neige, Bestellungen werden aktualisiert. Die meisten Apps zeigen entweder veraltete Informationen oder laden so oft neu, dass sie den Akku leeren und träge werden. Unsere aktualisiert alles im richtigen Moment, in einem sauberen Durchgang. Ihre Kundschaft sieht immer den aktuellen Stand, und die App bleibt schnell.',
    },
    {
      tagline: 'Ihre Nachrichten kommen wirklich an.',
      description: 'Sie geben Geld aus, um Kundinnen und Kunden mit Aktionen, Erinnerungen und Bestellupdates zurückzuholen. Doch auf neueren Android-Geräten und iPhones verlieren viele Apps still das Recht, Mitteilungen zu senden, und diese Nachrichten kommen nie an. Unsere behandelt jeden Fall korrekt, sodass jede Nachricht, für die Sie zahlen, einen echten Menschen erreicht.',
    },
  ],

  caseStudies: {
    'sadjia-ceram': {
      tag: 'Handel · Web',
      title: 'SADJIA CERAM: digitaler Showroom',
      metaDescription: 'Digitaler Produktkatalog und Echtzeit-Preisrechner für einen Fliesenhändler in Oran, der telefonische Angebote ersetzt.',
      client: 'SADJIA CERAM, Es Senia, Oran',
      summary: 'Ein digitaler Produktkatalog und ein Echtzeit-Preisrechner für einen Fliesenhändler in Oran, der telefonische Angebote durch Selbstbedienung beim Stöbern und Kalkulieren ersetzt.',
      metric: 'Katalog, Rechner und Verwaltung aus einem Guss',
      before: 'Kundinnen und Kunden riefen im Laden an, um für jede Fliese und jedes Projekt einen Preis zu bekommen.',
      after: 'Sie durchsuchen den Katalog und bekommen selbst eine Echtzeitschätzung in DZD für ihren Raum.',
      challenge: 'SADJIA CERAM verkauft hochwertige Boden- und Wandfliesen aus einem Showroom in Es Senia, Oran. Jede Anfrage lief durch denselben Engpass: Jemand sah irgendwo eine Fliese, rief im Showroom an, beschrieb sie und wartete, während jemand ausrechnete, was ein ganzer Raum davon kosten würde. Weder Katalog noch Preise existierten irgendwo, wo Kundinnen und Kunden selbst hinkamen, also verbrachte das Team den Tag mit Telefonkalkulationen statt mit Verkaufen, und die Leute kamen ohne jede Budgetvorstellung.',
      approach: 'Wir haben den Showroom als Produkt gebaut, das man vor dem Anruf benutzen kann. Der Katalog lässt sich nach Kollektion, Fliesenmaß und Art filtern, sodass man auf die vier Fliesen eingrenzt, die infrage kommen, statt durch eine Tabelle zu scrollen. Jede Produktseite trägt die echten Maße und den echten Quadratmeterpreis. Darüber sitzt der Rechner: Fläche eingeben, mehrere Fliesen zu einem Projekt hinzufügen, und er liefert eine formatierte Summe in algerischen Dinar, berechnet nach denselben Regeln, die der Showroom von Hand anwendet. Dahinter erlaubt eine Verwaltungsoberfläche dem Team, Produkte anzulegen, Bilder hochzuladen und Maße und Preise zu ändern, ohne Code anzufassen oder auf uns zu warten. WhatsApp, Instagram und der Google-Maps-Standort des Showrooms sind auf jeder Seite verdrahtet, denn in diesem Markt endet die Anfrage auf WhatsApp, ob man es einplant oder nicht.',
      result: 'Der Showroom betreibt jetzt einen lebendigen Katalog und ein Kalkulationswerkzeug, das Kundinnen und Kunden nutzen, bevor sie überhaupt zum Hörer greifen, dazu eine Verwaltungsoberfläche, die das Team täglich bedient. Preisänderungen kosten eine Person eine Minute statt eines Anrufs bei einer Entwicklerin, was in einer Kategorie zählt, in der sich der Quadratmeterpreis mit dem Wechselkurs bewegt.',
      outcomes: [
        'Selbstbedienungskatalog mit Filtern nach Maß, Art und Kollektion',
        'Echtzeit-Projektrechner mit Quadratmeterpreis, formatiert in DZD',
        'Verwaltung für Produkte, Bilder, Maße und Preise',
        'WhatsApp, soziale Netzwerke und Maps zum echten Showroom auf jeder Seite',
        'Responsiv auf Smartphone, Tablet und Desktop',
      ],
      images: [
        { alt: 'Startseite von SADJIA CERAM: Kollektionen und hervorgehobene Produkte mit Quadratmeterpreis', caption: 'Start: Kollektionen und hervorgehobene Produkte, mit Preis pro m²' },
        { alt: 'Produktkatalog, gefiltert nach Fliesenmaß und Art', caption: 'Katalogfilter nach Maß und Art' },
        { alt: 'Produktdetailseite einer Fliese mit Maßen und Preis', caption: 'Produktdetail mit Maßen und Preis' },
        { alt: 'Verwaltungsoberfläche zum Pflegen von Produkten, Maßen und Preisen', caption: 'Die Oberfläche, die das Showroom-Team täglich bedient' },
      ],
    },
    'logistics-dashboard': {
      tag: 'Logistik · Desktop',
      title: 'Dashboard für Logistik- und Distributionsmanagement',
      metaDescription: 'Ein Desktop- und Web-Dashboard zur Verfolgung von Transport- und Distributionsabläufen, nativ und als Webanwendung.',
      summary: 'Ein Desktop- und Web-Dashboard zur Verfolgung von Transport- und Distributionsabläufen, als native App und zugleich als Supabase-gestützte Webanwendung ausgeliefert.',
      metric: 'Desktop und Web aus einer Codebasis',
      before: 'Transport und Distribution wurden über getrennte Werkzeuge und Tabellen verfolgt.',
      after: 'Eine native App, dazu eine Webfassung aus derselben Codebasis, verfolgt alles.',
      challenge:
        'Ein Transport- und Distributionsbetrieb brauchte ein System für Fuhrpark, Lieferungen und die finanzielle Seite, lieferbar sowohl als installiertes Desktop-Werkzeug als auch als gehostete Webanwendung. Die finanzielle Seite ist die, die üblicherweise entwischt: Fahrten werden an einer Stelle disponiert, Fahrervorschüsse an einer anderen abgerechnet, Lieferantenrechnungen kommen auf Papier, und was ein Kunde tatsächlich schuldet, wird zum Monatsende aus mehreren Tabellen rekonstruiert, die sich widersprechen. Niemand kann die einzige Frage beantworten, auf die es ankommt: wie viel Geld gerade im Betrieb ist und wer den Rest hält. Der Fuhrpark ist sichtbar; das Geld nicht.',
      approach:
        'Wir haben das Dashboard einmal in Vite und TypeScript gebaut und zweifach ausgeliefert: als Electron-Build für installierte, netzunabhängige Nutzung und als Supabase-gestützte Webanwendung, aus derselben Codebasis und derselben Datenschicht. Das Geld ist als Abstimmung modelliert, nicht als Bericht: Der Kassenbestand wird aus den Einzahlungen der Kunden abgeleitet, minus Zahlungen an Fahrer, minus Zahlungen an Lieferanten, minus Betriebsausgaben, und die Zahl wird als diese Gleichung gezeigt statt als Summe — so lässt sich eine Zahl, die falsch aussieht, bis zu der Seite verfolgen, die sich bewegt hat. Daneben stehen Kundenkonten mit fakturiert, vereinnahmt, offen und vorausbezahlt; die Abrechnung der Fahrerkonten; die Lieferantenkonten; und die übrigen Fuhrparkkosten, jeweils nach Zeitraum filterbar. Die Oberfläche ist durchgehend arabisch und von rechts nach links gesetzt.',
      result:
        'Ein einziges Dashboard für die Distributionsabläufe und die Finanzen darunter, verpackt für Installation wie für den Browser, in dem der Kassenbestand eine abgeleitete Größe ist, die eine Leitung prüfen kann, und keine Zahl, die jemand eingetippt hat. Vorschüsse und Außenstände stehen am Kundendatensatz statt in einem eigenen Buch, also hat die Frage „was schuldet uns dieser Kunde“ eine Antwort, und sie ist auf beiden Builds dieselbe. Der Monatsabschluss hört auf, eine Rekonstruktion zu sein.',
      outcomes: [
        'Eine TypeScript-Codebasis, zwei Auslieferungsziele',
        'Electron-Build für installierte, lokal-zuerst Nutzung',
        'Supabase-gestützte Webanwendung mit derselben Datenschicht',
        'Kassenbestand als Gleichung abgeleitet, bis zur auslösenden Buchung verfolgbar',
        'Kundenkonten mit fakturiert, vereinnahmt, offen und vorausbezahlt',
        'Fahrerabrechnung und Lieferantenkonten im selben Zeitraumfilter',
        'Arabische Oberfläche, durchgehend von rechts nach links',
      ],
      images: [
        { alt: 'Vereinheitlichtes Finanz-Dashboard mit Cashflow, Kundensalden und Fahrerabrechnungen', caption: 'Das vereinheitlichte Dashboard: Cashflow, Kundenkonten, Fahrerabrechnungen' },
      ],
    },
    'ability-beyond-disability': {
      tag: 'Gesellschaft · Web',
      title: 'Ability Beyond Disability',
      client: 'رغم إعاقتي أبدع: landesweite Talentschau, Algerien',
      summary: 'Eine zweisprachige Seite (Arabisch/Englisch), die Talente und Leistungen von Menschen mit Behinderung in ganz Algerien zeigt.',
      metric: 'Landesweite Talentschau',
      before: 'Talentierte Menschen mit Behinderung in ganz Algerien hatten keine gemeinsame Bühne.',
      after: 'Eine zweisprachige arabisch-englische Seite, die ihre Talente und Leistungen landesweit zeigt.',
      challenge:
        'Menschen mit Behinderung in Algerien brauchten eine öffentliche Plattform für ihre kreative und berufliche Arbeit: eine, die sich wie ein sorgfältiges Schaufenster liest und nicht wie eine Wohltätigkeitsseite. Diese Unterscheidung ist der ganze Auftrag, und sie entscheidet sich vor allem in Gestaltungsentscheidungen, nicht in Worten. Eine Wohltätigkeitsseite stellt die Not voran, nutzt weiche Farben und Stockfotos und setzt einen Spendenknopf dorthin, wo die Arbeit stehen sollte. Ein Schaufenster stellt die Arbeit voran, nennt die Person und ihre Fachrichtung so, wie es eine Portfolioseite täte, und behandelt den Lesenden als jemanden, der sie beauftragen könnte. Das Zweite ist schwerer, denn es verlangt, dass das Material für sich steht.',
      approach:
        'Wir haben eine zugängliche, visuell ansprechende statische Seite gestaltet: eine Talentgalerie mit Fachrichtung und Ort je Person, nationale Kennzahlen zu erfassten Talenten und vertretenen Wilayas, einen Veranstaltungsbereich für Workshops und Ausstellungen und eine Newsletter-Anmeldung. Die Galerie ist die Seite: Jede Karte trägt einen Namen, eine Fachrichtung, eine Wilaya und Schlagworte — genau die Angaben, die ein Besucher braucht, um jemanden ernst statt mitleidig zu nehmen. Die nationalen Zähler stehen unter dem Kopfbereich als Kontext, nicht als Argument. Gebaut, um ohne Backend schnell zu laden, und auf Arabisch wie auf Englisch geschrieben, damit es in beiden Sprachen nativ liest statt als Übersetzung der jeweils anderen.',
      result:
        'Eine erreichbare, zugängliche Schaufensterseite, die Talente aus allen Wilayas Algeriens zeigt. Ohne Backend gibt es nichts am Laufen zu halten und nichts, das an dem Tag ausfallen kann, an dem eine Ausstellung Besucher schickt — was für eine Plattform zählt, deren stärkste Momente die ungeplanten sind. Die Seite ist zudem günstig genug, um sie unbegrenzt zu hosten, und das ist für ein Gemeinschaftsprojekt kein Detail: Die, die verschwinden, verschwinden meist, weil jemand aufgehört hat, einen Server zu bezahlen, nicht weil das Material ausging.',
      outcomes: [
        'Talentgalerie mit Fachrichtung, Ort und Schlagworten je Person',
        'Nationale Kennzahlen: erfasste Talente, Wilayas, Werke, Veranstaltungen',
        'Veranstaltungsbereich für Workshops, Ausstellungen und Wettbewerbe',
        'Nativ auf Arabisch und Englisch geschrieben, nicht aus einer Sprache übersetzt',
        'Statischer Build: nichts zu betreiben, nichts, das an einem starken Tag ausfällt',
        'Zweisprachig Arabisch/Englisch, ohne Backend-Abhängigkeit',
      ],
      images: [
        { alt: 'Startseite von Ability Beyond Disability: Aufmacher, Talent der Woche und landesweite Zahlen', caption: 'Start: Talent der Woche und darunter die landesweiten Zähler' },
        { alt: 'Karten der Talentgalerie mit Fachgebiet, Provinz und Schlagworten', caption: 'Die Galerie: Fachgebiet, Provinz und Schlagworte je Person' },
        { alt: 'Veranstaltungsbereich mit Workshops, Ausstellungen und Wettbewerben', caption: 'Veranstaltungen: Workshops, Ausstellungen und Wettbewerbe' },
      ],
    },
    'little-hafiz': {
      tag: 'EdTech · Mobile',
      title: 'Little Hafiz: App zum Auswendiglernen des Korans',
      metaDescription: 'Flutter-App zum Auswendiglernen des Korans, mit versweisem Hören, Fortschritt und einer installierbaren Webfassung.',
      summary: 'Eine Flutter-App zum Auswendiglernen des Korans für Kinder und Erwachsene, mit versweisem Hören, Fortschrittsverfolgung und einer installierbaren Webfassung, die offline funktioniert.',
      metric: 'Web, iOS und Android aus einer Codebasis',
      before: 'Das Auswendiglernen hing davon ab, dass eine Lehrperson oder ein gedrucktes Exemplar in der Nähe war.',
      after: 'Versweises Hören und Fortschrittsverfolgung auf jedem Telefon, auch offline.',
      challenge:
        'Apps zum Auswendiglernen des Korans gibt es viele, aber nur wenige sind eigens für Kinder gebaut, mit einem Fortschritt, dem Eltern wirklich folgen können. Eine Kinder-App hat Zwänge, die eine Erwachsenen-App nicht hat: Der Startbildschirm muss Ziele bieten statt eines Menüs, die Flächen müssen zu einer Sechsjährigenhand passen, und nichts darf einen Fehlgriff bestrafen. Die Eltern brauchen einen Zugang, in den das Kind nicht hineinstolpert. Und Audio ist hier keine Funktion, sondern das Produkt: Auswendiglernen geschieht durch Hören und Wiederholen, also verschlechtert eine Vers-Pause zum Nachladen die Sitzung nicht, sie beendet sie — und die Orte, an denen solche Apps genutzt werden, sind nicht verlässlich online. Ein Kind wiederholt einen fehlgeschlagenen Ladevorgang nicht; es legt das Telefon weg.',
      approach:
        'Eine einzige Flutter-Codebasis deckt alles ab: versweises Hören, mehrere Lernmethoden, Fortschrittsverfolgung und Builds für iOS, Android und Web aus derselben Quelle. Der Startbildschirm zeigt vier Ziele statt eines Menüs — eine Sure lernen, hören und wiederholen, Spiele und Elternmodus hinter einem Schloss — auf Arabisch, von rechts nach links, mit Flächen in Kindergröße statt von einem Desktop-Layout heruntergerechnet. Audio wird zwischengespeichert, damit die Hör-Wiederhol-Schleife ohne Verbindung weiterläuft, denn die Schleife ist die Methode. Der Fortschritt wird je Sure festgehalten; darauf können Eltern reagieren, auf die im Gerät verbrachte Zeit nicht.',
      result:
        'Eine plattformübergreifende Lern-App, direkt aus dem Browser installierbar, ohne App-Store-Schranke. Für die Reichweite zählt das mehr, als es klingt: Eltern nutzen sie eine Minute nach dem Öffnen eines geteilten Links, ohne Konto, ohne Prüfwarteschlange zwischen einer Korrektur und dem Kind, das sie braucht, und ohne großen Download über eine womöglich volumenbasierte Verbindung. Dieselbe Quelle liefert weiterhin die iOS- und Android-Builds für Familien, die lieber aus einem Store installieren.',
      outcomes: [
        'Versweises Hören mit Suren-Navigation',
        'Mehrere Lernmethoden und Fortschrittsverfolgung',
        'Vier Ziele auf dem Startbildschirm statt eines Menüs',
        'Zwischengespeichertes Audio: Hören und Wiederholen läuft offline weiter',
        'Elternmodus hinter einem Schloss, Fortschritt je Sure',
        'Arabische Oberfläche, von rechts nach links, in Kindergröße',
        'Installierbare, offlinefähige PWA plus iOS- und Android-Builds',
      ],
      images: [
        { alt: 'Startbildschirm von Little Hafiz mit Auswendiglernen, Hören und Wiederholen, Spielen und Elternmodus', caption: 'Start: Auswendiglernen, Hören und Wiederholen, Spiele und Elternmodus' },
        { alt: 'Elternmodus auf dem Telefon, hinter einer Sperre', caption: 'Elternmodus in der mobilen Fassung' },
      ],
    },
    'sahafood': {
      tag: 'Foodtech · Mobile',
      title: 'SahaFood: App für Essenslieferung',
      summary: 'Eine Flutter-App für Essenslieferung, die den Bestellweg der Kundschaft abdeckt. Derzeit in aktiver Entwicklung.',
      metric: 'In aktiver Entwicklung',
      challenge: 'Essenslieferung läuft im Zielmarkt über Telefonbestellungen und Drittanbieter-Apps, die an jedem Verkauf mitverdienen. SahaFood brauchte einen eigenen Bestellkanal.',
      approach: 'Wir bauen zuerst die Flutter-App für die Kundschaft: Stöbern, Bestellen, Bezahlen, mit den Systemen für Händler und Lieferung im Anschluss.',
      result: 'Die Bestell-App ist in aktiver Entwicklung. Dieser Eintrag wird aktualisiert, sobald sie ausgeliefert wird.',
      outcomes: [
        'Stöbern, Bestellen und Bezahlen für die Kundschaft',
        'Systeme für Händler und Lieferung folgen',
      ],
    },
    'id-verification-pipeline': {
      tag: 'Computer Vision · KI/ML',
      title: 'Pipeline zur Erkennung und Segmentierung von Ausweisen',
      metaTitle: 'Erkennung und Segmentierung von Ausweisen',
      metaDescription: 'Eine Computer-Vision-Pipeline, die algerische Ausweise erkennt, entzerrt und einen OCR-fertigen Ausschnitt liefert.',
      summary: 'Eine Computer-Vision-Pipeline, die algerische Ausweise aus einem Kamerabild erkennt, segmentiert und perspektivisch entzerrt und einen OCR-fertigen Ausschnitt liefert.',
      metric: 'Vom Kamerabild zum OCR-fertigen Ausschnitt, auf dem Gerät',
      challenge:
        'Einen Ausweis zuverlässig aus einem Handyfoto zu lesen heißt, Drehung, angeschnittene Ränder und wechselndes Licht zu beherrschen, bevor die OCR überhaupt läuft. Das Foto am Tresen ist nie das Foto, aus dem ein Datensatz gebaut wurde: Der Ausweis liegt schräg auf dem Tisch, eine Ecke fällt aus dem Bild, ein Fenster wirft eine Spiegelung auf die Folie, und die Hand mit dem Telefon bewegt sich im Auslösemoment. Gibt man das ungefiltert an eine OCR-Engine, scheitert sie nicht — sie liefert plausiblen Unsinn, Zeichen, die wie ein Name und eine Nummer aussehen und keines von beidem sind. Das ist schlimmer als gar nichts: Nichts ist offensichtlich ein Fehler, plausibler Unsinn landet in der Datenbank.',
      approach:
        'Wir haben ein YOLOv8-Segmentierungsmodell auf dem MIDV-500-Datensatz trainiert, um den Ausweis zu finden und zu maskieren, dazu einen leichten Detektor mit orientierten Boxen für die Live-Bildführung bei bewegter Kamera. Die Erkennung läuft zuerst und trägt einen Konfidenzwert: Ein Bild, bei dem das Modell unsicher ist, wird verworfen statt weitergereicht — die günstigste Stelle, eine schlechte Lesung zu stoppen, ist vor ihrem Anfang. Die Segmentierung liefert dann die Maske und daraus die vier Ecken. Diese Ecken sind der ganze Zweck der zweiten Stufe: Sie erlauben der dritten eine perspektivische Entzerrung, die den Ausweis auf ein Rechteck abbildet, sodass ein schräg fotografiertes Dokument flach herauskommt statt trapezförmig. Die Ausgabe ist ein fester Ausschnitt von 1024 × 646, entzerrt und auf Spiegelungen geprüft, bevor er die Kette verlässt. Beide Modelle exportieren nach ONNX und TFLite; die Inferenz läuft auf dem Telefon.',
      result:
        'Eine Kette von der Kamera zum Ausschnitt — erkennen, segmentieren, entzerren — die der OCR ein flaches Bild in gleichbleibender Größe übergibt statt einer Fotografie, und das ist der Unterschied zwischen OCR, die funktioniert, und OCR, die ungefähr funktioniert. Dass sie auf dem Gerät läuft, zählt aus zwei getrennten Gründen: keine Rechnung pro Aufruf bei einer Cloud-Vision-API, wenn das Volumen steigt, und ein Ausweisdokument verlässt nie das Telefon, mit dem es fotografiert wurde — eine deutlich kürzere Antwort gegenüber einer Aufsichtsbehörde als ein Auftragsverarbeitungsvertrag.',
      outcomes: [
        'YOLOv8-Segmentierung, trainiert auf dem MIDV-500-Datensatz',
        'Detektor mit orientierten Boxen für die Live-Bildführung mobil',
        'Konfidenzschwelle: Ein unsicheres Bild wird verworfen, nicht an die OCR gereicht',
        'Vier-Ecken-Extraktion als Grundlage der perspektivischen Entzerrung',
        'Feste Ausgabe 1024 × 646, entzerrt und auf Spiegelungen geprüft',
        'ONNX- und TFLite-Export: Inferenz auf dem Gerät, Dokumente werden nie hochgeladen',
      ],
      images: [
        { alt: 'Die Schritte der Pipeline: Erkennung, Segmentierung und perspektivische Entzerrung eines Ausweises', caption: 'Erkennen, segmentieren, entzerren: vom Kamerabild zum OCR-fertigen Ausschnitt' },
      ],
    },
    'tradevirtual': {
      tag: 'Fintech · Web',
      title: 'TradeVirtual: Plattform für simuliertes Krypto-Trading',
      metaTitle: 'TradeVirtual: simuliertes Krypto-Trading',
      metaDescription: 'Eine spielerische Plattform, um Kryptohandel mit simuliertem Guthaben zu üben: Live-Kurse, XP und Bestenlisten.',
      summary: 'Eine spielerisch aufgebaute Plattform, um den Handel mit Kryptowährungen mit simuliertem Guthaben zu üben: Live-Kurse, XP und Bestenlisten, ohne echtes Geld im Risiko.',
      metric: '6 verfolgte Werte · Live-Kurse',
      challenge: 'Wer mit dem Handel anfängt, will erleben, wie sich Krypto-Handel wirklich anfühlt, ohne echtes Geld zu riskieren, und die meisten Übungswerkzeuge wirken wie Tabellen und nicht wie Produkte.',
      approach: 'Wir haben einen vollständigen Handelssimulator auf Next.js und Prisma gebaut: Live-Kurse, alle fünf Sekunden von Binance geholt, für BTC, ETH, BNB, SOL, ADA und DOGE, ein echter Kauf- und Verkaufsablauf mit vollständiger Handelshistorie, und eine Spielmechanik (XP pro Handel, Stufen, eine globale Bestenliste und ein Tausch von XP in Guthaben), die das Interesse hält. Der Zugang läuft über Telegram-Anmeldung statt über ein weiteres Passwort zum Vergessen.',
      result: 'Eine laufende Plattform für simuliertes Trading mit Echtzeitkursen und einer Bestenliste im Wettbewerb, nicht bloß eine statische Demo.',
      outcomes: [
        'Live-Kurse für sechs Werte, alle fünf Sekunden von Binance aktualisiert',
        'Vollständiger Kauf- und Verkaufsablauf mit Portfolio und Handelshistorie',
        'XP, Stufen, globale Bestenliste und Tausch von XP in Guthaben',
        'Telegram-Anmeldung statt eines weiteren Passworts',
      ],
    },
    'thodz-builder': {
      tag: 'SaaS · Web',
      title: 'THODZ Builder: Portfolio-Baukasten ohne Code',
      metaDescription: 'Ein Website-Baukasten per Ziehen und Ablegen, der aus anpassbaren Vorlagen eine Portfolio-Seite zusammenstellt.',
      client: 'THODZ SOLUTIONS (eigenes Produkt)',
      summary: 'Ein Website-Baukasten per Ziehen und Ablegen, mit dem sich aus anpassbaren Vorlagen eine professionelle Portfolio-Seite zusammenstellen lässt, ganz ohne Code.',
      metric: '5 Vorlagen · Editor per Ziehen und Ablegen',
      before: 'Eine professionelle Portfolio-Seite hieß: eine Entwicklerin oder einen Entwickler engagieren.',
      after: 'Vorlage wählen, Blöcke an ihren Platz ziehen, veröffentlichen, ohne Code.',
      challenge:
        'Freiberufler, die eine Portfolio-Seite brauchen, wollen sie selten von Hand schreiben und können es oft nicht. Die Werkzeuge für sie zerfallen in zwei enttäuschende Hälften: Baukästen, die so generisch sind, dass jedes Ergebnis gleich aussieht, und Baukästen, die so verschlossen sind, dass das Erste, was man ändern will, genau das ist, was nicht geht. Wir wollten die Mitte: echte Vorlagen, die sich wirklich bearbeiten lassen, ohne jemanden in einen Code-Editor zu setzen. Das Schwierige ist nicht das Ziehen. Es ist, dass „bearbeitbar“ und „austauschbar“ gegeneinander ziehen: Je mehr eine Vorlage ändern lässt, desto stärker hängt die eigene Arbeit an dieser Vorlage, und desto weniger kann man eine andere ausprobieren, ohne neu anzufangen.',
      approach:
        'Wir haben den Editor um direkte Manipulation gebaut. Abschnitte werden per Ziehen umsortiert (@dnd-kit), und jedes Element wird an Ort und Stelle bearbeitet: auf den Text klicken und tippen, auf das Bild klicken und tauschen, das Stilpanel öffnen und Farben, Schriften und Abstände ändern. Fünf Vorlagen kommen mit echten Haltungen statt als Farbvarianten eines Layouts: Modern Minimal, Creative Bold, Developer Tech, Designer Elegant und Business Professional, und der Wechsel zwischen ihnen lässt die Inhalte unberührt. Für genau diese Eigenschaft ist das Datenmodell da: Inhalt liegt getrennt von der Darstellung, die ihn rendert, sodass eine Vorlage eine Art ist, das Geschriebene zu zeigen, und nicht der Ort, an dem es liegt. Alles speichert automatisch. Konten, Persistenz und Dateiablage laufen auf Supabase mit Prisma über Postgres, damit eine halbfertige Seite morgen noch da ist.',
      result:
        'Ein funktionierender No-Code-Baukasten, von der Vorlagenwahl über die Bearbeitung per Ziehen und die Stilanpassung bis zur Registrierung und Kontoverwaltung, durchgehend. „Durchgehend“ ist die Behauptung, die man bei einem Baukasten prüfen sollte, denn die Vorführung zeigt immer den Editor, während darüber, ob jemand seine Seite fertig bekommt, alles andere entscheidet: sich anmelden, eine Woche später zu einem Entwurf zurückkommen, der genau dort steht, wo man ihn gelassen hat, und die Vorlage noch einmal wechseln, ohne einen Abend Schreibarbeit zu verlieren.',
      outcomes: [
        'Abschnitte per Ziehen umsortieren, auf @dnd-kit',
        'Fünf eigenständige Vorlagen, wechselbar ohne Inhaltsverlust',
        'Inhalt getrennt von der Darstellung gespeichert, was den Wechsel sicher macht',
        'Bearbeiten an Ort und Stelle: Text, Bilder, Farben, Schriften, Abstände',
        'Abschnitte hinzufügen, entfernen, umsortieren und ausblenden',
        'Automatisches Speichern mit Supabase-Konten auf Prisma + Postgres',
      ],
      images: [
        { alt: 'Editor mit der Vorlage Developer Tech und geöffnetem Stilpanel', caption: 'Editor: die Vorlage Developer Tech mit geöffnetem Stilpanel' },
        { alt: 'Vorlagenauswahl mit fünf verschiedenen Ausgangspunkten', caption: 'Vorlagenauswahl: fünf verschiedene Ausgangspunkte' },
        { alt: 'Bildschirm für Registrierung und Kontoerstellung', caption: 'Registrierung und Kontoerstellung' },
      ],
    },
    'chronic-disease-monitoring': {
      tag: 'Healthtech · Web',
      title: 'Plattform zur Überwachung chronischer Erkrankungen',
      metaDescription: 'Eine rollenbasierte Webanwendung, in der Patienten Messwerte erfassen und ärztlich geprüfte Hinweise erhalten.',
      summary: 'Eine rollenbasierte Webanwendung, in der Patientinnen und Patienten Messwerte erfassen und daraufhin KI-entworfene, ärztlich geprüfte Behandlungshinweise erhalten.',
      metric: 'Rollen für Patient und Arzt · ärztlich freigegebene Ausgabe',
      before: 'Messwerte und Behandlungshinweise lagen verstreut in Notizen.',
      after: 'Patientinnen erfassen Messwerte; die KI entwirft Hinweise, die eine Ärztin prüft, bevor sie verschickt werden.',
      challenge:
        'Wer eine chronische Erkrankung managt, braucht einen einfachen Weg, Messwerte zu erfassen und dafür Hinweise zurückzubekommen. Ein KI-Modell kann solche Hinweise in Sekunden entwerfen, und genau darin liegt das Problem: ungeprüfte medizinische Empfehlungen, direkt an Patientinnen und Patienten zugestellt, sind ein Haftungsrisiko und kein Feature. Das System musste nützlich genug sein, damit weiter erfasst wird, und sicher genug, dass nichts ankommt, ohne dass eine Ärztin es gelesen hat. Die zweite Anforderung entscheidet die Architektur, denn eine Regel genügt nicht. Eine Vorgabe, dass vor der Freigabe geprüft werden soll, ist eine Vorgabe, die an einem vollen Abend jemand überspringt; die Zusage hält nur, wenn das Überspringen etwas ist, das das System gar nicht ausdrücken kann.',
      approach: 'Wir haben den klinischen Prüfschritt in das Datenmodell eingebaut statt obenauf gesetzt. Patientinnen und Patienten übermitteln Messwerte, die von medizinischen Sensoren stammen, über einen für das Telefon entworfenen Ablauf und sehen ihre vollständige Historie. Jede Übermittlung erzeugt einen KI-entworfenen Bericht ausschließlich im Backend, nie im Browser, und dieser Entwurf landet in der Warteschlange einer Ärztin, nicht im Postfach der Patientin. Das Arztkonto prüft, bearbeitet und gibt jeden Bericht und jedes Rezept frei, bevor die Patientin etwas sieht; ein ungeprüfter Entwurf hat überhaupt keinen Weg zur Patientin. Die Anmeldung läuft über Firebase mit E-Mail-Bestätigung per Einmalcode und Google-Anmeldung, über eine Realtime Database, die beide Seiten der Historie synchron hält.',
      result:
        'Ein funktionierender Patienten-Ärztinnen-Kreislauf (Erfassung, KI-Entwurf, klinische Prüfung, Freigabe) mit vollständiger Historie auf beiden Seiten und ohne Weg, auf dem ungeprüfte Ausgaben einen Patienten erreichen. Dieser letzte Punkt ist der Entwurf: Die klinische Prüfung ist keine Stufe in einem Ablauf, die sich umstellen oder unter Druck auslassen ließe, sondern die einzige Kante zwischen einem Entwurf und der Patientenansicht. Der Unterschied zählt genau dann, wenn das System ausgelastet ist, und nicht, wenn es vorgeführt wird — und das ist der einzige Moment, in dem eine Sicherheitseigenschaft wirklich geprüft wird.',
      outcomes: [
        'Zwei Rollen in einem System: Erfassung durch Patienten, Prüfung durch Ärztinnen',
        'KI-Entwurf auf das Backend beschränkt, hinter klinischer Freigabe',
        'Ärztinnen bearbeiten und bestätigen jeden Bericht und jedes Rezept vor der Freigabe',
        'Die Prüfung erzwingt das Datenmodell, nicht ein überspringbares Verfahren',
        'Vollständige Mess- und Behandlungshistorie für beide Rollen',
        'Firebase Auth mit E-Mail-Verifizierung per Code und Google-Anmeldung',
        'Mobile-first responsiv auf jedem Bildschirm',
      ],
      images: [
        { alt: 'Patienten-Dashboard mit erfassten Messwerten und Historie', caption: 'Patienten-Dashboard: Messwerte und Historie' },
        { alt: 'Formular, über das eine Patientin neue Messwerte übermittelt', caption: 'Übermittlung neuer Messwerte' },
        { alt: 'Prüfbildschirm der Ärztin zum Bearbeiten und Freigeben eines KI-entworfenen Berichts', caption: 'Ärztliche Prüfung: jeder Entwurf wird vor der Freigabe bearbeitet und genehmigt' },
      ],
    },
    'giftili': {
      tag: 'Produktdesign · Web',
      title: 'Giftili: ein Geschenk nach Hause nach Algerien schicken',
      summary: 'Ein Produktdesign über 25 Bildschirme für einen Geschenkdienst der Diaspora: Geschenk aus dem Ausland auswählen, die Karte dazu gestalten und in Algerien persönlich übergeben lassen.',
      metric: '13 Kundenbildschirme · 12 für die Verwaltung',
      challenge: 'Jemand in Paris, Montreal oder Dubai will die Erste sein, die der Mutter in Batna gratuliert. Jeder Teil davon ist unbequem: aus dem Ausland bezahlen, etwas wählen, das tatsächlich ankommt, eine Karte in einer Sprache schreiben, die der Laden vielleicht nicht liest, und erfahren, dass es zugestellt wurde. Ein Shop allein löst das nicht, denn die halbe Aufgabe passiert nach der Bestellung.',
      approach: 'Von Anfang bis Ende entworfen, nicht als Laden. Die Kundenseite umfasst den Geschenkkatalog und die Produktseiten, einen Kartengestalter, in dem die Nachricht auf einer echten Karte angelegt wird, die gedruckt und ins Paket gelegt wird, Gemeinschaftsgeschenke, in die mehrere einzahlen, Erinnerungen an Anlässe, Sendungsverfolgung und eine Reaktionswand für den Moment der Übergabe. Die Betriebsseite ist mit gleichem Gewicht entworfen: Bestellungen und Zustellung, Kuriere, Kundinnen, Produkte und Bestand, Liefergebiete und Gutscheincodes, Marketing, Seiteninhalte, Teamrollen mit zweistufiger Anmeldung und Auswertungen. Jeder Bildschirm ist auf Englisch, Französisch und Arabisch angelegt, denn wer schickt und wer empfängt, liest selten dieselbe Sprache.',
      result: 'Ein vollständiger, klickbarer Prototyp, der beide Seiten des Dienstes abdeckt, von der absendenden Person in der Diaspora bis zur Kurierfahrt in Algerien.',
      outcomes: [
        'Kartengestalter mit Vorder- und Innenseite, Stickern, Fotos und Druckveredelungen',
        'Gemeinschaftsgeschenke, zu denen mehrere Menschen beitragen',
        'Zustellung in 67 Wilayas mit Kurierzuweisung je Bestellung',
        'Verwaltung für Bestellungen, Bestand, Kuriere, Aktionen, Inhalte und Teamrollen',
        'Durchgehend dreisprachig, einschließlich rechtsläufigem Arabisch',
      ],
      images: [
        { alt: 'Startseite von Giftili: Geschenk wählen, ein paar Worte schreiben, Zustellung in Algerien', caption: 'Start: Empfänger, Anlass und Budget wählen' },
        { alt: 'Kartengestalter mit fertigen Entwürfen, Text- und Stickerwerkzeugen und Druckveredelungen', caption: 'Der Kartengestalter: was gedruckt und ins Geschenk gelegt wird' },
        { alt: 'Produktseite eines Straußes mit Größe, Farbe, Extras und Auswahl des Liefertermins', caption: 'Produkt: Größe, Extras, Wilaya und Liefertermin' },
        { alt: 'Verwaltungsübersicht für Bestellungen und Zustellung mit Absenderland, Wilaya, Kurier und Status', caption: 'Betrieb: Bestellungen aus dem Ausland, zugewiesen an Kuriere in Algerien' },
      ],
    },
    'djalil-location': {
      tag: 'Vermietung · Desktop',
      title: 'Djalil Location: Dashboard für einen Autovermieter',
      metaDescription: 'Eine Windows-Desktop-App, die zuerst offline arbeitet: Fuhrpark, Kunden, Reservierungen und Verfügbarkeit lokal.',
      summary:
        'Eine Windows-Desktop-App, die zuerst offline arbeitet: Fuhrpark, Kunden, Reservierungen und Verfügbarkeit auf einer lokalen Datenbank, damit das Büro ohne Verbindung weiterarbeitet.',
      metric: 'Offline zuerst · Doppelbuchung zweimal blockiert',
      challenge:
        'Ein Vermietungsbüro läuft über einen Tresen, nicht über die Cloud. Das System muss sofort öffnen, weiterarbeiten, wenn die Verbindung abreißt, und Kunden- und Vertragsdaten auf einem Rechner halten, den der Inhaber kontrolliert, statt auf dem Server eines anderen. Der teure Fehler in diesem Geschäft ist, dasselbe Auto zweimal für dieselben Stunden zu vermieten. Die Buchungsregeln müssen also auch dann halten, wenn zwei Reservierungen im Abstand von Minuten eingetragen werden.',
      approach:
        'Gebaut als Electron-Desktop-App mit einer Oberfläche in Vue 3 und SQLite auf der Festplatte, erreichbar über eine typisierte IPC-Schicht mit Sperre, damit die Oberfläche die Datenbank nie direkt berührt. Der Zugang liegt beim Inhaber: ein beim ersten Start gesetztes Passwort, Argon2-Hashing, ein schriftlicher Wiederherstellungscode, eine Drosselung nach fünf Versuchen und automatisches Sperren, wenn der Rechner ruht oder Windows sperrt. Überschneidungen werden zweimal geprüft: live im Buchungsformular, das die kollidierende Reservierung oder Wartungszeit benennt und Speichern gesperrt lässt, und noch einmal innerhalb der Schreibtransaktion. Die Regel ist halboffen auf die Minute, sodass ein um 10:00 zurückgegebenes Auto um 10:00 wieder herausfahren kann. Die Verfügbarkeit ist eine Zeitleiste mit minutengenau gesetzten Balken und einem Datumsbereich, der in der URL bleibt. Sicherungen laufen täglich lokal und auf beliebigen S3-kompatiblen Speicher, komprimiert und mit AES-256-GCM verschlüsselt, bevor sie den Rechner verlassen.',
      result:
        'Alle sechs Phasen stehen: Gerüst und Datenbank, Autos und Kunden, Reservierungen mit Überschneidungsschutz, Verfügbarkeit und Dashboard, Einstellungen und Sicherungen sowie ein signiertes Installationsprogramm pro Benutzer mit Updates im Hintergrund. Der Cloud-Sicherungsweg ist gegen einen lokalen Server im S3-Dialekt getestet; gegen ein echtes Anbieterkonto lief er noch nicht.',
      outcomes: [
        'Läuft offline gegen eine lokale SQLite-Datenbank',
        'Doppelbuchung zweimal blockiert: live im Formular und noch einmal in der Schreibtransaktion',
        'Minutengenaue Verfügbarkeits-Zeitleiste, mit dem Datum, ab dem jedes Auto frei ist',
        'Arabisch, Französisch und Englisch mit echtem RTL-Layout, dazu helles und dunkles Design',
        'Tägliche lokale Sicherungen und verschlüsselte S3-kompatible Cloud-Kopien, wiederhergestellt über einen abgesicherten Neustart',
        'Windows-Installationsprogramm pro Benutzer mit automatischen Updates im Hintergrund',
      ],
      images: [
        { alt: 'Dashboard des Inhabers auf Französisch: Fuhrpark-Zähler, kommende Reservierungen, Abholungen und Rückgaben des Tages und der Live-Status des Fuhrparks', caption: 'Das Dashboard: Fuhrpark, Umsatz des Monats und was sich heute bewegt' },
        { alt: 'Fuhrpark-Raster auf Französisch mit Kategoriefiltern und einem Statusabzeichen an jedem Auto', caption: 'Der Fuhrpark, nach Kategorie gefiltert, jedes Auto als frei, vermietet oder in Wartung markiert' },
        { alt: 'Derselbe Fuhrpark-Bildschirm auf Arabisch, von rechts nach links gespiegelt, mit der Seitenleiste rechts', caption: 'Derselbe Bildschirm auf Arabisch, von rechts nach links gespiegelt' },
        { alt: 'Verfügbarkeits-Bildschirm mit vorgegebenen Zeiträumen und einer Zeitleiste der Reservierungen je Auto über vier Tage', caption: 'Verfügbarkeit: Zeiträume, Zeitleiste je Auto und wann welches Auto frei wird' },
        { alt: 'Dialog für eine neue Reservierung mit Kunde, Auto, Daten und Uhrzeiten, einer grünen Bestätigung, dass das Auto frei ist, und einer geschätzten Summe', caption: 'Das Buchungsformular: Die Konfliktprüfung läuft beim Wählen der Daten mit' },
        { alt: 'Detailseite einer Reservierung mit dreistufigem Statusverlauf, Karten für Kunde und Auto sowie Daten und Betrag', caption: 'Eine Reservierung: Statusverlauf, Kunde, Auto und Betrag' },
        { alt: 'Dasselbe Dashboard im dunklen Design', caption: 'Dasselbe Dashboard im dunklen Design' },
      ],
    },
    'onyxia-jewelry': {
      tag: 'Handel · Web',
      title: 'Onyxia: Schmuck-Shop und Bestellzentrale',
      metaDescription: 'Ein arabischsprachiger Schmuck-Shop mit Warenkorb, Kasse, Lieferkosten je Wilaya und einer Bestellverwaltung.',
      summary: 'Ein arabischsprachiger Shop für eine Schmuckmarke, mit Warenkorb, Kasse, Lieferkosten je Wilaya und einer Verwaltung, über die der Laden Bestellungen abwickelt.',
      metric: 'Shop, Verwaltung und Lieferpreise',
      challenge:
        'Schmuck online in Algerien zu verkaufen heißt, die Teile zu lösen, die ein gehosteter Warenkorb nicht löst: Lieferkosten je Wilaya, telefonisch bestätigte Bestellungen und ein Ladenteam, das Bestand und Bestellungen ohne Code verwalten muss. Eine gehostete Plattform unterstellt einen Versandtarif, eine Kartenzahlung und einen Kunden, der mit niemandem spricht. Nichts davon trifft hier zu: Die Lieferkosten unterscheiden sich über achtundvierzig Wilayas, die meisten Bestellungen werden nach einem Bestätigungsanruf bei Lieferung beglichen, und wer den Laden führt, ist Juwelierin und keine Softwarebetreiberin. Alles, was für eine Preis- oder Tarifänderung eine Entwicklerin erfordert, ist ein System, das der Laden irgendwann nicht mehr benutzt.',
      approach:
        'Die Storefront kommt im Frontend bewusst ohne Abhängigkeiten aus: handgeschriebenes HTML, CSS und JavaScript, damit die Seiten auf Mobilverbindungen schnell bleiben, durchgehend mit arabischem Rechts-nach-links-Layout und einem Sprachumschalter in der Kopfzeile. Diese Entscheidung ist nicht stilistisch. Schmuck verkauft sich über Fotografie, also sind die Seiten um große Bilder herum gebaut, und das Budget, das diese Bilder auf einer Mobilverbindung verbrauchen, kann ein Framework nicht zusätzlich beanspruchen. Dahinter steht ein Express- und MongoDB-Dienst für Produkte, Bestellungen, Städte und Sprache, mit serverseitigem Bild-Upload. Die Verwaltung gehört zum selben Build: Produkte anlegen und bearbeiten, eine Bestellliste und eine Bestellansicht, mit der der Laden durch den Tag arbeitet, hinter einer sitzungsgestützten Anmeldung.',
      result:
        'Ein vollständiger Verkaufskreis, den der Laden selbst betreibt, von der Kundin, die den Katalog durchsieht, bis zum Team, das eine Bestellung als erledigt markiert. Die Teile, die sonst eine Entwicklerin brauchen — ein Produkt anlegen, seine Fotos austauschen, ändern, was die Lieferung in eine Wilaya kostet, eine Bestellung durch ihre Zustände bewegen — macht die Juwelierin alle aus der Verwaltung heraus, und das ist der Unterschied zwischen einer Storefront, die aktuell bleibt, und einer, die einen Monat stimmt und danach leise falsch ist. Der Laden wartet auf niemanden, um etwas Neues anzubieten.',
      outcomes: [
        'Katalog, Produktseiten, Warenkorb und Kasse auf Arabisch',
        'Lieferung je Stadt statt eines Pauschaltarifs',
        'Bildgeführter Katalog, ohne Frontend-Framework, das um Bandbreite konkurriert',
        'Arabisch und Englisch, mit Umschalter in der Kopfzeile',
        'Verwaltung für Produkte, Bilder und Bestellstatus',
        'Sitzungsgestützte Anmeldung für das Ladenteam',
      ],
      images: [
        { alt: 'Startseite von Onyxia mit dem Markenzeichen auf einem dunklen Sternenfeld', caption: 'Die Startseite' },
      ],
    },
    'sotex': {
      tag: 'Handel · Web',
      title: 'Sotex: ein Shop, jedes Produkt, jede Bestellung erfasst',
      metaTitle: 'Sotex: ein Shop, jedes Produkt',
      metaDescription: 'Ein arabischsprachiger Ein-Produkt-Shop, der für das jeweilige Angebot neu aufgesetzt wird, mit Bestellverwaltung.',
      summary: 'Ein arabischsprachiger Ein-Produkt-Shop, der für das jeweils aktuelle Angebot neu aufgesetzt wird, vom Beauty-Set bis zur Fahrzeugdämmung, wobei jede Bestellung in einer Verwaltungsoberfläche landet.',
      metric: 'Derselbe Shop, jedes Produkt · 58 Wilayas',
      challenge:
        'Kleine Händler in Algerien verkaufen oft ein Produkt zur Zeit und wechseln, wenn das nächste kommt. Für jeden Verkaufsstart einen Shop neu zu bauen ist langsam, und Bestellungen, die per Nachricht oder E-Mail eintreffen, gehen verloren, bevor jemand zurückruft. Einen Katalog wird der Händler ohnehin nicht pflegen: Es gibt ein Produkt, es ist die ganze Seite, und wenn das Produkt wechselt, wechselt die Seite mit. Was sich zwischen den Starts ändert, ist nicht das Layout, sondern die kaufmännischen Bedingungen — was die Sache kostet, wie dieser Preis zustande kommt und welche Lieferung enthalten ist — also müssen genau diese Teile Konfiguration sein und nicht Code.',
      approach: 'Der Shop ist um jeweils ein Produkt gebaut: eine Galerie, ein Preisblock und ein Bestellformular, die auf dem Desktop nebeneinanderstehen und auf dem Telefon untereinander. Produkt, Preisregel und Lieferangebot ändern sich mit jedem Start, sodass dieselbe Seite ein Beauty-Set zum Festpreis von 5.900 DA mit kostenloser Lieferung verkauft hat und Fahrzeugdämmung zu 750 DA je Quadratmeter, ab zehn Quadratmetern 700 DA, mit Lieferung ins Büro oder nach Hause obendrauf. Der Adressschritt deckt alle 58 Wilayas und ihre Baladiyat ab, und die Telefonnummer wird vor Annahme der Bestellung gegen algerische Formate geprüft. Bestellungen werden nach Firestore geschrieben, und eine getrennte Verwaltungsseite hinter Firebase Auth listet sie mit Zählern für offen und erledigt sowie dem Umsatz.',
      result:
        'Ein Shop, den man schnell auf ein neues Produkt richten kann, mit allen Bestellungen an einem Ort statt verstreut über Nachrichten. Weil die Preisbildung eine Regel ist und keine Zahl, hat dieselbe Seite bereits etwas pro Stück und etwas pro Quadratmeter mit Mengenstufe verkauft, ohne dass eines davon ein für sich geschriebener Sonderfall gewesen wäre. Den Shop auf das nächste Produkt zu richten ist eine Inhaltsänderung — und das ist der Unterschied zwischen einem Start in dieser Woche und einem, der wartet, bis eine Entwicklerin Zeit hat.',
      outcomes: [
        'Eine Storefront, wiederverwendet für verschiedene Produkte und Preisregeln',
        'Festpreis und Quadratmeterpreis, mit einer Mengenstufe',
        'Preisbildung als Regel formuliert: ein neuer Start ist Konfiguration, kein Code',
        'Vollständige Auswahl von Wilaya und Baladiya über alle 58 Wilayas',
        'Prüfung algerischer Telefonnummern beim Absenden',
        'Verwaltungsübersicht mit Bestellstatus und Umsatzsummen',
        'Mobile-first-Layout von rechts nach links',
      ],
      images: [
        { alt: 'Erster Start: ein Beauty-Set zum Festpreis mit kostenloser Lieferung', caption: 'Start eins: ein Beauty-Set zum Festpreis, frei geliefert' },
        { alt: 'Dieselbe Seite, die Dämmung je Quadratmeter verkauft', caption: 'Start zwei: dieselbe Seite verkauft Dämmung je Quadratmeter' },
        { alt: 'Bestellung über 12 m², die in die Stufe von 700 DA fällt, mit Lieferung in der Summe', caption: 'Bestellung: 12 m² fallen in die Stufe von 700 DA, Lieferung kommt zur Summe dazu' },
        { alt: 'Verwaltungsoberfläche mit jeder Bestellung, ihrem Status und den Umsatzsummen', caption: 'Verwaltung: jede Bestellung mit Status, dazu die Umsatzsummen' },
        { alt: 'Anmeldebildschirm der Verwaltung, auf Firebase Auth', caption: 'Anmeldung zur Verwaltung, auf Firebase Auth' },
      ],
    },
    'gensior': {
      tag: 'Gesundheit · Web',
      title: 'Gensior: eine deutschsprachige Seite für pharmazeutische Dienstleistungen',
      metaTitle: 'Gensior: pharmazeutische Dienstleistungen',
      summary: 'Eine deutschsprachige Seite für eine pharmazeutische Beratung im Bereich Heilwassermanagement, mit Produktkatalog und Anfrageweg.',
      metric: 'Katalog und Anfragen, ohne Server',
      challenge:
        'Eine Beratung in einem regulierten Feld braucht eine Website, die Apothekern und Kommunen glaubwürdig erscheint, ein Produktsortiment zeigt und Anfragen entgegennimmt, ohne ein Backend aufzubauen, das gepflegt werden muss. Das Publikum ist schmal und fachkundig: Abfüllbetriebe, Thermalquellen und kommunale Wasserbetriebe, die die Praxis schon im ersten Absatz daran messen, ob das Vokabular der sachkundigen Person und der GMP-Auditierung auf Deutsch korrekt sitzt. Allgemeine Agenturprosa fällt bei dieser Prüfung sofort durch. Die zweite Einschränkung ist leiser: Die Praxis ist eine Beraterin, also muss das Gebaute jahrelang ohne Betreuung laufen — womit die übliche Antwort ausscheidet, ein CMS mit einer zu patchenden Verwaltung und einer zu sichernden Datenbank.',
      approach:
        'Gebaut als React-Single-Page-Anwendung auf Vite, mit den Leistungsseiten, dem Produktkatalog und dem Warenkorb als eigene Komponenten und Framer Motion für die Übergänge, sodass der Wechsel zwischen Abschnitten keinen Roundtrip kostet und als bewusste Bewegung gelesen wird statt als neu ladende Seiten. Der Kontakt- und Bestellweg läuft über eine Netlify-Funktion statt über einen Server, und sie existiert aus genau einem Grund: Der API-Schlüssel des Mailanbieters muss irgendwo leben, das nicht der Browser ist, und eine Funktion ist das Kleinste, was dafür taugt. Alles andere sind statische Dateien auf einem CDN. Der deutsche Text ist um das tatsächliche Versprechen der Praxis herum gebaut — Sicherheit, Compliance und Qualität von der Quelle bis zur Freigabe — und nicht um eine Funktionsliste.',
      result:
        'Eine Website, die die Beratung und ihre Produkte auf Deutsch zeigt und Anfragen ans Team leitet, bereitgestellt ohne Infrastruktur, die betrieben werden müsste. Die gesamte Fläche, über die jemand nachdenken muss, ist ein Git-Repository und eine Umgebungsvariable. Es gibt keinen Server, der ungepatcht bleiben kann, keine Verwaltung, die kompromittiert werden kann, und keine Datenbank, die wiederhergestellt werden müsste — für eine Ein-Personen-Praxis weniger eine Ersparnis als der Unterschied zwischen einer Website, die in drei Jahren noch läuft, und einer, die leise stehen geblieben ist.',
      outcomes: [
        'Leistungen, Über-mich- und Produktbereiche auf Deutsch',
        'Produktkatalog mit Warenkorbstrecke',
        'Single-Page-Anwendung: Abschnittswechsel ohne Roundtrip',
        'Anfragen über eine Serverless-Funktion, den einzigen Ort für einen API-Schlüssel',
        'Keine Datenbank, keine Verwaltung, nichts regelmäßig zu patchen',
        'Statisches Deployment, kein Server zu betreiben',
      ],
      images: [
        { alt: 'Startseite von Gensior: Aufmacher zu pharmazeutischen Dienstleistungen über einem Wasserbild', caption: 'Start: Positionierung im Heilwassermanagement' },
      ],
    },
    'focuslock': {
      tag: 'Produktivität · Desktop',
      title: 'Focus Lock: Spielzeit verdienen',
      metaDescription: 'Eine Windows-App, die Spiele und ausgewählte Programme sperrt, bis die Aufgaben des Tages erledigt sind.',
      summary: 'Eine Windows-Desktop-App, die Spiele und ausgewählte Anwendungen gesperrt hält, bis die Aufgaben des Tages erledigt sind, mit XP und Stufen für das Erledigen.',
      metric: 'Sperre an Aufgaben gebunden, mit XP und Stufen',
      challenge:
        'Blocker, die eine Anwendung schlicht verbieten, werden binnen einer Woche abgeschaltet. Das Verhalten hält nur, wenn das Blockierte etwas ist, das man zurückgewinnen kann. Alle Blocker scheitern gleich: Sie wirken, solange der Reiz des Neuen hält, dann schaltet der Nutzer sie ab, weil zwischen ihm und dem Spiel nur der eigene Vorsatz steht und die Software sich zum Gegner gemacht hat. Strengeres Durchsetzen ändert das nicht — auf dem eigenen Rechner gewinnt man diesen Streit am Ende immer. Was bleibt, ist zu ändern, was die Belohnung ist: etwas Verdientes statt etwas Vorenthaltenes.',
      approach:
        'Focus Lock dreht den üblichen Blocker um: Statt Spiele zu verbieten, hält es sie hinter der Aufgabenliste und gibt sie frei, wenn die Arbeit getan ist. Der Rahmen steht in der ersten Zeile der Oberfläche — verdiene deine Spielzeit — und der Fokusmodus ist eine Schaltfläche, die man drückt, kein auferlegter Zeitplan, was den Nutzer zum Urheber der Beschränkung macht statt zu ihrem Objekt. Aufgaben tragen eine Priorität und geben beim Abschluss XP, was Stufen und Erfolge speist. Über der Liste stehen drei Zähler: aktuelle Stufe, XP-Fortschritt und erledigte Aufgaben von den heutigen, sodass der Zustand der Schranke vor dem Start sichtbar ist statt in dem Moment entdeckt zu werden, in dem sich etwas nicht starten lässt. Es ist eine Electron-App mit React- und TypeScript-Renderer, Zustand für den State und SQLite für dauerhaften lokalen Speicher: Nichts verlässt den Rechner.',
      result:
        'Ein funktionierender Windows-Build, veröffentlicht unter MIT mit Beitragsleitfaden und Verhaltenskodex. Open Source ist für genau dieses Werkzeug die richtige Vorgabe: Software, die entscheidet, was Sie auf Ihrem eigenen Rechner ausführen dürfen, sollten Sie lesen können. Es gibt außerdem kein Konto, keine Synchronisierung und keinen Server, also nichts, was ausgerechnet in dem Moment nicht erreichbar sein kann, in dem Sie etwas entsperren wollen — ein Ausfall, der das Vertrauen in ein Produktivitätswerkzeug dauerhaft beenden würde.',
      outcomes: [
        'Aufgabenliste mit Prioritäten und Abschlussverfolgung',
        'XP, Stufen und Erfolge, an erledigte Arbeit gekoppelt',
        'Fokusmodus, der die ausgewählten Anwendungen sperrt',
        'Drei Zähler über der Liste: Stufe, XP-Fortschritt, heutige Aufgaben',
        'Fokusmodus bewusst gestartet, nicht per Zeitplan auferlegt',
        'Lokaler SQLite-Speicher, ohne Konto und ohne Synchronisierung',
        'Open Source unter MIT, mit Beitragsleitfaden',
      ],
      images: [
        { alt: 'Dashboard von Focus Lock mit Stufe, XP-Fortschritt, erledigten Aufgaben und Aufgabenliste', caption: 'Das Dashboard: Stufe, XP und die Aufgabenliste des Tages' },
      ],
    },
  },
};

export default de;
