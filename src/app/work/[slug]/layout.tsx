import type { Metadata } from "next";
import { projects } from "@/data/projectData";

interface WorkDetailLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: WorkDetailLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: {
        absolute: "Project Not Found | DevFlow Technology",
      },
    };
  }

  return {
    title: {
      absolute: `${project.title} - Case Study | DevFlow Technology`,
    },
    description: project.longDescription,
    keywords: [
      project.title.toLowerCase(),
      project.category.toLowerCase(),
      "case study",
      "web development project",
      ...project.tech,
      "DevFlow portfolio",
      "custom software",
    ],
    openGraph: {
      title: `${project.title} - Case Study & Results | DevFlow Technology`,
      description: project.longDescription,
      url: `https://devflow.co.in/work/${project.slug}`,
      type: "article",
    },
    twitter: {
      title: `${project.title} - Case Study | DevFlow Technology`,
      description: project.longDescription,
    },
  };
}

export default function WorkDetailLayout({
  children,
}: WorkDetailLayoutProps) {
  return <>{children}</>;
}
