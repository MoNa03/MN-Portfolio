import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import type { Growth } from "../data/growth";

type Props = {
  growth: Growth;
};

export default function GrowthCard({ growth }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="
          flex
          h-full
          flex-col
          rounded-2xl
          border
          border-white/10
          bg-slate-900/60
          p-6
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-slate-900/80
          hover:shadow-xl
          hover:shadow-cyan-500/10
        "
      >
        {/* Header */}

        <div className="mb-5 flex items-center gap-4">

          <div className="rounded-xl bg-cyan-500/10 p-3">

            <growth.icon
              className="h-7 w-7 text-cyan-400"
            />

          </div>

          <h3 className="text-xl font-bold">
            {growth.title}
          </h3>

        </div>

        {/* Summary */}

        <p className="text-sm leading-6 text-slate-400">
          {growth.summary}
        </p>

        {/* Items */}

        <div className="mt-auto space-y-3 pt-6">

          {growth.items.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <CheckCircle2
                className="h-4 w-4 text-cyan-400"
              />

              <span className="text-sm text-slate-300">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>
    </motion.div>
  );
}