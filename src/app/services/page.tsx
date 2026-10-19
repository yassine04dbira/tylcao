import React from "react";
import Link from "next/link";
import { ModularServiceCatalog } from "@/components/ModularServiceCatalog";
import { Code2, Bot, Video, ArrowRight, ShieldCheck, Cpu, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Modular Services — Software, Scripts & Video Editing | Tylcao",
  description:
    "Explore Tylcao's modular service menu: custom software development, Python automation scripts, headless scrapers, and cinematic video editing.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 bg-grid-pattern">
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/50">
          Modular Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Services tailored to your exact technical &amp; creative needs.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Select individual specialized modules or combine engineering, scripts, and video editing into a unified turnkey execution sprint.
        </p>
      </div>

      {/* Interactive Service Catalog */}
      <div>
        <ModularServiceCatalog />
      </div>

      {/* Execution Methodology */}
      <div className="rounded-3xl bg-[#0a0d16] border border-slate-800 p-8 sm:p-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/50">
            How We Execute
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            The Tylcao Delivery Protocol
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Engineered for rapid turnaround without sacrificing architectural integrity or visual fidelity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Scoping & Blueprint",
              desc: "We analyze your requirements, verify APIs, draft data schemas or storyboards, and freeze deliverables.",
              time: "24-48 Hours",
            },
            {
              step: "02",
              title: "Rapid Build Sprint",
              desc: "Writing modular code, resilient scrapers, or cutting video reels with daily asynchronous progress recaps.",
              time: "Week 1 - 2",
            },
            {
              step: "03",
              title: "Stress Testing & Grade",
              desc: "Automated test suites, anti-bot resilience verification, 4K rendering, and sound design mastering.",
              time: "48 Hours",
            },
            {
              step: "04",
              title: "Production Launch",
              desc: "CI/CD deployment, cron scheduler activation, handoff documentation, and 30 days of warranty support.",
              time: "Same Day",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative group hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-2xl font-mono font-extrabold text-cyan-400/80">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0d101a] to-teal-950/40 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to configure your project?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Head over to our intake form to check off your required services and receive an immediate project estimate and timeline.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider shadow-lg hover:scale-105 transition-all"
        >
          <span>Open Clean Intake Form</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
