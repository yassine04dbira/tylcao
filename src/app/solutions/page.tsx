import React from "react";
import Link from "next/link";
import { Rocket, Building2, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Clock, Cpu } from "lucide-react";

export const metadata = {
  title: "Solutions — For Startups & Enterprise | Tylcao",
  description:
    "Tailored engineering, automation, and video solutions designed specifically for high-velocity startups and mission-critical enterprise teams.",
};

export default function SolutionsPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 bg-grid-pattern">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/50">
          Targeted Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Purpose-built pathways for startups and enterprises.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Whether you need lightning-fast speed to launch an MVP or enterprise-grade reliability with guaranteed SLAs, we provide the right engagement model.
        </p>
      </div>

      {/* Startup Track */}
      <div id="startups" className="rounded-3xl bg-[#0c0f1a] border border-cyan-500/30 p-8 sm:p-12 space-y-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                Pathway 01
              </span>
              <h2 className="text-2xl font-bold text-white">For High-Growth Startups &amp; Scaleups</h2>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 self-start sm:self-auto">
            ⚡ 14-Day MVP Speed
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono text-sm font-bold">01. Turnkey MVP Delivery</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We take your idea from wireframe to production in 2 to 3 weeks. Modern Next.js stack, Supabase/Postgres, Stripe payments, and clean scalable architecture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono text-sm font-bold">02. Growth Scripts &amp; Scrapers</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Automate cold lead harvesting, directory data gathering, and competitor pricing scrapers to power your organic go-to-market engine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono text-sm font-bold">03. 3D Launch Product Reels</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Stop launching with boring screenshots. We produce cinematic 60s teaser reels with 3D device renders and custom sound design to dominate Product Hunt and X.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>100% Code Ownership • Direct Slack Access • No Long-Term Lock-in</span>
          </div>

          <Link
            href="/contact?services=software,video"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider hover:bg-cyan-300 transition-all"
          >
            <span>Book Startup Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Enterprise Track */}
      <div id="enterprise" className="rounded-3xl bg-[#0c0f1a] border border-emerald-500/30 p-8 sm:p-12 space-y-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Pathway 02
              </span>
              <h2 className="text-2xl font-bold text-white">For Enterprise &amp; Mid-Market Teams</h2>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 self-start sm:self-auto">
            🛡️ 99.99% Uptime &amp; SLA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-emerald-400 font-mono text-sm font-bold">01. Cloud &amp; High-Volume Infra</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Design and maintenance of resilient Kubernetes clusters, multi-region serverless workers, Terraform infrastructure-as-code, and legacy app modernization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-emerald-400 font-mono text-sm font-bold">02. Autonomous Fleet Ops Bots</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Intelligent Telegram/Slack incident auto-remediation bots that continuously monitor backend health, alert on anomalies, and restart failed workers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-emerald-400 font-mono text-sm font-bold">03. Automated ETL &amp; Financial Sync</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Automated multi-system reconciliation pipelines connecting Stripe, banking APIs, ERP systems, and internal analytics data warehouses.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA Compliance • SOC2-Compliant Pipelines • Master Services Agreement (MSA)</span>
          </div>

          <Link
            href="/contact?services=cloud,scripts"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider hover:bg-emerald-300 transition-all"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Comparative Feature Matrix */}
      <div className="rounded-3xl bg-[#080a12] border border-slate-800 p-8 sm:p-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-white">Compare Engagement Tracks</h3>
          <p className="text-xs text-slate-400">Choose the framework that matches your operational tempo.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="py-3 px-4">Feature / Metric</th>
                <th className="py-3 px-4 text-cyan-400">Startup Sprint</th>
                <th className="py-3 px-4 text-emerald-400">Enterprise Engagement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Kickoff Timeline</td>
                <td className="py-3 px-4">Within 48 Hours</td>
                <td className="py-3 px-4">Within 5-7 Business Days (after MSA)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Turnaround</td>
                <td className="py-3 px-4">14 - 21 Days</td>
                <td className="py-3 px-4">Monthly Retainer / Ongoing Sprints</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Deliverables</td>
                <td className="py-3 px-4">Full-Stack MVP + Scraper + Launch Video</td>
                <td className="py-3 px-4">Cloud Infra + Bot Clusters + Data Pipelines</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">Communication</td>
                <td className="py-3 px-4">Shared Slack Channel + Loom Demos</td>
                <td className="py-3 px-4">Dedicated Slack / Teams + Bi-weekly Syncs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-white">IP &amp; Code Ownership</td>
                <td className="py-3 px-4">100% Client Owned on Delivery</td>
                <td className="py-3 px-4">100% Client Owned + Full Documentation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
