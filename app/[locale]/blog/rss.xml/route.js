import { SITE_URL } from '@/lib/config';
import { getBlogLocales, getPosts } from '@/lib/blog';
import { getDictionary } from '@/lib/i18n';

// One feed per locale, at /<locale>/blog/rss.xml. A single mixed-language
// feed would be worse than none: a reader subscribing from France does not
// want English posts interleaved.
export function generateStaticParams() {
  return getBlogLocales().map((locale) => ({ locale }));
}

export const dynamic = 'force-static';

function escape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET(_request, { params }) {
  const { locale } = await params;
  if (!getBlogLocales().includes(locale)) {
    return new Response('Not found', { status: 404 });
  }

  const t = getDictionary(locale).blog;
  const posts = getPosts(locale);
  const self = `${SITE_URL}/${locale}/blog/rss.xml`;

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/${locale}/blog/${p.slug}`;
      return [
        '    <item>',
        `      <title>${escape(p.title)}</title>`,
        `      <link>${url}</link>`,
        // A permanent, unique id. The URL serves, and isPermaLink says so.
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
        `      <description>${escape(p.description)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escape(t.metaTitle)} · THODZ SOLUTIONS</title>`,
    `    <link>${SITE_URL}/${locale}/blog</link>`,
    `    <description>${escape(t.metaDescription)}</description>`,
    `    <language>${locale}</language>`,
    `    <atom:link href="${self}" rel="self" type="application/rss+xml" />`,
    ...(posts[0] ? [`    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>`] : []),
    items,
    '  </channel>',
    '</rss>',
  ]
    .filter(Boolean)
    .join('\n');

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      // A feed is not a page; keep it out of the index while leaving it
      // fetchable by readers.
      'x-robots-tag': 'noindex',
    },
  });
}
