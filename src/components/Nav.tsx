import type { Content, Lang } from "../content";

interface Props {
  c: Content;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function Nav({ c, lang, setLang }: Props) {
  const links: { id: string; label: string }[] = [
    { id: "rolefit", label: c.nav.rolefit },
    { id: "tech", label: c.nav.tech },
    { id: "projects", label: c.nav.projects },
    { id: "cv", label: c.nav.cv },
    { id: "contact", label: c.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="container-c flex h-14 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-white">
          IP<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 rounded-full border border-line bg-panel2 p-0.5 text-xs">
          {(["ru", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`rounded-full px-2.5 py-1 font-medium uppercase transition-colors ${
                lang === l ? "bg-accent text-white" : "text-muted hover:text-text"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
