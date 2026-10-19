"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";
import { Code2, Bot, Video, CheckCircle2, Clock, Sparkles, ArrowRight, Layers, Plus, Check } from "lucide-react";

export const ModularServiceCatalog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "engineering" | "scripts" | "video">("all");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const toggleSelectService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "engineering":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "scripts":
        return <Bot className="w-4 h-4 text-emerald-400" />;
      case "video":
        return <Video className="w-4 h-4 text-violet-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case "engineering":
        return "border-cyan-500/30 group-hover:border-cyan-400/60";
      case "scripts":
        return "border-emerald-500/30 group-hover:border-emerald-400/60";
      case "video":
        return "border-violet-500/30 group-hover:border-violet-400/60";
      default:
        return "border-slate-800";
    }
  };

  return (
    <div className="relative">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === "all"
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All Capabilities ({SERVICES_DATA.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("engineering")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === "engineering"
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>Software Engineering</span>
        </button>

        <button
          onClick={() => setActiveTab("scripts")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === "scripts"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Bot className="w-4 h-4 text-emerald-400" />
          <span>Scripts & Automation</span>
        </button>

        <button
          onClick={() => setActiveTab("video")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === "video"
              ? "bg-violet-500/20 text-violet-300 border border-violet-500/50 shadow-[0_0_15px_-3px_rgba(139,92,246,0.4)]"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Video className="w-4 h-4 text-violet-400" />
          <span>Video Editing & Media</span>
        </button>
      </div>

      {/* Grid of Modular Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <div
              key={service.id}
              className={`group relative rounded-2xl bg-[#0d101a] border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${getCategoryBorder(
                service.category
              )} ${isSelected ? "ring-2 ring-cyan-400 bg-cyan-950/20" : ""}`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getCategoryIcon(service.category)}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {service.deliveryTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Add to Brief Toggle */}
                <button
                  onClick={() => toggleSelectService(service.id)}
                  className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Selected for Brief</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Project Scope</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Project Scope Tray when services are selected */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-2xl bg-[#090b12]/95 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-4 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold">
                {selectedServices.length}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Custom Scope Configured</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {selectedServices.length} modular capability selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setSelectedServices([])}
                className="text-xs text-slate-400 hover:text-white px-3 py-2 font-mono"
              >
                Reset
              </button>
              <Link
                href={`/contact?services=${selectedServices.join(",")}`}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg hover:scale-105 transition-all"
              >
                <span>Submit Scope Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
