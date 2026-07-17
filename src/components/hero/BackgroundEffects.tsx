import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/15
          blur-[90px]
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />
    </>
  );
}