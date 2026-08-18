import '@/styles/globals.css';
import { SITE_URL } from '@/lib/config';
import { THEME_INIT_SCRIPT } from '@/lib/theme';

// /admin lives outside the [locale] tree, so this is its own root layout
// (there is no top-level app/layout.js). English-only, never indexed, no
// site Navbar/Footer — just the theme bootstrap and a centered container.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Admin — THODZ', template: '%s — THODZ Admin' },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Same pre-paint theme bootstrap as the locale layout. */}
        <span
          hidden
          dangerouslySetInnerHTML={{ __html: `<script>${THEME_INIT_SCRIPT}</script>` }}
        />
        <main
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: 'var(--space-8) var(--container-pad)',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
