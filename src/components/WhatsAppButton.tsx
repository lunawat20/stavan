"use client";

import React, { useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group focus-within:outline-none"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#14161C] text-[#F7F6F2] border border-white/15 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#25D366]/50 hover:bg-[#1A1D25] hover:-translate-y-0.5 transition-all select-none"
        aria-label="Chat with Stavan on WhatsApp"
      >
        {/* Pulsing online status indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>

        {/* WhatsApp Icon */}
        <MessageSquare className="w-4 h-4 text-[#25D366]" />

        {/* Label */}
        <span className="font-mono text-xs font-semibold uppercase tracking-wider hidden sm:inline-block">
          Chat with Stavan
        </span>

        <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </aside>
  );
}
