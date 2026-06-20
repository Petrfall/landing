export type Lang = "ru" | "en";

export interface RoleFitItem {
  need: string;
  have: string;
}

export interface TechGroup {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  tag: string;
  summary: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  highlight?: boolean;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Content {
  nav: { rolefit: string; tech: string; projects: string; cv: string; contact: string };
  hero: {
    badge: string;
    name: string;
    role: string;
    tagline: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: Metric[];
  };
  rolefit: { title: string; lead: string; items: RoleFitItem[] };
  tech: { title: string; lead: string; groups: TechGroup[] };
  projects: { title: string; lead: string; items: Project[] };
  cv: { title: string; lead: string; bullets: string[] };
  contact: {
    title: string;
    lead: string;
    email: string;
    telegram: string;
    github: string;
    resumeNote: string;
  };
  footer: string;
}
