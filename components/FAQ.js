'use client';

import { useState } from 'react';

export default function FAQ({ faq }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq screen-section" id="faq">
      <div className="screen-section-inner">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Straight answers before you start</h2>
        </div>

        <div className="faq-list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
                <button
                  className="faq-q"
                  data-cursor="hover"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-a" aria-hidden={!isOpen}>
                  <div className="faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
