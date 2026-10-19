import React from "react";

interface TilcayoIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const TilcayoIcon: React.FC<TilcayoIconProps> = ({
  className = "",
  size = 32,
  glow = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-slate-900 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-400 group ${
        glow ? "shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_0px_rgba(6,182,212,0.5)]" : ""
      } ${className}`}
      style={{ width: size, height: size }}
      title="Tilcayo — Tylcao's Cloud Forest Cat Mascot"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4/5 h-4/5 text-cyan-400 group-hover:text-cyan-300 transition-colors"
      >
        {/* Cat ears */}
        <path
          d="M14 26L20 8L30 18"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 26L44 8L34 18"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Head silhouette */}
        <path
          d="M20 22C24 20 40 20 44 22C52 26 56 36 54 46C52 54 44 58 32 58C20 58 12 54 10 46C8 36 12 26 20 22Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="3"
        />
        {/* Tilcayo tiger cat rosette spots */}
        <circle cx="24" cy="27" r="1.5" fill="#10b981" />
        <circle cx="40" cy="27" r="1.5" fill="#10b981" />
        <circle cx="32" cy="24" r="1.5" fill="#10b981" />
        {/* Eyes (glowing cyber slit) */}
        <path
          d="M22 34C24 32 28 32 29 35C28 37 24 37 22 34Z"
          fill="#00f2fe"
        />
        <path
          d="M42 34C40 32 36 32 35 35C36 37 40 37 42 34Z"
          fill="#00f2fe"
        />
        {/* Nose and whiskers */}
        <path
          d="M30 42L34 42L32 45Z"
          fill="currentColor"
        />
        {/* Whiskers */}
        <line x1="12" y1="40" x2="22" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="46" x2="23" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="52" y1="40" x2="42" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="53" y1="46" x2="41" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};
