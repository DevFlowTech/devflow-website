import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Careers | Join the Engineering Team at DevFlow",
  },
  description:
    "Explore careers at DevFlow Technology. Join our remote-first team of pre-vetted React, Node, Python, and cloud developers.",
  keywords: [
    "DevFlow careers",
    "careers at DevFlow",
    "software engineering jobs India",
    "Next.js developer jobs",
    "remote software developer jobs",
    "tech jobs Ahmedabad",
    "IT careers Ahmedabad",
    "apply to DevFlow"
  ],
  openGraph: {
    title: "Careers | DevFlow Technology - Build Enterprise Systems",
    description: "Join a high-performance team of developers, designers, and systems architects at DevFlow.",
    type: "website",
  },
  alternates: { canonical: "https://www.devflow.co.in/careers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
