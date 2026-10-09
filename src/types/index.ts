export type Language = 'ar' | 'en';

export interface Discipline {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  iconName: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  quote: string;
  quoteEn: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  discipline: 'ecommerce' | 'business' | 'marketing';
  disciplineLabel: string;
  disciplineLabelEn: string;
  tagline: string;
  taglineEn: string;
  overview: string;
  overviewEn: string;
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  deliverables: string[];
  deliverablesEn: string[];
  gradient: string;
  accentColor: string;
  imagePlaceholderType: 'store' | 'funnel' | 'ecosystem' | 'media' | 'analytics' | 'operations';
  livePreviewAvailable?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  badge?: string;
}
