import experience from "../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">

      {/* Vertical Timeline */}
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-500/40 via-cyan-400/20 to-transparent" />

      <div className="space-y-16">

        {experience.map((job) => (
          <div
            key={job.id}
            className="relative flex gap-8"
          >

            {/* Timeline Node */}
            <div className="relative z-10 mt-8 h-10 w-10 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/40" />

            {/* Card */}
            <div className="flex-1">
              <ExperienceCard experience={job} />
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}