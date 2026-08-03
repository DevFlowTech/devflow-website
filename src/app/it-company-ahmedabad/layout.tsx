import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IT Company & Software Development Ahmedabad | DevFlow" },
  description: "Leading IT company in Ahmedabad, Gujarat providing custom software development, AI solutions, cloud & DevOps, and managed IT services.",
  keywords: [
    "IT company Ahmedabad",
    "IT company Gujarat",
    "IT services Ahmedabad",
    "IT solutions Ahmedabad",
    "software company Ahmedabad",
    "technology company Ahmedabad",
    "IT consulting Ahmedabad",
    "digital transformation Ahmedabad",
    "managed IT services Ahmedabad",
    "IT support Ahmedabad",
    "software development company Ahmedabad",
    "custom software development Gujarat",
    "enterprise IT services Gujarat",
    "IT outsourcing Ahmedabad",
    "technology partner Ahmedabad",
  ],
  openGraph: {
    title: "IT Company Ahmedabad | DevFlow Technology - Top IT Services Gujarat",
    description: "Leading IT company in Ahmedabad offering software development, AI, cloud, DevOps & managed IT services. Gujarat's trusted technology partner for digital transformation.",
    type: "website",
    images: [{ url: "https://www.devflow.co.in/og-image.jpg", width: 1200, height: 630, alt: "DevFlow Technology - IT Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Company Ahmedabad | DevFlow Technology",
    description: "Top IT company in Ahmedabad, Gujarat. Software development, AI, cloud, DevOps, IT consulting & managed services.",
    images: ["https://www.devflow.co.in/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.devflow.co.in/it-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
