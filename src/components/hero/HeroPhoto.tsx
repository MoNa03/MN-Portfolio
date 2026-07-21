import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import Card from "../ui/Card";

import profile from "../../data/profile";
import photo from "../../assets/profile.jpg";

export default function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="overflow-hidden p-5">
        <img
          src={photo}
          alt={profile.name}
          className="rounded-2xl"
        />

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-white">
            {profile.name}
          </h2>

          <p className="mt-2 text-slate-400">
            {profile.title}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} />
            Munich, Germany
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.25, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2.5 w-2.5 rounded-full bg-emerald-400"
          />

          <span className="text-sm font-medium text-emerald-300">
            Open to Leadership Opportunities • Germany | UK | USA | India
          </span>

        </div>
        </div>
      </Card>
    </motion.div>
  );
}