import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import CoreServiceSection from "@/components/sections/CoreServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import RiskReversalSection from "@/components/sections/RiskReversalSection";
import FounderSection from "@/components/sections/FounderSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero - Clear value proposition */}
      <HeroSection />

      {/* Problem → Solution - Speak to pain points */}
      <ProblemSolutionSection />

      {/* Core Service - What we build, who it's for */}
      <CoreServiceSection />

      {/* Process - Step-by-step with clear outcomes */}
      <ProcessSection />

      {/* Case Study - Proof with real outcomes */}
      <CaseStudySection />

      {/* Risk Reversal - Low-risk ways to start */}
      <RiskReversalSection />

      {/* Founder Message - Human element */}
      <FounderSection />

      {/* Final CTA - Contact */}
      <ContactSection />
    </>
  );
}
