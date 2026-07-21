import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

import AboutSummary from "../components/AboutSummary";
import ExecutiveSnapshot from "../components/ExecutiveSnapshot";
import LeadershipQuote from "../components/LeadershipQuote";

export default function About() {
  return (
      <Section
        id="about"
        spacing="md"
        className="bg-slate-900/20"
      >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <Container>

        {/* Executive Profile */}

        <div className="grid items-start gap-16 lg:grid-cols-12">

          {/* Left */}

          <div className="space-y-12 lg:col-span-7">

            <AboutSummary />

            <LeadershipQuote />

          </div>

          {/* Right */}

          <div className="lg:col-span-5">

            <ExecutiveSnapshot />

          </div>

        </div>

      </Container>
    </Section>
  );
}