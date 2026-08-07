import CustomCursor from "@/components/CustomCursor";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import TechMarquee from "@/components/TechMarquee";
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build your next digital product</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_45px_130px_-80px_rgba(15,23,42,0.95)] sm:p-12">
            <p className="max-w-2xl text-slate-300">
              I’m available for product launches, conversions-focused websites, and modern app experiences. Reach out to explore a premium partnership.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="mailto:jeprcks@gmail.com"
                className="inline-flex h-14 items-center justify-center rounded-full bg-cyan-400 px-7 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                data-cursor
              >
                Email Me
              </a>
              <a
                href="#home"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                data-cursor
              >
                Back to top
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
