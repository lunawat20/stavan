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
    <main className="relative min-h-screen bg-canvas-sand text-[#111111]">
      {/* 1. Header: Clean Warm Sand Navigation */}
      <Navbar />

      {/* 2. Hero: Warm Sand & Apricot Canvas + Sunrise Glow + Floating Automation Engine */}
      <Hero />

      {/* 3. Problem: Warm Clay Canvas + Oatmeal Drafting Panels + Asymmetric Diagnostic Stack */}
      <ProblemSection />

      {/* 4. What We Build: Fresh Sage Mint Canvas + Mint Architecture Geometry + Bento Capabilities */}
      <ServicesGrid />

      {/* 5. How It Works: Blueprint Ice-Blue Canvas + Technical Coordinate Grid + Stepper */}
      <ProcessSection />

      {/* 6. Automation Examples: Warm Champagne Butter Canvas + Interactive Simulation Card */}
      <AutomationExamples />

      {/* 7. Why Stavan: Editorial Lilac Slate Canvas + Studio Principles */}
      <WhyStavan />

      {/* 8. Complimentary Consultation: Warm Apricot Dawn Canvas + High-Impact White Studio Card */}
      <ConsultationSection />

      {/* 9. FAQ: Warm Stone Chalk Canvas + Drafting Dot Matrix + Physical Accordions */}
      <FAQ />

      {/* 10. Final CTA: Golden Sand Studio Canvas + Orange Conversion */}
      <FinalCTA />

      {/* 11. Studio Footer: Warm Clay Canvas */}
      <Footer />

      {/* 12. Floating WhatsApp White Studio Pill */}
      <WhatsAppButton />
    </main>
  );
}
