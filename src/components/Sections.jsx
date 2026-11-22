import React, { useRef, useState } from 'react';
import { about, capabilities, decisions, experience, sections, work } from '../data/content.js';
import { useInView } from '../hooks.js';
import { Reveal, SectionHead } from './ui.jsx';

export function Capabilities() {
  const s = sections.own;
  return (
    <section className="section" id="own">
      <div className="container">
        <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} />
        <div className="cap-grid">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90} className="cap">
              <span className="cap-key">{c.key}</span>
              <h3 className="h3">{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const s = sections.about;
  return (
    <section className="section section-tint" id="about">
      <div className="container about-grid">
        <SectionHead num={s.num} label={s.label} lead={about.titleLead} accent={about.titleAccent} />
        <div className="about-body">
          {about.paras.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 100}>{p}</Reveal>
          ))}
          <Reveal className="tag-row" delay={300}>
            {about.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Holds the clicked header still while the panel above it collapses.
// Without this, opening case 2 dragged its own header up off the screen.
function anchor(el, apply) {
  if (!el) { apply(); return; }
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  const start = el.getBoundingClientRect().top;
  apply();
  root.style.scrollBehavior = 'auto';
  let t0;
  const step = (t) => {
    if (t0 === undefined) t0 = t;
    const drift = el.getBoundingClientRect().top - start;
    if (Math.abs(drift) > 0.5) window.scrollBy(0, drift);
    if (t - t0 < 700) requestAnimationFrame(step);
    else root.style.scrollBehavior = prev;
  };
  requestAnimationFrame(step);
}

function CaseStudy({ c, i, open, onToggle }) {
  const id = `case-${i}`;
  const headRef = useRef(null);
  return (
    <Reveal className={`case ${open ? 'is-open' : ''}`} delay={i * 80}>
      <button
        ref={headRef}
        className="case-head"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => anchor(headRef.current, onToggle)}
      >
        <span className="case-index">{String(i + 1).padStart(2, '0')}</span>
        <span className="case-titles">
          <span className="case-area">{c.area}</span>
          <span className="case-title">{c.title}</span>
          <span className="case-hook">{c.hook}</span>
        </span>
        <span className="case-toggle" aria-hidden="true" />
      </button>
      <div className="case-body" id={id} role="region">
        <div className="case-inner">
          <div className="case-cols">
            {c.cols.map((col) => (
              <div key={col.h}>
                <h4>{col.h}</h4>
                <ul>{col.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  // All closed on load, so the three outcome titles can be scanned first.
  const [open, setOpen] = useState(-1);
  const s = sections.work;
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} aside={s.aside} />
        <div className="cases">
          {work.map((c, i) => (
            <CaseStudy
              key={c.title}
              c={c}
              i={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Decisions() {
  const [sel, setSel] = useState(0);
  const d = decisions[sel];
  const s = sections.decisions;
  return (
    <section className="section section-ink" id="decisions">
      <div className="container">
        <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} />
        <Reveal className="decide">
          <div className="decide-list" role="tablist" aria-label="Decisions">
            {decisions.map((x, i) => (
              <button
                key={x.title}
                role="tab"
                aria-selected={sel === i}
                className={sel === i ? 'is-active' : ''}
                onClick={() => setSel(i)}
              >
                {x.title}
              </button>
            ))}
          </div>
          <div className="decide-panel" role="tabpanel" key={sel}>
            <dl>
              <div><dt>Situation</dt><dd>{d.situation}</dd></div>
              <div><dt>The call</dt><dd>{d.call}</dd></div>
              <div><dt>Outcome</dt><dd>{d.result}</dd></div>
            </dl>
            <p className="decide-lesson">{d.lesson}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Each role reveals on its own, so the lower ones don't finish off-screen on a phone.
function TimelineItem({ e }) {
  const [ref, inView] = useInView({ threshold: 0.35 });
  return (
    <li ref={ref} className={`tl-item ${inView ? 'is-in' : ''}`}>
      <span className="tl-dot" aria-hidden="true" />
      <div className="tl-main">
        <h3 className="h3">{e.company}</h3>
        <p className="tl-role">{e.role}</p>
        <p className="tl-note">{e.note}</p>
      </div>
      <div className="tl-side">
        <span className="tl-dates">{e.dates}</span>
        {e.current && <span className="tag tag-live">Current</span>}
      </div>
    </li>
  );
}

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const s = sections.experience;
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} aside={s.aside} />
        <ol className={`timeline ${inView ? 'is-in' : ''}`} ref={ref}>
          {experience.map((e, i) => <TimelineItem key={`${e.company}-${e.role}-${i}`} e={e} />)}
        </ol>
      </div>
    </section>
  );
}
