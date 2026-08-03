import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About DevFlow Technology | AI Agency & Software India",
  },
  description:
    "About DevFlow Technology's mission, values, and team — a technical partner building custom software, AI solutions, and enterprise systems.",
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
  alternates: { canonical: "https://www.devflow.co.in/about" },
  openGraph: {
    title: "About DevFlow Technology | Our Mission & Team",
    description:
      "From chaos to clarity. Learn how DevFlow Technology builds robust digital systems that automate operational drag and enable compounding growth.",
    url: "https://www.devflow.co.in/about",
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
