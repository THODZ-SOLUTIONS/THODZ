'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';

// not-found boundaries receive no params, so the locale is read from the URL
// (client component for that reason only). Strings live here rather than in
// the dictionaries so the 404 page doesn't drag every translation into the
// client bundle.
const TEXT = {
  en: {
    title: 'Page not found',
    body: 'The page you asked for doesn’t exist, or has moved.',
    backHome: 'Back to the homepage',
  },
  fr: {
    title: 'Page introuvable',
    body: 'La page demandée n’existe pas, ou a été déplacée.',
    backHome: 'Retour à l’accueil',
  },
  ar: {
    title: 'الصفحة غير موجودة',
    body: 'الصفحة التي طلبتها غير موجودة، أو تم نقلها.',
    backHome: 'العودة إلى الصفحة الرئيسية',
  },
};

export default function NotFound() {
  const pathname = usePathname() || '/';
  const first = pathname.split('/')[1];
  const locale = LOCALES.includes(first) ? first : DEFAULT_LOCALE;
  const t = TEXT[locale];

  return (
    <div className="container container--sm" style={{ padding: '120px 0', textAlign: 'center' }}>
      <h1 style={{ marginBottom: 16 }}>{t.title}</h1>
      <p style={{ marginBottom: 32, color: 'var(--text-secondary)' }}>{t.body}</p>
      <Link href={`/${locale}`} className="btn btn--primary btn--md">
        {t.backHome}
      </Link>
    </div>
  );
}
