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
            ? "py-3 bg-[#0D0E12]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20C8E8]"
              aria-label="STAVAN Home"
            >
              <Logo theme="dark" size="md" showTagline />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 bg-[#14161C]/80 border border-white/[0.08] rounded-full backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#A6A9B6] hover:text-[#F7F6F2] hover:bg-white/[0.06] rounded-full transition-colors"
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
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF4B2B] hover:bg-[#ff3b17] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_14px_rgba(255,75,43,0.35)] transition-all hover:-translate-y-0.5"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FF4B2B] text-white rounded-lg shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-[#1A1D26] text-[#F7F6F2] border border-white/10 rounded-lg focus:outline-none"
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
        <div className="fixed inset-0 z-40 md:hidden bg-[#0D0E12]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888C99] pb-2 border-b border-white/10">
              Navigation // Menu
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xl font-bold font-sans tracking-tight text-[#F7F6F2] hover:text-[#20C8E8] py-3.5 border-b border-white/[0.06] transition-colors"
              >
                <span>
                  <span className="text-xs font-mono text-[#888C99] mr-3">
                    0{idx + 1}
                  </span>
                  {link.name}
                </span>
                <span className="text-xs font-mono text-[#888C99]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#FF4B2B] text-white text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-[0_8px_20px_rgba(255,75,43,0.4)]"
            >
              <span>Talk to Stavan on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs font-mono text-[#888C99]">
              Direct founder line • +91 6377841469
            </div>
          </div>
        </div>
      )}
    </>
  );
}
