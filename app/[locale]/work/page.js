import Link from 'next/link';
import { CaseStudyCard } from '@/components/marketing/CaseStudyCard';
import { SectionHead } from '@/components/marketing/SectionHead';
import { SITE_URL } from '@/lib/config';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).work;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/work'),
    openGraph: {
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
      url: `${SITE_URL}/${locale}/work`,
    },
  };
}

export default async function WorkPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).work;
  const { CASE_STUDIES } = getContent(locale);

  // Projects we can show come first; within each group the curated order in
  // lib/content.js holds.
  const studies = [...CASE_STUDIES].sort((a, b) => (b.images?.length ? 1 : 0) - (a.images?.length ? 1 : 0));

  return (
    <div>
      <div className="page-head bg-grid">
        <div className="container">
          <SectionHead eyebrow={t.headEyebrow} title={t.headTitle} sub={t.headSub} />
        </div>
      </div>
      <div className="container" style={{ paddingBlock: 56 }}>
        <div className="grid-3">
          {studies.map((c) => (
            <Link key={c.slug} href={`/${locale}/work/${c.slug}`} style={{ textDecoration: 'none' }}>
              <CaseStudyCard {...c} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
