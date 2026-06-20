import { useEffect, useState } from "react";
import { dict, type Lang } from "./content";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { RoleFit } from "./components/RoleFit";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { CvTrack } from "./components/CvTrack";
import { Contact } from "./components/Contact";

function detectLang(): Lang {
  const saved = localStorage.getItem("lang");
  if (saved === "ru" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const c = dict[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.title =
      lang === "ru"
        ? "Илья Петров — AI Engineer / Prompt Engineer"
        : "Ilya Petrov — AI Engineer / Prompt Engineer";
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Nav c={c} lang={lang} setLang={setLang} />
      <main>
        <Hero c={c} github={c.contact.github} />
        <RoleFit c={c} />
        <Tech c={c} />
        <Projects c={c} />
        <CvTrack c={c} />
        <Contact c={c} />
      </main>
      <footer className="border-t border-line/60 py-8">
        <div className="container-c flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
          <span>{c.footer}</span>
          <span className="font-mono">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
