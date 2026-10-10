import React from "react";
import { WHATSAPP_URL, WHATSAPP_PHONE } from "@/lib/constants";
import {
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";

export function ConsultationSection() {
  const highlights = [
    { label: "100% Complimentary", detail: "Zero cost for the diagnostic call" },
    { label: "No Technical Knowledge", detail: "Just explain what feels slow" },
    { label: "Zero Obligation", detail: "No sales pressure or lock-in" },
    { label: "Direct Founder Attention", detail: "Consultation led by Pariyushna Lunawat" },
  ];

  return (
    <section
      id="consultation"
      className="relative py-24 sm:py-32 bg-[#090909] bg-grid-dark text-[#F7F2E8] border-b-2 border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#111111] border-2 border-[#262626] p-8 sm:p-12 lg:p-16 shadow-[10px_10px_0px_#1B1B1B]">
          {/* Top colored studio accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#FF4B2B]" />

          <div className="max-w-4xl mx-auto">
            {/* Consultation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#181818] border border-[#333333]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4B2B]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FAF7EE]">
                COMPLIMENTARY CONSULTATION
              </span>
            </div>

            {/* Core Headings */}
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF7EE] mb-3 leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Something in your business feels{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#FF4B2B]">unnecessarily manual?</span>
            </h2>

            <div className="text-2xl sm:text-4xl font-mono font-bold text-[#20C8E8] mb-8">
              Let&apos;s talk about it.
            </div>

            {/* Copy */}
            <p className="text-base sm:text-xl text-[#BDB8AC] font-sans leading-relaxed mb-10 max-w-3xl">
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
                  className="p-4 bg-[#181818] border border-[#2B2B2B] flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#B7FF2A]">
                    <Check className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FAF7EE]">
                      {h.label}
                    </span>
                  </div>
                  <div className="text-xs text-[#8E8A82] font-sans">
                    {h.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Dual CTAs leading to WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF4B2B] text-white font-mono text-sm sm:text-base font-bold uppercase tracking-wider border-2 border-black shadow-[5px_5px_0px_#FAF7EE] hover:shadow-[2px_2px_0px_#FAF7EE] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#1F1F1F] text-[#FAF7EE] font-mono text-sm font-semibold uppercase tracking-wider border-2 border-[#333333] hover:border-[#25D366] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us ({WHATSAPP_PHONE})</span>
              </a>
            </div>

            {/* Trust reassurance */}
            <div className="mt-8 pt-6 border-t border-[#222222] flex items-center gap-2 text-xs font-mono text-[#8E8A82]">
              <ShieldCheck className="w-4 h-4 text-[#20C8E8]" />
              <span>
                Zero sales pitch. We only take on automations where there is a clear, meaningful return on effort.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
