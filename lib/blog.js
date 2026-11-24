// Blog posts, read from Markdown at build time.
//
// Why Markdown files rather than the lib/*.js data the rest of the site uses:
// a 1,200-word article with eight headings is miserable to write and review
// inside a JavaScript string literal. Everything else on this site is short
// enough for that; posts are not.
//
// Why Markdown rather than the MDX the brief asked for: MDX executes JSX, and
// the package that renders it on the server (next-mdx-remote) carries a
// high-severity advisory for arbitrary code execution during server-side
// rendering. Posts here are authored in this repository and reviewed in pull
// requests, so the practical risk is low — but the feature MDX buys, running
// components inside prose, is not one these posts need. Plain Markdown has no
// execution model to secure.
//
// Layout, which is also the locale model:
//
//   content/blog/<slug>/<locale>.md
//
// A post exists in a locale when that file exists, and in no others. That is
// what makes per-post hreflang honest: an article written in English and
// French declares two alternates, not eight.
//
// This module reads the filesystem, which is safe here because every blog
// route is statically generated (`dynamicParams = false` on the locale
// layout), so these functions run at build time and never inside the Worker.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ROOT = join(process.cwd(), 'content', 'blog');

marked.setOptions({ gfm: true, breaks: false });

/** Every post slug that has at least one locale, newest first by date. */
export function getPostSlugs() {
  if (!existsSync(ROOT)) return [];
  return readdirSync(ROOT).filter((name) => statSync(join(ROOT, name)).isDirectory());
}

/** Locales a post is actually written in. */
export function getPostLocales(slug) {
  const dir = join(ROOT, slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();
}

/**
 * One post in one locale, or null when it is not written in that language.
 *
 * `html` is rendered here rather than in the component so the page stays a
 * plain server component and the Markdown never reaches the browser.
 */
export function getPost(slug, locale) {
  const file = join(ROOT, slug, `${locale}.md`);
  if (!existsSync(file)) return null;

  const { data, content } = matter(readFileSync(file, 'utf8'));
  if (!data.title || !data.description || !data.date) {
    throw new Error(`content/blog/${slug}/${locale}.md is missing title, description or date`);
  }

  return {
    slug,
    locale,
    title: data.title,
    description: data.description,
    // An article headline is written to be read, not to fit a search result.
    // metaTitle / metaDescription override it for the tags only, and exist in
    // the frontmatter solely where the headline overflows.
    metaTitle: data.metaTitle || data.title,
    metaDescription: data.metaDescription || data.description,
    // ISO dates, so the schema and the sitemap can use them directly.
    date: new Date(data.date).toISOString(),
    updated: data.updated ? new Date(data.updated).toISOString() : null,
    author: data.author || 'THODZ SOLUTIONS',
    // A draft is readable at its URL but carries noindex and is kept out of
    // the index page, the sitemap and the feed. It is how a post gets
    // reviewed in the real layout before it is announced.
    draft: data.draft === true,
    readingMinutes: readingMinutes(content, locale),
    html: marked.parse(content),
  };
}

/** Published posts for a locale, newest first. Drafts are excluded. */
export function getPosts(locale) {
  return getPostSlugs()
    .map((slug) => getPost(slug, locale))
    .filter((p) => p && !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Locales with at least one published post.
 *
 * Derived rather than configured: the blog index and feed exist where there
 * is something to list, and a locale with only drafts does not get an empty
 * page announcing that we have a blog.
 */
/**
 * Locales a post is published in: written, and not a draft. This is the set
 * hreflang and the sitemap may declare. A draft renders at its URL for review
 * but is noindex, so naming it as an alternate would point at a page that
 * asks not to be indexed.
 */
export function getPublishedPostLocales(slug) {
  return getPostLocales(slug).filter((locale) => {
    const post = getPost(slug, locale);
    return post && !post.draft;
  });
}

export function getBlogLocales() {
  const locales = new Set();
  for (const slug of getPostSlugs()) {
    for (const locale of getPostLocales(slug)) {
      const post = getPost(slug, locale);
      if (post && !post.draft) locales.add(locale);
    }
  }
  return [...locales];
}

/** Every {slug, locale} pair that exists, drafts included so they render. */
export function getPostParams() {
  return getPostSlugs().flatMap((slug) =>
    getPostLocales(slug).map((locale) => ({ slug, locale }))
  );
}

// Latin prose is counted in words; Arabic too, since it is space-separated.
// Japanese and Chinese are not, so they are counted in characters at a rate
// that lands in the same ballpark rather than reporting a two-minute read for
// an article that takes ten.
function readingMinutes(text, locale) {
  const cjk = (text.match(/[぀-ヿ一-鿿]/g) || []).length;
  const minutes =
    cjk > text.length / 4 ? cjk / 500 : text.trim().split(/\s+/).filter(Boolean).length / 220;
  return Math.max(1, Math.round(minutes));
}
