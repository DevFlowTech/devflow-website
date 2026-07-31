import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "White Label Software Development Agency | DevFlow",
  },
  description:
    "Offer state-of-the-art software solutions under your own brand. We handle end-to-end design, development, and maintenance.",
};

export default function WhiteLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
