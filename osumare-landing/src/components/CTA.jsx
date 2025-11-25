// src/components/CTA.jsx
function CTA() {
  return (
    <section id="contact" className="section section--cta">
      <div className="cta__inner">
        <div>
          <h2>Ready to Launch Your Next Campaign?</h2>
          <p>Submit a brief and we’ll get back within 1 business day.</p>
        </div>
        <form className="cta__form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Work Email
            <input type="email" name="email" required />
          </label>
          <label>
            Project Details
            <textarea name="details" rows="3" required />
          </label>
          <button type="submit" className="btn btn--primary">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTA;
