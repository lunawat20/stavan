"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { GeometricCanvas } from "./GeometricCanvas";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What exactly does Stavan do?",
      a: "Stavan helps businesses identify repetitive, inefficient, or difficult processes and turns them into automated, AI-powered systems. We design, engineer, and deploy custom software, workflows, and AI solutions specifically fitted to how your business operates.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "Not at all. You just need to explain what takes too much time or where friction occurs in your daily operations. We translate your business problems into clean technical architecture.",
    },
    {
      q: "What kind of businesses can Stavan help?",
      a: "Any business with repetitive operations or customer interactions. We work with local business owners, service firms, retailers, schools, clinics, real estate teams, restaurants, and growing companies across industries.",
    },
    {
      q: "What can you automate?",
      a: "Virtually any repetitive task: customer messaging on WhatsApp, lead capture & CRM updates, data entry across spreadsheets, email categorization, document extraction, reporting, and inter-tool synchronization.",
    },
    {
      q: "Can you build custom AI solutions?",
      a: "Yes. Stavan is not locked into a single off-the-shelf product. If your business has unique operational constraints, we engineer bespoke AI systems, custom workflows, and tailored internal software.",
    },
    {
      q: "Can you work with the software we already use?",
      a: "Yes. We connect and integrate directly with the tools you already rely on — including WhatsApp, Google Workspace, Excel, CRMs, email clients, ERPs, and custom databases.",
    },
    {
      q: "How much does an automation solution cost?",
      a: "Every solution is different. After understanding your requirements during our complimentary consultation, we recommend the right approach and provide transparent scope.",
    },
    {
      q: "How long does implementation take?",
      a: "Focused automations (like WhatsApp triage or lead sync) often launch within days. More extensive custom systems and bespoke software are delivered in structured milestones.",
    },
    {
      q: "Is the consultation really free?",
      a: "Yes. The consultation is completely complimentary and comes with zero commitment. It is an exploratory session to map where automation can genuinely create value for you.",
    },
    {
      q: "What happens after the consultation?",
      a: "If there is a clear opportunity where automation saves significant time or captures revenue, we outline a clear plan and next steps. If not, you walk away with actionable operational clarity at no cost.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-28 sm:py-36 bg-canvas-stone bg-drafting-dots text-[#111111] border-b border-[#CBC8BE] overflow-hidden"
    >
      <GeometricCanvas variant="faq" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#CBC8BE] rounded-full text-xs font-mono tracking-widest text-[#6B6960] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#FF5A36]" />
            <span>FAQ</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Questions, answered.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-sans">
            Clear, honest answers about how we partner with business owners.
          </p>
        </div>

        {/* Accordion Stack on White Blueprint Canvas */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="card-studio rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold tracking-tight text-[#111111] font-sans">
                    <span className="text-xs text-[#777777] mr-3 font-mono">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    {faq.q}
                  </span>

                  <div
                    className={`w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center border transition-colors ${
                      isOpen
                        ? "bg-[#FF5A36] border-[#FF5A36] text-white"
                        : "bg-[#F5F3EE] border-[#D8D5CE] text-[#555555]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#555555] font-sans leading-relaxed border-t border-[#EBE7DC]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F4] border border-[#D8D5CE] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_4px_16px_rgba(17,17,17,0.02)]">
          <div className="text-xs sm:text-sm font-mono text-[#555555]">
            Have a question specific to your software stack or industry?
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#111111] hover:text-[#FF5A36] transition-colors"
          >
            <span>Ask Stavan directly on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
