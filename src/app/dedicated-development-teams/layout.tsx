import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Hire Dedicated Software Developers | DevFlow",
  },
  description:
    "Scale your engineering department with managed dedicated developers. Achieve high velocity with agile integration and standard code.",
};

export default function DedicatedTeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
