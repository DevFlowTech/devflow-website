import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Automation & Workflow Integration | DevFlow",
  },
  description:
    "Automate repetitive workflows. We integrate LLMs, build custom AI chatbots, and design smart automation pipelines.",
};

export default function AiAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
