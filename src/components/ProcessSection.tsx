"use client";

import React, { useState } from "react";
import { MessageSquareText, Search, Compass, Hammer, ArrowRight, Check } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { StavanMotif } from "./StavanMotif";
import { GeometricCanvas } from "./GeometricCanvas";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      code: "PHASE // DISCOVERY",
      title: "TELL US",
      subtitle: "Zero technical prep required",
      copy: "Show us how your business currently works.",
      detail:
        "Walk us through your daily routines, software tools, customer touchpoints, and the operational bottlenecks eating up your team's energy.",
      icon: <MessageSquareText className="w-5 h-5 text-[#FF5A36]" />,
      accent: "#FF5A36",
    },
    {
      num: "02",
      code: "PHASE // AUDIT",
      title: "FIND THE OPPORTUNITY",
      subtitle: "Pinpoint high-leverage friction",
      copy: "We identify repetitive, inefficient or automatable processes.",
      detail:
        "We dissect workflows to uncover tasks where manual effort adds no creative value: duplicate data entry, missed inquiries, delayed updates, or manual follow-ups.",
      icon: <Search className="w-5 h-5 text-[#20C8E8]" />,
      accent: "#20C8E8",
    },
    {
      num: "03",
      code: "PHASE // ARCHITECTURE",
      title: "DESIGN THE SOLUTION",
      subtitle: "Bespoke engineering blueprint",
      copy: "We figure out where AI, automation or software can help.",
      detail:
        "Whether it is an autonomous WhatsApp concierge, a custom CRM trigger, an intelligent pipeline, or custom software — we design the most direct, elegant route.",
      icon: <Compass className="w-5 h-5 text-[#B6F23A]" />,
      accent: "#B6F23A",
    },
    {
      num: "04",
      code: "PHASE // DEPLOYMENT",
      title: "BUILD IT",
      subtitle: "Production-ready rollout",
      copy: "We turn the solution into something your business can actually use.",
      detail:
        "We engineer, integrate, rigorously test, and roll out the system directly into your current operations so your team enjoys immediate, frictionless relief.",
      icon: <Hammer className="w-5 h-5 text-[#111111]" />,
      accent: "#111111",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 bg-canvas-sky bg-grid-sky text-[#111111] border-b border-[#B8D3E8] overflow-hidden"
    >
      {/* Large Subtle Square / Grid Structure Behind Steps */}
      <GeometricCanvas variant="process" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#B8D3E8] rounded-full text-xs font-mono tracking-widest text-[#426E92] mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#FF5A36]" />
              <span>HOW IT WORKS</span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.08]"
              style={{ letterSpacing: "-0.03em" }}
            >
              From business problem
              <br />
              <span className="text-[#FF5A36]">to intelligent system.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-sans leading-relaxed">
              No jargon. No unnecessary complexity. Just a systematic progression
              from friction to automated clarity.
            </p>
          </div>

          <div className="hidden lg:block w-72">
            <StavanMotif theme="light" size="sm" showLabels />
          </div>
        </div>

        {/* 4 Steps with Active Step as Elevated White Card with Orange Edge */}
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
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all duration-200 ${
                  isSelected
                    ? "bg-[#FFFFFF] border-y border-r border-[#D8D5CE] border-l-4 border-l-[#FF5A36] shadow-[0_16px_36px_-4px_rgba(17,17,17,0.08)] -translate-y-1.5"
                    : "bg-[#FFFFFF] border border-[#D8D5CE] hover:border-[#B8B4A7] hover:-translate-y-0.5 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#111111]">
                      {step.num}
                    </span>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded tracking-wider ${
                        isSelected
                          ? "bg-[#FF5A36]/10 text-[#FF5A36] border border-[#FF5A36]/25 font-bold"
                          : isCompleted
                          ? "bg-[#F5F3EE] text-[#555555] border border-[#E5E1D6]"
                          : "text-[#888888]"
                      }`}
                    >
                      {isCompleted && <Check className="w-2.5 h-2.5 inline mr-1 text-[#111111]" />}
                      {statusLabel}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#777777] mb-1">
                    {step.code}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] font-sans mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#222222] mb-3 leading-snug">
                    {step.copy}
                  </p>

                  <p className="text-xs text-[#555555] font-sans leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBE7DC] flex items-center justify-between text-xs font-mono text-[#777777]">
                  <span>STEP 0{idx + 1}</span>
                  <span className={isSelected ? "text-[#FF5A36] font-bold" : "text-[#777777]"}>
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discovery CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#D8D5CE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_6px_20px_rgba(17,17,17,0.03)]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#FF5A36] mb-1 font-semibold">
              ZERO RISK DISCOVERY
            </div>
            <div className="text-base sm:text-lg font-bold text-[#111111]">
              Ready to walk through what takes too much time in your business?
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A36] hover:bg-[#e84e2c] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_14px_rgba(255,90,54,0.3)] transition-all hover:-translate-y-0.5"
          >
            <span>Start with Step 01</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
