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

      {/* 2. Hero: Section 1 [WARM ORANGE] — Apricot & Sunrise Bloom + Floating Automation Engine */}
      <Hero />

      {/* 3. Problem: Section 2 [DEEP BLACK] — Diagnostic Framework + Sleek Dark Physical Cards */}
      <ProblemSection />

      {/* 4. What We Build: Section 3 [WARM ORANGE] — Bento Capabilities + White Physical Cards */}
      <ServicesGrid />

      {/* 5. How It Works: Section 4 [DEEP BLACK] — 4-Stage Stepper + Dark Elevated Active Card */}
      <ProcessSection />

      {/* 6. Automation Examples: Section 5 [WARM ORANGE] — Interactive Pipeline Simulation Card */}
      <AutomationExamples />

      {/* 7. Why Stavan: Section 6 [DEEP BLACK] — 4 Studio Principles + Dark Physical Cards */}
      <WhyStavan />

      {/* 8. Complimentary Consultation: Section 7 [WARM ORANGE] — High-Impact Studio Card */}
      <ConsultationSection />

      {/* 9. FAQ: Section 8 [DEEP BLACK] — Dark Physical Accordions */}
      <FAQ />

      {/* 10. Final CTA: Section 9 [WARM ORANGE] — Orange Conversion Action */}
      <FinalCTA />

      {/* 11. Studio Footer: [WARM ORANGE] Studio Credits & Founder Line */}
      <Footer />

      {/* 12. Floating WhatsApp White Studio Pill */}
      <WhatsAppButton />
    </main>
  );
}
