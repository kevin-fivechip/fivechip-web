/**
 * Case-study listing data, read by the Case studies index page and the
 * home-page teaser. Each study's full write-up is its own page under
 * src/pages/case-studies/<slug>.astro. Facts come from Kevin's own talks.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string;
  when: string;
  summary: string;
  tags: string[];
  talk?: { name: string; url: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "local-ai-legal-discovery",
    title: "A local, air-gapped AI pipeline for legal document discovery",
    client: "A county government legal team",
    role: "Principal consultant, Improving",
    when: "2026",
    summary:
      "Hundreds of pages of scanned records, read line by line. A month later: indexed, searchable and diffed case files that never leave one MacBook, with every fact traceable to its page.",
    tags: ["Discovery", "AI with guardrails", "Python", "Local models"],
    talk: {
      name: "Twin Cities Solution Architecture Meetup, September 2026",
      url: "https://www.meetup.com/twin-cities-solution-architecture-meetup/events/316503529",
    },
  },
  {
    slug: "low-volume-run-to-run-control",
    title: "Run-to-run control for low-volume products in a wafer fab",
    client: "Seagate Technology, wafer fabrication",
    role: "Process control system architect, Six Sigma project lead",
    when: "2005",
    summary:
      "Most of the fab's products ran too rarely for automated process control to learn from them, so they were reworked until they passed. A Six Sigma project and a small change inside the control system I had built let them borrow the high-volume product's data. Twenty years on, it's still running.",
    tags: ["Six Sigma", "DMAIC", "Process control", "Java"],
  },
];

/**
 * The two case studies, step by step. Shown on the Case studies index; the
 * detail pages link back to it rather than repeating it.
 */
export const comparison: { step: string; wafer: string; legal: string }[] = [
  {
    step: "Start with the people",
    wafer: "A mind map and a system map with the four photo engineers before any design.",
    legal: "Hallway interviews with the legal team before any tool search.",
  },
  {
    step: "Prove the measurement",
    wafer: "A gage study on the overlay metrology tool before trusting a single number.",
    legal: "A 60-page golden document before trusting a single transcribed page.",
  },
  {
    step: "Take the constraints from the room",
    wafer: "The high-volume product must not be touched. The engineers must own the groups.",
    legal: "Nothing leaves the building. Nothing unverifiable goes to court.",
  },
  {
    step: "Make the smallest change that fits",
    wafer: "One deterministic change inside a control system the team already ran.",
    legal: "Small deterministic steps in code, with the model doing one narrow job.",
  },
  {
    step: "Prove it before it ships",
    wafer: "Ten new tests, and all 179 existing tests still passing, unmodified.",
    legal: "Tests on all the Python, and the golden document run every night.",
  },
  {
    step: "Hand it over to stay",
    wafer: "Alerts, a safe fallback, and five minutes of training for the engineers.",
    legal: "Provenance in every file, and a skill so a two-person team can extend it.",
  },
  {
    step: "What it left behind",
    wafer: "Still in production twenty years later, in four countries.",
    legal: "A local, deterministic starting point the team owns outright.",
  },
];

/** Resume projects without a full write-up, technology first. */
export const otherWork: { when: string; title: string; text: string; tags: string[] }[] = [
  {
    when: "2024 – 2026",
    title: "County government application modernization",
    text: "Sole on-site consultant on an application that had received only security patches since 2018. Upgraded Java 8 to 25, Spring Boot 2 to 3 and Hibernate 5 to 6, and rewrote the Angular 10 frontend in React 19, with zero outages or rollbacks. Built the team's local development environment and test coverage, and wrote the AI-assisted development guidelines they check their work against.",
    tags: ["Java 25", "Spring Boot 3", "React 19", "Docker", "Cypress", "JUnit", "Claude"],
  },
  {
    when: "2020 – 2024",
    title: "Event-driven order management platform, Best Buy",
    text: "Lead architect for the greenfield migration of a legacy order management system to Kafka Streams and Avro. Set the repository structure, core schemas and standards, then built the platform libraries for encryption, retries, error handling, state management and schema evolution that about thirty developers across domain teams build and operate their services on. Ran weekly Kafka forums and built a React and Spring Boot search tool for Kafka data still used by more than 200 people.",
    tags: ["Apache Kafka", "Kafka Streams", "Avro", "Spring Boot", "React", "Kubernetes"],
  },
  {
    when: "2018 – 2020",
    title: "Customer-facing BestBuy.com applications",
    text: "Led the team building profile management, automotive accessory scheduling and Total Tech Support registration, in React and Redux over an Express backend-for-frontend and Spring Boot services.",
    tags: ["React", "Redux", "Node.js", "Spring Boot"],
  },
  {
    when: "2012 – 2018",
    title: "Consulting engagements, Object Partners",
    text: "Employee-facing tools for previewing, requesting and scheduling site changes on BestBuy.com; a content management system that published product pages as near-real-time JSON; legacy data exposed as REST microservices on a pair-programming team; a customer loyalty rewards system for a restaurant chain; and testing software plus an accessibility video for an assessment company's legacy application.",
    tags: ["Java", "REST", "JavaScript", "SQL"],
  },
  {
    when: "1998 – 2012",
    title: "Process control system architect, Seagate",
    text: "Proposed and designed the run-to-run control system that shares real-time measurement data across cleanroom equipment, deployed in four countries and still in use. Co-authored SEMI standard E-133.1 for semiconductor manufacturing, with an article in IEEE Spectrum.",
    tags: ["Java", "EJB", "Oracle", "XML", "SEMI E-133.1"],
  },
];
