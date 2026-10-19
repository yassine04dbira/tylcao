export interface ServiceItem {
  id: string;
  category: "engineering" | "scripts" | "video";
  title: string;
  badge: string;
  description: string;
  deliveryTime: string;
  techStack: string[];
  features: string[];
  highlight?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  // Pillar 1: Software Engineering
  {
    id: "fullstack-web",
    category: "engineering",
    title: "Full-Stack Web & SaaS Platforms",
    badge: "Core Engineering",
    description: "Production-grade web applications built with Next.js, React, Node.js, and high-performance serverless or containerized backends.",
    deliveryTime: "3-6 weeks",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Docker"],
    features: [
      "Responsive, accessible, mobile-first design",
      "Authentication, billing (Stripe) & role-based access",
      "Optimized Core Web Vitals & 95+ Lighthouse score",
      "Automated CI/CD deployment pipelines"
    ],
    highlight: true,
  },
  {
    id: "cloud-devops",
    category: "engineering",
    title: "Cloud Architecture & DevOps",
    badge: "Scale & Infra",
    description: "Architecting resilient, cost-effective infrastructure on AWS, Google Cloud, or Cloudflare with zero-downtime deployments.",
    deliveryTime: "1-3 weeks",
    techStack: ["AWS", "Cloudflare Workers", "Kubernetes", "Terraform", "GitHub Actions"],
    features: [
      "Serverless and microservice topologies",
      "Automated staging and production environments",
      "DDoS defense, CDN caching & security audits",
      "Cost optimization (cutting cloud bills by 30-60%)"
    ],
  },
  {
    id: "ai-agents",
    category: "engineering",
    title: "AI Integration & Agentic Systems",
    badge: "Intelligence",
    description: "Embedding custom LLMs, RAG pipelines, and autonomous agent workflows into existing business applications.",
    deliveryTime: "2-4 weeks",
    techStack: ["OpenAI", "Anthropic Claude", "LangChain", "Vector DBs", "FastAPI"],
    features: [
      "Document ingestion and semantic vector search",
      "Autonomous tool-calling customer support agents",
      "Structured output parsing & validation guardrails",
      "Local model deployment & fine-tuning"
    ],
  },

  // Pillar 2: Scripts & Automation
  {
    id: "custom-scripts",
    category: "scripts",
    title: "Python & Bash Automation Scripts",
    badge: "Rapid Utility",
    description: "Bespoke utility scripts engineered to eliminate repetitive manual labor, sync remote systems, and process bulk data.",
    deliveryTime: "2-5 days",
    techStack: ["Python", "Bash", "Node.js", "Regex", "Pandas"],
    features: [
      "Data sanitation, conversion & CSV/JSON transformation",
      "Scheduled cron jobs & automated server maintenance",
      "Custom CLI tools with interactive user prompts",
      "Robust error handling & Slack/Discord error alerts"
    ],
    highlight: true,
  },
  {
    id: "web-scrapers",
    category: "scripts",
    title: "Web Scrapers & Data Harvesters",
    badge: "Data Mining",
    description: "High-throughput, headless browser scrapers capable of overcoming complex anti-bot protection and dynamic SPAs.",
    deliveryTime: "3-7 days",
    techStack: ["Playwright", "Puppeteer", "BeautifulSoup", "Scrapy", "Proxy Pools"],
    features: [
      "Headless browser rendering for heavy JavaScript sites",
      "Automatic CAPTCHA bypassing & rotating proxy networks",
      "Structured data extraction directly into SQL/S3/Sheets",
      "Incremental delta scraping with change notifications"
    ],
  },
  {
    id: "bots-automation",
    category: "scripts",
    title: "Telegram, Discord & Slack Bots",
    badge: "Workflow Bots",
    description: "Interactive real-time communication bots that automate customer onboarding, system telemetry, and internal ops.",
    deliveryTime: "4-10 days",
    techStack: ["Telegraf", "Discord.js", "Webhooks", "Redis", "FastAPI"],
    features: [
      "Real-time alerts, payment verification & gated roles",
      "Interactive menu buttons, modals & multi-step wizards",
      "Direct integration with Stripe, CRM, and databases",
      "24/7 uptime containerized deployment"
    ],
  },
  {
    id: "integration-flows",
    category: "scripts",
    title: "n8n, Make & Zapier Pipelines",
    badge: "Zero-Code / Hybrid",
    description: "Complex business automation flows connecting CRM, payment systems, email marketing, and ERPs seamlessly.",
    deliveryTime: "3-7 days",
    techStack: ["n8n", "Make", "Zapier", "REST APIs", "Webhooks"],
    features: [
      "Multi-branch conditional logic and fail-safe retries",
      "Automated lead enrichment and instant routing",
      "Custom Javascript/Python code nodes for edge cases",
      "Self-hosted n8n installation on your private VPS"
    ],
  },

  // Pillar 3: Video Editing & Creative Media
  {
    id: "product-reels",
    category: "video",
    title: "Cinematic Product & SaaS Launch Reels",
    badge: "High Conversion",
    description: "Punchy, fast-paced launch videos showcasing your product's best features with sleek screen recordings, 3D device mockups, and sound design.",
    deliveryTime: "5-10 days",
    techStack: ["After Effects", "Premiere Pro", "Blender", "DaVinci Resolve", "Sound FX"],
    features: [
      "3D device mockups & smooth cursor animations",
      "Dynamic typography, glitch and zoom transitions",
      "Custom SFX & high-energy royalty-free music bed",
      "Formats for YouTube, Product Hunt, Twitter, and LinkedIn"
    ],
    highlight: true,
  },
  {
    id: "short-form",
    category: "video",
    title: "High-Retention Short-Form Content",
    badge: "Viral Growth",
    description: "Viral-ready TikTok, Instagram Reels, and YouTube Shorts designed with fast pacing, kinetic captions, and high watch-time hooks.",
    deliveryTime: "3-7 days",
    techStack: ["CapCut Pro", "Premiere Pro", "Dynamic Subtitles", "Color Grading"],
    features: [
      "Kinetic animated typography & emoji popups",
      "Pattern-interrupt pacing to maximize viewer retention",
      "Optimized for 9:16 mobile vertical format",
      "A/B test variations with alternate hooks"
    ],
  },
  {
    id: "automated-video",
    category: "video",
    title: "Programmatic & Batch Video Generation",
    badge: "Automation + Video",
    description: "Automated video generation pipelines using code (FFmpeg, HyperFrames, Remotion) to render hundreds of personalized clips.",
    deliveryTime: "1-3 weeks",
    techStack: ["FFmpeg", "Python Video Engine", "Node.js", "AWS Lambda", "HyperFrames"],
    features: [
      "Generate personalized dynamic videos from CSV/API feeds",
      "Automated podcast/stream clipping & caption burning",
      "Serverless rendering on cloud workers",
      "Automated upload & publishing via social APIs"
    ],
  },
];
