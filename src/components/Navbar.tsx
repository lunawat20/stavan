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
            ? "py-3 bg-[#F7F4EC]/90 backdrop-blur-md border-b border-[#D8D5CC] shadow-[0_4px_20px_rgba(17,17,17,0.04)]"
            : "py-5 bg-[#F7F4EC]/60 backdrop-blur-sm border-b border-[#D8D5CC]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo in Dark Charcoal */}
            <a
              href="#"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542F]"
              aria-label="STAVAN Home"
            >
              <Logo theme="light" size="md" showTagline />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 bg-[#FFFFFF]/80 border border-[#D8D5CC] rounded-full backdrop-blur-sm shadow-[0_2px_8px_rgba(17,17,17,0.03)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#555555] hover:text-[#111111] hover:bg-[#F7F4EC] rounded-full transition-colors"
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
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#252525] text-[#F7F4EC] text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-[0_2px_10px_rgba(17,17,17,0.1)] transition-all hover:-translate-y-0.5"
              >
                <span>Talk to Stavan</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF542F]" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111111] text-[#F7F4EC] rounded-lg shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-white text-[#111111] border border-[#D8D5CC] rounded-lg focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#FF542F]" />
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
        <div className="fixed inset-0 z-40 md:hidden bg-[#F7F4EC]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#777777] pb-2 border-b border-[#D8D5CC]">
              Navigation // Menu
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xl font-bold font-sans tracking-tight text-[#111111] hover:text-[#FF542F] py-3.5 border-b border-[#D8D5CC]/50 transition-colors"
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
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#111111] text-[#F7F4EC] text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-[0_8px_20px_rgba(17,17,17,0.15)]"
            >
              <span>Talk to Stavan on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF542F]" />
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
