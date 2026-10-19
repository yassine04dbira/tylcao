"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Building2, CheckCircle2, ArrowRight, Zap, Shield, Cpu, Clock } from "lucide-react";

export const DualAudienceGateway: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<"startup" | "enterprise">("startup");

  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#0f121e] to-[#090b12] border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
        selectedAudience === "startup" ? "bg-cyan-500/10" : "bg-emerald-500/10"
      }`} />

      {/* Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
            Tailored Engagement Models
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Engineered for where you are today.
          </h2>
        </div>

        {/* Audience Selector Tabs */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => setSelectedAudience("startup")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedAudience === "startup"
                ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Rocket className="w-4 h-4" />
            <span>For Startups</span>
          </button>
          <button
            onClick={() => setSelectedAudience("enterprise")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedAudience === "enterprise"
                ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>For Enterprise</span>
          </button>
        </div>
      </div>

      {/* Content for Selected Audience */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {selectedAudience === "startup" ? (
          <>
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                <Zap className="w-4 h-4" />
                <span>RAPID MVP TO MARKET // 14-DAY VELOCITY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Launch your software, automate your ops, and create viral launch videos in weeks.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Startups cannot afford bloated dev cycles or separate fragmented agencies. Tylcao acts as your fractional CTO and creative studio in one: delivering lean, production-ready code, automated growth scripts, and cinematic launch videos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "14-Day Production MVP Sprint",
                  "Scrapers & Growth Automation Scripts",
                  "Viral Launch Reels & Product Hunt Video",
                  "Zero technical debt Next.js & Postgres stack",
                  "Transparent weekly sprint pricing",
                  "Direct Slack access with senior builders",
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/solutions#startups"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold tracking-wider uppercase transition-all"
                >
                  <span>Explore Startup Playbook</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0a0c14] border border-cyan-500/20 rounded-2xl p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between text-slate-400 pb-3 border-b border-slate-800">
                <span>TYPICAL STARTUP PACKAGE</span>
                <span className="text-cyan-400 font-bold">ALL-IN-ONE</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold text-xs">Full-Stack Web App</div>
                  <div className="text-[11px] text-slate-400">Next.js + Auth + Billing + Deploy</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold text-xs">Growth & Lead Scraper Script</div>
                  <div className="text-[11px] text-slate-400">Python crawler with automated CRM sync</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold text-xs">60s 3D Launch Product Reel</div>
                  <div className="text-[11px] text-slate-400">Tailored for Product Hunt & X/Twitter</div>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Average turnaround: 14 to 21 business days</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                <Shield className="w-4 h-4" />
                <span>MISSION-CRITICAL SCALE // ENTERPRISE RIGOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Scalable cloud infrastructure, legacy modernizations, and high-volume data pipelines.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For enterprise organizations, stability, zero downtime, and strict security compliance are non-negotiable. Tylcao embeds specialized engineering capacity to tackle complex system integrations, automated data pipelines, and internal tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "99.99% Uptime SLA Architecture",
                  "Enterprise Data Pipeline & ETL Automation",
                  "SOC2 & GDPR Compliance Rigor",
                  "High-Volume API Microservice Gateways",
                  "Legacy Code Modernization & Migration",
                  "Dedicated Senior Engineering Squads",
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/solutions#enterprise"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold tracking-wider uppercase transition-all"
                >
                  <span>Explore Enterprise Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0a0c14] border border-emerald-500/20 rounded-2xl p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between text-slate-400 pb-3 border-b border-slate-800">
                <span>ENTERPRISE ENGAGEMENT</span>
                <span className="text-emerald-400 font-bold">SCALE & SECURITY</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold text-xs">Cloud Modernization & DevOps</div>
                  <div className="text-[11px] text-slate-400">Terraform, Kubernetes & AWS/GCP Multi-Region</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold text-xs">Autonomous Ops & Telegram Fleet Bots</div>
                  <div className="text-[11px] text-slate-400">Automated triage saving 1,200+ dev hours/month</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-white font-bold text-xs">B2B Product Demos & Motion Graphics</div>
                  <div className="text-[11px] text-slate-400">High-converting sales enablement reels</div>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-cyan-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>NDA & Enterprise Master Services Agreement (MSA) Ready</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
