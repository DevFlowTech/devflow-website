import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Custom Software, AI & ERP Development | DevFlow Technology",
  description:
    "Comprehensive IT services from DevFlow Technology: custom software development, AI integration, ERP systems, SaaS development, mobile apps, and technical SEO — all from Ahmedabad, India.",
  keywords: [
    "custom software development services",
    "AI integration services India",
    "ERP development Ahmedabad",
    "SaaS development services India",
    "DevFlow Technology services",
    "IT services Ahmedabad Gujarat",
  ],
  alternates: { canonical: "https://www.devflow.co.in/services" },
  openGraph: {
    title: "IT Services | DevFlow Technology — Custom Software & AI Development",
    description:
      "Engineering-first software development services: custom software, AI agents, ERP, SaaS, mobile apps, and GEO/SEO optimization.",
    url: "https://www.devflow.co.in/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
