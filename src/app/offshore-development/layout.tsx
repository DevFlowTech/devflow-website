import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Offshore Software Development Center India | DevFlow",
  },
  description:
    "Lower development costs while maximizing velocity. Get access to top software architects and dedicated engineers in India.",
};

export default function OffshoreDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
