/**
 * The nine disciplines as a continuously scrolling band.
 *
 * The list is rendered twice so the -50% keyframe lands exactly on the seam
 * and the loop is invisible. The second pass is aria-hidden: a screen reader
 * should hear the nine services once, not eighteen times.
 */
export function ServiceMarquee({ services }) {
  const titles = services.map((s) => s.title);
  const passes = [
    { key: 'a', hidden: false },
    { key: 'b', hidden: true },
  ];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {passes.map((pass) =>
          titles.map((title) => (
            <span
              key={`${pass.key}-${title}`}
              className="marquee-item"
              aria-hidden={pass.hidden || undefined}
            >
              {title}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
