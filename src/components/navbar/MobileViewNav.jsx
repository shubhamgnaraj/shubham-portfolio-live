import "./Navbar.css"

function MobileViewNav({ navLinks, isOpen, setIsOpen }) {
  return (
    <div
      className={`mobile-menu ${isOpen ? "is-open" : ""}`}
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      role="dialog"
      aria-modal={isOpen ? "true" : undefined}
      aria-label="Portfolio navigation"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="mobile-menu-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="menu-top">
          <a className="menu-brand" href="#home" onClick={() => setIsOpen(false)}>
            SG<span>.</span>
            <small>SHUBHAM GANRAJ / PORTFOLIO</small>
          </a>

        </div>

        <div className="menu-stage-label">
          <span />
          SELECT YOUR NEXT STOP
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
          <span>BUILD <b>•</b> LEARN <b>•</b> GROW</span>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            HAVE A GOOD IDEA? LET&apos;S TALK <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileViewNav;
