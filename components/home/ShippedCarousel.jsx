'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/core/Icon';

/**
 * The featured-work carousel: one project at a time, with the before/after
 * pair that says what changed.
 *
 * Every entry is guaranteed by FEATURED_CASE_STUDIES to have a screenshot and
 * a before/after pair, but the empty-state branches are kept so pulling a
 * screenshot out of lib/content.js degrades to the blueprint motif instead of
 * throwing.
 */
export function ShippedCarousel({ locale, studies, t, heading }) {
  const [index, setIndex] = useState(0);
  if (!studies.length) return null;

  const total = studies.length;
  const study = studies[index];
  const shot = study.images?.[0];
  const go = (d) => setIndex((i) => (i + d + total) % total);

  return (
    <div>
      {/* The heading is passed in so it can share a row with the controls. */}
      <div className="shipped-head">
        {heading}
        <div className="carousel-nav">
          <button
            type="button"
            className="carousel-btn"
            onClick={() => go(-1)}
            aria-label={t.previous}
          >
            <Icon name="ArrowLeft" size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="carousel-btn"
            onClick={() => go(1)}
            aria-label={t.next}
          >
            <Icon name="ArrowRight" size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* aria-live so keyboard and screen-reader users are told the slide
          changed; the heading inside carries the project name. */}
      <div className="shipped-slide" aria-live="polite">
        <div className="shipped-shot-col">
          <div className="shipped-shot-counter">
            {String(index + 1).padStart(2, '0')}
            <span>/ {String(total).padStart(2, '0')}</span>
          </div>
          <div className={`shipped-shot${shot ? '' : ' shipped-shot--empty'}`}>
            {shot ? (
              <Image
                src={shot.src}
                alt={shot.alt || study.title}
                width={shot.w}
                height={shot.h}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority={index === 0}
              />
            ) : (
              <span className="shot-placeholder">{study.tag}</span>
            )}
          </div>
        </div>

        <div className="shipped-body">
          <div className="shipped-tag">{study.tag}</div>
          <h3 className="shipped-title">{study.title}</h3>

          <div className="shipped-ba">
            <div className="shipped-ba-cell">
              <div className="shipped-ba-label">{t.before}</div>
              <p className="shipped-ba-text">{study.before}</p>
            </div>
            <div className="shipped-ba-cell shipped-ba-cell--after">
              <div className="shipped-ba-label">{t.after}</div>
              <p className="shipped-ba-text">{study.after}</p>
            </div>
          </div>

          <div className="shipped-stack">{study.stack.join(' · ')}</div>

          <div className="shipped-rail">
            {studies.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                className="shipped-rail-seg"
                data-on={i === index}
                aria-label={`${i + 1}. ${s.title}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Link href={`/${locale}/work/${study.slug}`} className="btn btn--secondary btn--md">
              {t.readCase}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The four-up grid of the projects not currently in the carousel slot. */
export function ShippedGrid({ locale, studies }) {
  return (
    <div className="shipped-grid">
      {studies.map((c) => {
        const shot = c.images?.[0];
        return (
          <Link key={c.slug} href={`/${locale}/work/${c.slug}`} className="shipped-card">
            <div className={`shipped-card-shot${shot ? '' : ' shipped-card-shot--empty'}`}>
              {shot ? (
                <Image
                  src={shot.src}
                  alt={shot.alt || c.title}
                  width={shot.w}
                  height={shot.h}
                  sizes="(max-width: 540px) 100vw, (max-width: 1040px) 50vw, 25vw"
                />
              ) : (
                <span className="shot-placeholder">{c.tag}</span>
              )}
            </div>
            <div className="shipped-tag">{c.tag}</div>
            <h3 className="shipped-card-title">{c.title}</h3>
            <p className="shipped-card-desc">{c.summary}</p>
            <div className="shipped-stack" style={{ marginTop: 0 }}>
              {c.stack.join(' · ')}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
