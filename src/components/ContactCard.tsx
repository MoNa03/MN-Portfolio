import type { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div
      className="
        flex
        items-center
        gap-5
        px-5
        py-4
        transition-all
        duration-300
        hover:bg-white/5
      "
    >
      {/* Icon */}

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
        {icon}
      </div>

      {/* Text */}

      <div className="flex-1">

        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-white">
          {value}
        </p>

      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={title === "Resume" ? "_self" : "_blank"}
        rel="noreferrer"
        className="block border-b border-white/10 last:border-b-0"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="border-b border-white/10 last:border-b-0">
      {content}
    </div>
  );
}