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
    <main className="relative min-h-screen bg-ivory-primary text-[#111111]">
      {/* 1. Sticky Light Navigation (Warm Ivory Translucent) */}
      <Navbar />

      {/* 2. Hero: Warm Ivory Canvas (#F7F4EC) + Floating Living Automation Engine */}
      <Hero />

      {/* 3. Problem: Soft White Canvas (#FBFAF6) + Asymmetric Diagnostic Stack */}
      <ProblemSection />

      {/* 4. What We Build: Subtle Cool-Grey Canvas (#F1F3F2) + Asymmetric Bento Grid */}
      <ServicesGrid />

      {/* 5. How It Works: Warm Ivory Canvas (#F7F4EC) + Live Status Telemetry Pipeline */}
      <ProcessSection />

      {/* 6. Automation Examples: Light Warm Gradient Canvas + Before vs. After System Simulation */}
      <AutomationExamples />

      {/* 7. Why Stavan: Soft Off-White Canvas (#FBFAF6) + Studio Operating Principles */}
      <WhyStavan />

      {/* 8. Complimentary Consultation: Dark Charcoal Contrast Canvas (#111111) */}
      <ConsultationSection />

      {/* 9. FAQ: Warm Ivory Canvas (#F7F4EC) + Refined Physical Studio Accordions */}
      <FAQ />

      {/* 10. Final CTA: Dark Charcoal Contrast Canvas (#111111) */}
      <FinalCTA />

      {/* 11. Studio Footer: Dark Charcoal (#111111) */}
      <Footer />

      {/* 12. Floating WhatsApp Indicator */}
      <WhatsAppButton />
    </main>
  );
}
