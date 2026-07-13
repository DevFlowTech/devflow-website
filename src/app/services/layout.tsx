import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Development & Custom Software Services | DevFlow Technology",
  },
  description:
    "Full-stack AI development, custom web applications, enterprise ERP systems, mobile apps, and cloud services. DevFlow Technology builds operational software that scales.",
  keywords: [
    "AI development services",
    "custom software development",
    "web development company",
    "ERP system development",
    "mobile app development",
    "cloud services India",
    "AI automation services",
    "UI UX design agency",
    "DevOps consulting",
    "digital transformation services",
  ],
  openGraph: {
    title: "Custom Software & AI Development Services | DevFlow Technology",
    description:
      "Explore our comprehensive technology services: AI automation, web & mobile apps, enterprise ERP, cloud infrastructure, and UI/UX design.",
    url: "https://devflow.co.in/services",
    type: "website",
  },
  twitter: {
    title: "Custom Software & AI Development Services | DevFlow Technology",
    description:
      "Explore our comprehensive technology services: AI automation, web & mobile apps, enterprise ERP, cloud infrastructure, and UI/UX design.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
