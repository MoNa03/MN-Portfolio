import Button from "../ui/Button";
import hero from "../../data/hero";
import profile from "../../data/profile";
import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-8">
      <Button>
        {hero.buttons.primary}
        <ArrowRight className="mr-2 h-5 w-5" />
      </Button>

      <Button variant="secondary" href={profile.resume}>
        <Download className="mr-2 h-5 w-5" />
        {hero.buttons.secondary}
      </Button>
    </div>
  );
}