import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies & ROI | DevFlow Technology",
  },
  description:
    "Explore our software case studies, engineering blueprints, and measured KPIs we delivered for our global startup and SME clients.",
  keywords: [
    "DevFlow case studies",
    "software development case studies",
    "IT project portfolio",
    "custom software ROI",
    "ERP implementation success",
    "SaaS launch results",
    "tech blueprints",
    "client success stories"
  ],
  alternates: { canonical: "https://devflow.co.in/case-studies" },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
