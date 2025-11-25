// src/components/Navbar.jsx
import logo from "../assets/favicon.jpeg";


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <img src={logo} alt="Osumare logo" className="navbar__logo" />
          <span className="navbar__brand">Osumare</span>
        </div>

        <nav className="navbar__nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#metrics">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="navbar__cta" href="#contact">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;
