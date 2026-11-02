import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Download, ExternalLink, Menu, MonitorSmartphone, Play, X } from "lucide-react";
import { portfolio, Project } from "@/data/portfolio";
import ProjectDossierPanel from "@/components/ProjectDossierPanel";
import SkillSymbol from "@/components/SkillSymbol";
import SocialLinkCard from "@/components/SocialLinkCard";

const SpatialScene = lazy(() => import("@/components/spatial/SpatialScene"));
const sections = [
  { id: "home", label: "Identity" }, { id: "about", label: "Profile" }, { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" }, { id: "experience", label: "Experience" }, { id: "archive", label: "Archive" }, { id: "contact", label: "Contact" },
];

function useMedia(query: string) {
  const [matches, setMatches] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => { const media = window.matchMedia(query); const update = () => setMatches(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update); }, [query]);
  return matches;
}

function SectionHeading({ code, title, note }: { code: string; title: string; note: string }) {
  return <header className="section-heading"><p className="record-label">{code}</p><h2>{title}</h2><p>{note}</p></header>;
}

export default function PortfolioExperience() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reducedMotion = useMedia("(prefers-reduced-motion: reduce)");
  const compact = useMedia("(max-width: 760px), (max-resolution: 1dppx)");

  useEffect(() => {
    document.title = "Shreya Agrawal — Software Engineer";
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveSection(id); }, { rootMargin: "-38% 0px -50%", threshold: 0 });
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const activeIndex = useMemo(() => Math.max(0, sections.findIndex((item) => item.id === activeSection)), [activeSection]);
  return <div className="portfolio-shell">
    <a className="skip-link" href="#main-content">Skip to portfolio content</a>
    {!reducedMotion && <div className="scene-layer" aria-hidden="true"><Suspense fallback={<div className="scene-loading" />}><SpatialScene activeSection={activeSection} reducedMotion={reducedMotion} compact={compact} /></Suspense></div>}
    <div className="ambient-grid" aria-hidden="true" />
    <nav className="site-nav" aria-label="Portfolio sections">
      <a href="#home" className="site-mark"><span>SA</span><span className="site-mark__word">SHREYA.AGRAWAL</span></a>
      <div className="site-status"><span className="status-dot" />AVAILABLE FOR OPPORTUNITIES</div>
      <button type="button" className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="portfolio-menu">{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span>Index</span></button>
      <div id="portfolio-menu" className={`nav-index ${menuOpen ? "nav-index--open" : ""}`}>
        {sections.map((item, index) => <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "active" : ""} aria-current={activeSection === item.id ? "location" : undefined} onClick={() => setMenuOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}
      </div>
    </nav>
    <aside className="section-rail" aria-hidden="true"><span>{String(activeIndex + 1).padStart(2, "0")}</span><div>{sections.map((item) => <i key={item.id} className={item.id === activeSection ? "active" : ""} />)}</div><span>{String(sections.length).padStart(2, "0")}</span></aside>
    <main id="main-content">
      <section id="home" className="hero-section spatial-section" data-section="home">
        <div className="hero-copy"><p className="record-label">PERSONNEL DOSSIER · 2026</p><p className="hero-role">{portfolio.identity.role}</p><h1>{portfolio.identity.name}</h1><p className="hero-intro">{portfolio.identity.intro}</p><div className="chip-row">{portfolio.identity.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div><div className="hero-actions"><a className="action-link action-link--primary" href="#projects">Review selected work<ArrowDown aria-hidden="true" /></a><a className="action-link" href={portfolio.resumeUrl} download="Shreya_Agrawal_Resume.pdf"><Download aria-hidden="true" />Resume</a></div></div>
        <div className="hero-coordinate" aria-hidden="true"><span>ORBITAL IDENTITY / ACTIVE</span><span>SCROLL TO NAVIGATE</span></div>
      </section>

      <section id="about" className="spatial-section content-section"><div className="content-frame content-frame--right"><SectionHeading code="RECORD 01 / PROFILE" title="A builder across systems." note="Profile and education dossier" /><article className="dossier dossier--large"><div className="dossier-meta"><span>PROFILE</span><span>SOFTWARE / AI</span></div>{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="education-record"><div><span className="record-label">EDUCATION</span><h3>{portfolio.education.school}</h3><p>{portfolio.education.degree}</p></div><time>{portfolio.education.period}</time></div></article></div></section>

      <section id="skills" className="spatial-section content-section"><div className="content-frame"><SectionHeading code="RECORD 02 / TECHNICAL ENVIRONMENT" title="Tools arranged by responsibility." note="Readable technical clusters, not a badge cloud" /><div className="skill-grid">{portfolio.skills.map((category, index) => <article className="skill-cluster" key={category.category}><div className="skill-cluster__index">{String(index + 1).padStart(2, "0")}</div><h3>{category.category}</h3><ul>{category.skills.map((skill) => <SkillSymbol key={skill} skill={skill} />)}</ul></article>)}</div></div></section>

      <section id="projects" className="spatial-section content-section"><div className="content-frame content-frame--wide"><SectionHeading code="RECORD 03 / SELECTED PROJECTS" title="Detailed work, opened like evidence." note="Select a dossier to inspect its verified details" /><div className="project-wall">{portfolio.projects.map((project, index) => <button type="button" className="project-record" key={project.id} onClick={() => setSelectedProject(project)}><span className="project-record__number">P-{String(index + 1).padStart(2, "0")}</span><span><span className="record-label">{project.event}</span><strong>{project.title}</strong><span className="project-record__summary">{project.description}</span></span><ArrowUpRight aria-hidden="true" /></button>)}</div><div className="featured-work">{portfolio.featuredWork.map((work) => <article className="featured-work__card" key={work.title}><div><span className="record-label">{work.label}</span><h3>{work.title}</h3></div><div className="featured-work__actions">{work.links.map((link) => <a className="action-link" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.kind === "video" ? <Play aria-hidden="true" /> : <MonitorSmartphone aria-hidden="true" />}{link.label}</a>)}</div></article>)}</div></div></section>

      <section id="experience" className="spatial-section content-section"><div className="content-frame content-frame--right"><SectionHeading code="RECORD 04 / EXPERIENCE" title="A timeline of shipped systems." note="Professional and project experience" /><div className="timeline">{portfolio.experience.map((role, index) => <article className="timeline-entry" key={`${role.company}-${role.title}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-entry__content"><div className="timeline-entry__top"><div><span className="record-label">{role.type}</span><h3>{role.title}</h3>{role.link ? <a href={role.link} target="_blank" rel="noreferrer">{role.company}<ArrowUpRight aria-hidden="true" /></a> : <p className="company">{role.company}</p>}</div><time>{role.period}</time></div><ul className="record-list">{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{role.workLinks && <div className="experience-work-links">{role.workLinks.map((link) => <a className="action-link" key={link.url} href={link.url} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />{link.label}</a>)}</div>}</div></article>)}</div></div></section>

      <section id="archive" className="spatial-section content-section"><div className="content-frame content-frame--wide"><SectionHeading code="RECORD 05 / ARCHIVE" title="Research and competitive milestones." note="Verified publication and hackathon records" /><article className="research-record"><div><span className="record-label">RESEARCH PUBLICATION</span><h3>{portfolio.research.title}</h3><p>{portfolio.research.description}</p><p className="research-meta">{portfolio.research.meta}</p></div><div className="chip-row">{portfolio.research.topics.map((topic) => <span className="chip" key={topic}>{topic}</span>)}</div></article><div className="achievement-grid">{portfolio.achievements.map((achievement, index) => <article className="achievement-record" key={achievement.title}><span className="achievement-record__index">A-{String(index + 1).padStart(2, "0")}</span><span className="record-label">{achievement.level} · {achievement.date}</span><h3>{achievement.title}</h3><strong>{achievement.rank}</strong><p>{achievement.description}</p><footer><span>{achievement.team}</span><span>{achievement.organizer}</span></footer></article>)}</div></div></section>

      <section id="contact" className="spatial-section contact-section"><div className="contact-copy"><p className="record-label">FINAL RECORD / CONTACT PORTAL</p><h2>Build something useful together.</h2><p>Open to full-stack, backend, mobile, and AI/ML opportunities</p><a className="email-link" href="mailto:agrawalshreya532@gmail.com">agrawalshreya532@gmail.com<ArrowUpRight aria-hidden="true" /></a><div className="contact-grid">{portfolio.contacts.filter((contact) => contact.label !== "Email").map((contact) => <SocialLinkCard key={contact.label} contact={contact} />)}</div></div><footer className="site-footer"><span>SHREYA AGRAWAL · SOFTWARE ENGINEER</span><a href="#home">Return to identity <ArrowDown className="rotate-180" aria-hidden="true" /></a></footer></section>
    </main>
    <ProjectDossierPanel project={selectedProject} open={Boolean(selectedProject)} onOpenChange={(open) => { if (!open) setSelectedProject(null); }} />
  </div>;
}
