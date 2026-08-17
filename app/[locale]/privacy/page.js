import { SITE_URL } from '@/lib/config';
import { ProseSections } from '@/components/core/ProseSections';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).privacy;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/privacy'),
    openGraph: {
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
      url: `${SITE_URL}/${locale}/privacy`,
    },
  };
}

// TODO(legal): replace the generic "THODZ SOLUTIONS, Algeria" wording with the
// registered entity name, registration number, and address once available.
export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).privacy;

  return (
    <div className="container container--md prose">
      <h1>{t.title}</h1>
      <p className="prose-updated">{t.updated}</p>
      <p>{t.intro}</p>
      <ProseSections sections={t.sections} />
    </div>
  );
}
