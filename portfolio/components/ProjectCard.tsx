"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);
  const [selectedImage, setSelectedImage] = useState<string | null>(project.previewImages?.[0] ?? null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.body);
  }, []);

  useEffect(() => {
    if (!isViewerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsViewerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isViewerOpen]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left - rect.width / 2;
    const py = event.clientY - rect.top - rect.height / 2;
    x.set(px / 10);
    y.set(py / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.8)] transition-transform duration-300 hover:-translate-y-1"
      whileHover={{ y: -6 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_24%)] opacity-80" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">{project.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ring-1 ring-white/10 ${project.live ? "bg-white/5 text-slate-300" : "bg-amber-500/10 text-amber-300 ring-amber-400/20"}`}>
            {project.live ? "Live Demo" : "Local Preview"}
          </span>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-5 shadow-inner shadow-slate-950/25">
          <div className="mb-4 flex items-center justify-between gap-3 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            </div>
            <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Case Study
            </span>
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">The problem</p>
              <p className="mt-2 text-slate-200">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">The solution</p>
              <p className="mt-2 text-slate-200">{project.solution}</p>
            </div>
          </div>
            {project.previewImages?.length ? (
              <div className="space-y-4">
                <div
                  className="overflow-hidden rounded-[1.75rem] border border-slate-800/90 bg-slate-950/95 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] cursor-pointer"
                  onClick={() => {
                    setSelectedImage(project.previewImages?.[0] ?? null);
                    setIsViewerOpen(true);
                  }}
                >
                  <img
                    src={project.previewImages[0]}
                    alt={`${project.name} preview`}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {project.previewImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="h-16 min-w-[90px] flex-0 cursor-pointer rounded-2xl border border-slate-800/90 object-cover transition hover:scale-[1.02]"
                      loading="lazy"
                      onClick={() => {
                        setSelectedImage(src);
                        setIsViewerOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-800/90 bg-slate-950/95 p-4 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-slate-800/70" />
                  <div className="h-3 rounded-full bg-slate-800/70 w-5/6" />
                  <div className="h-3 rounded-full bg-slate-800/70 w-3/4" />
                </div>
              </div>
            )}
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/90 px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-slate-800"
            data-cursor
          >
            <Github size={16} />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
              data-cursor
            >
              <ExternalLink size={16} />
              View Case Study
            </a>
          ) : (
            <div className="flex items-center gap-2 rounded-full border border-dashed border-slate-700 bg-slate-900/90 px-5 py-3 text-sm text-slate-500">
              <ArrowRight size={16} />
              Coming Soon
            </div>
          )}
        </div>
      </div>
      {isViewerOpen && selectedImage && portalElement
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
              onClick={() => setIsViewerOpen(false)}
            >
              <div
                className="relative max-h-full w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_0_120px_rgba(0,0,0,0.45)]"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-slate-100 transition hover:bg-slate-900"
                  onClick={() => setIsViewerOpen(false)}
                >
                  ×
                </button>
                <img
                  src={selectedImage}
                  alt={`${project.name} fullscreen preview`}
                  className="h-[70vh] w-full object-contain bg-slate-950"
                />
              </div>
            </div>,
            portalElement
          )
        : null}
    </motion.article>
  );
}
