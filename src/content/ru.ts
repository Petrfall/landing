import type { Content } from "./types";

export const ru: Content = {
  nav: {
    rolefit: "Почему я",
    tech: "Технологии",
    projects: "Проекты",
    cv: "CV-трек",
    contact: "Контакты",
  },
  hero: {
    badge: "AI Engineer · Prompt Engineer",
    name: "Илья Петров",
    role: "Строю production-LLM-агентов под доменные задачи",
    tagline:
      "Прохожу путь от сырого источника (PDF до 700 стр., JSON, ARXML, Excel) до валидной формальной модели и документации — через цепочки LLM-скиллов со structured output и валидацией на каждом шаге.",
    intro:
      "На основной работе спроектировал и поддерживаю библиотеку из 20 LLM-скиллов на Claude Code SDK / Anthropic API, внедрённую в инженерную команду АО «КАМА» (электромобиль «Атом»).",
    ctaPrimary: "Поиск поставщиков →",
    ctaSecondary: "GitHub",
    metrics: [
      { value: "20", label: "LLM-скиллов в production" },
      { value: "150–200", label: "чел-часов / месяц освобождено" },
      { value: "×16–×240", label: "ускорение типовых задач" },
      { value: "до 700 стр.", label: "PDF на вход агенту" },
    ],
  },
  rolefit: {
    title: "Почему мой опыт релевантен роли",
    lead:
      "Не пересказ резюме, а прямой маппинг: что нужно AI Engineer / Prompt Engineer — и где я это уже делал руками в production.",
    items: [
      {
        need: "Проектирование LLM-агентов и промптов под прикладные задачи",
        have:
          "20 узких скиллов на Claude Code SDK / Anthropic API в эксплуатации у команды 5+ инженеров. Few-shot, chain-of-thought, ReAct, prompt chaining, версионирование промптов.",
      },
      {
        need: "Гарантированно валидный машинный вывод",
        have:
          "Structured output через Pydantic / JSON Schema для генерации валидного DSL-кода (SysML v2). Валидация синтаксиса и доменных правил на каждом шаге — без согласия проверок изменения не уходят в модель.",
      },
      {
        need: "Интеграция LLM с разнородными источниками данных",
        have:
          "Единый skill-интерфейс к PDF (pdfplumber, до 700 стр.), JSON (Devprom v2.1.V), Excel-матрицам сигналов, ARXML/AUTOSAR, DBC. Production-ETL: парсинг → структурирование → LLM-трансформация → валидация → коммит в Git.",
      },
      {
        need: "RAG и управление контекстом",
        have:
          "Трёхуровневая база знаний агента (теория языка / методология / специфика проекта) с управляемым context routing. Пет-RAG: ~5 000 чанков, гибридный поиск BM25 + dense, reranking, Qdrant.",
      },
      {
        need: "Оценка качества генерации",
        have:
          "LLM-as-a-judge, golden datasets, регрессионные наборы для скиллов, A/B промптов. Метрики: latency, success rate, cost per interaction, token usage.",
      },
      {
        need: "Токен- и стоимость-оптимизация",
        have:
          "Чанкование длинных входов, кэширование промежуточных JSON, dynamic model selection (Sonnet vs Opus) по сложности задачи — баланс качества и стоимости.",
      },
    ],
  },
  tech: {
    title: "Релевантные технологии",
    lead: "То, с чем работал руками. В скобках — уровень, если это не production.",
    groups: [
      {
        title: "LLM & Prompt Engineering",
        items: [
          "Claude Sonnet 4.5 / Opus 4 (Anthropic API)",
          "Claude Code SDK",
          "Structured output (Pydantic / JSON Schema)",
          "Few-shot · CoT · ReAct · prompt chaining",
          "Context engineering · токен-оптимизация",
          "GPT-4o / GPT-4.1 (знаком)",
        ],
      },
      {
        title: "Агентские архитектуры",
        items: [
          "Claude Code SDK (production)",
          "Anthropic Agent SDK",
          "Function calling / tool use",
          "Multi-step agents · memory",
          "MCP (Model Context Protocol)",
          "LangChain / LangGraph (концептуально)",
        ],
      },
      {
        title: "RAG & векторный поиск",
        items: [
          "Chunking: рекурсивный / по структуре / семантический",
          "Гибридный поиск BM25 + dense",
          "Reranking (cross-encoder)",
          "Qdrant · ChromaDB · pgvector",
          "Выбор эмбеддингов под домен",
        ],
      },
      {
        title: "ETL & источники данных",
        items: [
          "PDF: pdfplumber, PyPDF2 (до 700 стр.)",
          "JSON · XML / ARXML / AUTOSAR · DBC",
          "Excel-матрицы · CSV",
          "Pydantic-валидация контрактов",
        ],
      },
      {
        title: "Языки & стек",
        items: [
          "Python 3.12 (pandas, NumPy, Pydantic, asyncio)",
          "TypeScript",
          "FastAPI · aiohttp · asyncio",
          "SQL: PostgreSQL · MS SQL · SQLite",
          "Java (учебный уровень)",
        ],
      },
      {
        title: "Оценка & инфраструктура",
        items: [
          "LLM-as-a-judge · golden datasets",
          "pytest (unit / integration, моки, фикстуры)",
          "Git / GitLab · CI (GitHub Actions / GitLab CI)",
          "Docker / docker-compose",
          "Ollama / LM Studio (локальные LLM)",
        ],
      },
    ],
  },
  projects: {
    title: "Проекты, которые это доказывают",
    lead: "От production-агента до пет-проектов — каждый закрывает конкретную грань роли.",
    items: [
      {
        name: "AI-агент архитектора · АО «КАМА» (Атом)",
        tag: "Production · основной кейс",
        highlight: true,
        summary:
          "Библиотека из 20 LLM-скиллов, автоматизирующая рутину системного архитектора в автопроме: разбор спецификаций, генерация формальной модели SysML v2, аудит, документация.",
        bullets: [
          "20 узких скиллов вместо одного «универсального» — проще тестировать и сопровождать; собираются в цепочки (3–5 скиллов на сценарий).",
          "Трёхуровневая база знаний (SysML v2 / ASPICE + ISO 26262 / специфика «Атом») с context routing — RAG-adjacent без векторного поиска.",
          "Structured output (Pydantic) → гарантированно валидный DSL; валидация синтаксиса и доменных правил на каждом шаге.",
          "Замеренный эффект: конвертация SSTS PDF→модель 16 ч → 10 мин (×96); полный отчёт трассируемости 6 ч → 2 мин (×180).",
          "Защищено как ВКР (УрФУ, 2026), акт о внедрении в АО «КАМА».",
        ],
        stack: ["Claude Code SDK", "Anthropic API", "Python 3.12", "Pydantic", "PlantUML", "GitLab"],
      },
      {
        name: "Resume Scorer",
        tag: "Свежий пет-проект",
        highlight: true,
        summary:
          "Сервис скоринга резюме под вакансию: per-criterion обоснования, confidence, детект инъекций; автономный сбор аналитики рынка с hh.ru и Trudvsem.",
        bullets: [
          "Структурный pipeline вместо «агента ради агента»: детерминированная оркестрация со structured output.",
          "Provider-абстракция (Anthropic / OpenAI-совместимый / mock) + кэш по хэшу входа.",
          "Heuristic baseline без API-ключей (~0.96 точность ранжирования) — демонстрация ценности LLM.",
          "Single-URL деплой: React SPA + FastAPI за nginx, фоновый воркер (arq) по расписанию.",
        ],
        stack: ["Python 3.12", "FastAPI", "SQLite", "Redis", "React + TS", "Docker"],
        links: [{ label: "GitHub", href: "https://github.com/Petrfall/resume-scorer" }],
      },
      {
        name: "Поиск поставщиков продуктов питания",
        tag: "Часть 2 тестового · в работе",
        summary:
          "Сервис поиска и сравнения food-поставщиков: web-поиск + LLM-извлечение в строгую схему (MOQ, цены, сертификаты, контакты), ранжирование «с кем связаться».",
        bullets: [
          "Тот же production-паттерн: structured ETL + provider-абстракция + кэш.",
          "Source-attribution на каждое поле — прозрачность данных.",
          "Демонстрирует прикладной AI-инжиниринг на новой доменной задаче.",
        ],
        stack: ["FastAPI", "SQLite", "React + TS", "Anthropic API"],
      },
      {
        name: "RAG над методичкой · FastAPI-прокси · локальные LLM",
        tag: "Пет-проекты",
        summary: "Несколько фокусных экспериментов вокруг RAG, инфраструктуры LLM и оценки.",
        bullets: [
          "RAG: индексация ~5 000 чанков (text-embedding-3-small + Qdrant), гибридный поиск, сравнение с baseline.",
          "FastAPI-прокси к LLM-провайдерам: async, Pydantic-валидация, единый интерфейс к Anthropic и OpenAI.",
          "Сравнение Llama 3.1 / Qwen 2.5 / Gemma 2 (Ollama) против Claude на доменном разборе SysML.",
        ],
        stack: ["Qdrant", "FastAPI", "asyncio", "Ollama"],
      },
    ],
  },
  cv: {
    title: "Параллельный трек: Computer Vision",
    lead:
      "Прикладной CV для автономного транспорта — вторичная, но релевантная компетенция (проект «Атом»).",
    bullets: [
      "Real-time детекция полос разметки на OpenCV, ~30 FPS на CPU; tuning pipeline снизил ошибки подсчёта полос на 15–20%.",
      "Модуль оценки ориентации авто относительно полосы (локальная регрессия, медианная фильтрация) — точность ±2° в реальном времени.",
      "Интеграция траекторий SLAM / Visual Odometry в map-server с выравниванием и сглаживанием.",
    ],
  },
  contact: {
    title: "Связаться",
    lead: "Открыт к AI Engineer / Prompt Engineer ролям. Удалёнка, гибрид или офис в Екатеринбурге.",
    email: "gavaryn228@gmail.com",
    telegram: "https://t.me/gavaryn228",
    github: "https://github.com/Petrunya228",
    resumeNote: "Резюме и портфолио — по запросу.",
  },
  footer: "Илья Петров · AI Engineer / Prompt Engineer · Екатеринбург",
};
