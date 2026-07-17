type Props = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/40
        p-8
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:bg-slate-900/70
        hover:scale-[1.02]
        hover:shadow-cyan-500/10
        hover:shadow-xl
      "
    >
      <h3 className="text-4xl font-bold text-cyan-400">
        {value}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>
    </div>
  );
}