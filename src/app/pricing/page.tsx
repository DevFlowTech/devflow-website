import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models | Custom Software Development | DevFlow",
  description:
    "Transparent pricing for custom software development, AI integration, and dedicated developer teams. Fixed price, time & material, and monthly retainer models. No hidden fees.",
  keywords: [
    "software development pricing India",
    "custom software cost Ahmedabad",
    "dedicated developer pricing",
    "AI development cost India",
    "offshore development pricing",
    "DevFlow Technology pricing",
  ],
  alternates: { canonical: "https://www.devflow.co.in/pricing" },
  openGraph: {
    title: "Transparent Software Development Pricing | DevFlow Technology",
    description:
      "Clear engagement models for custom software, AI, and ERP development. No retainer surprises — work directly with engineers.",
    url: "https://www.devflow.co.in/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
