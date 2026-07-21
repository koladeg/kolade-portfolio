const projects = [
  {
    title: "GoTruck",
    summary:
      "A logistics mobile product for trip creation, shipment tracking, and operational workflows in land freight transport.",
    impact:
      "Production mobile experience with real business use across Android and iOS.",
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
    summary:
      "A Duolingo-style concept built around a real-time AI teacher, audio lesson states, and live caption ideas for spoken practice.",
    impact:
      "Explores practical vibe coding with AI agents to shape mobile product flows, prompts, and implementation decisions.",
    stack: ["React Native", "Expo", "TypeScript", "Clerk", "Stream", "PostHog", "NativeWind", "Zustand"],
    links: [{ label: "GitHub", href: "https://github.com/koladeg" }],
  },
  {
    title: "e-mhGAP Replica",
    summary:
      "A healthcare-focused mobile application supporting structured mental health intervention and field-ready data capture workflows.",
    impact:
      "Built for reliability, form-heavy usage, and practical adoption in a clinical research context.",
    stack: ["React Native", "Redux", "Formik", "Yup", "Axios", "Node.js", "EAS"],
    links: [{ label: "GitHub", href: "https://github.com/koladeg/MHGapp" }],
  },
  {
    title: "AdugboInsure",
    summary:
      "A health-insurance access initiative focused on awareness, enrollment support, and community-centered product thinking.",
    impact:
      "Blends product direction, technical execution, and local problem framing for public-impact work in Nigeria.",
    stack: ["Product Strategy", "Mobile-first UX", "Workflow Design", "HealthTech"],
    links: [{ label: "About my work", href: "https://github.com/koladeg" }],
  },
];

const strengths = [
  {
    title: "Mobile product delivery",
    body: "React Native apps shaped for real usage, not just demos — with attention to state, reliability, and maintainable flows.",
  },
  {
    title: "AI-assisted building",
    body: "I use practical vibe coding workflows with tools like Codex and Claude to scope, iterate, verify, and ship faster.",
  },
  {
    title: "Operational thinking",
    body: "My best work sits where product experience meets business workflow: healthcare, logistics, reporting, and real-time user interactions.",
  },
];

const stats = [
  { label: "Experience", value: "8+ years" },
  { label: "Core focus", value: "React Native + AI workflows" },
  { label: "Domains", value: "Healthcare, logistics, product" },
];

export default function Home() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 py-20 sm:px-10 lg:px-12">
        <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--color-text-muted)] backdrop-blur">
          Mobile developer • React Native • AI-assisted product builder
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Kolade Gureje
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                Building mobile products with React Native, AI, and real-world workflow thinking.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-soft)] sm:text-xl">
                I build mobile and product experiences across healthcare, logistics,
                and AI-powered workflows. My recent work spans React Native apps,
                conversational product ideas, structured API integrations, and
                practical AI-assisted development.
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

          <div className="panel grid gap-4 p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Snapshot
            </p>
            <div className="grid gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/4 p-5">
                  <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="section-header">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects framed around product, context, and real usage.</h2>
          <p className="section-copy">
            I want this portfolio to show how I think, what I build, and where I add value —
            not just list a pile of links.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="panel flex h-full flex-col gap-5 p-6 sm:p-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[var(--color-text)]">{project.title}</h3>
                <p className="text-base leading-7 text-[var(--color-text-soft)]">{project.summary}</p>
                <p className="text-sm leading-7 text-[var(--color-text-muted)]">{project.impact}</p>
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

      <section className="section-shell">
        <div className="section-header">
          <p className="eyebrow">What I build</p>
          <h2 className="section-title">A product-engineer approach, shaped by delivery and real constraints.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="panel p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2 className="section-title">From code to product thinking.</h2>
          </div>

          <div className="panel space-y-5 p-6 sm:p-8">
            <p className="text-base leading-8 text-[var(--color-text-soft)]">
              I am a Nigeria-based developer with a strong React Native foundation and a growing focus on
              AI-assisted product building. I enjoy shipping mobile experiences that are useful,
              structured, and grounded in real operational needs.
            </p>
            <p className="text-base leading-8 text-[var(--color-text-soft)]">
              My work has touched healthcare, logistics, reporting workflows, and early-stage product ideas.
              I care about clarity, maintainability, and building things that feel genuinely usable.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-24">
        <div className="panel flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
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
