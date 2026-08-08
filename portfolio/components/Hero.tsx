"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { type MouseEvent } from "react";
import { Github, Linkedin } from "lucide-react";

const accentText = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-slate-100 to-violet-300";
const badges = ["Next.js", "TypeScript", "React", "Tailwind CSS"];

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useTransform(mouseX, [0, 1], ["12%", "78%"]);
  const glowY = useTransform(mouseY, [0, 1], ["12%", "75%"]);
  const orbX = useTransform(mouseX, [0, 1], ["15%", "72%"]);
  const orbY = useTransform(mouseY, [0, 1], ["18%", "68%"]);
  const driftX = useTransform(mouseX, [0, 1], ["-10%", "10%"]);
  const driftY = useTransform(mouseY, [0, 1], ["-8%", "8%"]); 

  return (
    <section id="home" className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/95 px-6 py-20 shadow-[0_100px_160px_-95px_rgba(15,23,42,0.85)] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-950/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroFade}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full min-w-0 lg:max-w-2xl lg:flex-1"
        >
          <p className="text-lg uppercase tracking-[0.32em] text-cyan-300/80 sm:text-xl">John Jeffrey Baclay</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Frontend <span className={accentText}>& Full-Stack</span> Developer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-300 sm:text-xl">
            I turn ideas into interactive experiences that feel premium, polished, and built to convert.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-start">
            <a
              href="#projects"
              className="inline-flex w-full min-h-[56px] items-center justify-center rounded-full bg-cyan-400 px-8 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-30px_rgba(34,211,238,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              data-cursor
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex w-full min-h-[56px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              data-cursor
            >
              Let's Talk
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
          className="relative w-full min-w-0 lg:max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_20%)]" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-transparent p-0 shadow-[0_50px_120px_-40px_rgba(15,23,42,0.8)] lg:min-h-[460px]">
            <Image
              src="/files/gradpic/gradpic.jpg"
              fill
              alt="Gradpic background"
              className="object-cover object-center opacity-100"
              sizes="(max-width: 768px) 100vw, 423px"
            />
            <div className="absolute inset-0 bg-slate-950/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
