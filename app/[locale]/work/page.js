import { ShippedGrid } from '@/components/home/ShippedCarousel';
import { PageHead } from '@/components/marketing/PageHead';
import { SITE_URL } from '@/lib/config';
import { pageOpenGraph } from '@/lib/seo';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).work;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/work'),
    ...pageOpenGraph({
      locale,
      path: '/work',
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
    }),
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
      <PageHead eyebrow={t.headEyebrow} title={t.headTitle} sub={t.headSub} />
      <section className="section section--flush-top">
        <div className="container">
          {/* Same card as the homepage grid, so a project looks identical
              wherever you meet it. */}
          <ShippedGrid locale={locale} studies={studies} />
        </div>
      </section>
    </div>
  );
}
