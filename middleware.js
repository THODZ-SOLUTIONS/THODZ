import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';
import { SITE_URL } from '@/lib/config';

// Every page lives under /{locale}. Requests without a locale prefix are
// redirected to the visitor's locale: their explicit choice (cookie set by the
// language switcher) first, then Accept-Language, then English. This also
// keeps every pre-i18n URL (/about, /work/...) working.
//
// /admin is the exception: it lives outside the locale tree and is gated by
// Supabase Auth instead — the session is refreshed here on every request.
//
// This stays middleware.js (not Next 16's proxy.js) on purpose: proxy.js is
// locked to the Node.js runtime, which the Cloudflare OpenNext adapter can't
// run — middleware.js keeps the edge runtime the deploy requires.

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

// Case studies pulled from the public site. Their detail pages are not
// generated (CASE_STUDIES filters `hidden`), so the URL 404s — and a 404 on a
// URL Google already has is a dead end for anything linking to it. Send them
// to the work index instead, permanently.
const RETIRED_CASE_STUDIES = ['giftili', 'boonka'];

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return adminAuth(request);
  }

  // One canonical host. www serves the same Worker, so without this it is a
  // full duplicate of the site held together only by canonical tags; a
  // permanent redirect is the stronger signal and costs the visitor one hop.
  const host = request.headers.get('host') || '';
  if (host.startsWith('www.')) {
    return NextResponse.redirect(`${SITE_URL}${pathname}${search}`, 308);
  }

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  const retired = RETIRED_CASE_STUDIES.find(
    (slug) => pathname === `/work/${slug}` || LOCALES.some((l) => pathname === `/${l}/work/${slug}`)
  );
  if (retired) {
    const locale = hasLocale ? pathname.split('/')[1] : detectLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/work`, request.url), 308);
  }

  if (hasLocale) return;

  // The home page negotiates: the same URL answers differently per visitor, so
  // the redirect has to stay temporary or a browser would cache one locale
  // forever. Every other unprefixed path is a pre-i18n URL that no longer
  // exists in the information architecture, so it redirects permanently to the
  // default locale. That trades locale detection on old links for a signal
  // Google treats as final.
  const url = request.nextUrl.clone();
  if (pathname === '/') {
    url.pathname = `/${detectLocale(request)}`;
    return NextResponse.redirect(url, 307);
  }
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API routes, Next internals, extensionless metadata routes, and any
  // request for an actual file (public/ assets all carry an extension).
  matcher: ['/((?!api|_next|opengraph-image|twitter-image|.*\\..*).*)'],
};
