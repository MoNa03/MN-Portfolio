import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-xl
        shadow-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        ${className}
      `}
    >
      {children}
    </div>
  );
}