import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL } from '@/lib/config';
import { pageOpenGraph } from '@/lib/seo';
import { getPost, getPostLocales, getPostParams } from '@/lib/blog';
import { localeAlternatesIn } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';

// Exact {locale, slug} pairs, so a post written in two languages produces two
// pages and not sixteen. Spelled out rather than returning bare slugs: under
// Next 16 + Turbopack, reading the parent's locale from the argument and
// returning slugs alone produces no pages at all.
export function generateStaticParams() {
  return getPostParams();
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};
  return {
    // Absolute, because the layout template appends ' · THODZ SOLUTIONS' —
    // 18 characters on top of a headline that is already long. The short
    // brand keeps THODZ in the result instead of being what gets truncated.
    title: { absolute: `${post.metaTitle} · THODZ` },
    description: post.metaDescription,
    // hreflang lists only the languages this post is actually written in.
    // A post in English and French declares two alternates, not eight;
    // claiming a translation that does not exist is a link to a 404.
    alternates: {
      ...localeAlternatesIn(getPostLocales(slug), `/blog/${slug}`, locale),
      types: { 'application/rss+xml': `${SITE_URL}/${locale}/blog/rss.xml` },
    },
    // A draft is reachable at its URL so it can be reviewed in the real
    // layout, but it must not be indexed or it will be found before it is
    // finished.
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
    ...pageOpenGraph({
      locale,
      path: `/blog/${slug}`,
      // Share cards have no length budget, so they keep the full headline.
      title: `${post.title} · THODZ SOLUTIONS`,
      description: post.description,
      type: 'article',
    }),
  };
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) notFound();

  const t = getDictionary(locale).blog;
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const published = new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
    new Date(post.date)
  );

  return (
    <div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          url,
          inLanguage: locale,
          datePublished: post.date,
          // Only when the post has actually been revised. dateModified equal
          // to datePublished on every article is noise.
          ...(post.updated ? { dateModified: post.updated } : {}),
          author: { '@type': 'Organization', name: post.author, url: SITE_URL },
          publisher: { '@id': `${SITE_URL}/#organization` },
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        }}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${SITE_URL}/${locale}` },
            { '@type': 'ListItem', position: 2, name: t.breadcrumbBlog, item: `${SITE_URL}/${locale}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title },
          ],
        }}
      />

      <div className="container container--lg">
        <article className="prose">
          <Link href={`/${locale}/blog`} className="back-link">
            <Icon name="ArrowLeft" size={14} className="icon-flip-rtl" /> {t.back}
          </Link>

          <h1>{post.title}</h1>

          <div className="post-meta">
            <span>{post.author}</span>
            <time dateTime={post.date}>{published}</time>
            <span>{t.readingTime.replace('{n}', post.readingMinutes)}</span>
            {post.draft && <span>{t.draft}</span>}
          </div>

          {/* The Markdown is authored in this repository and reviewed in pull
              requests, and it is rendered to HTML at build time by lib/blog.js
              — nothing user-supplied reaches this. */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </div>
  );
}
