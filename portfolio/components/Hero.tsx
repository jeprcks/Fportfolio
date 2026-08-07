"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const accentText = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-slate-100 to-violet-300";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/95 px-6 py-20 shadow-[0_100px_160px_-95px_rgba(15,23,42,0.85)] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-12 top-8 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 top-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-950/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroFade}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-lg uppercase tracking-[0.32em] text-cyan-300/80 sm:text-xl">John Jeffrey Baclay</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Frontend <span className={accentText}>
              & Full-Stack
            </span>{" "}
            Developer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-300 sm:text-xl">
            I turn ideas into interactive digital experiences. Building modern websites, web applications, e-commerce platforms, and digital products.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-cyan-400 px-8 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-30px_rgba(34,211,238,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              data-cursor
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              data-cursor
            >
              Let's Work Together
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-slate-300">
            <a
              href="https://github.com/jeprcks"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/15"
              data-cursor
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/john-jeffrey-baclay-53306b419/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/15"
              data-cursor
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative flex-1 min-w-[360px] lg:min-w-[460px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/95 px-8 py-10 shadow-[0_50px_120px_-40px_rgba(15,23,42,0.8)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_20%)]" />
            <div className="relative flex h-full flex-col justify-between gap-7 text-slate-100">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-[0_10px_30px_-20px_rgba(56,189,248,0.4)]">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Premium digital agency-inspired portfolio
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_-50px_rgba(15,23,42,0.75)] backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Creative product launch experience</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Projects built for modern businesses, SaaS, and digital experiences with premium motion design.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="min-h-[150px] rounded-[1.75rem] border border-white/10 bg-slate-950/90 px-5 py-7 text-slate-200 shadow-[0_15px_40px_-22px_rgba(15,23,42,0.8)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Interactive</p>
                  <p className="mt-3 text-xl font-semibold leading-8 text-white break-words whitespace-normal">
                    Cursor-aware motion
                  </p>
                </div>
                <div className="min-h-[150px] rounded-[1.75rem] border border-white/10 bg-slate-950/90 px-5 py-7 text-slate-200 shadow-[0_15px_40px_-22px_rgba(15,23,42,0.8)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focused</p>
                  <p className="mt-3 text-xl font-semibold leading-8 text-white break-words whitespace-normal">
                    Client-first visuals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
