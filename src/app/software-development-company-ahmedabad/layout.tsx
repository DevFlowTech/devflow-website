import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Software Development Company in Ahmedabad | DevFlow" },
  description: "DevFlow is a premier custom software development company in Ahmedabad, Gujarat, building ERP, SaaS, and enterprise portals.",
  keywords: [
    "software development company Ahmedabad",
    "custom software development Ahmedabad",
    "software company in Ahmedabad",
    "bespoke software development Ahmedabad",
    "enterprise software development Ahmedabad",
    "software development services Ahmedabad",
    "Next.js developers Ahmedabad",
    "IT services provider Ahmedabad",
    "software engineering company Gujarat",
    "erp software development Ahmedabad"
  ],
  openGraph: {
    title: "Software Development Company in Ahmedabad | DevFlow Technology",
    description: "DevFlow Technology builds high-performance custom software, ERPs, SaaS systems, and AI automation for businesses in Ahmedabad and Gujarat.",
    type: "website",
    images: [{ url: "https://www.devflow.co.in/og-image.jpg", width: 1200, height: 630, alt: "DevFlow Technology - Software Development Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Ahmedabad | DevFlow Technology",
    description: "Bespoke software development, ERP systems, and cloud-native solutions in Ahmedabad, Gujarat.",
    images: ["https://www.devflow.co.in/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.devflow.co.in/software-development-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
