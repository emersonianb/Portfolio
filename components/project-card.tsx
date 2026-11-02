
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({
  project,
  index = 0
}: {
  project: any;
  index?: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
      <div className="project-visual">

        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="project-cover"
          />
        ) : (
          <div className="project-visual-placeholder">
            <span>{project.title}</span>
          </div>
        )}

        <div className="project-visual-overlay" />

        <span className="visual-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="visual-category">
          {project.category}
        </span>

      </div>

      <div className="project-card-body">

        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>

        <h3>
          {project.title}
          <ArrowUpRight size={18} />
        </h3>

        <p className="project-subtitle">
          {project.subtitle}
        </p>

        <p>{project.summary}</p>

        <div className="tag-list">
          {project.technologies.slice(0, 4).map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

      </div>
    </Link>
  );
}
