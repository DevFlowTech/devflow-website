import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Company Ahmedabad | Best SEO Services, Local SEO & GEO/AEO Optimization",
  description: "Top SEO company in Ahmedabad, Gujarat offering technical SEO audits, local SEO for Google Maps 3-Pack, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and Core Web Vitals optimization. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
  keywords: [
    "SEO company Ahmedabad",
    "SEO services Ahmedabad",
    "best SEO company Ahmedabad",
    "SEO agency Ahmedabad",
    "local SEO Ahmedabad",
    "Google Business Profile optimization Ahmedabad",
    "Google Maps SEO Ahmedabad",
    "technical SEO audit Ahmedabad",
    "Core Web Vitals optimization Ahmedabad",
    "GEO Generative Engine Optimization Ahmedabad",
    "AEO Answer Engine Optimization Ahmedabad",
    "SEO consultant Ahmedabad",
    "SEO expert Gujarat",
    "enterprise SEO services Gujarat",
    "eCommerce SEO Ahmedabad",
    "schema markup services Ahmedabad",
  ],
  openGraph: {
    title: "SEO Company Ahmedabad | DevFlow Technology - #1 SEO Services Gujarat",
    description: "Leading SEO company in Ahmedabad offering technical SEO, local SEO, GEO/AEO optimization, and Core Web Vitals fixes. Rank higher on Google and AI search.",
    type: "website",
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - SEO Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company Ahmedabad | DevFlow Technology",
    description: "Top SEO company in Ahmedabad, Gujarat. Technical SEO, Local SEO, GEO/AEO optimization for Google & AI search.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/seo-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
