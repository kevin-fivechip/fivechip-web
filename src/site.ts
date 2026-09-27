/**
 * Facts and copy shared by several pages. Page-specific text lives in the
 * page itself (src/pages/*.astro).
 */
export const site = {
  name: "Five Chip LLC",
  owner: "Kevin Beatty",
  url: "https://fivechip.com",
  email: "info@fivechip.com",
  tagline: "Software architecture and consulting",
  description:
    "Five Chip LLC is the independent software practice of Kevin Beatty: find the real problem, then architect and build the solution.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`;

export type IconName = "code" | "cloud" | "refresh" | "compass" | "target" | "spark";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "discovery",
    icon: "target",
    title: "Discovery",
    summary:
      "Working sessions with your teams to find the problem that actually matters. Sometimes the best fix costs nothing.",
    points: [
      "Time with the people closest to the work",
      "Root causes, not symptoms",
      "Clear success measures before anything is built",
    ],
  },
  {
    id: "architecture",
    icon: "code",
    title: "Architecture and implementation",
    summary: "I design and build solutions around your people, existing systems, and skills—not around a preferred technology stack.",
    points: [
      "Architecture shaped by customer needs, interviews, and existing capabilities",
      "Hands-on development with Java, Spring Boot, React, and TypeScript",
      "Technology choices that fit your environment, skills, and long-term goals",
    ],
  },
  {
    id: "on-track",
    icon: "compass",
    title: "Keeping projects on track",
    summary:
      "Projects stall for political, financial, and technical reasons. I name what's in the way and find a path forward.",
    points: [
      "An honest read on what's gating progress",
      "Options when an obstacle can't be moved",
      "Teams aligned on the same goal",
    ],
  },
  {
    id: "ai",
    icon: "spark",
    title: "AI with guardrails",
    summary: "Use AI to accelerate delivery without lowering the bar, with results that are verifiable, and aligned with the problem we're solving.",
    points: [
      "Practical guidelines for AI-assisted development",
      "Verifiable AI-generated results",
      "Private, controlled options for sensitive data.",
    ],
  },
];
