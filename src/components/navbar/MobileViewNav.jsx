import React from "react";
import "./Navbar.css"

function MobileViewNav({ navLinks, isOpen, setIsOpen }) {
  return (
    <div
      className={`mobile-menu ${isOpen ? "is-open" : ""}`}
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      {/* <div className="menu-glow" aria-hidden="true" /> */}

      <div
        className="mobile-menu-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="menu-top">
          <span className="menu-eyebrow">NAVIGATION / 01—04</span>

          <button
            className="menu-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
          >
            <span>Close</span>
            <span className="close-symbol">×</span>
          </button>
        </div>

        <div className="menu-links">
          {navLinks.map((link) => (
            <a
              className="menu-link"
              href={link.href}
              key={link.number}
              onClick={() => setIsOpen(false)}
            >
              <span className="menu-link-number">{link.number}</span>

              <span className="menu-link-label">{link.lable}</span>

              <span className="menu-link-arrow">↗</span>
            </a>
          ))}
        </div>

        <div className="menu-footer">
          <span>BUILDING THINGS FOR THE WEB.</span>

          <div className="menu-socials">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileViewNav;
