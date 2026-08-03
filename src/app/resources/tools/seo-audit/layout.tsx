import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Free SEO Audit Tool | DevFlow Technology",
  },
  description:
    "Run a free technical SEO audit for your website. Get insights on Core Web Vitals, metadata, canonicals, and indexability from DevFlow.",
  alternates: {
    canonical: "https://www.devflow.co.in/resources/tools/seo-audit",
  },
  openGraph: {
    title: "Free SEO Audit Tool | DevFlow Technology",
    description:
      "Run a free technical SEO audit for your website. Get insights on Core Web Vitals, metadata, canonicals, and indexability.",
    url: "https://www.devflow.co.in/resources/tools/seo-audit",
    type: "website",
  },
  twitter: {
    title: "Free SEO Audit Tool | DevFlow Technology",
    description:
      "Free technical SEO audit covering Core Web Vitals, metadata, and indexability.",
  },
};

export default function SEOAuditToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
