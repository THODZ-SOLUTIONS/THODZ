'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n/config';

// Language switcher: swaps the locale segment of the current path, so the
// visitor stays on the page they're reading. The cookie makes the choice
// sticky for future un-prefixed visits (read by middleware.js).
export function LocaleSwitcher({ locale, label }) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/[^/]+/, '');

  return (
    <div className="locale-switcher" role="group" aria-label={label}>
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          lang={l}
          className={`locale-switcher-link${l === locale ? ' locale-switcher-link--active' : ''}`}
          aria-current={l === locale ? 'true' : undefined}
          onClick={() => {
            document.cookie = `NEXT_LOCALE=${l};path=/;max-age=31536000;samesite=lax`;
          }}
        >
          {LOCALE_NAMES[l]}
        </Link>
      ))}
    </div>
  );
}
