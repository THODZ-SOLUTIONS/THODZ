// English UI strings — the reference dictionary. fr.js and ar.js mirror this
// structure key for key; if you add a key here, add it there too.

const en = {
  meta: {
    title: 'THODZ SOLUTIONS: Full-stack engineering studio',
    template: '%s · THODZ SOLUTIONS',
    description:
      'THODZ SOLUTIONS designs, builds, and operates web, mobile, desktop, and infrastructure systems for teams who need it done right the first time. Based in Algeria, working remotely in French, English, and Arabic.',
    ogDescription: 'One technical partner. Every system you need.',
    orgDescription:
      'Full-stack engineering studio delivering web, mobile, desktop, DevOps, security, AI/ML, automation, UI/UX, and technical consulting.',
  },

  nav: {
    services: 'Services',
    work: 'Work',
    process: 'Process',
    pricing: 'Pricing',
    about: 'About',
    startProject: 'Start a project',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
  },

  footer: {
    blurb:
      'A full-stack engineering studio. Web, mobile, desktop, and infrastructure systems, built and operated by one accountable team.',
    locale: 'Algeria (UTC+1) · working remotely',
    company: 'Company',
    contact: 'Contact',
    elsewhere: 'Elsewhere',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  engagementCard: {
    scoped: 'Scoped per project',
    placeholderFlag: 'placeholder',
    bestFor: 'Best for',
    billing: 'Billing',
    includes: 'Includes',
  },

  notFound: {
    title: 'Page not found',
    body: 'The page you asked for doesn’t exist, or has moved.',
    backHome: 'Back to the homepage',
  },

  home: {
    heroEyebrow: 'Full-stack engineering studio',
    heroTitle: 'One technical partner. Every system you need.',
    heroSub:
      'THODZ SOLUTIONS designs, builds, and operates web, mobile, desktop, and infrastructure systems for teams who need it done right the first time.',
    heroCtaPrimary: 'Start a project',
    heroCtaSecondary: 'View selected work',
    statDisciplines: 'DISCIPLINES COVERED',
    statProjects: 'PROJECTS SHIPPED',
    statLanguagesValue: 'FR·EN·AR',
    statLanguages: 'MULTILINGUAL DELIVERY',
    statReplyValue: '1 DAY',
    statReply: 'REPLY, GUARANTEED',

    servicesEyebrow: 'Capabilities',
    servicesTitle: 'Nine disciplines. One accountable team.',
    servicesSub:
      'We staff full delivery teams, not point solutions. Every engagement can span as many of these as the system needs.',

    workEyebrow: 'Selected work',
    workTitle: 'Recent engagements.',
    workSub: 'A look at what we’ve shipped. More case studies land here as engagements complete.',
    workCta: 'See all work',

    proofEyebrow: 'In their words',
    proofTitle: 'What clients say afterwards.',
    proofSub: 'The part that matters is what still works six months later.',
    proofClients: 'Teams we’ve built for',

    engagementEyebrow: 'Engagement models',
    engagementTitle: 'Priced before it starts, not after.',
    engagementSub:
      'You approve a scope and a number up front. Pick the shape that fits the work: we’ll tell you if you’ve picked the wrong one.',
    engagementCta: 'All models, billing & contract terms',

    processEyebrow: 'How we work',
    processTitle: 'A process built for accountability.',
    processSub: 'Five stages, one team, no handoffs between strangers.',

    valuesEyebrow: 'Why choose us',
    valuesTitle: 'Engineering credibility, not just delivery.',
    valuesSub: 'We publish runbooks, document architecture decisions, and stay reachable after launch.',

    ctaEyebrow: 'Get started',
    ctaTitle: 'Tell us what you’re building.',
    ctaBody:
      'One call with an engineer, not a salesperson. We’ll scope your project and reply within one business day.',
    ctaButton: 'Start a project',
  },

  about: {
    metaTitle: 'About',
    metaDescription:
      'THODZ SOLUTIONS is a full-stack engineering studio: a one-stop technical partner for teams that need it done right the first time. Meet the people behind it.',
    ogDescription: 'The people behind the engineering studio, and how we work.',
    heroTitle: 'THODZ SOLUTIONS builds the systems your roadmap needs, and stays on call after launch.',
    intro1:
      'We’re a full-stack engineering studio: one team covering web, mobile, desktop, DevOps, security, AI/ML, automation, UI/UX, and technical consulting, so you scope a system once, not nine vendor relationships.',
    intro2:
      'We work remotely with clients across timezones, and deliver in French, English, and Arabic when a project calls for it. Every engagement gets a documented architecture, a runbook, and an engineer who stays reachable after the system ships, not a handoff to a support queue.',
    teamEyebrow: 'Who you’ll work with',
    teamTitleSingle: 'The person who answers your email.',
    teamTitlePlural: 'The people who answer your email.',
    teamSub: 'No account managers between you and the engineers. You talk to the people writing the code.',
    coverEyebrow: 'What we cover',
    ctaTitle: 'Have a system to build?',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See how we bill',
  },

  contact: {
    metaTitle: 'Contact',
    metaDescription:
      'Tell THODZ SOLUTIONS about the system you need. Reach us by form, WhatsApp, email, or a booked call. We reply within one business day.',
    ogDescription: 'One call with an engineer, not a salesperson. We reply within one business day.',
    eyebrow: 'Start a project',
    title: 'Tell us about the system you need.',
    bookingDetail: 'Pick a slot that suits you',
    whatsappLabel: 'WhatsApp',
    whatsappPrefill: "Hi THODZ, I'd like to talk about a project.",
    emailLabel: 'Email',
    callLabel: 'Call',
    divider: 'or send the details',
    nextEyebrow: 'What happens next',
    nextSteps: [
      { title: 'We read it', body: 'An engineer reads your message. Not a form-routing tool, and not a salesperson.' },
      { title: 'We reply in one business day', body: 'With first questions, an honest read on fit, and a proposed time to talk.' },
      { title: 'We scope it together', body: 'A call to pin down the problem, then a written scope and a number before anything is built.' },
    ],
  },

  form: {
    name: 'Name',
    email: 'Work email',
    company: 'Company',
    projectType: 'Project type',
    // Values are what the API receives and stay stable across locales; only
    // labels translate.
    typeOptions: [
      { value: 'Web', label: 'Web' },
      { value: 'Mobile', label: 'Mobile' },
      { value: 'Desktop', label: 'Desktop' },
      { value: 'DevOps', label: 'DevOps' },
      { value: 'Cybersecurity', label: 'Cybersecurity' },
      { value: 'AI/ML', label: 'AI/ML' },
      { value: 'Automation', label: 'Automation' },
      { value: 'UI/UX', label: 'UI/UX' },
      { value: 'Consulting', label: 'Consulting' },
    ],
    timeline: 'Timeline',
    timelineAsap: 'ASAP',
    timelineQuarter: '1–3 months',
    timelineFlexible: 'Flexible',
    details: 'Project details',
    detailsPlaceholder: "A sentence or two on what you're building",
    nda: 'This project is under NDA',
    error: 'Something went wrong sending your message. Email us directly at support@thodz.com instead.',
    sending: 'Sending…',
    send: 'Send',
    privacyPre: 'We use these details only to reply to you — see the ',
    privacyLink: 'privacy policy',
    privacyPost: '.',
    sentTitle: 'Message sent',
    sentBody: 'A THODZ engineer will reply within one business day.',
  },

  pricing: {
    metaTitle: 'Pricing & engagement',
    metaDescription:
      'How THODZ SOLUTIONS engagements are structured and billed: fixed-price projects, monthly retainers, support plans, and consulting. Plus who owns the code, what the contract covers, and what happens after launch.',
    ogDescription: 'Four ways to work with us, and the contract terms behind them.',
    headEyebrow: 'Pricing & engagement',
    headTitle: 'Four ways to work with us.',
    headSub:
      'Every project is scoped and quoted before it starts, so you approve a number rather than watch one accumulate. These are the shapes those quotes take.',
    unsure:
      'Not sure which one fits? Describe the problem and we’ll tell you which of these it is, including when the answer is “none of them, you don’t need us for this.”',
    faqEyebrow: 'The details',
    faqTitle: 'The questions worth asking before you sign.',
    faqSub: 'Code ownership, billing, contracts, and what happens once the system is live.',
    ctaTitle: 'Get a number, not a brochure.',
    ctaBody:
      'Tell us what you’re building and we’ll come back within one business day with the engagement model that fits and what it would cost.',
    ctaButton: 'Start a project',
  },

  work: {
    metaTitle: 'Work',
    metaDescription:
      'Selected engagements delivered by THODZ SOLUTIONS: retail, healthtech, fintech, logistics, edtech, and applied computer vision, with screenshots of what shipped.',
    ogDescription: 'Selected engagements, with screenshots of what actually shipped.',
    headEyebrow: 'Selected work',
    headTitle: 'What we’ve shipped.',
    headSub: 'A running record of engagements. New entries land here as projects complete.',
  },

  caseStudy: {
    back: 'Back to work',
    clientPrefix: 'Client / ',
    headlineResult: 'HEADLINE RESULT',
    challenge: 'The challenge',
    approach: 'The approach',
    result: 'The result',
    whatShipped: 'What shipped',
    insideBuild: 'Inside the build',
    nextCase: 'Next case study',
    nextArrow: '→',
    startProject: 'Start a project',
  },

  privacy: {
    metaTitle: 'Privacy policy',
    metaDescription: 'What THODZ SOLUTIONS collects when you contact us, why, and how to have it removed.',
    ogDescription: 'What we collect, why, and how to have it removed.',
    title: 'Privacy policy',
    updated: 'Last updated: August 2026',
    intro:
      'This site is operated by THODZ SOLUTIONS, an engineering studio based in Algeria. This page describes what personal information the site handles, why, and what you can do about it. The short version: we collect what you type into the contact form, we use it to reply to you, and nothing else.',
    sections: [
      {
        h: 'What we collect',
        items: [
          {
            lead: 'Contact form.',
            text: 'Name, work email, company, project type, timeline, and the project details you write. Sending the form transmits exactly those fields to us, by email, so an engineer can reply.',
          },
          {
            lead: 'Direct channels.',
            text: 'If you email, call, or message us on WhatsApp, we see what those services show us: your address or number and your message.',
          },
          {
            lead: 'Theme preference.',
            text: 'The light/dark toggle stores your choice in your own browser (localStorage). It never leaves your device.',
          },
        ],
      },
      {
        h: 'What we don’t do',
        items: [
          { text: 'No advertising trackers and no sale or sharing of your details with third parties.' },
          { text: 'No marketing lists: contacting us does not subscribe you to anything.' },
          { text: 'No profiling: your message is read by an engineer, not scored by a tool.' },
        ],
      },
      {
        h: 'How long we keep it',
        ps: [
          'Project inquiries are kept for as long as the conversation, or the engagement that follows it, stays live. If nothing comes of an inquiry, we have no reason to keep it.',
        ],
      },
      {
        h: 'Your choices',
        ps: [
          'Write to {email} to ask what we hold about you, have it corrected, or have it deleted. We reply within one business day, the same promise we make for project inquiries.',
        ],
      },
      {
        h: 'Service providers',
        ps: [
          'The site is hosted on Vercel, and contact form submissions are delivered to our inbox by an email delivery service. Both process data on our behalf to provide those functions and for no other purpose.',
        ],
      },
      {
        h: 'Changes',
        ps: [
          'If this policy changes, the date at the top changes with it. Substantive changes will be noted here, not slipped in silently.',
        ],
      },
    ],
  },

  terms: {
    metaTitle: 'Terms of service',
    metaDescription:
      'The terms that govern use of thodz.com and the baseline terms THODZ SOLUTIONS engagements are built on.',
    ogDescription: 'The terms behind the site, and the baseline every engagement contract starts from.',
    title: 'Terms of service',
    updated: 'Last updated: August 2026',
    intro:
      'These terms cover your use of this website. Client engagements are governed by a written contract signed per project; the baseline commitments below describe what those contracts are built on, so you know the shape of the deal before you ever see one.',
    sections: [
      {
        h: 'Using this site',
        items: [
          { text: 'The content here is provided to describe our services and past work.' },
          {
            text: 'Case studies describe real engagements. Where a client can’t be named, the work is described without identifying them.',
          },
          { text: 'Don’t misuse the site: no scraping at abusive rates, probing, or attempts to disrupt it.' },
        ],
      },
      {
        h: 'Engagement baseline',
        ps: ['Every project contract we sign starts from these positions:'],
        items: [
          {
            lead: 'You own the work.',
            text: 'On full payment, the code, designs, and documentation produced for your project transfer to you.',
          },
          {
            lead: 'Scope and price are written before work starts.',
            text: 'Changes are agreed as changes, not discovered on an invoice.',
          },
          {
            lead: 'Confidentiality is standard.',
            text: 'We’ll sign a reasonable NDA, and we treat unpublished project details as confidential whether one is signed or not.',
          },
          {
            lead: 'After launch.',
            text: 'Delivery includes documentation and a runbook, and fixed bug cover as defined in the contract.',
          },
        ],
      },
      {
        h: 'No warranty on site content',
        ps: [
          'The site is provided as-is. We keep it accurate, but it isn’t advice, and it isn’t a contract: nothing here creates an engagement until a scope is signed by both sides.',
        ],
      },
      {
        h: 'Liability',
        ps: [
          'To the extent permitted by law, we are not liable for damages arising from use of this website. Liability within a client engagement is defined in that engagement’s contract.',
        ],
      },
      {
        h: 'Contact',
        ps: ['Questions about these terms: {email}.'],
      },
    ],
  },
};

export default en;
