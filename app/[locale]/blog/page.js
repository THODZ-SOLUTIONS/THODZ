import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/core/JsonLd';
import { PageHead } from '@/components/marketing/PageHead';
import { SITE_URL } from '@/lib/config';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { getBlogLocales, getPosts } from '@/lib/blog';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).blog;
  return buildMetadata({
    locale,
    path: '/blog',
    title: t.metaTitle,
    description: t.metaDescription,
    shareDescription: t.ogDescription,
    locales: getBlogLocales(),
    extra: { alternates: { types: { 'application/rss+xml': `${SITE_URL}/${locale}/blog/rss.xml` } } },
  });
}

export default async function BlogIndexPage({ params }) {
  const { locale } = await params;
  // A locale with nothing published does not get an empty page announcing
  // that we have a blog.
  if (!getBlogLocales().includes(locale)) notFound();

  const t = getDictionary(locale).blog;
  const posts = getPosts(locale);

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema(locale, getDictionary(locale).caseStudy.breadcrumbHome, [
          { name: getDictionary(locale).nav.blog, path: '/blog' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: t.metaTitle,
          url: `${SITE_URL}/${locale}/blog`,
          inLanguage: locale,
          publisher: { '@id': `${SITE_URL}/#organization` },
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `${SITE_URL}/${locale}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />

      <PageHead eyebrow={t.headEyebrow} title={t.headTitle} sub={t.headSub} />

      <section className="section section--flush-top">
        <div className="container container--lg">
          <div className="post-list">
            {posts.map((p) => (
              <Link key={p.slug} href={`/${locale}/blog/${p.slug}`} className="post-row">
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <div className="post-meta" style={{ marginBottom: 0 }}>
                  <time dateTime={p.date}>
                    {new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(p.date))}
                  </time>
                  <span>{t.readingTime.replace('{n}', p.readingMinutes)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
