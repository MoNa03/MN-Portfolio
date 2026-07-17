import hero from "../../data/hero";
import Badge from "../ui/Badge";

export default function HeroBadges() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {hero.badges.map((badge) => (
        <Badge key={badge}>
          {badge}
        </Badge>
      ))}
    </div>
  );
}