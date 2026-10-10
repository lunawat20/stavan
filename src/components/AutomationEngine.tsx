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
      stage: "BUSINESS INPUT",
      title: "Customer Message",
      subtitle: '"Need automated invoicing & WhatsApp scheduling"',
      icon: <MessageSquare className="w-4 h-4 text-[#20C8E8]" />,
      accent: "#20C8E8",
      status: activeStage === 0 ? "PROCESSING" : activeStage > 0 ? "DONE" : "WAITING",
    },
    {
      id: "ai",
      stage: "AI ENGINE",
      title: "Context Parsing & Intent",
      subtitle: "Entities extracted • Urgency verified • Match confirmed",
      icon: <Cpu className="w-4 h-4 text-[#FF542F]" />,
      accent: "#FF542F",
      status: activeStage === 1 ? "PROCESSING" : activeStage > 1 ? "DONE" : "WAITING",
    },
    {
      id: "decision",
      stage: "DECISION MATRIX",
      title: "Lead Qualified",
      subtitle: "Tier: High Priority • Scope: Operations Automation",
      icon: <CheckCircle2 className="w-4 h-4 text-[#B6F23A]" />,
      accent: "#B6F23A",
      status: activeStage === 2 ? "PROCESSING" : activeStage > 2 ? "DONE" : "WAITING",
    },
    {
      id: "crm",
      stage: "CRM & DATABASE",
      title: "Pipeline Synchronized",
      subtitle: "Record created #STV-204 • Calendar slot reserved",
      icon: <Database className="w-4 h-4 text-[#111111]" />,
      accent: "#111111",
      status: activeStage === 3 ? "PROCESSING" : activeStage > 3 ? "DONE" : "WAITING",
    },
    {
      id: "action",
      stage: "BUSINESS RESULT",
      title: "Action Dispatched",
      subtitle: "Tailored reply delivered • Founder notified on WhatsApp",
      icon: <Send className="w-4 h-4 text-[#FF542F]" />,
      accent: "#FF542F",
      status: activeStage === 4 ? "PROCESSING" : activeStage > 4 ? "DONE" : "WAITING",
    },
  ];

  // Auto-running simulation loop
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="relative w-full rounded-2xl bg-[#FFFFFF] border border-[#D8D5CC] p-5 sm:p-7 shadow-[0_20px_50px_rgba(17,17,17,0.06)]">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EBE7DC]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#20C8E8] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#111111] uppercase">
            STAVAN AUTOMATION ENGINE
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#777777] bg-[#F7F4EC] rounded border border-[#E5E1D6]">
            v2.6 LIVE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#555555]">
            <Zap className="w-3.5 h-3.5 text-[#FF542F]" />
            <span className="text-[#111111] font-semibold">140ms</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveStage((prev) => (prev + 1) % 5);
              setIsSimulating(false);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#111111] bg-[#F7F4EC] hover:bg-[#EDE8DC] border border-[#D8D5CC] rounded-md transition-colors"
          >
            <Play className="w-3 h-3 text-[#FF542F]" />
            <span className="hidden sm:inline">CYCLE</span>
          </button>
        </div>
      </div>

      {/* Nodes Stack with Thin Borders and Light Physical Object Styling */}
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
                  ? "bg-[#FBFAF6] border-[#111111] shadow-[0_6px_20px_rgba(17,17,17,0.06)] translate-x-1"
                  : "bg-[#FFFFFF] border-[#E8E4DA] hover:bg-[#FAF8F3] hover:border-[#D0CCC2]"
              }`}
            >
              {/* Subtle colored vertical indicator on left */}
              <div
                className="absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all"
                style={{
                  backgroundColor: isActive ? node.accent : isDone ? "#D8D5CC" : "transparent",
                }}
              />

              <div className="flex items-center justify-between gap-3 pl-1">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Icon badge */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${node.accent}14`,
                      border: `1px solid ${node.accent}30`,
                    }}
                  >
                    {node.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-wider text-[#777777] uppercase">
                        {node.stage}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#111111] truncate font-sans">
                        {node.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#555555] font-mono truncate mt-0.5">
                      {node.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status chip */}
                <div className="flex-shrink-0 text-right">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider rounded ${
                      isActive
                        ? "bg-[#FF542F]/10 text-[#FF542F] border border-[#FF542F]/25"
                        : isDone
                        ? "bg-[#F7F4EC] text-[#555555] border border-[#E5E1D6]"
                        : "bg-transparent text-[#999999]"
                    }`}
                  >
                    {isDone && <Check className="w-2.5 h-2.5 text-[#111111]" />}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF542F] animate-ping" />}
                    {node.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Telemetry Footer */}
      <div className="mt-5 pt-3.5 border-t border-[#EBE7DC] flex items-center justify-between text-[11px] font-mono text-[#555555]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B6F23A] border border-[#111111]" />
          <span>Zero manual intervention</span>
        </div>
        <span className="text-[10px] text-[#777777] uppercase tracking-wider">
          ENGINE: STAVAN PROTOCOL
        </span>
      </div>
    </div>
  );
}
