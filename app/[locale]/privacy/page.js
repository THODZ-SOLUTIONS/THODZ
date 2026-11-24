import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL } from '@/lib/config';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { ProseSections } from '@/components/core/ProseSections';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).privacy;
  return buildMetadata({
    locale,
    path: '/privacy',
    title: t.metaTitle,
    description: t.metaDescription,
    shareDescription: t.ogDescription,
  });
}

// TODO(legal): replace the generic "THODZ SOLUTIONS, Algeria" wording with the
// registered entity name, registration number, and address once available.
export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).privacy;

  return (
    <div className="container container--md prose">
      <JsonLd
        data={breadcrumbSchema(locale, getDictionary(locale).caseStudy.breadcrumbHome, [
          { name: getDictionary(locale).footer.privacy, path: '/privacy' },
        ])}
      />
      <h1>{t.title}</h1>
      <p className="prose-updated">{t.updated}</p>
      <p>{t.intro}</p>
      <ProseSections sections={t.sections} />
    </div>
  );
}
