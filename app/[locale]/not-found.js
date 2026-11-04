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
  es: {
    title: 'Página no encontrada',
    body: 'La página que has pedido no existe, o se ha movido.',
    backHome: 'Volver a la página de inicio',
  },
  de: {
    title: 'Seite nicht gefunden',
    body: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
    backHome: 'Zurück zur Startseite',
  },
  nl: {
    title: 'Pagina niet gevonden',
    body: 'De pagina die je zocht bestaat niet, of is verplaatst.',
    backHome: 'Terug naar de homepagina',
  },
  ja: {
    title: 'ページが見つかりません',
    body: 'お探しのページは存在しないか、移動しました。',
    backHome: 'ホームへ戻る',
  },
  pt: {
    title: 'Página não encontrada',
    body: 'A página que procurava não existe, ou foi movida.',
    backHome: 'Voltar à página inicial',
  },
};

export default function NotFound() {
  const pathname = usePathname() || '/';
  const first = pathname.split('/')[1];
  const locale = LOCALES.includes(first) ? first : DEFAULT_LOCALE;
  const t = TEXT[locale] || TEXT[DEFAULT_LOCALE];

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
