"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, PortfolioItem } from "@/data/portfolioData";
import { Code2, Bot, Video, Play, ExternalLink, Terminal, Copy, Check, ArrowUpRight, ShieldCheck, Film, Sparkles } from "lucide-react";

export const TabbedPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "engineering" | "scripts" | "video">("all");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const handleCopyCode = (id: string, snippet?: string) => {
    if (!snippet) return;
    navigator.clipboard.writeText(snippet);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  return (
    <div>
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === "all"
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          All Showcases ({PORTFOLIO_DATA.length})
        </button>

        <button
          onClick={() => setActiveTab("engineering")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === "video"
              ? "bg-violet-500/20 text-violet-300 border border-violet-500/50 shadow-[0_0_15px_-3px_rgba(139,92,246,0.4)]"
              : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Video className="w-4 h-4 text-violet-400" />
          <span>Video Editing & Reels</span>
        </button>
      </div>

      {/* Portfolio Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          return (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#0c0e18] border border-slate-800/80 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              <div>
                {/* Video Preview Card if video category */}
                {item.category === "video" && item.videoPlaceholder && (
                  <div className="relative rounded-xl overflow-hidden mb-5 aspect-video bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center group/vid">
                    {/* Simulated Film Grain & Glow */}
                    <div className="absolute inset-0 bg-radial-glow opacity-30" />
                    
                    {playingVideoId === item.id ? (
                      <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
                        <Film className="w-8 h-8 text-violet-400 animate-pulse mb-2" />
                        <span className="text-xs font-mono text-violet-300 font-bold">
                          PLAYING PREVIEW REEL
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1">
                          Simulated high-framerate 4K buffer: {item.videoPlaceholder.duration}
                        </span>
                        <button
                          onClick={() => setPlayingVideoId(null)}
                          className="mt-3 px-3 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-300 hover:text-white"
                        >
                          Pause Preview
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => setPlayingVideoId(item.id)}
                          className="w-14 h-14 rounded-full bg-violet-600/80 hover:bg-violet-500 text-white flex items-center justify-center shadow-lg transform group-hover/vid:scale-110 transition-all z-10"
                        >
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </button>
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-slate-300">
                          {item.videoPlaceholder.duration}
                        </div>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-800/50 text-[10px] font-mono text-violet-300">
                          4K Cinema Cut
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Code Snippet Card if script/automation */}
                {item.category === "scripts" && item.codeSnippet && (
                  <div className="relative rounded-xl overflow-hidden mb-5 bg-[#07090e] border border-slate-800/90 font-mono text-[10px]">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-[#0a0c13] border-b border-slate-800 text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Terminal className="w-3 h-3" />
                        {item.title.toLowerCase().replace(/\s+/g, "_")}.py
                      </span>
                      <button
                        onClick={() => handleCopyCode(item.id, item.codeSnippet)}
                        className="text-slate-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        {copiedSnippetId === item.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedSnippetId === item.id ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <pre className="p-3 text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{item.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Header Badge & Client */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {item.client}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-900/50 border border-slate-800/60 mb-5">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-white font-mono">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
