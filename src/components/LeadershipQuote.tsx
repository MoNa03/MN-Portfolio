import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Card from "./ui/Card";

export default function LeadershipQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="relative overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950">

        <Quote
          size={42}
          className="mb-6 text-cyan-400 opacity-80"
        />

        <blockquote className="text-2xl font-medium leading-10 text-slate-200">
          Technology creates possibilities.
          <br />
          <span className="text-cyan-400">
            Leadership transforms them into business value.
          </span>
        </blockquote>

        {/* <div className="mt-8">
          <p className="font-semibold text-white">
            Mohan Nagaraj
          </p>

          <p className="text-sm text-slate-400">
            Technical Program Manager
          </p>
        </div>*/}

        {/* Decorative Glow */}

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      </Card>
    </motion.div>
  );
}