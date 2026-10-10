"use client";

import React, { useState } from "react";
import { MessageSquareText, Search, Compass, Hammer, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "TELL US",
      subtitle: "Zero technical prep required",
      copy: "Show us how your business currently works.",
      detail:
        "Walk us through your daily routines, software tools, customer touchpoints, and the operational bottlenecks eating up your team's energy.",
      icon: <MessageSquareText className="w-5 h-5" />,
      accent: "#FF4B2B",
    },
    {
      num: "02",
      title: "FIND THE OPPORTUNITY",
      subtitle: "Pinpoint high-leverage friction",
      copy: "We identify repetitive, inefficient or automatable processes.",
      detail:
        "We dissect workflows to uncover tasks where manual effort adds no creative value: duplicate data entry, missed inquiries, delayed updates, or manual follow-ups.",
      icon: <Search className="w-5 h-5" />,
      accent: "#20C8E8",
    },
    {
      num: "03",
      title: "DESIGN THE SOLUTION",
      subtitle: "Bespoke architectural blueprint",
      copy: "We figure out where AI, automation or software can help.",
      detail:
        "Whether it is an autonomous WhatsApp concierge, a custom CRM trigger, an intelligent pipeline, or custom software — we design the most direct, elegant route.",
      icon: <Compass className="w-5 h-5" />,
      accent: "#B7FF2A",
    },
    {
      num: "04",
      title: "BUILD IT",
      subtitle: "Production-ready deployment",
      copy: "We turn the solution into something your business can actually use.",
      detail:
        "We engineer, integrate, rigorously test, and roll out the system directly into your current operations so your team enjoys immediate, frictionless relief.",
      icon: <Hammer className="w-5 h-5" />,
      accent: "#FFD43B",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-[#090909] bg-grid-dark text-[#F7F2E8] border-b-2 border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#141414] border-2 border-[#262626] shadow-[3px_3px_0px_#1E1E1E]">
            <span className="w-2 h-2 bg-[#B7FF2A]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E0DCD3]">
              HOW IT WORKS
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F7F2E8] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            From business problem
            <br />
            <span className="text-[#B7FF2A]">to intelligent system.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#B3AEA3] font-sans leading-relaxed">
            No jargon. No unnecessary complexity. Just a systematic progression
            from friction to automated clarity.
          </p>
        </div>

        {/* Interactive Stepped Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer group relative flex flex-col justify-between bg-[#121212] border-2 p-6 sm:p-7 transition-all duration-200 ${
                  isSelected
                    ? "border-[#F7F2E8] -translate-x-1 -translate-y-1"
                    : "border-[#222222] hover:border-[#383838]"
                }`}
                style={{
                  boxShadow: isSelected
                    ? `6px 6px 0px ${step.accent}`
                    : "4px 4px 0px #181818",
                }}
              >
                {/* Top Step Accent Badge */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all"
                  style={{
                    backgroundColor: isSelected ? step.accent : "#222222",
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-8 mt-1">
                    <span className="font-mono text-3xl font-black tracking-tight text-[#FAF7EE]">
                      {step.num}
                    </span>
                    <div
                      className="w-10 h-10 flex items-center justify-center border border-black shadow-[2px_2px_0px_#000]"
                      style={{
                        backgroundColor: step.accent,
                        color: "#111111",
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#8E8A82] mb-1">
                    {step.subtitle}
                  </div>

                  <h3 className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#FAF7EE] uppercase mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#E0DCD3] mb-3 leading-snug">
                    {step.copy}
                  </p>

                  <p className="text-xs text-[#8E8A82] leading-relaxed font-sans">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between font-mono text-xs">
                  <span
                    style={{ color: isSelected ? step.accent : "#666666" }}
                    className="font-bold uppercase tracking-wider"
                  >
                    PHASE {step.num}
                  </span>
                  <span className="text-[#8E8A82] group-hover:text-[#FAF7EE] transition-colors">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Bottom CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-[#141414] border-2 border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[5px_5px_0px_#1B1B1B]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#B7FF2A] mb-1">
              ZERO RISK DISCOVERY
            </div>
            <div className="text-base sm:text-lg font-bold text-[#FAF7EE]">
              Ready to walk through what takes too much time in your business?
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 bg-[#FAF7EE] text-[#111111] font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#B7FF2A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#B7FF2A] transition-all"
          >
            <span>Start with Step 01</span>
            <ArrowRight className="w-4 h-4 text-[#FF4B2B]" />
          </a>
        </div>
      </div>
    </section>
  );
}
