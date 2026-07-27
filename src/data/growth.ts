import {
  Award,
  GitBranch,
  BrainCircuit,
  BookOpen,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Growth {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
}

const growth: Growth[] = [
  {
    id: "certifications",

    title: "Professional Credentials",

    icon: Award,

    summary:
      "Industry-recognized certifications demonstrating leadership in project management, agile delivery, and AI-enabled program management.",

    items: [
      "PMP®",
      "PMI-CPMAI™",
      "SAFe®",
      "Scrum",
    ],
  },

  {
    id: "opensource",

    title: "Open Source & Community",

    icon: GitBranch,

    summary:
      "Active contributor to open-source embedded software with experience in Zephyr RTOS board enablement and upstream collaboration.",

    items: [
      "Zephyr RTOS",
      "Board Porting",
      "GitHub PRs",
      "BSP Development",
    ],
  },

  {
    id: "ai",

    title: "AI Engineering",

    icon: BrainCircuit,

    summary:
      "Exploring AI-assisted engineering, embedded intelligence, local LLMs, and computer vision to accelerate software development.",

    items: [
      "LLMs",
      "Raspberry Pi",
      "OpenCV",
      "Automation",
    ],
  },

  {
    id: "learning",

    title: "Continuous Learning",

    icon: BookOpen,

    summary:
      "Committed to continuous learning across automotive software engineering, functional safety, cybersecurity, and emerging technologies.",

    items: [
      "ASPICE",
      "AUTOSAR",
      "Functional Safety - ISO 26262",
      "Cybersecurity - ISO 21434",
    ],
  },
];

export default growth;