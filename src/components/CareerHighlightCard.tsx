import { motion } from "framer-motion";
import Card from "./ui/Card";
import type { LucideIcon } from "lucide-react";

interface CareerHighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CareerHighlightCard({
  icon: Icon,
  title,
  description,
}: CareerHighlightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="h-full p-8 transition-all duration-300 hover:border-cyan-400/40">
        <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
          <Icon className="h-8 w-8 text-cyan-400" />
        </div>

        <h3 className="mb-4 text-2xl font-semibold">
          {title}
        </h3>

        <p className="leading-8 text-slate-400">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}