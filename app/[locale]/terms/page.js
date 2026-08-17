import { SITE_URL } from '@/lib/config';
import { ProseSections } from '@/components/core/ProseSections';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).terms;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/terms'),
    openGraph: {
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
      url: `${SITE_URL}/${locale}/terms`,
    },
  };
}

// TODO(legal): replace the generic "THODZ SOLUTIONS, Algeria" wording with the
// registered entity name, registration number, address, and governing law once
// available, and have a lawyer review before relying on this in a dispute.
export default async function TermsPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).terms;

  return (
    <div className="container container--md prose">
      <h1>{t.title}</h1>
      <p className="prose-updated">{t.updated}</p>
      <p>{t.intro}</p>
      <ProseSections sections={t.sections} />
    </div>
  );
}
