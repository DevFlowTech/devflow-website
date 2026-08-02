import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Software & AI Development Company Ahmedabad | DevFlow Technology",
  },
  description:
    "DevFlow Technology is an engineering-first custom software development company in Ahmedabad. We build custom ERP systems, AI automation pipelines, SaaS web apps, and dedicated development squads.",
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
    canonical: "https://devflow.co.in",
    languages: {
      "en-IN": "https://devflow.co.in",
      "hi-IN": "https://devflow.co.in",
      "gu-IN": "https://devflow.co.in",
      "en-US": "https://devflow.co.in",
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
