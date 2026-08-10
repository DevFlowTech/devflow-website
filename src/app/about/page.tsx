import type { Metadata } from "next";
import AboutClient from "./AboutClient";

// ponytail: server wrapper keeps this route SSR-rendered so Google sees real
// HTML on first byte. Ceiling: if heavy interactivity is ever needed above
// the fold, split again and add a suspense boundary.
export const metadata: Metadata = {
  title: "About DevFlow Technology | AI & Software Engineers Ahmedabad",
  description:
    "DevFlow Technology was founded in Ahmedabad, Gujarat in January 2026 by Prince Gajjar and Bhavin Rajput. Engineering-first custom software, AI systems, and ERP development company.",
  keywords: [
    "about DevFlow Technology",
    "software development company Ahmedabad founders",
    "Prince Gajjar DevFlow",
    "Bhavin Rajput DevFlow",
    "AI development company Ahmedabad",
    "custom software engineers Ahmedabad",
  ],
  alternates: {
    canonical: "https://www.devflow.co.in/about",
  },
  openGraph: {
    title: "About DevFlow Technology | AI & Software Engineers Ahmedabad",
    description:
      "Meet the team behind DevFlow — an engineering-first AI and custom software development company based in Ahmedabad, Gujarat, India.",
    url: "https://www.devflow.co.in/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
