export interface Project {
  id: string;
  title: string;
  year: string;
  tags: string[];
  desc: string;
  image: string;
  domain: string;
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  designHighlights: string;
  palette: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'aifinite',
    title: 'Aifinite',
    year: '2024',
    tags: ['UI/UX', 'EdTech', 'AI'],
    desc: 'A futuristic, immersive web platform designed to gateway students into AI and Data Science excellence through structured courses and interactive learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=85',
    domain: 'EdTech / AI & Data Science Platform',
    overview:
      'A futuristic, immersive web platform designed to gateway students into AI and Data Science excellence through structured courses and interactive learning.',
    problem:
      'Learning advanced tech like AI and Data Science often feels intimidating. Traditional educational platforms lack the visual engagement and modern interface required to keep tech-forward students motivated.',
    solution:
      'Designed a highly visual, dark-themed learning portal that feels like the future of tech. The UI utilizes 3D glassmorphism elements, deep neon purples, and intuitive navigation to make complex course discovery seamless.',
    features: [
      {
        title: 'Immersive Hero Section',
        description:
          "'Data Driven Dreams' messaging with fluid 3D visual assets to immediately establish a high-tech brand identity.",
      },
      {
        title: 'Course Discovery',
        description:
          'Tiered course options (e.g., $29, $199) with clear feature breakdowns for easy decision-making.',
      },
      {
        title: 'Curriculum Accordions',
        description:
          'Expandable modules allowing users to preview syllabus depth without cluttering the UI.',
      },
      {
        title: 'Social Proof',
        description:
          "'Student Voices' testimonial section built with a sleek, card-based layout to build trust.",
      },
    ],
    designHighlights:
      'High-contrast dark mode, futuristic typography, and seamless scroll experiences.',
    palette: ['#0a0a0a', '#7c3aed', '#a78bfa', '#1e1b4b', '#f5f3ff'],
  },
  {
    id: 'arogya',
    title: 'Arogya',
    year: '2024',
    tags: ['Product Design', 'Healthcare', 'Mobile'],
    desc: 'A secure, patient-centric healthcare application that simplifies medical records, provides instant care access, and incentivizes health data management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85',
    domain: 'Healthcare Tech / Patient Record Management',
    overview:
      'A secure, patient-centric healthcare application that simplifies medical records, provides instant care access, and incentivizes health data management.',
    problem:
      'Patients struggle with fragmented medical history across different doctors and clinics. Retrieving past medical records is a hassle, leading to inefficiencies in emergency or routine care.',
    solution:
      'A clean, trust-inspiring mobile and web ecosystem that acts as a centralized "Health Chronology." Designed with medical transparency and strict privacy in mind, utilizing a calming blue and white color palette to evoke cleanliness and reliability.',
    features: [
      {
        title: 'Health Chronology Timeline',
        description:
          'Visual representation of a patient\'s medical history for quick scanning by doctors.',
      },
      {
        title: 'Upload to Earn (ABHA Integration)',
        description:
          'A gamified/reward-based flow encouraging users to link their ABHA (Ayushman Bharat Health Account) and upload records securely.',
      },
      {
        title: 'Medical Transparency Hub',
        description:
          'Clear visuals showing how data is shared securely — "We Do The Work", "Get Timeline".',
      },
      {
        title: 'Trust & Privacy Badges',
        description:
          'Prominent display of HIPAA compliance, end-to-end encryption, and zero-knowledge architecture.',
      },
    ],
    designHighlights:
      'Accessible light theme, rounded safe-feeling UI components, clear data-flow illustrations, and high-legibility typography.',
    palette: ['#ffffff', '#0ea5e9', '#bae6fd', '#0c4a6e', '#f0f9ff'],
  },
  {
    id: 'parktek',
    title: 'ParkTek',
    year: '2023',
    tags: ['B2B SaaS', 'Smart Infrastructure', 'Dashboard'],
    desc: 'A comprehensive smart parking ecosystem integrating AI-powered ANPR, smart registration, and professional fleet management into one seamless platform.',
    image: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=1200&q=85',
    domain: 'Smart Infrastructure / B2B SaaS',
    overview:
      'A comprehensive smart parking ecosystem integrating AI-powered ANPR, smart registration, and professional fleet management into one seamless platform.',
    problem:
      'Traditional parking facilities suffer from bottlenecks at entry/exit points, inefficient manual ticketing, and poor visibility into lot capacity, causing frustration for drivers and lost revenue for operators.',
    solution:
      'A modern, B2B-focused landing page that breaks down complex hardware-software integrations into easily digestible value propositions. The design uses a high-contrast dark theme with sharp yellow accents to indicate efficiency, speed, and alertness.',
    features: [
      {
        title: 'AI-Powered ANPR Visualization',
        description:
          'Clear UI demonstrating how automated license plate recognition eliminates the need for manual boom barrier operation.',
      },
      {
        title: 'Automated Payment Flow',
        description: 'UI showcasing contactless digital payments upon exit.',
      },
      {
        title: 'Centralized Lot Tagging & Fleet Management',
        description:
          'Dashboard concepts for real-time tracking and automated compliance for authorized vehicles.',
      },
      {
        title: 'Interactive FAQ & Partner Ecosystem',
        description:
          'Engaging sections for infrastructure providers to join forces with ParkTek.',
      },
    ],
    designHighlights:
      'Architectural lines mapping the user journey, bold industrial color palette (Black/Yellow), and structured, data-heavy component layouts.',
    palette: ['#0a0a0a', '#eab308', '#fef08a', '#422006', '#fefce8'],
  },
];
