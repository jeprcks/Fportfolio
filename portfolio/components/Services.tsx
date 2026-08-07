"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">What I Can Build</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Services for business growth and digital products</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_80px_-55px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/90"
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
    </section>
  );
}
