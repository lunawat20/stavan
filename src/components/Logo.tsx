import React from "react";

interface LogoProps {
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
}

export function Logo({
  theme = "light",
  size = "md",
  className = "",
  showTagline = false,
}: LogoProps) {
  const isLight = theme === "light";

  const sizeClasses = {
    sm: "text-lg tracking-wider",
    md: "text-xl sm:text-2xl tracking-widest",
    lg: "text-3xl sm:text-4xl tracking-widest",
  };

  const symbolSizes = {
    sm: 20,
    md: 26,
    lg: 36,
  };

  const currentSymbolSize = symbolSizes[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric Studio Symbol */}
      <div
        className="relative flex items-center justify-center transition-transform hover:scale-105"
        style={{ width: currentSymbolSize, height: currentSymbolSize }}
      >
        <svg
          viewBox="0 0 32 32"
          width={currentSymbolSize}
          height={currentSymbolSize}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle accent offset base */}
          <rect
            x="7"
            y="7"
            width="20"
            height="20"
            rx="4"
            fill="#FF542F"
            opacity={isLight ? "0.9" : "1"}
          />
          {/* Primary tile */}
          <rect
            x="4"
            y="4"
            width="20"
            height="20"
            rx="4"
            fill={isLight ? "#FFFFFF" : "#111111"}
            stroke={isLight ? "#111111" : "#F7F4EC"}
            strokeWidth="2"
          />
          {/* Process dot & core */}
          <rect
            x="8"
            y="8"
            width="4"
            height="4"
            rx="1"
            fill={isLight ? "#111111" : "#F7F4EC"}
          />
          <circle
            cx="16"
            cy="16"
            r="2.5"
            fill="#20C8E8"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col">
        <span
          className={`font-mono font-black uppercase tracking-tight transition-colors ${
            sizeClasses[size]
          } ${isLight ? "text-[#111111]" : "text-[#F7F4EC]"}`}
          style={{ letterSpacing: "-0.04em" }}
        >
          STAVAN
        </span>
        {showTagline && (
          <span
            className={`text-[9px] uppercase tracking-[0.25em] font-mono -mt-1 ${
              isLight ? "text-[#777777]" : "text-[#A0A0A0]"
            }`}
          >
            AI • AUTOMATION
          </span>
        )}
      </div>
    </div>
  );
}
