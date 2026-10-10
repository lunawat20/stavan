"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Cpu,
  CheckCircle2,
  Database,
  Send,
  Bell,
  RefreshCw,
  Zap,
} from "lucide-react";

interface WorkflowStep {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
  dataSnippet: string;
  latency: string;
}

export function WorkflowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const steps: WorkflowStep[] = [
    {
      id: "inquiry",
      label: "CUSTOMER ENQUIRY",
      category: "INPUT TRIGGER",
      icon: <MessageSquare className="w-4 h-4 text-[#111111]" />,
      accent: "#FF4B2B",
      dataSnippet: '"Need automated billing & WhatsApp dispatch"',
      latency: "0.0s",
    },
    {
      id: "ai_triage",
      label: "INTELLIGENT TRIAGE",
      category: "PROCESSING CORE",
      icon: <Cpu className="w-4 h-4 text-[#111111]" />,
      accent: "#20C8E8",
      dataSnippet: "Intent matched • Entity extracted • Priority: High",
      latency: "0.3s",
    },
    {
      id: "qualified",
      label: "LEAD QUALIFIED",
      category: "VALIDATION",
      icon: <CheckCircle2 className="w-4 h-4 text-[#111111]" />,
      accent: "#B7FF2A",
      dataSnippet: "Score: 94/100 • Fit: Automation Pipeline",
      latency: "0.5s",
    },
    {
      id: "crm",
      label: "CRM SYNCHRONIZED",
      category: "RECORD UPDATE",
      icon: <Database className="w-4 h-4 text-[#111111]" />,
      accent: "#FF4C9A",
      dataSnippet: "Pipeline record created #STV-8941",
      latency: "0.7s",
    },
    {
      id: "followup",
      label: "FOLLOW-UP DISPATCHED",
      category: "AUTO ACTION",
      icon: <Send className="w-4 h-4 text-[#111111]" />,
      accent: "#FFD43B",
      dataSnippet: "Tailored WhatsApp intro + consultation link sent",
      latency: "0.9s",
    },
    {
      id: "owner_alert",
      label: "OWNER NOTIFIED",
      category: "COMPLETION",
      icon: <Bell className="w-4 h-4 text-[#111111]" />,
      accent: "#FAF7EE",
      dataSnippet: "Instant summary delivered to Founder WhatsApp",
      latency: "1.1s",
    },
  ];

  // Auto progression loop
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isRunning, steps.length]);

  return (
    <div className="relative w-full rounded-none border-2 border-[#262626] bg-[#0E0E0E] p-4 sm:p-6 shadow-[8px_8px_0px_#1B1B1B]">
      {/* Brutalist Tech Header / Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-none bg-[#B7FF2A] animate-status-pulse" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#FAF7EE] uppercase">
            LIVE SYSTEM PIPELINE
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#1E1E1E] text-[#8E8A82] border border-[#2B2B2B]">
            ID: STV-SYS-01
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8E8A82]">
            <Zap className="w-3.5 h-3.5 text-[#20C8E8]" />
            <span className="hidden sm:inline">CYCLE:</span>
            <span className="text-[#F7F2E8] font-bold">1.1s COMPLETE</span>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveStep((prev) => (prev + 1) % steps.length);
              setIsRunning(false);
            }}
            title="Step through"
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono bg-[#1C1C1C] text-[#FAF7EE] border border-[#333333] hover:bg-[#252525] hover:border-[#FF4B2B] transition-colors"
          >
            <RefreshCw className="w-3 h-3 text-[#FF4B2B]" />
            <span>ADVANCE STEP</span>
          </button>
        </div>
      </div>

      {/* Workflow Step Grid / Streamlined Track */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 relative">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <div
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                setIsRunning(false);
              }}
              style={{
                borderColor: isActive ? step.accent : "#222222",
                boxShadow: isActive ? `5px 5px 0px ${step.accent}` : "none",
              }}
              className={`cursor-pointer relative p-3.5 sm:p-4 border-2 transition-all duration-200 ${
                isActive
                  ? "bg-[#181818] -translate-x-0.5 -translate-y-0.5"
                  : "bg-[#121212] opacity-80 hover:opacity-100 hover:border-[#383838]"
              }`}
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all"
                style={{
                  backgroundColor: isActive
                    ? step.accent
                    : isPassed
                    ? "#333333"
                    : "transparent",
                }}
              />

              {/* Node Header */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 flex items-center justify-center font-bold text-xs border border-black shadow-[1px_1px_0px_#000]"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8A82]">
                    STEP 0{idx + 1}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8E8A82]">
                  {step.latency}
                </span>
              </div>

              {/* Node Title */}
              <div className="font-mono text-xs sm:text-sm font-bold tracking-tight text-[#FAF7EE] mb-1.5">
                {step.label}
              </div>

              {/* Data payload snippet */}
              <p className="text-[11px] font-mono text-[#A8A49B] line-clamp-2 leading-relaxed">
                {step.dataSnippet}
              </p>

              {/* Status Indicator */}
              <div className="mt-3 pt-2 border-t border-[#1F1F1F] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#8E8A82] uppercase">{step.category}</span>
                <span
                  style={{ color: isActive ? step.accent : "#666666" }}
                  className="font-bold uppercase tracking-wider"
                >
                  {isActive ? "● PROCESSING" : isPassed ? "✓ COMPLETED" : "○ READY"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Signal Status Bar at bottom */}
      <div className="mt-5 pt-3.5 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8E8A82]">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[#20C8E8]">●</span>
          <span>Zero manual intervention</span>
          <span className="text-[#333333]">|</span>
          <span className="text-[#B7FF2A]">●</span>
          <span>End-to-end synchronized</span>
        </div>
        <div className="text-[10px] text-[#666666] uppercase tracking-wider">
          Architecture: STAVAN Core Protocol
        </div>
      </div>
    </div>
  );
}
