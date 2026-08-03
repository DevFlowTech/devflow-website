import type { Metadata } from "next";
import { projects } from "@/data/projectData";

// Compose a keyword-rich meta description (<= 155 chars) for a case study
// from its short description, measured outcome, and tech stack.
function buildCaseStudyDescription(project: {
  description: string;
  results: string[];
  tech: string[];
}): string {
  const clean = (s: string) =>
    s.replace(/\s+/g, " ").replace(/\.+$/, "").trim();
  const desc = clean(project.description);
  const outcome = project.results[0] ? clean(project.results[0]) : "";
  const tech = project.tech.slice(0, 3).join(", ");
  let text = outcome ? `${desc}. ${outcome}.` : `${desc}.`;
  if (text.length + tech.length + 14 <= 155) {
    text = `${text} Built with ${tech} — DevFlow case study.`;
  }
  if (text.length > 155) {
    text = text.slice(0, 152).replace(/\s+\S*$/, "") + ".";
  }
  return text;
}

interface WorkDetailLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
    description: buildCaseStudyDescription(project),
    keywords: [
      project.title.toLowerCase(),
      project.category.toLowerCase(),
      "case study",
      "web development project",
      ...project.tech,
      "DevFlow portfolio",
      "custom software",
    ],
    alternates: {
      canonical: `https://www.devflow.co.in/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Case Study & Results | DevFlow Technology`,
      description: buildCaseStudyDescription(project),
      url: `https://www.devflow.co.in/work/${project.slug}`,
      type: "article",
    },
    twitter: {
      title: `${project.title} - Case Study | DevFlow Technology`,
      description: buildCaseStudyDescription(project),
    },
  };
}

export default function WorkDetailLayout({
  children,
}: WorkDetailLayoutProps) {
  return <>{children}</>;
}
