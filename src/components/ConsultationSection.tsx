import React from "react";
import { WHATSAPP_URL, WHATSAPP_PHONE, FOUNDER_NAME } from "@/lib/constants";
import { GeometricCanvas } from "./GeometricCanvas";
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
      className="relative py-28 sm:py-36 bg-canvas-ivory text-[#111111] border-b border-[#D8D5CE] overflow-hidden"
    >
      {/* Large Geometric Background Elements */}
      <GeometricCanvas variant="consultation" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-[#FFFFFF] border border-[#D8D5CE] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(17,17,17,0.05)] overflow-hidden">
          {/* Subtle top indicator bar in coral orange */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF5A36]" />

          <div className="max-w-4xl mx-auto">
            {/* Consultation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#F5F3EE] border border-[#D8D5CE] rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A36]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
                COMPLIMENTARY CONSULTATION
              </span>
            </div>

            {/* Core Headings */}
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-4 leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Something in your business feels{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#FF5A36]">unnecessarily manual?</span>
            </h2>

            <div className="text-2xl sm:text-4xl font-mono font-bold text-[#111111] mb-8">
              Let&apos;s talk about it.
            </div>

            {/* Copy */}
            <p className="text-base sm:text-xl text-[#555555] font-sans leading-relaxed mb-10 max-w-3xl">
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
                  className="p-4 rounded-xl bg-[#FAF8F4] border border-[#E8E5DC] flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#111111]">
                    <Check className="w-4 h-4 text-[#FF5A36]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                      {h.label}
                    </span>
                  </div>
                  <div className="text-xs text-[#555555] font-sans">
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
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A36] hover:bg-[#e84e2c] text-white font-mono text-sm sm:text-base font-semibold uppercase tracking-wider rounded-xl shadow-[0_10px_25px_-5px_rgba(255,90,54,0.35)] transition-all hover:-translate-y-0.5"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FFFFFF] text-[#111111] font-mono text-sm font-semibold uppercase tracking-wider rounded-xl border border-[#D8D5CE] hover:border-[#FF5A36] hover:text-[#FF5A36] shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us ({WHATSAPP_PHONE})</span>
              </a>
            </div>

            {/* Reassurance */}
            <div className="mt-8 pt-6 border-t border-[#EBE7DC] flex items-center gap-2 text-xs font-mono text-[#777777]">
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
