import React from "react";

interface GeometricCanvasProps {
  variant?:
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

export function GeometricCanvas({ variant = "hero", className = "" }: GeometricCanvasProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {/* ===================== HERO: WARM APRICOT & SUNRISE GLOW ===================== */}
      {variant === "hero" && (
        <>
          {/* Ambient Warm Radiant Bloom */}
          <div
            className="absolute -top-32 right-0 w-[800px] h-[800px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 140, 70, 0.16) 0%, rgba(255, 190, 140, 0.08) 45%, transparent 70%)",
            }}
          />

          {/* Huge 660px Cropped Warm Apricot Square on top-right */}
          <div
            className="absolute -top-24 -right-28 w-[660px] h-[660px] rounded-2xl border border-[#E8CBB5] shadow-sm"
            style={{ backgroundColor: "#FCE5D4" }}
          >
            {/* Drafting corner brackets */}
            <span className="absolute top-4 left-4 font-mono text-[11px] text-[#A68670] select-none">
              ⌜ SPEC.HERO // 660×660 ⌝
            </span>
            <span className="absolute bottom-4 right-4 font-mono text-[10px] text-[#A68670] select-none">
              |← 660PX →|
            </span>
          </div>

          {/* Secondary 440px Soft Terracotta Square Offset */}
          <div
            className="absolute top-52 right-72 w-[440px] h-[440px] rounded-xl border border-[#DEC0AA] opacity-80 hidden md:block"
            style={{ backgroundColor: "#F9DDD0" }}
          />

          {/* Large 520px Warm Biscuit Block on bottom-left */}
          <div
            className="absolute -bottom-36 -left-32 w-[540px] h-[540px] rounded-2xl border border-[#E5CBB7]"
            style={{ backgroundColor: "#F7E6D7" }}
          >
            <span className="absolute top-6 right-6 font-mono text-[10px] text-[#A68670]">
              SYS.GRID // 26.91°N
            </span>
          </div>

          {/* Architectural Drafting Crosshairs & Orange Accent Square */}
          <div className="absolute top-36 left-12 flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#FF5A36] shadow-sm" />
            <div className="h-px w-24 bg-[#D8B49B]" />
            <span className="text-[10px] font-mono text-[#8C6D58] tracking-widest">
              COORD: 01.A
            </span>
          </div>

          <div className="absolute bottom-28 right-16 hidden lg:flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#8C6D58]">STV-NODE</span>
            <div className="w-4 h-4 border-2 border-[#FF5A36] bg-[#FFFFFF]" />
          </div>
        </>
      )}

      {/* ===================== PROBLEM: ARCHITECTURAL CLAY & OATMEAL ===================== */}
      {variant === "problem" && (
        <>
          {/* Ambient Warm Clay Glow */}
          <div
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(220, 160, 110, 0.12) 0%, transparent 65%)",
            }}
          />

          {/* Huge 600px Warm Oatmeal Square behind right column */}
          <div
            className="absolute -top-12 -right-20 w-[600px] h-[600px] rounded-2xl border border-[#D6C4AE] shadow-xs"
            style={{ backgroundColor: "#E9DDCD" }}
          >
            <span className="absolute bottom-4 left-6 font-mono text-[10px] text-[#8C7660]">
              DIAGNOSTIC_PLANE // 600PX
            </span>
          </div>

          {/* 400px Oatmeal Square behind left title */}
          <div
            className="absolute bottom-16 -left-20 w-[420px] h-[420px] rounded-xl border border-[#DDD0BC]"
            style={{ backgroundColor: "#EDE3D4" }}
          />

          {/* Crosshair marker */}
          <div className="absolute top-24 left-1/2 flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF5A36]" />
            <div className="w-16 h-px bg-[#C9B8A2]" />
            <span className="text-[10px] font-mono text-[#7D6B57]">+ FRICTION_SCAN</span>
          </div>
        </>
      )}

      {/* ===================== SERVICES: FRESH EUCALYPTUS MINT ===================== */}
      {variant === "services" && (
        <>
          {/* Ambient Mint Botanical Glow */}
          <div
            className="absolute -top-20 left-1/4 w-[750px] h-[750px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(80, 185, 120, 0.15) 0%, rgba(130, 210, 160, 0.08) 40%, transparent 70%)",
            }}
          />

          {/* Enormous 700px Soft Mint Square spanning center-right */}
          <div
            className="absolute -top-32 right-12 w-[720px] h-[720px] rounded-3xl border border-[#BED9C4] shadow-sm"
            style={{ backgroundColor: "#D7EBDC" }}
          >
            <span className="absolute top-6 left-6 font-mono text-[11px] text-[#558562] font-semibold">
              CAPABILITY_MATRIX // MINT_ARCH // 720×720
            </span>
            <span className="absolute bottom-6 right-6 font-mono text-[10px] text-[#558562]">
              ⌜ STAVAN CAPABILITIES ⌝
            </span>
          </div>

          {/* Secondary 460px Sage Square bottom-left */}
          <div
            className="absolute -bottom-24 -left-16 w-[480px] h-[480px] rounded-2xl border border-[#C5DEC9]"
            style={{ backgroundColor: "#DCEDE0" }}
          >
            <span className="absolute top-6 right-6 font-mono text-[10px] text-[#558562]">
              SYSTEMS_DEPLOYED
            </span>
          </div>

          {/* Architectural Cyan Accent Square & Connector Line */}
          <div className="absolute top-24 left-8 flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#20C8E8] shadow-xs" />
            <div className="w-20 h-px bg-[#A6CDB0]" />
            <span className="text-[10px] font-mono text-[#4A7855]">AUTONOMY // LIVE</span>
          </div>
        </>
      )}

      {/* ===================== PROCESS: BLUEPRINT ICE BLUE ===================== */}
      {variant === "process" && (
        <>
          {/* Ambient Ice Blue Technical Glow */}
          <div
            className="absolute top-1/3 right-10 w-[700px] h-[700px] rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(40, 150, 225, 0.14) 0%, rgba(100, 190, 240, 0.07) 45%, transparent 70%)",
            }}
          />

          {/* Large 640px Blueprint Ice Blue Frame behind timeline */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-20 w-[640px] h-[640px] rounded-3xl border border-[#B8D3E8] shadow-sm"
            style={{ backgroundColor: "#D4E5F3" }}
          >
            <span className="absolute top-6 right-6 font-mono text-[11px] text-[#4878A0] font-semibold">
              WORKFLOW_PIPELINE // BLUEPRINT // 640×640
            </span>
            <span className="absolute bottom-6 left-6 font-mono text-[10px] text-[#4878A0]">
              |← 4-STAGE ARCHITECTURE →|
            </span>
          </div>

          {/* Secondary 520px Ice Blue Square on right */}
          <div
            className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-2xl border border-[#C2DCEF]"
            style={{ backgroundColor: "#DCEBF6" }}
          />

          {/* Blueprint Telemetry Marker */}
          <div className="absolute bottom-20 left-1/3 flex items-center gap-2.5">
            <div className="w-3 h-3 bg-[#FF5A36]" />
            <div className="w-28 h-px bg-[#9EBFDA]" />
            <span className="text-[10px] font-mono text-[#426E92] font-semibold">
              EXECUTION_LINE // 01→04
            </span>
          </div>
        </>
      )}

      {/* ===================== EXAMPLES: WARM SUNNY CHAMPAGNE ===================== */}
      {variant === "examples" && (
        <>
          {/* Ambient Marigold Warmth Glow */}
          <div
            className="absolute -top-24 right-1/4 w-[700px] h-[700px] rounded-full opacity-55"
            style={{
              background:
                "radial-gradient(circle, rgba(245, 190, 60, 0.16) 0%, rgba(255, 215, 120, 0.08) 45%, transparent 70%)",
            }}
          />

          {/* Huge 680px Champagne Block */}
          <div
            className="absolute -top-24 -right-24 w-[680px] h-[680px] rounded-3xl border border-[#DFCEA2]"
            style={{ backgroundColor: "#EFE1BC" }}
          >
            <span className="absolute top-6 left-6 font-mono text-[11px] text-[#86703E] font-semibold">
              SIMULATION_CHAMBER // 680×680
            </span>
          </div>

          <div
            className="absolute -bottom-20 -left-16 w-[480px] h-[480px] rounded-2xl border border-[#E5D7B3]"
            style={{ backgroundColor: "#F3E8C9" }}
          />

          <div className="absolute top-20 left-12 flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FFD447] border border-[#CCA725]" />
            <div className="w-20 h-px bg-[#C9B583]" />
            <span className="text-[10px] font-mono text-[#786433]">INTERACTIVE_TEST</span>
          </div>
        </>
      )}

      {/* ===================== WHY STAVAN: REFINED LILAC SLATE ===================== */}
      {variant === "whystavan" && (
        <>
          {/* Ambient Lilac Studio Glow */}
          <div
            className="absolute top-1/4 left-1/3 w-[720px] h-[720px] rounded-full opacity-55"
            style={{
              background:
                "radial-gradient(circle, rgba(160, 130, 210, 0.14) 0%, rgba(190, 170, 230, 0.07) 45%, transparent 70%)",
            }}
          />

          {/* Huge 640px Lilac Frame */}
          <div
            className="absolute -top-20 -left-20 w-[640px] h-[640px] rounded-3xl border border-[#CAC0DE]"
            style={{ backgroundColor: "#DDD4EC" }}
          >
            <span className="absolute top-6 right-6 font-mono text-[11px] text-[#695886] font-semibold">
              STUDIO_ETHOS // 640×640
            </span>
          </div>

          <div
            className="absolute -bottom-24 -right-16 w-[520px] h-[520px] rounded-2xl border border-[#D5CBE4]"
            style={{ backgroundColor: "#E5DDF0" }}
          />

          <div className="absolute top-24 right-16 flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#695886]">PRINCIPLES // 01-04</span>
            <div className="w-3 h-3 bg-[#FF4D96]" />
          </div>
        </>
      )}

      {/* ===================== CONSULTATION: WARM APRICOT DAWN ===================== */}
      {variant === "consultation" && (
        <>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(255, 140, 70, 0.16) 0%, rgba(255, 190, 140, 0.08) 50%, transparent 80%)",
            }}
          />

          <div
            className="absolute -top-20 -right-16 w-[580px] h-[580px] rounded-3xl border border-[#ECC8AA]"
            style={{ backgroundColor: "#FCDFC7" }}
          />
          <div
            className="absolute -bottom-24 -left-16 w-[500px] h-[500px] rounded-2xl border border-[#F2D4BC]"
            style={{ backgroundColor: "#FDE6D5" }}
          />

          <div className="absolute top-16 left-16 flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#FF5A36] shadow-sm" />
            <div className="w-20 h-px bg-[#D6B296]" />
            <span className="text-[10px] font-mono text-[#8C6445]">DIRECT_BOOKING</span>
          </div>
        </>
      )}

      {/* ===================== FAQ: WARM STONE CHALK ===================== */}
      {variant === "faq" && (
        <>
          <div
            className="absolute -top-24 -left-28 w-[620px] h-[620px] rounded-3xl border border-[#CBC8BE]"
            style={{ backgroundColor: "#DFDDD5" }}
          >
            <span className="absolute top-6 right-6 font-mono text-[10px] text-[#7A776E]">
              KNOWLEDGE_BASE // 620×620
            </span>
          </div>
          <div
            className="absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-2xl border border-[#D5D3CA]"
            style={{ backgroundColor: "#E6E4DD" }}
          />
        </>
      )}

      {/* ===================== MINIMAL ===================== */}
      {variant === "minimal" && (
        <div
          className="absolute -top-20 -right-20 w-[440px] h-[440px] rounded-2xl border border-[#DFCEA2]"
          style={{ backgroundColor: "#EFE1BC" }}
        />
      )}
    </div>
  );
}
