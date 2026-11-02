import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, FlaskConical, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile, projects } from "../lib/portfolio";
import { ProjectCard } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";

export default function Home() {
  const featured = projects.filter(p => p.featured);
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="availability"><span /> OPEN TO AI ENGINEERING & RESEARCH OPPORTUNITIES</div>
          <p className="eyebrow">COMPUTER ENGINEERING · ARTIFICIAL INTELLIGENCE</p>
          <h1>Building intelligent systems <em>that solve real problems.</em></h1>
          <p className="hero-description">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/projects">Explore my work <ArrowUpRight size={17} /></Link>
            <Link className="button-secondary" href="/about">More about me</Link>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-frame">
            <Image src="/profile.jpeg" alt="Portrait of Emerson Sousa" fill priority className="profile-photo" />
          </div>
          <div className="profile-caption"><span>01 / THE PERSON BEHIND THE PROJECTS</span><span>Portugal · {new Date().getFullYear()}</span></div>
          <div className="floating-note"><Sparkles size={16}/><span>Curiosity-driven<br/><b>engineering</b></span></div>
        </div>
        <a className="scroll-cue" href="#selected-work"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="ticker"><div>AGENTIC AI <span>✳</span> MACHINE LEARNING <span>✳</span> NLP <span>✳</span> HUMAN-CENTERED AI <span>✳</span> LLM ENGINEERING <span>✳</span> AGENTIC AI <span>✳</span></div></section>

      <section className="section container" id="selected-work">
        <SectionHeading eyebrow="SELECTED WORK / 01" title="Ideas turned into intelligent systems." description="A selection of academic research and software projects exploring how AI can be applied to real-world challenges." />
        <div className="project-grid">{featured.map((project, i) => <ProjectCard key={project.slug} project={project} index={i}/>)}</div>
        <div className="section-link"><Link href="/projects">View all projects <ArrowUpRight size={17}/></Link></div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <SectionHeading eyebrow="WHAT I WORK WITH / 02" title="From models to meaningful products." description="My interests connect the foundations of AI with the engineering required to turn them into useful applications."/>
          <div className="capability-grid">
            <article><BrainCircuit/><span>01</span><h3>Machine Learning</h3><p>Classification, model evaluation, data preparation and applied machine learning.</p></article>
            <article><Sparkles/><span>02</span><h3>LLM & Agentic Systems</h3><p>LLM-powered applications, agent workflows, retrieval and conversational systems.</p></article>
            <article><Code2/><span>03</span><h3>AI Engineering</h3><p>Building software around AI models through APIs, interfaces and practical integrations.</p></article>
            <article><FlaskConical/><span>04</span><h3>Human-Centered Research</h3><p>Investigating how intelligent systems can better support people and their goals.</p></article>
          </div>
        </div>
      </section>

      <section className="section container about-preview">
        <div className="about-preview-label"><span className="eyebrow">A LITTLE ABOUT ME / 03</span><span className="big-number">02—</span></div>
        <div><h2>Engineering is not only about making things work. It is about understanding <em>why they should exist.</em></h2><p>{profile.about}</p><Link className="text-link" href="/about">Get to know me <ArrowUpRight size={16}/></Link></div>
      </section>

      <section className="contact-band"><div className="container contact-band-inner"><div><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let's build something <em>meaningful.</em></h2></div><Link className="button-primary" href="/contact">Get in touch <ArrowUpRight size={17}/></Link></div></section>
    </>
  );
}
