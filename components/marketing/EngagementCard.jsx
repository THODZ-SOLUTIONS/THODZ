import { SHOW_PLACEHOLDERS } from '@/lib/config';

// One engagement model, laid out like a spec sheet rather than a SaaS pricing
// tier: what it suits, how it's billed, and exactly what's inside it.
// `t` carries the localized labels (see dictionaries' engagementCard key).
export function EngagementCard({ name, startingAt, placeholderPrice, bestFor, billing, includes = [], highlight = false, t }) {
  // A real floor wins. Otherwise show the sample figure only behind the
  // placeholder gate, and an honest "scoped per project" in production.
  const price = startingAt || (SHOW_PLACEHOLDERS ? placeholderPrice : null);
  const isPlaceholderPrice = !startingAt && Boolean(price);

  return (
    <div className={`card engagement-card${highlight ? ' engagement-card--highlight' : ''}`}>
      <div>
        <h3>{name}</h3>
        <div className={`engagement-price${price ? ' engagement-price--set' : ''}`}>
          {price || t.scoped}
          {isPlaceholderPrice && <span className="engagement-price-flag">{t.placeholderFlag}</span>}
        </div>
      </div>

      <Row label={t.bestFor} value={bestFor} />
      <Row label={t.billing} value={billing} />

      <div className="engagement-includes">
        <div className="spec-label">{t.includes}</div>
        <ul className="dash-list">
          {includes.map((line) => (
            <li key={line}>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <div className="spec-label">{label}</div>
      <p className="spec-value">{value}</p>
    </div>
  );
}
