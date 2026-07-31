import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services Ahmedabad | Complete IT Solutions, Software Development & Consulting Gujarat",
  description: "Comprehensive IT services in Ahmedabad, Gujarat: custom software development, AI/ML solutions, web & mobile apps, cloud & DevOps, cybersecurity, IT consulting, staff augmentation & managed services. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
  keywords: [
    "IT services Ahmedabad",
    "IT services Gujarat",
    "IT solutions Ahmedabad",
    "IT consulting Ahmedabad",
    "software development services Ahmedabad",
    "managed IT services Ahmedabad",
    "IT support Ahmedabad",
    "technology services Gujarat",
    "digital transformation Ahmedabad",
    "cloud services Ahmedabad",
    "DevOps services Gujarat",
    "cybersecurity services Ahmedabad",
    "IT outsourcing Ahmedabad",
    "staff augmentation Ahmedabad",
    "dedicated development team Gujarat",
    "custom software development Ahmedabad",
    "enterprise software services Gujarat",
    "AI development services Ahmedabad",
    "web development services Gujarat",
    "mobile app development services Ahmedabad",
  ],
  openGraph: {
    title: "IT Services Ahmedabad | DevFlow Technology - Complete IT Solutions Gujarat",
    description: "Full-spectrum IT services in Ahmedabad: software development, AI, cloud, DevOps, security, consulting & staffing. Gujarat's trusted technology partner.",
    type: "website",
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - IT Services Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services Ahmedabad | DevFlow Technology",
    description: "Complete IT services in Ahmedabad. Custom software development, AI solutions, web & mobile apps, cloud & security for Gujarat enterprises.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/it-services-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
