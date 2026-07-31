import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "99.9% Uptime SLA & Maintenance | DevFlow",
  },
  description:
    "Ensure high availability and continuous operational support with our service level agreement policies and system maintenance.",
};

export default function SlaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
