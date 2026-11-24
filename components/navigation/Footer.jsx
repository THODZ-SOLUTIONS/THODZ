import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, SOCIALS, PRODUCTS } from '@/lib/config';

export function Footer({
  locale,
  t,
  showServices = false,
  landingLinks = [],
  // One link per service page, in this locale. Empty where the locale does
  // not publish them, so the column simply is not rendered.
  serviceLinks = [],
  showBlog = false,
}) {
  const company = [
    { label: t.nav.problems, href: `/${locale}#problems` },
    ...(showServices ? [{ label: t.nav.services, href: `/${locale}/services` }] : []),
    ...(showBlog ? [{ label: t.nav.blog, href: `/${locale}/blog` }] : []),
    { label: t.nav.work, href: `/${locale}/work` },
    { label: t.nav.pricing, href: `/${locale}/pricing` },
    { label: t.nav.faq, href: `/${locale}#faq` },
    { label: t.nav.about, href: `/${locale}/about` },
    { label: t.footer.contact, href: `/${locale}/contact` },
    ...landingLinks,
  ];

  const contact = [
    { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneE164}` },
    { label: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}` },
  ];

  // Products first, then the studio's profiles. rel="me" on the profiles is
  // the identity claim: "this account is us". Mastodon verifies the link with
  // it, and it is the same statement the schema.org sameAs makes.
  const elsewhere = [
    ...PRODUCTS.map((p) => ({ label: p.name, href: p.url })),
    ...SOCIALS.filter((s) => s.href).map((s) => ({ ...s, rel: 'me noreferrer' })),
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-blurb">
          <Image
            src="/assets/logo-full.svg"
            alt="THODZ"
            width={193}
            height={64}
            className="logo-light"
            style={{ height: 38, width: 'auto', marginBottom: 18 }}
          />
          <Image
            src="/assets/logo-full-dark.svg"
            alt="THODZ"
            width={193}
            height={64}
            className="logo-dark"
            style={{ height: 38, width: 'auto', marginBottom: 18 }}
          />
          <p>{t.footer.blurb}</p>
          <p className="footer-locale">{t.footer.locale}</p>
        </div>

        <div className="footer-cols">
          <FooterCol title={t.footer.company} links={company} />
          {serviceLinks.length > 0 && <FooterCol title={t.nav.services} links={serviceLinks} />}
          <FooterCol title={t.footer.contact} links={contact} />
          {elsewhere.length > 0 && (
            <FooterCol title={t.footer.elsewhere} links={elsewhere} grid />
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-fineprint">
          &copy; {new Date().getFullYear()} THODZ SOLUTIONS. {t.footer.rights}
        </span>
        <span className="footer-legal">
          <Link href={`/${locale}/privacy`} className="footer-link">
            {t.footer.privacy}
          </Link>
          <Link href={`/${locale}/terms`} className="footer-link">
            {t.footer.terms}
          </Link>
          <span className="footer-fineprint">thodz.com</span>
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, grid = false }) {
  return (
    <div>
      <div className="footer-col-title">{title}</div>
      <div className={`footer-col-links${grid ? ' footer-col-links--grid' : ''}`}>
        {links.map((l) => {
          const external = l.href.startsWith('http');
          return external ? (
            <a key={l.label} href={l.href} target="_blank" rel={l.rel || 'noreferrer'} className="footer-link">
              {l.label}
            </a>
          ) : (
            <Link key={l.label} href={l.href} className="footer-link">
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
