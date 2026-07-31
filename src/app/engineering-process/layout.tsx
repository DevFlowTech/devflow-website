import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Our Engineering Process | DevFlow Technology",
  },
  description:
    "Learn about our development velocity, agile sprints, system architectures, and complete source code ownership standards.",
};

export default function EngineeringProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
