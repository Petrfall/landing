import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export function Section({ id, title, lead, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-c">
        <Reveal>
          <h2 className="section-title">{title}</h2>
          {lead && <p className="mt-3 max-w-2xl text-muted">{lead}</p>}
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
