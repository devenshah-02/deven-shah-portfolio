import React, { useState } from 'react';
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
  const [f, setF] = useState({ first: '', last: '', email: '', company: '', message: '' });
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submitRef = useMagnetic(8);

  const submit = async (e) => {
    e.preventDefault();
    if (!f.first || !f.email || !f.message) { setErr('Add your first name, email and a message to send.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(f.email)) { setErr('Enter an email like name@company.com.'); return; }
    setErr('');

    if (!site.formEndpoint) {
      // No form backend configured yet: fall back to opening the visitor's mail client.
      const subject = encodeURIComponent(`Hello from ${f.first} ${f.last}${f.company ? `, ${f.company}` : ''}`);
      const body = encodeURIComponent(`${f.message}\n\n${f.first} ${f.last}\n${f.email}${f.company ? `\n${f.company}` : ''}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${f.first} ${f.last}`.trim(),
          email: f.email,
          company: f.company,
          message: f.message,
        }),
      });
      if (!res.ok) throw new Error('Form submission failed');
      setSent(true);
      setF({ first: '', last: '', email: '', company: '', message: '' });
    } catch {
      setErr('Could not send that. Please email me directly instead.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHead num={s.num} label={s.label} lead={s.lead} accent={s.accent} />
          <Reveal as="p" className="contact-intro">{contactIntro}</Reveal>
          <Reveal className="contact-links" delay={100}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow dir="out" /></a>
            <a href={site.medium} target="_blank" rel="noreferrer">Medium <Arrow dir="out" /></a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          </Reveal>
        </div>

        <Reveal as="form" className="form" onSubmit={submit} noValidate delay={150}>
          <div className="form-row">
            <label>First name<input value={f.first} onChange={set('first')} autoComplete="given-name" /></label>
            <label>Last name<input value={f.last} onChange={set('last')} autoComplete="family-name" /></label>
          </div>
          <label>Email<input type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Company<input value={f.company} onChange={set('company')} autoComplete="organization" /></label>
          <label>Message<textarea rows="5" value={f.message} onChange={set('message')} /></label>
          {err && <p className="form-error is-shake" role="alert">{err}</p>}
          {sent && !err && (
            <p className="form-ok" role="status">
              <svg className="form-ok-check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4.5 8.2l2.2 2.2 4.8-4.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              {site.formEndpoint ? "Message sent — I'll reply soon." : 'Your mail app opened with the message ready to send.'}
            </p>
          )}
          <button ref={submitRef} className="btn btn-primary magnetic" type="submit" disabled={sending}>
            {sending ? <span className="btn-spinner" aria-hidden="true" /> : null}
            {sending ? 'Sending…' : 'Send message'}
          </button>
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
