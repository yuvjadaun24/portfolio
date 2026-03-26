export interface Project {
  id: string;
  title: string;
  year: string;
  tags: string[];
  desc: string;
  image: string;
  images?: string[];
  snapshots?: string[];
  hero?: string;
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
    image: '/images/Aifinite-image/Aifinite-1.png',
    images: [
      '/images/Aifinite-image/Aifinite-1.png',
      '/images/Aifinite-image/Aifinite-2.png',
      '/images/Aifinite-image/Aifinite-3.png',
      '/images/Aifinite-image/Aifinite-4.png',
    ],
    snapshots: ['/images/Aifinite Snapsho.png'],
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
    image: '/images/Arogya-images/Arogya-1.png',
    images: [
      '/images/Arogya-images/Arogya-1.png',
      '/images/Arogya-images/Arogya-2.png',
      '/images/Arogya-images/Arogya-3.png',
      '/images/Arogya-images/Arogya-4.png',
      '/images/Arogya-images/Arogya-5.png',
    ],
    snapshots: ['/images/Arogya-Snapshot.png'],
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
    image: '/images/parktek-images/Parktek-1.png',
    images: [
      '/images/parktek-images/Parktek-1.png',
      '/images/parktek-images/Parktek-2.png',
      '/images/parktek-images/Parktek-3.png',
      '/images/parktek-images/Parktek-4.png',
    ],
    snapshots: ['/images/Parktek Snapshot.png'],
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
  {
    id: 'aspedan',
    title: 'Aspedan',
    year: '2024',
    tags: ['Mobile App', 'Healthcare', 'AI Bot'],
    desc: 'A conversational AI-powered health assistant mobile app that helps users track symptoms, understand health metrics, and get instant personalised guidance.',
    image: '/images/Aspedan-images/Aspedan-1.png',
    images: [
      '/images/Aspedan-images/Aspedan-1.png',
      '/images/Aspedan-images/Aspedan-2.png',
      '/images/Aspedan-images/Aspedan-3.png',
      '/images/Aspedan-images/Aspedan-4.png',
      '/images/Aspedan-images/Aspedan-5.png',
    ],
    snapshots: [
      '/images/Aspedan Snapshots/Home Screen.png',
      '/images/Aspedan Snapshots/Onboarding 1.png',
      '/images/Aspedan Snapshots/Profile.png',
      '/images/Aspedan Snapshots/Family Sharing.png',
      '/images/Aspedan Snapshots/My Stats.png',
      '/images/Aspedan Snapshots/My Stats-1.png',
      '/images/Aspedan Snapshots/Blood Pressure.png',
      '/images/Aspedan Snapshots/Blood Testing Screen.png',
      '/images/Aspedan Snapshots/Weight Sync Screen.png',
      '/images/Aspedan Snapshots/SW & Data Sync.png',
      '/images/Aspedan Snapshots/Health Plan Response.png',
    ],
    domain: 'Healthcare AI / Conversational Health Assistant',
    overview:
      'Aspedan is a smart AI health assistant mobile app that puts a personal healthcare companion in your pocket. It enables users to log symptoms, chat with an AI bot for instant health guidance, monitor vitals, and receive proactive wellness recommendations — all through an intuitive, approachable interface.',
    problem:
      'People frequently turn to unreliable online sources when they experience health concerns, leading to anxiety, misdiagnosis, and delayed professional care. Existing health apps are either too clinical and data-heavy, or too simplistic to provide meaningful value. There was a clear gap for a warm, conversational, AI-driven health companion that bridges the space between self-care and professional medical advice.',
    solution:
      'Designed a mobile-first conversational health assistant with a calming, approachable UI language. The AI bot interface uses natural language chat to help users triage symptoms, understand health data, and decide when to seek professional care — reducing anxiety and building health literacy. The design prioritises trust, clarity, and emotional warmth through soft gradients, rounded components, and empathetic micro-copy.',
    features: [
      {
        title: 'Conversational AI Health Bot',
        description:
          'A real-time chat interface powered by AI that lets users describe symptoms in plain language and receive contextual, evidence-based guidance without jargon.',
      },
      {
        title: 'Symptom Tracker & Health Log',
        description:
          'Daily check-in flows that log symptoms, energy levels, and mood over time — giving the AI richer context to surface patterns and early warnings.',
      },
      {
        title: 'Vitals Dashboard',
        description:
          'A clean visual summary of key health metrics (heart rate, sleep, hydration, steps) pulled from device sensors and manual inputs, presented in an at-a-glance card layout.',
      },
      {
        title: 'Proactive Wellness Nudges',
        description:
          'Contextual push notifications and in-app recommendations that remind users to hydrate, breathe, rest, or seek care — based on their logged data and conversation history.',
      },
    ],
    designHighlights:
      'Warm, calming colour system with soft gradients; conversational UI patterns with chat bubbles and typing indicators; card-based health summaries using accessible typography; rounded, touch-optimised components that feel safe and approachable on mobile.',
    palette: ['#f0f4ff', '#6366f1', '#a5b4fc', '#1e1b4b', '#ffffff'],
  },
  {
    id: 'techcompiler',
    title: 'Techcompiler Datasystems',
    year: '2024',
    tags: ['Company Profile', 'Landing Page', 'B2B'],
    desc: 'A modern company profile landing page for Techcompiler Datasystems, showcasing services, case studies, and enterprise capabilities.',
    image: '/images/Tehcompiler-Images/Techcompiler-1.png',
    images: [
      '/images/Tehcompiler-Images/Techcompiler-1.png',
      '/images/Tehcompiler-Images/Techcompiler-2.png',
      '/images/Tehcompiler-Images/Techcompiler-3.png',
      '/images/Tehcompiler-Images/Techcompiler-4.png',
      '/images/Tehcompiler-Images/Techcompiler-5.png',
    ],
    hero: '/images/Tehcompiler-Images/Techcompiler-2.png',
    snapshots: ['/images/Techcompiler Snapshot.png'],
    domain: 'Corporate / B2B Web Presence',
    overview:
      'A clean, trust-forward landing experience presenting Techcompiler Datasystems as a capable engineering partner for enterprise software and infrastructure projects. The design highlights services, case studies, and contact flows to drive qualified leads.',
    problem:
      'Techcompiler needed a concise, credible web presence that communicates technical capability without overwhelming non-technical decision makers. Their previous site lacked hierarchy and clarity for enterprise decision paths.',
    solution:
      'Crafted a minimal, content-forward landing page with clear service buckets, prominent case studies, and an actionable contact flow. Visuals emphasize reliability and scale using a calm, technical palette and modular content blocks.',
    features: [
      { title: 'Service Modules', description: 'Clear, scannable sections that explain offerings (Cloud, Data, Embedded Systems).' },
      { title: 'Case Study Highlights', description: 'Concise case study cards with measurable outcomes and quick read summaries.' },
      { title: 'Lead Capture Flow', description: 'Short, progressive contact form designed to qualify enterprise interest.' },
      { title: 'Technical Credentials', description: 'Trust badges, partner logos, and technology stack visualisations to build confidence.' },
    ],
    designHighlights:
      'Modular content blocks, restrained typography, and a calm technical palette focused on clarity and calling attention to outcomes.',
    palette: ['#0b1220', '#0ea5e9', '#e6f6ff', '#ffffff', '#0c4a6e'],
  },
];
