export const SERVICES = [
  { icon: 'Code2', title: 'Web Development', description: 'Full-stack apps and marketing sites built for scale, from React frontends to Postgres-backed APIs.' },
  { icon: 'Smartphone', title: 'Mobile Apps', description: 'Native iOS/Android and cross-platform apps shipped to the store, not just a Figma file.' },
  { icon: 'Monitor', title: 'Desktop Software', description: 'Cross-platform desktop tools for internal ops, engineering, and regulated environments.' },
  { icon: 'Workflow', title: 'DevOps', description: 'CI/CD, container orchestration, and infrastructure-as-code, with deploys measured in minutes.' },
  { icon: 'ShieldCheck', title: 'Cybersecurity', description: 'Threat modeling, hardening, and secure-by-default architecture for teams that can’t afford a breach.' },
  { icon: 'Cpu', title: 'AI / ML Solutions', description: 'Applied ML: recommendation, forecasting, and LLM-backed workflows shipped to production.' },
  { icon: 'Zap', title: 'Automation', description: 'Replace manual ops with resilient pipelines: data sync, reporting, internal tooling.' },
  { icon: 'PenTool', title: 'UI/UX Design', description: 'Interfaces designed for the people who’ll use them daily, not just the demo.' },
  { icon: 'Compass', title: 'Project Consulting', description: 'Technical due diligence, architecture review, and roadmap planning for leadership teams.' },
];

export const PROCESS = [
  { title: 'Discover', description: 'Scope, constraints, and success metrics: a short technical audit, not a sales deck.' },
  { title: 'Architect', description: 'System design, risk register, and a delivery plan your team can review line by line.' },
  { title: 'Build', description: 'Iterative delivery in weekly increments, visible in a staging environment from week one.' },
  { title: 'Ship', description: 'Production rollout with a rollback plan, monitoring, and a runbook your team keeps.' },
  { title: 'Support', description: 'On-call coverage and a maintenance retainer, or a clean handoff. Your call.' },
];

export const VALUES = [
  { title: 'One accountable team', description: 'No handoffs between strangers. The engineers who scope your project are the ones who ship it.' },
  { title: 'Documented by default', description: 'Architecture decisions, runbooks, and API contracts are written down, not tribal knowledge.' },
  { title: 'Built for handoff', description: 'Every engagement ends with your team able to run the system without us, whether or not you keep us on retainer.' },
];

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------
// Real people only. `photo` is a path under /public. Add engineers here as the
// team grows; the about page renders however many entries exist.
export const TEAM = [
  {
    name: 'Hatem Telli',
    role: 'Founder & technical lead',
    // Swap for a proper headshot when one exists. This is the founder's
    // current public profile photo.
    photo: '/team/hatem-telli.jpg',
    bio: 'Hatem scopes and leads every THODZ engagement. His background is in cryptography and systems security, and he has worked as a technical lead across web, mobile, and applied ML delivery: the same three areas most THODZ projects land in.',
    credentials: [
      'Master’s degree in cryptography & information security',
      'Technical lead across web, mobile, and applied ML delivery',
      'Works in French, English, and Arabic',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/tellihatem' },
      { label: 'LinkedIn', href: null },
    ],
  },
];

// ---------------------------------------------------------------------------
// Engagement models
// ---------------------------------------------------------------------------
// `startingAt` is intentionally null: nothing about a price is guessed here.
// Fill it in with a real floor (e.g. 'From €6,000') and the figure appears in
// the pricing table. Until then each model shows "Scoped per project".
export const ENGAGEMENTS = [
  {
    name: 'Fixed-price project',
    startingAt: null,
    placeholderPrice: 'From €6,000',
    bestFor: 'A defined system with a known scope: a product build, a rebuild, a migration.',
    billing: 'Milestone-based. A deposit to start, the balance split across agreed delivery milestones.',
    includes: [
      'Discovery audit and written scope',
      'Architecture document and risk register',
      'Weekly increments on a staging environment',
      'Runbook and handoff at delivery',
      '30 days of post-launch bug cover',
    ],
  },
  {
    name: 'Monthly retainer',
    startingAt: null,
    placeholderPrice: 'From €2,500 / month',
    bestFor: 'Ongoing product work where scope moves: a roadmap rather than a single deliverable.',
    billing: 'A fixed monthly fee for an agreed capacity. Cancel with 30 days’ notice.',
    includes: [
      'Agreed engineering capacity each month',
      'Roadmap planning and prioritisation',
      'Continuous delivery to your environments',
      'Direct channel to the engineers building it',
      'Monthly written progress summary',
    ],
    highlight: true,
  },
  {
    name: 'Support & operations',
    startingAt: null,
    placeholderPrice: 'From €600 / month',
    bestFor: 'A system already in production: yours or ours, kept patched, monitored, and alive.',
    billing: 'A fixed monthly fee by response tier. No minimum term beyond the first three months.',
    includes: [
      'Monitoring, alerting, and dependency patching',
      'Agreed response window for incidents',
      'Small changes and fixes within a monthly allowance',
      'Quarterly security and dependency review',
      'Escalation path to the original build team',
    ],
  },
  {
    name: 'Consulting & audit',
    startingAt: null,
    placeholderPrice: 'From €1,200',
    bestFor: 'You need a decision, not a build: architecture review, technical due diligence, a second opinion.',
    billing: 'Fixed fee for a defined engagement, or a day rate for ongoing advisory.',
    includes: [
      'Codebase and architecture review',
      'Security and infrastructure assessment',
      'Written findings with prioritised remediation',
      'Read-out session with your team or board',
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
// These are commitments, not marketing copy. Review them before launch and
// make sure the contract you actually sign says the same thing.
export const FAQ = [
  {
    q: 'Who owns the code you write?',
    a: 'You do. On final payment, all source code, designs, and documentation produced for your project transfer to you outright, including the repository history. We keep no licence over your product and we don’t reuse your code in another client’s system. Where a project uses open-source components, their own licences continue to apply, and we list every one of them in the handoff documentation.',
  },
  {
    q: 'How does billing work?',
    a: 'Fixed-price projects are billed against delivery milestones: a deposit to start, then the balance released as each milestone is accepted. Retainers and support plans are billed monthly in advance. Invoices are payable in EUR, USD, or DZD by bank transfer. Every invoice states exactly what it covers.',
  },
  {
    q: 'What does the contract cover?',
    a: 'A written agreement before any work starts, covering scope, milestones, payment terms, IP transfer, confidentiality, and how either side can end the engagement. Change requests are quoted and agreed in writing before they’re built, so scope never quietly expands into your invoice.',
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Yes, and we’ll sign yours rather than insisting on our own. Tick the NDA box on the contact form and we’ll handle it before you send us anything sensitive. Every engagement is covered by mutual confidentiality regardless of whether a separate NDA is signed.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project ships with a runbook, an architecture document, and a handoff session, so your team can operate the system without us. Fixed-price projects include 30 days of bug cover after launch. Beyond that you can move onto a support plan, or take it in-house entirely: both are normal endings, and we don’t hold your infrastructure hostage to keep you.',
  },
  {
    q: 'How quickly do you reply?',
    a: 'Within one business day of your first message, from an engineer rather than a sales team. From there, a first call to scope the work usually happens the same week.',
  },
  {
    q: 'Where are you based, and which timezones do you cover?',
    a: 'We’re based in Algeria (UTC+1) and work remotely with clients across Europe, the Middle East, and North America. Our working hours overlap the full European business day and most of the US East Coast morning.',
  },
  {
    q: 'Which languages do you work in?',
    a: 'French, English, and Arabic. That covers meetings, written documentation, and the product itself: we build multilingual interfaces, including right-to-left layouts for Arabic, as a normal part of delivery rather than a bolt-on.',
  },
];

// ---------------------------------------------------------------------------
// Client testimonials
// ---------------------------------------------------------------------------
// NOTHING HERE MAY BE INVENTED. Every entry needs a real, attributable quote
// from a real client who agreed to be quoted.
//
// Entries marked `placeholder: true` are obviously fake sample data used to
// preview the layout locally (NEXT_PUBLIC_SHOW_PLACEHOLDERS=1). They never
// render in production. To publish a real one: delete the placeholder flag,
// replace every field, and add the client's logo to /public/clients if you
// have written permission to use it.
export const TESTIMONIALS = [
  {
    placeholder: true,
    quote: 'PLACEHOLDER — replace with a real, approved client quote. Two or three sentences on the problem they had, what shipped, and what changed afterwards.',
    name: 'Client name',
    title: 'Role, Company',
    project: 'sadjia-ceram',
    avatar: null,
  },
  {
    placeholder: true,
    quote: 'PLACEHOLDER — a second approved quote. Specifics beat praise: a number, a deadline met, a system that stopped breaking.',
    name: 'Client name',
    title: 'Role, Company',
    project: 'chronic-disease-monitoring',
    avatar: null,
  },
];

// Client logos for the trust strip. Same rule: only real clients who have
// agreed to be named. `logo` is a path under /public/clients.
export const CLIENTS = [
  { placeholder: true, name: 'Client one', logo: null },
  { placeholder: true, name: 'Client two', logo: null },
  { placeholder: true, name: 'Client three', logo: null },
  { placeholder: true, name: 'Client four', logo: null },
  { placeholder: true, name: 'Client five', logo: null },
];

// ---------------------------------------------------------------------------
// Case studies
// ---------------------------------------------------------------------------
// Real, shipped work. Keep this list honest: no placeholder metrics or
// invented client names. Add entries here as engagements are completed.
// `hidden: true` keeps an entry's data in place (and its detail page
// un-generated, so the URL 404s) without deleting it. Use this to pull a
// case study from the public site temporarily.
//
// `images` are real screenshots of the shipped product, stored under
// /public/work/<slug>/. The first image is used as the card thumbnail and the
// detail-page lead. `tall: true` marks a full-page capture, which is framed
// as a scroll rather than a viewport. An entry with no images falls back to
// the generated cover motif, so adding screenshots later is a data-only edit.
//
// `quote` is an optional approved client quote shown on the detail page. Same
// rule as TESTIMONIALS: real and attributable, or absent.
const ALL_CASE_STUDIES = [
  {
    slug: 'sadjia-ceram',
    tag: 'Retail · Web',
    category: 'Web',
    title: 'SADJIA CERAM: digital showroom',
    client: 'SADJIA CERAM, Es Senia, Oran',
    summary: 'A digital product catalog and real-time price estimator for a ceramic tile retailer in Oran, replacing phone-quoted pricing with self-serve browsing and quoting.',
    stack: ['HTML/CSS/JS', 'Admin dashboard', 'DZD pricing engine'],
    metric: 'Catalog + estimator + admin, one build',
    challenge: 'SADJIA CERAM sells premium floor and wall tiles from a showroom in Es Senia, Oran. Every enquiry ran through the same bottleneck: a customer saw a tile somewhere, called the showroom, described it, and waited while someone worked out what a room of it would cost. Nothing about the catalogue or the pricing existed anywhere a customer could reach on their own, so the showroom team spent their day quoting by phone instead of selling, and customers arrived with no idea of budget.',
    approach: 'We built the showroom as a product customers can use before they call. The catalogue is filterable by collection, tile dimension, and type, so a customer narrows to the four tiles worth considering rather than scrolling a spreadsheet. Each product page carries the real dimensions and the real per-square-metre price. The estimator sits on top: enter a surface area, add several tiles to a project, and it returns a formatted total in Algerian dinar, computed with the same pricing rules the showroom uses by hand. Behind it, an admin dashboard lets the showroom team add products, upload imagery, and change dimensions and prices without touching code or waiting on us. WhatsApp, Instagram, and the showroom’s Google Maps location are wired into every page, because in this market the enquiry finishes on WhatsApp whether or not you plan for it.',
    result: 'The showroom now runs a live catalogue and quoting tool customers use before ever picking up the phone, and a management dashboard the team operates day to day. Pricing changes take one person a minute instead of a call to a developer.',
    outcomes: [
      'Self-serve catalogue with filtering by dimension, type, and collection',
      'Real-time project estimator priced per m², formatted in DZD',
      'Admin dashboard for products, imagery, dimensions, and pricing',
      'WhatsApp, social, and Maps routes to the physical showroom on every page',
      'Responsive across mobile, tablet, and desktop',
    ],
    images: [
      { src: '/work/sadjia-ceram/home.webp', w: 1301, h: 3835, tall: true, alt: 'SADJIA CERAM home page: hero, collections, and featured products with per-square-metre pricing', caption: 'Home: collections and featured products, priced per m²' },
      { src: '/work/sadjia-ceram/filter.webp', w: 1301, h: 1971, tall: true, alt: 'Product catalogue filtered by tile dimension and type', caption: 'Catalogue filtering by dimension and type' },
      { src: '/work/sadjia-ceram/details.webp', w: 1301, h: 1834, tall: true, alt: 'Product detail page for a single tile with dimensions and pricing', caption: 'Product detail with dimensions and pricing' },
      { src: '/work/sadjia-ceram/dashboard.webp', w: 1899, h: 913, alt: 'Admin dashboard for managing products, dimensions, and prices', caption: 'Admin dashboard the showroom team runs day to day' },
    ],
  },
  {
    slug: 'logistics-dashboard',
    tag: 'Logistics · Desktop',
    category: 'Desktop',
    title: 'Logistics & distribution management dashboard',
    summary: 'A desktop and web dashboard for tracking transportation and distribution operations, packaged as a native app alongside a Supabase-backed web deployment.',
    stack: ['Electron', 'Vite + TypeScript', 'Supabase'],
    metric: 'Desktop + web from one codebase',
    challenge: 'A transportation and distribution operation needed one system to track fleet, deliveries, and the financial side of the business, deployable both as an installed desktop tool and a hosted web app.',
    approach: 'We built the dashboard once in Vite and TypeScript and shipped it two ways: an Electron desktop build for local/offline use, and a Supabase-backed web deployment, using the same codebase and data layer.',
    result: 'A single dashboard covering distribution operations and financials, packaged for both desktop installs and web access.',
    outcomes: [
      'One TypeScript codebase, two delivery targets',
      'Electron build for installed, local-first use',
      'Supabase-backed web deployment sharing the same data layer',
    ],
    images: [],
  },
  {
    slug: 'ability-beyond-disability',
    tag: 'Social impact · Web',
    category: 'Web',
    title: 'Ability Beyond Disability',
    client: 'رغم إعاقتي أبدع — national talent showcase, Algeria',
    summary: 'A bilingual (Arabic/English) landing page showcasing the talents and achievements of people with disabilities across Algeria.',
    stack: ['HTML/CSS', 'Bilingual (AR/EN)'],
    metric: 'Nationwide talent showcase',
    challenge: 'People with disabilities across Algeria needed a public platform to showcase their creative and professional work: one that reads as a polished showcase, not a charity page.',
    approach: 'We designed a visually engaging, accessible static site: a talent gallery with specialisation and location for each person, national statistics on registered talents and provinces represented, an events section for workshops and exhibitions, and a newsletter signup. Built to load fast with no backend dependency, and written in both Arabic and English so it reads natively to its audience.',
    result: 'A live, accessible showcase site highlighting talent from across Algeria’s provinces.',
    outcomes: [
      'Talent gallery with specialisation, location, and tags per person',
      'National statistics: registered talents, provinces, artworks, events',
      'Events section for workshops, exhibitions, and competitions',
      'Bilingual Arabic/English, no backend dependency',
    ],
    images: [],
  },
  {
    slug: 'little-hafiz',
    tag: 'EdTech · Mobile',
    category: 'Mobile',
    title: 'Little Hafiz: Quran memorization app',
    summary: 'A Flutter Quran memorization app for kids and adults, with verse-by-verse listening, progress tracking, and an installable offline-capable web build.',
    stack: ['Flutter', 'PWA / offline-capable', 'Cross-platform'],
    metric: 'Web, iOS & Android from one codebase',
    challenge: 'Quran memorization apps are common, but few are built for kids specifically, with progress parents can actually follow.',
    approach: 'We built one Flutter codebase spanning verse-by-verse listening, multiple memorization methods, and progress tracking, shipped as an installable, offline-capable Progressive Web App with mobile builds from the same source.',
    result: 'A cross-platform memorization app installable straight from the browser, no app-store gatekeeping required.',
    outcomes: [
      'Verse-by-verse listening with surah browsing',
      'Multiple memorization methods and progress tracking',
      'Installable, offline-capable PWA plus iOS and Android builds',
    ],
    images: [],
  },
  {
    slug: 'sahafood',
    tag: 'Foodtech · Mobile',
    category: 'Mobile',
    title: 'SahaFood: food delivery app',
    summary: 'A Flutter food delivery app covering the customer-facing ordering flow. Currently in active development.',
    stack: ['Flutter', 'Mobile'],
    metric: 'In active development',
    challenge: 'Food delivery in the target market runs through phone orders and third-party apps that take a cut of every sale. SahaFood needed its own ordering channel.',
    approach: 'We’re building the customer-facing Flutter app first: browsing, ordering, checkout, with the merchant and delivery-side systems to follow.',
    result: 'The ordering app is in active development. This entry will update as it ships.',
    outcomes: [
      'Customer browsing, ordering, and checkout flow',
      'Merchant and delivery-side systems to follow',
    ],
    images: [],
  },
  {
    slug: 'id-verification-pipeline',
    tag: 'Computer vision · AI/ML',
    category: 'AI/ML',
    title: 'ID card detection & segmentation pipeline',
    summary: 'A computer-vision pipeline that detects, segments, and perspective-corrects Algerian ID cards from a phone camera frame, producing an OCR-ready crop.',
    stack: ['YOLOv8', 'ONNX / TFLite', 'Python + Flutter'],
    metric: 'Camera frame to OCR-ready crop, on-device',
    challenge: 'Reading an ID card reliably from a phone photo means handling rotation, partial framing, and inconsistent lighting before OCR ever runs.',
    approach: 'We trained a YOLOv8 segmentation model on the MIDV-500 dataset to find and mask the card, paired with a lightweight oriented-bounding-box detector for mobile framing, exporting both to ONNX and TFLite for on-device inference.',
    result: 'A camera-to-crop pipeline (detect, segment, perspective-warp) ready to feed any OCR engine, running on-device on mobile.',
    outcomes: [
      'YOLOv8 segmentation trained on the MIDV-500 dataset',
      'Oriented-bounding-box detector for live mobile framing',
      'ONNX and TFLite exports for on-device inference',
      'Perspective-warped, OCR-ready output crop',
    ],
    images: [],
  },
  {
    slug: 'tradevirtual',
    tag: 'Fintech · Web',
    category: 'Web',
    title: 'TradeVirtual: crypto paper-trading platform',
    summary: 'A gamified platform for practicing cryptocurrency trading with simulated funds: live prices, XP and leaderboards, no real money at risk.',
    stack: ['Next.js', 'TypeScript', 'Prisma'],
    metric: '6 tracked assets · live pricing',
    challenge: 'New traders want to learn how crypto trading actually feels without risking real money, and most paper-trading tools feel like spreadsheets, not products.',
    approach: 'We built a full trading simulator on Next.js and Prisma: live prices pulled from Binance every five seconds across BTC, ETH, BNB, SOL, ADA, and DOGE, a real buy/sell flow with complete trade history, and a gamification layer (XP per trade, levels, a global leaderboard, and an XP-to-balance exchange) to keep it engaging. Sign-in runs through Telegram authentication rather than another password to forget.',
    result: 'A live simulated-trading platform with real-time pricing and a competitive leaderboard, not just a static demo.',
    outcomes: [
      'Live prices across six assets, refreshed every five seconds from Binance',
      'Full buy/sell flow with portfolio and complete trade history',
      'XP, levels, global leaderboard, and XP-to-balance exchange',
      'Telegram authentication instead of another password',
    ],
    images: [],
  },
  {
    slug: 'thodz-builder',
    tag: 'SaaS · Web',
    category: 'Web',
    title: 'THODZ Builder: no-code portfolio builder',
    client: 'THODZ SOLUTIONS (in-house product)',
    summary: 'A drag-and-drop website builder that lets anyone assemble a professional portfolio site from customizable templates, no code required.',
    stack: ['Next.js', 'Prisma + Postgres', 'Supabase'],
    metric: '5 templates · drag-and-drop editor',
    challenge: 'Freelancers who need a portfolio site rarely want to hand-code one, and often can’t. The tools aimed at them split into two disappointing halves: builders so generic that every result looks identical, and builders so locked down that the first thing you want to change is the thing you can’t. We wanted the middle: real templates that are genuinely editable, without dropping anyone into a code editor.',
    approach: 'We built the editor around direct manipulation. Sections reorder by dragging (@dnd-kit), and any element edits in place: click the text and type, click the image and swap it, open the style panel and change colours, fonts, and spacing. Five templates ship with real points of view rather than colour variations of one layout — Modern Minimal, Creative Bold, Developer Tech, Designer Elegant, and Business Professional — and switching between them keeps your content intact. Everything auto-saves. Accounts, persistence, and asset storage run on Supabase with Prisma over Postgres, so a half-finished site is still there tomorrow.',
    result: 'A working no-code builder covering template selection, drag-and-drop editing, style customisation, and sign-up through account management end to end.',
    outcomes: [
      'Drag-and-drop section reordering built on @dnd-kit',
      'Five distinct templates, switchable without losing content',
      'In-place editing of text, images, colours, fonts, and spacing',
      'Add, remove, reorder, and hide sections',
      'Auto-save with Supabase accounts on Prisma + Postgres',
    ],
    images: [
      { src: '/work/thodz-builder/editor.webp', w: 1920, h: 913, alt: 'THODZ Builder editor showing the Developer Tech template with the style panel open', caption: 'Editor: the Developer Tech template with the style panel open' },
      { src: '/work/thodz-builder/templates.webp', w: 1969, h: 915, alt: 'Template selection screen showing the five available templates', caption: 'Template selection: five distinct starting points' },
      { src: '/work/thodz-builder/signup.webp', w: 1920, h: 915, alt: 'Sign-up screen for the builder account system', caption: 'Sign-up and account creation' },
    ],
  },
  {
    slug: 'chronic-disease-monitoring',
    tag: 'Healthtech · Web',
    category: 'Web',
    title: 'Chronic disease monitoring platform',
    summary: 'A role-based web app where patients log health measurements and receive AI-drafted, doctor-reviewed treatment guidance.',
    stack: ['Firebase Auth', 'Firebase Realtime Database', 'JavaScript'],
    metric: 'Patient + doctor roles · doctor-approved output',
    challenge: 'Patients managing a chronic condition need a simple way to log measurements and get guidance back. An AI model can draft that guidance in seconds, which is exactly the problem: unreviewed medical suggestions delivered straight to a patient are a liability, not a feature. The system had to be useful enough that patients keep logging, and safe enough that nothing reaches them without a clinician having read it.',
    approach: 'We built the clinical review step into the data model rather than bolting it on. Patients submit measurements — taken from medical sensors — through a mobile-first flow and see their full history. Each submission generates an AI-drafted report on the backend only, never in the browser, and that draft lands in a doctor’s queue rather than the patient’s inbox. The doctor account reviews, edits, and approves every report and prescription before the patient sees anything; an unreviewed draft has no path to the patient at all. Authentication runs on Firebase with email verification by OTP and Google sign-in, over a Realtime Database that keeps both sides of the history in sync.',
    result: 'A working patient/doctor monitoring loop — submission, AI drafting, clinical review, release — with full history tracking on both sides and no route for unreviewed output to reach a patient.',
    outcomes: [
      'Two roles in one system: patient submission, doctor review',
      'AI drafting confined to the backend, gated behind clinical approval',
      'Doctors edit and approve every report and prescription before release',
      'Full measurement and treatment history for both roles',
      'Firebase Auth with OTP email verification and Google sign-in',
      'Mobile-first responsive across every screen',
    ],
    images: [
      { src: '/work/chronic-disease-monitoring/patient-dashboard.webp', w: 1903, h: 910, alt: 'Patient dashboard showing logged health measurements and history', caption: 'Patient dashboard: measurements and history' },
      { src: '/work/chronic-disease-monitoring/new-checkup.webp', w: 1910, h: 910, alt: 'New checkup form where a patient submits health measurements', caption: 'Submitting a new set of measurements' },
      { src: '/work/chronic-disease-monitoring/doctor-review.webp', w: 1910, h: 910, alt: 'Doctor review screen for editing and approving an AI-drafted report', caption: 'Doctor review: every draft is edited and approved before release' },
    ],
  },
  {
    slug: 'boonka',
    hidden: true,
    tag: 'Fintech · Payments',
    category: 'Web',
    title: 'Boonka: payment gateway platform',
    summary: 'Product design and website for a digital payment platform serving Algerian e-commerce, spanning personal, business, and partner-facing applications.',
    stack: ['Next.js', 'Payments', 'Multilingual (FR/EN/AR)'],
    metric: '3 applications · 1 platform',
    challenge: 'Boonka needed a trust-first digital identity for a market where buyers and merchants are wary of online payment: online shoppers who don’t fully trust paying before delivery, and merchants who need to get paid without arbitrary delays.',
    approach: 'We designed the product experience and marketing site around a single idea (payment protection) and built it to speak to two audiences from one entry point: a personal wallet app for shoppers, and a business app for merchants, each with its own dedicated flows, before converging on shared trust signals (secured funds, real-time transaction visibility).',
    result: 'A coherent, multilingual (French / English / Arabic) product and website spanning all three Boonka applications (individual, business, and partner) ready for the platform’s public launch.',
    outcomes: [],
    images: [],
  },
];

export const CASE_STUDIES = ALL_CASE_STUDIES.filter((c) => !c.hidden);
export const CASE_STUDIES_ALL = ALL_CASE_STUDIES;

// Case studies that have real screenshots, newest-first by list order. Used to
// lead the work page and the homepage grid with the ones that show something.
export const CASE_STUDIES_WITH_IMAGES = CASE_STUDIES.filter((c) => c.images?.length);
