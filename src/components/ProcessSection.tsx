"use client";

import React, { useState } from "react";
import { MessageSquareText, Search, Compass, Hammer, ArrowRight, Check } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { StavanMotif } from "./StavanMotif";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      code: "PHASE / DISCOVERY",
      title: "TELL US",
      subtitle: "Zero technical prep required",
      copy: "Show us how your business currently works.",
      detail:
        "Walk us through your daily routines, software tools, customer touchpoints, and the operational bottlenecks eating up your team's energy.",
      icon: <MessageSquareText className="w-5 h-5 text-[#B7FF2A]" />,
      accent: "#B7FF2A",
    },
    {
      num: "02",
      code: "PHASE / AUDIT",
      title: "FIND THE OPPORTUNITY",
      subtitle: "Pinpoint high-leverage friction",
      copy: "We identify repetitive, inefficient or automatable processes.",
      detail:
        "We dissect workflows to uncover tasks where manual effort adds no creative value: duplicate data entry, missed inquiries, delayed updates, or manual follow-ups.",
      icon: <Search className="w-5 h-5 text-[#B7FF2A]" />,
      accent: "#B7FF2A",
    },
    {
      num: "03",
      code: "PHASE / ARCHITECTURE",
      title: "DESIGN THE SOLUTION",
      subtitle: "Bespoke engineering blueprint",
      copy: "We figure out where AI, automation or software can help.",
      detail:
        "Whether it is an autonomous WhatsApp concierge, a custom CRM trigger, an intelligent pipeline, or custom software — we design the most direct, elegant route.",
      icon: <Compass className="w-5 h-5 text-[#B7FF2A]" />,
      accent: "#B7FF2A",
    },
    {
      num: "04",
      code: "PHASE / DEPLOYMENT",
      title: "BUILD IT",
      subtitle: "Production-ready rollout",
      copy: "We turn the solution into something your business can actually use.",
      detail:
        "We engineer, integrate, rigorously test, and roll out the system directly into your current operations so your team enjoys immediate, frictionless relief.",
      icon: <Hammer className="w-5 h-5 text-[#B7FF2A]" />,
      accent: "#B7FF2A",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 bg-dark-canvas bg-system-map-dark text-[#F7F6F2] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1D26] border border-white/10 rounded-full text-xs font-mono tracking-widest text-[#B7FF2A] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2A]" />
              <span>HOW IT WORKS</span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F6F2] mb-6 leading-[1.08]"
              style={{ letterSpacing: "-0.03em" }}
            >
              From business problem
              <br />
              <span className="text-[#B7FF2A]">to intelligent system.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A6A9B6] font-sans leading-relaxed">
              No jargon. No unnecessary complexity. Just a systematic progression
              from friction to automated clarity.
            </p>
          </div>

          <div className="hidden lg:block w-72">
            <StavanMotif theme="dark" size="sm" showLabels />
          </div>
        </div>

        {/* 4 Refined Process Cards with Live Status Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const isCompleted = idx < activeStep;
            const statusLabel = isSelected
              ? "PROCESSING"
              : isCompleted
              ? "DONE"
              : "WAITING";

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`studio-card-dark rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all ${
                  isSelected ? "border-[#B7FF2A]/50 bg-[#171A22]" : ""
                }`}
              >
                {/* Thin vertical accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r transition-all"
                  style={{
                    backgroundColor: isSelected
                      ? "#B7FF2A"
                      : isCompleted
                      ? "#3D4150"
                      : "transparent",
                  }}
                />

                <div className="pl-2">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#F7F6F2]">
                      {step.num}
                    </span>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded tracking-wider ${
                        isSelected
                          ? "bg-[#B7FF2A]/15 text-[#B7FF2A] border border-[#B7FF2A]/30"
                          : isCompleted
                          ? "bg-white/[0.06] text-[#A6A9B6]"
                          : "text-[#6C7080]"
                      }`}
                    >
                      {isCompleted && <Check className="w-2.5 h-2.5 inline mr-1 text-[#B7FF2A]" />}
                      {statusLabel}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#888C99] mb-1">
                    {step.code}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F7F6F2] font-sans mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#D4D7E2] mb-3 leading-snug">
                    {step.copy}
                  </p>

                  <p className="text-xs text-[#8E92A2] font-sans leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pl-2 mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8E92A2]">
                  <span>STEP 0{idx + 1}</span>
                  <span className="text-[#B7FF2A]">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discovery CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#14161C] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#B7FF2A] mb-1">
              ZERO RISK DISCOVERY
            </div>
            <div className="text-base sm:text-lg font-bold text-[#F7F6F2]">
              Ready to walk through what takes too much time in your business?
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 bg-[#B7FF2A] hover:bg-[#a6ec1f] text-[#0D0E12] font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:-translate-y-0.5"
          >
            <span>Start with Step 01</span>
            <ArrowRight className="w-4 h-4 text-[#0D0E12]" />
          </a>
        </div>
      </div>
    </section>
  );
}
