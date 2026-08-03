import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Software & AI Development, Ahmedabad | DevFlow",
  },
  description:
    "DevFlow Technology is an engineering-first custom software development company in Ahmedabad, building ERP systems, AI automation, and SaaS web apps.",
  keywords: [
    "custom software development company Ahmedabad",
    "AI development company Ahmedabad",
    "ERP software India",
    "SaaS development product",
    "IT services Ahmedabad",
    "DevFlow Technology",
    "software developers Ahmedabad",
    "AI agents development"
  ],
  alternates: {
    canonical: "https://www.devflow.co.in",
  },
};

export default function Home() {
  return <HomeClient />;
}
