import React from 'react';
import { useInView } from '../hooks.js';

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ num, label, lead, accent, aside }) {
  return (
    <Reveal className="section-head">
      <p className="section-label">
        <span className="section-num">{num}</span>
        {label}
      </p>
      <div className="section-head-row">
        <h2 className="h2">
          {lead} <em>{accent}</em>
        </h2>
        {aside && <p className="section-aside">{aside}</p>}
      </div>
    </Reveal>
  );
}

export const Arrow = ({ dir = 'right' }) => (
  <svg className={`arrow arrow-${dir}`} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    {dir === 'down' ? (
      <path d="M7 1v12M2 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    ) : dir === 'out' ? (
      <path d="M3 11L11 3M4 3h7v7" fill="none" stroke="currentColor" strokeWidth="1.6" />
    ) : (
      <path d="M1 7h12M8 2l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    )}
  </svg>
);
