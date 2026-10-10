import React from "react";
import { Logo } from "./Logo";
import {
  WHATSAPP_URL,
  WHATSAPP_PHONE,
  FOUNDER_NAME,
  AGENCY_TAGLINE,
} from "@/lib/constants";
import { ArrowUpRight, MessageSquare, Phone } from "lucide-react";

export function Footer() {
  const links = [
    { name: "What We Do", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Stavan", href: "#why-stavan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#090909] text-[#F7F2E8] pt-16 pb-12 border-t-2 border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#1E1E1E]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo theme="dark" size="lg" />
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#8E8A82]">
              {AGENCY_TAGLINE}
            </div>
            <p className="text-sm text-[#A8A49B] font-sans max-w-sm leading-relaxed">
              We turn business problems into intelligent systems. Custom AI-powered
              solutions that streamline operations, eliminate busywork, and empower
              business owners.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FAF7EE] pb-2 border-b border-[#222222]">
              INDEX // NAVIGATION
            </div>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-[#A8A49B] hover:text-[#FAF7EE] hover:underline decoration-1 underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Founder & Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FAF7EE] pb-2 border-b border-[#222222]">
              STUDIO // CONTACT
            </div>
            <div className="space-y-2 text-xs font-mono text-[#A8A49B]">
              <div className="flex items-center gap-2">
                <span className="text-[#8E8A82]">FOUNDER:</span>
                <span className="text-[#FAF7EE] font-bold">{FOUNDER_NAME}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#20C8E8]" />
                <span className="text-[#8E8A82]">PHONE:</span>
                <a
                  href={`tel:${WHATSAPP_PHONE.replace(/\s+/g, "")}`}
                  className="text-[#FAF7EE] hover:text-[#FF4B2B] transition-colors"
                >
                  {WHATSAPP_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-[#8E8A82]">WHATSAPP:</span>
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
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF7EE] text-[#111111] font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#FF4B2B] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4B2B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666666]">
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
