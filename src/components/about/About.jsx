import profile from "../../assets/profile.png";
import "./About.css";

const principles = [
  {
    number: "01",
    title: "Think in systems",
    description:
      "I try to understand the problem, the people using the product, and how each part fits together before writing code.",
  },
  {
    number: "02",
    title: "Build with purpose",
    description:
      "I care about interfaces that feel clear and thoughtful, backed by reliable logic and maintainable code.",
  },
  {
    number: "03",
    title: "Keep getting better",
    description:
      "Every project is a chance to sharpen my fundamentals, explore better approaches, and learn from what did not work.",
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-topline">
        <p className="about-eyebrow">
          <span className="about-eyebrow-dot" />
          A LITTLE ABOUT ME
        </p>
        <span className="about-index">01 — THE PERSON BEHIND THE CODE</span>
      </div>

      <div className="about-intro">
        <div className="about-heading-wrap">
          <h2 className="about-heading">
            CURIOUS BY
            <br />
            NATURE<span>.</span>
          </h2>
        </div>

        <div className="about-summary">
          <p className="about-summary-lead">
            I'm Shubham — a developer who enjoys turning complex problems into
            simple, useful digital experiences.
          </p>
          <p className="about-summary-copy">
            I’m focused on growing as a full-stack developer: understanding how
            the whole product works, from the first interface a person sees to
            the data and logic working behind it. I value clear thinking,
            practical solutions, and learning by building.
          </p>
          <a className="about-text-link" href="#work">
            A FEW THINGS I'VE BUILT <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="about-feature">
        <div className="about-photo-panel">
          <div className="about-photo-orbit" aria-hidden="true" />
          <img
            className="about-photo"
            src={profile}
            alt="Portrait of Shubham Ganraj"
            loading="lazy"
          />
          <span className="about-photo-caption">CURRENTLY IN BUILD MODE</span>
          <span className="about-photo-mark" aria-hidden="true">SG.</span>
        </div>

        <div className="about-principles">
          <div className="about-principles-heading">
            <span className="about-small-label">HOW I APPROACH THE WORK</span>
            <span className="about-handdrawn-arrow" aria-hidden="true">↘</span>
          </div>

          {principles.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <span className="about-principle-number">{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
              <span className="about-principle-plus" aria-hidden="true">↗</span>
            </article>
          ))}

          <div className="about-signoff">
            <span className="about-signoff-line" />
            <p>BUILD <b>•</b> LEARN <b>•</b> GROW</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
