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

export function AutomationExamples() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNode, setActiveNode] = useState(0);

  const examples = [
    {
      id: "leads",
      number: "EXAMPLE 01",
      title: "LEAD MANAGEMENT",
      icon: <Users className="w-4 h-4" />,
      accent: "#FF4B2B",
      tagline: "From cold inquiry to CRM-synced appointment in under 60 seconds",
      manualPain: "Hours spent manually copying details from WhatsApp to spreadsheets while leads go cold.",
      automatedGain: "Instant intelligent qualification, calendar booking, CRM record creation, and founder alert.",
      nodes: [
        { title: "New enquiry", desc: "Received via WhatsApp / Form", type: "trigger" },
        { title: "AI qualification", desc: "Evaluates budget, scope & urgency", type: "ai" },
        { title: "CRM update", desc: "Creates deal & assigns pipeline stage", type: "system" },
        { title: "Personalized response", desc: "Dispatches tailored consultation invite", type: "action" },
        { title: "Sales notification", desc: "Alerts founder with pre-qualified dossier", type: "complete" },
      ],
    },
    {
      id: "support",
      number: "EXAMPLE 02",
      title: "CUSTOMER SUPPORT",
      icon: <MessageCircle className="w-4 h-4" />,
      accent: "#20C8E8",
      tagline: "24/7 immediate assistance that answers FAQs and routes edge cases",
      manualPain: "Answering the same 10 pricing, hours, or order status questions all day long.",
      automatedGain: "80% of routine questions resolved in 2 seconds; only critical issues reach your desk.",
      nodes: [
        { title: "Customer message", desc: "Inquiry received on WhatsApp / Web", type: "trigger" },
        { title: "AI understands request", desc: "Recognizes nuance, intent & emotion", type: "ai" },
        { title: "Answers common questions", desc: "Draws verified data from business knowledge", type: "system" },
        { title: "Escalates complex requests", desc: "Flags unusual requests directly to team", type: "action" },
        { title: "Records interaction", desc: "Stores transcript & resolution telemetry", type: "complete" },
      ],
    },
    {
      id: "operations",
      number: "EXAMPLE 03",
      title: "INTERNAL OPERATIONS",
      icon: <FileText className="w-4 h-4" />,
      accent: "#B7FF2A",
      tagline: "Transforming messy inbox attachments into synchronized accounting records",
      manualPain: "Manually opening invoices, re-typing line items into software, and writing weekly summaries.",
      automatedGain: "Automated document ingestion, data extraction, ledger update, and scheduled management report.",
      nodes: [
        { title: "Email / Document", desc: "Invoice or vendor bill arrives", type: "trigger" },
        { title: "AI extracts information", desc: "Parses vendor, date, line items & amounts", type: "ai" },
        { title: "Processes data", desc: "Validates against purchase orders & rules", type: "system" },
        { title: "Updates system", desc: "Posts entries to accounting & inventory", type: "action" },
        { title: "Generates report", desc: "Dispatches weekly executive digest", type: "complete" },
      ],
    },
  ];

  const currentExample = examples[activeTab];

  // Auto animate nodes of active example
  useEffect(() => {
    setActiveNode(0);
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % currentExample.nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeTab, currentExample.nodes.length]);

  return (
    <section
      id="automation-examples"
      className="relative py-24 sm:py-32 bg-[#F4EFDF] bg-grid-cream text-[#111111] border-b-2 border-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#FAF7EE] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
            <span className="w-2 h-2 bg-[#20C8E8]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              IMAGINE THE POSSIBILITY
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Imagine your business
            <br />
            <span className="text-[#FF4B2B]">without the busywork.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#4A4740] font-sans leading-relaxed">
            Real architectural examples of how manual repetitive drag turns into
            reliable, self-running systems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
          {examples.map((ex, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={ex.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-[#111111] transition-all duration-150 ${
                  isSelected
                    ? "bg-[#111111] text-[#FAF7EE] shadow-[4px_4px_0px_#FF4B2B] -translate-x-0.5 -translate-y-0.5"
                    : "bg-[#FAF7EE] text-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#FFFFFF]"
                }`}
              >
                <div
                  className="w-4 h-4 rounded-none flex items-center justify-center text-[10px]"
                  style={{
                    backgroundColor: isSelected ? ex.accent : "#E0DCD3",
                    color: "#111111",
                  }}
                >
                  {idx + 1}
                </div>
                <span>{ex.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Example Showcase Card */}
        <div className="bg-[#FAF7EE] border-2 border-[#111111] p-6 sm:p-10 shadow-[8px_8px_0px_#111111]">
          {/* Header of Active Workflow */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#111111]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B2B] uppercase tracking-widest mb-1">
                <span>{currentExample.number}</span>
                <span>•</span>
                <span>SYSTEM SIMULATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[#111111]">
                {currentExample.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4A4740] font-sans mt-1">
                {currentExample.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="w-2.5 h-2.5 bg-[#B7FF2A] border border-black animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                STATUS: AUTORUN ACTIVE
              </span>
            </div>
          </div>

          {/* Living Interactive Flowchart / Step Stream */}
          <div className="mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A766E] mb-4">
              EXECUTION PIPELINE // STEP 0{activeNode + 1} OF 0
              {currentExample.nodes.length}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {currentExample.nodes.map((node, nIdx) => {
                const isCurrent = nIdx === activeNode;
                const isPassed = nIdx < activeNode;

                return (
                  <div
                    key={nIdx}
                    onClick={() => setActiveNode(nIdx)}
                    style={{
                      borderColor: isCurrent ? "#111111" : "#D4CFBE",
                      backgroundColor: isCurrent
                        ? "#FFFFFF"
                        : isPassed
                        ? "#F0EADB"
                        : "#FAF7EE",
                      boxShadow: isCurrent
                        ? `4px 4px 0px ${currentExample.accent}`
                        : "2px 2px 0px rgba(0,0,0,0.06)",
                    }}
                    className={`cursor-pointer p-4 border-2 transition-all relative ${
                      isCurrent ? "-translate-y-1" : "hover:border-[#111111]"
                    }`}
                  >
                    {/* Step indicator top */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-[#7A766E]">
                        0{nIdx + 1}
                      </span>
                      {isPassed ? (
                        <CheckCircle className="w-3.5 h-3.5 text-[#111111]" />
                      ) : (
                        <span
                          className="w-2 h-2 rounded-none"
                          style={{
                            backgroundColor: isCurrent
                              ? currentExample.accent
                              : "#D4CFBE",
                          }}
                        />
                      )}
                    </div>

                    <div className="font-mono text-xs sm:text-sm font-bold text-[#111111] mb-1">
                      {node.title}
                    </div>

                    <div className="text-[11px] text-[#5A574E] font-sans leading-tight">
                      {node.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Before vs After Impact Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t-2 border-[#111111]">
            <div className="p-4 sm:p-5 bg-[#EAE4D2] border border-[#111111]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4B2B] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>BEFORE (MANUAL DRAG)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4740] font-sans leading-relaxed">
                {currentExample.manualPain}
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#FFFFFF] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#20C8E8]" />
                <span>AFTER (STAVAN SYSTEM)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#111111] font-sans font-medium leading-relaxed">
                {currentExample.automatedGain}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#7A766E]">
              Want a similar automated pipeline for your workflow?
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#FAF7EE] font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#FF4B2B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
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
