import type { Content } from "../content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Tech({ c }: { c: Content }) {
  return (
    <Section id="tech" title={c.tech.title} lead={c.tech.lead}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.tech.groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 50}>
            <div className="card h-full p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent2">
                {g.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
