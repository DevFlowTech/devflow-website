import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Offshore Software Development Center India | DevFlow",
  },
  description:
    "Lower development costs while maximizing velocity. Get access to top software architects and dedicated engineers in India.",
  keywords: [
    "offshore software development",
    "offshore development center India",
    "offshore IT outsourcing",
    "custom software development outsourcing",
    "offshore developers India",
    "hire offshore coding team",
    "outsource software engineering"
  ],
  alternates: { canonical: "https://www.devflow.co.in/offshore-development" },
};

export default function OffshoreDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
