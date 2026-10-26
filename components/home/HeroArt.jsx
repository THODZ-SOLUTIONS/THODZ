/**
 * The hero's right-hand composition: an abstract collage of the surfaces we
 * build — a list view, a chart, the THODZ mark, a phone, a security shield —
 * wired together on the blueprint field.
 *
 * Deliberately not a screenshot of any one project: it stands for the whole
 * stack, and it stays legible in both themes because every colour is a token.
 * Decorative, so it is hidden from assistive tech.
 */
export function HeroArt() {
  return (
    // direction=ltr: the composition is laid out on fixed coordinates, so on
    // the Arabic locale the text inside it must not re-anchor to the right.
    <svg
      viewBox="0 0 520 520"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      direction="ltr"
    >
      <defs>
        <linearGradient id="ha-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--bg-3)" />
          <stop offset="1" stopColor="var(--surface-overlay)" />
        </linearGradient>
      </defs>

      {/* connectors, drawn first so the cards sit on top */}
      <g
        className="ha-wires"
        stroke="var(--border-default)"
        strokeWidth="1"
        strokeDasharray="3 5"
        fill="none"
      >
        <path d="M168 150 H250 V232" />
        <path d="M352 150 H300 V232" />
        <path d="M168 372 H250 V300" />
        <path d="M352 372 H300 V300" />
      </g>

      {/* top-left: a list / table card */}
      <g className="ha-float ha-float-1">
        <rect x="56" y="92" width="150" height="104" rx="14"
          fill="var(--surface-overlay)" stroke="var(--border-default)" />
        <circle cx="74" cy="110" r="3" fill="var(--text-tertiary)" />
        <circle cx="84" cy="110" r="3" fill="var(--text-tertiary)" />
        <circle cx="94" cy="110" r="3" fill="var(--text-tertiary)" />
        <rect x="72" y="126" width="94" height="9" rx="4.5" fill="var(--fg-0)" />
        <rect x="72" y="144" width="60" height="9" rx="4.5" fill="var(--text-tertiary)" opacity=".5" />
        <rect x="140" y="144" width="48" height="9" rx="4.5" fill="var(--accent-primary)" />
        <rect x="72" y="162" width="78" height="9" rx="4.5" fill="var(--text-tertiary)" opacity=".35" />
      </g>

      {/* top-right: a small analytics card */}
      <g className="ha-float ha-float-2">
        <rect x="330" y="80" width="134" height="116" rx="14"
          fill="var(--surface-overlay)" stroke="var(--border-default)" />
        <rect x="348" y="98" width="62" height="8" rx="4" fill="var(--fg-0)" />
        <rect x="348" y="148" width="14" height="30" rx="4" fill="var(--text-tertiary)" opacity=".45" />
        <rect x="370" y="134" width="14" height="44" rx="4" fill="var(--text-tertiary)" opacity=".45" />
        <rect x="392" y="120" width="14" height="58" rx="4" fill="var(--accent-primary)" />
        <rect x="414" y="140" width="14" height="38" rx="4" fill="var(--text-tertiary)" opacity=".45" />
      </g>

      {/* centre: the THODZ mark on a raised tile */}
      <g className="ha-float ha-float-3">
        <rect x="196" y="196" width="128" height="128" rx="30"
          fill="url(#ha-mark)" stroke="var(--border-strong)" />
        <rect x="228" y="232" width="64" height="13" rx="6.5" fill="var(--fg-0)" />
        <rect x="228" y="253" width="48" height="13" rx="6.5" fill="var(--accent-primary)" />
        <rect x="228" y="274" width="32" height="13" rx="6.5" fill="var(--text-tertiary)" />
      </g>

      {/* bottom-left: a phone */}
      <g className="ha-float ha-float-4">
        <rect x="78" y="318" width="92" height="140" rx="18"
          fill="var(--surface-overlay)" stroke="var(--border-default)" />
        <circle cx="124" cy="358" r="15" fill="var(--accent-primary)" />
        <rect x="96" y="388" width="56" height="8" rx="4" fill="var(--text-tertiary)" opacity=".5" />
        <rect x="96" y="404" width="40" height="8" rx="4" fill="var(--text-tertiary)" opacity=".35" />
        <rect x="96" y="428" width="56" height="16" rx="8" fill="var(--fg-0)" />
      </g>

      {/* bottom-right: a security shield */}
      <g className="ha-float ha-float-5">
        <rect x="336" y="318" width="118" height="118" rx="16"
          fill="var(--surface-overlay)" stroke="var(--border-default)" />
        <path
          d="M395 346 L423 357 v20c0 16-12 27-28 33-16-6-28-17-28-33v-20z"
          fill="none" stroke="var(--accent-primary)" strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M385 377 l7 7 14-14" fill="none" stroke="var(--accent-primary)"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* the "in production" status pill, pinned to the top-left corner */}
      <g className="ha-float ha-float-6">
        <rect x="24" y="24" width="138" height="34" rx="17" fill="var(--accent-primary)" />
        <circle className="ha-pulse" cx="46" cy="41" r="5" fill="var(--text-inverse)" />
        <circle cx="46" cy="41" r="5" fill="var(--text-inverse)" />
        <text
          x="60" y="46"
          fontFamily="var(--font-mono)" fontSize="12"
          fill="var(--text-inverse)"
        >
          in production
        </text>
      </g>
    </svg>
  );
}
