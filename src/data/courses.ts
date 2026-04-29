export type Level = "Beginner" | "Intermediate" | "Advanced";
export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  duration: string;
  level: Level;
  tag: string;
}

export const courses: Course[] = [
  {
    id: "ai-fluency",
    code: "01",
    name: "AI Fluency for Modern Teams",
    description: "Move beyond the hype. Learn to evaluate, prompt, and ship with large language models — and turn AI into a daily lever for real productivity.",
    duration: "6 weeks",
    level: "Beginner",
    tag: "AI / Strategy",
  },
  {
    id: "fullstack",
    code: "02",
    name: "Fullstack Engineering with React & Node",
    description: "Architect production-grade apps end-to-end. From component systems to scalable APIs, deployment pipelines, and the patterns senior engineers actually use.",
    duration: "12 weeks",
    level: "Intermediate",
    tag: "Engineering",
  },
  {
    id: "data",
    code: "03",
    name: "Applied Data Science & Python",
    description: "Translate raw data into decisions. Hands-on with pandas, modeling, and visual storytelling that earns trust from non-technical stakeholders.",
    duration: "10 weeks",
    level: "Intermediate",
    tag: "Data",
  },
  {
    id: "design",
    code: "04",
    name: "Product Design Systems",
    description: "Craft interfaces with intent. Tokens, typography, motion, and the design-engineering handoff that scales beautifully across teams.",
    duration: "8 weeks",
    level: "Beginner",
    tag: "Design",
  },
  {
    id: "ml-ops",
    code: "05",
    name: "MLOps & Production AI",
    description: "Take models from notebook to production. Deployment, monitoring, evaluation, and the infrastructure that keeps AI systems honest at scale.",
    duration: "9 weeks",
    level: "Advanced",
    tag: "AI / Infra",
  },
  {
    id: "leadership",
    code: "06",
    name: "Engineering Leadership Intensive",
    description: "Lead teams that ship. A focused program on strategy, technical decision-making, hiring, and the soft skills that compound over a career.",
    duration: "5 weeks",
    level: "Advanced",
    tag: "Leadership",
  },
];
