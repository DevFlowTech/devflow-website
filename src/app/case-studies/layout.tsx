import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies & ROI | DevFlow Technology",
  },
  description:
    "Explore our software case studies, engineering blueprints, and measured KPIs we delivered for our global startup and SME clients.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
