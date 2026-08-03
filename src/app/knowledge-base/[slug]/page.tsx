import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { knowledgeHubData } from "@/data/knowledgeHubData";
import ReactMarkdown from "react-markdown";
import { buildSeoTitle } from "@/lib/utils";
import { FiChevronRight, FiCheck, FiInfo } from "react-icons/fi";

interface KnowledgePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(knowledgeHubData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: KnowledgePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = knowledgeHubData[slug];

  if (!article) {
    return {
      title: "Article Not Found | DevFlow Hub",
    };
  }

  return {
    title: {
      absolute: buildSeoTitle(article.title, " | DevFlow Knowledge Hub"),
    },
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://www.devflow.co.in/knowledge-base/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.devflow.co.in/knowledge-base/${article.slug}`,
      type: "article",
    },
  };
}

export default async function KnowledgePage({ params }: KnowledgePageProps) {
  const { slug } = await params;
  const article = knowledgeHubData[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Article dynamic structured schema markup (AEO/GEO target) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `https://www.devflow.co.in/knowledge-base/${article.slug}#article`,
            "headline": article.title,
            "description": article.metaDescription,
            "datePublished": article.date,
            "author": {
              "@type": "Organization",
              "name": "DevFlow Team",
              "url": "https://www.devflow.co.in/about"
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.devflow.co.in/#organization"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.devflow.co.in/knowledge-base/${article.slug}`
            }
          })
        }}
      />

      {/* Aurora layers */}
      <div className="absolute top-[10%] right-[10%] aurora-bg-blue opacity-30 pointer-events-none" />
      <div className="absolute top-[60%] left-[5%] aurora-bg-gold opacity-15 pointer-events-none" />

      <div className="section-container max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <Link href="/knowledge-base" className="hover:text-white transition-colors">KNOWLEDGE HUB</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <span className="text-devflow-green uppercase">{article.slug.replace("-", " ")}</span>
        </nav>

        {/* Article Meta Header */}
        <div className="space-y-6">
          <span className="px-3 py-1 bg-devflow-green/10 text-devflow-green text-xs font-mono rounded-full border border-devflow-green/20">
            {article.category.toUpperCase()}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4 pb-6 border-b border-white/[0.06] text-xs font-mono text-devflow-gray-400">
            <span>BY DEVFLOW ENGINEERING</span>
            <span>•</span>
            <span>PUBLISHED {article.date.toUpperCase()}</span>
            <span>•</span>
            <span>{article.readTime.toUpperCase()}</span>
          </div>
        </div>

        {/* AEO Answer Block & TL;DR (Answers user questions directly in 40-60 words) */}
        <div className="p-8 rounded-xl border border-devflow-green/20 bg-gradient-to-br from-devflow-green/[0.02] to-transparent space-y-4">
          <h2 className="text-xs font-mono text-devflow-green uppercase tracking-widest flex items-center gap-2">
            <FiInfo className="w-4 h-4" />
            [ TL;DR SUMMARY // ANSWER ENGINE BLOCK ]
          </h2>
          <p className="text-sm text-white font-medium leading-relaxed">
            {article.summary}
          </p>
          <hr className="border-white/[0.08]" />
          <h3 className="text-[10px] font-mono text-devflow-gray-400 tracking-wider">KEY TAKEAWAYS</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-devflow-gray-300">
            {article.keyTakeaways.map((item, index) => (
              <li key={index} className="flex gap-2">
                <FiCheck className="w-4 h-4 text-devflow-green shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content (Markdown Renderer) */}
        <article className="prose prose-invert max-w-none text-sm text-devflow-gray-300 leading-relaxed font-light space-y-6">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-display font-semibold text-white mt-12 mb-6 border-b border-white/[0.04] pb-2">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-display font-semibold text-white mt-8 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-devflow-green rounded-full" />
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-display font-semibold text-white mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="leading-relaxed mb-6 font-light">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 pl-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 pl-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="font-light text-devflow-gray-300">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-devflow-green pl-6 py-2 my-6 italic text-devflow-gray-400 bg-white/[0.01] rounded-r-lg">
                  {children}
                </blockquote>
              )
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        {/* Decisions comparison tables */}
        {article.comparisonTable && (
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-display font-semibold text-white">Comparison Matrix</h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/[0.06] text-devflow-green">
                    {article.comparisonTable.headers.map((h, i) => (
                      <th key={i} className="p-4 font-mono font-medium">{h.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {article.comparisonTable.rows.map((row, index) => (
                    <tr key={index} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.01] transition-colors">
                      {row.map((val, cellIndex) => (
                        <td key={cellIndex} className="p-4 text-devflow-gray-300">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Cost variables / checklists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {article.costFactors && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-devflow-green">[ KEY COST INFLUENCERS ]</h3>
              <ul className="space-y-2 text-xs text-devflow-gray-300">
                {article.costFactors.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-devflow-green">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {article.checklist && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-devflow-green">[ SYSTEM ROADMAP CHECKLIST ]</h3>
              <ul className="space-y-2 text-xs text-devflow-gray-300">
                {article.checklist.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-devflow-green">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Expert Insights */}
        <div className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01]">
          <h3 className="text-xs font-mono text-devflow-gray-400 mb-2">EXPERT ADVICE</h3>
          <p className="text-xs text-devflow-gray-300 italic font-light leading-relaxed">
            &ldquo;{article.expertInsights}&rdquo;
          </p>
        </div>

        {/* Accordion FAQ (AEO target) */}
        <div className="space-y-6 pt-6 border-t border-white/[0.04]">
          <h2 className="text-2xl font-display font-semibold text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {article.faqs.map((faq, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/[0.06] bg-devflow-charcoal">
                <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Contact Footer */}
        <div className="pt-12 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-devflow-green/10 to-transparent border border-devflow-green/20 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-white">Need Expert Software Architecture?</h3>
            <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">
              Consult with Prince Gajjar and Bhavin Rajput for a custom technical blueprint audit and project scope estimation.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-devflow-green text-devflow-black font-mono font-medium rounded-lg text-xs hover:bg-devflow-green/90 transition-colors">
              Schedule Free Consultation &rarr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
