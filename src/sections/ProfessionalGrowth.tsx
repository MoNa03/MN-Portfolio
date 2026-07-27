import { motion } from "framer-motion";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import GrowthCard from "../components/GrowthCard";

import growth from "../data/growth";

export default function ProfessionalGrowth() {
  return (
    <Section id="growth"
      spacing="sm"
      className="bg-slate-900/20">

      <Container>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            PROFESSIONAL GROWTH
          </p>

          <h2 className="text-5xl font-bold">
            Professional Growth
            <span className="block text-cyan-400">
              Driven by Continuous Learning
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I believe great engineering leaders never stop learning. Every certification, contribution, 
            and experiment strengthens my ability to deliver innovative software solutions. 
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {growth.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <GrowthCard growth={item} />
            </motion.div>

          ))}
        <div className="mx-auto mt-1 mb-1 h-px w-320 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </div>
            <div className="mt-8 max-w-4xl mx-auto text-center">
                <p className="text-lg italic text-slate-400">
                    "I believe exceptional engineering leaders never stop learning.
                    Continuous growth enables better decisions, stronger teams,
                    and more impactful software."
                </p>
            </div>

      </Container>

    </Section>
  );
}