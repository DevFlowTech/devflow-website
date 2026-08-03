import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Industries We Serve | DevFlow Technology",
  },
  description:
    "Software, AI, and digital solutions for healthcare, fintech, logistics, manufacturing, real estate, education, and more industries.",
  alternates: { canonical: "https://www.devflow.co.in/industries" },
  openGraph: {
    title: "Industries We Serve | DevFlow Technology",
    description:
      "Software, AI, and digital solutions for healthcare, fintech, logistics, manufacturing, and more industries.",
    url: "https://www.devflow.co.in/industries",
    type: "website",
  },
  twitter: {
    title: "Industries We Serve | DevFlow Technology",
    description:
      "Industry-specific software and AI solutions from DevFlow Technology.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
