import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

import HeroContent from "../components/hero/HeroContent";
import HeroPhoto from "../components/hero/HeroPhoto";
import HeroStats from "../components/hero/HeroStats";
import BackgroundEffects from "../components/hero/BackgroundEffects";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import background from "../assets/backgrounds/engineering-blueprint.webp";

export default function Hero() {
  return (
      <Section
        spacing="lg"
        className="relative overflow-hidden bg-slate-950 pt-32"
      >
      {/* Blueprint Background */}
      {/* Engineering Background */}
      <div className="absolute inset-0 z-0">
      <img
        src={background}
        alt=""
        className="h-full w-full object-cover opacity-30"
      />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-slate-950/40" />

      {/* Existing animated glow */}
      <BackgroundEffects />
      
      {/* Hero */}
      <Container className="relative z-20">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>
          {/* Right */}
          <div className="flex justify-center lg:col-span-5">
            <HeroPhoto />
          </div>
        </div>
         <HeroStats />
      </Container>
      <ScrollIndicator />
    </Section>
  );
}