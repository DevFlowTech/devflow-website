import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Knowledge Base | DevFlow Technology",
  },
  description:
    "In-depth guides on custom software development, AI integration, ERP systems, and technology strategy from DevFlow's engineering team.",
  alternates: { canonical: "https://www.devflow.co.in/knowledge-base" },
  openGraph: {
    title: "Knowledge Base | DevFlow Technology",
    description:
      "In-depth guides on custom software development, AI integration, ERP systems, and technology strategy.",
    url: "https://www.devflow.co.in/knowledge-base",
    type: "website",
  },
  twitter: {
    title: "Knowledge Base | DevFlow Technology",
    description:
      "Guides on software development, AI integration, and ERP systems.",
  },
};

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
