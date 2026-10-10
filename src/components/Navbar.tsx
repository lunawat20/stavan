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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What We Do", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Stavan", href: "#why-stavan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#090909]/95 backdrop-blur-md border-b-2 border-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent border-b border-[#222222]/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B2B]"
              aria-label="STAVAN Home"
            >
              <Logo theme="dark" size="md" showTagline />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 bg-[#141414] border-2 border-[#262626] rounded-none shadow-[2px_2px_0px_#262626]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#A5A096] hover:text-[#F7F2E8] hover:bg-[#202020] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#F7F2E8] text-[#111111] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[#111111] shadow-[3px_3px_0px_#FF4B2B] hover:shadow-[1px_1px_0px_#FF4B2B] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF4B2B]" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FF4B2B] text-white border border-black shadow-[2px_2px_0px_#000]"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-[#171717] text-[#F7F2E8] border border-[#333333] hover:bg-[#222222] focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#FF4B2B]" />
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
        <div className="fixed inset-0 z-40 md:hidden bg-[#090909]/95 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8A82] pb-2 border-b border-[#222222]">
              Navigation // Menu
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xl font-bold font-mono tracking-tight text-[#F7F2E8] hover:text-[#FF4B2B] py-3 border-b border-[#1c1c1c] transition-colors"
              >
                <span>
                  <span className="text-xs font-mono text-[#8E8A82] mr-3">
                    0{idx + 1}
                  </span>
                  {link.name}
                </span>
                <span className="text-xs font-mono text-[#8E8A82]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#FF4B2B] text-white text-sm font-mono font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#F7F2E8]"
            >
              <span>Talk to Stavan on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs font-mono text-[#8E8A82]">
              Direct founder line • +91 6377841469
            </div>
          </div>
        </div>
      )}
    </>
  );
}
