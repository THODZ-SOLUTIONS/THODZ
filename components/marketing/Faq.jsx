// Native <details> disclosure: works with JavaScript disabled, is keyboard
// operable for free, and is what browser find-in-page can already expand.
export function Faq({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary className="faq-summary">
            <span>{item.q}</span>
            <span className="faq-marker" aria-hidden="true" />
          </summary>
          <p className="faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
