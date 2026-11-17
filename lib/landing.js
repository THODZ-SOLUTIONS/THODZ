// Landing pages aimed at buyers outside Algeria, at
// /<locale>/<slug>.
//
// These are not service pages. A service page answers "what is X and do you
// do it"; these answer the question a foreign buyer actually has before any
// of that — can I work with a team in Algeria at all, what are the hours, who
// owns the code, how do I pay you. Those are the queries ("nearshore
// development Algeria", "hire full-stack developers Algeria") that bring work
// from France, the EU, the Gulf and the US, and nothing on the site answered
// them.
//
// Every fact here is one the site already publishes elsewhere — the FAQ, the
// engagement models, the about page. Nothing is invented for the pitch, and
// prices are deliberately absent: ENGAGEMENTS carries placeholderPrice with
// startingAt: null, so no real figure has been published and these pages are
// not the place to start.
//
// This file is the English source and the only place structural data lives.
// Translated prose lives in lib/i18n/content/<locale>.js under `landing`,
// keyed by slug, merging by slug the same way services and case studies do.

// Locales that publish these pages. These are the three the studio actually
// works in (see the FAQ), which is also the honest limit: a page promising a
// nearshore relationship in a language nobody on the team speaks is a lie the
// first email exposes.
export const LANDING_LOCALES = ['en', 'fr', 'ar'];

export const LANDING_PAGES = [
  {
    slug: 'nearshore-development-algeria',
    icon: 'Globe',
    proof: ['tradevirtual', 'djalil-location', 'sadjia-ceram'],
    title: 'Nearshore development in Algeria',
    metaTitle: 'Nearshore development in Algeria',
    metaDescription:
      'A nearshore engineering team in Algiers for companies in Europe, the Gulf and the US: UTC+1, French, English and Arabic, and the code transfers to you.',
    summary:
      'An engineering team an hour from Paris by clock rather than by plane, for companies that want the overlap of nearshore without the price of onshore.',
    facts: [
      { label: 'Time zone', value: 'UTC+1 — the full European business day, and most of the US East Coast morning' },
      { label: 'Working languages', value: 'French, English and Arabic — meetings, documentation and the product itself' },
      { label: 'Invoicing', value: 'EUR, USD or DZD, by bank transfer' },
      { label: 'Code ownership', value: 'Transfers to you outright on final payment, repository history included' },
      { label: 'First reply', value: 'Within one business day, from an engineer' },
    ],
    sections: [
      {
        heading: 'Why Algeria, concretely',
        body: 'The argument for nearshore is overlap, and overlap is a number. Algiers is UTC+1: the same hour as Paris, Madrid, Rome and Berlin for most of the year, one ahead of London, and close enough to the Gulf that a call at the end of our day is the start of yours. There is no handover window to design around, no standup at seven in the morning, no question sent on Monday that gets answered on Wednesday. French, English and Arabic are all working languages here — not a language a project manager has, but the language the code comments, the architecture document and the client call are in.',
      },
      {
        heading: 'How the work is structured',
        body: 'Four shapes, and we will tell you which one your problem is. A fixed-price project when the scope is knowable: a discovery audit, a written scope, architecture before code, and weekly increments visible on a staging environment from the first week. A monthly retainer when it is a roadmap rather than a deliverable, with an agreed capacity and a direct channel to the engineers doing the work. A support plan for a system already running. A consulting engagement when what you need is a decision rather than a build — and we will say so when that is the case.',
      },
      {
        heading: 'The commercial part, in writing',
        body: 'A written agreement before any work starts, covering scope, milestones, payment terms, IP transfer, confidentiality and how either side ends the engagement. Invoices are payable in EUR, USD or DZD by bank transfer, and every invoice states exactly what it covers. On final payment all source code, designs and documentation transfer to you outright, including the repository history; we keep no licence over your product and do not reuse your code in another client’s system. We will sign your NDA rather than insisting on ours, and every engagement is covered by mutual confidentiality whether one is signed or not.',
      },
      {
        heading: 'What nearshore does not mean here',
        body: 'It does not mean a pool of interchangeable contractors matched to your job description. The engineers who scope your project are the ones who build it, and the person who answers your question is the person who wrote the thing you are asking about. Every project ships with a runbook, an architecture document and a handoff session, so your own team can operate the system without us. Fixed-price work includes thirty days of bug cover after launch; after that you can move to a support plan or take it entirely in-house. Both are normal endings.',
      },
    ],
    faq: [
      {
        q: 'Who owns the code you write for us?',
        a: 'You do, outright, on final payment — source, designs, documentation and the repository history. We keep no licence over it and do not reuse it elsewhere. Open-source components keep their own licences, and every one is listed in the handoff documentation.',
      },
      {
        q: 'How do you invoice a company outside Algeria?',
        a: 'By bank transfer, in EUR, USD or DZD. Fixed-price projects bill against accepted milestones; retainers and support plans bill monthly in advance. Every invoice states exactly what it covers.',
      },
      {
        q: 'What hours will we actually overlap?',
        a: 'We are UTC+1, so a European team overlaps the entire working day and a US East Coast team overlaps most of its morning. First reply to any message is within one business day, and the first scoping call usually happens the same week.',
      },
      {
        q: 'Will you sign our NDA?',
        a: 'Yes, and yours rather than ours. Tick the NDA box on the contact form and it is handled before you send anything sensitive. Mutual confidentiality applies regardless of whether a separate NDA is signed.',
      },
    ],
  },
  {
    slug: 'hire-full-stack-developers',
    icon: 'Users',
    proof: ['thodz-builder', 'id-verification-pipeline', 'little-hafiz'],
    title: 'Hire full-stack developers',
    metaTitle: 'Hire full-stack developers',
    metaDescription:
      'Hire a full-stack team rather than a list of CVs: agreed capacity each month, a direct channel to the engineers, and 30 days’ notice to stop.',
    summary:
      'Dedicated engineering capacity from one accountable team, by the month — or a defined build at a fixed price. Both, with the same people throughout.',
    facts: [
      { label: 'Shape', value: 'Monthly retainer for capacity, or fixed price for a defined build' },
      { label: 'Notice', value: 'Cancel a retainer with 30 days’ notice' },
      { label: 'Access', value: 'A direct channel to the engineers writing the code' },
      { label: 'Reporting', value: 'A written progress summary every month' },
      { label: 'Languages', value: 'French, English and Arabic, at UTC+1' },
    ],
    sections: [
      {
        heading: 'Two ways to do it, and which one you want',
        body: 'If you know what you need built and it has edges, take the fixed price: a written scope, milestones you accept one at a time, and a number agreed before anyone writes code. If the scope moves — a roadmap, a product rather than a project, a backlog that grows as you learn — take the retainer: an agreed engineering capacity each month, planned with you and re-prioritised as things change. Most engagements that start as one and should have been the other do so because nobody asked the question early. We ask it in the first call.',
      },
      {
        heading: 'What a dedicated team actually looks like',
        body: 'An agreed capacity each month, roadmap planning and prioritisation done with you rather than reported to you, continuous delivery into your environments, and a direct channel to the engineers — not an account manager relaying questions. A written progress summary lands every month, so there is a record of what the capacity bought that you can hand to a board. Cancel with thirty days’ notice; there is no long lock-in, because a team you are staying with out of contractual obligation is not a team doing its best work.',
      },
      {
        heading: 'The stack you would be hiring for',
        body: 'Web on React and Next.js over Node and PostgreSQL. Mobile in Flutter, one codebase to both stores, offline-first where the network cannot be trusted. Desktop in Electron against a local SQLite database for the places the cloud does not reach. Applied machine learning in Python, exported to run on the device when latency, cost or privacy demand it. Infrastructure as code, deployed through CI on Cloudflare and containers. The case studies below are each of those running in production, not a capability list.',
      },
      {
        heading: 'What you are not hiring',
        body: 'Not a staffing agency matching CVs to a job description, and not a team that disappears behind a ticket queue. The same engineers scope, build and operate the work, and they stay reachable after it ships. If what you actually need is one specialist for three weeks rather than a team, we will tell you — and if the work does not need us at all, we will tell you that too.',
      },
    ],
    faq: [
      {
        q: 'Can we start small?',
        a: 'Yes, and we would rather you did. A short consulting engagement or a single fixed-price milestone is a better way to find out whether we work well together than a six-month commitment made on a sales call.',
      },
      {
        q: 'Who manages the developers?',
        a: 'We do. You get a direct channel to the engineers and a say in priorities; you do not get the overhead of managing them. If you prefer to run them inside your own process, that works too — say so in the first call and we will fit it.',
      },
      {
        q: 'What happens if we need to stop?',
        a: 'Thirty days’ notice on a retainer. You keep everything: the code, the repository history, the architecture document and the runbook. A clean handoff is a normal ending, not a failure, and we will do it properly.',
      },
      {
        q: 'Can you work alongside our existing team?',
        a: 'Yes. That is common — we take the parts your team does not have time or specialism for, in your repositories and your review process, rather than building a parallel system beside theirs.',
      },
    ],
  },
];

export function getLandingPage(slug) {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
