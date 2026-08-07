"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand your idea, goals, audience and requirements.",
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Plan the interface, experience and visual direction.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop a responsive, fast and scalable product.",
  },
  {
    number: "04",
    title: "LAUNCH",
    description: "Test, optimize and deliver the final experience.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">How I work</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">A clear process for launching modern products</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: index * 0.14, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.8)]"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              {step.number}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{step.description}</p>
            <div className="mt-8 text-xl text-cyan-300">↓</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
