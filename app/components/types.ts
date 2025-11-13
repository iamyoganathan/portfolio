export interface ProjectSummary {
  title: string;
  summary: string;
  challenge: string;
  outcome: string;
  stack: string[];
  metrics?: string[];
  link?: {
    label: string;
    href: string;
  };
  caseStudy?: {
    intro: string;
    problem: string;
    process: string[];
    results: string[];
    takeaways?: string[];
  };
}
