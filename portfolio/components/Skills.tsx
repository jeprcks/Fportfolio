import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Technologies I Work With</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Skills and technology categories</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((category) => (
          <div key={category.title} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_90px_-55px_rgba(15,23,42,0.9)]">
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              {category.items.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
