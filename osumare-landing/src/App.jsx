// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <Metrics />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
