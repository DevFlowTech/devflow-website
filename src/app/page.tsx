import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Primary value proposition and call-to-action */}
      <article aria-label="Welcome to DevFlow Technology">
        <HeroSection />
      </article>

      {/* Clients Section - Social proof and trust indicators */}
      <article aria-label="Our trusted clients and partners">
        <ClientsSection />
      </article>

      {/* Capabilities Section - Service offerings and technical expertise */}
      <article aria-label="Our engineering capabilities and services">
        <CapabilitiesSection />
      </article>

      {/* Process Section - Methodology and workflow explanation */}
      <article aria-label="Our development process and methodology">
        <ProcessSection />
      </article>

      {/* Work Section - Portfolio and case studies showcase */}
      <article aria-label="Our work and project portfolio">
        <WorkSection />
      </article>

      {/* Testimonials Section - Client success stories */}
      <article aria-label="What our clients say about us">
        <TestimonialsSection />
      </article>

      {/* Contact Section - Lead generation and communication */}
      <article aria-label="Contact us to start your project">
        <ContactSection />
      </article>
    </>
  );
}
