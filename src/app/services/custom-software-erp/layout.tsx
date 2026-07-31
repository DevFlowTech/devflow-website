import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Custom ERP & Enterprise Software Development | DevFlow",
  },
  description:
    "Streamline operations with tailormade enterprise systems. We build inventory, HR, accounting, and supply chain ERP software.",
};

export default function CustomSoftwareErpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
