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
    <main className="relative min-h-screen bg-canvas-ivory text-[#111111]">
      {/* 1. Header: Clean Warm Ivory Navigation */}
      <Navbar />

      {/* 2. Hero: Warm Ivory Canvas + Large Cropped Geometric Squares + Floating Automation Engine */}
      <Hero />

      {/* 3. Problem: Soft Cream Canvas + Outlined Geometric Squares + Asymmetric Stack */}
      <ProblemSection />

      {/* 4. What We Build: White Blueprint Grid Canvas + Asymmetric Bento Capabilities */}
      <ServicesGrid />

      {/* 5. How It Works: Warm Ivory Canvas + Large Geometric Structure + Elevated Active Card */}
      <ProcessSection />

      {/* 6. Automation Examples: Soft Cream Canvas + White Interactive Simulation Card */}
      <AutomationExamples />

      {/* 7. Why Stavan: White Architectural Grid Canvas + Studio Principles */}
      <WhyStavan />

      {/* 8. Complimentary Consultation: Warm Ivory Canvas + High-Impact White Studio Card */}
      <ConsultationSection />

      {/* 9. FAQ: White Blueprint Grid Canvas + Architectural Physical Accordions */}
      <FAQ />

      {/* 10. Final CTA: Warm Ivory Canvas + Large Geometric Accent + Orange Conversion */}
      <FinalCTA />

      {/* 11. Studio Footer: Soft Cream Canvas */}
      <Footer />

      {/* 12. Floating WhatsApp White Studio Pill */}
      <WhatsAppButton />
    </main>
  );
}
