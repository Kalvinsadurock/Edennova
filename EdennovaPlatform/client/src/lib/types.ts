export interface CaseStudy {
  id: string;
  title: string;
  industry: 'automotive' | 'aerospace' | 'oil-gas';
  image: string;
  excerpt: string;
  metrics: string;
  slug: string;
}

export interface Insight {
  id: string;
  title: string;
  type: 'blog' | 'whitepaper' | 'webinar';
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface ServiceCapability {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryBenefit {
  title: string;
  description: string;
}
