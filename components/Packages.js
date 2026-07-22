'use client';

export default function Packages({ packages }) {
  return (
    <section className="section packages screen-section" id="packages">
      <div className="screen-section-inner">
        <div className="section-head">
          <p className="eyebrow">Packages</p>
          <h2>Engagement models that scale with you</h2>
          <p className="lede">Pick a starting point — every deliverable is listed upfront.</p>
        </div>

        <div className="package-grid">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`package-card ${pkg.highlight ? 'is-hot' : ''}`}
              data-cursor={pkg.highlight ? 'cta' : 'expand'}
            >
              {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
              <h3>{pkg.name}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-ghost package-cta" data-cursor="cta">
                Talk to us
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
