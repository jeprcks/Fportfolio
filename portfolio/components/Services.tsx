"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/portfolio";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">What I Can Build</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Services for business growth and digital products</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_80px_-55px_rgba(15,23,42,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/90 ${
                activeIndex === index ? "lg:border-cyan-400/30 lg:bg-slate-900/95 lg:shadow-[0_45px_90px_-40px_rgba(34,211,238,0.18)]" : ""
              }`}
              data-cursor
            >
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-3xl bg-cyan-500/10 px-4 py-3 text-cyan-200">
                  <span className="text-sm font-semibold">0{index + 1}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-300" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          key={activeService.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_80px_-55px_rgba(15,23,42,0.9)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)] pointer-events-none" />
          <div className="relative z-10 flex h-full flex-col gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Live preview</p>
              <h3 className="text-3xl font-semibold text-white">{activeService.previewHeading}</h3>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              {activeService.previewPoints.map((point) => (
                <p key={point} className="text-sm leading-7">
                  • {point}
                </p>
              ))}
            </div>

            <div className="mt-auto rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-slate-300 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.8)]">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Preview mode</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Hover over a service to see how the design and motion change for that experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
