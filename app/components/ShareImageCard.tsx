"use client";

import { mockData } from "../data/mockData";

interface ShareImageCardProps {
  themeColor: string;
}

/**
 * ShareImageCard - 1:1 aspect ratio card optimized for social media sharing
 * This component is rendered off-screen and captured by html2canvas for image export
 * Design: High-contrast, large text, visible branding for Instagram/Twitter feeds
 */
export function ShareImageCard({ themeColor }: ShareImageCardProps) {
  const { persona, transactions, dapps, vibes } = mockData;
  const topDapp = dapps[0];
  const topVibe = vibes[0];

  return (
    <div
      className="relative flex flex-col justify-between p-12"
      style={{
        width: "1080px",
        height: "1080px",
        background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
      }}
    >
      {/* Diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, ${themeColor} 20px, ${themeColor} 22px)`,
        }}
      />

      {/* Top Section - Archetype */}
      <div className="relative z-10 space-y-4">
        <div className="text-white/60 text-2xl font-bold tracking-wide">
          MY STELLAR ARCHETYPE
        </div>
        <h1
          className="text-8xl font-black tracking-tight leading-none"
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff 0%, ${themeColor} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {persona}
        </h1>
      </div>

      {/* Middle Section - Stats Grid */}
      <div className="relative z-10 space-y-8">
        {/* Total Transactions */}
        <div
          className="backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <p className="text-xl font-bold text-white/60 mb-3">
            TOTAL TRANSACTIONS
          </p>
          <p className="text-9xl font-black text-white leading-none">
            {transactions}
          </p>
        </div>

        {/* Top DApp */}
        <div
          className="backdrop-blur-sm rounded-3xl p-8 border border-white/20 flex items-center gap-6"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
            style={{ background: topDapp.gradient }}
          >
            {topDapp.name[0]}
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-white/60 mb-2">
              FAVORITE DAPP
            </p>
            <p className="text-5xl font-black text-white mb-1">
              {topDapp.name}
            </p>
            <p className="text-2xl font-bold text-white/60">
              {topDapp.transactions} transactions
            </p>
          </div>
        </div>

        {/* Top Vibe */}
        <div
          className="backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <p className="text-xl font-bold text-white/60 mb-3">TOP VIBE</p>
          <div className="flex items-baseline gap-4">
            <p className="text-6xl font-black text-white">{topVibe.label}</p>
            <p
              className="text-5xl font-black"
              style={{
                backgroundImage: topVibe.color,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {topVibe.percentage}%
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Branding */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="text-white/40 text-2xl font-bold tracking-wider">
          stellar.org/wrapped
        </div>
        <div
          className="text-5xl font-black tracking-tight"
          style={{
            backgroundImage: `linear-gradient(90deg, ${themeColor} 0%, #ffffff 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          STELLAR WRAPPED 2026
        </div>
      </div>

      {/* Ambient glow effect */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />
    </div>
  );
}
