// Service pages: one URL per discipline, at /<locale>/services/<slug>.
//
// Why these exist as pages at all: the homepage lists nine services as cards,
// which makes one page compete for nine topics and win none of them. Search
// engines rank pages, not companies, so each discipline gets a page that can
// actually answer the query behind it.
//
// This file is the English source of truth and the only place structural data
// lives (slug, icon, stack, which case studies prove the service). Translated
// prose lives in lib/i18n/content/<locale>.js under `services`, keyed by slug,
// and merges by slug the same way case studies do.
//
// `proof` names case study slugs from lib/content.js. Where a discipline has
// no shipped case study to point at yet, the list is empty and the section is
// simply not rendered — an unproven claim with no link is worse than silence.

// Locales a service page is published in. A locale outside this list does not
// generate these routes and is not offered as an hreflang alternate for them,
// which keeps the site from shipping five locales' worth of untranslated
// English under a translated URL. Add a locale here only once its overlay in
// lib/i18n/content/<locale>.js carries every slug below.
export const SERVICE_LOCALES = ['en', 'fr', 'ar'];

export const SERVICE_PAGES = [
  {
    slug: 'web-development',
    icon: 'Code2',
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    proof: ['tradevirtual', 'thodz-builder', 'sadjia-ceram'],
    title: 'Web development',
    metaTitle: 'Web development company in Algiers',
    metaDescription:
      'Full-stack web development in Algiers: React and Next.js front ends on Postgres-backed APIs, built to be handed over and run by your own team.',
    summary:
      'Full-stack applications and marketing sites that hold up under real traffic, built on the same stack we have to maintain afterwards.',
    problem:
      'Most web projects fail twice. First when the agency builds to the demo rather than to the load, and second a year later when nobody left at the company can change anything without breaking it. The code reads like a prototype because it was one, and the architecture decisions that matter — how state moves, where data is validated, what happens when a request is retried — were never decided at all.',
    approach:
      'We build with React and Next.js on the front end and Node against PostgreSQL behind it, server-rendered where search engines need to read the page and client-side only where interaction genuinely demands it. Validation lives in one place, on the server, and the client shares its schema rather than duplicating it. Every project gets typed boundaries between layers, so a change in the database shape fails at build time instead of at 2am.',
    delivery:
      'You get the repository, the architecture document, a runbook that covers deploys and rollbacks, and a handoff session with your own engineers. The stack is deliberately ordinary — React, Postgres, a managed host — because exotic choices are how a codebase becomes unmaintainable the moment the people who picked them leave.',
    outcomes: [
      'Server-rendered pages where search engines need to read them',
      'One validation schema, shared between client and server',
      'Typed boundaries, so schema changes fail at build time',
      'Repository, architecture doc and runbook, handed over on completion',
    ],
  },
  {
    slug: 'mobile-app-development',
    icon: 'Smartphone',
    stack: ['Flutter', 'Dart', 'iOS', 'Android', 'Offline-first'],
    proof: ['little-hafiz', 'dentidz-dental-booking', 'sahafood'],
    title: 'Mobile app development',
    metaTitle: 'Mobile app development in Algiers',
    metaDescription:
      'Flutter apps for iOS and Android, built offline-first for real network conditions and shipped to both stores — not handed over as a Figma file.',
    summary:
      'Native and cross-platform apps that reach the store, work on a bad connection, and survive the review process.',
    problem:
      'An app that assumes a good connection is an app that does not work in most of the world. The usual failure is not the code: it is a design that treats the network as reliable, loses what the user typed when a request times out, and only reveals the problem once real people are on real networks. Then there is the part nobody quotes for — store review, signing, release channels and the second submission after the first is rejected.',
    approach:
      'We build in Flutter from one codebase for iOS and Android, and treat the local database as the source of truth rather than the cache. Writes land on the device first and sync when the network returns, so a lost connection costs the user nothing. Where a platform genuinely needs native code — a background service, a hardware integration — we write it natively and bridge it rather than fighting the framework.',
    delivery:
      'Shipping means submitted, reviewed and live, with signing keys in your hands and a release process your team can repeat. We publish Flutter packages on pub.dev, so the tooling under your app is the same tooling other developers rely on.',
    outcomes: [
      'One Flutter codebase for iOS and Android',
      'Offline-first: the device writes first and syncs after',
      'Native code where the platform genuinely needs it',
      'Submitted, reviewed and live, with the signing keys yours',
    ],
  },
  {
    slug: 'desktop-software',
    icon: 'Monitor',
    stack: ['Electron', 'Vue 3', 'React', 'SQLite', 'TypeScript'],
    proof: ['djalil-location', 'focuslock', 'logistics-dashboard'],
    title: 'Desktop software',
    metaTitle: 'Custom desktop software development',
    metaDescription:
      'Offline-first Windows, macOS and Linux apps on a local database, for counters and workshops where the cloud is not an option.',
    summary:
      'Cross-platform desktop tools for internal operations, where the data has to stay on a machine you control and the connection cannot be assumed.',
    problem:
      'Plenty of businesses run on a counter, not a cloud. A rental office, a workshop, a clinic: the software has to open instantly, keep working when the line drops, and hold customer records on a machine the owner controls rather than someone else’s server. A web app behind a login fails all three, and the SaaS alternative usually fails the fourth: it charges per seat forever for something that should have been bought once.',
    approach:
      'We build with Electron and a local SQLite database reached through a typed IPC layer, so the interface can never touch the database directly. Business rules that must not be broken are enforced inside the write transaction, not only in the form — a check that only runs in the UI is a check that fails the moment two people act at once. Backups run locally on a schedule and, where the client wants them, encrypted to object storage before they leave the machine.',
    delivery:
      'A signed per-user installer that needs no administrator rights, background auto-updates that take a backup before migrating, and a log file the owner can open and send you. Migrations run after a safety copy and roll back rather than leaving a half-migrated database.',
    outcomes: [
      'Runs offline against a local database on the owner’s machine',
      'Rules enforced inside the write transaction, not just the form',
      'Scheduled local backups, encrypted before any copy leaves',
      'Signed per-user installer with background auto-updates',
    ],
  },
  {
    slug: 'devops',
    icon: 'Workflow',
    stack: ['GitHub Actions', 'Docker', 'Cloudflare', 'Terraform', 'Observability'],
    proof: ['thodz-builder'],
    title: 'DevOps and infrastructure',
    metaTitle: 'DevOps and cloud infrastructure consulting',
    metaDescription:
      'CI/CD, containers and infrastructure-as-code, with deploys measured in minutes and a rollback path that has actually been tested.',
    summary:
      'Pipelines, containers and infrastructure defined in code, so a deploy is a routine event rather than an evening everyone dreads.',
    problem:
      'Deployment anxiety is a design flaw, not a personality trait. It comes from the same few causes every time: a release process that lives in one person’s head, infrastructure configured by hand so nobody can say what production actually looks like, and a rollback plan that has never once been rehearsed. The cost shows up as teams shipping monthly because shipping is frightening.',
    approach:
      'Infrastructure is defined in code and reviewed like code, so the configuration is readable and reproducible instead of remembered. Builds run in CI on every change, the same artefact that passed the tests is the one that reaches production, and the pipeline fails loudly rather than deploying something unverified. Rollback is a tested path with a known duration, not a hope.',
    delivery:
      'A runbook your team owns, covering deploy, rollback, and what to do at 3am when the thing you did not plan for happens. Monitoring that pages a human for conditions worth waking up for, and stays quiet otherwise.',
    outcomes: [
      'Infrastructure defined in code and reviewed like code',
      'One artefact built once, promoted through environments',
      'A rollback path with a rehearsed, known duration',
      'Alerts tuned to wake someone only when it is warranted',
    ],
  },
  {
    slug: 'cybersecurity',
    icon: 'ShieldCheck',
    stack: ['Threat modelling', 'Argon2', 'AES-256-GCM', 'OWASP', 'Secure SDLC'],
    proof: ['djalil-location', 'surgeon-digital-clinic'],
    title: 'Cybersecurity',
    metaTitle: 'Cybersecurity and secure architecture',
    metaDescription:
      'Threat modelling, hardening and secure-by-default architecture, led by an engineer with a master’s in cryptography and information security.',
    summary:
      'Threat modelling, hardening and secure-by-default architecture for teams that cannot afford a breach and cannot afford theatre either.',
    problem:
      'Most security work arrives too late to be cheap. A penetration test two weeks before launch finds problems that are architectural, and architectural problems cannot be patched on a deadline. Meanwhile the genuinely dangerous things are rarely exotic: a credential committed to a public repository, a password hashed with something fast, an admin route protected by nothing but an unguessable URL.',
    approach:
      'We model the threats before the architecture is fixed, because that is the only point where the answer is still cheap. Secrets never reach the client bundle or the repository. Passwords are hashed with a memory-hard function, Argon2 rather than anything fast. Data that leaves a machine is encrypted before it leaves it. Authorisation is checked on the server for every request, never inferred from what the interface chose to render.',
    delivery:
      'A written threat model you can hand to a client or an auditor, the hardening actually applied rather than recommended, and a short list of the risks we accepted on purpose with the reasoning attached. THODZ is led by an engineer with a master’s degree in cryptography and information security; this is the discipline the studio was founded on.',
    outcomes: [
      'Threat modelling while the architecture can still change',
      'Memory-hard password hashing, never a fast digest',
      'Secrets kept out of the client bundle and the repository',
      'Authorisation enforced server-side on every request',
    ],
  },
  {
    slug: 'ai-ml',
    icon: 'Cpu',
    stack: ['Python', 'YOLOv8', 'ONNX', 'TFLite', 'LLM integration'],
    proof: ['id-verification-pipeline', 'surgeon-digital-clinic'],
    title: 'AI and machine learning',
    metaTitle: 'Applied AI and machine learning',
    metaDescription:
      'Applied ML shipped to production: computer vision, forecasting and LLM-backed workflows, including models that run on-device rather than in a cloud API.',
    summary:
      'Applied machine learning that reaches production — recommendation, forecasting, computer vision and LLM-backed workflows.',
    problem:
      'The gap in most AI projects is not the model. It is everything around it: where the data comes from, what happens to a prediction the model is unsure about, how you tell whether it is still working six months later, and what it costs per call once real volume arrives. A notebook with good accuracy is not a system, and a wrapper around someone else’s API is not a moat.',
    approach:
      'We start from the decision the model is meant to support, and work backwards to whether machine learning is the right tool at all — often a rule is better, cheaper and auditable. Where a model is right, we export it to run where it belongs: ONNX or TFLite on the device when latency, cost or privacy demand it, rather than a per-call API bill for something that could run locally. Confidence thresholds route uncertain cases to a human instead of guessing.',
    delivery:
      'An evaluation set that reflects your actual data rather than a public benchmark, a monitored pipeline, and an honest statement of what the system does badly. We have shipped an identity-document verification pipeline running YOLOv8 on-device through Flutter; the case study below is the detail.',
    outcomes: [
      'The decision first, then whether ML is even the right tool',
      'On-device inference where latency, cost or privacy demand it',
      'Uncertain predictions routed to a human, not guessed',
      'Evaluation against your data, not a public benchmark',
    ],
  },
  {
    slug: 'automation',
    icon: 'Zap',
    stack: ['Python', 'TypeScript', 'Scheduled jobs', 'APIs', 'Data sync'],
    proof: ['logistics-dashboard', 'id-verification-pipeline'],
    title: 'Process automation',
    metaTitle: 'Business process automation development',
    metaDescription:
      'Replace manual work with pipelines that survive failure: data sync, reporting and internal tooling that retries instead of stopping silently.',
    summary:
      'Manual operations replaced with pipelines that retry, log, and tell you when they stop — rather than failing quietly for a fortnight.',
    problem:
      'The spreadsheet that three people update by hand is not the problem. The problem is that nobody knows which copy is current, the monthly report takes a day to assemble, and when the person who understands it is on leave the work simply stops. Automation that fails silently is worse still: a sync that broke a fortnight ago and nobody noticed costs more than the manual process it replaced.',
    approach:
      'We map the process as it actually runs, including the exceptions people handle without thinking, because those exceptions are where naive automation breaks. Then we build pipelines that are idempotent — safe to run twice — with explicit retries, structured logs and a dead-letter path for the records that cannot be processed. A job that fails makes noise.',
    delivery:
      'The automation, a dashboard showing what ran and what did not, and documentation of the exception paths so the next person understands why a rule exists. Where a process should not be automated, we say so: some exceptions deserve a human.',
    outcomes: [
      'The real process mapped first, exceptions included',
      'Idempotent jobs, safe to run twice',
      'Explicit retries and a dead-letter path for bad records',
      'A failure that makes noise instead of passing unnoticed',
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: 'PenTool',
    stack: ['Design systems', 'Figma', 'Accessibility', 'RTL layouts', 'Design tokens'],
    proof: ['gensior', 'sotex'],
    title: 'UI and UX design',
    metaTitle: 'UI/UX design for software products',
    metaDescription:
      'Interface design for the people who use it daily: design systems in tokens, accessible by default, and genuine right-to-left layouts for Arabic.',
    summary:
      'Interfaces designed for the people who will use them every day, not for the screenshot in the pitch deck.',
    problem:
      'Design that optimises for the demo optimises for the wrong user. The person who matters sees this screen forty times a day, knows exactly where everything is, and is slowed down by the animation that impressed the client. Separately, interfaces handed over as images rather than as a system drift within a month, because every new screen is a fresh interpretation.',
    approach:
      'We design in tokens — colour, type scale, spacing — so the system is the deliverable and a new screen inherits the decisions rather than reinventing them. Contrast and focus states are part of the design, not an accessibility pass bolted on afterwards. Arabic gets a genuine right-to-left layout built on logical properties, not a mirrored afterthought.',
    delivery:
      'A design system your developers can implement without guessing, including the states nobody remembers to draw: empty, loading, error, and too much data. Where we build the product too, the tokens in the design and the tokens in the code are the same file.',
    outcomes: [
      'A token-based system, so new screens inherit the decisions',
      'Contrast and focus states designed in, not bolted on',
      'True RTL for Arabic via logical properties',
      'Empty, loading, error and overflow states specified',
    ],
  },
  {
    slug: 'technical-consulting',
    icon: 'Compass',
    stack: ['Due diligence', 'Architecture review', 'Roadmapping', 'Code audit'],
    proof: [],
    title: 'Technical consulting',
    metaTitle: 'Technical due diligence and review',
    metaDescription:
      'Architecture review, code audit and technical due diligence for leadership teams who need an answer they can act on, not a deck.',
    summary:
      'Due diligence, architecture review and roadmap planning for leadership teams deciding whether to build, buy, or rescue.',
    problem:
      'The expensive technical decisions get made with the least information: whether to rewrite or refactor, whether the team you are about to acquire has a codebase or a liability, whether the estimate you were given is real. The people who could answer honestly usually have a stake in the answer.',
    approach:
      'We read the code, run the build, and talk to the engineers rather than the executives. The output is a written assessment with the evidence attached: what we looked at, what we found, what we could not verify in the time available, and what we would do about each item in what order. Where the answer is that the existing system is fine and the problem is elsewhere, that is the answer.',
    delivery:
      'A written report you can hand to a board or an investor, a prioritised list of what to fix first, and a clear statement of what remained unknown. No retainer is required to receive it, and we will tell you when the work you are describing does not need us.',
    outcomes: [
      'The code read and the build run, not just interviews',
      'Evidence attached to every finding',
      'What could not be verified, stated plainly',
      'A prioritised list, not a list of everything',
    ],
  },
];

export function getService(slug) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
