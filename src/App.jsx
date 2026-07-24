import arikPhoto from "./assets/arik.png";

export default function ArikPortfolio() {
  const stats = [
    {
      value: "20%",
      label: "Faster review turnaround",
      sub: "projected post-launch impact",
    },
    {
      value: "192",
      label: "Customer responses analyzed",
      sub: "to prioritize 15 platform improvements",
    },
    {
      value: "Winner",
      label: "Company-wide Creatathon",
      sub: "FINRA, 2026",
    },
    {
      value: "1,000+",
      label: "Users impacted",
      sub: "through a web platform redesign",
    },
  ];

  const competencies = [
    {
      title: "Customer & Market Discovery",
      body: "Turning interviews, surveys, and comment letters into validated pain points and real product opportunities.",
    },
    {
      title: "Data-Driven Prioritization",
      body: "Impact-vs-effort analysis, KPI frameworks, and success metrics that decide what to build next.",
    },
    {
      title: "Roadmapping & Execution",
      body: "Feature briefs, wireframes, and roadmaps that align stakeholders and ship features that matter.",
    },
    {
      title: "Technical Fluency",
      body: "A computer science foundation that lets me collaborate deeply with engineers and weigh real tradeoffs.",
    },
  ];

  const experience = [
    {
      role: "Product Management Intern",
      company: "FINRA",
      period: "Jun 2026 - Present",
      featured: true,
      bullets: [
        "Led product validation for FINRA's AI-powered Compliance Screener: analyzed 50+ regulatory comment letters to surface 17 customer pain points, mapped them to product use cases, and authored a feature brief with success metrics and roadmap recommendations for the highest-impact opportunity.",
        "Designed a 7-KPI measurement framework with success targets, decision triggers, and automation plans to track post-launch performance, projecting $600,000 in annual ROI and a 20% reduction in review turnaround time.",
        "Owned customer feedback-driven discovery for FINRA's regulatory filing platform: analyzed 192 CSAT survey responses, prioritized 15 improvements using impact-vs-effort analysis, and delivered leadership recommendations projected to lift customer satisfaction by 6-10 percentage points.",
        "Won FINRA's company-wide Creatathon with a gamified blockchain learning platform, running comparative usability studies and iterating on qualitative and quantitative feedback; the solution is being evaluated for enterprise-wide adoption.",
        "Ran onboarding and adoption analysis for FINRA's AI developer-tooling pilot, prioritizing 13 bottlenecks across three developer toolchains and proposing product enhancements to improve usability.",
      ],
      tags: [
        "Product Discovery",
        "Customer Research",
        "Prioritization",
        "KPIs & Metrics",
        "Roadmapping",
        "Usability Testing",
        "AI Products",
        "Executive Communication",
      ],
    },
    {
      role: "Web Assistant",
      company: "Maryland Robotics Center",
      period: "Aug 2025 - Jun 2026",
      bullets: [
        "Designed and deployed new Drupal and HTML pages, improving navigation, accessibility, and content discoverability for 1,000+ users.",
        "Managed project operations including budgets, timelines, and stakeholder communication.",
      ],
      tags: [
        "Web Publishing",
        "Accessibility",
        "Content Discoverability",
        "Project Operations",
        "Stakeholder Management",
      ],
    },
    {
      role: "IT Worker",
      company: "University of Maryland",
      period: "Aug 2024 - Jan 2025",
      bullets: [
        "Resolved 150+ Jira service tickets supporting software and hardware issues for university staff.",
        "Managed an inventory database for 300+ devices, cutting asset discrepancies by 30% through systematic tracking and regular audits.",
        "Configured and deployed 150+ devices across Windows, macOS, and Linux.",
        "Supported AV installations in 20+ rooms, improving setup efficiency by 25% with Jira-based request tracking.",
      ],
      tags: [
        "Jira",
        "IT Operations",
        "Asset Management",
        "Cross-Platform Deployment",
        "Process Improvement",
      ],
    },
  ];

  const projects = [
    {
      name: "TerpFinance",
      role: "Product Lead",
      period: "Jan 2026 - Mar 2026",
      description:
        "A personal finance and budgeting platform for college students, taken from product discovery through MVP delivery.",
      bullets: [
        "Led a team from customer discovery through MVP, owning direction and scope.",
        "Ran customer interviews and user research, translating insights into personas, user stories, requirements, and a prioritized feature set.",
        "Designed wireframes, prototypes, and UI mockups in Figma, iterating on user and stakeholder feedback.",
        "Shipped budgeting, transaction management, and financial analytics features.",
      ],
      tags: [
        "Product Discovery",
        "User Research",
        "User Stories & Personas",
        "Prioritization",
        "Wireframing",
        "Figma",
        "MVP Delivery",
        "Team Leadership",
      ],
    },
    {
      name: "DevConnect",
      role: "Full-Stack Builder",
      period: "Personal Project",
      description:
        "A networking platform for developers to build public profiles and connect through shared interests.",
      bullets: [
        "Built secure authentication with bcrypt and MongoDB.",
        "Developed backend logic in Node.js and Express with RESTful routes.",
        "Integrated GitHub API data and designed a responsive UI across devices.",
      ],
      tags: ["Full-Stack", "Node.js", "MongoDB", "REST API"],
    },
  ];

  const coursework = [
    "Human-Computer Interaction",
    "Product Design (Figma)",
    "Product Management",
    "Ethics in AI",
    "Privacy Engineering",
    "Database Design",
    "Web Development",
    "Computer Systems",
    "Principles of Management",
  ];

  const certifications = [
    "Aha! Product Management Professional Certificate",
    "Pendo Product Analytics",
    "Microsoft Power BI",
    "Introduction to Artificial Intelligence (AI)",
  ];

  const skills = {
    product: [
      "Figma",
      "Pendo",
      "Jira",
      "Miro",
      "Power BI",
      "Product Analytics",
      "KPI Development",
      "Roadmapping",
      "Wireframing",
    ],
    technical: [
      "SQL",
      "Python",
      "HTML/CSS",
      "JavaScript",
      "React",
      "MongoDB",
      "Java",
      "Drupal",
      "Git",
    ],
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Arik Hasan
            </h1>
            <p className="text-lg text-cyan-300/90">
              Product Manager
            </p>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-2.5 text-base font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden scroll-mt-24"
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.15fr_.85fr] md:py-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Product Management Intern @ FINRA
            </span>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Arik Hasan
              </span>
            </h2>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              A product manager and Computer Science senior at the University of
              Maryland. I turn research and data into product decisions, from
              validating AI-powered tools to shaping roadmaps and measuring real
              impact. I care about intuitive products that solve genuine problems
              and move the numbers that matter.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Product Discovery",
                "Data-Driven Decisions",
                "Roadmapping",
                "User Research",
              ].map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-300"
                >
                  {focus}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <img
              src={arikPhoto}
              alt="Portrait of Arik Hasan"
              className="h-52 w-52 rounded-3xl object-cover border border-white/15 shadow-2xl shadow-cyan-500/20"
            />
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-cyan-300/40 hover:bg-slate-900">
                  <p className="text-slate-400">Currently</p>
                  <p className="mt-1 font-semibold text-white">Product Management Intern, FINRA</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-cyan-300/40 hover:bg-slate-900">
                  <p className="text-slate-400">Open to</p>
                  <p className="mt-1 font-semibold text-white">Product Management Roles</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-cyan-300/40 hover:bg-slate-900">
                  <p className="text-slate-400">Studying</p>
                  <p className="mt-1 font-semibold text-white">Computer Science @ Maryland</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-cyan-300/40 hover:bg-slate-900">
                  <p className="text-slate-400">Graduating</p>
                  <p className="mt-1 font-semibold text-white">Dec 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-4">
        <h3 className="mb-5 text-center text-2xl font-semibold text-white">
          Highlights
        </h3>
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 text-center md:px-6">
              <p className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{stat.sub}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">
          From my current internship at FINRA. Figures marked "projected" reflect forecasted, pre-launch impact.
        </p>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">About</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            A product mindset backed by technical depth
          </h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            I work at the intersection of users, data, and engineering. I like
            digging into customer feedback, finding the patterns that matter,
            and turning them into prioritized, measurable product work. My
            computer science background lets me go deep with engineering teams,
            while my product training keeps the focus on outcomes over output.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {competencies.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-3xl border p-6 shadow-xl transition hover:-translate-y-1 ${
                index === 0
                  ? "border-cyan-400/30 bg-cyan-400/10 hover:border-cyan-300/60 hover:bg-cyan-400/15"
                  : "border-white/15 bg-slate-900/70 hover:border-cyan-300/50 hover:bg-slate-900/90"
              }`}
            >
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">
            Experience
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Where I've made an impact
          </h3>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.company}
              className={`rounded-3xl border p-7 shadow-xl transition hover:-translate-y-1 ${
                item.featured
                  ? "border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-white/5 hover:border-cyan-300/60"
                  : "border-white/10 bg-white/5 hover:border-cyan-300/50 hover:bg-white/10"
              }`}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-2xl font-semibold text-white">
                      {item.role}
                    </h4>
                    {item.featured && (
                      <span className="rounded-full border border-cyan-400/40 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-lg font-medium text-cyan-300">
                    {item.company}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-medium text-slate-400">
                  {item.period}
                </p>
              </div>

              {item.context && (
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                  {item.context}
                </p>
              )}

              <ul className="mt-5 space-y-3 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {item.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">
            Projects
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Products I've helped build
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:from-cyan-400/10 hover:to-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {project.role}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-slate-400">{project.period}</p>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="mt-5 space-y-3 text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">
            Education
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h4 className="text-2xl font-semibold text-white">
                University of Maryland, College Park
              </h4>
              <p className="mt-1 text-lg text-cyan-300">
                Bachelor of Science in Computer Science &middot; Minor in General Business
              </p>
            </div>
            <div className="shrink-0 text-sm text-slate-400 md:text-right">
              <p>Expected December 2026</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Merit Scholarship", "Dean's Honors List", "Academic Excellence Award"].map(
              (honor) => (
                <span
                  key={honor}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100"
                >
                  {honor}
                </span>
              )
            )}
          </div>

          <div className="mt-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Relevant Coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">
            Skills &amp; Certifications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-400/15">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Product & Analytics
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.product.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-sm text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h4 className="mb-4 text-lg font-semibold text-white">Technical</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Certifications
            </h4>
            <ul className="space-y-3 text-slate-300">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-3 text-sm leading-6">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-10 text-center shadow-2xl shadow-cyan-500/10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-200 md:text-xl">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Let's connect
          </h3>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            I'm looking for product management roles where I can turn customer
            insight into products people love.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:arikhasan16@gmail.com"
              className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/arik-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Arik Hasan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
