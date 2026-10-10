import React from "react";
import { Target, Fingerprint, Wrench, HeartHandshake } from "lucide-react";

export function WhyStavan() {
  const principles = [
    {
      num: "01",
      code: "PRINCIPLE / 01",
      title: "Business First",
      copy: "We start with the problem, not the technology.",
      detail:
        "We never build something just because it's technically flashy. If a simple rule or clean automation solves it better than complex AI, that's what we deploy.",
      accent: "#FF4B2B",
      icon: <Target className="w-5 h-5 text-[#FF4B2B]" />,
    },
    {
      num: "02",
      code: "PRINCIPLE / 02",
      title: "Custom by Default",
      copy: "Your business is unique. Your solution should be too.",
      detail:
        "Your customers, your tools, and your internal habits have specific quirks. We engineer solutions that adapt to your reality rather than forcing rigid templates on you.",
      accent: "#20C8E8",
      icon: <Fingerprint className="w-5 h-5 text-[#20C8E8]" />,
    },
    {
      num: "03",
      code: "PRINCIPLE / 03",
      title: "Practical AI",
      copy: "We focus on useful systems, not AI for the sake of AI.",
      detail:
        "No hollow buzzwords or unpredictable gimmicks. We measure success by hours saved, inquiries captured, and operational calm restored.",
      accent: "#B7FF2A",
      icon: <Wrench className="w-5 h-5 text-[#B7FF2A]" />,
    },
    {
      num: "04",
      code: "PRINCIPLE / 04",
      title: "Human + AI",
      copy: "The goal is to make your business better, not simply replace people.",
      detail:
        "We remove the monotonous, soul-draining data transfer and busywork so your team can focus on what humans do best: client relationships and strategy.",
      accent: "#FFD43B",
      icon: <HeartHandshake className="w-5 h-5 text-[#FFD43B]" />,
    },
  ];

  return (
    <section
      id="why-stavan"
      className="relative py-28 sm:py-36 bg-cool-canvas bg-system-map-light text-[#121316] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-mono tracking-widest text-[#575A65] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4C9A]" />
            <span>WHY STAVAN</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121316] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            We don&apos;t automate for
            <br />
            <span className="text-[#FF4C9A]">the sake of automation.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#575A65] font-sans leading-relaxed">
            Our compass is utility, dependability, and measurable business leverage.
          </p>
        </div>

        {/* 4 Studio Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((item) => (
            <div
              key={item.num}
              className="studio-card-light rounded-2xl p-7 sm:p-9 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle vertical indicator */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5 transition-all group-hover:w-2"
                style={{ backgroundColor: item.accent }}
              />

              <div className="pl-3 sm:pl-4">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#888C99] uppercase mb-1 block">
                      {item.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#121316] font-sans">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${item.accent}14`,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="text-base sm:text-lg font-bold text-[#121316] mb-3 leading-snug font-sans">
                  {item.copy}
                </div>

                <p className="text-sm text-[#575A65] leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
