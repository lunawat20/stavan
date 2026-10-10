import React from "react";
import { WHATSAPP_URL, WHATSAPP_PHONE, FOUNDER_NAME } from "@/lib/constants";
import {
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";

export function ConsultationSection() {
  const highlights = [
    { label: "100% Complimentary", detail: "Zero cost for the discovery session" },
    { label: "No Technical Knowledge", detail: "Just walk us through daily friction" },
    { label: "Zero Obligation", detail: "No sales pressure or lock-in" },
    { label: "Direct Founder Attention", detail: `Led directly by ${FOUNDER_NAME}` },
  ];

  return (
    <section
      id="consultation"
      className="relative py-28 sm:py-36 bg-[#111111] bg-workflow-dark text-[#F7F4EC] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#181818] border border-white/[0.1] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20C8E8] via-[#FF542F] to-[#B6F23A]" />

          <div className="max-w-4xl mx-auto">
            {/* Consultation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#222222] border border-white/10 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#FF542F]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F7F4EC]">
                COMPLIMENTARY CONSULTATION
              </span>
            </div>

            {/* Core Headings */}
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F4EC] mb-4 leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Something in your business feels{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#FF542F]">unnecessarily manual?</span>
            </h2>

            <div className="text-2xl sm:text-4xl font-mono font-bold text-[#20C8E8] mb-8">
              Let&apos;s talk about it.
            </div>

            {/* Copy */}
            <p className="text-base sm:text-xl text-[#A0A0A0] font-sans leading-relaxed mb-10 max-w-3xl">
              Book a complimentary consultation and walk us through how your
              business works. We&apos;ll help identify where AI or automation
              could save time, reduce repetitive work or improve the way your
              business operates.
            </p>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#202020] border border-white/[0.08] flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#B6F23A]">
                    <Check className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F7F4EC]">
                      {h.label}
                    </span>
                  </div>
                  <div className="text-xs text-[#8E8E8E] font-sans">
                    {h.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs leading to WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF542F] hover:bg-[#e64622] text-white font-mono text-sm sm:text-base font-semibold uppercase tracking-wider rounded-xl shadow-[0_10px_25px_-5px_rgba(255,84,47,0.4)] transition-all hover:-translate-y-0.5"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#202020] text-[#F7F4EC] font-mono text-sm font-semibold uppercase tracking-wider rounded-xl border border-white/10 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us ({WHATSAPP_PHONE})</span>
              </a>
            </div>

            {/* Reassurance */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-[#8E8E8E]">
              <ShieldCheck className="w-4 h-4 text-[#20C8E8]" />
              <span>
                Zero sales pressure. We only recommend systems where automation creates genuine operational leverage.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
