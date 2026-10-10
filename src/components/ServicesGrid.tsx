import React from "react";
import { getWhatsAppUrlForService } from "@/lib/constants";
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
      title: "AI Agents",
      code: "CAPABILITY / 01",
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
      title: "WhatsApp Automation",
      code: "CAPABILITY / 02",
      description: "Turn customer conversations into automated business workflows.",
      features: [
        "Instant inquiry qualification",
        "Automated booking & quotation",
        "Interactive service catalogs",
      ],
      icon: <MessageCircle className="w-5 h-5 text-[#20C8E8]" />,
      colSpan: "lg:col-span-4",
      accent: "#20C8E8",
    },
    {
      id: "crm-auto",
      title: "CRM Automation",
      code: "CAPABILITY / 03",
      description: "Capture, organize and follow up with leads automatically.",
      features: [
        "Zero dropped inquiries",
        "Auto stage progression",
        "Pipeline alerts & sync",
      ],
      icon: <Users className="w-5 h-5 text-[#20C8E8]" />,
      colSpan: "lg:col-span-4",
      accent: "#20C8E8",
    },
    {
      id: "workflow-auto",
      title: "Workflow Automation",
      code: "CAPABILITY / 04",
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
      title: "AI Websites",
      code: "CAPABILITY / 05",
      description: "Web experiences designed around intelligent, dynamic interactions.",
      features: ["Context-aware user paths", "Direct booking conversion"],
      icon: <Globe className="w-5 h-5 text-[#20C8E8]" />,
      colSpan: "lg:col-span-4",
      accent: "#20C8E8",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      code: "CAPABILITY / 06",
      description: "When an off-the-shelf software tool isn't enough for your specific operational model.",
      features: ["Tailored staff dashboards", "Proprietary business portals"],
      icon: <Code2 className="w-5 h-5 text-[#20C8E8]" />,
      colSpan: "lg:col-span-4",
      accent: "#20C8E8",
    },
    {
      id: "custom-ai",
      title: "Custom AI Solutions",
      code: "CAPABILITY / 07",
      description: "If your operational challenge doesn't fit a standard category, we build around it.",
      features: ["Unstructured document parsing", "Custom domain algorithms"],
      icon: <Sparkles className="w-5 h-5 text-[#FF4B2B]" />,
      colSpan: "lg:col-span-4",
      accent: "#FF4B2B",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-cool-canvas bg-system-map-light text-[#121316] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-mono tracking-widest text-[#575A65] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C8E8]" />
            <span>WHAT WE BUILD</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121316] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Whatever the problem,
            <br />
            <span className="text-[#20C8E8]">let&apos;s see what AI can do.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#575A65] font-sans leading-relaxed">
            Stavan creates custom solutions around your business — not the other
            way around.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`studio-card-light rounded-2xl p-7 flex flex-col justify-between group ${svc.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono tracking-wider text-[#888C99] uppercase">
                    {svc.code}
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${svc.accent}14`,
                      border: `1px solid ${svc.accent}30`,
                    }}
                  >
                    {svc.icon}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#121316] mb-2 font-sans">
                  {svc.title}
                </h3>

                <p className="text-sm text-[#575A65] font-sans leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  {svc.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-mono text-[#6E7280]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#20C8E8]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06]">
                <a
                  href={getWhatsAppUrlForService(svc.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#121316] group-hover:text-[#FF4B2B] transition-colors"
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
