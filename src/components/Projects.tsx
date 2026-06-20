import type { Content } from "../content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects({ c }: { c: Content }) {
  return (
    <Section id="projects" title={c.projects.title} lead={c.projects.lead}>
      <div className="grid gap-4 lg:grid-cols-2">
        {c.projects.items.map((p, i) => (
          <Reveal key={p.name} delay={i * 50}>
            <article
              className={`card flex h-full flex-col p-6 ${
                p.highlight ? "border-accent/40 bg-panel2/80" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
              </div>
              <span
                className={`mt-1 inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  p.highlight
                    ? "bg-accent/15 text-accent"
                    : "bg-panel2 text-muted"
                }`}
              >
                {p.tag}
              </span>

              <p className="mt-3 text-sm leading-relaxed text-text/90">{p.summary}</p>

              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-ink/60 px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className="mt-3 flex gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium link-u"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
