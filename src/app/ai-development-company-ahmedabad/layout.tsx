import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development Company Ahmedabad | Top AI Solutions & LLM Integration",
  description: "Leading AI development company in Ahmedabad, Gujarat. Custom LLM integration, RAG systems, AI chatbots, generative AI solutions, and ML models. Serving Ahmedabad, Gandhinagar, Surat, Vadodara & all Gujarat.",
  keywords: [
    "AI development company Ahmedabad",
    "AI development company Gujarat",
    "artificial intelligence company Ahmedabad",
    "AI solutions Ahmedabad",
    "LLM integration Ahmedabad",
    "RAG systems development Ahmedabad",
    "AI chatbot development Ahmedabad",
    "generative AI company Ahmedabad",
    "machine learning company Ahmedabad",
    "AI automation Ahmedabad",
    "AI consulting Ahmedabad",
    "custom AI solutions Gujarat",
  ],
  openGraph: {
    title: "AI Development Company Ahmedabad | DevFlow Technology",
    description: "Top AI development company in Ahmedabad building custom LLM solutions, RAG systems, AI chatbots & generative AI applications for businesses across Gujarat.",
    type: "website",
    images: [{ url: "https://devflow.co.in/og-image.png", width: 1200, height: 630, alt: "DevFlow Technology - AI Development Company Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company Ahmedabad | DevFlow Technology",
    description: "Leading AI development company in Ahmedabad, Gujarat. Custom LLM integration, RAG systems, AI chatbots & generative AI solutions.",
    images: ["https://devflow.co.in/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devflow.co.in/ai-development-company-ahmedabad" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
