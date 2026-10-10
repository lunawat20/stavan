import React from "react";
import { Clock, Repeat, AlertTriangle, Layers, ArrowRight } from "lucide-react";
import { GeometricCanvas } from "./GeometricCanvas";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "TOO MUCH MANUAL WORK",
      subtitle: "HOURS CONSUMED",
      description:
        "Repetitive tasks consume hours that could be spent growing the business.",
      icon: <Clock className="w-5 h-5 text-[#FF5A36]" />,
      accent: "#FF5A36",
      tag: "TIME DRAIN",
    },
    {
      num: "02",
      title: "REPETITIVE PROCESSES",
      subtitle: "UNNECESSARY REPETITION",
      description:
        "The same work gets done again and again because no system handles it automatically.",
      icon: <Repeat className="w-5 h-5 text-[#20C8E8]" />,
      accent: "#20C8E8",
      tag: "SYSTEM VOID",
    },
    {
      num: "03",
      title: "MISSED OPPORTUNITIES",
      subtitle: "DROPPED LEADS",
      description:
        "Leads, enquiries and follow-ups can slip through the cracks without immediate response.",
      icon: <AlertTriangle className="w-5 h-5 text-[#FFD447]" />,
      accent: "#FFD447",
      tag: "LEAKAGE",
    },
    {
      num: "04",
      title: "TOO MANY TOOLS",
      subtitle: "DISCONNECTED SILOS",
      description:
        "Information lives across WhatsApp, email, spreadsheets, CRM systems and more.",
      icon: <Layers className="w-5 h-5 text-[#FF4D96]" />,
      accent: "#FF4D96",
      tag: "FRAGMENTATION",
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-28 sm:py-36 bg-canvas-cream text-[#111111] border-b border-[#D8D5CE] overflow-hidden"
    >
      {/* Large Geometric Background Elements */}
      <GeometricCanvas variant="problem" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Sticky Anchor */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D8D5CE] rounded-full text-xs font-mono tracking-widest text-[#555555] shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#FF5A36]" />
              <span>THE REAL PROBLEM</span>
            </div>

            <h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-[1.08]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Your business has problems.
              <br />
              <span className="text-[#FF5A36]">We find the ones AI can solve.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-sans leading-relaxed">
              Too much of your team&apos;s time disappears into repetitive work,
              manual processes and disconnected tools.
            </p>

            <div className="pt-4 border-t border-[#D8D5CE] hidden lg:block">
              <div className="text-xs font-mono text-[#777777] uppercase tracking-wider mb-2">
                DIAGNOSTIC FRAMEWORK
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                We review workflows across customer acquisition, operations, and
                back-office administration to pinpoint where manual drag can be
                eliminated.
              </p>
            </div>
          </div>

          {/* Right Column: Refined White Physical Cards Stack */}
          <div className="lg:col-span-7 space-y-4">
            {problems.map((p) => (
              <div
                key={p.num}
                className="card-studio rounded-2xl p-6 sm:p-7 relative overflow-hidden group"
              >
                {/* Thin colored vertical indicator on the left spine */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 transition-all group-hover:w-2"
                  style={{ backgroundColor: p.accent }}
                />

                <div className="pl-3 sm:pl-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#777777]">
                        {p.num} //
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-[#555555] uppercase">
                        {p.subtitle}
                      </span>
                    </div>

                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${p.accent}14`,
                        border: `1px solid ${p.accent}30`,
                      }}
                    >
                      {p.icon}
                    </div>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[#111111] mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm text-[#555555] font-sans leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#EBE7DC] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                    <span className="uppercase tracking-wider font-semibold">
                      FRICTION PATTERN: {p.tag}
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-[#111111] transition-colors">
                      AUTOMATABLE <ArrowRight className="w-3 h-3 text-[#FF5A36]" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
