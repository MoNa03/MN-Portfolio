import Button from "../ui/Button";
import hero from "../../data/hero";
import profile from "../../data/profile";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {/* Primary */}
      <Button href="#experience">
        {hero.buttons.primary}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {/* Contact */}
      <Button variant="secondary" href="#contact">
        <Mail className="mr-2 h-5 w-5" />
        {hero.buttons.secondary}
      </Button>

      {/* Resume */}
      <Button variant="secondary" href={profile.resume}>
        <Download className="mr-2 h-5 w-5" />
        {hero.buttons.third}
      </Button>

    </div>
  );
}