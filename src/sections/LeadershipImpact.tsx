import { motion } from "framer-motion";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import LeadershipCard from "../components/LeadershipCard";
import leadership from "../data/leadership";

export default function LeadershipImpact() {
  return (
    <Section id="leadership" className="py-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            LEADERSHIP IMPACT
          </p>

          <h2 className="text-5xl font-bold">
            Engineering Leadership
            <span className="block text-cyan-400">
              That Drives Business Value
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Delivering successful software programs requires more than technical
            expertise. My approach combines leadership, stakeholder alignment,
            engineering excellence, and continuous innovation to consistently
            deliver business outcomes.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <LeadershipCard leadership={item} />
            </motion.div>
          ))}
        <div className="mx-auto mt-1 mb-1 h-px w-320 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />  
        </div>
            <div className="mt-8 text-center">
                <p className="text-l text-slate-500">
                    These leadership capabilities have been developed through
                    global automotive software programs, cross-functional
                    collaboration, and continuous engineering improvement.
                </p>
            </div>
      </Container>
    </Section>
  );
}