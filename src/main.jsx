import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Jay Dhandhukiya",
  role: "Frontend Developer",
  location: "Jamnagar, Gujarat, India",
  phone: "+91 6356054514",
  email: "jaydhandhukiya683@gmail.com",
  linkedin: "https://linkedin.com/in/jaydhandhukiya",
  summary:
    "Frontend Developer with 3.5+ years of experience building responsive, scalable and user-focused web applications using React.js, Vue.js, Angular, JavaScript and TypeScript.",
};

const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { group: "Frontend", items: ["React.js", "Angular", "Vue.js", "Nuxt.js"] },
  { group: "UI & Styling", items: ["Material UI", "Tailwind CSS", "Bootstrap"] },
  { group: "API & Data", items: ["REST APIs", "Axios"] },
  { group: "Version Control", items: ["Git", "GitHub / GitLab"] },
  { group: "Tools", items: ["VS Code", "Postman", "JIRA", "ClickUp"] },
  {
    group: "Core Concepts",
    items: [
      "Responsive Design",
      "Reusable Components",
      "API Integration",
      "Cross-Browser Compatibility",
    ],
  },
];

const experiences = [
  {
    company: "Tech Integrity Services",
    role: "Frontend Developer",
    period: "Apr 2025 — Present",
    current: true,
    intro:
      "Working on a production-grade restaurant management product ecosystem spanning POS, management dashboards and customer-facing applications.",
    points: [
      "Developed reusable Vue.js components, responsive interfaces, business workflows and interactive features.",
      "Contributed to a Restaurant POS system supporting day-to-day operations and order-related workflows.",
      "Worked on restaurant management dashboards for staff and administrators.",
      "Contributed to the product design system through reusable components and standardized patterns.",
      "Used Git for collaborative feature development, code changes and branch management.",
    ],
  },
  {
    company: "Prism Technical Services",
    role: "Frontend Developer",
    period: "Jan 2023 — Mar 2025",
    intro:
      "Built and maintained responsive ERP and business-management applications across React and Angular.",
    points: [
      "Developed responsive applications using React.js, Angular, JavaScript, HTML, CSS, Bootstrap and Material UI.",
      "Worked on frontend architecture, reusable components, responsive layouts and REST API integrations.",
      "Standardized reusable UI patterns to improve consistency and maintainability.",
      "Handled data presentation, validation, user interactions and application workflows.",
      "Collaborated with backend developers and stakeholders to deliver production-ready features.",
    ],
  },
];

const projects = [
  {
    title: "Restaurant Management Platform",
    type: "Product Ecosystem",
    stack: ["Vue.js", "TypeScript", "JavaScript", "PHP Laravel"],
    description:
      "A connected restaurant product ecosystem covering POS, management dashboards and a customer-facing web application.",
    highlights: [
      "Restaurant POS workflows and order-related operations",
      "Reusable forms, tables, filters and interactive UI",
      "API integration and frontend data management",
      "Responsive customer-facing interfaces",
    ],
    link: "https://estore.wiyak.shop",
  },
  {
    title: "TMS — Transport Management System",
    type: "Business Application",
    stack: ["Angular", "Django", "SQL Server"],
    description:
      "A transport management application where I worked on Angular frontend development and API-connected business workflows.",
    highlights: [
      "Angular-based frontend development",
      "Django REST API integration",
      "Responsive UI with Bootstrap and Material UI",
    ],
    link: "https://tms.prismtechs.in",
  },
  {
    title: "Vekaria-ERP",
    type: "ERP Application",
    stack: ["React", "Django", "MySQL"],
    description:
      "ERP application frontend development focused on reusable interfaces and business workflows.",
    highlights: [
      "React-based frontend development",
      "Bootstrap and Material UI",
      "Backend API-connected screens and workflows",
    ],
    link: "https://vekaria-erp.prismtechs.in",
  },
  {
    title: "AwakenMindMaps",
    type: "Counselling Platform",
    stack: ["Angular", "Django", "MySQL"],
    description:
      "On-demand counselling booking website for scheduling therapy sessions with counsellors.",
    highlights: [
      "Designed UI according to client requirements",
      "REST API integration with Django",
      "Responsive experience across screen sizes",
    ],
    link: "https://awakenmindmaps.com",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark">JD</span>
            <span>Jay Dhandhukiya</span>
          </a>

          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a
              className="nav-cta"
              href={`mailto:${profile.email}?subject=Frontend%20Developer%20Opportunity`}
              onClick={closeMenu}
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              Frontend Developer · 3.5+ years
            </div>

            <h1>
              Building interfaces that feel
              <span> simple, fast & purposeful.</span>
            </h1>

            <p className="hero-text">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                <Mail size={17} /> Contact me
              </a>
            </div>

            <div className="quick-contact">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
              <span>•</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone size={16} /> {profile.phone}
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="card-topline">
              <span>PROFILE</span>
              <Code2 size={18} />
            </div>

            <div className="profile-initials">JD</div>

            <h3>Frontend Developer</h3>
            <p>
              React · Vue · Angular · TypeScript · JavaScript
            </p>

            <div className="mini-stats">
              <div>
                <strong>3.5+</strong>
                <span>Years experience</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Core frameworks</span>
              </div>
              <div>
                <strong>4+</strong>
                <span>Featured projects</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="marquee-band" aria-label="Technology highlights">
          <div className="marquee">
            <span>React.js</span><i>✦</i><span>Vue.js</span><i>✦</i>
            <span>Angular</span><i>✦</i><span>TypeScript</span><i>✦</i>
            <span>JavaScript</span><i>✦</i><span>REST APIs</span><i>✦</i>
            <span>Responsive UI</span><i>✦</i><span>Reusable Components</span>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionHeading
            eyebrow="01 / About"
            title="A frontend developer who thinks beyond the screen."
            text="My focus is not only writing UI code. I care about how a product behaves, scales and feels in real-world usage."
          />

          <div className="about-grid">
            <div className="about-main">
              <p>
                I work across modern frontend stacks and have experience
                translating business requirements into reliable, maintainable
                interfaces. My background includes ERP systems, business
                applications and a restaurant management product ecosystem.
              </p>
              <p>
                I enjoy component-driven development, API integration,
                responsive design, performance improvements and collaborating
                closely with backend developers and stakeholders.
              </p>
            </div>

            <div className="principles">
              <article>
                <Layers3 size={20} />
                <div>
                  <h3>Reusable by design</h3>
                  <p>Consistent components and patterns that make products easier to maintain.</p>
                </div>
              </article>
              <article>
                <Globe2 size={20} />
                <div>
                  <h3>Built for every screen</h3>
                  <p>Responsive interfaces across desktop, tablet and mobile experiences.</p>
                </div>
              </article>
              <article>
                <BriefcaseBusiness size={20} />
                <div>
                  <h3>Product focused</h3>
                  <p>Frontend decisions grounded in business workflows and actual user needs.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="container">
            <SectionHeading
              eyebrow="02 / Experience"
              title="Production experience, not just practice projects."
              text="A timeline of the roles and responsibilities that shaped my frontend development experience."
            />

            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item" key={experience.company}>
                  <div className="timeline-marker">
                    <span />
                  </div>

                  <div className="experience-card">
                    <div className="experience-head">
                      <div>
                        <span className="period">{experience.period}</span>
                        <h3>{experience.role}</h3>
                        <p className="company">{experience.company}</p>
                      </div>
                      {experience.current && <span className="current-badge">Current</span>}
                    </div>

                    <p className="experience-intro">{experience.intro}</p>

                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeading
            eyebrow="03 / Skills"
            title="The tools I use to turn requirements into products."
            text="A practical stack built through production development across different application types."
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.group}>
                <span className="skill-number">
                  {String(skills.indexOf(skill) + 1).padStart(2, "0")}
                </span>
                <h3>{skill.group}</h3>
                <div className="tag-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-dark">
          <div className="container">
            <SectionHeading
              eyebrow="04 / Selected work"
              title="Products I've contributed to."
              text="A selection of applications from ERP, counselling, transport and restaurant-management domains."
            />

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">0{index + 1}</div>

                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list project-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit project <ExternalLink size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="education-card">
            <div>
              <span className="eyebrow">05 / Education</span>
              <h2>Bachelor of Computer Application</h2>
              <p>Saurashtra University · SVET College, Jamnagar</p>
            </div>
            <span className="education-date">Jun 2020 — May 2023</span>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div>
              <span className="eyebrow">06 / Contact</span>
              <h2>Have a product to build?</h2>
              <p>
                I'm open to frontend opportunities where I can contribute to
                meaningful products and continue growing as an engineer.
              </p>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                <span>{profile.email}</span>
                <ArrowUpRight size={17} />
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone size={18} />
                <span>{profile.phone}</span>
                <ArrowUpRight size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                <span>linkedin.com/in/jaydhandhukiya</span>
                <ArrowUpRight size={17} />
              </a>
              {/* <div className="location-row">
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Jay Dhandhukiya</span>
          <span>Designed & built with React</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);