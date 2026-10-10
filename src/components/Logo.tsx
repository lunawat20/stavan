import React from "react";

interface LogoProps {
  theme?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
}

export function Logo({
  theme = "auto",
  size = "md",
  className = "",
  showTagline = false,
}: LogoProps) {
  const isLightBg = theme === "light";

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
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
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
          {/* Offset shadow tile */}
          <rect
            x="8"
            y="8"
            width="20"
            height="20"
            className={isLightBg ? "fill-[#FF4B2B]" : "fill-[#FF4B2B]"}
          />
          {/* Primary tile */}
          <rect
            x="4"
            y="4"
            width="20"
            height="20"
            className={
              isLightBg
                ? "fill-[#FAF7EE] stroke-[#111111]"
                : "fill-[#090909] stroke-[#F7F2E8]"
            }
            strokeWidth="2.5"
          />
          {/* Internal process dot & node */}
          <rect
            x="9"
            y="9"
            width="4"
            height="4"
            className={isLightBg ? "fill-[#111111]" : "fill-[#F7F2E8]"}
          />
          <circle
            cx="17"
            cy="17"
            r="2.5"
            className="fill-[#20C8E8]"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col">
        <span
          className={`font-mono font-black uppercase tracking-tight transition-colors ${
            sizeClasses[size]
          } ${
            isLightBg
              ? "text-[#111111]"
              : theme === "dark"
              ? "text-[#F7F2E8]"
              : "text-[#F7F2E8]"
          }`}
          style={{ letterSpacing: "-0.04em" }}
        >
          STAVAN
        </span>
        {showTagline && (
          <span
            className={`text-[9px] uppercase tracking-[0.25em] font-mono -mt-1 ${
              isLightBg ? "text-[#66635C]" : "text-[#8E8A82]"
            }`}
          >
            AI • AUTOMATION
          </span>
        )}
      </div>
    </div>
  );
}
