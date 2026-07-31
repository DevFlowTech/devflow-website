import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Continuous Maintenance & Support Services | DevFlow",
  },
  description:
    "Keep your enterprise applications secure, optimized, and up-to-date. Our developers offer reliable post-launch support and bug fixing.",
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
