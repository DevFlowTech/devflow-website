import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Custom Software, AI & ERP Development | DevFlow Technology",
  description:
    "Answers to common questions about DevFlow Technology's custom software development, AI integration, ERP systems, GEO/AEO optimization, and dedicated development teams based in Ahmedabad.",
  keywords: [
    "DevFlow Technology FAQ",
    "custom software development questions",
    "AI integration FAQ India",
    "ERP development questions Ahmedabad",
    "GEO optimization FAQ",
    "dedicated development team FAQ",
  ],
  alternates: { canonical: "https://www.devflow.co.in/faq" },
  openGraph: {
    title: "FAQ | DevFlow Technology — Custom Software & AI Development",
    description:
      "Common questions answered about software engineering, AI systems, ERP development, and technical SEO services from DevFlow Technology.",
    url: "https://www.devflow.co.in/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
