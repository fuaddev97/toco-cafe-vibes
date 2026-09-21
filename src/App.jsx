import { useEffect, useState } from "react";
import logoLight from "./assets/toco-logo-light.png";
import logoDark from "./assets/toco-logo-dark.png";
import heroImage from "./assets/toco-hero.jpg";
import tableImage from "./assets/toco-table.jpg";
import coffeeImage from "./assets/toco-coffee.jpg";
import pastriesImage from "./assets/toco-pastries.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "About TOCO", href: "#story" },
  { label: "Journal", href: "#journal" },
  { label: "Visit", href: "#visit" },
];

function ArrowDown({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  );
}

function HeroLine({ text, offset = 0 }) {
  return (
    <span className="hero-line" aria-hidden="true">
      {text.split("").map((character, index) => (
        <span
          className="hero-character"
          key={`${character}-${index}`}
          style={{ animationDelay: `${(offset + index) * 42}ms` }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px 14% 0px", threshold: 0.25 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <main className="site">
      <section className="hero">
        <img className="hero-image" src={heroImage} alt="Barista preparing coffee at Toco Speciality" width="1920" height="1200" fetchPriority="high" />
        <div className="hero-overlay" />

        <header className="site-header">
          <a className="brand" href="#top">
            <img className="brand-logo" src={logoLight} alt="Toco Speciality logo" width="749" height="749" />
            <span className="brand-name">Toco Speciality</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => <a className="nav-link" key={item.label} href={item.href}>{item.label}</a>)}
            <a className="button button-light" href="#visit">Find us</a>
          </nav>

          <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </header>

        {menuOpen && (
          <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <button className="menu-backdrop" type="button" aria-label="Close menu" onClick={closeMenu} />
            <div className="menu-panel">
              <button className="menu-close" type="button" aria-label="Close menu" onClick={closeMenu}>×</button>
              <div className="menu-brand">
                <img src={logoDark} alt="Toco Speciality logo" width="749" height="749" />
                <span>Toco Speciality</span>
              </div>
              <nav className="mobile-nav" aria-label="Mobile navigation links">
                {navItems.map((item, index) => (
                  <a key={item.label} href={item.href} onClick={closeMenu}><span>0{index + 1} /</span> {item.label}</a>
                ))}
              </nav>
            </div>
          </div>
        )}

        <div className="hero-content" id="top">
          <p className="eyebrow hero-eyebrow">Speciality coffee · Addis Ababa</p>
          <h1 className="display-type hero-heading" aria-label="Coffee, considered.">
            <HeroLine text="Coffee," />
            <HeroLine text="considered." offset={7} />
          </h1>
          <div className="hero-intro">
            <p>Coffee with clarity. Food with character. A place made for mornings that turn into afternoons.</p>
            <a className="discover-link" href="#story"><span>Discover Toco</span><ArrowDown /></a>
          </div>
        </div>
      </section>

      <section className="story-section" id="story" data-reveal>
        <div>
          <p className="eyebrow story-eyebrow">Made with intention</p>
          <h2 className="display-type story-heading">A quiet ritual.<br />A bold cup.</h2>
        </div>
        <div className="story-copy">
          <p className="lead-copy">Toco is an everyday meeting place shaped by origin-led coffee, seasonal plates, and warm Ethiopian hospitality.</p>
          <p className="muted-copy">We source with care, roast for sweetness, and keep the menu honest. Nothing overworked. Everything worth returning for.</p>
          <a className="button button-outline" href="#menu">Explore the menu <ArrowUpRight /></a>
        </div>
      </section>

      <section className="menu-section" id="menu" data-reveal>
        <div className="section-title-row">
          <h2 className="display-type menu-heading">The Toco table</h2>
          <span>All day · Every day</span>
        </div>
        <div className="image-frame table-image-frame">
          <img src={tableImage} alt="Coffee, pastries and breakfast plates served at Toco" width="1408" height="1200" loading="lazy" />
          <div className="image-caption"><p>Breakfast that stays for lunch</p></div>
        </div>
      </section>

      <section className="feature-section feature-coffee" data-reveal>
        <div className="feature-copy">
          <div>
            <span className="eyebrow accent-text">House ritual / 01</span>
            <h2 className="display-type feature-heading">Pour.<br />Pause.<br />Repeat.</h2>
          </div>
          <div className="feature-bottom">
            <p className="lead-copy">From bright filter coffee to deep, velvety espresso—each cup starts with a conversation between farmer, roaster, and barista.</p>
            <a className="button button-dark" href="#visit">Meet us at the bar <ArrowUpRight /></a>
          </div>
        </div>
        <div className="image-frame feature-image"><img src={coffeeImage} alt="Latte art being poured by a Toco barista" width="1200" height="1504" loading="lazy" /></div>
      </section>

      <section className="feature-section feature-pastries" data-reveal>
        <div className="image-frame feature-image pastry-image"><img src={pastriesImage} alt="Freshly baked pastries at the Toco counter" width="1408" height="1104" loading="lazy" /></div>
        <div className="feature-copy">
          <div>
            <span className="eyebrow accent-text">Baked here / 02</span>
            <h2 className="display-type feature-heading">Good things,<br />still warm.</h2>
          </div>
          <p className="lead-copy feature-bottom">Our counter changes with the morning: laminated pastries, soft buns, and a few unexpected flavours from the region.</p>
        </div>
      </section>

      <section className="journal-section" id="journal" data-reveal>
        <div>
          <p className="eyebrow journal-eyebrow">Now at Toco</p>
          <h2 className="display-type journal-heading">Long<br />weekends.</h2>
        </div>
        <div className="journal-copy">
          <p>Late breakfast, a second cup, and nowhere else you need to be.</p>
          <p>Join us Friday and Saturday for extended brunch plates and a rotating guest coffee served until late afternoon.</p>
        </div>
      </section>

      <section className="visit-section" id="visit" data-reveal>
        <h2 className="display-type visit-heading">Come by.</h2>
        <div className="visit-grid">
          <div className="visit-card"><span className="visit-icon" aria-hidden="true"><FontAwesomeIcon icon={faLocationCrosshairs} /></span><p className="eyebrow">Find us</p><p className="visit-detail">Addis Ababa, Ethiopia</p></div>
          <div className="visit-card"><span className="visit-icon bold" aria-hidden="true">◷</span><p className="eyebrow">Open daily</p><p className="visit-detail">7:00 AM — 11:00 PM</p></div>
          <div className="visit-card"><span className="visit-icon" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} className="text-pink-600 w-8 h-8" /></span><p className="eyebrow">Follow along</p><a className="instagram-link" href="https://instagram.com" target="_blank" rel="noreferrer">@tocospeciality <ArrowUpRight /></a></div>
        </div>
      </section>

      <footer className="site-footer" data-reveal>
        <div className="footer-main">
          <div className="footer-brand"><img src={logoLight} alt="Toco Speciality logo" width="749" height="749" loading="lazy" /><p className="display-type">Toco Speciality</p></div>
          <a className="back-to-top" href="#top">Back to top <ArrowDown /></a>
        </div>
        <div className="footer-meta"><span>© 2026 Toco Speciality</span><span>Coffee · Food · Addis Ababa</span></div>
      </footer>
    </main>
  );
}

export default App;
