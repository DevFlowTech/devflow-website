import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at DevFlow Technology | Software & AI Engineer Jobs Ahmedabad",
  description:
    "Join DevFlow Technology in Ahmedabad. We hire software engineers, AI developers, and full-stack engineers passionate about building high-performance custom software systems.",
  keywords: [
    "software engineer jobs Ahmedabad",
    "AI developer jobs India",
    "full stack developer jobs Gujarat",
    "DevFlow Technology careers",
    "tech jobs Ahmedabad 2026",
  ],
  alternates: { canonical: "https://www.devflow.co.in/careers" },
  openGraph: {
    title: "Careers | DevFlow Technology — Software & AI Engineering Jobs",
    description:
      "Work with talented engineers building real custom software. Open positions at DevFlow Technology, Ahmedabad.",
    url: "https://www.devflow.co.in/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
