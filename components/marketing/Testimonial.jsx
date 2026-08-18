import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/content';

// A client quote. Placeholder entries are visually flagged so a sample can
// never be mistaken for a real endorsement while previewing locally.
export function Testimonial({ quote, name, title, project, placeholder = false }) {
  const study = project ? CASE_STUDIES.find((c) => c.slug === project) : null;

  return (
    <figure className="card testimonial">
      {placeholder && <span className="placeholder-flag">Placeholder · not a real quote</span>}
      <blockquote>{quote}</blockquote>
      <figcaption>
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-title">{title}</span>
        {study && (
          <Link href={`/work/${study.slug}`} className="testimonial-link">
            {`Read the ${study.title} case study →`}
          </Link>
        )}
      </figcaption>
    </figure>
  );
}
