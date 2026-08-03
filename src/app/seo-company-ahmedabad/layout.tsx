import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "SEO Company Ahmedabad | SEO & Local SEO | DevFlow" },
  description: "Top SEO company in Ahmedabad offering technical SEO audits, local SEO, GEO/AEO optimization, and Core Web Vitals optimization.",
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
    images: [{ url: "https://www.devflow.co.in/og-image.jpg", width: 1200, height: 630, alt: "DevFlow Technology - SEO Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company Ahmedabad | DevFlow Technology",
    description: "Top SEO company in Ahmedabad, Gujarat. Technical SEO, Local SEO, GEO/AEO optimization for Google & AI search.",
    images: ["https://www.devflow.co.in/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.devflow.co.in/seo-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
