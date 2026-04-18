import arikPhoto from "./assets/arik.png";

export default function ArikPortfolio() {
  const experience = [
    {
      role: "Web Assistant",
      company: "Maryland Robotics Center",
      period: "Aug 2025 - Present",
      bullets: [
        "Designing and deploying new Drupal and HTML pages improving navigation and increasing engagement and accessibility for 1000+ users.",
        "Managing administrative operations, including maintaining timesheets and monitoring budgets, to ensure compliance and efficient resource allocation, and collaborating with staff to publish updates, announcements.",
        "Coordinate bi-weekly meetings, present progress updates, and track deliverables to align cross-functional efforts.",
      ],
    },
    {
      role: "Product Specialist",
      company: "Skechers",
      period: "May 2025 - Present",
      bullets: [
        "Led a 15-member retail team to consistently exceed monthly sales goals by 14% over the past four months.",
        "Conducted training sessions to enhance associate productivity, reducing onboarding time by 20%.",
        "Collaborating with leadership on strategic sales campaigns, surveying, interviewing and applying customer feedback",
      ],
    },
    {
      role: "IT Worker",
      company: "University of Maryland",
      period: "Aug 2024 - Jan 2025",
      bullets: [
        "Resolved 150+ service tickets using Atlassian Jira for university staff to resolve software/hardware issues and IT support",
        "Managed a comprehensive inventory Database for all School of Public Health computing equipment, reducing asset discrepancies by 30% through systematic tracking and regular audits.",
        "Configured, deployed, and maintained over 150 devices across Windows, macOS, and Linux platforms",
        "Provided technical support for AV installations in 20+ classrooms, labs, and conference rooms, facilitating seamless event operations with a 25% increase in setup efficiency using Jira for real-time request tracking.",
      ],
    },
  ];

  const projects = [
    {
      name: "TerpFinance",
      description:
        "A full-stack personal finance and budgeting app built with HTML, CSS, and JavaScript.",
      bullets: [
        "Led the team through product thinking, user research, and feature prioritization.",
        "Designed wireframes, prototypes, and interface mockups in Figma.",
        "Built features such as budget tracking, financial dashboards, and transaction management.",
      ],
    },
    {
      name: "DevConnect",
      description:
        "A full-stack networking platform for developers to build public profiles and connect through shared interests.",
      bullets: [
        "Built secure authentication with bcrypt and MongoDB.",
        "Developed backend logic using Node.js and Express with RESTful routes.",
        "Integrated GitHub API data and created a responsive UI across devices.",
      ],
    },
  ];

  const skills = {
    product: [
      "Product Design",
      "UI/UX",
      "Product Strategy",
      "Roadmapping",
      "User Research",
      "Agile",
      "Technical Product Management",
    ],
    technical: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "SQL",
      "Python",
      "Java",
    ],
    tools: ["Figma", "Power BI", "Drupal", "GitHub", "Microsoft Office"],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Arik Hasan
            </h1>
            <p className="text-sm text-slate-400">Aspiring Product Manager</p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200"
  >
    Resume
  </a>

  <a
    href="#summary"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200"
  >
    Summary
  </a>

  <a
    href="#about"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200"
  >
    About
  </a>

  <a
    href="#experience"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
  >
    Experience
  </a>

  <a
    href="#skills"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200"
  >
    Skills
  </a>

  <a
    href="#projects"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
  >
    Projects
  </a>

  <a
    href="#contact"
    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200"
  >
    Contact
  </a>
</div>
        </div>
      </nav>

     <section
  id="summary"
  className="scroll-mt-28 mx-auto grid max-w-6xl items-start gap-8 px-6 py-10 md:grid-cols-[1.2fr_.8fr] md:py-12"
>
        <div className="space-y-6">
          <img
            src={arikPhoto}
            alt="Arik Hasan"
            className="h-44 w-44 rounded-full object-cover border-4 border-white/20 shadow-xl"
          />

          <div className="space-y-4">
            <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
              Summary
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-200 md:text-xl">
              I'm Arik, a Computer Science student at the University of Maryland,
              College Park, graduating in December 2026. I'm passionate about
              building user-focused products at the intersection of technology
              and business, with a strong interest in product management and
              creating intuitive, impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10">
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Currently
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Technology Product Intern
              </h3>
              <p className="text-slate-300">FINRA</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Open to</p>
                <p className="mt-1 font-medium">Product Management roles</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">University</p>
                <p className="mt-1 font-medium">University of Maryland</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Major / Minor</p>
                <p className="mt-1 font-medium">
                  Computer Science, General Business
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Graduation</p>
                <p className="mt-1 font-medium">Dec 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 text-center md:text-left">
          <p className="text-base uppercase tracking-[0.25em] text-cyan-300">
            About
          </p>
          <h3 className="mt-3 text-3xl font-semibold">
            Product-focused mindset with technical depth
          </h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            I combine product thinking, technical execution, and structured
            problem solving to build impactful products. My experience spans
            leading product-driven projects, translating user needs into
            features, and working across design, engineering, and business
            contexts to deliver results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-400/15">
            <h4 className="text-xl font-semibold text-white">
              User & Market Insight
            </h4>
            <p className="mt-3 leading-7 text-slate-200">
              Experience conducting user research, identifying pain points, and
              translating insights into actionable product decisions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-slate-900/75 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h4 className="text-xl font-semibold text-white">
              Product Execution
            </h4>
            <p className="mt-3 leading-7 text-slate-200">
              Skilled at turning ideas into shipped features through
              prioritization, wireframing, and working closely with engineering.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-slate-900/75 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h4 className="text-xl font-semibold text-white">
              Cross-functional Leadership
            </h4>
            <p className="mt-3 leading-7 text-slate-200">
              Comfortable aligning stakeholders, leading discussions, and
              ensuring teams stay focused on delivering value.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-slate-900/75 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900/90">
            <h4 className="text-xl font-semibold text-white">
              Analytical Decision-Making
            </h4>
            <p className="mt-3 leading-7 text-slate-200">
              Strong foundation in data-driven thinking, using metrics and
              structured reasoning to guide product decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
            Experience
          </p>
          <h3 className="mt-3 text-3xl font-semibold">
            What I’ve been working on
          </h3>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h4 className="text-2xl font-semibold">{item.role}</h4>
                  <p className="text-slate-300">{item.company}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
            Skills & Background
          </p>
          <h3 className="mt-3 text-3xl font-semibold">Core strengths</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-xl">
            <h4 className="mb-4 text-xl font-semibold text-white">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Introduction to Product Management",
                "Human-Computer Interaction",
                "Product Design with Figma",
                "Database Design",
                "Web Development",
                "Object-Oriented Programming",
                "Computer Systems",
                "Android App Development",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/20 bg-slate-900/90 px-3 py-1.5 text-sm text-slate-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/15 hover:text-cyan-100"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-xl">
            <h4 className="mb-4 text-xl font-semibold text-white">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Aha! Product Management Professional Certificate",
                "Building a Product Strategy",
                "Building a Product Roadmap",
                "Product Management: Customer Development",
                "Technical Product Management",
                "Introduction to Artificial Intelligence (AI)",
                "Python IT Specialist Certificate",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/20 bg-slate-900/90 px-3 py-1.5 text-sm text-slate-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/15 hover:text-cyan-100"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, values]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/20 bg-slate-900/75 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900/90"
            >
              <h4 className="mb-4 text-xl font-semibold capitalize text-white">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {values.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/20 px-3 py-1 text-sm text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/15 hover:text-cyan-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <p className="text-base uppercase tracking-[0.2em] text-cyan-300">
            Projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 shadow-xl shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:from-cyan-400/10 hover:to-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-semibold">{project.name}</h4>
                  <p className="mt-2 text-slate-300">{project.description}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-10 text-center shadow-2xl shadow-cyan-500/10">
          <p className="text-base uppercase tracking-[0.2em] text-cyan-100">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-semibold">Let’s connect</h3>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
            I'm interested in product management, technology, and opportunities
            where I can help build thoughtful user experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:arikhasan16@gmail.com"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              arikhasan16@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/arik-hasan"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/arikhasan2210"
              className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
