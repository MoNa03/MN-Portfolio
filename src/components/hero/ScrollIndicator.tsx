import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-16 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400"
    >
      <span className="text-xs uppercase tracking-[0.9em]">
        Scroll
      </span>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </motion.a>
  );
}