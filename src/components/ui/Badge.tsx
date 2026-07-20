import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  const styles =
    variant === "primary"
      ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
      : "border-slate-700 bg-slate-900 text-slate-300";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}