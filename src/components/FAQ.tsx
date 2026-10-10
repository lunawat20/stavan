"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

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
      className="relative py-24 sm:py-32 bg-[#F4EFDF] bg-grid-cream text-[#111111] border-b-2 border-[#111111]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#FAF7EE] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
            <span className="w-2 h-2 bg-[#FF4C9A]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              FAQ
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Questions, answered.
          </h2>

          <p className="text-lg text-[#4A4740] font-sans">
            Clear, honest answers about how we partner with business owners.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#FAF7EE] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-[#111111]">
                    <span className="text-xs text-[#7A766E] mr-3 font-mono">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    {faq.q}
                  </span>

                  <div
                    className={`w-7 h-7 flex-shrink-0 flex items-center justify-center border-2 border-[#111111] transition-colors ${
                      isOpen
                        ? "bg-[#FF4B2B] text-white"
                        : "bg-[#FFFFFF] text-[#111111]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A4740] font-sans leading-relaxed border-t border-[#E0DCD3]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question strip */}
        <div className="mt-12 p-6 bg-[#FAF7EE] border-2 border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm font-mono text-[#4A4740]">
            Have a question specific to your software stack or industry?
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#111111] hover:text-[#FF4B2B] underline decoration-2 underline-offset-4"
          >
            Ask Stavan directly on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
