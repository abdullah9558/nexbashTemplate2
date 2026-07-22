export default function Process({ process }) {
  return (
    <section className="section process screen-section" id="process">
      <div className="screen-section-inner">
        <div className="section-head">
          <p className="eyebrow">Process</p>
          <h2>From idea to launch — the journey we take together</h2>
          <p className="lede">Hover any stage to reveal what happens there.</p>
        </div>

        <div className="steps">
          {process.flatMap((p, i) => {
            const nodes = [
              <div
                className={`step${i === 0 ? ' first' : ''}`}
                tabIndex={0}
                key={p.name}
                data-cursor="hover"
              >
                <div className="step-tooltip">{p.tip}</div>
                <div className="circle">{p.step}</div>
                <span>{p.name}</span>
              </div>,
            ];
            if (i < process.length - 1) {
              nodes.push(<div className="line" key={`line-${p.name}`} />);
            }
            return nodes;
          })}
        </div>
      </div>
    </section>
  );
}
