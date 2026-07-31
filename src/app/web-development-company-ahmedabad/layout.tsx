import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Company Ahmedabad | Custom Web Apps, Next.js & React Experts",
  description: "Leading web development company in Ahmedabad, Gujarat building custom web applications, enterprise portals, e-commerce platforms, and PWAs using Next.js, React, Node.js & TypeScript. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
  keywords: [
    "web development company Ahmedabad",
    "web development company Gujarat",
    "website development Ahmedabad",
    "custom web development Ahmedabad",
    "web application development Ahmedabad",
    "Next.js development company Ahmedabad",
    "React development company Ahmedabad",
    "Node.js development company Ahmedabad",
    "MERN stack development Ahmedabad",
    "full stack development Ahmedabad",
    "enterprise web development Gujarat",
    "eCommerce website development Ahmedabad",
    "progressive web app development Ahmedabad",
    "website redesign Ahmedabad",
    "web development services Gujarat",
  ],
  openGraph: {
    title: "Web Development Company Ahmedabad | DevFlow Technology",
    description: "Top web development company in Ahmedabad building custom web apps, enterprise portals & e-commerce with Next.js, React, TypeScript. Gujarat's trusted tech partner.",
    type: "website",
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - Web Development Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company Ahmedabad | DevFlow Technology",
    description: "Leading web development company in Ahmedabad, Gujarat. Custom web apps, Next.js, React, Node.js development.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/web-development-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
