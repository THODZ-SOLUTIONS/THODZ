'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/core/Icon';

/**
 * Two yes/no questions that point at whichever engagement model fits.
 *
 * The match is advisory, not a quote: lib/content.js carries no prices on
 * purpose, so each card shows "Scoped per project" until a real floor is set
 * there. Nothing here invents a number.
 *
 *   known = "do you know exactly what you need built?"
 *   live  = "is the system already live?"
 *
 *   live && !known       -> support & operations  (something running, needs care)
 *   known                -> fixed-price project   (defined scope)
 *   otherwise            -> monthly retainer      (scope still moving)
 */
function matchIndex(known, live) {
  if (live === 'yes' && known === 'no') return 2;
  if (known === 'yes') return 0;
  return 1;
}

export function PricingPicker({ locale, engagements, t, tCard }) {
  const [known, setKnown] = useState('yes');
  const [live, setLive] = useState('no');
  const match = matchIndex(known, live);

  const cards = engagements.slice(0, 3);

  return (
    <div>
      <div className="pricing-quiz">
        <Question
          label={t.qKnown}
          value={known}
          onChange={setKnown}
          yes={t.yes}
          no={t.notYet}
        />
        <Question
          label={t.qLive}
          value={live}
          onChange={setLive}
          yes={t.yes}
          no={t.no}
        />
      </div>

      <div className="pricing-grid">
        {cards.map((e, i) => (
          <article key={e.name} className="pricing-card" data-match={i === match}>
            <div className="pricing-card-top">
              <span className="pricing-card-index">{String(i + 1).padStart(2, '0')}</span>
              {i === match && <span className="pricing-match">{t.fitsYourAnswers}</span>}
            </div>

            <h3 className="pricing-name">{e.name}</h3>
            <p className="pricing-best">{e.bestFor}</p>

            {/* startingAt is null throughout lib/content.js by design. */}
            <div className={`pricing-figure${e.startingAt ? '' : ' pricing-figure--scoped'}`}>
              {e.startingAt || tCard.scoped}
            </div>

            <p className="pricing-billing">{e.billing}</p>

            <ul className="pricing-includes">
              {e.includes.map((inc) => (
                <li key={inc}>
                  <Icon name="Check" size={15} aria-hidden="true" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/contact`}
              className={`btn btn--${i === match ? 'primary' : 'secondary'} btn--md`}
            >
              {t.cardCta}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function Question({ label, value, onChange, yes, no }) {
  return (
    <div className="pricing-q">
      <span className="pricing-q-label">{label}</span>
      <div className="pricing-toggle">
        <button type="button" aria-pressed={value === 'yes'} onClick={() => onChange('yes')}>
          {yes}
        </button>
        <button type="button" aria-pressed={value === 'no'} onClick={() => onChange('no')}>
          {no}
        </button>
      </div>
    </div>
  );
}
