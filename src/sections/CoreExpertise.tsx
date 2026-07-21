import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import CareerHighlightCard from "../components/CareerHighlightCard";

import {
  Car,
  Cpu,
  Users,
  BrainCircuit,
  Cloud,
  TrendingUp,
} from "lucide-react";

const highlights = [
  {
    icon: Car,
    title: "Automotive Software",
    description:
      "Delivered software solutions for connected, electric, and safety-critical automotive platforms.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Extensive experience designing scalable embedded software across multiple product generations.",
  },
  {
    icon: Users,
    title: "Technical Program Leadership",
    description:
      "Leading global engineering teams to deliver complex software programs from concept to production.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Digital Transformation",
    description:
      "Applying Generative AI to modern software engineering and engineering productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Driving cloud adoption, DevOps practices, automation, and continuous delivery.",
  },
  {
    icon: TrendingUp,
    title: "Delivery Excellence",
    description:
      "Consistently delivering high-quality software with predictable execution and measurable business impact.",
  },
];

export default function CoreExpertise() {
  return (
    <Section
      id="expertise"
      spacing="md"
      //className="bg-slate-950"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-2xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            CORE EXPERTISE
          </p>

          <h2 className="mb-2 text-5xl font-bold">
            Delivering Technology
            <span className="block text-cyan-400">
              with Business Impact
            </span>
          </h2>

          <p className="text-lg leading-8 text-slate-400">
            A combination of engineering excellence,
            technical leadership, and business execution
            developed through nearly two decades of
            software delivery.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <CareerHighlightCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}