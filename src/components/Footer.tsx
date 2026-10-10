import React from "react";
import { Logo } from "./Logo";
import {
  WHATSAPP_URL,
  WHATSAPP_PHONE,
  FOUNDER_NAME,
  AGENCY_TAGLINE,
} from "@/lib/constants";
import { StavanMotif } from "./StavanMotif";
import { ArrowUpRight, MessageSquare, Phone } from "lucide-react";

export function Footer() {
  const links = [
    { name: "What We Do", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Stavan", href: "#why-stavan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-canvas-sand text-[#111111] pt-20 pb-12 border-t border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E2DDD3]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo theme="light" size="lg" />
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#777777]">
              {AGENCY_TAGLINE}
            </div>
            <p className="text-sm text-[#555555] font-sans max-w-sm leading-relaxed">
              We turn business problems into intelligent systems. Custom AI-powered
              solutions that streamline operations, eliminate busywork, and empower
              business owners.
            </p>
            <div className="pt-2 max-w-xs">
              <StavanMotif theme="light" size="sm" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-[#E2DDD3]">
              INDEX // NAVIGATION
            </div>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-[#555555] hover:text-[#111111] hover:underline decoration-1 underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Founder & Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] pb-2 border-b border-[#E2DDD3]">
              STUDIO // CONTACT
            </div>
            <div className="space-y-2 text-xs font-mono text-[#555555]">
              <div className="flex items-center gap-2">
                <span className="text-[#777777]">FOUNDER:</span>
                <span className="text-[#111111] font-bold">{FOUNDER_NAME}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#20C8E8]" />
                <span className="text-[#777777]">PHONE:</span>
                <a
                  href={`tel:${WHATSAPP_PHONE.replace(/\s+/g, "")}`}
                  className="text-[#111111] hover:text-[#FF5A36] transition-colors"
                >
                  {WHATSAPP_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-[#777777]">WHATSAPP:</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline transition-colors"
                >
                  Chat with Stavan
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#F5F3EE] text-[#111111] font-mono text-xs font-bold uppercase tracking-wider rounded-xl border border-[#D8D5CE] shadow-xs transition-all"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A36]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#777777]">
          <div>© 2026 Stavan. All rights reserved.</div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>ENGINEERED FOR BUSINESS LEVERAGE</span>
            <span>•</span>
            <span>NO FLUFF // REAL SYSTEMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
