/**
 * Facts and copy shared by several pages. Page-specific text lives in the
 * page itself (src/pages/*.astro).
 */
export const site = {
  name: "Five Chip LLC",
  owner: "Kevin Beatty",
  url: "https://fivechip.com",
  email: "info@fivechip.com",
  // Secondary contact only: email is always the primary call to action.
  linkedin: "https://www.linkedin.com/in/kevinbeattyhimself/",
  tagline: "Software architecture and consulting",
  description:
    "Five Chip LLC is the independent software practice of Kevin Beatty: understand the real problem, in person, then architect and build the solution.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`;

export type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "discovery",
    title: "Discovery",
    summary:
      "Working sessions with your teams, in person wherever possible, to find the problems that actually matter and the results the business depends on.",
    points: [
      "Time with the people closest to the work, watching the system in use",
      "Root causes, not symptoms",
      "Clear success measures before anything is built",
    ],
  },
  {
    id: "architecture",
    title: "Architecture and implementation",
    summary:
      "I start with your people, your existing systems and the problems to solve. Then I define the architecture and weigh the options: cloud or on-prem, AWS, GCP or Azure, Kafka, Temporal or AI integrations. The technology is chosen to fit the problem, not the other way around.",
    points: [
      "Architecture grounded in interviews, team capabilities and existing systems",
      "Hands-on, full-stack delivery with deep experience in Java, Spring Boot, React and TypeScript",
      "AI tooling used to accelerate the work where it helps, with results you can verify",
    ],
  },
  {
    id: "on-track",
    title: "Keeping projects on track",
    summary:
      "Projects stall for political, financial and technical reasons. I name what's in the way, whether or not it's technical, and find a path forward.",
    points: [
      "An honest read on what's gating progress",
      "Options when an obstacle can't be moved",
      "Teams aligned on the same goal",
    ],
  },
  {
    id: "ai",
    title: "AI with guardrails",
    summary:
      "Use AI to accelerate delivery without lowering the bar: results that are verifiable, traceable to their source and aligned with the problem we're solving.",
    points: [
      "Practical guidelines for AI-assisted development",
      "Verifiable, traceable AI-generated results",
      "Private, controlled options for sensitive data",
    ],
  },
];

/** Shown as a plain line on the Services page. */
export const technologies = [
  "Java",
  "Spring Boot",
  "Apache Kafka",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Google Cloud",
  "Docker and Kubernetes",
  "GitHub Actions",
  "Claude",
];
