import React from 'react';
import { awards, clients, closing, contactIntro, podcasts, sections, site, toolbox, writing } from '../data/content.js';
import { useMagnetic, useReducedMotion } from '../hooks.js';
import { Arrow, Reveal, SectionHead } from './ui.jsx';

export function Toolbox() {
  const s = sections.toolbox;
  const reduce = useReducedMotion();
  // The loop needs two copies to be seamless. With reduced motion it doesn't
  // loop, so the second copy would just be every client name listed twice.
  const track = reduce ? clients : [...clients, ...clients];
  return (
    <section className="section section-tint" id="toolbox">
      <div className="container">
        <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} />
        <div className="tool-grid">
          {toolbox.map((g, i) => (
            <Reveal key={g.group} className="tool-group" delay={i * 100}>
              <h3 className="h3">{g.group}</h3>
              <div className="tag-row">
                {g.items.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="marquee-wrap">
        <p className="marquee-label container">Platforms and clients I’ve built for</p>
        <div className="marquee" aria-label={clients.join(', ')}>
          <div className="marquee-track" aria-hidden="true">
            {track.map((c, i) => <span key={i} className="marquee-item">{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Writing() {
  const s = sections.writing;
  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} />
        <div className="writing-grid">
          <div className="post-list">
            {writing.map((w, i) => (
              <Reveal
                as="a"
                key={w.title}
                href={w.href}
                target={w.ext ? '_blank' : undefined}
                rel={w.ext ? 'noreferrer' : undefined}
                className="post"
                delay={i * 60}
              >
                <span className="post-title">{w.title}</span>
                <span className="post-meta">{w.meta}<Arrow dir={w.ext ? 'out' : 'right'} /></span>
              </Reveal>
            ))}
            <a className="text-link" href={site.medium} target="_blank" rel="noreferrer">
              All articles on Medium <Arrow dir="out" />
            </a>
          </div>
          <aside className="side-stack">
            <Reveal className="side-card">
              <h3 className="h3">In conversation</h3>
              {podcasts.map((p) => (
                <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className="pod">
                  <span className="pod-play" aria-hidden="true" />
                  <span><strong>{p.title}</strong><small>{p.meta}</small></span>
                </a>
              ))}
            </Reveal>
            <Reveal className="side-card" delay={120}>
              <h3 className="h3">Recognition</h3>
              <ul className="awards">
                {awards.map((a) => <li key={a.title}><span>{a.title}</span><small>{a.date}</small></li>)}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const s = sections.contact;
  const waRef = useMagnetic(8);
  const mailRef = useMagnetic(8);
  const whatsapp = `https://wa.me/${site.phone.replace(/\D/g, '')}`;

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} />
          <Reveal as="p" className="contact-intro">{contactIntro}</Reveal>
          <Reveal className="contact-links" delay={100}>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow dir="out" /></a>
            <a href={site.medium} target="_blank" rel="noreferrer">Medium <Arrow dir="out" /></a>
          </Reveal>
        </div>

        <Reveal className="contact-actions" delay={150}>
          <a ref={waRef} href={whatsapp} target="_blank" rel="noreferrer" className="contact-card magnetic">
            <span className="contact-card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8.3 8.6c.2-.5.5-.5.7-.5h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.4 0 .7.6 1 1.6 2 2.7 2.5.3.1.5.1.6-.1l.6-.6c.2-.2.4-.2.6-.1l1.8.9c.2.1.3.3.3.5 0 .9-.9 1.6-1.7 1.6-2.7 0-5.9-2.6-6.9-5.3-.4-1-.1-1.8.1-2.2z" fill="currentColor" />
              </svg>
            </span>
            <span>
              <strong>WhatsApp</strong>
              <small>{site.phone}</small>
            </span>
            <Arrow dir="out" />
          </a>
          <a ref={mailRef} href={`mailto:${site.email}`} className="contact-card magnetic">
            <span className="contact-card-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </span>
            <span>
              <strong>Email</strong>
              <small>{site.email}</small>
            </span>
            <Arrow dir="right" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  const emailRef = useMagnetic(10);
  const cvRef = useMagnetic(10);
  return (
    <section className="final">
      <div className="container final-inner">
        <Reveal as="h2" className="final-title">
          {closing.titleLead} <em>{closing.titleAccent}</em>
        </Reveal>
        <Reveal delay={120} className="final-actions">
          <a ref={emailRef} href={`mailto:${site.email}`} className="btn btn-light magnetic">Email me</a>
          <a ref={cvRef} href={site.cv} target="_blank" rel="noreferrer" className="btn btn-outline-light magnetic">Download CV</a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">DS</span>
          <span className="brand-name">{site.name}</span>
        </a>
        <nav aria-label="Footer">
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.medium} target="_blank" rel="noreferrer">Medium</a>
          <a href={site.cv} target="_blank" rel="noreferrer">CV</a>
        </nav>
        <p>© {new Date().getFullYear()} Deven Shah</p>
      </div>
    </footer>
  );
}
