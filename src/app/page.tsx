const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Experience", value: "8+ years" },
  { label: "Focus", value: "Mobile + frontend engineering" },
  { label: "Strength", value: "Useful product systems" },
];

const projects = [
  {
    title: "Orisynx",
    category: "Audit management platform",
    summary: "Contributed to a collaborative audit management platform covering audit programmes, findings, corrective actions, and role-specific dashboards.",
    outcome: "Recent work includes audit workflow refinements, dashboard usability, and demo-booking integration.",
    stack: ["React", "TypeScript", "GraphQL", "NestJS", "MongoDB", "Playwright"],
    links: [],
  },
  {
    title: "Dietra",
    category: "Meal-planning mobile app — early-stage",
    summary: "Developing an early-stage concept for a dietitian-led cooking and meal-planning platform using a cross-platform Expo app.",
    outcome: "The repository includes an Expo application scaffold and design references; the product remains in development.",
    stack: ["React Native", "Expo", "Expo Router", "TypeScript"],
    links: [],
  },
  {
    title: "GoTruck",
    category: "Logistics mobile product",
    summary:
      "Built a production mobile workflow for trip creation, shipment tracking, and day-to-day freight operations across Android and iOS.",
    outcome: "Real business usage with reliability, operational clarity, and mobile-first execution.",
    stack: ["React Native", "Redux", "Node.js", "Express", "PubNub", "S3", "Sentry"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/go-truck/id1554855859" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.gotruck.userapp&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "AI Language Learning App",
    category: "AI-powered product concept",
    summary:
      "Designed a Duolingo-style learning experience around a real-time AI teacher, live captions, and guided spoken practice.",
    outcome: "Used AI-assisted workflows to shape product flow, prompts, feature tradeoffs, and implementation direction.",
    stack: ["React Native", "Expo", "TypeScript", "Clerk", "Stream", "PostHog", "NativeWind", "Zustand"],
    links: [{ label: "GitHub", href: "https://github.com/koladeg/expo-lingua" }],
  },
  {
    title: "e-mhGAP Replica",
    category: "Healthcare field application",
    summary:
      "Created a form-heavy, workflow-sensitive healthcare application for structured intervention support and field-ready data capture.",
    outcome: "Focused on reliability, maintainability, and usable flows in a practical clinical research context.",
    stack: ["React Native", "Redux", "Formik", "Yup", "Axios", "Node.js", "EAS"],
    links: [{ label: "GitHub", href: "https://github.com/koladeg/MHGapp" }],
  },
  {
    title: "AdugboInsure",
    category: "Community health initiative",
    summary:
      "Shaped a health-insurance access initiative around awareness, enrollment support, and locally grounded product thinking.",
    outcome: "Blended product strategy, workflow design, and public-impact execution for a Nigerian context.",
    stack: ["Product Strategy", "Mobile-first UX", "Workflow Design", "HealthTech"],
    links: [{ label: "About my work", href: "https://github.com/koladeg" }],
  },
];

const expertise = [
  {
    title: "Mobile product delivery",
    body: "I build React Native apps for real usage, with attention to state, reliability, edge cases, and maintainable flows.",
  },
  {
    title: "AI-assisted execution",
    body: "I use tools like Codex and Claude to scope, prototype, verify, and move faster without losing product judgment.",
  },
  {
    title: "Operational thinking",
    body: "My strongest work lives where user experience meets real business workflow: healthcare, logistics, reporting, and service operations.",
  },
];

const principles = [
  "Useful beats flashy. I care about products that survive real usage, not just demos.",
  "Clarity matters. I like interfaces and flows that reduce friction for both users and teams.",
  "AI is a multiplier, not a substitute. I use it to accelerate delivery while keeping judgment in the loop.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-shell">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-6 sm:px-10 lg:px-12">
          <header className="topbar">
            <a href="#top" className="brand-lockup">
              <span className="brand-mark" aria-hidden="true" />
              <div>
                <p className="brand-name">Kolade Gureje</p>
                <p className="brand-role">Mobile & frontend developer</p>
              </div>
            </a>

            <nav className="nav-links" aria-label="Primary">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div id="top" className="hero-grid">
            <div className="hero-copy-wrap">
              <p className="eyebrow">React Native • React • TypeScript • Product systems</p>
              <h1 className="hero-title">
                I build mobile and web experiences for real-world workflows.
              </h1>
              <p className="hero-copy">
                I am a Nigeria-based developer focused on React Native, product workflow thinking, and practical
                AI-assisted building. My best work sits where clean user experience meets operational reality.
              </p>

              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  View Projects
                </a>
                <a className="button-secondary" href="mailto:koladegureje@gmail.com">
                  Contact Me
                </a>
              </div>
            </div>

            <aside className="hero-side">
              <div className="intro-note tone-soft">
                <p>
                  I care about useful software, strong workflows, and interfaces that feel calm instead of noisy.
                </p>
              </div>

              <div className="stats-block tone-paper">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-row">
                    <p>{stat.label}</p>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell section-spacing">
        <div className="section-heading split-heading">
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Work shaped by delivery context, not portfolio filler.</h2>
        </div>

        <div className="projects-list" aria-label="Projects">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-row ${index % 2 === 1 ? "project-row-reverse" : ""}`}>
              <div className="project-meta tone-paper">
                <p className="project-index">0{index + 1}</p>
                <p className="project-kicker">{project.category}</p>
              </div>

              <div className="project-content tone-soft">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-outcome">{project.outcome}</p>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} className="inline-link" href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" className="section-shell section-spacing expertise-grid">
        <div className="section-heading">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">A product-engineer mindset, tuned for mobile delivery.</h2>
        </div>

        <div className="expertise-stack">
          {expertise.map((item, index) => (
            <article key={item.title} className={`expertise-row ${index === 1 ? "tone-paper" : "tone-soft"}`}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-spacing about-grid">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2 className="section-title">I like products that feel simple because the thinking underneath is strong.</h2>
        </div>

        <div className="about-layout">
          <div className="about-copy tone-soft">
            <p>
              My foundation is in React Native, but the part of the work I care about most is shaping software
              around real use: understanding the workflow, reducing friction, and making product decisions that
              hold up beyond a demo.
            </p>
            <p>
              I have worked across healthcare, logistics, reporting flows, and early-stage product ideas. More
              recently, I have been leaning into AI-assisted building as a practical way to move from idea to
              tested implementation faster.
            </p>
          </div>

          <div className="principles tone-paper">
            {principles.map((item) => (
              <div key={item} className="principle-item">
                <span className="principle-line" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell section-spacing">
        <div className="contact-band tone-ink">
          <div>
            <p className="section-label section-label-light">Contact</p>
            <h2 className="contact-title">If you are building something useful, I would love to hear about it.</h2>
          </div>

          <div className="contact-actions">
            <a className="button-light" href="mailto:koladegureje@gmail.com">
              koladegureje@gmail.com
            </a>
            <a className="button-light button-light-secondary" href="https://github.com/koladeg" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button-light button-light-secondary" href="https://linkedin.com/in/kolade-gureje" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
