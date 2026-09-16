import { useState } from "react";
import arikPhoto from "./assets/arik.webp";

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export default function ArikPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stats = [
    {
      value: "17",
      label: "User pain points prioritized",
      sub: "distilled from 93 complaints across 50+ comment letters",
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
      label: "Users served",
      sub: "by Maryland Robotics Center web pages",
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
        "role": "Product Manager",
        "company": "Hack4Impact-UMD",
        "period": "Aug 2026 - Present",
        "featured": true,
        "bullets": [
            "Lead product strategy as the sole PM on a 15-person team building custom software for Sustainable Saratoga, an environmental nonprofit.",
            "Define MVP scope, feature priorities, user flows, and user stories with acceptance criteria in a Product Requirements Document (PRD).",
            "Manage a roadmap across 14 weekly Agile sprints, aligning design and engineering, resolving blockers, and managing scope."
        ],
        "tags": [
            "Product Strategy",
            "Roadmapping",
            "PRDs",
            "Agile Delivery",
            "Stakeholder Management"
        ]
    },
    {
        "role": "Product Manager Intern",
        "company": "FINRA",
        "period": "Jun 2026 - Aug 2026",
        "bullets": [
            "Turned 93 complaints from 50+ public comment letters into 17 prioritized pain points for an AI compliance-review tool. Authored a feature brief and proposed 3 roadmap opportunities.",
            "Designed a 7-KPI framework and Go/No-Go decision matrix to evaluate feasibility and track post-launch performance.",
            "Analyzed 192 customer survey responses and prioritized 15 filing-platform improvements using impact-versus-effort analysis.",
            "Identified 13 onboarding and adoption bottlenecks across three AI developer toolchains and recommended usability improvements.",
            "Won FINRA’s company-wide Creatathon with a gamified blockchain learning platform. The solution advanced to evaluation for broader internal adoption."
        ],
        "tags": [
            "Product Discovery",
            "Customer Research",
            "Prioritization",
            "KPIs & Metrics",
            "AI Products"
        ]
    },
    {
        "role": "Web Assistant",
        "company": "Maryland Robotics Center",
        "period": "Aug 2025 - Jun 2026",
        "bullets": [
            "Designed and deployed Drupal and HTML pages serving 1,000+ users.",
            "Incorporated faculty and research-team feedback to improve navigation, accessibility, and content discoverability."
        ],
        "tags": [
            "Web Publishing",
            "Accessibility",
            "Stakeholder Collaboration"
        ]
    }
];

  const projects = [
    {
      name: "TerpFinance",
      role: "Product Lead",
      period: "Jan 2026 - Mar 2026",
      description:
        "A personal finance and budgeting platform for college students, taken from product discovery through MVP delivery.",
bullets: [
  "Led a team of 4 from product discovery through MVP delivery.",
  "Conducted 12 customer interviews and translated insights into personas, user stories, requirements, and feature priorities.",
  "Designed wireframes, prototypes, and UI mockups in Figma, iterating based on user and stakeholder feedback.",
  "Worked with developers to deliver budgeting, transaction management, and analytics features within MVP scope.",
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
    "Pendo",
    "Power BI",
    "Agile Foundations",
  ];

  const skills = {
    product: [
      "Figma",
      "Pendo",
      "Jira",
      "Miro",
      "Confluence",
      "User Research",
      "Product Analytics",
      "KPI Development",
      "Roadmapping",
      "PRDs",
      "Agile & Kanban",
    ],
    technical: [
      "SQL",
      "Python",
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
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
      <a href="#main" className="skip-link">Skip to content</a>
      {/* Navigation: original dark styling, with a menu on smaller screens. */}
      <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="#top" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Arik Hasan</p>
            <p className="text-sm text-cyan-300 sm:text-base">Product Manager</p>
          </a>
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-xl px-3 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200">{link.label}</a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-100 sm:text-base">Resume</a>
            <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-white/25 px-3 py-2.5 text-sm font-medium text-white xl:hidden">{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
          </div>
        </div>
        {menuOpen && <div id="mobile-navigation" className="border-t border-white/10 bg-slate-950 px-4 py-3 xl:hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 sm:grid-cols-3">
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3 text-base text-slate-200 hover:bg-slate-800 hover:text-cyan-200">{link.label}</a>)}
          </div>
        </div>}
      </nav>
      <main id="main">
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
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Product Manager @ Hack4Impact
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Arik Hasan
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I’m a product manager and Computer Science senior at the University
              of Maryland. I turn customer research into clear product priorities,
              from AI product discovery at FINRA to leading a 15-person team at
              Hack4Impact. I’m open to product management opportunities and graduate
              in December 2026.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Product Discovery",
                "Data-Driven Decisions",
                "Technical Products",
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
                href={resumeUrl}
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
                href="#projects"
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
              width="720"
              height="720"
              fetchPriority="high"
              className="h-52 w-52 rounded-3xl object-cover border border-white/15 shadow-2xl shadow-cyan-500/20"
            />
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-cyan-300/40 hover:bg-slate-900">
                  <p className="text-slate-400">Currently</p>
                  <p className="mt-1 font-semibold text-white">Product Manager, Hack4Impact</p>
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
        <h2 className="mb-5 text-center text-2xl font-semibold text-white">
          Highlights
        </h2>
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 text-center md:px-6">
              <p className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{stat.sub}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-slate-400">
          Metrics reflect work from my internship at FINRA and roles at the University of Maryland.
        </p>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            A product mindset backed by technical depth
          </h2>
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
              className={`rounded-3xl border p-6 shadow-xl transition ${
                index === 0
                  ? "border-cyan-400/30 bg-cyan-400/10 hover:border-cyan-300/60 hover:bg-cyan-400/15"
                  : "border-white/15 bg-slate-900/70 hover:border-cyan-300/50 hover:bg-slate-900/90"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{item.body}</p>
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
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Where I've made an impact
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.company}
              className={`rounded-3xl border p-7 shadow-xl transition ${
                item.featured
                  ? "border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-white/5 hover:border-cyan-300/60"
                  : "border-white/10 bg-white/5 hover:border-cyan-300/50 hover:bg-white/10"
              }`}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
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

              <ul className="mt-5 max-w-4xl space-y-3 text-base text-slate-200">
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
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Products I've helped build
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 shadow-xl transition hover:border-cyan-300/50 hover:from-cyan-400/10 hover:to-white/10"
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4 md:flex-col lg:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300">
                    {project.role}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-slate-400">{project.period}</p>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="mt-5 max-w-4xl space-y-3 text-base text-slate-200">
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
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">
            Education
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                University of Maryland, College Park
              </h3>
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
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 md:text-xl">
            Skills &amp; Certifications
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-xl transition hover:border-cyan-300/60 hover:bg-cyan-400/15">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Product & Analytics
            </h3>
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

          <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-7 shadow-xl transition hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h3 className="mb-4 text-lg font-semibold text-white">Technical</h3>
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

          <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-7 shadow-xl transition hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Certifications
            </h3>
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
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Let's connect
          </h2>
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
              href="https://github.com/arikhasan2210"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              GitHub
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      </main>
      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Arik Hasan. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:arikhasan16@gmail.com"
              className="transition hover:text-cyan-200"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/arik-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/arikhasan2210"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
