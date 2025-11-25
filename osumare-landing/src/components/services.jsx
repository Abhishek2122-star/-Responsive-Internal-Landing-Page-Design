// src/components/Services.jsx
const SERVICES = [
  { title: "SEO & Content", desc: "Boost search visibility and traffic." },
  { title: "Paid Ads", desc: "Scale quickly with targeted ad campaigns." },
  { title: "Social Media", desc: "Engage audience across platforms." },
];

function Services() {
  return (
    <section id="services" className="section section--services">
      <div className="section__header">
        <h2>Our Services</h2>
        <p>Solutions curated for Osumare’s internal stakeholders.</p>
      </div>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <article className="service-card" key={service.title}>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
