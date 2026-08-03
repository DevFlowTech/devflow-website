import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Web Development Company Ahmedabad | DevFlow Technology",
  },
  description:
    "Leading web development company in Ahmedabad building custom web apps, enterprise portals, e-commerce, and PWAs with Next.js, React, and TypeScript.",
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
    description:
      "Top web development company in Ahmedabad building custom web apps, enterprise portals & e-commerce with Next.js, React, TypeScript. Gujarat's trusted tech partner.",
    type: "website",
    images: [
      {
        url: "https://www.devflow.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevFlow Technology - Web Development Company Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company Ahmedabad | DevFlow Technology",
    description:
      "Leading web development company in Ahmedabad, Gujarat. Custom web apps, Next.js, React, Node.js development.",
    images: ["https://www.devflow.co.in/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.devflow.co.in/web-development-company-ahmedabad",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
