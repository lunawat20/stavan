import React from "react";
import { getWhatsAppUrlForService } from "@/lib/constants";
import { GeometricCanvas } from "./GeometricCanvas";
import {
  Bot,
  MessageCircle,
  Users,
  GitFork,
  Globe,
  Code2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      id: "ai-agents",
      num: "01",
      title: "AI Agents",
      code: "CAPABILITY // 01",
      description: "Systems that can handle tasks, conversations and decisions autonomously.",
      features: [
        "Multi-step task execution",
        "Rule-based & AI decision trees",
        "Context synthesis & action dispatch",
      ],
      icon: <Bot className="w-5 h-5 text-[#20C8E8]" />,
      colSpan: "lg:col-span-8",
      accent: "#20C8E8",
    },
    {
      id: "whatsapp-auto",
      num: "02",
      title: "WhatsApp Automation",
      code: "CAPABILITY // 02",
      description: "Turn customer conversations into automated business workflows.",
      features: [
        "Instant inquiry qualification",
        "Automated booking & quotation",
        "Interactive service catalogs",
      ],
      icon: <MessageCircle className="w-5 h-5 text-[#FF5A36]" />,
      colSpan: "lg:col-span-4",
      accent: "#FF5A36",
    },
    {
      id: "crm-auto",
      num: "03",
      title: "CRM Automation",
      code: "CAPABILITY // 03",
      description: "Capture, organize and follow up with leads automatically.",
      features: [
        "Zero dropped inquiries",
        "Auto stage progression",
        "Pipeline alerts & sync",
      ],
      icon: <Users className="w-5 h-5 text-[#B6F23A]" />,
      colSpan: "lg:col-span-4",
      accent: "#B6F23A",
    },
    {
      id: "workflow-auto",
      num: "04",
      title: "Workflow Automation",
      code: "CAPABILITY // 04",
      description: "Connect the tools your business already uses — spreadsheets, email, billing, and databases.",
      features: [
        "Eliminate duplicate copy-paste",
        "Instant cross-platform triggers",
        "Zero-error data transfers",
      ],
      icon: <GitFork className="w-5 h-5 text-[#20C8E8]" />,
      colSpan: "lg:col-span-8",
      accent: "#20C8E8",
    },
    {
      id: "ai-websites",
      num: "05",
      title: "AI Websites",
      code: "CAPABILITY // 05",
      description: "Web experiences designed around intelligent, dynamic interactions.",
      features: ["Context-aware user paths", "Direct booking conversion"],
      icon: <Globe className="w-5 h-5 text-[#FFD447]" />,
      colSpan: "lg:col-span-4",
      accent: "#FFD447",
    },
    {
      id: "custom-software",
      num: "06",
      title: "Custom Software",
      code: "CAPABILITY // 06",
      description: "When an off-the-shelf software tool isn't enough for your specific operational model.",
      features: ["Tailored staff dashboards", "Proprietary business portals"],
      icon: <Code2 className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-4",
      accent: "#111111",
    },
    {
      id: "custom-ai",
      num: "07",
      title: "Custom AI Solutions",
      code: "CAPABILITY // 07",
      description: "If your operational challenge doesn't fit a standard category, we build around it.",
      features: ["Unstructured document parsing", "Custom domain algorithms"],
      icon: <Sparkles className="w-5 h-5 text-[#FF5A36]" />,
      colSpan: "lg:col-span-4",
      accent: "#FF5A36",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-canvas-sage bg-grid-sage text-[#111111] border-b border-[#BED9C4] overflow-hidden"
    >
      {/* Large Geometric Background Elements */}
      <GeometricCanvas variant="services" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#BED9C4] rounded-full text-xs font-mono tracking-widest text-[#4A7855] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#20C8E8]" />
            <span>WHAT WE BUILD</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Whatever the problem,
            <br />
            <span className="text-[#FF5A36]">let&apos;s see what AI can do.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-sans leading-relaxed">
            Stavan creates custom solutions around your business — not the other
            way around.
          </p>
        </div>

        {/* Asymmetrical Bento Grid with Subtle Geometric Motifs inside each card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`card-studio rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden ${svc.colSpan}`}
            >
              {/* Oversized Technical Watermark Number */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-4 text-7xl sm:text-8xl font-mono font-black text-[#111111]/[0.03] select-none pointer-events-none"
              >
                {svc.num}
              </div>

              {/* Subtle inner geometric square element */}
              <div
                aria-hidden="true"
                className="absolute bottom-3 right-3 w-16 h-16 border border-[#111111]/[0.04] pointer-events-none rounded-lg"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono tracking-wider text-[#777777] uppercase">
                    {svc.code}
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shadow-xs"
                    style={{
                      backgroundColor: `${svc.accent}14`,
                      border: `1px solid ${svc.accent}30`,
                    }}
                  >
                    {svc.icon}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-2 font-sans">
                  {svc.title}
                </h3>

                <p className="text-sm text-[#555555] font-sans leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  {svc.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-mono text-[#555555]"
                    >
                      <span
                        className="w-1.5 h-1.5"
                        style={{ backgroundColor: svc.accent }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EBE7DC] relative z-10">
                <a
                  href={getWhatsAppUrlForService(svc.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#FF5A36] transition-colors"
                >
                  <span>Discuss this solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
