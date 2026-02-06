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

export const resumeData = {
  url: '/resume.pdf',
} as const;

export const projects: Project[] = [
  {
    id: '01',
    title: 'Online AI/ML Course Platform',
    description:
      'Led UI/UX strategy and A/B testing, refined IA + SEO, and delivered a WCAG-aligned responsive experience.',
    tech: ['User Research', 'A/B Testing', 'Information Architecture', 'WCAG', 'Figma'],
    year: '2024–PRESENT',
  },
  {
    id: '02',
    title: 'FinTech Payment Gateway Suite',
    description:
      'Designed a unified cross-platform experience (POS/Web/Android) using heuristic evaluation and strict guideline compliance.',
    tech: ['Heuristic Evaluation', 'Product Design', 'Responsive UI', 'Design Systems'],
    year: '2021–2023',
  },
  {
    id: '03',
    title: 'Dashboard & Mobile Prototype Modernization',
    description:
      'Modernized dashboards and mobile prototypes with iterative feedback loops to improve engagement and mobile usage.',
    tech: ['Figma', 'Adobe XD', 'Usability Testing', 'Prototyping'],
    year: '2024–PRESENT',
  },
  {
    id: '04',
    title: 'Responsive Web & Tablet Experience',
    description:
      'Delivered high-fidelity interfaces across desktop/tablet, validated with usability studies to streamline navigation logic.',
    tech: ['Interaction Design', 'Responsive Web Design', 'Usability Studies'],
    year: '2021–2023',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '01',
    title: 'User Research → Engagement + Retention Lift',
    description:
      'Ran research and usability testing to remove friction and validate design decisions with real users.',
    challenge:
      'Multiple UX pain points were causing lower engagement and retention across key flows.',
    solution:
      'Conducted user research and usability testing (50+ participants), iterated flows, and resolved high-impact issues.',
    result: '45% engagement increase and 30% retention growth.',
  },
  {
    id: '02',
    title: 'Client Requirements → Clear User Flows',
    description:
      'Translated complex requirements into intuitive user journeys and deliverable specs.',
    challenge:
      'Ambiguous, complex client requirements led to confusing journeys and higher bounce rates.',
    solution:
      'Defined user flows and IA for 7+ projects and partnered with developers to ensure feasibility and quality.',
    result: 'Reduced bounce rates by 25% with 95% client satisfaction.',
  },
  {
    id: '03',
    title: 'Cross-Platform FinTech Suite Design',
    description:
      'Designed a unified POS/Web/Android experience while meeting strict platform guidelines.',
    challenge:
      'Disjointed cross-platform UX and guideline constraints limited adoption and mobile usage.',
    solution:
      'Used heuristic evaluations, standardized patterns, and a unified design approach across platforms.',
    result: '35% higher engagement and a 40% surge in mobile app usage (90% on-time delivery).',
  },
];

export const skills: Skill[] = [
  {
    category: 'Design Tools',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Illustrator', 'InVision', 'Zeplin']
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'Bootstrap 5', 'Tailwind', 'JavaScript (Basic)']
  },
  {
    category: 'UI Frameworks',
    items: ['Responsive Layouts', 'Responsive Web Design', 'Accessibility (WCAG)', 'Interaction Design']
  },
  {
    category: 'Other Skills',
    items: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Rapid Prototyping',
      'Usability Testing',
      'Heuristic Evaluation',
      'Design Thinking',
    ]
  }
];

export const aboutData = {
  name: 'Yuvraj Singh Jadaun',
  role: 'UI/UX Designer — Front-End Designer',
  experience: '3.5+ Years Experience',
  bio: 'Innovative UI/UX Designer with 3.5+ years of experience bridging design and technology. Specializes in user research, wireframing, and prototyping to deliver accessible (WCAG) and responsive web solutions. Consistently improved retention and engagement through data-driven design iterations. Proficient in transforming complex requirements into seamless digital experiences using Figma, Adobe XD, and modern frontend frameworks.',
  highlights: [
    'Resolved UX pain points with 50+ participant studies',
    'Delivered +45% engagement and +30% retention growth',
    'Drove +40% uplift in mobile usage via iteration',
    'Achieved 95% client satisfaction and 85% on-time delivery',
  ],
};

export const contactData = {
  email: 'yuvrajjadaun2@gmail.com',
  phone: '9528132224',
  dribbble: 'dribbble.com/Uiraj',
  linkedin: 'linkedin.com/in/yuvrajsinghjadaun',
  github: 'github.com/yuvrajjadaun',
  location: 'Faridabad, Haryana',
};
