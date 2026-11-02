"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export default function ProjectsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filtered = useMemo(() =>
  projects.filter(p => {
    const searchableText = [
      p.title,
      p.subtitle,
      p.summary,
      ...(p.technologies || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return (
      (category === "All" || p.category === category) &&
      searchableText.includes(query.toLowerCase())
    );
  }),
  [category, query]
);
  return <div className="page container">
    <SectionHeading eyebrow="PROJECT ARCHIVE / 01" title="A closer look at what I build." description="Research, experiments and products at the intersection of software engineering and artificial intelligence."/>
    <div className="project-controls"><div className="filter-tabs">{categories.map(c=><button key={c} className={category===c?"selected":""} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects or technologies..."/></label></div>
    <p className="result-count">{filtered.length} PROJECT{filtered.length===1?"":"S"} FOUND</p>
    <div className="project-grid">{filtered.map((project,i)=><ProjectCard key={project.slug} project={project} index={i}/>)}</div>
    {filtered.length===0&&<div className="empty-state">No projects match your search. Try another keyword.</div>}
  </div>;
}
