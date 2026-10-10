"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Cpu,
  CheckCircle2,
  Database,
  Send,
  Zap,
  Play,
  Check,
} from "lucide-react";

interface EngineNode {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  status: "WAITING" | "PROCESSING" | "DONE";
}

export function AutomationEngine() {
  const [activeStage, setActiveStage] = useState(1);
  const [isSimulating, setIsSimulating] = useState(true);

  const stages: EngineNode[] = [
    {
      id: "input",
      stage: "INPUT / 01",
      title: "WhatsApp Message",
      subtitle: '"Need automated invoicing & client booking"',
      icon: <MessageSquare className="w-4 h-4 text-[#20C8E8]" />,
      accent: "#20C8E8",
      status: activeStage === 0 ? "PROCESSING" : activeStage > 0 ? "DONE" : "WAITING",
    },
    {
      id: "ai",
      stage: "INTELLIGENCE / 02",
      title: "AI Processing",
      subtitle: "Context extracted • Urgency verified • Intent tagged",
      icon: <Cpu className="w-4 h-4 text-[#FF4B2B]" />,
      accent: "#FF4B2B",
      status: activeStage === 1 ? "PROCESSING" : activeStage > 1 ? "DONE" : "WAITING",
    },
    {
      id: "qual",
      stage: "EVALUATION / 03",
      title: "Lead Qualification",
      subtitle: "Tier: High Priority • Scope: Custom Workflow",
      icon: <CheckCircle2 className="w-4 h-4 text-[#B7FF2A]" />,
      accent: "#B7FF2A",
      status: activeStage === 2 ? "PROCESSING" : activeStage > 2 ? "DONE" : "WAITING",
    },
    {
      id: "crm",
      stage: "SYSTEM / 04",
      title: "CRM Synchronization",
      subtitle: "Pipeline updated • Deal created #STV-204",
      icon: <Database className="w-4 h-4 text-[#FF4C9A]" />,
      accent: "#FF4C9A",
      status: activeStage === 3 ? "PROCESSING" : activeStage > 3 ? "DONE" : "WAITING",
    },
    {
      id: "action",
      stage: "ACTION / 05",
      title: "Follow-up Dispatched",
      subtitle: "Instant confirmation + Founder notified via WhatsApp",
      icon: <Send className="w-4 h-4 text-[#FFD43B]" />,
      accent: "#FFD43B",
      status: activeStage === 4 ? "PROCESSING" : activeStage > 4 ? "DONE" : "WAITING",
    },
  ];

  // Auto-running simulation cycle
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="relative w-full rounded-2xl bg-[#14161C] border border-white/[0.09] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#20C8E8] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#F7F6F2] uppercase">
            STAVAN AUTOMATION ENGINE
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#888C99] bg-[#1C1F28] rounded">
            v2.6 LIVE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#888C99]">
            <Zap className="w-3.5 h-3.5 text-[#B7FF2A]" />
            <span className="text-[#F7F6F2] font-semibold">140ms</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveStage((prev) => (prev + 1) % 5);
              setIsSimulating(false);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#F7F6F2] bg-[#1E222C] hover:bg-[#262B38] border border-white/10 rounded-md transition-colors"
          >
            <Play className="w-3 h-3 text-[#20C8E8]" />
            <span className="hidden sm:inline">CYCLE</span>
          </button>
        </div>
      </div>

      {/* Nodes Stack with Connecting SVG Beziers */}
      <div className="relative space-y-3">
        {stages.map((node, idx) => {
          const isActive = idx === activeStage;
          const isDone = node.status === "DONE";

          return (
            <div
              key={node.id}
              onClick={() => {
                setActiveStage(idx);
                setIsSimulating(false);
              }}
              className={`group cursor-pointer relative p-3.5 sm:p-4 rounded-xl border transition-all duration-200 ${
                isActive
                  ? "bg-[#1B1E27] border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.3)] translate-x-1"
                  : "bg-[#111318]/70 border-white/[0.06] hover:bg-[#161922] hover:border-white/10"
              }`}
            >
              {/* Subtle vertical indicator bar */}
              <div
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all"
                style={{
                  backgroundColor: isActive ? node.accent : isDone ? "#3D4150" : "transparent",
                }}
              />

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Icon badge */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${node.accent}18`,
                      border: `1px solid ${node.accent}40`,
                    }}
                  >
                    {node.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-wider text-[#888C99] uppercase">
                        {node.stage}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#F7F6F2] truncate font-sans">
                        {node.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A6A9B6] font-mono truncate mt-0.5">
                      {node.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status chip */}
                <div className="flex-shrink-0 text-right">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded ${
                      isActive
                        ? "bg-[#20C8E8]/15 text-[#20C8E8] border border-[#20C8E8]/30"
                        : isDone
                        ? "bg-white/[0.06] text-[#A6A9B6]"
                        : "bg-transparent text-[#575A65]"
                    }`}
                  >
                    {isDone && <Check className="w-2.5 h-2.5 text-[#B7FF2A]" />}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#20C8E8] animate-ping" />}
                    {node.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Telemetry Footer */}
      <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#888C99]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF2A]" />
          <span>Zero manual intervention</span>
        </div>
        <span className="text-[10px] text-[#575A65] uppercase tracking-wider">
          ENGINE: STAVAN PROTOCOL
        </span>
      </div>
    </div>
  );
}
