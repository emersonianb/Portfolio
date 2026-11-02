"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bot, Menu, Moon, Sun, X } from "lucide-react";
import { ChatAssistant } from "./chat-assistant";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Research", "/research"],
  ["Contact", "/contact"]
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light") setLight(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  }, [light]);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">E.</span>
            <span>EMERSON SOUSA<span className="brand-sub">AI ENGINEERING & RESEARCH</span></span>
          </Link>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" aria-label="Toggle color theme" onClick={() => setLight(!light)}>
              {light ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <Link className="nav-cta" href="/contact">Let's talk <span>↗</span></Link>
            <button className="icon-button mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Emerson Sousa</span>
          <span>Designed around curiosity, engineering and impact.</span>
          <a href="https://github.com/emersonianb" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
      <ChatAssistant />
      <button className="ask-floating" onClick={() => window.dispatchEvent(new Event("open-portfolio-chat"))}>
        <Bot size={17} /> Ask about me
      </button>
    </>
  );
}
