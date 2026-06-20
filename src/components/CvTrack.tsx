import type { Content } from "../content";
import { Section } from "./Section";

export function CvTrack({ c }: { c: Content }) {
  return (
    <Section id="cv" title={c.cv.title} lead={c.cv.lead}>
      <div className="card p-6">
        <ul className="space-y-3">
          {c.cv.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
