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
// ---------------------------------------------------------------------------
// Problem picker (home)
// ---------------------------------------------------------------------------
// The homepage opens from the client's side of the table rather than ours:
// they pick the sentence that sounds like their week, and we show what we'd
// build. `disciplines` are matched against DISCIPLINE_LABELS below, and `ref`
// points at a case study by slug. An entry with ref: null simply renders no
// "we've shipped this" line — there is no stand-in copy for work we can't
// point at yet.
export const DISCIPLINE_LABELS = [
  'Web',
  'Mobile',
  'Desktop',
  'DevOps',
  'Cybersecurity',
  'AI / ML',
  'Automation',
  'UI/UX',
  'Consulting',
];

export const PROBLEMS = [
  {
    title: 'I want to sell or take bookings online',
    build: 'A storefront or booking platform with online and cash-on-delivery payments, delivery quotes, and an admin your team can run alone.',
    gets: ['Catalog, cart and checkout', 'Admin for orders, stock and prices', 'Hosting, backups and monitoring'],
    first: 'A 30-min call, then a written scope in week one.',
    ref: 'sadjia-ceram',
    refLabel: 'SADJIA CERAM: catalog + live price estimator',
    disciplines: ['Web', 'UI/UX', 'DevOps', 'Cybersecurity'],
  },
  {
    title: 'Our operations still run on spreadsheets and phone calls',
    build: 'One internal tool for the work you track by hand today (orders, shipments, invoices, staff), with reports built in.',
    gets: ['Desktop or web app, your choice', 'Invoicing and reporting in one place', 'Roles so each person sees their part'],
    first: 'We sit with how your team works today and map it.',
    ref: 'logistics-dashboard',
    refLabel: 'Distribution dashboard: desktop + web, one codebase',
    disciplines: ['Desktop', 'Web', 'Automation', 'UI/UX'],
  },
  {
    title: 'We have an app idea and need it shipped',
    build: 'Your product taken from idea to the App Store and Google Play: iOS, Android and web from one codebase.',
    gets: ['Clickable design before code', 'Weekly builds you can install', 'Store publishing handled'],
    first: 'A scoping session to cut version one to what matters.',
    ref: 'little-hafiz',
    refLabel: 'Little Hafiz: Flutter app, works offline',
    disciplines: ['Mobile', 'UI/UX', 'Web', 'DevOps'],
  },
  {
    title: 'Our current system is slow, fragile or insecure',
    build: 'An audit, then a written decision: fix what you have or rebuild it, followed by hardening, CI/CD and monitoring.',
    gets: ['Security and performance audit', 'Prioritised fix list with costs', 'Automated deploys and alerts'],
    first: 'Read-only access and a short audit report.',
    // No rescue/hardening engagement is public yet. Rather than ship the
    // mockup's "[Add a rescue or hardening case study]" placeholder, this
    // renders no reference at all. Add a slug here when one is published.
    ref: null,
    refLabel: null,
    disciplines: ['Cybersecurity', 'DevOps', 'Consulting', 'Web'],
  },
  {
    title: 'We want to use AI where it actually helps',
    build: 'AI built into one real workflow, with a human approval step: drafting, classifying, forecasting or recommending.',
    gets: ['One workflow, measured before and after', 'Human review where it matters', 'Your data stays under your control'],
    first: 'Pick one workflow and define what “better” means.',
    ref: 'chronic-disease-monitoring',
    refLabel: 'Chronic care platform: AI drafts, doctors approve',
    disciplines: ['AI / ML', 'Automation', 'Web', 'Cybersecurity'],
  },
  {
    title: 'We need a technical second opinion',
    build: 'An independent review of an architecture, a vendor proposal or a codebase, in writing and in plain language.',
    gets: ['Architecture and code review', 'Risks ranked by impact', 'A roadmap your team can follow'],
    first: 'Share what you have; we confirm scope and price.',
    ref: null,
    refLabel: null,
    disciplines: ['Consulting', 'Cybersecurity', 'DevOps'],
  },
];

// ---------------------------------------------------------------------------
// Open source
// ---------------------------------------------------------------------------
// Packages the team maintains publicly. Everything here is checkable: the
// version and date are what pub.dev serves, and the repo is public. Do not
// add an entry for code that is not actually published somewhere a reader
// can install it from.
export const OPEN_SOURCE = [
  {
    name: 'operation_recovery',
    tagline: 'Your customer pays once. Never twice.',
    description:
      'A customer taps “Pay” just as their connection drops. Did the payment go through? Most apps guess, and guessing means double charges, angry calls, and refunds. Ours checks with your system and gets the real answer, every time. Your money and your reputation stay protected, even on the weakest signal.',
    language: 'Dart',
    version: '0.1.1',
    published: '2026-10-22',
    pubUrl: 'https://pub.dev/packages/operation_recovery',
    repoUrl: 'https://github.com/hachem-djefafla/operation_recovery',
  },
  {
    name: 'invalidation_coordinator',
    tagline: 'Live data, without the lag.',
    description:
      'Prices change, stock runs out, orders update. Most apps either show outdated information or reload so often they drain the battery and slow to a crawl. Ours updates everything at the right moment, in one smooth refresh. Your customers always see the truth, and the app stays fast.',
    language: 'Dart',
    version: '0.1.0',
    published: '2026-09-06',
    pubUrl: 'https://pub.dev/packages/invalidation_coordinator',
    repoUrl: 'https://github.com/hachem-djefafla/invalidation_coordinator',
  },
  {
    name: 'push_permission_flow',
    tagline: 'Your messages actually arrive.',
    description:
      'You spend money bringing customers back with promotions, reminders, and order updates. But on newer Android phones and iPhones, many apps silently lose permission to notify, and those messages never arrive. Ours handles every case correctly, so every message you pay to send reaches a real person.',
    language: 'Dart',
    version: '0.1.0',
    published: '2026-09-01',
    pubUrl: 'https://pub.dev/packages/push_permission_flow',
    repoUrl: 'https://github.com/hachem-djefafla/push_permission_flow',
  },
];

// ---------------------------------------------------------------------------
// Delivery timeline (home)
// ---------------------------------------------------------------------------
// The same engagement PROCESS above, told as what the client receives and
// when. PROCESS stays the canonical five-phase description used on /about;
// this is the numbered, client-facing version the homepage shows.
export const TIMELINE = [
  { when: '01', title: 'You talk to an engineer, not a salesperson.', text: 'The person who reads your message is the person who understands the technology. They call you to understand your business and what you need.' },
  { when: '02', title: 'A clear written plan.', text: 'We study your project and put everything in writing: what we’ll build, what could go wrong, and how we’ll measure success. No vague promises.' },
  { when: '03', title: 'One fixed price.', text: 'You get the full plan and a fixed price. Nothing starts until you approve it.' },
  { when: '04', title: 'Try it yourself as we build.', text: 'Early on, you get a private version of your product you can open and use. It updates regularly, so you give feedback while changes are still easy and cheap.' },
  { when: '05', title: 'Go live safely.', text: 'We launch it for your customers and watch it closely. If anything goes wrong, we can switch back to the previous version in minutes, before your customers even notice. You also get a simple guide to running it.' },
  { when: '06', title: 'Bug fixes included, then you choose.', text: 'Any bug after launch is fixed as part of the project, within the included support period. After that, keep us on for support, or take over fully with everything handed to you.' },
];

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
    quote: 'PLACEHOLDER: replace with a real, approved client quote. Two or three sentences on the problem they had, what shipped, and what changed afterwards.',
    name: 'Client name',
    title: 'Role, Company',
    project: 'sadjia-ceram',
    avatar: null,
  },
  {
    placeholder: true,
    quote: 'PLACEHOLDER: a second approved quote. Specifics beat praise: a number, a deadline met, a system that stopped breaking.',
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
    before: 'Customers phoned the shop to get a price for every tile and every project.',
    after: 'They browse the catalog and get a real-time DZD estimate for their room, on their own.',
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
    before: 'Transport and distribution tracked across separate tools and spreadsheets.',
    after: 'One native app, plus a web version from the same codebase, tracks it all.',
    challenge: 'A transportation and distribution operation needed one system to track fleet, deliveries, and the financial side of the business, deployable both as an installed desktop tool and a hosted web app.',
    approach: 'We built the dashboard once in Vite and TypeScript and shipped it two ways: an Electron desktop build for local/offline use, and a Supabase-backed web deployment, using the same codebase and data layer.',
    result: 'A single dashboard covering distribution operations and financials, packaged for both desktop installs and web access.',
    outcomes: [
      'One TypeScript codebase, two delivery targets',
      'Electron build for installed, local-first use',
      'Supabase-backed web deployment sharing the same data layer',
    ],
    images: [
      { src: '/work/logistics-dashboard/dashboard.webp', w: 1435, h: 937, alt: 'Unified financial dashboard showing cash flow, customer balances, and driver settlements', caption: 'The unified dashboard: cash flow, customer accounts, driver settlements' },
    ],
  },
  {
    slug: 'ability-beyond-disability',
    tag: 'Social impact · Web',
    category: 'Web',
    title: 'Ability Beyond Disability',
    client: 'رغم إعاقتي أبدع: national talent showcase, Algeria',
    summary: 'A bilingual (Arabic/English) landing page showcasing the talents and achievements of people with disabilities across Algeria.',
    stack: ['HTML/CSS', 'Bilingual (AR/EN)'],
    metric: 'Nationwide talent showcase',
    before: 'Talented people with disabilities across Algeria had no shared showcase.',
    after: 'A bilingual Arabic / English page presenting their talents and achievements nationwide.',
    challenge: 'People with disabilities across Algeria needed a public platform to showcase their creative and professional work: one that reads as a polished showcase, not a charity page.',
    approach: 'We designed a visually engaging, accessible static site: a talent gallery with specialisation and location for each person, national statistics on registered talents and provinces represented, an events section for workshops and exhibitions, and a newsletter signup. Built to load fast with no backend dependency, and written in both Arabic and English so it reads natively to its audience.',
    result: 'A live, accessible showcase site highlighting talent from across Algeria’s provinces.',
    outcomes: [
      'Talent gallery with specialisation, location, and tags per person',
      'National statistics: registered talents, provinces, artworks, events',
      'Events section for workshops, exhibitions, and competitions',
      'Bilingual Arabic/English, no backend dependency',
    ],
    images: [
      { src: '/work/ability-beyond-disability/home.webp', w: 1600, h: 1120, alt: 'Ability Beyond Disability home page: hero, talent of the week, and national statistics', caption: 'Home: talent of the week, and the national counters beneath it' },
      { src: '/work/ability-beyond-disability/talents.webp', w: 1600, h: 1120, alt: 'Talent gallery cards showing each person’s specialisation, province, and tags', caption: 'The gallery: specialisation, province, and tags per person' },
      { src: '/work/ability-beyond-disability/events.webp', w: 1600, h: 1120, alt: 'Events section listing workshops, exhibitions, and competitions', caption: 'Events: workshops, exhibitions, and competitions' },
    ],
  },
  {
    slug: 'little-hafiz',
    tag: 'EdTech · Mobile',
    category: 'Mobile',
    title: 'Little Hafiz: Quran memorization app',
    summary: 'A Flutter Quran memorization app for kids and adults, with verse-by-verse listening, progress tracking, and an installable offline-capable web build.',
    stack: ['Flutter', 'PWA / offline-capable', 'Cross-platform'],
    metric: 'Web, iOS & Android from one codebase',
    before: 'Memorization practice depended on a teacher or a printed copy being nearby.',
    after: 'Verse-by-verse listening and progress tracking on any phone, even offline.',
    challenge: 'Quran memorization apps are common, but few are built for kids specifically, with progress parents can actually follow.',
    approach: 'We built one Flutter codebase spanning verse-by-verse listening, multiple memorization methods, and progress tracking, shipped as an installable, offline-capable Progressive Web App with mobile builds from the same source.',
    result: 'A cross-platform memorization app installable straight from the browser, no app-store gatekeeping required.',
    outcomes: [
      'Verse-by-verse listening with surah browsing',
      'Multiple memorization methods and progress tracking',
      'Installable, offline-capable PWA plus iOS and Android builds',
    ],
    images: [
      { src: '/work/little-hafiz/home.webp', w: 1355, h: 911, alt: 'Little Hafiz home screen with memorize, listen and repeat, games, and parent mode', caption: 'Home: memorise, listen and repeat, games, and parent mode' },
      { src: '/work/little-hafiz/phone.webp', w: 1290, h: 2796, tall: true, alt: 'Parent mode screen on a phone, gated behind a lock', caption: 'Parent mode on the phone build' },
    ],
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
    images: [
      { src: '/work/id-verification-pipeline/pipeline.webp', w: 1600, h: 1000, alt: 'Three-step pipeline on a specimen card: the card detected in a phone camera frame, segmented with its four corners found, then warped into a flat, OCR-ready crop', caption: 'Detect, segment, warp: camera frame to OCR-ready crop' },
    ],
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
    before: 'A professional portfolio site meant hiring a developer.',
    after: 'Pick a template, drag blocks into place, publish, no code required.',
    challenge: 'Freelancers who need a portfolio site rarely want to hand-code one, and often can’t. The tools aimed at them split into two disappointing halves: builders so generic that every result looks identical, and builders so locked down that the first thing you want to change is the thing you can’t. We wanted the middle: real templates that are genuinely editable, without dropping anyone into a code editor.',
    approach: 'We built the editor around direct manipulation. Sections reorder by dragging (@dnd-kit), and any element edits in place: click the text and type, click the image and swap it, open the style panel and change colours, fonts, and spacing. Five templates ship with real points of view rather than colour variations of one layout: Modern Minimal, Creative Bold, Developer Tech, Designer Elegant, and Business Professional, and switching between them keeps your content intact. Everything auto-saves. Accounts, persistence, and asset storage run on Supabase with Prisma over Postgres, so a half-finished site is still there tomorrow.',
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
    before: 'Patients\' measurements and follow-up guidance lived in scattered notes.',
    after: 'Patients log measurements; AI drafts guidance that a doctor reviews before it is sent.',
    challenge: 'Patients managing a chronic condition need a simple way to log measurements and get guidance back. An AI model can draft that guidance in seconds, which is exactly the problem: unreviewed medical suggestions delivered straight to a patient are a liability, not a feature. The system had to be useful enough that patients keep logging, and safe enough that nothing reaches them without a clinician having read it.',
    approach: 'We built the clinical review step into the data model rather than bolting it on. Patients submit measurements, taken from medical sensors, through a mobile-first flow and see their full history. Each submission generates an AI-drafted report on the backend only, never in the browser, and that draft lands in a doctor’s queue rather than the patient’s inbox. The doctor account reviews, edits, and approves every report and prescription before the patient sees anything; an unreviewed draft has no path to the patient at all. Authentication runs on Firebase with email verification by OTP and Google sign-in, over a Realtime Database that keeps both sides of the history in sync.',
    result: 'A working patient/doctor monitoring loop (submission, AI drafting, clinical review, release) with full history tracking on both sides and no route for unreviewed output to reach a patient.',
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
    slug: 'giftili',
    hidden: true,
    tag: 'Product design · Web',
    category: 'Web',
    title: 'Giftili: sending a gift home to Algeria',
    summary: 'A 25-screen product design for a diaspora gift service: pick a gift from abroad, design the card that goes with it, and have it hand-delivered in Algeria.',
    stack: ['Product design', '25 screens', 'Trilingual (EN/FR/AR)', 'Prototype'],
    metric: '13 customer screens · 12 admin',
    challenge: 'Somebody in Paris, Montréal or Dubai wants to be the first to say happy birthday to their mother in Batna. Every part of that is awkward: paying from abroad, choosing something that will actually arrive, writing a card in a language the shop may not read, and knowing it was delivered. A storefront alone does not solve it, because half the problem is what happens after the order.',
    approach: 'Designed end to end rather than as a shop. The customer side covers the gift catalogue and product pages, a card designer where the message is laid out on a real card that gets printed and tucked into the parcel, group gifts several people pay into, occasion reminders, order tracking and a reaction wall for the moment it arrives. The operations side is designed with equal weight: orders and delivery, couriers, customers, products and stock, delivery areas and promo codes, marketing, site content, team roles with two-step sign-in, and analytics. Every screen is laid out in English, French and Arabic, because the sender and the recipient rarely read the same one.',
    result: 'A complete, clickable prototype covering both sides of the service, from the diaspora sender to the courier run in Algeria.',
    outcomes: [
      'Card designer with front and inside, stickers, photos and print finishes',
      'Group gifts several people contribute to',
      'Delivery across 67 wilayas with per-order courier assignment',
      'Admin for orders, stock, couriers, promos, content and team roles',
      'Trilingual throughout, including right-to-left Arabic',
    ],
    images: [
      { src: '/work/giftili/home.webp', w: 1600, h: 1120, alt: 'Giftili home page: pick a gift, write a few words, delivered in Algeria', caption: 'Home: choose a recipient, occasion and budget' },
      { src: '/work/giftili/card-designer.webp', w: 1600, h: 1120, alt: 'Card designer with ready-made designs, text and sticker tools, and print finishes', caption: 'The card designer: what gets printed and tucked into the gift' },
      { src: '/work/giftili/product.webp', w: 1600, h: 1120, alt: 'Product page for a bouquet with size, colour, add-ons and a delivery date picker', caption: 'Product: size, add-ons, wilaya and delivery date' },
      { src: '/work/giftili/admin-orders.webp', w: 1600, h: 1120, alt: 'Admin orders and delivery board showing sender country, recipient wilaya, courier and status', caption: 'Operations: orders from abroad, routed to couriers in Algeria' },
    ],
  },
  {
    slug: 'djalil-location',
    tag: 'Rental · Desktop',
    category: 'Desktop',
    title: 'Djalil Location: a car rental owner dashboard',
    summary: 'An offline-first Windows desktop app for a car rental business, built around a local database so the office keeps working without a connection.',
    stack: ['Electron', 'Vue 3', 'SQLite', 'Drizzle ORM'],
    metric: 'Offline-first · AR/FR/EN with RTL',
    challenge: 'A rental office runs on a counter, not a cloud. The system has to open instantly, keep working when the connection drops, and hold customer and contract data on a machine the owner controls rather than someone else’s server.',
    approach: 'Built as an Electron desktop app with a Vue 3 interface and SQLite on disk, reached through a typed IPC layer with a lock guard so the renderer can never touch the database directly. Access is owner-controlled: a password set on first launch, Argon2 hashing, a written recovery code, a five-attempt throttle, and auto-lock when the machine idles or Windows locks. The interface ships in Arabic, French and English, with a full right-to-left layout rather than a mirrored afterthought, and a light and dark theme.',
    result: 'The foundations are in production shape: the shell, the database and migrations, and the whole owner access path. Fleet, clients and reservations are being built on top.',
    outcomes: [
      'Runs offline against a local SQLite database',
      'Owner password with Argon2, recovery code and attempt throttling',
      'Auto-lock on idle or Windows lock',
      'Arabic, French and English with a true RTL layout',
      'Packaged as a Windows installer',
    ],
    images: [
      { src: '/work/djalil-location/dashboard.webp', w: 1600, h: 860, alt: 'Djalil Location dashboard in French with the sidebar, top bar and greeting panel', caption: 'The owner dashboard' },
      { src: '/work/djalil-location/arabic-rtl.webp', w: 1600, h: 860, alt: 'The same dashboard in Arabic, fully mirrored right to left', caption: 'The same screen in Arabic, mirrored right to left' },
    ],
  },
  {
    slug: 'onyxia-jewelry',
    tag: 'Retail · Web',
    category: 'Web',
    title: 'Onyxia: jewellery storefront and order desk',
    summary: 'An Arabic storefront for a jewellery brand, with cart, checkout, per-wilaya delivery and an admin the shop runs orders from.',
    stack: ['Express', 'MongoDB', 'Vanilla JS', 'RTL Arabic'],
    metric: 'Storefront + admin + delivery pricing',
    challenge: 'Selling jewellery online in Algeria means handling the parts a hosted cart does not: delivery priced per wilaya, orders confirmed by phone, and a shop team that needs to manage stock and orders without touching code.',
    approach: 'The storefront is deliberately dependency-free on the front end: hand-written HTML, CSS and JavaScript so pages stay fast on mobile connections, with a right-to-left Arabic layout throughout. Behind it sits an Express and MongoDB service covering products, orders, cities and language, with image upload handled on the server. The admin side is part of the same build: product creation and editing, an order list, and a per-order view the shop uses to work through the day.',
    result: 'A complete retail loop the shop operates itself, from a customer browsing the catalogue to the team marking an order fulfilled.',
    outcomes: [
      'Catalogue, product pages, cart and checkout in Arabic',
      'Per-city delivery handling rather than one flat rate',
      'Admin for products, images, and order status',
      'Session-backed login for the shop team',
    ],
    images: [
      { src: '/work/onyxia-jewelry/home.webp', w: 1600, h: 1120, alt: 'Onyxia jewellery landing page with the brand mark on a dark starfield', caption: 'The landing page' },
    ],
  },
  {
    slug: 'sotex',
    tag: 'Retail · Web',
    category: 'Web',
    title: 'Sotex: vehicle insulation, priced by the square metre',
    summary: 'An Arabic single-page storefront for vehicle thermal insulation, pricing each order by surface area and routing it to the team by email.',
    stack: ['Tailwind CSS', 'JavaScript', 'Brevo SMTP', 'RTL Arabic'],
    metric: 'All 58 wilayas · tiered m² pricing',
    challenge: 'The product is sold by the square metre with a discount above a threshold, and delivery differs between office pickup and home delivery. Getting that wrong in a form means quoting a price the business cannot honour.',
    approach: 'Pricing is computed in the page from the surface area the customer enters, at 750 DA per square metre and 700 DA above ten, with the delivery option added on top at either 500 or 850 DA. The address step covers all 58 wilayas and their baladiyat rather than a free-text field, and the phone input validates against Algerian number formats. Completed orders are sent to the team over Brevo SMTP, with the credentials kept in environment variables rather than the page.',
    result: 'A single page that quotes accurately, collects a deliverable address, and puts a complete order in the team’s inbox.',
    outcomes: [
      'Area-based pricing with a volume tier built in',
      'Full wilaya and baladiya address selection',
      'Algerian phone-number validation on submit',
      'Order notifications by email, keys held in env vars',
      'Mobile-first right-to-left layout',
    ],
    images: [
      { src: '/work/sotex/home.webp', w: 1600, h: 1120, alt: 'Sotex product page with image gallery, price in dinars, and the order form', caption: 'Product, price and order form on one page' },
    ],
  },
  {
    slug: 'gensior',
    tag: 'Healthcare · Web',
    category: 'Web',
    title: 'Gensior: a German pharmaceutical services site',
    summary: 'A German-language site for a pharmaceutical consultancy working in healing-water management, with a product catalogue and an enquiry flow.',
    stack: ['React', 'Vite', 'Netlify Functions', 'Framer Motion'],
    metric: 'Catalogue + enquiry, serverless',
    challenge: 'A regulated consultancy needs a site that reads as credible to pharmacists and municipalities, presents a product range, and takes enquiries, without standing up a backend to maintain.',
    approach: 'Built as a React single-page app on Vite, with the service pages, product catalogue and cart as separate components and Framer Motion handling transitions. The contact and ordering path runs through a Netlify function rather than a server, so email delivery has somewhere to hold its API key and the deployment stays static.',
    result: 'A site that presents the consultancy and its products in German and routes enquiries to the team, deployed without infrastructure to operate.',
    outcomes: [
      'Services, about and product sections in German',
      'Product catalogue with a cart flow',
      'Enquiries handled by a serverless function',
      'Static deployment, no server to maintain',
    ],
    images: [
      { src: '/work/gensior/home.webp', w: 1600, h: 1120, alt: 'Gensior home page: pharmaceutical services hero over a water image', caption: 'Home: positioning for healing-water management' },
    ],
  },
  {
    slug: 'focuslock',
    tag: 'Productivity · Desktop',
    category: 'Desktop',
    title: 'Focus Lock: earn your playtime',
    summary: 'A Windows desktop app that keeps games and chosen applications locked until the day’s tasks are done, with XP and levels for finishing them.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite'],
    metric: 'Task gating with XP and levels',
    challenge: 'Blockers that simply forbid an application get switched off within a week. The behaviour only sticks if the thing being blocked is something you can win back.',
    approach: 'Focus Lock inverts the usual blocker: rather than forbidding games outright, it holds them behind the task list and releases them when the work is done. Tasks carry a priority and award XP on completion, which feeds levels and achievements. It is an Electron app with a React and TypeScript renderer, state in Zustand, and SQLite for durable local storage, so nothing leaves the machine.',
    result: 'A working Windows build, published under MIT with a contribution guide and a code of conduct.',
    outcomes: [
      'Task list with priorities and completion tracking',
      'XP, levels and achievements tied to finished work',
      'Focus Mode that gates the selected applications',
      'Local SQLite storage, no account and no sync',
      'Open source under the MIT licence',
    ],
    images: [
      { src: '/work/focuslock/tasks.webp', w: 1600, h: 800, alt: 'Focus Lock dashboard showing level, XP progress, tasks completed, and a task list', caption: 'The dashboard: level, XP, and the day’s task list' },
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

// The homepage carousel, in presentation order. Every entry here needs a
// screenshot and a before/after pair; anything missing either is filtered out
// rather than rendered as an empty frame, so this list degrades safely if a
// case study is pulled or a screenshot is removed.
const FEATURED_ORDER = [
  'sadjia-ceram',
  'logistics-dashboard',
  'little-hafiz',
  'chronic-disease-monitoring',
  'thodz-builder',
  'ability-beyond-disability',
];

export const FEATURED_CASE_STUDIES = FEATURED_ORDER.map((slug) =>
  CASE_STUDIES.find((c) => c.slug === slug)
).filter((c) => c && c.images?.length && c.before && c.after);
