import type { CSSProperties } from 'react';

export default function SquadPortrait({ id, label, delay = 0 }: { id: string; label: string; delay?: number }) {
  const halo = `portrait-halo-${id}`;
  const cloth = `portrait-cloth-${id}`;
  const light = `portrait-light-${id}`;

  return (
    <div className="squad-portrait-wrap" aria-hidden="true" style={{ '--portrait-delay': `${delay}ms` } as CSSProperties}>
      <span className="squad-portrait-kicker">{label}</span>
      <svg className="squad-portrait-art" viewBox="0 0 280 280" role="presentation" focusable="false">
        <defs>
          <radialGradient id={halo} cx="50%" cy="36%" r="66%">
            <stop offset="0" stopColor="#39744c" stopOpacity=".82" />
            <stop offset=".65" stopColor="#17442c" stopOpacity=".35" />
            <stop offset="1" stopColor="#092819" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={cloth} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#285f3d" />
            <stop offset=".48" stopColor="#103421" />
            <stop offset="1" stopColor="#061b11" />
          </linearGradient>
          <linearGradient id={light} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#efd329" stopOpacity=".72" />
            <stop offset="1" stopColor="#efd329" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="140" cy="138" r="118" fill={`url(#${halo})`} />
        <ellipse cx="140" cy="260" rx="70" ry="10" fill="#03130b" opacity=".62" />
        <path d="M99 134c-25 5-42 18-55 41-10 18-16 45-19 77 31 13 69 20 115 20s84-7 115-20c-3-32-9-59-19-77-13-23-30-36-55-41l-18-12h-46z" fill="#07140d" opacity=".88" />
        <path d="M111 118v25c-17 7-38 14-52 31-15 19-24 46-27 76 29 12 67 18 108 18s79-6 108-18c-3-30-12-57-27-76-14-17-35-24-52-31v-25z" fill={`url(#${cloth})`} />
        <path d="M109 128c-17 5-33 13-45 26-15 17-24 39-30 69" fill="none" stroke={`url(#${light})`} strokeWidth="5" />
        <path d="M171 128c17 5 33 13 45 26 15 17 24 39 30 69" fill="none" stroke="#efd329" strokeOpacity=".27" strokeWidth="2" />
        <path d="M119 126l21 20 21-20" fill="none" stroke="#efd329" strokeOpacity=".65" strokeWidth="3" />
        <path d="M122 121v16l18 16 18-16v-16" fill="#0a2618" />
        <rect x="128" y="101" width="24" height="38" rx="10" fill="#111a14" />
        <ellipse cx="140" cy="79" rx="35" ry="44" fill="#080f0b" />
        <path d="M107 77c2-34 21-54 46-50 17 2 28 17 30 39-10-7-19-17-25-27-12 16-30 25-51 28z" fill="#0a1710" />
        <path d="M108 87c4 22 15 36 32 40 17-4 28-18 32-40" fill="none" stroke="#efd329" strokeOpacity=".33" strokeWidth="2" />
        <path d="M70 207c6-18 15-32 28-42" fill="none" stroke="#efd329" strokeOpacity=".2" strokeWidth="2" />
      </svg>
      <span className="squad-portrait-note">ILLUSTRATIVE SILHOUETTE</span>
    </div>
  );
}
