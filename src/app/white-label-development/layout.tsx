import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "White Label Software Development Agency | DevFlow",
  },
  description:
    "Offer state-of-the-art software solutions under your own brand. We handle end-to-end design, development, and maintenance.",
  keywords: [
    "white label software development",
    "white label development agency",
    "reseller software development",
    "white label Nextjs developer",
    "white label web app development",
    "resell IT services",
    "white label coding partner"
  ],
  alternates: { canonical: "https://devflow.co.in/white-label-development" },
};

export default function WhiteLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
