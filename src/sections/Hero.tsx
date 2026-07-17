import profile from "../data/profile";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Glow from "../components/ui/Glow";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Section className="overflow-hidden pt-32">
      <Glow />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {profile.title}
            </p>

            <h2 className="mb-2 text-2xl font-semibold text-slate-200">
              {profile.name}
            </h2>

            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
              {profile.headline}
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-8 text-slate-400">
              {profile.subheadline}
            </p>

            <p className="mb-10 max-w-2xl leading-8 text-slate-500">
              {profile.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>
                🚀 {profile.buttons.primary}
              </Button>

              <Button variant="secondary">
                📄 {profile.buttons.secondary}
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="lg:col-span-5 flex justify-center">
            <ProfileCard />
          </div>

        </div>
      </Container>
    </Section>
  );
}