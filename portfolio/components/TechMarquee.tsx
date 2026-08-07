"use client";

import { motion } from "framer-motion";
import { techTags } from "@/data/portfolio";

export default function TechMarquee() {
  const repeatedTags = [...techTags, ...techTags];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.7)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.1),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(51,211,153,0.1),_transparent_30%)] pointer-events-none" />
      <motion.div
        className="flex min-w-[200%] items-center gap-8 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-slate-300"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.02 }}
      >
        {repeatedTags.map((tag, index) => (
          <span key={`${tag}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-slate-200">
            {tag}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
