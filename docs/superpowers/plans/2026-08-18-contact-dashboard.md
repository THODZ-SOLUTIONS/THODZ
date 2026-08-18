# Contact Submissions Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Store contact form submissions in Supabase and add a Supabase-Auth-protected admin dashboard at `/admin` to view, triage, delete, and export them.

**Architecture:** The public contact API route inserts rows server-side with the Supabase secret key (service role, bypasses RLS); the dashboard reads/updates through a cookie-based Supabase Auth session under RLS. `/admin` lives outside the `[locale]` segment with its own root layout; the existing `proxy.js` is extended to skip locale redirection for `/admin` and enforce auth there instead.

**Tech Stack:** Next.js 16 (App Router, `proxy.js`), `@supabase/supabase-js`, `@supabase/ssr`, new-format Supabase API keys (`sb_publishable_...` / `sb_secret_...`).

**Spec:** `docs/superpowers/specs/2026-08-18-contact-dashboard-design.md`

## Global Constraints

- No automated test infrastructure exists in this repo; each task ends with a concrete manual/CLI verification step instead of a unit test. Do not add a test framework.
- Plain JavaScript (`.js`/`.jsx`), no TypeScript — match the repo.
- Env var names exactly: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`. The secret key is server-only and must never appear in committed files or client bundles.
- If Supabase env vars are absent, the public site must behave exactly as before (contact route falls back to email/log only).
- Reuse existing UI primitives (`Button`, `Input`, `Toast`, `Tag`) and CSS variables (`--fg-*`, `--surface-*`, `--border-*`, `--space-*`, `--radius-*`); inline `style` objects are the established pattern for one-off layout.
- Admin pages are English-only, `noindex`, and excluded from the sitemap (sitemap only emits locale pages already — verify, don't restructure).

---

### Task 1: Dependencies, environment, and database schema

**Files:**
- Create: `supabase/schema.sql`
- Create: `.env.local` (NOT committed — already gitignored)
- Modify: `.env.example`
- Modify: `package.json` (via npm install)

**Interfaces:**
- Produces: table `public.contact_submissions` (columns: `id uuid`, `created_at timestamptz`, `name text`, `email text`, `company text`, `type text`, `timeline text`, `details text`, `nda boolean`, `status text 'new'|'read'`); env vars listed in Global Constraints; installed packages `@supabase/supabase-js`, `@supabase/ssr`.

- [ ] **Step 1: Install dependencies**

```bash
npm install @supabase/supabase-js @supabase/ssr
```

- [ ] **Step 2: Write `.env.local`** with the real values provided by the owner (URL `https://mpswflchlabmvliiiynp.supabase.co`, the `sb_publishable_...` key, and the `sb_secret_...` key — all three already supplied in conversation):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://mpswflchlabmvliiiynp.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<sb_publishable_... value>
SUPABASE_SECRET_KEY=<sb_secret_... value>
```

- [ ] **Step 3: Document the vars in `.env.example`** (append, with placeholder values only):

```bash
# Supabase (contact submissions + admin dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
SUPABASE_SECRET_KEY=sb_secret_...
```

- [ ] **Step 4: Create `supabase/schema.sql`**

```sql
-- Run once in the Supabase SQL editor (Dashboard → SQL Editor → New query).
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  type text,
  timeline text,
  details text,
  nda boolean not null default false,
  status text not null default 'new' check (status in ('new', 'read'))
);

alter table public.contact_submissions enable row level security;

-- The dashboard (any authenticated user) may read, triage, and delete.
-- No insert policy: inserts come only from the API route via the secret
-- key, which bypasses RLS entirely.
create policy "authenticated select" on public.contact_submissions
  for select to authenticated using (true);
create policy "authenticated update" on public.contact_submissions
  for update to authenticated using (true) with check (true);
create policy "authenticated delete" on public.contact_submissions
  for delete to authenticated using (true);
```

- [ ] **Step 5: Apply the schema** — ask the owner to paste `supabase/schema.sql` into the Supabase SQL editor and run it (there is no CLI access token in this environment).

- [ ] **Step 6: Verify the table exists** via REST with the secret key:

```bash
source .env.local && curl -s "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/contact_submissions?select=id" \
  -H "apikey: $SUPABASE_SECRET_KEY" -H "Authorization: Bearer $SUPABASE_SECRET_KEY"
```

Expected: `[]` (empty JSON array, not an error object).

- [ ] **Step 7: Commit** (`supabase/schema.sql`, `.env.example`, `package.json`, `package-lock.json` — never `.env.local`):

```bash
git add supabase/schema.sql .env.example package.json package-lock.json
git commit -m "feat: add Supabase schema and dependencies for contact submissions"
```

---

### Task 2: Supabase client helpers

**Files:**
- Create: `lib/supabase/client.js`
- Create: `lib/supabase/server.js`

**Interfaces:**
- Consumes: env vars from Task 1.
- Produces: `createClient()` (browser, sync) from `lib/supabase/client.js`; `createClient()` (server, **async**) from `lib/supabase/server.js`. Both return a Supabase client scoped to the visitor's auth cookies.

- [ ] **Step 1: Create `lib/supabase/client.js`**

```js
import { createBrowserClient } from '@supabase/ssr';

// Browser-side Supabase client. Publishable key only — safe to expose;
// all data access is gated by RLS + the signed-in session.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );
}
```

- [ ] **Step 2: Create `lib/supabase/server.js`**

```js
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Server-component Supabase client bound to the request's auth cookies.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component — safe to ignore because the
            // proxy refreshes sessions on every /admin request.
          }
        },
      },
    }
  );
}
```

- [ ] **Step 3: Verify** — `npm run lint` passes with no new errors.

- [ ] **Step 4: Commit**

```bash
git add lib/supabase/client.js lib/supabase/server.js
git commit -m "feat: add Supabase browser and server client helpers"
```

---

### Task 3: Store submissions from the contact API route

**Files:**
- Modify: `app/api/contact/route.js`

**Interfaces:**
- Consumes: `contact_submissions` table (Task 1).
- Produces: every valid POST to `/api/contact` inserts a row before attempting email. Insert failure never fails the request (logged only). Missing env vars → identical behavior to today.

- [ ] **Step 1: Add the import and insert block.** At the top of `app/api/contact/route.js` add:

```js
import { createClient } from '@supabase/supabase-js';
```

Immediately after the `if (!name || !email)` validation block (before the Resend section), insert:

```js
  // Primary record: store in Supabase when configured. Email below stays
  // best-effort — a DB row is the source of truth for the dashboard.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecret = process.env.SUPABASE_SECRET_KEY;
  if (supabaseUrl && supabaseSecret) {
    try {
      const supabase = createClient(supabaseUrl, supabaseSecret, {
        auth: { persistSession: false },
      });
      const { error } = await supabase.from('contact_submissions').insert({
        name,
        email,
        company: company || null,
        type: type || null,
        timeline: timeline || null,
        details: details || null,
        nda: Boolean(nda),
      });
      if (error) console.error('[contact] Supabase insert failed:', error.message);
    } catch (err) {
      console.error('[contact] Supabase insert failed:', err);
    }
  }
```

Also update the file's header comment to mention that submissions are stored in Supabase when `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SECRET_KEY` are set.

- [ ] **Step 2: Verify end-to-end.** Start dev server (`npm run dev`), then:

```bash
curl -s -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Plan Test","email":"plan-test@example.com","type":"Web","timeline":"flex","details":"verification row","nda":false}'
```

Expected: `{"ok":true}`. Then confirm the row landed:

```bash
source .env.local && curl -s "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/contact_submissions?select=name,email,status&email=eq.plan-test@example.com" \
  -H "apikey: $SUPABASE_SECRET_KEY" -H "Authorization: Bearer $SUPABASE_SECRET_KEY"
```

Expected: one row with `"status":"new"`.

- [ ] **Step 3: Commit**

```bash
git add app/api/contact/route.js
git commit -m "feat: store contact submissions in Supabase"
```

---

### Task 4: Admin root layout and login page

**Files:**
- Create: `app/admin/layout.js`
- Create: `app/admin/login/page.js`
- Create: `app/admin/login/LoginForm.jsx`

**Interfaces:**
- Consumes: `createClient` from `lib/supabase/client.js` (Task 2); existing `Input`, `Button` components; `THEME_INIT_SCRIPT` from `lib/theme`.
- Produces: `/admin/login` renders a working email+password form; successful sign-in redirects to `/admin`. `app/admin/layout.js` is the root layout (html/body) for everything under `/admin`.

- [ ] **Step 1: Create `app/admin/layout.js`.** There is no top-level `app/layout.js` — `app/[locale]/layout.js` is a root layout, so `/admin` needs its own (Next.js multiple-root-layouts). Keep it minimal: globals + theme init, no Navbar/Footer.

```js
import '@/styles/globals.css';
import { THEME_INIT_SCRIPT } from '@/lib/theme';

export const metadata = {
  title: { default: 'Admin — THODZ', template: '%s — THODZ Admin' },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <span
          hidden
          dangerouslySetInnerHTML={{ __html: `<script>${THEME_INIT_SCRIPT}</script>` }}
        />
        <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--container-pad)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create `app/admin/login/LoginForm.jsx`**

```jsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/core/Button';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const [sending, setSending] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');
    const form = e.target;
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.email.value,
      password: form.password.value,
    });
    if (signInError) {
      setError('Invalid email or password.');
      setSending(false);
      return;
    }
    router.push('/admin');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-4)' }}>
      <Input name="email" label="Email" type="email" required />
      <Input name="password" label="Password" type="password" required />
      {error && <span className="form-error">{error}</span>}
      <Button type="submit" variant="primary" size="lg" disabled={sending}>
        {sending ? 'Signing in…' : 'Sign in'}
      </Button>
    </form>
  );
}
```

- [ ] **Step 3: Create `app/admin/login/page.js`**

```js
import { LoginForm } from './LoginForm';

export const metadata = { title: 'Sign in' };

export default function AdminLoginPage() {
  return (
    <div style={{ maxWidth: 420, margin: '10vh auto 0' }}>
      <h1 style={{ marginBottom: 'var(--space-6)' }}>Admin sign in</h1>
      <LoginForm />
    </div>
  );
}
```

- [ ] **Step 4: Create the admin account** — ask the owner to add a user in Supabase Dashboard → Authentication → Users → Add user (email + password, "Auto confirm user" checked), or confirm they already have one.

- [ ] **Step 5: Verify** — with dev server running, open `http://localhost:3000/admin/login`: form renders with site styling (note: until Task 5 lands, the locale proxy still redirects `/admin/login` → `/en/admin/login` and 404s; if so, defer this check to Task 5 verification and only confirm `npm run lint` passes here).

- [ ] **Step 6: Commit**

```bash
git add app/admin/layout.js app/admin/login/page.js app/admin/login/LoginForm.jsx
git commit -m "feat: add admin root layout and Supabase Auth login page"
```

---

### Task 5: Auth gate in proxy.js

**Files:**
- Modify: `proxy.js`

**Interfaces:**
- Consumes: env vars; `/admin/login` route (Task 4).
- Produces: requests to `/admin*` skip locale redirection; unauthenticated visitors to `/admin` are redirected to `/admin/login`; authenticated visitors to `/admin/login` are redirected to `/admin`; Supabase session cookies are refreshed on every `/admin` request.

- [ ] **Step 1: Rewrite `proxy.js`** — keep the existing locale logic verbatim, route `/admin` to a new auth handler first:

```js
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
```

- [ ] **Step 2: Verify redirects** with dev server running:

```bash
curl -s -o /dev/null -w '%{redirect_url}\n' http://localhost:3000/admin
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/admin/login
curl -s -o /dev/null -w '%{redirect_url}\n' http://localhost:3000/about
```

Expected: line 1 ends with `/admin/login`; line 2 is `200`; line 3 still ends with `/en/about` (or detected locale) — locale behavior unchanged.

- [ ] **Step 3: Verify login flow in browser** — sign in at `/admin/login` with the admin account; expect redirect to `/admin` (404/placeholder until Task 6 — the redirect itself is the check).

- [ ] **Step 4: Commit**

```bash
git add proxy.js
git commit -m "feat: gate /admin behind Supabase Auth in proxy"
```

---

### Task 6: Submissions dashboard

**Files:**
- Create: `app/admin/page.js`
- Create: `app/admin/SubmissionsTable.jsx`

**Interfaces:**
- Consumes: server `createClient` (Task 2, async), browser `createClient` (Task 2), `Button`, `Tag`, `Toast` components, `contact_submissions` columns (Task 1).
- Produces: `/admin` lists submissions with unread count, expandable detail, mark read/unread, delete with confirm, CSV export, sign out.

- [ ] **Step 1: Create `app/admin/page.js`**

```js
import { createClient } from '@/lib/supabase/server';
import { SubmissionsTable } from './SubmissionsTable';

export const metadata = { title: 'Submissions' };
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  return <SubmissionsTable initialRows={data ?? []} loadError={error?.message || null} />;
}
```

- [ ] **Step 2: Create `app/admin/SubmissionsTable.jsx`**

```jsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/core/Button';
import { Tag } from '@/components/core/Tag';
import { Toast } from '@/components/feedback/Toast';

const TIMELINE_LABELS = { asap: 'ASAP', q: 'This quarter', flex: 'Flexible' };

function formatDate(iso) {
  return new Date(iso).toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

function toCsv(rows) {
  const cols = ['created_at', 'name', 'email', 'company', 'type', 'timeline', 'details', 'nda', 'status'];
  const escape = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  return [cols.join(','), ...rows.map((r) => cols.map((c) => escape(r[c])).join(','))].join('\n');
}

export function SubmissionsTable({ initialRows, loadError }) {
  const router = useRouter();
  const [rows, setRows] = React.useState(initialRows);
  const [openId, setOpenId] = React.useState(null);
  const [error, setError] = React.useState(loadError);
  const supabase = React.useMemo(() => createClient(), []);

  const unread = rows.filter((r) => r.status === 'new').length;

  async function setStatus(row, status) {
    const { error: err } = await supabase
      .from('contact_submissions').update({ status }).eq('id', row.id);
    if (err) return setError(err.message);
    setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, status } : r)));
  }

  async function remove(row) {
    if (!window.confirm(`Delete submission from ${row.name}? This cannot be undone.`)) return;
    const { error: err } = await supabase
      .from('contact_submissions').delete().eq('id', row.id);
    if (err) return setError(err.message);
    setRows((rs) => rs.filter((r) => r.id !== row.id));
  }

  function exportCsv() {
    const blob = new Blob([toCsv(rows)], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `contact-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  function toggleOpen(row) {
    setOpenId((id) => (id === row.id ? null : row.id));
    if (row.status === 'new') setStatus(row, 'read');
  }

  const cellStyle = { padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--border-subtle)', textAlign: 'left' };

  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
        <div>
          <h1 style={{ margin: 0 }}>Contact submissions</h1>
          <span className="field-note">{rows.length} total · {unread} unread</span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button variant="secondary" onClick={exportCsv} disabled={rows.length === 0}>Export CSV</Button>
          <Button variant="ghost" onClick={signOut}>Sign out</Button>
        </div>
      </header>

      {error && <Toast tone="danger" title="Something went wrong" message={error} />}

      {rows.length === 0 ? (
        <p style={{ color: 'var(--fg-3)' }}>No submissions yet.</p>
      ) : (
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-card)', background: 'var(--surface-raised)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ color: 'var(--fg-3)' }}>
                <th style={cellStyle}>Status</th>
                <th style={cellStyle}>Name</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Type</th>
                <th style={cellStyle}>Received</th>
                <th style={cellStyle} />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr onClick={() => toggleOpen(row)} style={{ cursor: 'pointer', fontWeight: row.status === 'new' ? 600 : 400 }}>
                    <td style={cellStyle}><Tag active={row.status === 'new'}>{row.status}</Tag></td>
                    <td style={cellStyle}>{row.name}</td>
                    <td style={cellStyle}><a href={`mailto:${row.email}`} onClick={(e) => e.stopPropagation()} style={{ color: 'var(--text-accent)' }}>{row.email}</a></td>
                    <td style={cellStyle}>{row.type || '—'}</td>
                    <td style={cellStyle}>{formatDate(row.created_at)}</td>
                    <td style={{ ...cellStyle, whiteSpace: 'nowrap' }}>
                      <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); setStatus(row, row.status === 'new' ? 'read' : 'new'); }}>
                        {row.status === 'new' ? 'Mark read' : 'Mark unread'}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); remove(row); }}>Delete</Button>
                    </td>
                  </tr>
                  {openId === row.id && (
                    <tr>
                      <td colSpan={6} style={{ ...cellStyle, background: 'var(--bg-3)' }}>
                        <dl style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: 'var(--space-2) var(--space-6)', margin: 0 }}>
                          <dt style={{ color: 'var(--fg-3)' }}>Company</dt><dd style={{ margin: 0 }}>{row.company || '—'}</dd>
                          <dt style={{ color: 'var(--fg-3)' }}>Timeline</dt><dd style={{ margin: 0 }}>{TIMELINE_LABELS[row.timeline] || row.timeline || '—'}</dd>
                          <dt style={{ color: 'var(--fg-3)' }}>NDA</dt><dd style={{ margin: 0 }}>{row.nda ? 'Yes' : 'No'}</dd>
                          <dt style={{ color: 'var(--fg-3)' }}>Details</dt><dd style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{row.details || '—'}</dd>
                        </dl>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser** — signed in at `/admin`: the Task 3 test row appears bold with a `new` tag and "1 unread"; clicking it expands details and flips it to `read`; "Mark unread" flips it back; Export CSV downloads a file containing the row; Delete (confirm dialog) removes it; Sign out lands on `/admin/login` and revisiting `/admin` redirects there.

- [ ] **Step 4: Commit**

```bash
git add app/admin/page.js app/admin/SubmissionsTable.jsx
git commit -m "feat: add contact submissions dashboard"
```

---

### Task 7: Robots exclusion and final verification

**Files:**
- Modify: `app/robots.js`

**Interfaces:**
- Consumes: everything above.
- Produces: `/admin` disallowed for crawlers; production build passes.

- [ ] **Step 1: Add `/admin` to the disallow list** in `app/robots.js`:

```js
        disallow: ['/api/', '/admin'],
```

(Replace the current string value with the array; keep the existing comment and add a note that `/admin` is the private dashboard.)

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: build succeeds; `/admin` and `/admin/login` appear as dynamic (ƒ) routes; locale pages still statically generated.

- [ ] **Step 3: Verify robots output** — `npm run dev`, then `curl -s http://localhost:3000/robots.txt`; expect both `Disallow: /api/` and `Disallow: /admin`.

- [ ] **Step 4: Commit**

```bash
git add app/robots.js
git commit -m "feat: exclude admin dashboard from crawlers"
```

- [ ] **Step 5: Full manual pass** — submit the real contact form at `/en/contact`, confirm the row appears in `/admin`, and confirm the Resend/log behavior still fires (check dev server logs).
