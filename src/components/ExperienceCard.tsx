import Badge from "./ui/Badge";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  //Building2,
  //CheckCircle2,
} from "lucide-react";

import Card from "./ui/Card";
import type { Experience } from "../data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card
        className="
            p-1
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:shadow-2xl
            hover:shadow-cyan-500/10
        "
        >
        {/* Header */}

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

          <div>
            <h3 className="text-2xl font-bold text-white">
              {experience.role}
            </h3>

            <p className="mt-1 text-xl font-semibold text-cyan-400">
                {experience.company}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-4 text-slate-400">

              {/* <div className="flex items-center gap-2">
                <Building2 size={16} />
                {experience.company}
              </div>*/}

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {experience.duration}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {experience.location}
              </div>

            </div>
          </div>

          <Badge>{experience.domain}</Badge>

        </div>

        {/* Summary */}

        <p className="mb-2 leading-8 text-slate-400">
          {experience.summary}
        </p>
 
        {/* Achievements */}
{/*
        <div className="mb-8">

          <h4 className="mb-4 text-lg font-semibold text-white">
            Key Achievements
          </h4>

          <div className="space-y-3">
            {experience.achievements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <p className="text-slate-400">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
*/}
        {/* Business Impact */}
{/* 
        <div className="mb-8">

          <h4 className="mb-4 text-lg font-semibold text-white">
            Business Impact
          </h4>

          <ul className="space-y-3">
            {experience.businessImpact.map((item) => (
              <li
                key={item}
                className="text-slate-400"
              >
                • {item}
              </li>
            ))}
          </ul>

        </div>

        {/* Technologies */}
{/* 
        <div>

          <h4 className="mb-4 text-lg font-semibold text-white">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">
            {experience.technologies.map((tech) => (
            <Badge key={tech}>
                {tech}
            </Badge>
            ))}
          </div>

        <div className="my-8 border-t border-white/10" />
        
        </div>
*/}
      </Card>
    </motion.div>
  );
}