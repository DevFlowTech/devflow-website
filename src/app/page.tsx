import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import ParallaxSection from "@/components/ui/ParallaxSection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Primary value proposition and call-to-action */}
      <article aria-label="DevFlow Technology - AI Agency & Web Development Company India">
        <HeroSection />
      </article>

      {/* Clients Section - Social proof and trust indicators */}
      <ParallaxSection speed={0.15}>
        <article aria-label="Trusted by leading companies and startups">
          <ClientsSection />
        </article>
      </ParallaxSection>

      {/* Capabilities Section - Service offerings and technical expertise */}
      <ParallaxSection speed={0.2}>
        <article aria-label="IT Services - AI Solutions, ERP Systems, Web Development, Mobile Apps, Cloud DevOps">
          <CapabilitiesSection />
        </article>
      </ParallaxSection>

      {/* Process Section - Methodology and workflow explanation */}
      <ParallaxSection speed={0.25}>
        <article aria-label="Our agile development process and methodology">
          <ProcessSection />
        </article>
      </ParallaxSection>

      {/* Work Section - Portfolio and case studies showcase */}
      <ParallaxSection speed={0.2}>
        <article aria-label="Portfolio - Web development and AI projects showcase">
          <WorkSection />
        </article>
      </ParallaxSection>

      {/* Testimonials Section - Client success stories */}
      <ParallaxSection speed={0.15}>
        <article aria-label="Client testimonials and success stories">
          <TestimonialsSection />
        </article>
      </ParallaxSection>

      {/* Contact Section - Lead generation and communication */}
      <ParallaxSection speed={0.1}>
        <article aria-label="Contact DevFlow Technology - Get a free consultation">
          <ContactSection />
        </article>
      </ParallaxSection>
    </>
  );
}
