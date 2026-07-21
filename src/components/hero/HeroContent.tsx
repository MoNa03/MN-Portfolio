import { motion } from "framer-motion";

import hero from "../../data/hero";
import profile from "../../data/profile";

import HeroButtons from "./HeroButtons";
import HeroBadges from "./HeroBadges";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {hero.eyebrow}
      </p>

      <h1 className="mb-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
        {hero.headline}
      </h1>

      <p className="mb-8 max-w-2xl text-xl leading-8 text-slate-300">
        {hero.subheadline}
      </p>

      <p className="mb-8 max-w-2xl leading-8 text-slate-400">
        {hero.description}
      </p>

      <p className="mb-8 text-lg font-bold text-slate-500">
        {profile.roles.join(" • ")}
      </p>

      <HeroBadges />

      <HeroButtons />
    </motion.div>
  );
}