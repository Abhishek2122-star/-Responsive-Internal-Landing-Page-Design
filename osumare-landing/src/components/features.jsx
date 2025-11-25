// src/components/Features.jsx
const FEATURES = [
  {
    title: "Data-Driven Insights",
    description: "Measure performance with real-time analytics dashboards.",
  },
  {
    title: "Omni-Channel Strategy",
    description: "Align campaigns across SEO, SEM, Social & more.",
  },
  {
    title: "Dedicated Support",
    description: "Our team is always available to help you scale.",
  },
];

function Features() {
  return (
    <section id="features" className="section section--features">
      <div className="section__header">
        <h2>Key Highlights</h2>
        <p>Built to empower internal teams at Osumare.</p>
      </div>

      <div className="features__grid">
        {FEATURES.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__description">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
