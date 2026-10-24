import { useState } from "react";
import "./Skills.css";

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    note: "Interfaces with intention",
    skills: [
      { name: "React", level: "Building" },
      { name: "JavaScript", level: "Core" },
      { name: "HTML & CSS", level: "Core" },
      { name: "Responsive UI", level: "Building" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    note: "Logic behind the experience",
    skills: [
      { name: "Node.js", level: "Building" },
      { name: "Express", level: "Building" },
      { name: "REST APIs", level: "Building" },
      { name: "Authentication", level: "Learning" },
    ],
  },
  {
    id: "data",
    number: "03",
    title: "Data & state",
    note: "Keeping information in sync",
    skills: [
      { name: "MongoDB", level: "Building" },
      { name: "Redux", level: "Building" },
      { name: "SQL basics", level: "Learning" },
      { name: "Data modelling", level: "Learning" },
    ],
  },
  {
    id: "workflow",
    number: "04",
    title: "Tools & workflow",
    note: "From idea to implementation",
    skills: [
      { name: "Git & GitHub", level: "Building" },
      { name: "Postman", level: "Building" },
      { name: "Debugging", level: "Core" },
      { name: "Problem solving", level: "Always on" },
    ],
  },
];

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState("frontend");
  const active = skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-topline">
        <p className="skills-eyebrow"><span /> THE TOOLKIT</p>
        <span className="skills-index">03 — SKILLS & TECHNOLOGIES</span>
      </div>

      <div className="skills-heading-row">
        <h2 className="skills-heading">
          LEARN. BUILD.
          <br />
          <span>REPEAT.</span>
        </h2>
        <div className="skills-intro">
          <p>
            A growing toolkit, built one project and one problem at a time.
          </p>
          <span className="skills-intro-note">PRACTICE OVER PRETENCE <b>↘</b></span>
        </div>
      </div>

      <div className="skills-console">
        <div className="skills-console-head">
          <div>
            <span className="skills-console-kicker">SKILL INDEX</span>
            <h3>What I work with</h3>
          </div>
          <span className="skills-console-status"><i /> ALWAYS EVOLVING</span>
        </div>

        <div className="skills-layout">
          <nav className="skills-tabs" aria-label="Skill categories">
            {skillGroups.map((group) => (
              <button
                className={`skills-tab ${activeGroup === group.id ? "is-active" : ""}`}
                key={group.id}
                type="button"
                onClick={() => setActiveGroup(group.id)}
                aria-pressed={activeGroup === group.id}
              >
                <span className="skills-tab-number">{group.number}</span>
                <span className="skills-tab-copy">
                  <strong>{group.title}</strong>
                  <small>{group.note}</small>
                </span>
                <span className="skills-tab-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </nav>

          <div className="skills-detail" key={active.id}>
            <div className="skills-detail-heading">
              <span>{active.number} / CATEGORY</span>
              <span className="skills-detail-orbit" aria-hidden="true">
                <i /><i /><i />
              </span>
            </div>
            <h3>{active.title}<span>.</span></h3>
            <p className="skills-detail-note">{active.note}</p>

            <div className="skills-list">
              {active.skills.map((skill, index) => (
                <div className="skills-list-item" key={skill.name} style={{ "--item-index": index }}>
                  <span className="skills-list-number">0{index + 1}</span>
                  <span className="skills-list-name">{skill.name}</span>
                  <span className="skills-level">{skill.level}</span>
                  <span className="skills-list-mark" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
            <p className="skills-honesty-note">
              <span aria-hidden="true">✳</span> Skill levels describe my current learning focus, not a formal certification.
            </p>
          </div>
        </div>
      </div>

      <div className="skills-bottomline">
        <span>THE BEST TOOL IS THE ONE YOU UNDERSTAND.</span>
        <a href="#work">SEE IT IN ACTION <b>↗</b></a>
      </div>
    </section>
  );
};

export default Skills;
