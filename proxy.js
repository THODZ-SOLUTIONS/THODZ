import { NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';

// Every page lives under /{locale}. Requests without a locale prefix are
// redirected to the visitor's locale: their explicit choice (cookie set by the
// language switcher) first, then Accept-Language, then English. This also
// keeps every pre-i18n URL (/about, /work/...) working.

function detectLocale(request) {
  const cookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (LOCALES.includes(cookie)) return cookie;

  const header = request.headers.get('accept-language') || '';
  for (const part of header.split(',')) {
    const code = part.split(';')[0].trim().toLowerCase().slice(0, 2);
    if (LOCALES.includes(code)) return code;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals, extensionless metadata routes, and any
  // request for an actual file (public/ assets all carry an extension).
  matcher: ['/((?!api|_next|opengraph-image|twitter-image|.*\\..*).*)'],
};
