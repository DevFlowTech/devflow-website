import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "SaaS Product Development Services | DevFlow",
  },
  description:
    "Launch your scalable web product. We manage architecture, database schemas, responsive designs, and payments integration.",
  alternates: {
    canonical: "https://www.devflow.co.in/services/saas-development",
  },
};

export default function SaasDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
