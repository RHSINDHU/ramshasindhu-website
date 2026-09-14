export const resumeConfig = {
  pdfPath: '/resume.pdf',
  pdfLabel: 'Download Resume',
  pdfFilename: 'resume.pdf',
};

export interface TimelineChapter {
  index: string;
  title: string;
  subtitle?: string;
  description: string;
  imageKey: string;
  imageAlt: string;
  isTransition?: boolean;
  secondImageKey?: string;
  secondImageAlt?: string;
  isPlaceholder?: boolean;
}

export const timelineChapters: TimelineChapter[] = [
  {
    index: '01',
    title: 'Fashion Design',
    subtitle: "Bachelor's Degree",
    description:
      'The beginning: learning to think through design, materials, people, constraints and visual storytelling.',
    imageKey: 'resumeFashionSketch',
    imageAlt: 'Artistic fashion design sketches on paper with colored pencils.',
  },
  {
    index: '02',
    title: '2015 — Canada',
    subtitle: 'A New Chapter',
    description:
      'A new country and a new chapter created the opportunity to rethink what came next.',
    imageKey: 'resumeCanada',
    imageAlt: 'Skyline of North Vancouver with mountainous backdrop.',
  },
  {
    index: '03',
    title: 'The Transition',
    subtitle: 'Fashion → Technology',
    description:
      'A shift in industry, but not in curiosity or creativity.',
    imageKey: 'resumeTransition',
    imageAlt: 'Fashion designer sketching dress ideas at a desk.',
    isTransition: true,
    secondImageKey: 'resumeTechTransition',
    secondImageAlt: 'Modern minimalist workspace with laptop and stationery.',
  },
  {
    index: '04',
    title: 'IT',
    subtitle: 'Professional Experience',
    description:
      'Professional experience in the technology sector. Add your roles, companies, dates and technologies here.',
    imageKey: 'resumeIT',
    imageAlt: 'Professionals engaged in a collaborative office meeting.',
    isPlaceholder: true,
  },
  {
    index: '05',
    title: 'Technical Project Manager',
    subtitle: 'Today',
    description:
      'Bringing together technology, people, planning, communication, strategy and execution.',
    imageKey: 'resumeToday',
    imageAlt: 'Diverse group of professionals having a meeting in a modern office.',
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
  isPlaceholder?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Project Management',
    skills: [
      'Planning',
      'Delivery',
      'Stakeholder Management',
      'Risk Management',
      'Agile',
      'Collaboration',
    ],
  },
  {
    title: 'Technology',
    skills: ['Add your technology stack here'],
    isPlaceholder: true,
  },
  {
    title: 'Leadership',
    skills: ['Add your leadership skills here'],
    isPlaceholder: true,
  },
  {
    title: 'Creative',
    skills: ['Design Thinking', 'Visual Communication', 'Creative Problem Solving'],
  },
];

export const transformationWords = [
  'FASHION',
  'DESIGN',
  'TECHNOLOGY',
  'PROJECTS',
  'PEOPLE',
  'DELIVERY',
];
