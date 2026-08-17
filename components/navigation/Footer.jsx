import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, SOCIALS } from '@/lib/config';

export function Footer({ locale, t }) {
  const company = [
    { label: t.nav.services, href: `/${locale}#services` },
    { label: t.nav.work, href: `/${locale}/work` },
    { label: t.nav.pricing, href: `/${locale}/pricing` },
    { label: t.nav.about, href: `/${locale}/about` },
    { label: t.footer.contact, href: `/${locale}/contact` },
  ];

  const contact = [
    { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneE164}` },
    { label: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}` },
  ];

  const socials = SOCIALS.filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-blurb">
          <Image
            src="/assets/logo-full.svg"
            alt="THODZ"
            width={240}
            height={64}
            className="logo-light"
            style={{ height: 38, width: 'auto', marginBottom: 18 }}
          />
          <Image
            src="/assets/logo-full-dark.svg"
            alt="THODZ"
            width={240}
            height={64}
            className="logo-dark"
            style={{ height: 38, width: 'auto', marginBottom: 18 }}
          />
          <p>{t.footer.blurb}</p>
          <p className="footer-locale">{t.footer.locale}</p>
        </div>

        <div className="footer-cols">
          <FooterCol title={t.footer.company} links={company} />
          <FooterCol title={t.footer.contact} links={contact} />
          {socials.length > 0 && <FooterCol title={t.footer.elsewhere} links={socials} />}
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

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="footer-col-title">{title}</div>
      <div className="footer-col-links">
        {links.map((l) => {
          const external = l.href.startsWith('http');
          return external ? (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="footer-link">
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
