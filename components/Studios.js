'use client';

import { useEffect, useRef, useState } from 'react';
import { useDragSwipe } from '@/hooks/useDragSwipe';
import { useAutoCycle } from '@/hooks/useAutoCycle';

function wrapOffset(raw, total) {
  let offset = raw;
  if (total <= 1) return 0;
  while (offset > total / 2) offset -= total;
  while (offset < -total / 2) offset += total;
  return offset;
}

export default function Studios({ studios }) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const stepRef = useRef(260);
  const [paused, setPaused] = useState(false);
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const total = studios.length;

  const { active, setActive, go } = useAutoCycle({
    total,
    interval: 5000,
    paused: paused || viewAllOpen || dragging,
    sectionRef,
  });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setViewAllOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!viewAllOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [viewAllOpen]);

  const { dragProps, wasDragged, dragOffset, isDragging } = useDragSwipe({
    onSwipe: go,
    threshold: 40,
    onDragStart: () => {
      const w = stageRef.current?.offsetWidth || 640;
      stepRef.current = Math.max(160, w * 0.38);
      setDragging(true);
      setPaused(true);
    },
    onDragEnd: () => {
      setDragging(false);
      setPaused(false);
    },
  });

  const live = isDragging || dragging;
  const dragProgress = live ? dragOffset / stepRef.current : 0;

  return (
    <>
      <section ref={sectionRef} className="section studios screen-section" id="studios">
        <div className="screen-section-inner">
          <div className="studios-header">
            <div className="section-head">
              <p className="eyebrow">Studios</p>
              <h2>Pick where you need us</h2>
              <p className="lede">
                Each studio is a full delivery team — drag the rack or let it auto-cycle.
              </p>
            </div>
            <div className="studio-hud-controls">
              <button
                type="button"
                className="btn-view-all"
                data-cursor="hover"
                onClick={() => setViewAllOpen(true)}
              >
                View All
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div
            ref={stageRef}
            className={`studio-stage ${live ? 'is-dragging' : ''}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              if (!live) setPaused(false);
            }}
            {...dragProps}
          >
            <div className="studio-stage-glow" aria-hidden="true" />

            <div className="studio-deck">
              {studios.map((s, i) => {
                const offset = wrapOffset(i - active - dragProgress, total);
                const abs = Math.abs(offset);
                const isActive = abs < 0.45;

                return (
                  <article
                    key={s.id}
                    className={`studio-slide ${isActive ? 'is-active' : ''}`}
                    data-cursor="expand"
                    style={{
                      '--o': offset,
                      '--abs': abs,
                      zIndex: Math.round(40 - abs * 10),
                    }}
                    onClick={() => {
                      if (wasDragged()) return;
                      setActive(i);
                    }}
                  >
                    <div className="studio-slide-media">
                      <img src={s.image} alt="" draggable={false} />
                      <div className="studio-slide-overlay" />
                    </div>
                    <div className="studio-slide-body">
                      <div className="studio-slide-top">
                        <span className="studio-index">{String(i + 1).padStart(2, '0')}</span>
                        <span className="studio-time">{s.timeline}</span>
                      </div>
                      <h3>{s.title}</h3>
                      <p className="studio-for">{s.forText}</p>
                      <div className="studio-solves">
                        <span>Solves</span>
                        <p>{s.solves}</p>
                      </div>
                      <ul>
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="studio-dots">
            {studios.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`studio-dot ${i === active ? 'active' : ''}`}
                data-cursor="hover"
                aria-label={s.title}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <div className="studio-progress" aria-hidden="true">
            <div
              className={`studio-progress-bar ${paused || live ? 'is-paused' : ''}`}
              key={active}
            />
          </div>
        </div>
      </section>

      <div
        className={`nb-modal${viewAllOpen ? ' open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setViewAllOpen(false);
        }}
      >
        <div className="nb-modal-card">
          <button
            className="modal-close"
            type="button"
            aria-label="Close"
            onClick={() => setViewAllOpen(false)}
          >
            ×
          </button>
          <h3>All Nexbash Studios</h3>
          <p className="nb-modal-lede">
            A complete view of the studio capabilities we bring to complex product and operations
            work.
          </p>
          <div className="nb-modal-grid">
            {studios.map((s) => (
              <div className="nb-modal-item" key={s.id}>
                <div
                  className="nb-modal-thumb"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
                <h4>{s.title}</h4>
                <p>{s.modalDesc}</p>
                <ul>
                  {(s.modalItems || s.items).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
