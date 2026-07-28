const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Experience", value: "8+ years" },
  { label: "Focus", value: "React Native + AI workflows" },
  { label: "Domains", value: "Health, logistics, product" },
];

const projects = [
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
    links: [{ label: "GitHub", href: "https://github.com/koladeg" }],
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
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
          <header className="topbar">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Kolade Gureje
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">React Native developer • AI-assisted product builder</p>
            </div>

            <nav className="nav-links" aria-label="Primary">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="hero-grid">
            <div className="space-y-8">
              <div className="inline-flex w-fit items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-[var(--color-text-muted)] backdrop-blur">
                Building mobile products with product sense, workflow clarity, and modern AI tools.
              </div>

              <div className="space-y-6">
                <h1 className="hero-title">
                  I build thoughtful mobile products that feel clean, useful, and ready for real-world work.
                </h1>
                <p className="hero-copy">
                  I am a Nigeria-based React Native developer focused on mobile experiences across healthcare,
                  logistics, and AI-assisted product workflows. I care about practical products, clear systems,
                  and shipping work that people can actually use.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a className="button-primary" href="#projects">
                  View Projects
                </a>
                <a className="button-secondary" href="mailto:koladegureje@gmail.com">
                  Contact Me
                </a>
                <a className="button-secondary" href="https://github.com/koladeg" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <aside className="hero-panel panel">
              <div className="space-y-5">
                <div>
                  <p className="eyebrow mb-3">Quick snapshot</p>
                  <p className="text-sm leading-7 text-[var(--color-text-soft)]">
                    A product-minded mobile developer with strong React Native foundations and growing depth in
                    AI-assisted delivery.
                  </p>
                </div>

                <div className="grid gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                      <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell section-spacing">
        <div className="section-header">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Proof of work with product context, not just screenshots and links.</h2>
          <p className="section-copy">
            The strongest signal I can give is how I think through real workflows, delivery constraints, and
            user usefulness.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="project-card panel">
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="project-kicker">{project.category}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">{project.title}</h3>
                  <p className="text-base leading-7 text-[var(--color-text-soft)]">{project.summary}</p>
                </div>

                <div className="outcome-box">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">Outcome</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {project.links.map((link) => (
                  <a key={link.label} className="inline-link" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="expertise" className="section-shell section-spacing">
        <div className="section-header">
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title">I bring a product-engineer mindset to mobile delivery.</h2>
          <p className="section-copy">
            I like work that sits at the intersection of usability, implementation detail, and operational reality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <article key={item.title} className="panel feature-card">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-spacing">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="section-header mb-0">
            <p className="eyebrow">About</p>
            <h2 className="section-title">I like building products that are calm on the surface and strong underneath.</h2>
          </div>

          <div className="panel about-panel">
            <p className="text-base leading-8 text-[var(--color-text-soft)]">
              My background is strongest in React Native, but what keeps pulling me forward is product thinking:
              understanding the workflow, reducing friction, and shaping software around how people actually work.
            </p>
            <p className="text-base leading-8 text-[var(--color-text-soft)]">
              I have worked across healthcare, logistics, reporting flows, and early-stage product ideas. Lately,
              I have also been leaning into AI-assisted building as a practical way to move from idea to tested
              implementation faster.
            </p>

            <div className="principles-list">
              {principles.map((item) => (
                <div key={item} className="principle-item">
                  <span className="principle-dot" aria-hidden="true" />
                  <p className="text-sm leading-7 text-[var(--color-text-soft)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-24 pt-6">
        <div className="panel contact-panel">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">If you are building something useful, I would love to hear about it.</h2>
            <p className="text-base leading-7 text-[var(--color-text-soft)]">
              Best for mobile product roles, React Native work, and practical AI-assisted product development.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="button-primary" href="mailto:koladegureje@gmail.com">
              koladegureje@gmail.com
            </a>
            <a className="button-secondary" href="https://linkedin.com/in/kolade-gureje" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
