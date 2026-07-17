import { motion } from "framer-motion";

export default function Hero() {
  return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 text-cyan-400 text-lg font-medium">
          Hello, I'm
        </p>

        <h1 className="mb-6 text-6xl font-extrabold tracking-tight md:text-8xl">
          Mohan Nagaraj
        </h1>

        <h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
          Project Manager (PMP)® • Software Engineer • AI Enthusiast
        </h2>

        <h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
          Driving Software Delivery with Engineering Excellence & AI Innovation
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400">
          I lead cross-functional teams, build scalable software,
          and leverage AI to solve real-world business challenges.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400">
            View Projects
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}