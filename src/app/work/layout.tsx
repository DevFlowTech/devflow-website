import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio & Case Studies | DevFlow Technology Projects",
  },
  description:
    "Explore our portfolio of custom-built web applications, enterprise portals, real estate platforms, and digital solutions. See proven results from real projects.",
  keywords: [
    "DevFlow portfolio",
    "custom web development projects",
    "software case studies",
    "web application examples",
    "enterprise software portfolio",
    "React projects",
    "Next.js examples",
    "India software company projects",
  ],
  openGraph: {
    title: "Our Work - Portfolio & Case Studies | DevFlow Technology",
    description:
      "Browse our gallery of crafted products and proven results. Custom web systems, database orchestrations, and enterprise portals built by DevFlow.",
    url: "https://devflow.co.in/work",
    type: "website",
  },
  twitter: {
    title: "Our Work - Portfolio & Case Studies | DevFlow Technology",
    description:
      "Browse our gallery of crafted products and proven results. Custom web systems, database orchestrations, and enterprise portals built by DevFlow.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
