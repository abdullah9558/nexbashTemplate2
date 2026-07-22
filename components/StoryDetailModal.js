'use client';

import { useEffect, useState } from 'react';
import { useDragSwipe } from '@/hooks/useDragSwipe';

export default function StoryDetailModal({ story, stories = [], onClose, onNavigate }) {
  const list = stories.length ? stories : story ? [story] : [];
  const index = story ? list.findIndex((s) => s.id === story.id) : -1;
  const current = index >= 0 ? list[index] : story;
  const canNav = list.length > 1 && typeof onNavigate === 'function';

  const go = (dir) => {
    if (!canNav || index < 0) return;
    const next = (index + dir + list.length) % list.length;
    onNavigate(list[next]);
  };

  const { dragProps, dragOffset, isDragging } = useDragSwipe({
    onSwipe: go,
    threshold: 64,
  });

  useEffect(() => {
    if (!current) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (!canNav) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [current, index, canNav, onClose]);

  if (!current) return null;

  return (
    <div
      className="nb-modal story-detail-modal open"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="nb-modal-card story-detail-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>
          ×
        </button>

        {canNav && (
          <>
            <button
              type="button"
              className="story-nav-btn story-nav-prev"
              aria-label="Previous story"
              data-cursor="hover"
              onClick={() => go(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="story-nav-btn story-nav-next"
              aria-label="Next story"
              data-cursor="hover"
              onClick={() => go(1)}
            >
              →
            </button>
          </>
        )}

        <div
          className={`story-detail-hero ${isDragging ? 'is-dragging' : ''}`}
          {...(canNav ? dragProps : {})}
          style={
            canNav
              ? {
                  transform: `translate3d(${dragOffset * 0.35}px, 0, 0)`,
                  transition: isDragging ? 'none' : 'transform var(--slide-duration) var(--slide-ease)',
                }
              : undefined
          }
        >
          <img src={current.image} alt="" key={current.image} draggable={false} />
          {canNav && (
            <span className="story-hero-hint">
              {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')} · Drag
              image to browse
            </span>
          )}
        </div>

        <div className="story-tag">{current.tag}</div>
        <h3 key={`t-${current.id}`}>{current.title}</h3>
        <p className="story-detail-summary">{current.description}</p>

        {current.metrics?.length > 0 && (
          <div className="story-detail-metrics">
            {current.metrics.map((m) => (
              <div className="story-metric" key={`${m.value}-${m.label}`}>
                <div className="story-metric-value">{m.value}</div>
                <div className="story-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="story-detail-meta">
          <div>
            <div className="story-meta-label">Industry</div>
            <div>{current.industry}</div>
          </div>
          <div>
            <div className="story-meta-label">Duration</div>
            <div>{current.duration}</div>
          </div>
        </div>

        <div className="story-detail-section">
          <h4>The Challenge</h4>
          <p>{current.challenge}</p>
        </div>

        <div className="story-detail-section">
          <h4>The Solution</h4>
          <p>{current.solution}</p>
        </div>

        {current.implementation?.length > 0 && (
          <div className="story-detail-section">
            <h4>Implementation Approach</h4>
            <div className="story-impl-grid">
              {current.implementation.map((step, idx) => (
                <div className="story-impl-item" key={step.title}>
                  <div className="story-impl-num">{idx + 1}</div>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {current.stack && Object.keys(current.stack).length > 0 && (
          <div className="story-detail-section">
            <h4>Technical Stack</h4>
            <div className="story-stack-grid">
              {Object.entries(current.stack).map(([group, items]) => (
                <div className="story-stack-group" key={group}>
                  <div className="story-meta-label">{group}</div>
                  <div className="story-stack-chips">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {current.achievements?.length > 0 && (
          <div className="story-detail-section">
            <h4>Key Achievements</h4>
            <ul className="story-achievements">
              {current.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
