import { CONTACT } from '@/lib/config';

// Renders the structured legal prose stored in the dictionaries (privacy,
// terms): a list of sections, each with a heading, optional paragraphs, and
// optional list items with a bold lead. The {email} token in any paragraph
// becomes a mailto link, so the address lives in lib/config.js only.
function withEmail(text) {
  const parts = text.split('{email}');
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>,
          part,
        ]
  );
}

export function ProseSections({ sections }) {
  return sections.map((s) => (
    <section key={s.h}>
      <h2>{s.h}</h2>
      {s.ps?.map((p) => (
        <p key={p}>{withEmail(p)}</p>
      ))}
      {s.items?.length > 0 && (
        <ul>
          {s.items.map((item) => (
            <li key={item.text}>
              {item.lead && <strong>{item.lead}</strong>}
              {item.lead ? ' ' : ''}
              {withEmail(item.text)}
            </li>
          ))}
        </ul>
      )}
    </section>
  ));
}
