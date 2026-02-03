export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "E-Commerce Redesign",
    description: "Complete redesign of an online shopping platform with focus on user experience and conversion optimization.",
    tech: ["React", "MUI", "Figma"],
    year: "2025"
  },
  {
    id: "02",
    title: "Fintech Mobile App",
    description: "Banking and investment mobile application with clean interface and secure authentication.",
    tech: ["React Native", "TypeScript", "Figma"],
    year: "2024"
  },
  {
    id: "03",
    title: "SaaS Dashboard",
    description: "Analytics dashboard for B2B SaaS product with real-time data visualization.",
    tech: ["React", "Recharts", "TailwindCSS"],
    year: "2024"
  },
  {
    id: "04",
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and medical records.",
    tech: ["React", "MUI", "HTML/CSS"],
    year: "2023"
  },
  {
    id: "05",
    title: "Real Estate Platform",
    description: "Property listing and search platform with interactive maps and filters.",
    tech: ["React", "Google Maps API", "Figma"],
    year: "2023"
  },
  {
    id: "06",
    title: "Education LMS",
    description: "Learning management system for online courses and student tracking.",
    tech: ["React", "MUI", "TailwindCSS"],
    year: "2022"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    title: "E-Commerce Conversion Optimization",
    description: "Increased conversion rate by 45% through UX improvements",
    challenge: "High cart abandonment rate and complex checkout process",
    solution: "Simplified checkout flow, added trust indicators, improved mobile experience",
    result: "45% increase in conversion rate, 30% reduction in cart abandonment"
  },
  {
    id: "02",
    title: "Fintech App User Onboarding",
    description: "Reduced user drop-off during onboarding by 60%",
    challenge: "Complex onboarding process causing 70% user drop-off",
    solution: "Progressive disclosure, step-by-step guidance, visual feedback",
    result: "60% reduction in drop-off rate, 4.8/5 app store rating"
  },
  {
    id: "03",
    title: "Dashboard Data Visualization",
    description: "Improved data comprehension and decision-making speed",
    challenge: "Users struggled to extract insights from complex data",
    solution: "Redesigned charts, added contextual filters, implemented drill-down",
    result: "40% faster decision-making, 85% user satisfaction score"
  }
];

export const skills: Skill[] = [
  {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "UI Frameworks",
    items: ["Material UI", "TailwindCSS", "Ant Design", "Bootstrap"]
  },
  {
    category: "Other Skills",
    items: ["Responsive Design", "Wireframing", "Prototyping", "User Research", "Accessibility"]
  }
];

export const aboutData = {
  name: "Yuvraj Singh Jadaun",
  role: "UI/UX & Web Designer",
  experience: "4.5 Years Experience",
  bio: "Passionate UI/UX and Web Designer with 4.5 years of experience creating intuitive and visually appealing digital experiences. Specialized in React-based web applications and modern design systems.",
  highlights: [
    "50+ successful projects delivered",
    "Expertise in React and Material UI",
    "Strong focus on user-centered design",
    "Proficient in Figma and Adobe Creative Suite"
  ]
};

export const contactData = {
  email: "yuvraj.jadaun@example.com",
  linkedin: "linkedin.com/in/yuvrajjadaun",
  github: "github.com/yuvrajjadaun",
  location: "India"
};
