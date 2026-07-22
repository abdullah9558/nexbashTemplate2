'use client';

import { useRef, useState } from 'react';
import StoryDetailModal from '@/components/StoryDetailModal';
import SlideTrack from '@/components/SlideTrack';
import { useDragSwipe } from '@/hooks/useDragSwipe';
import { useAutoCycle } from '@/hooks/useAutoCycle';

export default function Projects({ projects, stories = [] }) {
  const [active, setActive] = useState(0);
  const [activeStory, setActiveStory] = useState(null);
  const [dragging, setDragging] = useState(false);
  const total = projects.length;

  const go = (dir) => {
    if (!total) return;
    setActive((i) => (i + dir + total) % total);
  };

  const { dragProps, dragOffset, isDragging, wasDragged } = useDragSwipe({
    onSwipe: go,
    onDragStart: () => setDragging(true),
    onDragEnd: () => setDragging(false),
  });

  const openProject = (p) => {
    const match = stories.find((s) => s.id === p.id);
    if (match) {
      setActiveStory(match);
      return;
    }
    setActiveStory({
      id: p.id,
      tag: p.tag,
      title: p.title,
      description: p.desc,
      image: p.image,
      industry: p.tag,
      duration: 'Engagement details available on request',
      metrics: p.stats,
      challenge: p.desc,
      solution:
        'We delivered a production-ready system tailored to operational constraints, with measurable outcomes and clear ownership at handover.',
      achievements: p.stats?.map((s) => `${s.value} — ${s.label}`) || [],
    });
  };

  if (!projects.length) return null;

  return (
    <>
      <section className="section work screen-section" id="work">
        <div className="screen-section-inner">
          <div className="studios-header">
            <div className="section-head">
              <p className="eyebrow">Selected Work</p>
              <h2>Products built for high-stakes operations</h2>
              <p className="lede">
                From geospatial intelligence to clinical AI — drag to browse, click to open.
              </p>
            </div>
          </div>

          <SlideTrack
            className={`work-slider ${dragging || isDragging ? 'is-dragging' : ''}`}
            active={active}
            dragOffset={dragOffset}
            isDragging={isDragging}
            {...dragProps}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="work-feature slide-item"
                data-cursor="expand"
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (wasDragged()) return;
                  openProject(project);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProject(project);
                  }
                }}
              >
                <div className="work-feature-media">
                  <img src={project.image} alt="" draggable={false} />
                </div>
                <div className="work-feature-body">
                  <span className="work-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="work-stats">
                    {project.stats.map((s) => (
                      <div key={s.label} className="work-stat">
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </SlideTrack>

          <div className="studio-dots">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`studio-dot ${i === active ? 'active' : ''}`}
                data-cursor="hover"
                aria-label={p.title}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <StoryDetailModal
        story={activeStory}
        stories={stories}
        onClose={() => setActiveStory(null)}
        onNavigate={setActiveStory}
      />
    </>
  );
}

export function Capabilities({ capabilities }) {
  const sectionRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const total = capabilities.length;

  const { active, setActive, go } = useAutoCycle({
    total,
    interval: 5200,
    paused: paused || dragging,
    sectionRef,
  });

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

  if (!capabilities.length) return null;

  return (
    <section ref={sectionRef} className="section capabilities screen-section" id="capabilities">
      <div className="screen-section-inner">
        <div className="studios-header">
          <div className="section-head">
            <p className="eyebrow">Capabilities Spotlight</p>
            <h2>What we build, and why it matters</h2>
            <p className="lede">Core delivery systems — drag to explore each capability.</p>
          </div>
        </div>

        <SlideTrack
          className={`cap-slider ${dragging || isDragging ? 'is-dragging' : ''}`}
          active={active}
          dragOffset={dragOffset}
          isDragging={isDragging}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (!dragging) setPaused(false);
          }}
          {...dragProps}
        >
          {capabilities.map((item) => (
            <article key={item.id} className="cap-feature slide-item" data-cursor="expand">
              <div className="cap-feature-media">
                <img src={item.image} alt="" draggable={false} />
              </div>
              <div className="cap-feature-body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="cap-tag">{item.tag}</div>
              </div>
            </article>
          ))}
        </SlideTrack>

        <div className="studio-dots">
          {capabilities.map((c, i) => (
            <button
              key={c.id}
              type="button"
              className={`studio-dot ${i === active ? 'active' : ''}`}
              data-cursor="hover"
              aria-label={c.name}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
