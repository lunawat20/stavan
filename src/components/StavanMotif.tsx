"use client";

import React from "react";

interface StavanMotifProps {
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "full";
  className?: string;
  showLabels?: boolean;
}

export function StavanMotif({
  theme = "dark",
  size = "md",
  className = "",
  showLabels = false,
}: StavanMotifProps) {
  const isDark = theme === "dark";
  const strokeBase = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(18, 19, 22, 0.15)";
  const strokeSubtle = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(18, 19, 22, 0.06)";

  const dimensions = {
    sm: { w: 180, h: 48 },
    md: { w: 280, h: 72 },
    lg: { w: 420, h: 100 },
    full: { w: 600, h: 120 },
  };

  const { w, h } = dimensions[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height="100%"
        className="overflow-visible max-w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background track line */}
        <path
          d={`M 24 ${h / 2} C ${w * 0.3} ${h * 0.15}, ${w * 0.4} ${h * 0.85}, ${w / 2} ${h / 2} C ${w * 0.6} ${h * 0.15}, ${w * 0.7} ${h * 0.85}, ${w - 24} ${h / 2}`}
          stroke={strokeSubtle}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Animated conduit flowing curve */}
        <path
          d={`M 24 ${h / 2} C ${w * 0.3} ${h * 0.15}, ${w * 0.4} ${h * 0.85}, ${w / 2} ${h / 2} C ${w * 0.6} ${h * 0.15}, ${w * 0.7} ${h * 0.85}, ${w - 24} ${h / 2}`}
          stroke="url(#stavanMotifGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-conduit"
        />

        {/* Linear Gradient for flowing track */}
        <defs>
          <linearGradient id="stavanMotifGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#20C8E8" />
            <stop offset="50%" stopColor="#FF4B2B" />
            <stop offset="100%" stopColor="#B7FF2A" />
          </linearGradient>
        </defs>

        {/* 1. Node 1: Business Trigger */}
        <g transform={`translate(24, ${h / 2})`}>
          <circle r="12" fill={isDark ? "#14161C" : "#FFFFFF"} stroke={strokeBase} strokeWidth="1.5" />
          <circle r="5" fill="#20C8E8" />
          <circle r="8" fill="none" stroke="#20C8E8" strokeWidth="1" opacity="0.4" className="animate-ping" />
        </g>

        {/* 2. Node 2: Intelligence Core (Center) */}
        <g transform={`translate(${w / 2}, ${h / 2})`}>
          <rect
            x="-12"
            y="-12"
            width="24"
            height="24"
            rx="5"
            fill={isDark ? "#14161C" : "#FFFFFF"}
            stroke={strokeBase}
            strokeWidth="1.5"
          />
          <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#FF4B2B" />
        </g>

        {/* 3. Node 3: Automated Action (End) */}
        <g transform={`translate(${w - 24}, ${h / 2})`}>
          <circle r="12" fill={isDark ? "#14161C" : "#FFFFFF"} stroke={strokeBase} strokeWidth="1.5" />
          <polygon points="0,-6 6,4 -6,4" fill="#B7FF2A" transform="rotate(90)" />
        </g>
      </svg>

      {showLabels && (
        <div
          className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mt-2 px-1"
          style={{ color: isDark ? "#8E92A2" : "#575A65" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C8E8]" />
            BUSINESS INPUT
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#FF4B2B]" />
            INTELLIGENCE CORE
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2A]" />
            SYSTEM ACTION
          </span>
        </div>
      )}
    </div>
  );
}
