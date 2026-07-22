'use client';

export default function Hero({ hero, heroBar }) {
  return (
    <section className="hero screen-section" id="top">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-mesh" />
        <div className="hero-hex" />
        <div className="hero-scan" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-frame">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-hud-readout">
          <span>SYS // ONLINE</span>
          <span>LAT 43.65 · LNG -79.38</span>
        </div>
      </div>

      <div className="hero-main">
        <div className="hero-inner">
          <p className="hero-chip" data-cursor="hover">
            <span className="hero-chip-dot" />
            SIGNAL LOCKED · OPS READY
          </p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" data-cursor="cta">
              Start a Project
              <span className="btn-arrow">→</span>
            </a>
            <a href="#work" className="btn btn-ghost" data-cursor="link">
              See Our Work
            </a>
          </div>
        </div>

        <div className="hero-rail">
          {heroBar.map((item) => (
            <article className="hero-rail-item" key={item.num} data-cursor="hover">
              <span className="hero-rail-num">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
