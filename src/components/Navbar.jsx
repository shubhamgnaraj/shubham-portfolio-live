
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SG<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
      </div>

      <a href="#contact" className="contact-link">
        LET'S TALK <span>↗</span>
      </a>
    </nav>
  );
};

export default Navbar;
