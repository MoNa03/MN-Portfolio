import Card from "./ui/Card";
import { motion } from "framer-motion";

const stats = [
  {
    value: "16+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects Delivered",
  },
  {
    value: "Automotive",
    label: "Domain Expertise",
  },
  {
    value: "Embedded",
    label: "Software Systems",
  },
  {
    value: "AI",
    label: "Innovation",
  },
  {
    value: "Leadership",
    label: "Program Delivery",
  },
];

export default function ExecutiveSnapshot() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-2 gap-5"
    >
      {stats.map((stat, index) => (

        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            duration: 0.25,
            delay: index * 0.05,
          }}
          viewport={{ once: true }}
        >

          <Card
            className="
              flex
              min-h-[150px]
              flex-col
              items-center
              justify-center
              text-center
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              {stat.value}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {stat.label}
            </p>
          </Card>

        </motion.div>

      ))}
    </motion.div>
  );
}