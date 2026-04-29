import { Layout } from "@/components/site/Layout";
import { courses } from "@/data/courses";

const Courses = () => (
  <Layout>
    <section className="container pt-20 pb-12 border-b border-border/50">
      <div className="font-mono text-xs text-primary mb-6 tracking-widest">[ COURSES · 06 PROGRAMS ]</div>
      <h1 className="text-5xl md:text-7xl tracking-tight font-medium max-w-4xl leading-[0.95]">
        Six programs. <span className="font-serif italic text-gradient">One philosophy:</span> learn by shipping.
      </h1>
      <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
        Each program runs as a small cohort with live sessions, project work, and direct feedback from practitioners.
      </p>
    </section>

    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((c, i) => (
          <article
            key={c.id}
            className="group relative bg-card border border-border/60 rounded-sm p-8 md:p-10 hover:border-primary/40 transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-xs text-muted-foreground">N°{c.code} — {c.tag}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 rounded-sm">
                {c.level}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-5 group-hover:text-primary transition-colors">
              {c.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{c.description}</p>
            <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Duration</div>
                <div className="text-sm mt-1">{c.duration}</div>
              </div>
              <button className="text-sm text-primary hover:underline underline-offset-4">Enroll →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Courses;
