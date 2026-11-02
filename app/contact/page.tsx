import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../../lib/portfolio";
import { SectionHeading } from "../../components/section-heading";

export default function ContactPage() {
  return <div className="page container contact-page">
    <SectionHeading eyebrow="CONTACT / 01" title="Let's start a conversation." description="Interested in AI engineering, research collaborations, interesting projects or opportunities? Feel free to reach out."/>
    <div className="contact-layout"><div><span className="eyebrow">GET IN TOUCH</span><h2>Good ideas start with a <em>conversation.</em></h2><p>I'm open to connecting with people working on Artificial Intelligence, Machine Learning, software engineering and human-centered technology.</p><a className="button-primary" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight size={17}/></a></div><div className="contact-links">
      <a href={`mailto:${profile.email}`}><span><Mail/></span><div><small>EMAIL</small><b>{profile.email}</b></div><ArrowUpRight/></a>
      <a href={profile.github} target="_blank" rel="noreferrer"><span><Github/></span><div><small>GITHUB</small><b>github.com/emersonianb</b></div><ArrowUpRight/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin/></span><div><small>LINKEDIN</small><b>Add your LinkedIn profile</b></div><ArrowUpRight/></a>
    </div></div>
    <p className="small-note">Before publishing, replace the placeholder email and LinkedIn URL in <code>lib/portfolio.ts</code>.</p>
  </div>;
}
