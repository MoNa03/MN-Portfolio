import {
  Users,
  Briefcase,
  ShieldCheck,
  Handshake,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Leadership {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  tags: string[];
}

const leadership: Leadership[] = [
  {
    id: "delivery",
    title: "Global Program Delivery",
    icon: Briefcase,
    summary:
      "Led complex SDV, AUTOSAR and high-performance ECU software platform programs, delivering predictable releases through effective planning, execution, and cross-functional collaboration.",
    tags: [
      "Program Leadership",
      "SDV",
      "Agile",
      "AUTOSAR",
      "SAFe",
    ],
  },

  {
    id: "teams",
    title: "Cross-functional Leadership",
    icon: Users,
    summary:
      "Aligned architects, software engineers, validation teams, and customer stakeholders to deliver high-quality automotive software across distributed teams.",
    tags: [
      "Leadership",
      "Stakeholders",
      "Planning",
      "Execution",
      "Mentoring",
    ],
  },

  {
    id: "quality",
    title: "Engineering Excellence",
    icon: ShieldCheck,
    summary:
      "Promoted ASPICE-compliant development, technical reviews, quality improvements, and continuous engineering best practices.",
    tags: [
      "ASPICE",
      "Quality",
      "Process",
      "Continuous Improvement",
    ],
  },

  {
    id: "customer",
    title: "Customer Engagement",
    icon: Handshake,
    summary:
      "Built trusted relationships with OEMs and Tier-1 suppliers through transparent communication, risk management, and executive reporting.",
    tags: [
      "OEM",
      "Teir-1",
      "Communication",
      "Risk",
      "Executive Reporting",
    ],
  },

  {
    id: "innovation",
    title: "Innovation & AI",
    icon: Sparkles,
    summary:
      "Exploring AI-assisted engineering workflows, embedded intelligence, and modern software practices to improve productivity and software quality.",
    tags: [
      "AI",
      "Automation",
      "Embedded",
      "Innovation",
    ],
  },
];

export default leadership;