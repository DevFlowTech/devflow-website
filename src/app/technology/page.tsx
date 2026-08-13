import type { Metadata } from "next";
import Link from "next/link";
import { FiCode, FiServer, FiDatabase, FiCloud, FiCpu } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Technology Stack & Architecture Capabilities | DevFlow",
  description: "Explore the modern technology stack utilized by DevFlow — Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Redis, AWS, and AI architectures.",
  alternates: {
    canonical: "https://www.devflow.co.in/technology",
  },
};

export default function TechnologyPage() {
  const stackCategories = [
    {
      name: "Frontend Engineering",
      icon: FiCode,
      techs: [
        { name: "Next.js", purpose: "Production React Framework", rationale: "Delivers Server-Side Rendering (SSR), Static Site Generation (SSG), and sub-second page performance for top search rankings.", projects: "Enterprise web platforms, SaaS apps, marketing portals." },
        { name: "React 19", purpose: "UI Component Library", rationale: "Declarative, component-driven UI architecture with modern Concurrent React features.", projects: "Complex interactive dashboards, SaaS tools, portals." },
        { name: "TypeScript", purpose: "Strongly Typed JavaScript", rationale: "Prevents runtime type errors, guarantees clean API contracts, and accelerates codebase refactoring.", projects: "All production software codebases." },
      ]
    },
    {
      name: "Backend Engineering",
      icon: FiServer,
      techs: [
        { name: "Node.js / Express", purpose: "Asynchronous API Runtime", rationale: "High event-driven concurrency for low-latency REST/GraphQL APIs and WebSockets.", projects: "SaaS backends, real-time tracking portals, microservices." },
        { name: "Python / FastAPI", purpose: "AI & High-Performance Data Backend", rationale: "Native integration with machine learning libraries, asynchronous execution, and automated OpenAPI documentation.", projects: "AI pipelines, RAG engines, data scrapers, analytics." },
      ]
    },
    {
      name: "Database & Caching Layer",
      icon: FiDatabase,
      techs: [
        { name: "PostgreSQL", purpose: "Relational Database System", rationale: "Acid-compliant, highly reliable, and supports Row-Level Security (RLS) and JSONB data types.", projects: "ERP platforms, financial ledgers, multi-tenant SaaS." },
        { name: "Redis", purpose: "In-Memory Data Store", rationale: "Sub-millisecond caching layer for session management, API rate limiting, and task queues.", projects: "High-frequency caching, LLM prompt caching, job queues." },
        { name: "MongoDB", purpose: "Document Database System", rationale: "Flexible schema storage for unstructured logs and dynamic document records.", projects: "Content hubs, activity streams, unstructured logs." },
      ]
    },
    {
      name: "Cloud Infrastructure & DevOps",
      icon: FiCloud,
      techs: [
        { name: "AWS (Amazon Web Services)", purpose: "Cloud Infrastructure Host", rationale: "Enterprise reliability, VPC security, S3 storage, and KMS key management.", projects: "Scalable enterprise software deployment." },
        { name: "Docker", purpose: "Containerization Engine", rationale: "Guarantees identical execution environments from local developer machines to production servers.", projects: "Microservices, backend deployments, CI/CD." },
        { name: "Cloudflare / Vercel", purpose: "Global Edge Network & CDN", rationale: "Edge computing, global DDOS protection, sub-50ms asset delivery.", projects: "Next.js applications and static resources." },
      ]
    },
    {
      name: "Artificial Intelligence & RAG Stack",
      icon: FiCpu,
      techs: [
        { name: "OpenAI / Gemini APIs", purpose: "Commercial LLM Engines", rationale: "Reasoning capabilities for complex text analysis, document parsing, and agentic workflows.", projects: "Cognitive AI agents, automated summarizers, chatbots." },
        { name: "Pinecone / Qdrant / PgVector", purpose: "Vector Search Databases", rationale: "Sub-second similarity search across millions of text embedding vectors for RAG.", projects: "Enterprise document search, knowledge retrieval." },
        { name: "LangChain / LlamaIndex", purpose: "AI Agent Frameworks", rationale: "Structured prompt chains, persistent memory, and function-calling tool execution.", projects: "Autonomous multi-step AI agents." },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      <div className="section-container max-w-5xl mx-auto space-y-16 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">TECHNOLOGY</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ TECHNICAL INFRASTRUCTURE STACK ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            Engineered with Modern Software Stack.
          </h1>
          <p className="text-lg text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            We don&apos;t pick tools based on hype. Every library, database engine, and cloud provider in our stack is chosen for performance, security, maintainability, and scalability.
          </p>
        </div>

        {/* Stack Categories */}
        <div className="space-y-12">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.name} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                  <Icon className="w-5 h-5 text-devflow-green" />
                  <h2 className="text-2xl font-display font-medium text-white">{cat.name}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-6 rounded-xl glass-panel border border-white/[0.06] hover:border-devflow-green/20 transition-all space-y-3"
                    >
                      <span className="text-xs font-mono text-devflow-green block">[ {tech.purpose} ]</span>
                      <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                      <p className="text-xs text-devflow-gray-300 font-light leading-relaxed">
                        <strong className="text-white">Why We Use It:</strong> {tech.rationale}
                      </p>
                      <p className="text-[11px] text-devflow-gray-400 font-mono">
                        <strong className="text-devflow-gray-300">Typical Projects:</strong> {tech.projects}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-devflow-green/10 to-transparent border border-devflow-green/20 text-center space-y-4">
          <h3 className="text-2xl font-display font-medium text-white">Have Specific Tech Stack Requirements?</h3>
          <p className="text-xs text-devflow-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Our engineering team designs custom API integrations, legacy database migrations, and cloud container setups tailored to your requirements.
          </p>
          <Link href="/contact" className="btn-primary inline-block min-w-[200px]">
            Discuss Your Architecture
          </Link>
        </div>
      </div>
    </main>
  );
}
