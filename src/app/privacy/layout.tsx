import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | DevFlow Technology",
  },
  description:
    "DevFlow Technology's privacy policy outlines how we collect, process, and protect your data. Our commitment to data security and privacy compliance.",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Privacy Policy | DevFlow Technology",
    description:
      "Learn about how DevFlow Technology handles your data with enterprise-grade security and privacy practices.",
    url: "https://devflow.co.in/privacy",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
