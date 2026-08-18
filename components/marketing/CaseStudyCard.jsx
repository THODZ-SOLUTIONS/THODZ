import Image from 'next/image';

export function CaseStudyCard({ tag, title, summary, stack = [], metric, images = [] }) {
  const cover = images[0];

  return (
    <div className="card card--interactive case-card">
      {/* Real screenshot when we have one; a designed monogram tile when we
          don't. The tag lives in the body below, so nothing has to stay
          legible over an arbitrarily bright screenshot. */}
      <div className={`case-card-cover${cover ? '' : ' bg-grid'}`}>
        {cover ? (
          <>
            <Image
              src={cover.src}
              alt=""
              width={cover.w}
              height={cover.h}
              sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 400px"
            />
            {/* Light screenshots would otherwise glare against the page. */}
            <div aria-hidden="true" className="case-card-scrim" />
          </>
        ) : (
          <div aria-hidden="true" className="case-card-abstract">
            <span className="case-card-monogram">
              {title
                .split(/\s+/)
                .filter((w) => /^[a-z0-9]/i.test(w))
                .slice(0, 2)
                .map((w) => w[0])
                .join('')
                .toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="case-card-body">
        <span className="case-card-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="case-card-stack">
          {stack.map((s) => (
            <span key={s} className="case-card-chip">
              {s}
            </span>
          ))}
        </div>
        {metric && <div className="case-card-metric">{metric}</div>}
      </div>
    </div>
  );
}
