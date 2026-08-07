export default function About() {
  return (
    <section id="about" className="space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Crafting modern digital experiences</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.8)]">
          <p className="text-lg leading-8 text-slate-300">
            I build polished front-end and full-stack solutions for businesses and digital products. With experience across web apps, e-commerce, and productivity tools, I focus on performance, responsive layouts, and thoughtful interactions.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Approach</p>
              <p className="mt-3 text-base text-slate-200">Purposeful UI, clear content hierarchy, and client-first storytelling.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focus</p>
              <p className="mt-3 text-base text-slate-200">Fast delivery, scalable code, and clean product experiences.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.8)]">
          <h3 className="text-xl font-semibold text-white">Core strengths</h3>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>• Frontend architecture with React, Next.js, and TypeScript</li>
            <li>• Clean, responsive UI built with Tailwind CSS</li>
            <li>• Backend integration and app flow with Node.js, Laravel, Firebase</li>
            <li>• Product-focused design, motion, and conversion-friendly visuals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
