"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useMemo, type MouseEvent } from "react";
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

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const badgeElements = useMemo(
    () =>
      badges.map((badge, index) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 + index * 0.05, ease: "easeOut" }}
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-sm"
        >
          {badge}
        </motion.div>
      )),
    []
  );

  return (
    <section id="home" className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/95 px-6 py-20 shadow-[0_100px_160px_-95px_rgba(15,23,42,0.85)] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-950/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
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
          className="relative w-full min-w-0 lg:flex-1"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_20%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:72px_72px] pointer-events-none" />
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/95 p-8 shadow-[0_50px_120px_-40px_rgba(15,23,42,0.8)]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="pointer-events-none absolute h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
              style={{ left: glowX, top: glowY }}
            />
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-36 w-36 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/15 blur-3xl"
              style={{ left: orbX, top: orbY }}
            />

            <div className="relative z-10 flex h-full flex-col justify-between gap-7 text-slate-100">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Interactive digital experience</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Interactive digital<br />experience
                </h2>
                <p className="max-w-md text-sm leading-7 text-slate-300">
                  A polished interface with motion, depth, and a modern visual rhythm that sells your product at first glance.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">{badgeElements}</div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.75)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/80 via-white/30 to-violet-300/80" />
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Live preview</p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-white">Orb-driven interface</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Fluid animation, floating badges, and subtle motion that feel premium.
                      </p>
                    </div>
                    <div className="relative h-24 w-24">
                      <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-1/2 top-3 h-14 w-14 -translate-x-1/2 rounded-full bg-cyan-400/20 border border-cyan-300/40 blur-2xl"
                      />
                      <motion.div
                        animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-8 top-14 h-3 w-3 rounded-full bg-cyan-400"
                      />
                      <motion.div
                        animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        className="absolute right-5 top-16 h-3 w-3 rounded-full bg-violet-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
