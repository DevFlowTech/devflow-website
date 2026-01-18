import HeroSection from "@/components/sections/HeroSection";
import ServicesQuickView from "@/components/sections/ServicesQuickView";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import CoreServiceSection from "@/components/sections/CoreServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import RiskReversalSection from "@/components/sections/RiskReversalSection";
import FounderSection from "@/components/sections/FounderSection";
import ContactSection from "@/components/sections/ContactSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import StatsBar from "@/components/sections/StatsBar";
import FAQSection from "@/components/sections/FAQSection";
import ParallaxText from "@/components/ui/ParallaxText";
import { CurveDivider } from "@/components/ui/WaveDivider";

// Elegant section divider component
const SectionDivider = () => (
  <div className="section-divider mx-auto max-w-4xl my-0" />
);

export default function Home() {
  return (
    <>
      {/* Hero - Clear value proposition */}
      <HeroSection />

      {/* Stats Bar - Impressive numbers */}
      <StatsBar />

      {/* Tech Stack Marquee - Social Proof via Technology */}
      <TechStackSection />

      {/* Curved Transition to Services */}
      <CurveDivider color="#0a0a0a" className="-mt-1 bg-devflow-charcoal" />

      {/* Services Quick View - Scannable at a glance */}
      <ServicesQuickView />

      {/* Parallax Text - Visual Impact */}
      <div className="bg-devflow-black overflow-hidden py-4">
        <ParallaxText baseVelocity={-200}>
          INNOVATE • BUILD • SCALE •
        </ParallaxText>
      </div>

      {/* Problem → Solution - Speak to pain points */}
      <ProblemSolutionSection />

      {/* Elegant Divider */}
      <SectionDivider />

      {/* Core Service - What we build, who it's for */}
      <CoreServiceSection />

      {/* Curved Transition */}
      <CurveDivider color="#121212" className="-mb-1 bg-devflow-black" flip />

      {/* Process - Step-by-step with clear outcomes */}
      <ProcessSection />

      {/* Parallax Text - Visual Impact */}
      <div className="bg-devflow-black overflow-hidden py-4">
        <ParallaxText baseVelocity={150}>CODE • DESIGN • DEPLOY •</ParallaxText>
      </div>

      {/* Project Showcase - Portfolio Gallery */}
      <ProjectShowcase />

      {/* Testimonials - Client Success Stories */}
      <TestimonialsSection />

      {/* Case Study - Proof with real outcomes */}
      <CaseStudySection />

      {/* Elegant Divider */}
      <SectionDivider />

      {/* Risk Reversal - Low-risk ways to start */}
      <RiskReversalSection />

      {/* Curved Transition to About */}
      <CurveDivider color="#121212" className="-mt-1 bg-devflow-black" />

      {/* Founder Message - Human element */}
      <FounderSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Elegant Divider */}
      <SectionDivider />

      {/* Final CTA - Contact */}
      <ContactSection />
    </>
  );
}
