import React from "react";
import { Target, Fingerprint, Wrench, HeartHandshake } from "lucide-react";

export function WhyStavan() {
  const principles = [
    {
      num: "01",
      title: "BUSINESS FIRST",
      copy: "We start with the problem, not the technology.",
      detail:
        "We never build something just because it's technically flashy. If a simple rule or clean automation solves it better than complex AI, that's what we deploy.",
      accent: "#FF4B2B",
      icon: <Target className="w-5 h-5 text-[#111111]" />,
    },
    {
      num: "02",
      title: "CUSTOM BY DEFAULT",
      copy: "Your business is unique. Your solution should be too.",
      detail:
        "Your customers, your tools, and your internal habits have specific quirks. We engineer solutions that adapt to your reality rather than forcing rigid templates on you.",
      accent: "#20C8E8",
      icon: <Fingerprint className="w-5 h-5 text-[#111111]" />,
    },
    {
      num: "03",
      title: "PRACTICAL AI",
      copy: "We focus on useful systems, not AI for the sake of AI.",
      detail:
        "No hollow buzzwords or unpredictable gimmicks. We measure success by hours saved, inquiries captured, and operational calm restored.",
      accent: "#B7FF2A",
      icon: <Wrench className="w-5 h-5 text-[#111111]" />,
    },
    {
      num: "04",
      title: "HUMAN + AI",
      copy: "The goal is to make your business better, not simply replace people.",
      detail:
        "We remove the monotonous, soul-draining data transfer and busywork so your team can focus on what humans do best: client relationships and strategy.",
      accent: "#FFD43B",
      icon: <HeartHandshake className="w-5 h-5 text-[#111111]" />,
    },
  ];

  return (
    <section
      id="why-stavan"
      className="relative py-24 sm:py-32 bg-[#090909] bg-grid-dark text-[#F7F2E8] border-b-2 border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#141414] border-2 border-[#262626] shadow-[3px_3px_0px_#1E1E1E]">
            <span className="w-2 h-2 bg-[#FF4C9A]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E0DCD3]">
              WHY STAVAN
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F7F2E8] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            We don&apos;t automate for
            <br />
            <span className="text-[#FF4C9A]">the sake of automation.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#B3AEA3] font-sans leading-relaxed">
            Our compass is utility, dependability, and long-term business
            leverage.
          </p>
        </div>

        {/* Minimal Editorial Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((item) => (
            <div
              key={item.num}
              className="relative p-7 sm:p-9 bg-[#121212] border-2 border-[#222222] transition-all duration-200 hover:border-[#F7F2E8]/40 hover:-translate-x-1 hover:-translate-y-1"
              style={{
                boxShadow: "5px 5px 0px #1A1A1A",
              }}
            >
              {/* Left Accent Bar */}
              <div
                className="absolute top-0 bottom-0 left-0 w-1.5"
                style={{ backgroundColor: item.accent }}
              />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#8E8A82] uppercase mb-1 block">
                    PRINCIPLE {item.num}
                  </span>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7EE] uppercase">
                    {item.title}
                  </h3>
                </div>

                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-black shadow-[2px_2px_0px_#000]"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.icon}
                </div>
              </div>

              <div className="text-base sm:text-lg font-bold text-[#F7F2E8] mb-3 leading-snug">
                {item.copy}
              </div>

              <p className="text-sm text-[#8E8A82] leading-relaxed font-sans">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
