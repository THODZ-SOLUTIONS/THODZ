import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL } from '@/lib/config';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { ProseSections } from '@/components/core/ProseSections';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).terms;
  return buildMetadata({
    locale,
    path: '/terms',
    title: t.metaTitle,
    description: t.metaDescription,
    shareDescription: t.ogDescription,
  });
}

// TODO(legal): replace the generic "THODZ SOLUTIONS, Algeria" wording with the
// registered entity name, registration number, address, and governing law once
// available, and have a lawyer review before relying on this in a dispute.
export default async function TermsPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).terms;

  return (
    <div className="container container--md prose">
      <JsonLd
        data={breadcrumbSchema(locale, getDictionary(locale).caseStudy.breadcrumbHome, [
          { name: getDictionary(locale).footer.terms, path: '/terms' },
        ])}
      />
      <h1>{t.title}</h1>
      <p className="prose-updated">{t.updated}</p>
      <p>{t.intro}</p>
      <ProseSections sections={t.sections} />
    </div>
  );
}
