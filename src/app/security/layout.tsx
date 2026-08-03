import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Security & Compliance Standards | DevFlow Technology",
  },
  description:
    "Understand our strict security protocols, including AES-256 encryption, zero-knowledge proofs, and SOC2/GDPR compliance.",
  alternates: { canonical: "https://www.devflow.co.in/security" },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
