import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

import HeroContent from "../components/hero/HeroContent";
import HeroPhoto from "../components/hero/HeroPhoto";
import HeroStats from "../components/hero/HeroStats";
import BackgroundEffects from "../components/hero/BackgroundEffects";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32">
       <BackgroundEffects />
      <Container>
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
    </Section>
  );
}