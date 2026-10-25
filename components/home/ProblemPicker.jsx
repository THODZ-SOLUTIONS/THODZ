'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/core/Icon';

/**
 * "Tell us what's in the way" — a vertical tab list of client-side problem
 * statements, each revealing what we would build for it.
 *
 * Implemented as a real ARIA tablist with roving focus so the whole section
 * is reachable from the keyboard; the panels are rendered one at a time
 * because only the selected one carries meaning.
 */
export function ProblemPicker({ locale, problems, disciplineLabels, disciplineKeys, t }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = problems[active];

  function onKeyDown(e) {
    const last = problems.length - 1;
    // In RTL the arrow keys still map to "previous/next in reading order",
    // which for a vertical list is up/down, so only those are handled.
    let next = null;
    if (e.key === 'ArrowDown') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowUp') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  }

  return (
    <div className="problem-layout">
      <div
        className="problem-list"
        role="tablist"
        aria-orientation="vertical"
        aria-label={t.pickerLabel}
        onKeyDown={onKeyDown}
      >
        {problems.map((p, i) => (
          <button
            key={p.title}
            id={`${baseId}-tab-${i}`}
            type="button"
            role="tab"
            className="problem-tab"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            <span className="problem-tab-index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      <div
        className="problem-panel"
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={-1}
      >
        <div className="home-eyebrow">{t.whatWedBuild}</div>
        <p className="problem-panel-title">{current.build}</p>

        <div className="problem-deliverables">
          {current.gets.map((g) => (
            <div key={g} className="problem-deliverable">
              <Icon name="Check" size={16} aria-hidden="true" />
              <span>{g}</span>
            </div>
          ))}
        </div>

        <div className="problem-meta">
          <div>
            <div className="problem-meta-label">{t.firstStep}</div>
            <p className="problem-meta-value">{current.first}</p>
          </div>
          {/* Only rendered when a published case study backs this up. */}
          {current.ref && current.refLabel && (
            <div>
              <div className="problem-meta-label">{t.weveShipped}</div>
              <p className="problem-meta-value">
                <Link href={`/${locale}/work/${current.ref}`}>{current.refLabel}</Link>
              </p>
            </div>
          )}
        </div>

        <div className="problem-disciplines">
          <div className="problem-meta-label">{t.disciplinesNote}</div>
          <div className="problem-chips">
            {disciplineKeys.map((key, i) => (
              <span
                key={key}
                className="problem-chip"
                data-on={current.disciplines.includes(key)}
              >
                {disciplineLabels[i] || key}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
