import { motion } from "framer-motion";

export default function AboutSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-8"
    >
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Executive Profile
        </p>

        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
          Engineering Leadership
          <span className="block text-cyan-400">
            with Business Impact
          </span>
        </h2>
      </div>

      <p className="text-lg leading-9 text-slate-400">
        I am a Technical Program Manager with over 16+ years of experience
        delivering enterprise, automotive, and embedded software solutions.
        My expertise spans software engineering, technical program management,
        digital transformation, and AI-driven innovation.
      </p>

      <p className="text-lg leading-9 text-slate-400">
        I enjoy bridging business strategy with engineering execution,
        enabling cross-functional teams to deliver scalable, high-quality
        software products that create measurable business value.
      </p>
    </motion.div>
  );
}