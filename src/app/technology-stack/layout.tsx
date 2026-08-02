import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Our Technology Stack & Architecture | DevFlow",
  },
  description:
    "We build with Next.js, React, Node.js, Python, PostgreSQL, AWS, and modern AI frameworks to ensure speed, security, and scalability.",
  alternates: { canonical: "https://devflow.co.in/technology-stack" },
};

export default function TechStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
