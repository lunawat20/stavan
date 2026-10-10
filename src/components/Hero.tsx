import React from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { AutomationEngine } from "./AutomationEngine";
import { StavanMotif } from "./StavanMotif";
import { GeometricCanvas } from "./GeometricCanvas";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 bg-canvas-ivory bg-blueprint-grid text-[#111111] flex flex-col justify-center overflow-hidden border-b border-[#D8D5CE]">
      {/* Large Architectural Geometric Canvas in Background */}
      <GeometricCanvas variant="hero" />

      {/* Blueprint Coordinates */}
      <div className="absolute top-28 left-8 text-[11px] font-mono text-[#777777] hidden lg:block tracking-widest z-10">
        SYS.SPEC // 26.91°N
      </div>
      <div className="absolute top-28 right-8 text-[11px] font-mono text-[#777777] hidden lg:block tracking-widest z-10">
        ARCH // 2026
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small Label with Orange Geometric Square */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FFFFFF] border border-[#D8D5CE] rounded-full text-xs font-mono tracking-widest text-[#555555] shadow-sm">
              <span className="w-2 h-2 bg-[#FF5A36]" />
              <span className="font-semibold text-[#111111]">STAVAN</span>
              <span className="text-[#888888]">/</span>
              <span>AI BUSINESS SYSTEMS</span>
            </div>

            {/* Signature Headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Turn the work
              <br />
              behind your business
              <br />
              <span className="text-[#FF5A36] underline decoration-2 sm:decoration-[3px] underline-offset-8 decoration-[#FF5A36]/30">
                into intelligent systems.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl text-lg sm:text-xl text-[#555555] leading-relaxed font-sans">
              Stavan finds the repetitive, time-consuming parts of your business
              and builds custom AI-powered solutions around them.
            </p>

            {/* Signature Visual Motif */}
            <div className="pt-1 pb-1 max-w-sm">
              <StavanMotif theme="light" size="sm" showLabels />
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FF5A36] hover:bg-[#e84e2c] text-white font-mono text-sm font-semibold uppercase tracking-wider rounded-xl shadow-[0_6px_20px_rgba(255,90,54,0.3)] transition-all hover:-translate-y-0.5"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#problem"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#FFFFFF] hover:bg-[#FAF8F4] text-[#555555] hover:text-[#111111] font-mono text-xs uppercase tracking-wider rounded-xl border border-[#D8D5CE] shadow-sm transition-colors"
              >
                <span>Explore Methodology</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#FF5A36]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Physical Automation Engine Card */}
          <div className="lg:col-span-5 relative">
            <AutomationEngine />
          </div>
        </div>
      </div>
    </section>
  );
}
