import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Enterprise AI Solutions & Integration | DevFlow",
  },
  description:
    "Leverage large language models, retrieval-augmented generation (RAG), and agentic workflows to automate operational drag.",
};

export default function AiSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
