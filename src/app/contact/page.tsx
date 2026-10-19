import React, { Suspense } from "react";
import { CleanContactForm } from "@/components/CleanContactForm";
import { Mail, Clock, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";
import { TilcayoIcon } from "@/components/TilcayoIcon";

export const metadata = {
  title: "Contact & Project Intake — Tylcao",
  description:
    "Submit your custom project brief for software engineering, automation scripts, or video editing. Guaranteed response within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 bg-grid-pattern">
      {/* Top Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>DIRECT PROJECT INTAKE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s engineer your next milestone.
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Fill out the brief below. A senior engineer and creative director will analyze your requirements and get back to you with a scope and quote within 24 hours.
        </p>
      </div>

      {/* Main Intake Form wrapped in Suspense for search params */}
      <Suspense
        fallback={
          <div className="p-12 text-center text-slate-400 font-mono text-xs">
            Loading intake interface...
          </div>
        }
      >
        <CleanContactForm />
      </Suspense>

      {/* Direct Contact Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs font-mono">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-400 text-[11px]">Direct Email</div>
            <a href="mailto:contact@tylcao.com" className="text-white hover:text-cyan-400 font-bold transition-colors">
              contact@tylcao.com
            </a>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-400 text-[11px]">Guaranteed SLA</div>
            <div className="text-white font-bold">&lt; 24 Hours Response</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-950 text-violet-400 border border-violet-800/60">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-400 text-[11px]">Confidentiality</div>
            <div className="text-white font-bold">Standard NDA Included</div>
          </div>
        </div>
      </div>
    </div>
  );
}
