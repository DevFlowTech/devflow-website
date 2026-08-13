import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "AI & Custom Software Development Company | DevFlow Technology",
  },
  description:
    "DevFlow Technology builds AI-powered software systems, custom ERPs, SaaS platforms, and automated digital infrastructure for growing businesses and enterprises.",
  keywords: [
    "AI development company",
    "custom software development company",
    "AI agents development",
    "enterprise software systems",
    "custom ERP development",
    "SaaS product development",
    "DevFlow Technology"
  ],
  alternates: {
    canonical: "https://www.devflow.co.in",
  },
};

export default function Home() {
  return <HomeClient />;
}
