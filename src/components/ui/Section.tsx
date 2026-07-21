import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg";
};

export default function Section({
  id,
  children,
  className = "",
  spacing = "lg",
}: SectionProps) {
  const spacingClass = {
    sm: "py-16 lg:py-20",
    md: "py-20 lg:py-24",
    lg: "py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={`relative ${spacingClass[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}