"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector<HTMLElement>(item.href));

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight * 0.2;
      let current = "#home";

      sections.forEach((section, index) => {
        if (!section) return;
        const top = section.offsetTop - offset;
        if (scrollY >= top) {
          current = navItems[index].href;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 lg:px-8">
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition pb-1 ${
                activeSection === item.href
                  ? "text-white border-b-2 border-cyan-300"
                  : "text-slate-300 border-b-2 border-transparent hover:text-white hover:border-cyan-300"
              }`}
              data-cursor
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute right-6 hidden items-center gap-4 lg:flex">
          <a
            href="https://github.com/jeprcks"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
            data-cursor
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/john-jeffrey-baclay-53306b419/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
            data-cursor
          >
            <Linkedin size={16} />
          </a>
        </div>

        <button
          type="button"
          className="absolute right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          data-cursor
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-slate-200 transition hover:text-white"
                onClick={() => setIsOpen(false)}
                data-cursor
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4 justify-center">
            <a
              href="https://github.com/jeprcks"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
              data-cursor
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/john-jeffrey-baclay-53306b419/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"
              data-cursor
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
