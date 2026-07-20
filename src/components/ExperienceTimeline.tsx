import { motion } from "framer-motion";

import experience from "../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">

      {/* Vertical Timeline */}
      <div className="
        absolute
        left-6
        top-0
        bottom-0
        w-px
        bg-gradient-to-b
        from-cyan-400
        via-cyan-400/30
        to-transparent
        "/>

      <div className="space-y-8">

        {experience.map((job) => (
        <motion.div
        key={job.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            duration: 0.6,
            ease: "easeOut",
        }}
        className="relative flex gap-8"
        >

            {/* Timeline Node */}
            <div className="relative z-10 mt-8 flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/40">
            <div className="h-3 w-3 rounded-full bg-white" />
            </div>

            {/* Card */}
            <div className="flex-1">
              <ExperienceCard experience={job} />
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}