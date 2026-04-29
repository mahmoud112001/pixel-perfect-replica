import { Layout } from "@/components/site/Layout";
import { trainers } from "@/data/trainers";

const Trainers = () => (
  <Layout>
    <section className="container pt-20 pb-12 border-b border-border/50">
      <div className="font-mono text-xs text-primary mb-6 tracking-widest">[ TRAINERS · 03 PRACTITIONERS ]</div>
      <h1 className="text-5xl md:text-7xl tracking-tight font-medium max-w-4xl leading-[0.95]">
        Taught by people who <span className="font-serif italic text-gradient">still ship.</span>
      </h1>
      <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
        Our trainers split their time between teaching and active work — so what they teach is current, opinionated, and grounded in reality.
      </p>
    </section>

    <section className="container py-16 space-y-24">
      {trainers.map((t, i) => (
        <article
          key={t.name}
          className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center animate-fade-up ${i % 2 ? "md:[direction:rtl]" : ""}`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="md:col-span-5 [direction:ltr]">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden grain border border-border/60">
              <img
                src={t.image}
                alt={`${t.name}, ${t.specialty}`}
                width={768}
                height={896}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background to-transparent flex justify-between items-end">
                <div className="font-mono text-xs text-primary">N°0{i + 1}</div>
                <div className="font-mono text-xs text-muted-foreground">{t.years}</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 [direction:ltr]">
            <div className="font-mono text-xs text-primary mb-4 tracking-widest">{t.specialty.toUpperCase()}</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1] mb-6">{t.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{t.bio}</p>
          </div>
        </article>
      ))}
    </section>
  </Layout>
);

export default Trainers;
