import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Enterprise SEO, GEO & AEO Services | DevFlow",
  },
  description:
    "Rank at the top of Google and AI search engines. We optimize content for answer engines and generative search tools.",
};

export default function EnterpriseSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
