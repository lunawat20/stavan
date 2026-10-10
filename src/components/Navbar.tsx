"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/constants";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WHAT WE DO", href: "#services" },
    { name: "HOW IT WORKS", href: "#how-it-works" },
    { name: "WHY STAVAN", href: "#why-stavan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#D8D5CE] shadow-[0_2px_12px_rgba(17,17,17,0.03)]"
            : "py-4 sm:py-5 bg-[#F5F3EE]/80 backdrop-blur-sm border-b border-[#E8E5DC]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: STAVAN Logo in Dark Charcoal */}
            <a
              href="#"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36]"
              aria-label="STAVAN Home"
            >
              <Logo theme="light" size="md" showTagline />
            </a>

            {/* Center: Navigation Pill in Clean White / Cream */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 bg-[#FFFFFF] border border-[#D8D5CE] rounded-full shadow-[0_2px_8px_rgba(17,17,17,0.03)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-mono tracking-wider text-[#555555] hover:text-[#111111] hover:bg-[#F5F3EE] rounded-full transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: CTA TALK TO STAVAN ↗ */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5A36] hover:bg-[#e84e2c] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_14px_rgba(255,90,54,0.3)] transition-all hover:-translate-y-0.5"
              >
                <span>TALK TO STAVAN</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FF5A36] text-white rounded-lg shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-white text-[#111111] border border-[#D8D5CE] rounded-lg focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#FF5A36]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#F5F3EE]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#777777] pb-2 border-b border-[#D8D5CE]">
              INDEX // NAVIGATION
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-bold font-sans tracking-tight text-[#111111] hover:text-[#FF5A36] py-3.5 border-b border-[#E8E5DC] transition-colors"
              >
                <span>
                  <span className="text-xs font-mono text-[#777777] mr-3">
                    0{idx + 1}
                  </span>
                  {link.name}
                </span>
                <span className="text-xs font-mono text-[#777777]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#FF5A36] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-[0_8px_20px_rgba(255,90,54,0.3)]"
            >
              <span>TALK TO STAVAN ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs font-mono text-[#777777]">
              Direct founder line • +91 6377841469
            </div>
          </div>
        </div>
      )}
    </>
  );
}
