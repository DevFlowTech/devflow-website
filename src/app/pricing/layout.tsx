import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Flexible Pricing & Engagement Models | DevFlow",
  },
  description:
    "Choose between dedicated teams, fixed-scope sprints, or time and material structures. Transparent rates tailored to your budget.",
  keywords: [
    "software development pricing",
    "IT services engagement models",
    "dedicated developer cost",
    "fixed scope project cost",
    "software development rates",
    "DevFlow pricing structures",
    "outsource development budget"
  ],
  alternates: { canonical: "https://www.devflow.co.in/pricing" },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
