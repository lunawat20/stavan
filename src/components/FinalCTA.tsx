import React from "react";
import { WHATSAPP_URL, WHATSAPP_PHONE, FOUNDER_NAME } from "@/lib/constants";
import { ArrowUpRight, MessageSquare, PhoneCall } from "lucide-react";
import { StavanMotif } from "./StavanMotif";

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#111111] bg-workflow-dark text-[#F7F4EC] border-b border-white/[0.08] overflow-hidden">
      {/* Studio Coordinate Badges */}
      <div className="absolute top-8 left-8 text-[11px] font-mono text-[#555555] hidden md:block">
        [ SYSTEM // ENGAGE ]
      </div>
      <div className="absolute bottom-8 right-8 text-[11px] font-mono text-[#555555] hidden md:block">
        [ FOUNDER LINE: +91 6377841469 ]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#1E1E1E] border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF542F]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#F7F4EC]">
              START A CONVERSATION
            </span>
          </div>

          {/* Large Headline */}
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F7F4EC] mb-8 leading-[1.02]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Let&apos;s find something{" "}
            <span className="text-[#FF542F] block sm:inline">
              worth automating.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-[#A0A0A0] font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what&apos;s taking too much time.
            <br className="hidden sm:inline" />
            We&apos;ll explore what AI can do about it.
          </p>

          {/* Signature Stavan Motif in Dark Mode */}
          <div className="max-w-xs mx-auto mb-10">
            <StavanMotif theme="dark" size="sm" showLabels />
          </div>

          {/* WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-9 py-4.5 bg-[#FF542F] hover:bg-[#e64622] text-white font-mono text-base font-semibold uppercase tracking-wider rounded-xl shadow-[0_12px_30px_-5px_rgba(255,84,47,0.4)] transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Talk to Stavan</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Direct Phone / Contact Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#181818] border border-white/10 rounded-full font-mono text-xs sm:text-sm text-[#A0A0A0]">
            <PhoneCall className="w-3.5 h-3.5 text-[#20C8E8]" />
            <span>Direct WhatsApp & Call:</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F4EC] font-bold hover:text-[#FF542F] transition-colors"
            >
              {WHATSAPP_PHONE}
            </a>
            <span className="text-[#444444]">•</span>
            <span>{FOUNDER_NAME}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
