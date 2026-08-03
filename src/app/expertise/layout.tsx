import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Our Expertise & Tech Stack | DevFlow Technology",
  },
  description:
    "Explore DevFlow's expertise across AI, custom software, ERP, SaaS, web and mobile development, cloud, and technical SEO for enterprises in India.",
  alternates: { canonical: "https://www.devflow.co.in/expertise" },
  openGraph: {
    title: "Our Expertise & Tech Stack | DevFlow Technology",
    description:
      "Explore DevFlow's expertise across AI, custom software, ERP, SaaS, web and mobile development, cloud, and technical SEO.",
    url: "https://www.devflow.co.in/expertise",
    type: "website",
  },
  twitter: {
    title: "Our Expertise & Tech Stack | DevFlow Technology",
    description:
      "Explore DevFlow's expertise across AI, custom software, ERP, SaaS, and web development.",
  },
};

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
