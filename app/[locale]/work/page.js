import { JsonLd } from '@/components/core/JsonLd';
import { ShippedGrid } from '@/components/home/ShippedCarousel';
import { PageHead } from '@/components/marketing/PageHead';
import { SITE_URL } from '@/lib/config';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { getDictionary, getContent } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).work;
  return buildMetadata({
    locale,
    path: '/work',
    title: t.metaTitle,
    description: t.metaDescription,
    shareDescription: t.ogDescription,
  });
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
      <JsonLd
        data={breadcrumbSchema(locale, getDictionary(locale).caseStudy.breadcrumbHome, [
          { name: getDictionary(locale).nav.work, path: '/work' },
        ])}
      />
      <PageHead eyebrow={t.headEyebrow} title={t.headTitle} sub={t.headSub} />
      <section className="section section--flush-top">
        <div className="container">
          {/* The cards are h3s, which left this page jumping h1 -> h3 with
              nothing in between. The grid has no visible heading by design,
              so the h2 is there for screen readers and for the outline. */}
          <h2 className="sr-only">{t.gridHeading}</h2>
          {/* Same card as the homepage grid, so a project looks identical
              wherever you meet it. */}
          <ShippedGrid locale={locale} studies={studies} />
        </div>
      </section>
    </div>
  );
}
