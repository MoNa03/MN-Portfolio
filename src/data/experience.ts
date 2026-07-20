export interface Experience {
  id: string;

  company: string;
  role: string;
  duration: string;
  location: string;

  domain: string;

  summary: string;

//  achievements: string[];

//  businessImpact: string[];

//  technologies: string[];
}

const experience: Experience[] = [
  {
    id: "NXP",

    company: "TrustMotion (NXP Semiconductors)",

    role: "Project Manager",

    duration: "Feb 2023 – Present",

    location: "Munich, Germany",

    domain: "Automotive",

    summary:
      "Leading Technical Program Manager delivering complex Automotive Software and Software Defined Vehicle (SDV) programs across AUTOSAR, diagnostics, and high-performance ECU platforms. Partnering with OEMs, Tier-1 customers, architects, and cross-functional engineering teams to define product roadmaps, drive Agile execution, manage risks, and ensure predictable delivery of safety-critical embedded software. Passionate about engineering excellence, stakeholder collaboration, and enabling high-quality software solutions that create measurable business value.",
        },
  {
    id: "KPIT",

    company: "Microfuzzy (KPIT)",

    role: "Senior Technical Leader",

    duration: "Jan 2019 – Dec 2021",

    location: "Munich, Germany",

    domain: "Automotive",

    summary:
      "Led AUTOSAR integration and embedded software development for OEM ECUs, providing technical leadership, customer collaboration, and cross-functional coordination to deliver high-quality automotive software solutions.",
        },    
  {
    id: "Bosch",

    company: "Bosch",

    role: "Project Manager",

    duration: "June 2013 – July 2018",

    location: "Bengaluru, India",

    domain: "Automotive",

    summary:
      "Led AUTOSAR platform development for ADAS Radar systems, collaborating with customers and global engineering teams to plan features, provide technical consulting, and deliver robust embedded software platforms.",
        },
  {
    id: "L&T",

    company: "L&T",

    role: "Software Engineer",

    duration: "Feb 2011 – May 2013",

    location: "Bengaluru, India",

    domain: "Automotive",

    summary:
      "Developed software for Hybrid Electric Vehicle Telematics Control Units (TCUs), contributing to requirements analysis, software development, integration, and testing for connected vehicle solutions.",
        },
  {
    id: "ISM",

    company: "ISM",

    role: "Embedded Engineer",

    duration: "Jan 2009 – Jan 2011",

    location: "Bengaluru, India",

    domain: "Embedded Systems",

    summary:
      "Developed Embedded C software for microcontroller-based systems, implementing communication and peripheral drivers while building a strong foundation in embedded systems and hardware-software integration.",
        },                           
];
{/* 
    achievements: [
      "Led cross-functional engineering teams.",
      "Delivered multiple software releases.",
      "Improved Agile delivery predictability.",
    ],

    businessImpact: [
      "Improved engineering efficiency.",
      "Strengthened global stakeholder collaboration.",
    ],

    technologies: [
      "AUTOSAR",
      "Embedded C",
      "Azure DevOps",
      "Python",
      "AI",
    ],
  },
];*/}

export default experience;