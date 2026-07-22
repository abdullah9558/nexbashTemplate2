'use client';

import { useEffect, useRef, useState } from 'react';
import SlideTrack from '@/components/SlideTrack';
import { useDragSwipe } from '@/hooks/useDragSwipe';
import { useAutoCycle } from '@/hooks/useAutoCycle';

export default function Industries({ industries }) {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const total = industries.length;

  const { active: idx, setActive: setIdx, go } = useAutoCycle({
    total,
    interval: 4800,
    paused: paused || open || dragging,
    sectionRef,
  });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const { dragProps, dragOffset, isDragging } = useDragSwipe({
    onSwipe: go,
    onDragStart: () => {
      setDragging(true);
      setPaused(true);
    },
    onDragEnd: () => {
      setDragging(false);
      setPaused(false);
    },
  });

  if (!industries.length) return null;

  return (
    <>
      <section ref={sectionRef} className="section industries screen-section" id="industries">
        <div className="screen-section-inner">
          <div className="studios-header">
            <div className="section-head">
              <p className="eyebrow">Who we help</p>
              <h2>Industries we serve</h2>
              <p className="lede">
                If your organization runs on complex data or critical operations, we likely already
                work in your field. Drag to browse.
              </p>
            </div>
            <button
              type="button"
              className="btn-view-all"
              data-cursor="hover"
              onClick={() => setOpen(true)}
            >
              View All
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <SlideTrack
            className={`ind-slider ${dragging || isDragging ? 'is-dragging' : ''}`}
            active={idx}
            dragOffset={dragOffset}
            isDragging={isDragging}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              if (!dragging) setPaused(false);
            }}
            {...dragProps}
          >
            {industries.map((ind) => (
              <div key={ind.name} className="ind-stage slide-item" data-cursor="expand">
                <div className="ind-visual">
                  <img src={ind.image} alt="" draggable={false} />
                </div>
                <div className="ind-copy">
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                  <p className="ind-drag-hint">Drag to explore</p>
                </div>
              </div>
            ))}
          </SlideTrack>

          <div className="ind-thumbs">
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                type="button"
                className={`ind-thumb ${i === idx ? 'active' : ''}`}
                data-cursor="hover"
                onClick={() => setIdx(i)}
                aria-label={ind.name}
              >
                <img src={ind.image} alt="" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div
        className={`nb-modal${open ? ' open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="nb-modal-card">
          <button
            className="modal-close"
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <h3>All Industries We Serve</h3>
          <p className="nb-modal-lede">
            Organizations across sectors rely on Nexbash for AI, geospatial, and software systems
            built for complex operations.
          </p>
          <div className="nb-modal-grid industries-modal-grid">
            {industries.map((ind) => (
              <button
                type="button"
                className="nb-modal-item"
                key={ind.name}
                data-cursor="hover"
                onClick={() => {
                  setIdx(industries.findIndex((x) => x.name === ind.name));
                  setOpen(false);
                }}
              >
                <div
                  className="nb-modal-thumb"
                  style={ind.image ? { backgroundImage: `url('${ind.image}')` } : undefined}
                />
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
