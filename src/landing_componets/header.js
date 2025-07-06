import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <h2 className="header__logo">GlimmerLamp™</h2>

        {/* hamburger toggle (mobile only) */}
        <button
          className="header__toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* nav + mobile CTA */}
        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <ul>
            {["Home", "Features", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#buy"
            className="btn btn--primary header__cta header__cta--mobile"
            onClick={() => setMenuOpen(false)}
          >
            Buy Now
          </a>
        </nav>

        <a
          href="#buy"
          className="btn btn--primary header__cta header__cta--desktop"
        >
          Buy Now
        </a>
      </div>
    </header>
  );
}
