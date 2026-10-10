import React from "react";
import { WHATSAPP_URL, FOUNDER_NAME } from "@/lib/constants";
import { WorkflowAnimation } from "./WorkflowAnimation";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 sm:pt-36 pb-20 bg-[#090909] bg-grid-dark text-[#F7F2E8] flex flex-col justify-center overflow-hidden border-b-2 border-[#1E1E1E]">
      {/* Editorial Decorative Corner Crosshairs */}
      <div className="absolute top-28 left-6 text-[#444444] font-mono text-[11px] select-none pointer-events-none hidden lg:block">
        + 00 // STAVAN STUDIO
      </div>
      <div className="absolute top-28 right-6 text-[#444444] font-mono text-[11px] select-none pointer-events-none hidden lg:block">
        FOUNDED BY {FOUNDER_NAME.toUpperCase()} +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Eyebrow Label with Geometric Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 bg-[#141414] border-2 border-[#262626] shadow-[3px_3px_0px_#1E1E1E]">
          <span className="w-2 h-2 bg-[#FF4B2B] rotate-45" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E0DCD3]">
            AI • AUTOMATION • BUSINESS SOLUTIONS
          </span>
          <span className="hidden sm:inline-block text-[#555555] font-mono text-xs">
            |
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#20C8E8] font-bold">
            DIRECT CONSULTATION
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-tight leading-[1.04] text-[#F7F2E8] mb-8 font-sans"
            style={{ letterSpacing: "-0.035em" }}
          >
            If it can be done manually,{" "}
            <span className="relative inline-block text-[#F7F2E8]">
              <span className="relative z-10 text-[#FF4B2B] underline decoration-4 sm:decoration-[6px] underline-offset-8 decoration-[#FF4B2B]/40">
                it can probably be automated.
              </span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl text-lg sm:text-xl text-[#B3AEA3] leading-relaxed mb-10 font-sans">
            Stavan builds custom AI-powered solutions that help businesses automate
            repetitive work, streamline operations and work smarter.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 sm:px-9 py-4 bg-[#FF4B2B] text-white font-mono text-sm sm:text-base font-bold uppercase tracking-wider border-2 border-black shadow-[5px_5px_0px_#FAF7EE] hover:shadow-[2px_2px_0px_#FAF7EE] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              <span>Talk to Stavan</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#problem"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-4 bg-[#141414] text-[#F7F2E8] font-mono text-sm font-semibold uppercase tracking-wider border-2 border-[#262626] hover:bg-[#1E1E1E] hover:border-[#F7F2E8]/40 transition-colors"
            >
              <span>See what we automate</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-[#20C8E8]" />
            </a>
          </div>
        </div>

        {/* Hero Interactive Visual: Dynamic Living Workflow System */}
        <div className="w-full mt-2">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E8A82]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD43B]" />
              <span className="uppercase tracking-wider font-bold">
                System Workflow Demonstration
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#666666] hidden sm:block">
              Interactive • Click any step to inspect
            </div>
          </div>
          <WorkflowAnimation />
        </div>
      </div>
    </section>
  );
}
