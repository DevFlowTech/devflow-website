import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Flexible Pricing & Engagement Models | DevFlow",
  },
  description:
    "Choose between dedicated teams, fixed-scope sprints, or time and material structures. Transparent rates tailored to your budget.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
