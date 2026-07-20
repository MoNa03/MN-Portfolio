import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function Experience() {
  return (
    <Section id="experience" className="py-28">
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2 className="mb-6 text-5xl font-bold">
            Building Software
            <span className="block text-cyan-400">
              Across Industries
            </span>
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            Nearly two decades of experience delivering
            automotive, embedded, enterprise, and AI-driven
            software solutions while leading global engineering
            teams and complex technology programs.
          </p>

        </div>

        <ExperienceTimeline />

      </Container>
    </Section>
  );
}