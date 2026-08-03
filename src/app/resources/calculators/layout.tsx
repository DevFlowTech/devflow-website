import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Business Calculators | DevFlow Technology",
  },
  description:
    "Free business calculators for software projects, ROI, and digital product planning by DevFlow Technology, Ahmedabad.",
  alternates: { canonical: "https://www.devflow.co.in/resources/calculators" },
  openGraph: {
    title: "Business Calculators | DevFlow Technology",
    description:
      "Free business calculators for software projects, ROI, and digital product planning by DevFlow Technology.",
    url: "https://www.devflow.co.in/resources/calculators",
    type: "website",
  },
  twitter: {
    title: "Business Calculators | DevFlow Technology",
    description:
      "Free calculators for software project ROI and product planning.",
  },
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
