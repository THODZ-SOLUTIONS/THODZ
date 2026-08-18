import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';

// Every page lives under /{locale}. Requests without a locale prefix are
// redirected to the visitor's locale: their explicit choice (cookie set by the
// language switcher) first, then Accept-Language, then English. This also
// keeps every pre-i18n URL (/about, /work/...) working.
//
// /admin is the exception: it lives outside the locale tree and is gated by
// Supabase Auth instead — the session is refreshed here on every request.

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

async function adminAuth(request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  // Unconfigured deployment: don't expose a broken dashboard.
  if (!url || !key) return new NextResponse('Not found', { status: 404 });

  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login');
  if (!user && !isLoginPage) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin/login';
    return NextResponse.redirect(redirectUrl);
  }
  if (user && isLoginPage) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin';
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return adminAuth(request);
  }

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
