import type { Metadata } from "next";
import WorkClient from "./WorkClient";

// ponytail: server wrapper gives Google real HTML + per-page metadata.
// Ceiling: filter state could be moved to URL searchParams for full SSR.
export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Custom Software & AI Projects | DevFlow",
  description:
    "Explore DevFlow Technology's portfolio of custom software, AI automation, ERP systems, and SaaS projects delivered for clients across healthcare, logistics, and fintech industries.",
  keywords: [
    "DevFlow Technology portfolio",
    "custom software case studies",
    "AI development projects",
    "ERP development India",
    "SaaS development case study",
    "software development portfolio Ahmedabad",
  ],
  alternates: { canonical: "https://www.devflow.co.in/work" },
  openGraph: {
    title: "Portfolio & Case Studies | DevFlow Technology",
    description:
      "Review custom software, AI automation, and SaaS projects built by DevFlow Technology engineers.",
    url: "https://www.devflow.co.in/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
