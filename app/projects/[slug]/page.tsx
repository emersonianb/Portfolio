
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink
} from "lucide-react";

import { projects } from "../../../lib/portfolio";
import { ProjectGallery } from "../../../components/ProjectGallery";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page container project-detail">

      <Link href="/projects" className="back-link">
        <ArrowLeft size={16} /> Back to all projects
      </Link>

      <div className="detail-hero">
        <span className="eyebrow">
          {project.category} · {project.year}
        </span>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
        <div className="detail-status">{project.status}</div>
      </div>

      <div className="detail-layout">
        <article className="detail-main">

          <section>
            <span className="eyebrow">01 / OVERVIEW</span>
            <h2>Project overview</h2>
            <p>{project.description}</p>
          </section>

          <section>
            <span className="eyebrow">02 / THE PROBLEM</span>
            <h2>Why this project?</h2>
            <p>{project.problem}</p>
          </section>

          <section>
            <span className="eyebrow">03 / APPROACH</span>
            <h2>How it works</h2>
            <ul className="detail-list">
              {(project.approach || []).map((x: string) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>

          <section>
            <span className="eyebrow">04 / CONTRIBUTIONS</span>
            <h2>Key contributions</h2>
            <ul className="detail-list">
              {(project.contributions || []).map((x: string) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>

          <section>
            <span className="eyebrow">05 / LIMITATIONS</span>
            <h2>Limitations & next steps</h2>
            <p>{project.limitations}</p>
          </section>

        </article>

        <aside className="detail-sidebar">

          <div className="side-card">
            <span className="eyebrow">TECH STACK</span>
            <div className="tag-list large">
              {(project.technologies || []).map((x: string) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>

          <div className="side-card">
            <span className="eyebrow">PROJECT LINKS</span>

            {project.github && (
              <a
                className="side-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={15} />
              </a>
            )}

            {project.demo && (
              <a
                className="side-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} /> Live demo <ArrowUpRight size={15} />
              </a>
            )}

            <p className="small-note">
              Replace placeholder links with the exact repository and demo for this project.
            </p>
          </div>

        </aside>
      </div>

      {/* PROJECT IMAGE GALLERY */}
      <ProjectGallery images={project.gallery} />

      <div className="next-project">
        <span className="eyebrow">KEEP EXPLORING</span>
        <Link href="/projects">
          Discover other projects <ArrowUpRight size={17} />
        </Link>
      </div>

    </div>
  );
}
