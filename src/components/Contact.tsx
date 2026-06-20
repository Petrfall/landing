import type { Content } from "../content";
import { Section } from "./Section";

export function Contact({ c }: { c: Content }) {
  const cards = [
    { label: "Email", value: c.contact.email, href: `mailto:${c.contact.email}` },
    { label: "Telegram", value: c.contact.telegram.replace("https://", ""), href: c.contact.telegram },
    { label: "GitHub", value: c.contact.github.replace("https://", ""), href: c.contact.github },
  ];

  return (
    <Section id="contact" title={c.contact.title} lead={c.contact.lead}>
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="card group p-5 transition-colors hover:border-accent/50"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-accent2">
              {card.label}
            </div>
            <div className="mt-2 break-all text-sm font-medium text-text group-hover:text-white">
              {card.value}
            </div>
          </a>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted">{c.contact.resumeNote}</p>
    </Section>
  );
}
