import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Resources & Free Tools | DevFlow Technology",
  },
  description:
    "Free resources and tools from DevFlow: SEO audit, business calculators, and guides for founders planning custom software, AI, and SaaS projects.",
  alternates: { canonical: "https://www.devflow.co.in/resources" },
  openGraph: {
    title: "Resources & Free Tools | DevFlow Technology",
    description:
      "Free resources and tools from DevFlow: SEO audit, business calculators, and guides for founders planning software projects.",
    url: "https://www.devflow.co.in/resources",
    type: "website",
  },
  twitter: {
    title: "Resources & Free Tools | DevFlow Technology",
    description:
      "Free SEO audit, business calculators, and project guides from DevFlow.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
