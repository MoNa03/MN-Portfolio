const stats = [
  {
    value: "18+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects Delivered",
  },
  {
    value: "PMP®",
    label: "Certified",
  },
  {
    value: "AI",
    label: "Practitioner",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/40"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}