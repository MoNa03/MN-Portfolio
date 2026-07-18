import technologies from "../data/technologies";
import Section from "./ui/Section";
import Container from "./ui/Container";

export default function TrustedTechnologies() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Core Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Delivering modern enterprise software
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Platforms, frameworks and tools I use to
            build, modernize and deliver scalable digital solutions.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/40
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:text-cyan-300
                "
              >
                {tech.name}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}