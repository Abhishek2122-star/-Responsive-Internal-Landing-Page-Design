// src/components/Metrics.jsx
const METRICS = [
  { label: "Campaigns Delivered", value: "500+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Avg. ROI", value: "4x" },
];

function Metrics() {
  return (
    <section id="metrics" className="section section--metrics">
      <div className="metrics__inner">
        {METRICS.map((metric) => (
          <div className="metric" key={metric.label}>
            <p className="metric__value">{metric.value}</p>
            <p className="metric__label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Metrics;
