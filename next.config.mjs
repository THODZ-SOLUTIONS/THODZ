/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // The generated share card is a real URL, so Google crawls and considers it
  // for indexing. It is an image of a page, not a page, and it was showing up
  // in Search Console as "crawled, currently not indexed". Keep it crawlable
  // — social scrapers must fetch it — but tell search engines not to index it.
  //
  // Static assets under /fonts are served by the Cloudflare assets layer
  // before the Worker runs, so they cannot be covered here. They need a
  // Cloudflare Transform Rule instead (see docs/seo.md).
  async headers() {
    return [
      {
        source: '/:path(opengraph-image|twitter-image)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

export default nextConfig;
