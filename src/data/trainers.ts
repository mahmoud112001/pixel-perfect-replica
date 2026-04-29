import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

export interface Trainer {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  years: string;
}

export const trainers: Trainer[] = [
  {
    name: "Lina Haddad",
    specialty: "AI & Product Strategy",
    bio: "Former product lead turned AI educator. Lina helps teams cut through buzzwords and build with LLMs in ways that respect both users and the business behind them.",
    image: t1,
    years: "12 yrs",
  },
  {
    name: "Marcus Reiner",
    specialty: "Data Science & MLOps",
    bio: "Marcus has shipped production ML at three startups and one bank. He teaches the unglamorous half of AI — the part that makes it actually work past the demo.",
    image: t2,
    years: "9 yrs",
  },
  {
    name: "Sara Okafor",
    specialty: "Design Systems & UX",
    bio: "Designer-engineer hybrid with a soft spot for typography. Sara turns chaotic interfaces into systems that feel inevitable — and trains the people who maintain them.",
    image: t3,
    years: "10 yrs",
  },
];
