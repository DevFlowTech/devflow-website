import type { Metadata } from "next";
import AboutClient from "./AboutClient";

// ponytail: server wrapper keeps this route SSR-rendered so Google sees real
// HTML on first byte. Ceiling: if heavy interactivity is ever needed above
// the fold, split again and add a suspense boundary.
export const metadata: Metadata = {
  title: "About DevFlow Technology | Enterprise AI & Custom Software Engineering",
  description:
    "DevFlow Technology is an engineering-first AI and custom software engineering company founded by Prince Gajjar and Bhavin Rajput, building software infrastructure for growing global enterprises.",
  keywords: [
    "about DevFlow Technology",
    "Prince Gajjar DevFlow",
    "Bhavin Rajput DevFlow",
    "AI engineering company",
    "custom software development company"
  ],
  alternates: {
    canonical: "https://www.devflow.co.in/about",
  },
  openGraph: {
    title: "About DevFlow Technology | Enterprise AI & Custom Software Engineering",
    description:
      "Meet the leadership behind DevFlow — an engineering-first AI and custom software company building enterprise digital systems.",
    url: "https://www.devflow.co.in/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
