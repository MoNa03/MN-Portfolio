export interface Technology {
  name: string;
  category: "Cloud" | "Frontend" | "Backend" | "DevOps" | "AI" | "Delivery";
}

const technologies: Technology[] = [
  { name: "Azure", category: "Cloud" },
  { name: "Azure DevOps", category: "DevOps" },
  { name: "GitHub", category: "DevOps" },

  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },

  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },

  { name: "Python", category: "Backend" },

  { name: "Docker", category: "DevOps" },

  { name: "OpenAI", category: "AI" },

  { name: "Agile", category: "Delivery" },
  { name: "Scrum", category: "Delivery" },
];

export default technologies;