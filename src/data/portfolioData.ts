export interface PortfolioItem {
  id: string;
  category: "engineering" | "scripts" | "video";
  title: string;
  client: string;
  badge: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  codeSnippet?: string;
  videoPlaceholder?: {
    duration: string;
    aspectRatio: "16:9" | "9:16";
    thumbnailColor: string;
  };
  link?: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  // Software Engineering
  {
    id: "pulsecloud",
    category: "engineering",
    title: "PulseCloud Enterprise Gateway",
    client: "PulseCloud Global",
    badge: "Cloud Infrastructure",
    description: "Architected a zero-latency API gateway and real-time observability telemetry dashboard handling distributed microservices across 3 cloud regions.",
    metrics: [
      { label: "Request Throughput", value: "45M/day" },
      { label: "Latency P99", value: "<18ms" },
      { label: "Uptime SLA", value: "99.995%" }
    ],
    tags: ["Next.js", "TypeScript", "Go", "Docker", "PostgreSQL", "Cloudflare"],
    link: "https://github.com",
  },
  {
    id: "kroma-ai",
    category: "engineering",
    title: "Kroma Studio AI Generator",
    client: "Kroma Labs",
    badge: "Full-Stack SaaS",
    description: "Engineered an AI asset creation platform with real-time canvas editing, dynamic credit billing, and multi-tenant team collaboration.",
    metrics: [
      { label: "Active Creators", value: "12,000+" },
      { label: "Generation Speed", value: "1.4s" },
      { label: "Conversion Lift", value: "+38%" }
    ],
    tags: ["React", "FastAPI", "Python", "Tailwind CSS", "Stripe", "Redis"],
    link: "https://github.com",
  },
  {
    id: "vaultx",
    category: "engineering",
    title: "VaultX Security Verification Hub",
    client: "VaultX Financial",
    badge: "Security & Auditing",
    description: "Enterprise portal providing cryptographic proof of reserves, automated compliance reporting, and multi-signature workflow approvals.",
    metrics: [
      { label: "Assets Verified", value: "$450M+" },
      { label: "Audit Time Cut", value: "85%" },
      { label: "Zero Breach Record", value: "100%" }
    ],
    tags: ["Next.js", "Web3", "Solidity", "Node.js", "Tailwind CSS"],
    link: "https://github.com",
  },

  // Scripts & Automation
  {
    id: "hyperscraper",
    category: "scripts",
    title: "HyperScraper Distributed Harvester",
    client: "MarketPulse Intelligence",
    badge: "Python Web Scraping",
    description: "Resilient headless browser cluster with automated proxy rotation, smart fingerprint randomization, and automatic schema parsing.",
    metrics: [
      { label: "Weekly Scrapes", value: "2.4M items" },
      { label: "Block Rate", value: "<0.01%" },
      { label: "Processing Speed", value: "850 req/min" }
    ],
    tags: ["Python", "Playwright", "Docker", "RabbitMQ", "MongoDB"],
    codeSnippet: `import asyncio
from playwright.async_api import async_playwright

async def run_harvester(target_urls, proxy_cluster):
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--disable-blink-features=AutomationControlled"]
        )
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
            viewport={"width": 1920, "height": 1080}
        )
        # Automated bypass + resilient retry loop
        print("[TILCAYO-SCRAPER] 2.4M records processed with 0 bans.")`,
  },
  {
    id: "fleetops-bot",
    category: "scripts",
    title: "FleetOps Autonomous Incident Bot",
    client: "Aegis Tech Group",
    badge: "Telegram & Discord Ops",
    description: "Operational bot monitoring 40+ Kubernetes clusters. Automatically detects memory leaks, restarts unhealthy pods, and reports post-mortems.",
    metrics: [
      { label: "MTTR Reduction", value: "72%" },
      { label: "Automated Fixes", value: "430+" },
      { label: "On-Call Pings Saved", value: "1,200/mo" }
    ],
    tags: ["TypeScript", "Telegraf", "Kubernetes API", "Prometheus", "Webhooks"],
    codeSnippet: `// FleetOps Autonomous Pod Auto-Healer
bot.command('status', async (ctx) => {
  const clusterHealth = await kubeClient.getClusterStatus();
  if (clusterHealth.unhealthyPods > 0) {
    await kubeClient.restartCrashloopingPods();
    return ctx.reply('⚠️ Auto-healed 3 crash-loop pods on node-worker-04.');
  }
  return ctx.reply('✅ All 40 clusters operating normally.');
});`,
  },
  {
    id: "finsync-pipeline",
    category: "scripts",
    title: "FinSync Multi-Currency ETL Flow",
    client: "Meridian Holdings",
    badge: "Automation Pipeline",
    description: "Automated Python and Bash cron pipeline reconciling multi-bank statement CSVs, crypto payouts, and ERP database entries every night.",
    metrics: [
      { label: "Manual Hours Saved", value: "45 hrs/week" },
      { label: "Error Rate", value: "0.00%" },
      { label: "Daily Volume", value: "$1.8M" }
    ],
    tags: ["Python", "Pandas", "Bash", "PostgreSQL", "Slack API"],
    codeSnippet: `#!/usr/bin/env bash
# FinSync Nightly Reconciliation Daemon
set -euo pipefail
echo "[$(date -u)] Fetching encrypted banking feeds..."
python3 -m finsync.reconcile --source=stripe,wise,mercury --dest=erp_ledger
echo "[$(date -u)] Reconciliation finished: 100% balanced."`,
  },

  // Video Editing & Creative Media
  {
    id: "hyperion-launch-reel",
    category: "video",
    title: "Hyperion Product Launch Film",
    client: "Hyperion DevTools",
    badge: "Cinematic Product Reel",
    description: "60-second high-energy product launch film featuring custom 3D isometric device models, UI kinetic animation, sound design, and pacing tuned for Twitter virality.",
    metrics: [
      { label: "Total Views", value: "850K+" },
      { label: "Product Hunt", value: "#1 of the Day" },
      { label: "Signups Driven", value: "4,200" }
    ],
    tags: ["After Effects", "Premiere Pro", "Blender 3D", "Sound Design", "4K HDR"],
    videoPlaceholder: {
      duration: "0:58",
      aspectRatio: "16:9",
      thumbnailColor: "#0ea5e9"
    }
  },
  {
    id: "saas-walkthrough",
    category: "video",
    title: "FlowBase Interactive UI Walkthrough",
    client: "FlowBase AI",
    badge: "B2B Tech Explainer",
    description: "Polished feature overview highlighting complex AI workflow canvas features. Designed to turn cold enterprise leads into high-ticket demo bookings.",
    metrics: [
      { label: "Demo Booking Lift", value: "+44%" },
      { label: "Avg Watch Duration", value: "82%" },
      { label: "Turnaround Time", value: "5 Days" }
    ],
    tags: ["DaVinci Resolve", "After Effects", "Custom SFX", "Screen Recording Cleanup"],
    videoPlaceholder: {
      duration: "1:32",
      aspectRatio: "16:9",
      thumbnailColor: "#10b981"
    }
  },
  {
    id: "kinetic-mobile-reel",
    category: "video",
    title: "CyberPulse Mobile Viral Ads",
    client: "CyberPulse Security",
    badge: "Short-Form Social Ads",
    description: "Suite of 15 high-retention 9:16 vertical ads for TikTok and Instagram Reels. Featuring motion tracking, stylized text animations, and rapid hook variations.",
    metrics: [
      { label: "Paid ROAS", value: "3.8x" },
      { label: "CTR", value: "4.6%" },
      { label: "Hook Retention", value: "71% @ 3s" }
    ],
    tags: ["Vertical 9:16", "Kinetic Typography", "Motion Graphics", "CapCut / Premiere"],
    videoPlaceholder: {
      duration: "0:24",
      aspectRatio: "9:16",
      thumbnailColor: "#8b5cf6"
    }
  }
];
