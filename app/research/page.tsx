
import { FileText, ArrowUpRight, ExternalLink } from "lucide-react";
import { research } from "../../lib/portfolio";
import { SectionHeading } from "../../components/section-heading";

export default function ResearchPage() {
  return (
    <div className="page container">

      <SectionHeading
        eyebrow="RESEARCH & WRITING / 01"
        title="Questions, methods and investigation."
        description="Academic work exploring applied AI, learning technologies and language processing."
      />

      <div className="research-intro">
        <p>
          Research is an important part of how I approach engineering.
          I am interested not only in building systems, but also in
          understanding how to evaluate them, where they fail and how
          they affect the people who use them.
        </p>
      </div>

      <div className="research-list">
        {research.map((item, i) => (
          <article className="research-item" key={item.title}>

            <div className="research-icon">
              <FileText size={21} />
            </div>

            <div className="research-content">

              <span className="eyebrow">
                0{i + 1} / {item.type}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="status-label">
                {item.status}
              </span>

              {item.pdf && (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-pdf-link"
                >
                  <FileText size={15} />
                  Read full paper
                  <ExternalLink size={14} />
                </a>
              )}

            </div>

            <ArrowUpRight
              className="research-arrow"
              size={20}
            />

          </article>
        ))}
      </div>

      <div className="research-note">
        <span className="eyebrow">
          PUBLICATIONS & DOCUMENTS
        </span>
        <h2>More material coming soon.</h2>
      </div>

    </div>
  );
}
