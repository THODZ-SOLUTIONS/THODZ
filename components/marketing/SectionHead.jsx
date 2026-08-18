export function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{sub}</p>
    </div>
  );
}
