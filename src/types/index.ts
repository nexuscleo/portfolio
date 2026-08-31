export type ProjectCategory = 
  | 'all' 
  | 'web' 
  | 'engineering' 
  | 'interactive' 
  | 'landing';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'web' | 'engineering' | 'interactive' | 'landing';
  categoryLabel: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  category: 'frontend' | 'backend' | 'engineering' | 'tools';
}

export interface SkillCategory {
  title: string;
  category: 'frontend' | 'backend' | 'engineering' | 'tools';
  description: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'career' | 'education' | 'milestone';
  skillsUsed?: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
  status: {
    available: boolean;
    text: string;
  };
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

