// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Osumare Marketing Solutions</p>
        <div className="footer__links">
          <a href="#hero">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
