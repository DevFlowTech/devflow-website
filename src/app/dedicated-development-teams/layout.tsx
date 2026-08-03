import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Hire Dedicated Software Developers | DevFlow",
  },
  description:
    "Scale your engineering department with managed dedicated developers. Achieve high velocity with agile integration and standard code.",
  keywords: [
    "hire dedicated developers",
    "dedicated software developers",
    "hire React developers India",
    "hire Nodejs developers",
    "hire remote engineering teams",
    "dedicated development teams",
    "staff augmentation services",
    "hire Nextjs developers"
  ],
  alternates: { canonical: "https://www.devflow.co.in/dedicated-development-teams" },
};

export default function DedicatedTeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
