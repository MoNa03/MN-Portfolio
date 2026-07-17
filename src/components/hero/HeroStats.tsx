import hero from "../../data/hero";
import StatCard from "../ui/StatCard";
import { motion } from "framer-motion";

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {hero.stats.map((item) => (
        <StatCard
          key={item.label}
          value={item.value}
          label={item.label}
        />
      ))}
    </motion.div>
  );
}