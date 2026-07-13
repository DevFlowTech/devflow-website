import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About DevFlow Technology | AI Agency & Software Company India",
  },
  description:
    "Learn about DevFlow Technology's mission, values, and team. We are a focused technical partner building custom software, AI solutions, and enterprise systems for scaling startups.",
  keywords: [
    "about DevFlow Technology",
    "software company India",
    "AI agency founders",
    "Prince Gajjar",
    "DevFlow team",
    "software engineering company",
    "Indian tech startup",
    "custom software company",
  ],
  openGraph: {
    title: "About DevFlow Technology | Our Mission & Team",
    description:
      "From chaos to clarity. Learn how DevFlow Technology builds robust digital systems that automate operational drag and enable compounding growth.",
    url: "https://devflow.co.in/about",
    type: "website",
  },
  twitter: {
    title: "About DevFlow Technology | Our Mission & Team",
    description:
      "From chaos to clarity. Learn how DevFlow Technology builds robust digital systems that automate operational drag and enable compounding growth.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
