import React from "react";
import Link from "next/link";
import { TabbedPortfolio } from "@/components/TabbedPortfolio";
import { ArrowRight, Trophy, Zap, Shield, Sparkles } from "lucide-react";

export const metadata = {
  title: "Work & Proof of Execution — Software, Scripts & Video | Tylcao",
  description:
    "Review Tylcao's past engineering builds, automation scripts, and video editing showreels. Verified performance, metrics, and case studies.",
};

export default function WorkPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 bg-grid-pattern">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/50">
          Case Studies &amp; Demonstrations
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Proof of work across code, automation, and media.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore our real-world software deployments, inspected python automation scripts, and high-retention video showreels.
        </p>
      </div>

      {/* Aggregate Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0a0d16] border border-slate-800 font-mono">
        <div className="text-center p-4">
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">45M+</div>
          <div className="text-[11px] text-slate-400 mt-1 uppercase">Daily API Requests</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">2.4M</div>
          <div className="text-[11px] text-slate-400 mt-1 uppercase">Weekly Scrapes Harvested</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl sm:text-3xl font-extrabold text-violet-400">850K+</div>
          <div className="text-[11px] text-slate-400 mt-1 uppercase">Video Launch Views</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl sm:text-3xl font-extrabold text-white">99.99%</div>
          <div className="text-[11px] text-slate-400 mt-1 uppercase">Infrastructure Uptime</div>
        </div>
      </div>

      {/* Tabbed Portfolio Component */}
      <div>
        <TabbedPortfolio />
      </div>

      {/* Video Reel Spotlight Section */}
      <div id="video" className="rounded-3xl bg-gradient-to-br from-[#100d1c] to-[#07080f] border border-violet-500/30 p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 bg-violet-950/80 px-2.5 py-1 rounded-full border border-violet-800/50">
            Video Production Ethos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Why Great Software Needs Cinematic Video
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In modern software distribution, attention is the scarce commodity. You can have the most advanced codebase, but if your launch video doesn&apos;t hook the viewer in 3 seconds, they scroll past. We design every frame, cursor movement, 3D device angle, and sound effect to convert attention into active users.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            href="/contact?services=video,shortform"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider transition-all"
          >
            <span>Commission a Video Reel</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
