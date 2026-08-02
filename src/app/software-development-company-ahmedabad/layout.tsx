import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company in Ahmedabad | Custom Software Engineering",
  description: "DevFlow Technology is a premier custom software development company in Ahmedabad, Gujarat, offering bespoke ERP development, enterprise portals, SaaS products, and digital systems with zero vendor lock-in.",
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
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - Software Development Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Ahmedabad | DevFlow Technology",
    description: "Bespoke software development, ERP systems, and cloud-native solutions in Ahmedabad, Gujarat.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/software-development-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
