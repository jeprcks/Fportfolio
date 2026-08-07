import { stats } from "@/data/portfolio";

export default function Stats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 text-white shadow-[0_35px_90px_-60px_rgba(15,23,42,0.8)]">
          <p className="text-4xl font-semibold tracking-tight text-cyan-300">{stat.label}</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">{stat.caption}</p>
        </div>
      ))}
    </section>
  );
}
