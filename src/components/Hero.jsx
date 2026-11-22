import React from 'react';
import { hero, latest, site, stats } from '../data/content.js';
import { useCountUp, useInView, useMagnetic } from '../hooks.js';
import { Arrow } from './ui.jsx';

function Stat({ s, start, i }) {
  const v = useCountUp(s.value, start, 1200 + i * 150);
  return (
    <div className="stat">
      <p className="stat-value">
        {s.prefix}{v}{s.suffix}
      </p>
      <p className="stat-label">{s.label}</p>
    </div>
  );
}

// Word spacing comes from .word's margin, not from whitespace between inline-blocks,
// which is what collapsed in the first build.
function Words({ text, accent = false, from = 0 }) {
  return text.split(' ').map((w, i) => (
    <span className="word" key={`${w}-${i}`}>
      <span
        className={`word-in ${accent ? 'accent' : ''}`}
        style={{ '--d': `${from + i * 70}ms` }}
      >
        {w}
      </span>
    </span>
  ));
}

export default function Hero() {
  const [statsRef, statsIn] = useInView({ threshold: 0.4 });
  const leadCount = hero.titleLead.split(' ').length;
  const primaryRef = useMagnetic(10);
  const secondaryRef = useMagnetic(10);

  const onGlowMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section className="hero" id="top" onPointerMove={onGlowMove}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow load" style={{ '--d': '0ms' }}>{hero.eyebrow}</p>
          <h1 className="h1">
            <Words text={hero.titleLead} from={120} />
            <Words text={hero.titleAccent} accent from={120 + leadCount * 70} />
          </h1>
          <p className="hero-intro load" style={{ '--d': '700ms' }}>{hero.intro}</p>
          <div className="hero-actions load" style={{ '--d': '820ms' }}>
            <a ref={primaryRef} href="#contact" className="btn btn-primary magnetic">{hero.ctaPrimary}</a>
            <a ref={secondaryRef} href={site.cv} target="_blank" rel="noreferrer" className="btn btn-ghost magnetic">{hero.ctaSecondary} <Arrow dir="out" /></a>
          </div>
          <ul className="hero-meta load" style={{ '--d': '940ms' }}>
            {hero.meta.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </div>

        <div className="hero-visual load" style={{ '--d': '300ms' }}>
          <div className="portrait">
            <div className="portrait-ring" aria-hidden="true" />
            <img src={site.photo} alt="Deven Shah" width="440" height="520" />
          </div>
        </div>
      </div>

      <div className="container">
        <a href={latest.href} className="latest load" style={{ '--d': '1080ms' }}>
          <span className="latest-tag">{latest.tag}</span>
          <span className="latest-text">
            <strong>{latest.title}</strong>
            <span>{latest.sub}</span>
          </span>
          <span className="latest-cta">{latest.cta} <Arrow /></span>
        </a>

        <div className="stats" ref={statsRef}>
          {stats.map((s, i) => <Stat key={s.label} s={s} start={statsIn} i={i} />)}
        </div>
      </div>
    </section>
  );
}
