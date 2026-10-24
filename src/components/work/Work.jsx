import "./Work.css";

const projects = [
  {
    number: "01",
    type: "REAL-TIME APPLICATION",
    title: "WhatsApp",
    subtitle: "Messaging, without the waiting.",
    description:
      "A real-time messaging experience built around live conversations, delivery states, unread counts, online presence, and status updates.",
    stack: ["React", "Node.js", "Socket.IO", "Redis", "MongoDB"],
    kind: "whatsapp",
    label: "FEATURED PROJECT",
    href: "#",
    action: "Explore project",
  },
  {
    number: "02",
    type: "FULL-STACK WEB APP",
    title: "Airbnb",
    subtitle: "A better way to find a place to stay.",
    description:
      "A rental discovery and booking experience focused on clear property presentation, intuitive browsing, and a smooth guest journey.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    kind: "airbnb",
    label: "WEB APPLICATION",
    href: "#",
    action: "View case study",
  },
  {
    number: "03",
    type: "MANAGEMENT TOOL",
    title: "Member & Employee Tracker",
    subtitle: "People and operations, organised.",
    description:
      "A management interface for keeping member and employee information organised and making everyday admin workflows easier to follow.",
    stack: ["React", "JavaScript", "REST API"],
    kind: "tracker",
    label: "PRODUCTIVITY TOOL",
    href: "#",
    action: "View project",
  },
];

function WhatsAppPreview() {
  return (
    <div className="preview-whatsapp" aria-label="Decorative messaging app preview">
      <div className="wa-sidebar">
        <div className="wa-topline">
          <span className="wa-mark">w.</span>
          <span className="wa-dots">•••</span>
        </div>
        <div className="wa-search">⌕ &nbsp; Search conversations</div>
        {[
          ["AM", "Aarav Mehta", "Are we still on for today?", "10:42"],
          ["SP", "Sneha Patil", "That looks great 🙌", "10:18"],
          ["RK", "Rahul Kulkarni", "Sent you the details.", "Yesterday"],
          ["DS", "Design team", "You: Updated the screens", "Yesterday"],
        ].map(([initials, name, message, time], index) => (
          <div className={`wa-chat-row ${index === 0 ? "is-active" : ""}`} key={name}>
            <span className={`wa-avatar wa-avatar-${index}`}>{initials}</span>
            <span className="wa-chat-copy">
              <strong>{name}</strong>
              <small>{message}</small>
            </span>
            <time>{time}</time>
          </div>
        ))}
      </div>
      <div className="wa-conversation">
        <div className="wa-conversation-head">
          <span className="wa-avatar wa-avatar-0">AM</span>
          <span><strong>Aarav Mehta</strong><small>online</small></span>
          <span className="wa-head-icons">⌕ &nbsp; ⋮</span>
        </div>
        <div className="wa-messages">
          <span className="wa-day">TODAY</span>
          <div className="wa-bubble wa-in">Hey! How's the new build coming along?<time>10:39</time></div>
          <div className="wa-bubble wa-out">Pretty good — real-time updates are working now.<time>10:40 ✓✓</time></div>
          <div className="wa-bubble wa-in">Nice. What about delivery and read receipts?<time>10:41</time></div>
          <div className="wa-bubble wa-out">Both are in. Testing the edge cases next.<time>10:42 ✓✓</time></div>
        </div>
        <div className="wa-composer"><span>＋</span><span>Type a message</span><b>➤</b></div>
      </div>
      <span className="preview-caption">REAL-TIME MESSAGING UI · CONCEPT PREVIEW</span>
    </div>
  );
}

function AirbnbPreview() {
  return (
    <div className="preview-airbnb" aria-label="Decorative rental booking app preview">
      <div className="airbnb-nav">
        <strong className="airbnb-brand">air<span>•</span>stay</strong>
        <span>Anywhere　　Any week　　Add guests</span>
        <b>⌕</b>
      </div>
      <div className="airbnb-photo">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
          alt="Warm modern living room in a rental home"
          loading="lazy"
        />
        <span className="airbnb-photo-tag">GUEST FAVOURITE</span>
        <span className="airbnb-heart">♡</span>
      </div>
      <div className="airbnb-details">
        <div>
          <strong>Quiet design stay with natural light</strong>
          <p>Entire home · 2 beds · 4 guests</p>
          <small>★ 4.96 <span>·</span> 128 reviews</small>
        </div>
        <div className="airbnb-price"><strong>₹6,200</strong><span> / night</span></div>
      </div>
      <span className="preview-caption">RENTAL DISCOVERY UI · CONCEPT PREVIEW</span>
    </div>
  );
}

function TrackerPreview() {
  return (
    <div className="preview-tracker" aria-label="Decorative employee management dashboard preview">
      <div className="tracker-top">
        <span className="tracker-logo">orbit<span>.</span></span>
        <span className="tracker-user"><i>SG</i> Shubham</span>
      </div>
      <div className="tracker-layout">
        <aside className="tracker-sidebar">
          <span className="tracker-side-active">▦ &nbsp; Overview</span>
          <span>♙ &nbsp; Members</span>
          <span>♧ &nbsp; Employees</span>
          <span>⚙ &nbsp; Settings</span>
        </aside>
        <div className="tracker-main">
          <small>MONDAY, 21 OCTOBER</small>
          <h4>People overview</h4>
          <div className="tracker-stats">
            <div><span>Total members</span><strong>248</strong><em>↑ 12 this month</em></div>
            <div><span>Employees</span><strong>32</strong><em>Active team</em></div>
          </div>
          <div className="tracker-table">
            <div className="tracker-table-head"><span>NAME</span><span>ROLE</span><span>STATUS</span></div>
            {[
              ["AK", "Aditi Kulkarni", "Member", "Active"],
              ["RV", "Rohan Verma", "Employee", "Active"],
              ["PM", "Priya More", "Member", "Pending"],
            ].map(([initials, name, role, status]) => (
              <div className="tracker-table-row" key={name}>
                <span className="tracker-person"><i>{initials}</i>{name}</span>
                <span>{role}</span>
                <span className={status === "Active" ? "status-active" : "status-pending"}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="preview-caption">ADMIN DASHBOARD · CONCEPT PREVIEW</span>
    </div>
  );
}

function ProjectVisual({ kind }) {
  if (kind === "whatsapp") return <WhatsAppPreview />;
  if (kind === "airbnb") return <AirbnbPreview />;
  return <TrackerPreview />;
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`work-project ${featured ? "work-project-featured" : ""}`}>
      <a className="project-visual-link" href={project.href} aria-label={`${project.action}: ${project.title}`}>
        <ProjectVisual kind={project.kind} />
        <span className="project-open" aria-hidden="true">↗</span>
      </a>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.number} / {project.type}</span>
          <span>{project.label}</span>
        </div>
        <h3>{project.title}<span className="work-period">.</span></h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        <div className="project-stack">
          {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <a className="project-action" href={project.href}>
          {project.action} <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="work-section" id="work">
      <div className="work-shell">
        <header className="work-heading">
          <div>
            <p className="work-eyebrow"><span /> SELECTED WORK / 2025—2026</p>
            <h2>BUILT WITH<br /> <span>INTENTION.</span></h2>
          </div>
          <div className="work-intro">
            <span className="work-index">03 PROJECTS · 01 MINDSET</span>
            <p>A selection of products, experiments, and engineering challenges — built to solve real problems, not just fill a portfolio.</p>
          </div>
        </header>

        <div className="work-featured-label">
          <span>01 — FEATURED PROJECT</span>
          <span>REAL-TIME SYSTEMS <i>✳</i></span>
        </div>

        <ProjectCard project={projects[0]} featured />

        <div className="work-more-heading">
          <p className="work-eyebrow"><span /> MORE PROJECTS</p>
          <p>Different problems. The same curiosity.</p>
        </div>

        <div className="work-grid">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <footer className="work-footer">
          <p>HAVE A GOOD PROBLEM TO SOLVE?</p>
          <a href="#contact">LET'S TALK <span>↗</span></a>
        </footer>
      </div>
    </section>
  );
}
