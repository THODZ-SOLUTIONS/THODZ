// German UI strings. Mirrors en.js key for key. Addresses the reader with
// "Sie", the standard register for German-language B2B.

const de = {
  meta: {
    title: 'THODZ SOLUTIONS: Full-Stack-Engineering-Studio',
    template: '%s · THODZ SOLUTIONS',
    description:
      'THODZ SOLUTIONS entwirft, baut und betreibt Web-, Mobile-, Desktop- und Infrastruktursysteme für Teams, die es beim ersten Mal richtig gemacht haben wollen. Ansässig in Algerien, remote tätig auf Französisch, Englisch und Arabisch.',
    ogDescription: 'Ein technischer Partner. Jedes System, das Sie brauchen.',
    orgDescription:
      'Full-Stack-Engineering-Studio für Web, Mobile, Desktop, DevOps, Sicherheit, KI/ML, Automatisierung, UI/UX und technische Beratung.',
  },

  nav: {
    problems: 'Was wir lösen',
    work: 'Projekte',
    howItRuns: 'So läuft es ab',
    pricing: 'Preise',
    faq: 'Fragen',
    about: 'Über uns',
    bookCall: 'Gespräch buchen',
    startProject: 'Projekt starten',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    theme: {
      system: 'Design: folgt Ihrem Browser',
      light: 'Design: hell',
      dark: 'Design: dunkel',
    },
    languageAuto: 'Automatisch',
    languageAutoHint: 'Browser folgen',
    languageLabel: 'Sprache',
  },

  footer: {
    blurb:
      'Ein Full-Stack-Engineering-Studio. Web-, Mobile-, Desktop- und Infrastruktursysteme, gebaut und betrieben von einem Team, das dafür geradesteht.',
    locale: 'Algerien (UTC+1) · remote tätig',
    company: 'Unternehmen',
    contact: 'Kontakt',
    elsewhere: 'Anderswo',
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutz',
    terms: 'AGB',
  },

  engagementCard: {
    scoped: 'Pro Projekt kalkuliert',
    placeholderFlag: 'Platzhalter',
    bestFor: 'Passt zu',
    billing: 'Abrechnung',
    includes: 'Enthalten',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    body: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
    backHome: 'Zurück zur Startseite',
  },

  home: {
    // --- hero
    heroEyebrow: 'Engineering-Studio · Algerien',
    heroTitle: 'Jede Schicht Ihrer Software. Ein Team, das dafür geradesteht.',
    heroSub:
      'Wir entwerfen, bauen und betreiben die Web-, Mobile-, Desktop- und Infrastruktursysteme, auf die Ihr Geschäft angewiesen ist, und bleiben auch nach dem Launch erreichbar.',
    heroCtaPrimary: '30-Minuten-Gespräch buchen',
    heroCtaSecondary: 'Gelieferte Projekte ansehen',
    heroAssuranceReply: 'Antwort innerhalb eines Werktags',
    heroAssurancePrice: 'Festpreis, bevor wir anfangen',

    // --- 01 problems
    problemLabel: 'Beim Problem anfangen',
    problemTitle: 'Sagen Sie uns, was im Weg steht. Wir zeigen Ihnen, was wir bauen würden.',
    problemSub:
      'Sie müssen nicht wissen, welche Technologie Sie brauchen. Wählen Sie den Satz, der nach Ihrer Woche klingt.',
    pickerLabel: 'Häufige Probleme',
    whatWedBuild: 'Was wir bauen würden',
    firstStep: 'Erster Schritt',
    weveShipped: 'Das haben wir schon geliefert',
    disciplinesNote: 'Disziplinen in diesem Projekt, hervorgehoben aus unseren neun',

    // --- 02 shipped
    shippedLabel: 'Geliefert',
    shippedTitle: 'Echte Systeme, täglich im Einsatz.',
    before: 'Vorher',
    after: 'Nachher',
    previous: 'Vorheriges Projekt',
    next: 'Nächstes Projekt',
    readCase: 'Fallstudie lesen',
    viewAllProjects: 'Alle Projekte ansehen',

    // --- proof (hidden until a real, approved quote exists)
    proofEyebrow: 'Was Kunden sagen',

    // --- open source
    openSourceLabel: 'Open Source',
    openSourceTitle: 'Werkzeuge, die wir für die Welt gebaut haben, im Einsatz in Ihrer App.',
    openSourceSub:
      'Wir bauen nicht nur Apps. Wir bauen die Werkzeuge, auf die sich andere Entwickler verlassen. Wir teilen sie frei mit Entwicklern weltweit auf pub.dev, der offiziellen Heimat der Flutter-Werkzeuge. Wenn Sie mit uns arbeiten, bekommen Sie dieselbe Ingenieursqualität ab dem ersten Tag.',
    openSourceCta: 'Auf pub.dev ansehen',
    openSourceClosing:
      'Mit dieser Sorgfalt gehen wir an jedes Projekt heran, auch an Ihres.',

    // --- 03 timeline
    timelineLabel: 'So läuft es ab',
    timelineTitle: 'Was Sie bei jedem Schritt bekommen. Keine Überraschungen.',
    timelineSub:
      'Sie sprechen direkt mit der Person, die Ihr Projekt baut, und sehen echten Fortschritt auf dem ganzen Weg, nicht erst am Ende.',

    // --- 04 pricing
    pricingLabel: 'Preise',
    pricingTitle: 'Sie sehen die Zahl, bevor wir eine Zeile Code schreiben.',
    pricingSub:
      'Drei Wege der Zusammenarbeit. Beantworten Sie zwei Fragen, und wir zeigen Ihnen den passenden.',
    qKnown: 'Wissen Sie genau, was gebaut werden soll?',
    qLive: 'Ist das System bereits live?',
    yes: 'Ja',
    no: 'Nein',
    notYet: 'Noch nicht',
    fitsYourAnswers: 'Passt zu Ihren Antworten',
    cardCta: 'Hier starten',
    pricingCta: 'Alle Modelle, Abrechnung & Vertragsbedingungen',

    // --- 05 faq
    faqLabel: 'Bevor Sie unterschreiben',
    faqTitle: 'Fragen, die Kunden uns zuerst stellen.',
    faqSub: 'Noch etwas? Fragen Sie auf',

    // --- 06 start
    startLabel: 'Start',
    startTitle: 'Sagen Sie uns, was langsam, kaputt oder nicht vorhanden ist.',
    preferToTalk: 'Lieber sprechen?',
    channelBookSub: 'Wählen Sie einen passenden Termin',
    channelEmail: 'E-Mail',
    startNote:
      'Algerien · UTC+1 · remote tätig mit Kunden auf Französisch, Englisch und Arabisch.',
  },

  about: {
    metaTitle: 'Über uns',
    metaDescription:
      'THODZ SOLUTIONS ist ein Full-Stack-Engineering-Studio: ein technischer Partner für alles, für Teams, die es beim ersten Mal richtig gemacht haben wollen. Lernen Sie die Menschen dahinter kennen.',
    ogDescription: 'Die Menschen hinter dem Engineering-Studio und wie wir arbeiten.',
    headEyebrow: 'Über uns',
    heroTitle:
      'THODZ SOLUTIONS baut die Systeme, die Ihre Roadmap braucht, und bleibt nach dem Launch erreichbar.',
    intro1:
      'Wir sind ein Full-Stack-Engineering-Studio: ein Team für Web, Mobile, Desktop, DevOps, Sicherheit, KI/ML, Automatisierung, UI/UX und technische Beratung. So kalkulieren Sie ein System einmal statt neun Dienstleisterbeziehungen.',
    intro2:
      'Wir arbeiten remote mit Kunden über Zeitzonen hinweg und liefern auf Französisch, Englisch und Arabisch, wenn ein Projekt es verlangt. Zu jedem Auftrag gehören eine dokumentierte Architektur, ein Betriebshandbuch und eine Ansprechperson, die auch nach dem Launch erreichbar bleibt, statt einer Übergabe an eine Support-Warteschlange.',
    teamEyebrow: 'Mit wem Sie arbeiten',
    teamTitleSingle: 'Die Person, die Ihre E-Mail beantwortet.',
    teamTitlePlural: 'Die Menschen, die Ihre E-Mails beantworten.',
    teamSub:
      'Keine Kundenbetreuer zwischen Ihnen und den Entwicklern. Sie sprechen mit denen, die den Code schreiben.',
    coverEyebrow: 'Was wir abdecken',
    ctaTitle: 'Ein System zu bauen?',
    ctaPrimary: 'Projekt starten',
    ctaSecondary: 'So rechnen wir ab',
  },

  contact: {
    metaTitle: 'Kontakt',
    metaDescription:
      'Erzählen Sie THODZ SOLUTIONS von dem System, das Sie brauchen. Über Formular, WhatsApp, E-Mail oder ein gebuchtes Gespräch. Wir antworten innerhalb eines Werktags.',
    ogDescription:
      'Ein Gespräch mit einer Ingenieurin oder einem Ingenieur, nicht mit dem Vertrieb. Antwort innerhalb eines Werktags.',
    eyebrow: 'Projekt starten',
    title: 'Erzählen Sie uns von dem System, das Sie brauchen.',
    bookingDetail: 'Wählen Sie einen passenden Termin',
    whatsappLabel: 'WhatsApp',
    whatsappPrefill: 'Hallo THODZ, ich würde gern über ein Projekt sprechen.',
    emailLabel: 'E-Mail',
    callLabel: 'Anrufen',
    divider: 'oder schicken Sie uns die Details',
    nextEyebrow: 'Wie es weitergeht',
    nextSteps: [
      {
        title: 'Wir lesen es',
        body: 'Ihre Nachricht liest eine Entwicklerin oder ein Entwickler. Kein Ticket-Router und kein Vertrieb.',
      },
      {
        title: 'Wir antworten innerhalb eines Werktags',
        body: 'Mit ersten Rückfragen, einer ehrlichen Einschätzung zur Passung und einem Terminvorschlag.',
      },
      {
        title: 'Wir kalkulieren gemeinsam',
        body: 'Ein Gespräch, um das Problem festzuzurren, dann ein schriftlicher Umfang und eine Zahl, bevor etwas gebaut wird.',
      },
    ],
  },

  form: {
    name: 'Name',
    email: 'Geschäftliche E-Mail',
    company: 'Unternehmen',
    projectType: 'Projektart',
    // Values are what the API receives and stay stable across locales; only
    // labels translate.
    typeOptions: [
      { value: 'Web', label: 'Web' },
      { value: 'Mobile', label: 'Mobile' },
      { value: 'Desktop', label: 'Desktop' },
      { value: 'DevOps', label: 'DevOps' },
      { value: 'Cybersecurity', label: 'Cybersicherheit' },
      { value: 'AI/ML', label: 'KI/ML' },
      { value: 'Automation', label: 'Automatisierung' },
      { value: 'UI/UX', label: 'UI/UX' },
      { value: 'Consulting', label: 'Beratung' },
    ],
    timeline: 'Zeitrahmen',
    timelineAsap: 'So bald wie möglich',
    timelineQuarter: '1–3 Monate',
    timelineFlexible: 'Flexibel',
    details: 'Projektdetails',
    detailsPlaceholder: 'Ein, zwei Sätze zu dem, was Sie bauen',
    nda: 'Dieses Projekt unterliegt einer Geheimhaltungsvereinbarung',
    error:
      'Beim Senden Ihrer Nachricht ist etwas schiefgegangen. Schreiben Sie uns stattdessen direkt an support@thodz.com.',
    sending: 'Wird gesendet…',
    send: 'Senden',
    privacyPre: 'Wir nutzen diese Angaben ausschließlich, um Ihnen zu antworten. Siehe ',
    privacyLink: 'Datenschutzerklärung',
    privacyPost: '.',
    sentTitle: 'Nachricht gesendet',
    sentBody: 'Eine Entwicklerin oder ein Entwickler von THODZ antwortet innerhalb eines Werktags.',
  },

  pricing: {
    metaTitle: 'Preise & Zusammenarbeit',
    metaDescription:
      'Wie Aufträge bei THODZ SOLUTIONS aufgebaut und abgerechnet werden: Festpreisprojekte, monatliche Kontingente, Supportpläne und Beratung. Dazu: wem der Code gehört, was der Vertrag abdeckt und was nach dem Launch passiert.',
    ogDescription: 'Vier Wege der Zusammenarbeit und die Vertragsbedingungen dahinter.',
    headEyebrow: 'Preise & Zusammenarbeit',
    headTitle: 'Vier Wege der Zusammenarbeit.',
    headSub:
      'Jedes Projekt wird vor dem Start kalkuliert und angeboten. So genehmigen Sie eine Zahl, statt zuzusehen, wie eine entsteht. Das sind die Formen, die diese Angebote annehmen.',
    unsure:
      'Unsicher, was passt? Beschreiben Sie das Problem, und wir sagen Ihnen, welcher dieser Wege es ist, auch dann, wenn die Antwort lautet: „keiner davon, dafür brauchen Sie uns nicht“.',
    faqEyebrow: 'Die Details',
    faqTitle: 'Die Fragen, die sich vor der Unterschrift lohnen.',
    faqSub: 'Rechte am Code, Abrechnung, Verträge und was passiert, sobald das System live ist.',
    ctaTitle: 'Eine Zahl, keine Broschüre.',
    ctaBody:
      'Sagen Sie uns, was Sie bauen, und wir melden uns innerhalb eines Werktags mit dem passenden Modell und den Kosten.',
    ctaButton: 'Projekt starten',
  },

  work: {
    metaTitle: 'Projekte',
    metaDescription:
      'Ausgewählte Projekte von THODZ SOLUTIONS: Handel, Healthtech, Fintech, Logistik, EdTech und angewandte Computer Vision, mit Screenshots dessen, was tatsächlich live ging.',
    ogDescription: 'Ausgewählte Projekte, mit Screenshots dessen, was tatsächlich live ging.',
    headEyebrow: 'Ausgewählte Projekte',
    headTitle: 'Was wir geliefert haben.',
    headSub:
      'Ein laufendes Verzeichnis unserer Projekte. Neue Einträge kommen dazu, sobald Projekte abgeschlossen sind.',
  },

  caseStudy: {
    breadcrumbHome: 'Start',
    breadcrumbWork: 'Projekte',
    back: 'Zurück zu den Projekten',
    clientPrefix: 'Kunde / ',
    headlineResult: 'KERNERGEBNIS',
    challenge: 'Die Herausforderung',
    approach: 'Der Ansatz',
    result: 'Das Ergebnis',
    whatShipped: 'Was geliefert wurde',
    insideBuild: 'Ein Blick hinein',
    nextCase: 'Nächste Fallstudie',
    nextArrow: '→',
    startProject: 'Projekt starten',
  },

  privacy: {
    metaTitle: 'Datenschutzerklärung',
    metaDescription:
      'Was THODZ SOLUTIONS erhebt, wenn Sie uns kontaktieren, warum, und wie Sie es löschen lassen.',
    ogDescription: 'Was wir erheben, warum, und wie Sie es löschen lassen.',
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: August 2026',
    intro:
      'Diese Website wird von THODZ SOLUTIONS betrieben, einem Engineering-Studio mit Sitz in Algerien. Diese Seite beschreibt, welche personenbezogenen Daten die Website verarbeitet, warum, und was Sie dagegen tun können. Kurzfassung: Wir erheben, was Sie in das Kontaktformular schreiben, wir nutzen es, um Ihnen zu antworten, und sonst nichts.',
    sections: [
      {
        h: 'Was wir erheben',
        items: [
          {
            lead: 'Kontaktformular.',
            text: 'Name, geschäftliche E-Mail-Adresse, Unternehmen, Projektart, Zeitrahmen und die Projektdetails, die Sie schreiben. Das Absenden des Formulars übermittelt uns genau diese Felder per E-Mail, damit eine Entwicklerin oder ein Entwickler antworten kann.',
          },
          {
            lead: 'Direkte Kanäle.',
            text: 'Wenn Sie uns schreiben, anrufen oder über WhatsApp kontaktieren, sehen wir, was diese Dienste uns zeigen: Ihre Adresse oder Nummer und Ihre Nachricht.',
          },
          {
            lead: 'Design-Einstellung.',
            text: 'Der Hell-/Dunkel-Schalter speichert Ihre Wahl in Ihrem eigenen Browser (localStorage). Sie verlässt Ihr Gerät nie.',
          },
        ],
      },
      {
        h: 'Was wir nicht tun',
        items: [
          {
            text: 'Keine Werbe-Tracker und kein Verkauf oder Weitergeben Ihrer Daten an Dritte.',
          },
          { text: 'Keine Marketinglisten: Eine Kontaktaufnahme abonniert Sie für gar nichts.' },
          {
            text: 'Kein Profiling: Ihre Nachricht wird von einem Menschen gelesen, nicht von einem Werkzeug bewertet.',
          },
        ],
      },
      {
        h: 'Wie lange wir es aufbewahren',
        ps: [
          'Projektanfragen bewahren wir so lange auf, wie das Gespräch oder der daraus folgende Auftrag läuft. Wird nichts aus einer Anfrage, haben wir keinen Grund, sie zu behalten.',
        ],
      },
      {
        h: 'Ihre Rechte',
        ps: [
          'Schreiben Sie an {email}, um zu erfahren, was wir über Sie gespeichert haben, es berichtigen oder löschen zu lassen. Wir antworten innerhalb eines Werktags, dasselbe Versprechen wie bei Projektanfragen.',
        ],
      },
      {
        h: 'Dienstleister',
        ps: [
          'Die Website wird bei Cloudflare gehostet, Einsendungen aus dem Kontaktformular werden in einer von Supabase gehosteten Datenbank gespeichert, und diese Einsendungen erreichen unser Postfach zusätzlich über einen E-Mail-Zustelldienst. Alle drei verarbeiten Daten in unserem Auftrag, um diese Funktionen zu erbringen, und zu keinem anderen Zweck.',
        ],
      },
      {
        h: 'Änderungen',
        ps: [
          'Ändert sich diese Erklärung, ändert sich das Datum oben mit ihr. Wesentliche Änderungen werden hier vermerkt und nicht still eingefügt.',
        ],
      },
    ],
  },

  terms: {
    metaTitle: 'Nutzungsbedingungen',
    metaDescription:
      'Die Bedingungen für die Nutzung von thodz.com und die Grundlagen, auf denen Aufträge von THODZ SOLUTIONS aufbauen.',
    ogDescription:
      'Die Bedingungen hinter der Website und die Grundlage, von der jeder Projektvertrag ausgeht.',
    title: 'Nutzungsbedingungen',
    updated: 'Zuletzt aktualisiert: August 2026',
    intro:
      'Diese Bedingungen gelten für Ihre Nutzung dieser Website. Kundenaufträge unterliegen einem pro Projekt unterzeichneten schriftlichen Vertrag; die folgenden Grundsätze beschreiben, worauf diese Verträge aufbauen, damit Sie die Form der Vereinbarung kennen, bevor Sie eine zu Gesicht bekommen.',
    sections: [
      {
        h: 'Nutzung dieser Website',
        items: [
          {
            text: 'Die Inhalte hier dienen dazu, unsere Leistungen und bisherigen Projekte zu beschreiben.',
          },
          {
            text: 'Fallstudien beschreiben echte Aufträge. Wo ein Kunde nicht genannt werden kann, wird die Arbeit beschrieben, ohne ihn zu identifizieren.',
          },
          {
            text: 'Missbrauchen Sie die Website nicht: kein Scraping in missbräuchlicher Frequenz, kein Ausspähen, keine Störversuche.',
          },
        ],
      },
      {
        h: 'Grundlage jedes Auftrags',
        ps: ['Jeder Projektvertrag, den wir unterzeichnen, geht von diesen Positionen aus:'],
        items: [
          {
            lead: 'Die Arbeit gehört Ihnen.',
            text: 'Mit vollständiger Zahlung gehen Code, Designs und Dokumentation, die für Ihr Projekt entstanden sind, auf Sie über.',
          },
          {
            lead: 'Umfang und Preis stehen vor Arbeitsbeginn schriftlich fest.',
            text: 'Änderungen werden als Änderungen vereinbart, nicht auf einer Rechnung entdeckt.',
          },
          {
            lead: 'Vertraulichkeit ist Standard.',
            text: 'Wir unterzeichnen eine angemessene Geheimhaltungsvereinbarung und behandeln unveröffentlichte Projektdetails als vertraulich, ob eine unterzeichnet wird oder nicht.',
          },
          {
            lead: 'Nach dem Launch.',
            text: 'Zur Lieferung gehören Dokumentation und ein Betriebshandbuch sowie eine vertraglich festgelegte Fehlerbehebung.',
          },
        ],
      },
      {
        h: 'Keine Gewähr für Website-Inhalte',
        ps: [
          'Die Website wird so bereitgestellt, wie sie ist. Wir halten sie aktuell, aber sie ist keine Beratung und kein Vertrag: Nichts hier begründet einen Auftrag, bevor ein Leistungsumfang von beiden Seiten unterzeichnet ist.',
        ],
      },
      {
        h: 'Haftung',
        ps: [
          'Soweit gesetzlich zulässig, haften wir nicht für Schäden aus der Nutzung dieser Website. Die Haftung innerhalb eines Kundenauftrags ist im jeweiligen Vertrag geregelt.',
        ],
      },
      {
        h: 'Kontakt',
        ps: ['Fragen zu diesen Bedingungen: {email}.'],
      },
    ],
  },
};

export default de;
