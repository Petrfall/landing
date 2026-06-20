import type { Content } from "../content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function RoleFit({ c }: { c: Content }) {
  return (
    <Section id="rolefit" title={c.rolefit.title} lead={c.rolefit.lead}>
      <div className="grid gap-4 md:grid-cols-2">
        {c.rolefit.items.map((it, i) => (
          <Reveal key={it.need} delay={i * 50}>
            <div className="card h-full p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 select-none font-mono text-xs text-accent2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{it.need}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{it.have}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
