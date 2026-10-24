import { useMemo, useState } from "react";
import "./Contact.css";

// Replace this with the email address you actually check before publishing.
const CONTACT_EMAIL = "your-email@example.com";

const intents = [
  {
    id: "build", number: "01", label: "Build something",
    hint: "A product, a feature, an idea", endpoint: "/connect?intent=build",
    response: "Let's turn the idea into something real.",
    subject: "Let's build something",
    message: "Hey Shubham,\n\nI have an idea I'd love to explore with you.\n\nA little context:\n\n",
    packet: [90, 42],
  },
  {
    id: "career", number: "02", label: "Job opportunity",
    hint: "A role, internship, or collaboration", endpoint: "/connect?intent=career",
    response: "Good work starts with the right conversation.",
    subject: "Career opportunity",
    message: "Hey Shubham,\n\nI'd like to talk to you about an opportunity.\n\nHere are the details:\n\n",
    packet: [280, 68],
  },
  {
    id: "hello", number: "03", label: "Just say hello",
    hint: "A question, feedback, or random thought", endpoint: "/connect?intent=hello",
    response: "No pitch required. Curiosity is enough.",
    subject: "Just saying hello",
    message: "Hey Shubham,\n\nI came across your portfolio and wanted to say hello.\n\n",
    packet: [160, 142],
  },
];

const nodes = [
  { x: 30, y: 28 }, { x: 105, y: 18 }, { x: 172, y: 53 }, { x: 243, y: 25 },
  { x: 300, y: 78 }, { x: 58, y: 102 }, { x: 133, y: 88 }, { x: 214, y: 119 },
  { x: 286, y: 148 }, { x: 20, y: 160 }, { x: 92, y: 180 }, { x: 178, y: 170 },
];
const edges = [
  [0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,6],[2,7],[4,7],[5,6],
  [5,9],[6,7],[6,10],[7,8],[7,11],[9,10],[10,11],[8,11],[3,7],[1,5],
];

function mailtoFor(intent) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(intent.subject)}&body=${encodeURIComponent(intent.message)}`;
}

export default function Contact() {
  const [activeId, setActiveId] = useState("build");
  const [copied, setCopied] = useState(false);
  const active = useMemo(() => intents.find((item) => item.id === activeId) ?? intents[0], [activeId]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-topline">
        <p className="contact-eyebrow"><span /> OPEN CHANNEL</p>
        <span className="contact-section-index">04 — THE NEXT CHAPTER</span>
      </div>

      <div className="contact-hero">
        <div className="contact-heading-wrap">
          <p className="contact-overline">GOOD THINGS START SOMEWHERE.</p>
          <h2 className="contact-heading">LET&apos;S<br /><span>TALK.</span></h2>
          <div className="contact-heading-foot">
            <span className="contact-heading-mark" aria-hidden="true">↘</span>
            <p>Have a problem worth solving?<br />An idea worth testing? Start here.</p>
          </div>
        </div>
        <div className="contact-intro">
          <div className="contact-intro-orbit" aria-hidden="true">
            <span className="contact-orbit-ring ring-one" />
            <span className="contact-orbit-ring ring-two" />
            <span className="contact-orbit-core" />
            <span className="contact-orbit-spark">✳</span>
          </div>
          <p className="contact-intro-copy">Less “let’s connect sometime.”<br />More <strong>“what can we make happen?”</strong></p>
          <span className="contact-intro-caption">A SMALL INTERACTION. A REAL CONVERSATION.</span>
        </div>
      </div>

      <div className="contact-console">
        <div className="contact-console-header">
          <div className="contact-console-title">
            <span className="contact-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <span>human-api / contact</span>
          </div>
          <span className="contact-console-live"><i /> INTERACTIVE MODE</span>
        </div>

        <div className="contact-console-grid">
          <div className="contact-intent-panel">
            <p className="contact-panel-label">01 / CHOOSE YOUR INTENT</p>
            <h3>What brings<br />you here<span>?</span></h3>
            <p className="contact-panel-help">Pick a path. I&apos;ll shape the first message around it.</p>
            <div className="contact-intent-list" role="group" aria-label="Choose a contact reason">
              {intents.map((intent) => (
                <button key={intent.id} type="button"
                  className={`contact-intent ${activeId === intent.id ? "is-selected" : ""}`}
                  onClick={() => setActiveId(intent.id)} aria-pressed={activeId === intent.id}>
                  <span className="contact-intent-number">{intent.number}</span>
                  <span className="contact-intent-copy"><strong>{intent.label}</strong><small>{intent.hint}</small></span>
                  <span className="contact-intent-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
            <p className="contact-panel-foot"><span>↳</span> No forms to fight. No awkward scripts.</p>
          </div>

          <div className={`contact-response-panel contact-response-${active.id}`} key={active.id}>
            <div className="contact-response-top">
              <span className="contact-panel-label">02 / REQUEST VISUALIZER</span>
              <span className="contact-response-code">LOCAL ROUTER <b>●</b></span>
            </div>
            <div className="contact-network" aria-label="Animated connection network">
              <svg viewBox="0 0 320 205" role="img" aria-labelledby="contact-network-title">
                <title id="contact-network-title">A network responding to your selected contact intent</title>
                {edges.map(([from, to], index) => {
                  const start = nodes[from]; const end = nodes[to];
                  const lit = index % 3 === intents.findIndex((item) => item.id === active.id);
                  return <line key={`${from}-${to}`} className={`contact-network-edge ${lit ? "is-lit" : ""}`}
                    x1={start.x} y1={start.y} x2={end.x} y2={end.y} style={{ "--edge-delay": `${index * 40}ms` }} />;
                })}
                {nodes.map((node, index) => <circle key={`${node.x}-${node.y}`}
                  className={`contact-network-node ${index === 2 || index === 7 ? "is-hot" : ""}`}
                  cx={node.x} cy={node.y} r={index % 4 === 0 ? 3.5 : 2.3}
                  style={{ "--node-delay": `${index * 90}ms` }} />)}
                <circle className="contact-network-packet" r="4" cx={active.packet[0]} cy={active.packet[1]} />
              </svg>
              <span className="contact-network-label label-top">SIGNAL FOUND</span>
              <span className="contact-network-label label-bottom">ROUTING YOUR INTENT <span>↗</span></span>
            </div>
            <div className="contact-request-line">
              <span className="contact-request-method">GET</span><code>{active.endpoint}</code><span className="contact-request-ok">200</span>
            </div>
            <div className="contact-response-copy">
              <span className="contact-response-check">✓</span>
              <div><p className="contact-response-status">RESPONSE READY</p><h3>{active.response}</h3></div>
            </div>
            <div className="contact-response-footer">
              <div className="contact-packet-status"><span /> MESSAGE TEMPLATE ASSEMBLED</div>
              <a className="contact-send-button" href={mailtoFor(active)}>Open email draft <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="contact-console-bottom">
          <span>BUILT TO START A CONVERSATION, NOT JUST LOOK BUSY.</span>
          <span>NO BACKEND REQUIRED <b>·</b> JUST A LITTLE INTENT</span>
        </div>
      </div>

      <div className="contact-footer">
        <div><p className="contact-footer-label">YOUR MOVE.</p>
          <a className="contact-footer-email" href={mailtoFor(active)}>Have a good one to talk about? <span>Let&apos;s talk ↗</span></a>
        </div>
        <button type="button" className="contact-copy-button" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy contact email ↗"}</button>
      </div>

      <div className="contact-bottomline">
        <span>SHUBHAM GANRAJ · BUILD • LEARN • GROW</span>
        <a href="#home" onClick={(event) => {
          const home = document.getElementById("home");
          if (home) { event.preventDefault(); home.scrollIntoView({ behavior: "smooth" }); }
        }}>BACK TO TOP ↑</a>
      </div>
    </section>
  );
}
