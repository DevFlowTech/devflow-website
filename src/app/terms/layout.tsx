import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | DevFlow Technology",
  },
  description:
    "DevFlow Technology's terms of service. Understand the legal framework governing the use of our platforms and professional services.",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Terms of Service | DevFlow Technology",
    description:
      "Review the terms and conditions for using DevFlow Technology's engineering platforms and professional services.",
    url: "https://devflow.co.in/terms",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
