/**
 * Header for the inner pages, matching the homepage section language: a mono
 * label, a tight display title, and the lede set beside it rather than under.
 *
 * The title renders as an h1 because on these routes it *is* the page title —
 * SectionHead stays for mid-page headings, which are h2s.
 */
export function PageHead({ eyebrow, title, sub }) {
  return (
    <header className="page-head">
      <div className="container">
        <div className="home-head">
          <div>
            <div className="home-eyebrow page-head-eyebrow">{eyebrow}</div>
            <h1 className="home-h2">{title}</h1>
          </div>
          {sub && <p className="home-lede">{sub}</p>}
        </div>
      </div>
    </header>
  );
}
