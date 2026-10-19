import React from "react";
import Link from "next/link";
import { TilcayoTerminal } from "@/components/TilcayoTerminal";
import { DualAudienceGateway } from "@/components/DualAudienceGateway";
import { ModularServiceCatalog } from "@/components/ModularServiceCatalog";
import { TabbedPortfolio } from "@/components/TabbedPortfolio";
import { TilcayoIcon } from "@/components/TilcayoIcon";
import { TILCAYO_ASCII_HEAD } from "@/lib/mascot";
import { 
  ArrowRight, 
  Code2, 
  Bot, 
  Video, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Layers,
  Clock,
  Compass
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-grid-pattern">
      {/* Hero Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-300 font-semibold">TYLCAO SYSTEMS</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Software • Automation Scripts • Video Editing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            We build software. <br />
            <span className="text-gradient-cyan">Automate systems.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Edit high-impact video.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Tylcao is a multidisciplinary technology and creative studio. We turn complex business friction into lean code, automated pipelines, and cinematic product reels.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Build Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-mono font-semibold transition-all"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore Modular Catalog</span>
            </Link>

            <Link
              href="/work"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-400 hover:text-white text-xs font-mono transition-all"
            >
              <Video className="w-4 h-4 text-violet-400" />
              <span>View Past Work</span>
            </Link>
          </div>
        </div>

        {/* Interactive Tilcayo Hero Terminal featuring the exact ASCII Mascot */}
        <div className="max-w-5xl mx-auto mt-6">
          <TilcayoTerminal />
        </div>
      </section>

      {/* 3 Pillars Overview Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/50">
            Three Core Pillars
          </span>
          <h2 className="text-3xl font-bold text-white">Full-spectrum execution under one roof.</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            No need to coordinate three separate vendors. We write the software, automate the backend, and produce the launch creative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Software */}
          <div className="p-8 rounded-2xl bg-[#0b0e17] border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 relative group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Pillar 01 // Engineering
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Software &amp; Web Apps</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Modern full-stack web and mobile applications engineered with Next.js, TypeScript, PostgreSQL, and scalable cloud microservices. Fast, resilient, and enterprise-ready.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Custom SaaS &amp; Internal Portals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cloud Architecture &amp; DevOps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Agents &amp; Semantic Search</span>
              </li>
            </ul>
            <Link
              href="/services?tab=engineering"
              className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              <span>Explore Dev Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 2: Scripts & Automation */}
          <div className="p-8 rounded-2xl bg-[#0b0e17] border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 relative group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Pillar 02 // Automation
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Scripts &amp; Automation</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Bespoke Python and Bash scripts, headless web scrapers, automated Telegram/Discord bots, and data reconciliation pipelines that free hundreds of engineering hours.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Distributed Playwright Scrapers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Autonomous Ops &amp; Triage Bots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>n8n, Make &amp; Zapier Custom Nodes</span>
              </li>
            </ul>
            <Link
              href="/services?tab=scripts"
              className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
            >
              <span>Explore Script Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 3: Video & Creative Media */}
          <div className="p-8 rounded-2xl bg-[#0b0e17] border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 relative group">
            <div className="w-12 h-12 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 font-bold">
              Pillar 03 // Motion &amp; Media
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Video Editing &amp; Reels</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              High-conversion product teasers, 3D device motion animations, kinetic short-form clips for TikTok/Reels, and automated batch rendering systems.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Cinematic 3D SaaS Launch Reels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>High-Retention 9:16 Social Cuts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Programmatic Video Pipelines (FFmpeg)</span>
              </li>
            </ul>
            <Link
              href="/services?tab=video"
              className="text-xs font-mono font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1.5"
            >
              <span>Explore Video Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Audience Section: Startups vs Enterprise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <DualAudienceGateway />
      </section>

      {/* Modular Service Catalog Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/50">
            Interactive Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Modular Service Menu
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Mix and match custom scripts, video packages, and engineering modules to build your tailored project scope.
          </p>
        </div>

        <ModularServiceCatalog />
      </section>

      {/* Tabbed Multimedia Portfolio Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/50">
            Proven Proof Of Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Selected Case Studies &amp; Previews
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore live software systems, interactive automation script code, and video editing reels.
          </p>
        </div>

        <TabbedPortfolio />
      </section>

      {/* Mascot Origin Section (Tilcayo / Leopardus tilcayo) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="rounded-3xl bg-[#090c15] border border-cyan-500/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 text-center font-mono">
              <TilcayoIcon size={72} className="mb-4" />
              <div className="text-cyan-300 font-bold text-sm">TILCAYO MASCOT</div>
              <div className="text-[11px] text-slate-400 italic">Leopardus tilcayo</div>
              <div className="mt-4 p-2 bg-[#06080e] rounded text-[10px] text-cyan-400/90 text-left w-full border border-slate-800/80">
                <pre>{TILCAYO_ASCII_HEAD}</pre>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/50">
                The Lore &amp; Meaning
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Why Tilcayo is Tylcao&apos;s Spirit Animal
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                In September 2026, biologists officially classified <em>Leopardus tilcayo</em>—a previously unknown, elusive tiger-cat thriving in the high-altitude cloud forests of Bolivia. 
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Small, razor-sharp, exceptionally agile, and operating effortlessly in demanding environments where others struggle—this is the exact philosophy behind Tylcao. We are nimble builders who deliver outsized technical firepower without the sluggish overhead of traditional mega-agencies.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>High-Altitude Agility</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resilient by Nature</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-violet-400" />
                  <span>ASCII Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/50 via-[#0e121e] to-teal-950/50 border border-cyan-500/40 p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-4 h-4" />
            <span>READY TO ACCELERATE?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl mx-auto">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Whether you need a custom Python script, full-stack web software, or a 3D video launch reel, we respond within 24 hours with an actionable scope and timeline.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
            >
              <span>Transmit Project Intake Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
