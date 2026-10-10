import React from "react";

interface GeometricCanvasProps {
  variant?: "hero" | "problem" | "services" | "process" | "consultation" | "faq" | "minimal";
  className?: string;
}

export function GeometricCanvas({ variant = "hero", className = "" }: GeometricCanvasProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {variant === "hero" && (
        <>
          {/* Huge 640px cropped outlined square on top-right */}
          <div
            className="absolute -top-24 -right-28 w-[640px] h-[640px] border border-[#D8D5CE] opacity-80"
            style={{ backgroundColor: "rgba(250, 248, 244, 0.45)" }}
          />

          {/* Secondary 420px soft cream square offset */}
          <div
            className="absolute top-48 right-60 w-[420px] h-[420px] border border-[#E0DCD3] opacity-60 hidden md:block"
            style={{ backgroundColor: "rgba(240, 237, 229, 0.35)" }}
          />

          {/* Large 500px warm cream block on bottom-left */}
          <div
            className="absolute -bottom-36 -left-32 w-[520px] h-[520px] border border-[#E2DFD6] opacity-70"
            style={{ backgroundColor: "rgba(248, 245, 238, 0.85)" }}
          />

          {/* Architectural Registration Mark & Small Orange Accent Square */}
          <div className="absolute top-36 left-12 flex items-center gap-2 opacity-80">
            <div className="w-3.5 h-3.5 bg-[#FF5A36]" />
            <div className="h-px w-20 bg-[#D8D5CE]" />
          </div>

          <div className="absolute bottom-28 right-16 hidden lg:block opacity-60">
            <div className="w-4 h-4 border border-[#FF5A36]" />
          </div>
        </>
      )}

      {variant === "problem" && (
        <>
          {/* Huge 580px subtle square behind right column */}
          <div
            className="absolute -top-12 -right-20 w-[580px] h-[580px] border border-[#D8D5CE] opacity-70"
            style={{ backgroundColor: "rgba(245, 243, 238, 0.6)" }}
          />

          {/* 360px square behind left title */}
          <div
            className="absolute bottom-16 -left-20 w-[380px] h-[380px] border border-[#E0DCD3] opacity-50"
            style={{ backgroundColor: "rgba(250, 248, 244, 0.5)" }}
          />

          {/* Orange accent square marker */}
          <div className="absolute top-24 left-1/2 w-3 h-3 bg-[#FF5A36] opacity-75" />
        </>
      )}

      {variant === "services" && (
        <>
          {/* 680px architectural frame spanning center-right */}
          <div
            className="absolute -top-32 right-1/4 w-[680px] h-[680px] border border-[#D8D5CE] opacity-60"
            style={{ backgroundColor: "rgba(247, 245, 240, 0.5)" }}
          />

          {/* 440px square bottom-right */}
          <div
            className="absolute -bottom-24 -right-16 w-[440px] h-[440px] border border-[#DCD8CF] opacity-50"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          />

          {/* Architectural connector line */}
          <div className="absolute top-20 right-12 h-36 w-px bg-[#D8D5CE] hidden md:block" />
        </>
      )}

      {variant === "process" && (
        <>
          {/* Large 620px frame behind timeline */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-24 w-[620px] h-[620px] border border-[#D8D5CE] opacity-65"
            style={{ backgroundColor: "rgba(250, 248, 244, 0.5)" }}
          />

          {/* Secondary 500px square on right */}
          <div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-[#E0DCD3] opacity-55"
            style={{ backgroundColor: "rgba(245, 243, 238, 0.4)" }}
          />

          <div className="absolute bottom-20 left-1/3 flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#FF5A36]" />
            <div className="w-24 h-px bg-[#D8D5CE]" />
          </div>
        </>
      )}

      {variant === "consultation" && (
        <>
          {/* 540px clean geometry behind consultation */}
          <div
            className="absolute -top-20 -right-16 w-[560px] h-[560px] border border-[#D8D5CE] opacity-60"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          />
          <div
            className="absolute -bottom-24 -left-16 w-[480px] h-[480px] border border-[#E0DCD3] opacity-50"
            style={{ backgroundColor: "rgba(245, 243, 238, 0.5)" }}
          />
          <div className="absolute top-16 left-16 w-3 h-3 border border-[#FF5A36]" />
        </>
      )}

      {variant === "faq" && (
        <>
          <div
            className="absolute -top-24 -left-28 w-[580px] h-[580px] border border-[#D8D5CE] opacity-55"
            style={{ backgroundColor: "rgba(250, 248, 244, 0.4)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-[460px] h-[460px] border border-[#D8D5CE] opacity-50"
            style={{ backgroundColor: "rgba(245, 243, 238, 0.4)" }}
          />
        </>
      )}

      {variant === "minimal" && (
        <div
          className="absolute -top-20 -right-20 w-[420px] h-[420px] border border-[#D8D5CE] opacity-50"
          style={{ backgroundColor: "rgba(250, 248, 244, 0.4)" }}
        />
      )}
    </div>
  );
}
