import Link from "next/link";
import { ArrowUpRight, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return <div className="page container">
    <SectionHeading eyebrow="ABOUT ME / 01" title="The person behind the code." description="A little about my background, academic path and the questions that drive my work."/>
    <div className="about-layout">
    <div className="about-photo-wrap">
      <div className="about-photo">
        <img src="/profile2.jpeg" alt="Emerson Sousa" />
      </div>
      <div className="photo-note">
        <MapPin size={5} /> Coimbra, Portugal <small>· {new Date().getFullYear()}</small>
      </div>
    </div>
    <div className="about-text"><span className="eyebrow">HELLO, I'M EMERSON</span><h2>Computer Engineering student interested in the <em>human side of AI.</em></h2><p>{profile.about}</p><p>My academic experience includes work in Brazil and an international mobility period at the University of Coimbra. These experiences helped me explore different areas of computing and develop a broader perspective on research and software development.</p><p>I am particularly interested in building AI systems that are technically sound, useful in practice and designed around real human needs.</p><div className="about-facts"><div><span>01</span><b>Engineering mindset</b><small>Software, systems and implementation</small></div><div><span>02</span><b>Research curiosity</b><small>Experimentation, evaluation and learning</small></div><div><span>03</span><b>Human impact</b><small>Technology designed around people</small></div></div></div>
    </div>
    <section className="subsection"><SectionHeading eyebrow="ACADEMIC BACKGROUND / 02" title="Education & academic journey"/><div className="timeline">{profile.education.map((item, i)=><article key={item.institution} className="timeline-item"><div className="timeline-icon"><GraduationCap size={19}/></div><div><span className="eyebrow">0{i+1} / EDUCATION</span><h3>{item.institution}</h3><b>{item.program}</b><p>{item.detail}</p><small>{item.note}</small></div></article>)}</div></section>
    <section className="subsection"><SectionHeading eyebrow="AREAS OF INTEREST / 03" title="Questions I keep exploring"/><div className="interest-cloud">{profile.interests.map(x=><span key={x}><BookOpen size={15}/>{x}</span>)}</div></section>
    <div className="section-link"><Link href="/research">Explore my research <ArrowUpRight size={17}/></Link></div>
  </div>;
}
