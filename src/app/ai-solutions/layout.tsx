import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Enterprise AI Solutions & Integration | DevFlow",
  },
  description:
    "Leverage large language models, retrieval-augmented generation (RAG), and agentic workflows to automate operational drag.",
  keywords: [
    "Enterprise AI solutions",
    "AI integration services",
    "RAG systems development",
    "LLM application development",
    "agentic AI workflows",
    "AI automation solutions",
    "business AI integration",
    "GPT-4 RAG database"
  ],
  alternates: { canonical: "https://devflow.co.in/ai-solutions" },
};

export default function AiSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
