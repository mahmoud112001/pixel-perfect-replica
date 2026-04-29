import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { courses } from "@/data/courses";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container pt-20 pb-32 md:pt-32 md:pb-40 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="font-mono text-xs text-primary mb-8 tracking-widest">
              [ 01 / TRAINING · COHORT SP26 ]
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-medium">
              Upgrade your skills with{" "}
              <span className="font-serif italic text-gradient">modern</span>{" "}
              training.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A focused training studio for engineers, designers, and AI-curious teams.
              Small cohorts, working sessions, and content shaped by people who actually ship.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/courses">View Courses <ArrowUpRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="ghostBorder" size="xl">
                <Link to="/trainers">Meet Our Trainers</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden grain border border-border/60">
              <img
                src={hero}
                alt="Abstract visual representing modern training and AI"
                width={1536}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="font-mono text-xs text-primary tracking-widest">NOW ENROLLING</div>
                  <div className="font-serif text-2xl mt-1">Spring 2026</div>
                </div>
                <div className="font-mono text-xs text-muted-foreground">N°—01</div>
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-border/50 py-5 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-serif text-2xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {["Engineering", "AI fluency", "Design systems", "Data science", "Leadership", "MLOps", "Product craft"].map((w) => (
                  <span key={w} className="flex items-center gap-12 text-muted-foreground">
                    {w} <span className="text-primary">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-24">
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {[
            { k: "320+", v: "Engineers trained" },
            { k: "94%", v: "Would recommend" },
            { k: "12", v: "Active cohorts" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-10">
              <div className="font-serif text-6xl md:text-7xl text-gradient">{s.k}</div>
              <div className="mt-3 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="container py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-xs text-primary mb-4 tracking-widest">[ 02 / WHAT WE TEACH ]</div>
            <h2 className="text-4xl md:text-5xl tracking-tight max-w-2xl">
              Programs built for the way teams <span className="font-serif italic">actually</span> work.
            </h2>
          </div>
          <Link to="/courses" className="hidden md:flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
            See all courses <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {courses.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              to="/courses"
              className="group bg-background p-8 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">N°{c.code}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 rounded-sm">
                  {c.level}
                </span>
              </div>
              <h3 className="font-serif text-3xl leading-tight mb-4 group-hover:text-primary transition-colors">
                {c.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>{c.duration}</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
