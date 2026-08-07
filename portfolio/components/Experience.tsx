import { timeline } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Experience</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Career and project timeline</h2>
      </div>

      <div className="space-y-6">
        {timeline.map((item) => (
          <div key={item.title} className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_90px_-55px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-400">{item.company}</p>
              </div>
              <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">{item.period}</span>
            </div>
            <p className="mt-6 text-slate-400">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
