// Structured data for search engines. Rendered as a plain script tag so the
// markup ships with the server-rendered HTML.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // The payload is our own static content, serialised here rather than
      // hand-written, so it can never drift from lib/content.js.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
