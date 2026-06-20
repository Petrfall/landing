import type { Content } from "../content";
import { Reveal } from "./Reveal";

export function Hero({ c, github }: { c: Content; github: string }) {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="container-c">
        <Reveal>
          <span className="chip border-accent/40 bg-accent/10 text-accent">
            {c.hero.badge}
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {c.hero.name}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-text sm:text-2xl">
            {c.hero.role}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {c.hero.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
            {c.hero.intro}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              {c.hero.ctaPrimary}
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line bg-panel2 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent/50"
            >
              {c.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {c.hero.metrics.map((m) => (
              <div key={m.label} className="card p-4">
                <div className="font-mono text-2xl font-bold text-accent2 sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
