import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { nav, site } from '../data/content.js';
import { useActiveSection, useScrolled, useScrollProgress } from '../hooks.js';

const ids = nav.map((n) => n.href.slice(1));

export default function Nav() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const progressRef = useRef(null);
  const listRef = useRef(null);
  const linkRefs = useRef([]);
  const panelRef = useRef(null);
  const burgerRef = useRef(null);
  const squashTimer = useRef(0);

  useScrollProgress(progressRef);

  // The sliding highlight follows the hovered link, falling back to the active one.
  const target = hovered ?? (active ? ids.indexOf(active) : -1);

  const moveHighlight = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const el = linkRefs.current[target];
    if (!el) {
      list.style.setProperty('--hl-opacity', '0');
      return;
    }
    list.style.setProperty('--hl-x', `${el.offsetLeft}px`);
    list.style.setProperty('--hl-w', `${el.offsetWidth}px`);
    list.style.setProperty('--hl-opacity', '1');

    // Brief squash as it travels, so it reads as liquid rather than a sliding box.
    list.classList.add('is-moving');
    clearTimeout(squashTimer.current);
    squashTimer.current = setTimeout(() => list.classList.remove('is-moving'), 260);
  }, [target]);

  useLayoutEffect(() => {
    moveHighlight();
  }, [moveHighlight, scrolled]);

  useEffect(() => {
    window.addEventListener('resize', moveHighlight);
    // Web fonts change link widths after first paint.
    if (document.fonts?.ready) document.fonts.ready.then(moveHighlight).catch(() => {});
    return () => {
      window.removeEventListener('resize', moveHighlight);
      clearTimeout(squashTimer.current);
    };
  }, [moveHighlight]);

  // Cursor light across the glass bar.
  const onBarMove = (e) => {
    const bar = e.currentTarget;
    const r = bar.getBoundingClientRect();
    bar.style.setProperty('--mx', `${e.clientX - r.left}px`);
    bar.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  // Mobile panel: closes on Esc, outside tap, or scroll. No body scroll lock,
  // which is what used to break in-page jumps on iOS.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (panelRef.current?.contains(e.target) || burgerRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const onScroll = () => setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    panelRef.current?.querySelector('a')?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-bar" onPointerMove={onBarMove}>
        <span className="nav-sheen" aria-hidden="true" />

        <a href="#top" className="brand" aria-label="Deven Shah, home">
          <span className="brand-mark">DS</span>
          <span className="brand-name">{site.name}</span>
        </a>

        <nav className="nav-links" aria-label="Sections" ref={listRef} onPointerLeave={() => setHovered(null)}>
          <span className="nav-highlight" aria-hidden="true" />
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              ref={(el) => { linkRefs.current[i] = el; }}
              className={active === n.href.slice(1) ? 'is-active' : ''}
              aria-current={active === n.href.slice(1) ? 'true' : undefined}
              onPointerEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={site.cv} className="nav-cv" target="_blank" rel="noreferrer">CV</a>
          <a href="#contact" className="status-pill">
            <span className="pulse" aria-hidden="true" />
            <span className="status-long">{site.status}</span>
            <span className="status-short">{site.statusShort}</span>
          </a>
          <button
            ref={burgerRef}
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span />
          </button>
        </div>

        <span ref={progressRef} className="nav-progress" aria-hidden="true" />
      </div>

      <div id="mobile-menu" ref={panelRef} className={`nav-panel ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} style={{ '--d': `${40 + i * 40}ms` }} onClick={() => setOpen(false)}>
              <span>{n.label}</span>
              <span className="panel-num">{String(i + 1).padStart(2, '0')}</span>
            </a>
          ))}
          <a
            href={site.cv}
            target="_blank"
            rel="noreferrer"
            style={{ '--d': `${40 + nav.length * 40}ms` }}
            onClick={() => setOpen(false)}
          >
            <span>Download CV</span>
            <span className="panel-num">PDF</span>
          </a>
        </nav>
        <a href="#contact" className="panel-foot" onClick={() => setOpen(false)}>
          <span>Contact</span>
          <span className="panel-foot-status"><span className="pulse" aria-hidden="true" />{site.statusShort}</span>
        </a>
      </div>
    </header>
  );
}
