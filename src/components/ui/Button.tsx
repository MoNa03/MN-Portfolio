type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
      : "border border-slate-700 hover:border-cyan-400 hover:text-cyan-400";

  return <button className={`${base} ${styles}`}>{children}</button>;
}