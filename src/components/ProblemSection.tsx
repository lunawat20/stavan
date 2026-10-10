import React from "react";
import { Clock, Repeat, AlertTriangle, Layers } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "TOO MUCH MANUAL WORK",
      description:
        "Repetitive tasks consume hours that could be spent growing the business.",
      accent: "#FF4B2B",
      icon: <Clock className="w-5 h-5 text-[#111111]" />,
    },
    {
      num: "02",
      title: "REPETITIVE PROCESSES",
      description:
        "The same work gets done again and again because no system handles it automatically.",
      accent: "#20C8E8",
      icon: <Repeat className="w-5 h-5 text-[#111111]" />,
    },
    {
      num: "03",
      title: "MISSED OPPORTUNITIES",
      description:
        "Leads, enquiries and follow-ups can slip through the cracks.",
      accent: "#B7FF2A",
      icon: <AlertTriangle className="w-5 h-5 text-[#111111]" />,
    },
    {
      num: "04",
      title: "TOO MANY TOOLS",
      description:
        "Information lives across WhatsApp, email, spreadsheets, CRM systems and more.",
      accent: "#FF4C9A",
      icon: <Layers className="w-5 h-5 text-[#111111]" />,
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-24 sm:py-32 bg-[#F4EFDF] bg-grid-cream text-[#111111] border-b-2 border-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#FAF7EE] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
            <span className="w-2 h-2 bg-[#FF4B2B]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              THE REAL PROBLEM
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Your business has problems.
            <br />
            <span className="text-[#FF4B2B]">We find the ones AI can solve.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#4A4740] font-sans leading-relaxed">
            Too much of your team&apos;s time disappears into repetitive work,
            manual processes and disconnected tools.
          </p>
        </div>

        {/* 4 Brutalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {problems.map((p) => (
            <div
              key={p.num}
              className="group relative flex flex-col justify-between bg-[#FAF7EE] border-2 border-[#111111] p-6 sm:p-7 shadow-[5px_5px_0px_#111111] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#111111]"
            >
              {/* Top Colored Accent Stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-2 border-b-2 border-[#111111]"
                style={{ backgroundColor: p.accent }}
              />

              {/* Card Top: Number & Geometric Icon */}
              <div>
                <div className="flex items-center justify-between mb-8 mt-2">
                  <span className="font-mono text-2xl font-black text-[#111111] tracking-tight">
                    {p.num}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center border-2 border-[#111111] shadow-[2px_2px_0px_#111111]"
                    style={{ backgroundColor: p.accent }}
                  >
                    {p.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-mono text-base sm:text-lg font-bold tracking-tight text-[#111111] uppercase mb-3">
                  {p.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#4A4740] font-sans leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Bottom Decorative Technical Mark */}
              <div className="mt-8 pt-4 border-t border-[#E0DCD3] flex items-center justify-between font-mono text-[11px] text-[#7A766E]">
                <span>DIAGNOSTIC</span>
                <span className="group-hover:text-[#111111] font-bold transition-colors">
                  IDENTIFIED →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
