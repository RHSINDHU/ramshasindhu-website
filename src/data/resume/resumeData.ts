export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'placeholder-1',
    role: 'Role Title',
    organization: 'Organization Name',
    startDate: '2020',
    endDate: 'Present',
    description: 'A brief description of the role.',
    achievements: ['Key achievement one', 'Key achievement two'],
  },
];

export const education: EducationItem[] = [
  {
    id: 'placeholder-1',
    degree: 'Degree Name',
    institution: 'Institution Name',
    startDate: '2016',
    endDate: '2020',
    description: 'A brief description of the education.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'placeholder-1',
    category: 'Category',
    skills: ['Skill one', 'Skill two'],
  },
];
