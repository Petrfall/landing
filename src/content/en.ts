import type { Content } from "./types";

export const en: Content = {
  nav: {
    rolefit: "Why me",
    tech: "Tech",
    projects: "Projects",
    cv: "CV track",
    contact: "Contact",
  },
  hero: {
    badge: "AI Engineer · Prompt Engineer",
    name: "Ilya Petrov",
    role: "I build production LLM agents for domain tasks",
    tagline:
      "From a raw source (PDF up to 700 pages, JSON, ARXML, Excel) to a valid formal model and docs — via chains of LLM skills with structured output and validation at every step.",
    intro:
      "At my main job I designed and maintain a library of 20 LLM skills on Claude Code SDK / Anthropic API, deployed to the engineering team at KAMA (Atom EV).",
    ctaPrimary: "Supplier search →",
    ctaSecondary: "GitHub",
    metrics: [
      { value: "20", label: "LLM skills in production" },
      { value: "150–200", label: "person-hours / month freed" },
      { value: "×16–×240", label: "speed-up on routine tasks" },
      { value: "up to 700 pp.", label: "PDF fed to the agent" },
    ],
  },
  rolefit: {
    title: "Why my experience fits the role",
    lead:
      "Not a resume rehash — a direct mapping: what an AI Engineer / Prompt Engineer needs vs. where I've already done it in production.",
    items: [
      {
        need: "Designing LLM agents & prompts for applied tasks",
        have:
          "20 narrow skills on Claude Code SDK / Anthropic API, in use by a 5+ engineer team. Few-shot, chain-of-thought, ReAct, prompt chaining, prompt versioning.",
      },
      {
        need: "Guaranteed valid machine output",
        have:
          "Structured output via Pydantic / JSON Schema to generate valid DSL code (SysML v2). Syntax and domain-rule validation at every step — nothing reaches the model without checks passing.",
      },
      {
        need: "Integrating LLMs with heterogeneous data sources",
        have:
          "One skill interface over PDF (pdfplumber, up to 700 pp.), JSON (Devprom v2.1.V), Excel signal matrices, ARXML/AUTOSAR, DBC. Production ETL: parse → structure → LLM transform → validate → commit to Git.",
      },
      {
        need: "RAG and context management",
        have:
          "Three-tier agent knowledge base (language theory / methodology / project specifics) with managed context routing. Pet RAG: ~5,000 chunks, hybrid BM25 + dense, reranking, Qdrant.",
      },
      {
        need: "Generation quality evaluation",
        have:
          "LLM-as-a-judge, golden datasets, regression suites for skills, prompt A/B. Metrics: latency, success rate, cost per interaction, token usage.",
      },
      {
        need: "Token & cost optimization",
        have:
          "Chunking long inputs, caching intermediate JSON, dynamic model selection (Sonnet vs Opus) by task complexity — quality/cost balance.",
      },
    ],
  },
  tech: {
    title: "Relevant technologies",
    lead: "Hands-on stack. Parenthetical notes mark non-production familiarity.",
    groups: [
      {
        title: "LLM & Prompt Engineering",
        items: [
          "Claude Sonnet 4.5 / Opus 4 (Anthropic API)",
          "Claude Code SDK",
          "Structured output (Pydantic / JSON Schema)",
          "Few-shot · CoT · ReAct · prompt chaining",
          "Context engineering · token optimization",
          "GPT-4o / GPT-4.1 (familiar)",
        ],
      },
      {
        title: "Agent architectures",
        items: [
          "Claude Code SDK (production)",
          "Anthropic Agent SDK",
          "Function calling / tool use",
          "Multi-step agents · memory",
          "MCP (Model Context Protocol)",
          "LangChain / LangGraph (conceptual)",
        ],
      },
      {
        title: "RAG & vector search",
        items: [
          "Chunking: recursive / structural / semantic",
          "Hybrid search BM25 + dense",
          "Reranking (cross-encoder)",
          "Qdrant · ChromaDB · pgvector",
          "Domain-fit embedding selection",
        ],
      },
      {
        title: "ETL & data sources",
        items: [
          "PDF: pdfplumber, PyPDF2 (up to 700 pp.)",
          "JSON · XML / ARXML / AUTOSAR · DBC",
          "Excel matrices · CSV",
          "Pydantic contract validation",
        ],
      },
      {
        title: "Languages & stack",
        items: [
          "Python 3.12 (pandas, NumPy, Pydantic, asyncio)",
          "TypeScript",
          "FastAPI · aiohttp · asyncio",
          "SQL: PostgreSQL · MS SQL · SQLite",
          "Java (academic level)",
        ],
      },
      {
        title: "Evaluation & infra",
        items: [
          "LLM-as-a-judge · golden datasets",
          "pytest (unit / integration, mocks, fixtures)",
          "Git / GitLab · CI (GitHub Actions / GitLab CI)",
          "Docker / docker-compose",
          "Ollama / LM Studio (local LLMs)",
        ],
      },
    ],
  },
  projects: {
    title: "Projects that prove it",
    lead: "From a production agent to focused pet projects — each covers a concrete facet of the role.",
    items: [
      {
        name: "Architect AI agent · KAMA (Atom EV)",
        tag: "Production · flagship",
        highlight: true,
        summary:
          "A library of 20 LLM skills automating a systems architect's routine in automotive: spec parsing, SysML v2 model generation, audit, documentation.",
        bullets: [
          "20 narrow skills instead of one 'universal' one — easier to test and maintain; composed into chains (3–5 skills per scenario).",
          "Three-tier knowledge base (SysML v2 / ASPICE + ISO 26262 / Atom specifics) with context routing — RAG-adjacent without vector search.",
          "Structured output (Pydantic) → guaranteed valid DSL; syntax and domain-rule validation at every step.",
          "Measured impact: SSTS PDF→model conversion 16h → 10min (×96); full traceability report 6h → 2min (×180).",
          "Defended as a thesis (UrFU, 2026), with a deployment act at KAMA.",
        ],
        stack: ["Claude Code SDK", "Anthropic API", "Python 3.12", "Pydantic", "PlantUML", "GitLab"],
      },
      {
        name: "Resume Scorer",
        tag: "Recent pet project",
        highlight: true,
        summary:
          "A resume-vs-vacancy scoring service: per-criterion rationale, confidence, injection detection; autonomous market analytics from hh.ru and Trudvsem.",
        bullets: [
          "Structural pipeline over 'agent-for-its-own-sake': deterministic orchestration with structured output.",
          "Provider abstraction (Anthropic / OpenAI-compatible / mock) + caching by input hash.",
          "Heuristic baseline with no API keys (~0.96 ranking accuracy) — demonstrates LLM value.",
          "Single-URL deploy: React SPA + FastAPI behind nginx, background worker (arq) on schedule.",
        ],
        stack: ["Python 3.12", "FastAPI", "SQLite", "Redis", "React + TS", "Docker"],
        links: [{ label: "GitHub", href: "https://github.com/Petrfall/resume-scorer" }],
      },
      {
        name: "Food supplier search",
        tag: "Test task Part 2 · in progress",
        summary:
          "A service to find and compare food suppliers: web search + LLM extraction into a strict schema (MOQ, prices, certificates, contacts), 'who to contact' ranking.",
        bullets: [
          "Same production pattern: structured ETL + provider abstraction + caching.",
          "Source attribution per field — data transparency.",
          "Demonstrates applied AI engineering on a new domain task.",
        ],
        stack: ["FastAPI", "SQLite", "React + TS", "Anthropic API"],
      },
      {
        name: "RAG over docs · FastAPI proxy · local LLMs",
        tag: "Pet projects",
        summary: "A few focused experiments around RAG, LLM infra, and evaluation.",
        bullets: [
          "RAG: ~5,000-chunk index (text-embedding-3-small + Qdrant), hybrid search, baseline comparison.",
          "FastAPI proxy to LLM providers: async, Pydantic validation, unified Anthropic + OpenAI interface.",
          "Llama 3.1 / Qwen 2.5 / Gemma 2 (Ollama) vs Claude on a domain SysML parsing task.",
        ],
        stack: ["Qdrant", "FastAPI", "asyncio", "Ollama"],
      },
    ],
  },
  cv: {
    title: "Parallel track: Computer Vision",
    lead: "Applied CV for autonomous transport — a secondary but relevant competency (Atom project).",
    bullets: [
      "Real-time lane-marking detection on OpenCV, ~30 FPS on CPU; pipeline tuning cut lane-count errors by 15–20%.",
      "Vehicle-vs-lane orientation module (local regression, median filtering) — ±2° accuracy in real time.",
      "SLAM / Visual Odometry trajectory integration into a map-server with alignment and smoothing.",
    ],
  },
  contact: {
    title: "Get in touch",
    lead: "Open to AI Engineer / Prompt Engineer roles. Remote, hybrid, or on-site in Yekaterinburg.",
    email: "gavaryn228@gmail.com",
    telegram: "https://t.me/gavaryn228",
    github: "https://github.com/Petrunya228",
    resumeNote: "Resume and portfolio available on request.",
  },
  footer: "Ilya Petrov · AI Engineer / Prompt Engineer · Yekaterinburg",
};
