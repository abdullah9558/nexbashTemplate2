'use client';

export default function TrustedBy({ partners }) {
  const loop = [...partners, ...partners];

  return (
    <section className="trusted screen-section" id="trusted-by">
      <p className="trusted-label">Trusted across industries</p>
      <div className="trusted-marquee" data-cursor="hover">
        <div className="trusted-track">
          {loop.map((p, i) => (
            <span className="trusted-chip" key={`${p.alt}-${i}`}>
              <img src={p.src} alt={p.alt} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
