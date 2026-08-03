import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact DevFlow Technology | Start Your Software Project",
  },
  description:
    "Get in touch with DevFlow Technology for a free project consultation on AI, web development, ERP, or mobile apps.",
  keywords: [
    "contact DevFlow Technology",
    "software development inquiry",
    "hire AI developers India",
    "web development quote",
    "custom software consultation",
    "DevFlow email",
    "start software project",
    "IT company contact India",
  ],
  alternates: { canonical: "https://www.devflow.co.in/contact" },
  openGraph: {
    title: "Contact DevFlow Technology | Free Project Consultation",
    description:
      "Start your project discovery with DevFlow Technology. Fill out our simple form and our engineering team will reach out within 24 hours.",
    url: "https://www.devflow.co.in/contact",
    type: "website",
  },
  twitter: {
    title: "Contact DevFlow Technology | Free Project Consultation",
    description:
      "Start your project discovery with DevFlow Technology. Fill out our simple form and our engineering team will reach out within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
