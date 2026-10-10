import React from "react";

interface GeometricCanvasProps {
  variant?:
    | "orange"
    | "dark"
    | "hero"
    | "problem"
    | "services"
    | "process"
    | "examples"
    | "whystavan"
    | "consultation"
    | "faq"
    | "minimal";
  className?: string;
}

export function GeometricCanvas({ variant = "orange", className = "" }: GeometricCanvasProps) {
  // Determine if this section is Dark or Warm Orange
  const isDark =
    variant === "dark" ||
    variant === "problem" ||
    variant === "process" ||
    variant === "whystavan" ||
    variant === "faq";

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {/* ===================== THEME 1: WARM ORANGE SHADE ===================== */}
      {!isDark && (
        <>
          {/* Ambient Warm Radiant Lighting Bloom */}
          <div
            className="absolute -top-32 right-0 w-[800px] h-[800px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 140, 70, 0.18) 0%, rgba(255, 190, 140, 0.08) 50%, transparent 75%)",
            }}
          />

          {/* Enormous 660px Cropped Warm Apricot Square (Clean Dot-Matrix Texture, Zero Inclined Lines, Zero Text) */}
          <div
            className="absolute -top-24 -right-28 w-[660px] h-[660px] rounded-3xl border border-[#E8CBB5] bg-texture-dots-orange shadow-xs"
            style={{ backgroundColor: "#FCE5D4" }}
          />

          {/* Secondary 440px Soft Terracotta Offset Square */}
          <div
            className="absolute top-52 right-72 w-[440px] h-[440px] rounded-2xl border border-[#DEC0AA] opacity-80 hidden md:block"
            style={{ backgroundColor: "#F9DDD0" }}
          />

          {/* Large 520px Warm Biscuit Square on bottom-left */}
          <div
            className="absolute -bottom-36 -left-32 w-[540px] h-[540px] rounded-3xl border border-[#E5CBB7] bg-texture-dots-orange"
            style={{ backgroundColor: "#F7E6D7" }}
          />

          {/* Clean Coral-Orange Accent Geometry (No Text) */}
          <div className="absolute top-36 left-12 flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#FF5A36] shadow-sm rounded-xs" />
            <div className="h-px w-20 bg-[#D8B49B]" />
          </div>

          <div className="absolute bottom-28 right-16 hidden lg:block">
            <div className="w-4 h-4 border-2 border-[#FF5A36] bg-[#FFFFFF] shadow-xs" />
          </div>
        </>
      )}

      {/* ===================== THEME 2: DEEP BLACK / CHARCOAL ===================== */}
      {isDark && (
        <>
          {/* Ambient Dark Core Radial Bloom */}
          <div
            className="absolute top-1/4 right-10 w-[750px] h-[750px] rounded-full opacity-35"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 90, 54, 0.12) 0%, rgba(30, 32, 38, 0.4) 45%, transparent 70%)",
            }}
          />

          {/* Enormous 660px Deep Charcoal Square (Clean Dot-Matrix Texture, Zero Inclined Lines, Zero Text) */}
          <div
            className="absolute -top-20 -right-24 w-[660px] h-[660px] rounded-3xl border border-white/10 bg-texture-dots-dark shadow-2xl"
            style={{ backgroundColor: "#18191D" }}
          />

          {/* Secondary 460px Charcoal Offset Square */}
          <div
            className="absolute bottom-16 -left-20 w-[460px] h-[460px] rounded-2xl border border-white/[0.08]"
            style={{ backgroundColor: "#141518" }}
          />

          {/* Clean Coral-Orange Accent Square on Dark (No Text) */}
          <div className="absolute top-28 left-16 flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#FF5A36] shadow-md rounded-xs" />
            <div className="w-16 h-px bg-white/20" />
          </div>

          <div className="absolute bottom-24 right-20 hidden lg:block">
            <div className="w-3.5 h-3.5 border border-[#FF5A36] bg-[#18191D]" />
          </div>
        </>
      )}
    </div>
  );
}
