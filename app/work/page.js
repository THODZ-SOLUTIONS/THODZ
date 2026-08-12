import Link from 'next/link';
import { CaseStudyCard } from '@/components/marketing/CaseStudyCard';
import { SectionHead } from '@/components/marketing/SectionHead';
import { CASE_STUDIES } from '@/lib/content';

export const metadata = {
  title: 'Work',
  description: 'Selected engagements delivered by THODZ SOLUTIONS.',
};

export default function WorkPage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>
      <div className="bg-grid" style={{ padding: '80px 32px 56px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHead eyebrow="Selected work" title="What we&rsquo;ve shipped." sub="A running record of engagements. New entries land here as projects complete." />
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 32px' }}>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} style={{ textDecoration: 'none' }}>
              <CaseStudyCard {...c} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
