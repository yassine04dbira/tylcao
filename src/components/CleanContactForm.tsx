"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Paperclip, Clock, ShieldCheck, Sparkles, AlertCircle, FileText } from "lucide-react";
import { TILCAYO_ASCII_HEAD } from "@/lib/mascot";

const AVAILABLE_SERVICES = [
  { id: "software", label: "Full-Stack Web & App Development", desc: "Next.js, React, Node.js, Databases" },
  { id: "scripts", label: "Python & Bash Automation Scripts", desc: "Custom utilities, scheduled cron jobs, ETL" },
  { id: "scrapers", label: "Web Scraping & Data Harvesters", desc: "Headless browser clusters, anti-bot bypass" },
  { id: "bots", label: "Telegram, Discord & Slack Bots", desc: "Automated community, ops & triage bots" },
  { id: "video", label: "Cinematic Video Editing & Launch Reels", desc: "4K product teasers, 3D device motion, SFX" },
  { id: "shortform", label: "Viral Short-Form Content (TikTok/Reels)", desc: "Kinetic captions, rapid hooks, 9:16 vertical" },
  { id: "cloud", label: "Cloud Infrastructure & DevOps", desc: "AWS, Cloudflare, Docker, CI/CD pipelines" },
];

const BUDGET_TIERS = [
  { id: "tier1", label: "< $2,500", desc: "Quick scripts or single video reel" },
  { id: "tier2", label: "$2,500 - $10,000", desc: "Rapid MVP or automation suite" },
  { id: "tier3", label: "$10,000 - $25,000", desc: "Full production platform & launch media" },
  { id: "tier4", label: "$25,000+", desc: "Enterprise scale or dedicated engineering squad" },
];

export const CleanContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("tier2");
  const [timeline, setTimeline] = useState("1-month");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; timestamp: string } | null>(null);

  // Sync with URL params if pre-selected
  useEffect(() => {
    const preSelected = searchParams.get("services");
    if (preSelected) {
      const items = preSelected.split(",");
      setSelectedServices(items);
    }
  }, [searchParams]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `TYL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({
        id: ticketId,
        timestamp: new Date().toLocaleTimeString(),
      });
    }, 1200);
  };

  return (
    <div className="rounded-3xl bg-[#0c0e18] border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {submittedTicket ? (
        <div className="py-12 px-4 text-center max-w-lg mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
              Brief Received &amp; Logged
            </span>
            <h3 className="text-2xl font-bold text-white">We are on it.</h3>
            <p className="text-xs text-slate-300">
              Thank you, <span className="text-white font-semibold">{fullName}</span>. Your project brief has been assigned reference ticket:
            </p>
            <div className="inline-block px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 font-mono text-sm font-bold tracking-wider my-2">
              {submittedTicket.id}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080a10] border border-slate-800 text-left font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
              <span className="text-[11px]">DISPATCH PROTOCOL</span>
              <span className="text-emerald-400">SLA: &lt;24 HOURS</span>
            </div>
            <p className="text-[11px] text-slate-400">
              A senior engineer and creative director will review your requirements and reach out via <span className="text-cyan-300">{email}</span>.
            </p>
            <pre className="text-[10px] text-cyan-400/80 pt-2">{TILCAYO_ASCII_HEAD}</pre>
          </div>

          <button
            onClick={() => setSubmittedTicket(null)}
            className="text-xs font-mono text-slate-400 hover:text-white underline underline-offset-4"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                Direct Project Intake
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Guaranteed SLA &lt;24h
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tell us about what you want to build.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select your required capabilities, specify your timeline and budget, and paste your brief.
            </p>
          </div>

          {/* Section 1: Service Checkboxes */}
          <div className="space-y-3">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              1. What services do you need? (Check all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AVAILABLE_SERVICES.map((srv) => {
                const checked = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`cursor-pointer rounded-xl p-3.5 border transition-all flex items-start gap-3 select-none ${
                      checked
                        ? "bg-cyan-950/40 border-cyan-500/70 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
                        : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        checked
                          ? "bg-cyan-400 border-cyan-400 text-slate-950"
                          : "border-slate-600 bg-slate-800"
                      }`}
                    >
                      {checked && <CheckCircle2 className="w-3 h-3 fill-slate-950 text-cyan-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{srv.label}</div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{srv.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Budget Range */}
          <div className="space-y-3">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              2. Anticipated Budget Range
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {BUDGET_TIERS.map((tier) => {
                const active = selectedBudget === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedBudget(tier.id)}
                    className={`rounded-xl p-3 text-left border transition-all ${
                      active
                        ? "bg-cyan-950/50 border-cyan-400 text-white shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
                        : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-mono font-bold text-xs sm:text-sm text-cyan-300">
                      {tier.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 leading-snug">
                      {tier.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Contact Info & Timeline */}
          <div className="space-y-4">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              3. Client &amp; Project Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Company / Project</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Apex Labs"
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Target Timeline */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Target Completion Timeline</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "urgent", label: "⚡ Urgent (< 2 Weeks)" },
                  { id: "1-month", label: "⏱️ 1 Month (Standard Sprint)" },
                  { id: "quarterly", label: "🗓️ 2-3 Months (Platform Build)" },
                  { id: "ongoing", label: "🔄 Ongoing Monthly Retainer" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTimeline(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      timeline === t.id
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/60"
                        : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Brief description */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Project Overview &amp; Key Requirements
              </label>
              <textarea
                rows={4}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder="Give us a brief overview of what you're trying to achieve, specific features, reference links, or tech constraints..."
                className="w-full rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>

            {/* File upload / attachment simulation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-xs font-mono transition-colors">
                <Paperclip className="w-3.5 h-3.5 text-cyan-400" />
                <span>{attachedFile ? attachedFile : "Attach Specification / Deck (PDF, DOCX)"}</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.docx,.doc,.txt,.png,.jpg"
                />
              </label>

              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Protected under standard confidentiality &amp; NDA
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Direct dispatch to: <span className="text-cyan-400">contact@tylcao.com</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Encrypting &amp; Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Project Brief</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
