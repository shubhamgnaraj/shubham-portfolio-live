import { useRef } from "react";
import profile from "../assets/profile.png";
import HeroScene from "../components/HeroScene";

const Hero = () => {
  const pointerRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerRef.current = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((event.clientY - rect.top) / rect.height) * 2 - 1),
    };
  };

  const handlePointerLeave = () => {
    pointerRef.current = { x: 0, y: 0 };
  };

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">HI, I'M SHUBHAM</p>

        <h1>
          SHUBHAM
          <br />
          GANRAJ<span>.</span>
        </h1>

        <p className="hero-role">FULL-STACK DEVELOPER</p>

        <p className="hero-description">
          I build products that solve real problems and turn ideas into digital
          experiences.
        </p>

        <a href="#work" className="hero-button">
          EXPLORE MY WORK <span>↗</span>
        </a>

        <p className="hero-note">
          BUILD <span>•</span> LEARN <span>•</span> GROW
        </p>
      </div>

      <div
        className="hero-visual"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="portrait-glow" />

        <div className="portrait-frame">
          <img
            src={profile}
            alt="Shubham Ganraj — Full-stack developer"
            className="portrait"
          />
        </div>

        <HeroScene pointerRef={pointerRef} />

        <span className="visual-label">DESIGNING + ENGINEERING</span>
      </div>

      <div className="scroll-indicator">
        <span />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Hero;
