import React from "react";
import { WHATSAPP_URL, WHATSAPP_PHONE, FOUNDER_NAME } from "@/lib/constants";
import { ArrowUpRight, MessageSquare, PhoneCall } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#090909] bg-grid-dark text-[#F7F2E8] border-b-2 border-[#1E1E1E] overflow-hidden">
      {/* Decorative Technical Coordinate Badges */}
      <div className="absolute top-8 left-8 text-[11px] font-mono text-[#333333] hidden md:block">
        [ SYSTEM // ENGAGE ]
      </div>
      <div className="absolute bottom-8 right-8 text-[11px] font-mono text-[#333333] hidden md:block">
        [ FOUNDER LINE: +91 6377841469 ]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#141414] border border-[#2B2B2B]">
            <span className="w-2 h-2 bg-[#FF4B2B] rotate-45" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FAF7EE]">
              START A CONVERSATION
            </span>
          </div>

          {/* Very Large Headline */}
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FAF7EE] mb-8 leading-[1.02]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Let&apos;s find something{" "}
            <span className="text-[#FF4B2B] block sm:inline">
              worth automating.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-[#B8B3A8] font-sans leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us what&apos;s taking too much time.
            <br className="hidden sm:inline" />
            We&apos;ll explore what AI can do about it.
          </p>

          {/* Big Tactile WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 sm:px-12 py-5 bg-[#FF4B2B] text-white font-mono text-base sm:text-lg font-bold uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_#FAF7EE] hover:shadow-[2px_2px_0px_#FAF7EE] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Talk to Stavan</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Direct Phone / Contact Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#121212] border border-[#262626] font-mono text-xs sm:text-sm text-[#8E8A82]">
            <PhoneCall className="w-3.5 h-3.5 text-[#20C8E8]" />
            <span>Direct WhatsApp & Call:</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF7EE] font-bold hover:text-[#FF4B2B] transition-colors"
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
