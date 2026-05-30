export type Tab = 'home' | 'materials' | 'commercial' | 'sustainability';

export interface MaterialInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
  purity?: string;
  density?: string;
  calorific?: string;
  calorificLabel?: string;
  features?: string[];
  advancedFeatures?: { title: string; sub: string }[];
  insightTitle?: string;
  insightText?: string;
  highlightTitle?: string;
  highlightText?: string;
}

export interface ProjectInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface BenefitCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  points?: string[];
  image?: string;
  tag?: string;
  ctaText?: string;
  className?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface SampleRequest {
  material: string;
  name: string;
  company: string;
  email: string;
  volume: string;
  interest: string;
  message: string;
}
