export interface Technology {
  name: string;
  category:
    | "Automotive"
    | "Embedded"
    | "Programming"
    | "Cloud & DevOps"
    | "AI"
    | "Delivery";
}

const technologies: Technology[] = [
  // Automotive
  { name: "AUTOSAR", category: "Automotive" },
  { name: "ISO 26262 & ISO21434", category: "Automotive" },

  // Embedded
  { name: "Embedded Systems", category: "Embedded" },
  { name: "RTOS", category: "Embedded" },

  // Programming
  { name: "C", category: "Programming" },
  { name: "Python", category: "Programming" },

  // Cloud & DevOps
  { name: "DevOps", category: "Cloud & DevOps" },
  { name: "SVN", category: "Cloud & DevOps" },
  { name: "GitHub", category: "Cloud & DevOps" },
  { name: "CI/CD", category: "Cloud & DevOps" },

  // AI
  { name: "AI", category: "AI" },
  { name: "Generative AI", category: "AI" },
  { name: "LLMs", category: "AI" },

  // Delivery
  { name: "Agile", category: "Delivery" },
  { name: "Scrum", category: "Delivery" },
  { name: "PMP®", category: "Delivery" },
];

export default technologies;