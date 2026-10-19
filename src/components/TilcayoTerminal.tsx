"use client";

import React, { useState } from "react";
import { TILCAYO_ASCII, TERMINAL_COMMANDS, TILCAYO_FACTS } from "@/lib/mascot";
import { Terminal, Sparkles, Volume2, ShieldCheck, Cpu, Copy, Check } from "lucide-react";

export const TilcayoTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd?: string; text: string; isOutput?: boolean }>>([
    { text: "TYLCAO CORE SYSTEM [v2.6.10-release]" },
    { text: "Mascot Loaded: Leopardus tilcayo (Cloud Forest Cat Engine)" },
    { text: "Type 'help' or click quick chips below to explore capabilities." },
  ]);
  const [isPurring, setIsPurring] = useState(false);
  const [copied, setCopied] = useState(false);
  const [eyeState, setEyeState] = useState<"normal" | "laser" | "sleep">("normal");

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setTerminalHistory([{ text: "Terminal cleared. Type 'help' for commands." }]);
      setInputVal("");
      return;
    }

    let response = TERMINAL_COMMANDS[cleanCmd];

    if (!response) {
      if (cleanCmd === "cat" || cleanCmd === "meow") {
        setIsPurring(true);
        setTimeout(() => setIsPurring(false), 3000);
        response = "Tilcayo: *MEOW!* (Patting cache cleared. Purring frequency: 28Hz).";
      } else if (cleanCmd === "laser") {
        setEyeState("laser");
        setTimeout(() => setEyeState("normal"), 4000);
        response = "Tilcayo laser eyes activated! Tracking high-impact conversion targets...";
      } else if (cleanCmd === "sleep") {
        setEyeState("sleep");
        setTimeout(() => setEyeState("normal"), 5000);
        response = "Tilcayo curled up in the cloud forest canopy. Zzz...";
      } else if (cleanCmd.includes("brief") || cleanCmd.includes("hire")) {
        response = "Redirecting to brief... Head to the /contact page to build your custom scope!";
      } else {
        response = `Command not recognized: '${cleanCmd}'. Try 'help', 'services', 'video', 'stack', or 'purr'.`;
      }
    }

    if (cleanCmd === "purr") {
      setIsPurring(true);
      setTimeout(() => setIsPurring(false), 3000);
    }

    setTerminalHistory((prev) => [
      ...prev,
      { cmd: cleanCmd, text: `> ${cleanCmd}`, isOutput: false },
      { text: response, isOutput: true },
    ]);
    setInputVal("");
  };

  const handleCopyAscii = () => {
    navigator.clipboard.writeText(TILCAYO_ASCII);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePetCat = () => {
    setIsPurring(true);
    const randomFact = TILCAYO_FACTS[Math.floor(Math.random() * TILCAYO_FACTS.length)];
    setTerminalHistory((prev) => [
      ...prev,
      { cmd: "pet_tilcayo", text: "> petting Tilcayo...", isOutput: false },
      { text: `*Purrrrr* ${randomFact}`, isOutput: true },
    ]);
    setTimeout(() => setIsPurring(false), 2500);
  };

  return (
    <div className="relative rounded-2xl border border-cyan-500/30 bg-[#0c0e17]/90 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-500">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b12] border-b border-slate-800/80 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 cursor-pointer" />
          <span className="ml-2 text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            tilcayo@tylcao-host:~
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {isPurring ? "PURRING (28Hz)" : "ONLINE (240 FPS)"}
          </span>
          <button
            onClick={handleCopyAscii}
            title="Copy Tilcayo ASCII Art"
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded bg-slate-800/50 hover:bg-slate-800 text-[11px]"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copied" : "Copy ASCII"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/70">
        {/* Left Column: Mascot ASCII Art Display */}
        <div className="lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-b from-[#0e111c] to-[#090b12] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className={`absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
            isPurring ? "bg-emerald-500/25 opacity-100" : "bg-cyan-500/15 opacity-70"
          }`} />

          <div className="flex items-center justify-between mb-3 z-10">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                Mascot // Leopardus tilcayo
              </span>
            </div>
            <button
              onClick={handlePetCat}
              className="text-[11px] font-mono flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
              <span>Pet Mascot</span>
            </button>
          </div>

          {/* ASCII Cat Container */}
          <div 
            onClick={handlePetCat}
            className="cursor-pointer relative my-auto py-2 flex items-center justify-center select-none group/cat"
            title="Click to interact with Tilcayo!"
          >
            <pre 
              className={`font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.05] tracking-tight transition-all duration-300 text-center ${
                isPurring 
                  ? "text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] scale-[1.02]" 
                  : eyeState === "laser"
                  ? "text-rose-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]"
                  : "text-cyan-400/90 group-hover/cat:text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
              }`}
            >
              {TILCAYO_ASCII}
            </pre>
          </div>

          {/* Mascot Info Footnote */}
          <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono z-10">
            <span className="flex items-center gap-1 text-slate-400">
              <Cpu className="w-3 h-3 text-cyan-400" />
              Cloud Forest Native Cat
            </span>
            <span className="text-cyan-400/80">
              {isPurring ? "🐾 *PURR* 🐾" : "Interactive Unit"}
            </span>
          </div>
        </div>

        {/* Right Column: Interactive CLI & Live Log */}
        <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col justify-between bg-[#0a0c14] font-mono text-xs">
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                TYLCAO CONSOLE
              </span>
              <span className="text-[10px] text-slate-500">BASH / SHELL</span>
            </div>

            {/* Scrollable history */}
            <div className="h-56 sm:h-64 overflow-y-auto space-y-2 pr-1 terminal-scroll">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="leading-relaxed">
                  {item.cmd ? (
                    <span className="text-cyan-300 font-semibold">{item.text}</span>
                  ) : item.isOutput ? (
                    <div className="text-slate-300 pl-3 border-l-2 border-cyan-500/40 my-1 bg-cyan-950/20 py-1 px-2 rounded">
                      {item.text}
                    </div>
                  ) : (
                    <span className="text-slate-400">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick command suggestion chips */}
          <div className="pt-2">
            <div className="text-[10px] text-slate-400 mb-1.5 flex items-center gap-1">
              <span>Quick Commands:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["services", "video", "stack", "purr", "contact", "clear"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleCommand(chip)}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 text-[11px] transition-colors"
                >
                  &gt; {chip}
                </button>
              ))}
            </div>

            {/* Live Command Line Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              className="flex items-center gap-2 bg-[#06080e] border border-slate-800 focus-within:border-cyan-500/70 rounded-lg px-3 py-2 transition-all shadow-inner"
            >
              <span className="text-cyan-400 font-bold">&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command ('services', 'purr', 'video')..."
                className="w-full bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none text-xs font-mono"
              />
              <button
                type="submit"
                className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
