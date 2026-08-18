import Image from 'next/image';

// A real product screenshot in a capture frame: hairline border, accent corner
// brackets carried over from the hero, and a mono caption bar underneath.
//
// Full-page captures (`tall`) are clipped to a readable height and faded out at
// the bottom rather than squashed, so the frame reads as the top of a long page
// instead of a distorted image.
export function Screenshot({ image, priority = false, height = 340, sizes = '(max-width: 900px) 100vw, 900px' }) {
  if (!image) return null;
  const { src, w, h, alt, caption, tall } = image;

  return (
    <figure className="shot">
      {/* The brackets sit on this wrapper, not on the clipping box below, so
          the rounded corners can't crop them. */}
      <div className="shot-wrap">
        {/* height is per-usage data, the one sanctioned inline style here. */}
        <div className="shot-frame" style={{ height }}>
          <Image src={src} alt={alt} width={w} height={h} priority={priority} sizes={sizes} />
          {tall && <div aria-hidden="true" className="shot-fade" />}
        </div>
        <span aria-hidden="true" className="shot-bracket shot-bracket--tl" />
        <span aria-hidden="true" className="shot-bracket shot-bracket--br" />
      </div>
      {caption && (
        <figcaption>
          <span aria-hidden="true" className="shot-slash">/</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
