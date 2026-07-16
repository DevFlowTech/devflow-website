import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Company Ahmedabad | Top IT Services & Software Development Company Gujarat",
  description: "Leading IT company in Ahmedabad, Gujarat providing end-to-end IT services: custom software development, AI solutions, cloud & DevOps, IT consulting, digital transformation, and managed IT services. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
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
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - IT Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Company Ahmedabad | DevFlow Technology",
    description: "Top IT company in Ahmedabad, Gujarat. Software development, AI, cloud, DevOps, IT consulting & managed services.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/it-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
