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
      title: "AI AGENTS",
      description: "Systems that can handle tasks, conversations and decisions.",
      tag: "AUTONOMOUS LOGIC",
      accent: "#FF4B2B",
      icon: <Bot className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-2",
      features: ["Multi-step task execution", "Rule-based & AI decision trees", "Data extraction & synthesis"],
    },
    {
      id: "whatsapp-auto",
      title: "WHATSAPP AUTOMATION",
      description: "Turn conversations into automated workflows.",
      tag: "PRIMARY TOUCHPOINT",
      accent: "#20C8E8",
      icon: <MessageCircle className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-1",
      features: ["Instant customer triage", "Catalog & quote dispatch", "Interactive booking flows"],
    },
    {
      id: "crm-auto",
      title: "CRM AUTOMATION",
      description: "Capture, organize and follow up with leads automatically.",
      tag: "PIPELINE RETENTION",
      accent: "#B7FF2A",
      icon: <Users className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-1",
      features: ["Zero lead drop-off", "Automatic stage progression", "Follow-up triggers"],
    },
    {
      id: "workflow-auto",
      title: "WORKFLOW AUTOMATION",
      description: "Connect the tools your business already uses.",
      tag: "TOOL INTEROP",
      accent: "#FF4C9A",
      icon: <GitFork className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-2",
      features: ["Sheets, Email, ERP synchronization", "Invoice generation & billing alerts", "Error-free cross-platform sync"],
    },
    {
      id: "ai-websites",
      title: "AI WEBSITES",
      description: "Web experiences designed around intelligent interactions.",
      tag: "HIGH CONVERSION",
      accent: "#FFD43B",
      icon: <Globe className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-1",
      features: ["Context-aware user journeys", "Automated booking integration", "Dynamic lead qualification"],
    },
    {
      id: "custom-software",
      title: "CUSTOM SOFTWARE",
      description: "When an off-the-shelf solution isn't enough.",
      tag: "BESPOKE SYSTEMS",
      accent: "#FAF7EE",
      icon: <Code2 className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-1",
      features: ["Tailored internal operations tools", "Specialized team portals", "Proprietary database interfaces"],
    },
    {
      id: "custom-ai",
      title: "CUSTOM AI SOLUTIONS",
      description: "If your problem doesn't fit a category, we'll build around it.",
      tag: "FULL SPECTRUM",
      accent: "#FF4B2B",
      icon: <Sparkles className="w-5 h-5 text-[#111111]" />,
      colSpan: "lg:col-span-1",
      features: ["Discovery-first engineering", "Unstructured data solvers", "Domain-specific solutions"],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#090909] bg-grid-dark text-[#F7F2E8] border-b-2 border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#141414] border-2 border-[#262626] shadow-[3px_3px_0px_#1E1E1E]">
            <span className="w-2 h-2 bg-[#20C8E8]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E0DCD3]">
              WHAT WE BUILD
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F7F2E8] mb-6 leading-[1.08]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Whatever the problem,
            <br />
            <span className="text-[#20C8E8]">let&apos;s see what AI can do.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#B3AEA3] font-sans leading-relaxed">
            Stavan creates custom solutions around your business — not the other
            way around.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`group relative flex flex-col justify-between bg-[#121212] border-2 border-[#242424] p-6 sm:p-7 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-[#F7F2E8]/40 ${
                svc.colSpan
              }`}
              style={{
                boxShadow: "5px 5px 0px #1E1E1E",
              }}
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: svc.accent }}
              />

              <div>
                {/* Header: Tag + Icon */}
                <div className="flex items-center justify-between mb-6 mt-1">
                  <span
                    className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase border border-black shadow-[1px_1px_0px_#000]"
                    style={{
                      backgroundColor: svc.accent,
                      color: "#111111",
                    }}
                  >
                    {svc.tag}
                  </span>

                  <div
                    className="w-9 h-9 flex items-center justify-center border border-black shadow-[2px_2px_0px_#000]"
                    style={{ backgroundColor: svc.accent }}
                  >
                    {svc.icon}
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#F7F2E8] mb-3">
                  {svc.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#A8A49B] leading-relaxed mb-6 font-sans">
                  {svc.description}
                </p>

                {/* Feature bullets */}
                <div className="space-y-2 mb-6">
                  {svc.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-mono text-[#8E8A82]"
                    >
                      <span
                        className="w-1.5 h-1.5"
                        style={{ backgroundColor: svc.accent }}
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link: Pre-filled WhatsApp discussion */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <a
                  href={getWhatsAppUrlForService(svc.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F7F2E8] hover:text-[#FF4B2B] transition-colors"
                >
                  <span>Explore this solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
