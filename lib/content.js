export const SERVICES = [
  { icon: 'Code2', title: 'Web Development', description: 'Full-stack apps and marketing sites built for scale, from React frontends to Postgres-backed APIs.' },
  { icon: 'Smartphone', title: 'Mobile Apps', description: 'Native iOS/Android and cross-platform apps shipped to the store, not just a Figma file.' },
  { icon: 'Monitor', title: 'Desktop Software', description: 'Cross-platform desktop tools for internal ops, engineering, and regulated environments.' },
  { icon: 'Workflow', title: 'DevOps', description: 'CI/CD, container orchestration, infrastructure-as-code — deploys measured in minutes.' },
  { icon: 'ShieldCheck', title: 'Cybersecurity', description: 'Threat modeling, hardening, and secure-by-default architecture for teams that can’t afford a breach.' },
  { icon: 'Cpu', title: 'AI / ML Solutions', description: 'Applied ML — recommendation, forecasting, and LLM-backed workflows shipped to production.' },
  { icon: 'Zap', title: 'Automation', description: 'Replace manual ops with resilient pipelines: data sync, reporting, internal tooling.' },
  { icon: 'PenTool', title: 'UI/UX Design', description: 'Interfaces designed for the people who’ll use them daily, not just the demo.' },
  { icon: 'Compass', title: 'Project Consulting', description: 'Technical due diligence, architecture review, and roadmap planning for leadership teams.' },
];

export const PROCESS = [
  { title: 'Discover', description: 'Scope, constraints, and success metrics — a short technical audit, not a sales deck.' },
  { title: 'Architect', description: 'System design, risk register, and a delivery plan your team can review line by line.' },
  { title: 'Build', description: 'Iterative delivery in weekly increments, visible in a staging environment from week one.' },
  { title: 'Ship', description: 'Production rollout with a rollback plan, monitoring, and a runbook your team keeps.' },
  { title: 'Support', description: 'On-call coverage and a maintenance retainer, or a clean handoff — your call.' },
];

export const VALUES = [
  { title: 'One accountable team', description: 'No handoffs between strangers. The engineers who scope your project are the ones who ship it.' },
  { title: 'Documented by default', description: 'Architecture decisions, runbooks, and API contracts are written down — not tribal knowledge.' },
  { title: 'Built for handoff', description: 'Every engagement ends with your team able to run the system without us, whether or not you keep us on retainer.' },
];

// Real, shipped work. Keep this list honest — no placeholder metrics or
// invented client names. Add entries here as engagements are completed.
export const CASE_STUDIES = [
  {
    slug: 'boonka',
    tag: 'Fintech · Payments',
    category: 'Web',
    title: 'Boonka — payment gateway platform',
    summary: 'Product design and website for a digital payment platform serving Algerian e-commerce, spanning personal, business, and partner-facing applications.',
    stack: ['Next.js', 'Payments', 'Multilingual (FR/EN/AR)'],
    metric: '3 applications · 1 platform',
    challenge: 'Boonka needed a trust-first digital identity for a market where buyers and merchants are wary of online payment: online shoppers who don’t fully trust paying before delivery, and merchants who need to get paid without arbitrary delays.',
    approach: 'We designed the product experience and marketing site around a single idea — payment protection — and built it to speak to two audiences from one entry point: a personal wallet app for shoppers, and a business app for merchants, each with its own dedicated flows, before converging on shared trust signals (secured funds, real-time transaction visibility).',
    result: 'A coherent, multilingual (French / English / Arabic) product and website spanning all three Boonka applications — individual, business, and partner — ready for the platform’s public launch.',
  },
];
