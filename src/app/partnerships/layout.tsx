import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Enterprise Tech Partnerships | DevFlow Technology",
  },
  description:
    "Accelerate development with white-label engineering and strategic partnerships. Scale your operations with managed dedicated developers.",
  alternates: { canonical: "https://www.devflow.co.in/partnerships" },
};

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
