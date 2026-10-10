"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
  MessageCircle,
  FileText,
  Users,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { StavanMotif } from "./StavanMotif";

export function AutomationExamples() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNode, setActiveNode] = useState(0);

  const examples = [
    {
      id: "leads",
      number: "SYSTEM / 01",
      title: "Lead Management Engine",
      icon: <Users className="w-4 h-4" />,
      accent: "#FF4B2B",
      tagline: "From cold inquiry to CRM-synced appointment in under 60 seconds",
      manualPain: "Hours spent manually copying contact details from WhatsApp to spreadsheets while leads go cold.",
      automatedGain: "Instant intelligent qualification, calendar booking, CRM record creation, and founder alert.",
      nodes: [
        { title: "New enquiry", desc: "Received via WhatsApp / Web form", stage: "TRIGGER" },
        { title: "AI qualification", desc: "Evaluates budget, scope & timeline", stage: "INTELLIGENCE" },
        { title: "CRM update", desc: "Generates deal & assigns pipeline stage", stage: "SYNC" },
        { title: "Personalized response", desc: "Dispatches tailored consultation invite", stage: "ACTION" },
        { title: "Sales notification", desc: "Alerts founder with pre-qualified dossier", stage: "RESULT" },
      ],
    },
    {
      id: "support",
      number: "SYSTEM / 02",
      title: "Customer Support Concierge",
      icon: <MessageCircle className="w-4 h-4" />,
      accent: "#20C8E8",
      tagline: "24/7 immediate assistance that answers FAQs and routes edge cases",
      manualPain: "Answering the same 10 pricing, operating hours, or order status questions all day long.",
      automatedGain: "80% of routine questions resolved in 2 seconds; only critical issues reach your desk.",
      nodes: [
        { title: "Customer message", desc: "Inquiry received on WhatsApp / Web", stage: "TRIGGER" },
        { title: "AI understands request", desc: "Recognizes nuance, intent & emotion", stage: "INTELLIGENCE" },
        { title: "Answers common questions", desc: "Draws verified data from business knowledge", stage: "SYNC" },
        { title: "Escalates complex requests", desc: "Flags unusual requests directly to team", stage: "ACTION" },
        { title: "Records interaction", desc: "Stores transcript & resolution telemetry", stage: "RESULT" },
      ],
    },
    {
      id: "operations",
      number: "SYSTEM / 03",
      title: "Internal Operations Pipeline",
      icon: <FileText className="w-4 h-4" />,
      accent: "#B7FF2A",
      tagline: "Transforming messy inbox attachments into synchronized accounting records",
      manualPain: "Manually opening invoices, re-typing line items into software, and writing weekly summaries.",
      automatedGain: "Automated document ingestion, data extraction, ledger update, and scheduled management report.",
      nodes: [
        { title: "Email / Document", desc: "Invoice or vendor bill arrives", stage: "TRIGGER" },
        { title: "AI extracts information", desc: "Parses vendor, date, line items & amounts", stage: "INTELLIGENCE" },
        { title: "Processes data", desc: "Validates against purchase orders & rules", stage: "SYNC" },
        { title: "Updates system", desc: "Posts entries to accounting & inventory", stage: "ACTION" },
        { title: "Generates report", desc: "Dispatches weekly executive digest", stage: "RESULT" },
      ],
    },
  ];

  const currentExample = examples[activeTab];

  // Auto progression loop
  useEffect(() => {
    setActiveNode(0);
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % currentExample.nodes.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [activeTab, currentExample.nodes.length]);

  return (
    <section
      id="automation-examples"
      className="relative py-28 sm:py-36 bg-warm-gradient bg-system-map-light text-[#121316] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-mono tracking-widest text-[#575A65] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B2B]" />
            <span>IMAGINE THE POSSIBILITY</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121316] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Imagine your business
            <br />
            <span className="text-[#FF4B2B]">without the busywork.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#575A65] font-sans leading-relaxed">
            Real architectural blueprints of how repetitive operational drag turns
            into dependable, automated pipelines.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-3 mb-8">
          {examples.map((ex, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wide border transition-all ${
                  isSelected
                    ? "bg-[#121316] text-[#FAF8F3] border-[#121316] shadow-[0_8px_20px_rgba(18,19,22,0.15)]"
                    : "bg-white text-[#575A65] border-black/10 hover:border-black/20 hover:text-[#121316]"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isSelected ? ex.accent : "#C2C6D2" }}
                />
                <span>{ex.title}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Container */}
        <div className="studio-card-light rounded-3xl p-7 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-black/[0.08]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B2B] uppercase tracking-wider mb-1">
                <span>{currentExample.number}</span>
                <span>•</span>
                <span>INTERACTIVE SIMULATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#121316] font-sans">
                {currentExample.title}
              </h3>
              <p className="text-sm sm:text-base text-[#575A65] font-sans mt-1">
                {currentExample.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20C8E8] animate-ping" />
              <span className="font-mono text-xs text-[#575A65] uppercase tracking-wider">
                PIPELINE STATUS: SYNCHRONIZED
              </span>
            </div>
          </div>

          {/* Stepped Process Stream */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-10">
            {currentExample.nodes.map((node, nIdx) => {
              const isCurrent = nIdx === activeNode;
              const isPassed = nIdx < activeNode;

              return (
                <div
                  key={nIdx}
                  onClick={() => setActiveNode(nIdx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isCurrent
                      ? "bg-white border-[#121316] shadow-[0_8px_20px_rgba(0,0,0,0.06)] -translate-y-1"
                      : isPassed
                      ? "bg-[#F7F5EE] border-black/[0.06]"
                      : "bg-[#FAFAF7] border-black/[0.04] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-[#888C99]">
                      {node.stage}
                    </span>
                    {isPassed ? (
                      <CheckCircle className="w-3.5 h-3.5 text-[#121316]" />
                    ) : (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: isCurrent ? currentExample.accent : "#D0D3DC",
                        }}
                      />
                    )}
                  </div>

                  <div className="font-sans text-xs sm:text-sm font-bold text-[#121316] mb-1">
                    {node.title}
                  </div>

                  <div className="text-[11px] text-[#575A65] font-sans leading-snug">
                    {node.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Before vs After Impact Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 border-t border-black/[0.08]">
            <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-black/[0.06]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B2B] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>BEFORE (MANUAL DRAG)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#575A65] font-sans leading-relaxed">
                {currentExample.manualPain}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.1] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#121316] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#20C8E8]" />
                <span>AFTER (STAVAN SYSTEM)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#121316] font-sans font-medium leading-relaxed">
                {currentExample.automatedGain}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#575A65]">
              Interested in a similar automated pipeline for your workflow?
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121316] hover:bg-[#202228] text-[#FAF8F3] font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              <span>Discuss this setup with Stavan</span>
              <ArrowRight className="w-4 h-4 text-[#FF4B2B]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
