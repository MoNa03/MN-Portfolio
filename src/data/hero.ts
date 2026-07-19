import type { HeroData } from "../types/hero";

const hero: HeroData = {
  eyebrow: "Technical Program Manager",

  headline:
    "Building Intelligent Software That Delivers Business Value",

  subheadline:
    "Leading software delivery through strategic project management, engineering excellence, and AI innovation.",

  description:
    "I partner with organizations to deliver scalable software products, lead high-performing teams, and apply AI to solve complex business challenges.",

  badges: [
    "PMP®",
    "Agile",
    "Automotive",
    "AI",
    "Embedded",
    "Leadership",
  ],

  stats: [
    {
      value: "18+",
      label: "Years Experience",
    },
    {
      value: "20+",
      label: "Projects Delivered",
    },
    {
      value: "PMP®",
      label: "Certified",
    },
    {
      value: "AI",
      label: "Practitioner",
    },
  ],

  buttons: {
    primary: "Explore My Work",
    secondary: "Download Resume",
  },
};

export default hero;