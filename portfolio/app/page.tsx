import CustomCursor from "@/components/CustomCursor";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import TechMarquee from "@/components/TechMarquee";
import { Mail, Github, Linkedin } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-slate-950 text-white">
      <CustomCursor />
      <Navbar />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 pb-24 pt-6 sm:px-10 lg:px-12">
        <Hero />
        <Stats />
        <About />
        <Services />
        <HowIWork />

        <section id="projects" className="space-y-8 py-16">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Projects</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected case studies</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <Skills />
        <Experience />

        <section id="contact" className="space-y-8 py-16">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">● Available for projects</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Have an idea?</h2>
            <h3 className="text-5xl font-bold uppercase leading-tight text-white sm:text-6xl">
              Let’s build it.
            </h3>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_45px_130px_-80px_rgba(15,23,42,0.95)] sm:p-12">
            <p className="max-w-2xl text-slate-300">
              Tell me what you’re thinking. I’ll help turn the idea into a digital experience.
            </p>
            <div className="mt-8 flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-slate-100">EMAIL</p>
                    <p className="font-semibold text-white">baclayjeffrey@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-slate-100">GITHUB</p>
                    <a
                      href="https://github.com/jeprcks"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                      github.com/jeprcks
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-slate-100">LINKEDIN</p>
                    <a
                      href="https://www.linkedin.com/in/john-jeffrey-baclay-53306b419/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                      John Jeffrey Baclay
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="mailto:baclayjeffrey@gmail.com"
                className="inline-flex h-14 items-center justify-center rounded-full bg-cyan-400 px-7 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                data-cursor
              >
                Let's make it happen →
              </a>
            </div>
          </div>
        </section>
      </div>

      <TechMarquee />
      <Footer />
    </main>
  );
}
