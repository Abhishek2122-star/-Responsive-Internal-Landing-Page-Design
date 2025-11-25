// src/components/Hero.jsx
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <h1 id="hero-heading" className="hero__title">
          {/* Replace with Figma text */}
          Digital Marketing Solutions That Drive Growth
        </h1>
        <p className="hero__subtitle">
          {/* Replace with Figma text */}
          Empowering businesses with performance-driven marketing strategies.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Book a Consultation
          </a>
          <a href="#services" className="btn btn--secondary">
            View Services
          </a>
        </div>
      </div>

      <div className="hero__image-wrapper">
        <img
          src={heroImage}
          alt="Dashboard and analytics illustration"
          className="hero__image"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;
