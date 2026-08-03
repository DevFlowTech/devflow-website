import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Frequently Asked Questions | DevFlow Technology",
  },
  description:
    "Answers on custom software, AI development, ERP systems, SaaS, GEO/AEO optimization, and API automation from the DevFlow engineering team in Ahmedabad.",
  alternates: { canonical: "https://www.devflow.co.in/faq" },
  openGraph: {
    title: "Frequently Asked Questions | DevFlow Technology",
    description:
      "Answers on custom software, AI development, ERP systems, SaaS, GEO/AEO optimization, and API automation from the DevFlow engineering team in Ahmedabad.",
    url: "https://www.devflow.co.in/faq",
    type: "website",
  },
  twitter: {
    title: "Frequently Asked Questions | DevFlow Technology",
    description:
      "Answers on custom software, AI development, ERP systems, SaaS, and automation from the DevFlow engineering team.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
