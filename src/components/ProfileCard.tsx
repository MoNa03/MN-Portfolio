import profile from "../data/profile";
import photo from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      <div className="absolute -inset-10 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">

        <img
          src={photo}
          alt={profile.name}
          className="rounded-2xl"
        />

        <div className="mt-6">

          <h3 className="text-xl font-semibold">
            {profile.name}
          </h3>

          <p className="mt-1 text-slate-400">
            {profile.title}
          </p>

        </div>

      </div>
    </motion.div>
  );
}