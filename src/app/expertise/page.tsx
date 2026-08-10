import type { Metadata } from "next";
import ExpertiseClient from "./ExpertiseClient";

export const metadata: Metadata = {
  title: "Technical Expertise | Next.js, AI, Go, Node.js Stack | DevFlow Technology",
  description:
    "DevFlow Technology's full technical stack: Next.js, React, Node.js, Go, Python, PostgreSQL, AWS, Docker, Kubernetes, Framer Motion, and cutting-edge AI/LLM integrations.",
  keywords: [
    "DevFlow Technology tech stack",
    "Next.js development company India",
    "Go Golang developers Ahmedabad",
    "Node.js developers India",
    "AI LLM developers India",
    "full stack technology expertise",
  ],
  alternates: { canonical: "https://www.devflow.co.in/expertise" },
  openGraph: {
    title: "Technical Expertise & Stack | DevFlow Technology",
    description:
      "The complete engineering stack powering DevFlow's custom software, AI, and ERP solutions.",
    url: "https://www.devflow.co.in/expertise",
  },
};

export default function ExpertisePage() {
  return <ExpertiseClient />;
}
