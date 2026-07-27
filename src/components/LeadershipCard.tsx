import { motion } from "framer-motion";
import type { Leadership } from "../data/leadership";

type Props = {
  leadership: Leadership;
};

export default function leadershipCard({ leadership }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-l-4
            border-l-cyan-400
            bg-slate-900/60
            p-5
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-slate-900/80
            hover:border-cyan-400
            hover:shadow-2xl
            hover:shadow-cyan-500/20
        "
        >
            <div
                className="
                absolute
                -top-12
                -right-12
                h-36
                w-36
                rounded-full
                bg-cyan-500/10
                blur-3xl
                "
            />
        
        <div className="mb-5 flex items-center gap-4">

            <div className="rounded-xl bg-cyan-500/10 p-4">

                <leadership.icon
                className="h-7 w-7 text-cyan-400"
                />

            </div>

            <div>

                <h3 className="text-lg font-bold">
                {leadership.title}
                </h3>

            </div>

            </div>

        <hr className="my-4 border-white/5" />

        {/* Summary */}

        <p className="mt-5 text-sm leading-6 text-slate-400">
          {leadership.summary}
        </p>

        {/* Technologies */}

        <div className="mt-auto flex flex-wrap gap-2 pt-6">

          {leadership.tags.map((tech) => (

            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-500/10
                bg-cyan-500/10
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-cyan-300
              "
            >
              {tech}
            </span>

          ))}

        </div>

      </div>
    </motion.div>
  );
}

