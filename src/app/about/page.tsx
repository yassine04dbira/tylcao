import React from "react";
import Link from "next/link";
import { TilcayoIcon } from "@/components/TilcayoIcon";
import { TILCAYO_ASCII, TILCAYO_FACTS } from "@/lib/mascot";
import { Sparkles, Terminal, ShieldCheck, Zap, Heart, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "About Tylcao — Engineering, Automation & the Tilcayo Mascot",
  description:
    "Learn about Tylcao's founding ethos, the convergence of software, scripts, and video editing, and the origin of the Tilcayo ASCII cat mascot.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 bg-grid-pattern">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/50">
          About Tylcao
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Where technical precision meets cinematic storytelling.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Tylcao was founded to eliminate the disconnect between the engineers who build digital products and the creative engines needed to scale them.
        </p>
      </div>

      {/* The Story of Tilcayo (*Leopardus tilcayo*) */}
      <div className="rounded-3xl bg-[#0b0e18] border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/50">
                The Mascot Origin
              </span>
              <span className="text-xs font-mono text-slate-400">Classified Sept 2026</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Legend of <em>Leopardus tilcayo</em>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In September 2026, international wildlife researchers made a historic discovery deep in the mist-shrouded cloud forests of Bolivia: <strong>Tilcayo</strong> (<em>Leopardus tilcayo</em>), a previously undescribed species of small, highly agile wild tiger-cat.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Living in extreme high-altitude conditions where air is thin and survival requires pinpoint precision, the Tilcayo cat is elusive, remarkably efficient, and leaves no wasted energy behind.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 font-mono text-xs text-cyan-300">
              <div className="text-slate-400 text-[11px] uppercase tracking-wider">Mascot Credo</div>
              <p>&ldquo;Operate lean. Move fast. Leap with surgical precision.&rdquo;</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              {TILCAYO_FACTS.map((fact, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-300">
                  <span className="text-cyan-400">🐾</span>
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-[#070910] rounded-2xl border border-cyan-500/30 text-center font-mono relative">
            <div className="text-xs text-slate-400 mb-2">RAW ASCII MASCOT // CAT.TXT</div>
            <pre className="text-[9px] sm:text-[10px] leading-[1.08] text-cyan-400 select-all overflow-x-auto p-2">
              {TILCAYO_ASCII}
            </pre>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Embedded in Tylcao Core Kernel v2.6.10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-white">Our Engineering Ethos</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            How we approach every script, component, and frame of video.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#0c0e18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-white">Deterministic Code</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We despise brittle software. Our scripts are engineered with automatic retry logic, proper exception handling, and self-healing worker loops.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0c0e18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-white">High Pacing &amp; Retention</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              In both code execution and video editing, latency is the enemy. We cut the fluff, optimize the render trees, and keep viewer attention locked in.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0c0e18] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/40 text-violet-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-white">Direct Access, Zero Agency Layers</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              You collaborate directly with the senior engineers writing the code and the creative directors editing your video. No middle managers or lost context.
            </p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Want to build together?</h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          We are currently taking on select software, automation, and video editing clients for Q4 and Q1.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider hover:bg-cyan-300 transition-all"
        >
          <span>Send Your Project Brief</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
