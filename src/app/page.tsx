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
    <main className="relative min-h-screen bg-[#090909] text-[#F7F2E8]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section with Living System Workflow */}
      <Hero />

      {/* 3. The Real Problem (Warm Cream Chapter) */}
      <ProblemSection />

      {/* 4. What We Can Build (Services Grid) */}
      <ServicesGrid />

      {/* 5. How It Works (4-Phase Stepped Progression) */}
      <ProcessSection />

      {/* 6. Automation Examples (Living Demonstration on Warm Cream) */}
      <AutomationExamples />

      {/* 7. Why Stavan (Agency Principles) */}
      <WhyStavan />

      {/* 8. Complimentary Consultation (High-Converting Conversion Core) */}
      <ConsultationSection />

      {/* 9. FAQ (Questions, Answered on Warm Cream) */}
      <FAQ />

      {/* 10. Final CTA (Massive Editorial Call to Action) */}
      <FinalCTA />

      {/* 11. Studio Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Indicator */}
      <WhatsAppButton />
    </main>
  );
}
