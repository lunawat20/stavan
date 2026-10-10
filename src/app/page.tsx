import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { AutomationExamples } from "@/components/AutomationExamples";
import { WhyStavan } from "@/components/WhyStavan";
import { ConsultationSection } from "@/components/ConsultationSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-canvas text-[#F7F6F2]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Hero: Dark Charcoal Canvas + Asymmetric Living Business Automation Engine */}
      <Hero />

      {/* 3. Problem: Warm Off-White Canvas + Asymmetric Diagnostic Stack */}
      <ProblemSection />

      {/* 4. What We Build: Cool-Gray Canvas + Asymmetric Bento Grid */}
      <ServicesGrid />

      {/* 5. How It Works: Dark Charcoal Canvas + Live Status Telemetry Pipeline */}
      <ProcessSection />

      {/* 6. Automation Examples: Soft Warm Gradient Canvas + Before vs. After System Simulation */}
      <AutomationExamples />

      {/* 7. Why Stavan: Cool-Gray Canvas + Studio Operating Principles */}
      <WhyStavan />

      {/* 8. Complimentary Consultation: Dark Charcoal Canvas + Direct Diagnostic Pathway */}
      <ConsultationSection />

      {/* 9. FAQ: Warm Off-White Canvas + Refined Studio Accordions */}
      <FAQ />

      {/* 10. Final CTA: Dark Charcoal Canvas + Signature Motif & Conversion Engine */}
      <FinalCTA />

      {/* 11. Studio Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Indicator */}
      <WhatsAppButton />
    </main>
  );
}
