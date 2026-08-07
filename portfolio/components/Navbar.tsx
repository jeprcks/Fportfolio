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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.32em] text-white" data-cursor>
          JB
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
              data-cursor
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          data-cursor
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
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
          <div className="mt-6 flex items-center gap-4">
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
