export type Sector = 
  | 'All'
  | 'Fragrance & Beauty'
  | 'Furniture & Home'
  | 'Healthcare'
  | 'Hospitality & Food';

export interface CaseStudy {
  id: string;
  title: string;
  brandName: string;
  sector: Sector;
  sectorLabel: string;
  logoUrl: string;
  summary: string;
  brief: string;
  whatWeBuilt: string[];
  howWeRunIt: string;
  highlightMetric: string;
  isFeatured?: boolean;
}

export interface Discipline {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  iconName: string;
}

export interface StrategicGoal {
  id: 'awareness' | 'engagement' | 'conversion';
  label: string;
  heading: string;
  description: string;
  tactics: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role?: string;
}

export interface ContactFormData {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  sector: string;
  goal: string;
  brief: string;
  budgetRange: string;
}
