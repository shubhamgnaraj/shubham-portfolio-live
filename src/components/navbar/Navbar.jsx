import { useEffect, useState } from "react";
import "./Navbar.css"
import MobileViewNav from "./MobileViewNav";

const navLinks = [
  {lable: 'Work', href: '#work', number: "01" },
  {lable: 'About', href: '#about', number: "02" },
  {lable: 'Skills', href: '#skills', number: "03" }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <a href="#home" className="logo">
        SG<span>.</span>
      </a>

      <div className="nav-links">
       {navLinks.map((link) => (
        <a href={link.href} key={link.number}>{link.lable}</a>
       ))}
      </div>

      <a href="#contact" className="contact-link">
        LET'S TALK <span>↗</span>
      </a>

      <div className="hamburger-icon">
        <button
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((prev) => !prev)}
        >
        <span />
        <span />
      </button>
      </div>
      
    </nav>
    <MobileViewNav navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
  );
};

export default Navbar;
