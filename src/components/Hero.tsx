import React from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { AutomationEngine } from "./AutomationEngine";
import { StavanMotif } from "./StavanMotif";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 bg-dark-canvas bg-system-map-dark text-[#F7F6F2] flex flex-col justify-center overflow-hidden border-b border-white/[0.08]">
      {/* Studio Coordinate Marks */}
      <div className="absolute top-28 left-8 text-[11px] font-mono text-[#4C5060] hidden lg:block tracking-widest">
        COORD: 26.91°N // STV-01
      </div>
      <div className="absolute top-28 right-8 text-[11px] font-mono text-[#4C5060] hidden lg:block tracking-widest">
        SYSTEM: ACTIVE // 2026
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1D26] border border-white/10 rounded-full text-xs font-mono tracking-widest text-[#20C8E8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C8E8] animate-ping" />
              <span>STAVAN / AI BUSINESS SYSTEMS</span>
            </div>

            {/* Signature Headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F6F2] leading-[1.06]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Turn the work
              <br />
              behind your business
              <br />
              <span className="text-[#20C8E8]">into intelligent systems.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl text-lg sm:text-xl text-[#A6A9B6] leading-relaxed font-sans">
              Stavan finds the repetitive, time-consuming parts of your business
              and builds custom AI-powered solutions around them.
            </p>

            {/* Signature Visual Motif */}
            <div className="pt-1 pb-1 max-w-sm">
              <StavanMotif theme="dark" size="sm" showLabels />
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FF4B2B] hover:bg-[#ff3b17] text-white font-mono text-sm font-semibold uppercase tracking-wider rounded-xl shadow-[0_10px_25px_-5px_rgba(255,75,43,0.4)] transition-all hover:-translate-y-0.5"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#problem"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#171A22] hover:bg-[#202430] text-[#A6A9B6] hover:text-[#F7F6F2] font-mono text-xs uppercase tracking-wider rounded-xl border border-white/10 transition-colors"
              >
                <span>Explore Methodology</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#20C8E8]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Living Business Automation Engine */}
          <div className="lg:col-span-5 relative">
            <AutomationEngine />
          </div>
        </div>
      </div>
    </section>
  );
}
