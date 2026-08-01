import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { FiCpu, FiCheck, FiChevronRight, FiAlertCircle, FiSettings, FiActivity } from "react-icons/fi";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    return {
      title: "Industry Not Found | DevFlow",
    };
  }

  return {
    title: `${industry.title} | DevFlow Technology`,
    description: industry.metaDescription,
    keywords: industry.keywords,
    openGraph: {
      title: industry.title,
      description: industry.metaDescription,
      url: `https://devflow.co.in/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Schema LD structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://devflow.co.in/industries/${industry.slug}#webpage`,
            "name": industry.title,
            "description": industry.metaDescription,
            "publisher": {
              "@type": "Organization",
              "@id": "https://devflow.co.in/#organization"
            }
          })
        }}
      />

      {/* Aurora layers */}
      <div className="absolute top-[15%] left-[5%] aurora-bg-blue opacity-30 pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] aurora-bg-gold opacity-15 pointer-events-none" />

      <div className="section-container max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <Link href="/industries" className="hover:text-white transition-colors">INDUSTRIES</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <span className="text-devflow-green uppercase">{industry.slug}</span>
        </nav>

        {/* Hero Title Area */}
        <div className="space-y-6">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ TAILORED SECTOR EXPERTISE ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            {industry.title}
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            {industry.summary}
          </p>
        </div>

        {/* TL;DR Summary Block */}
        <div className="p-8 rounded-2xl glass-panel bg-gradient-to-br from-devflow-green/[0.03] to-transparent border border-devflow-green/20">
          <h2 className="text-xs font-mono text-devflow-green uppercase tracking-widest mb-4 flex items-center gap-2">
            <FiAlertCircle className="w-4 h-4" />
            [ SECTOR HIGHLIGHTS & INSIGHTS ]
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.keyTakeaways.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm text-devflow-gray-300">
                <FiCheck className="w-4 h-4 text-devflow-green shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Industry Workflows & Compliance Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
          <div className="md:col-span-6 p-6 rounded-xl border border-white/[0.06] bg-white/[0.01]">
            <h2 className="text-sm font-mono text-devflow-green mb-4 flex items-center gap-2">
              <FiSettings className="w-4 h-4" />
              [ CUSTOM SECTOR WORKFLOWS ]
            </h2>
            <ul className="space-y-3 text-xs text-devflow-gray-300">
              {industry.workflows.map((flow, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-devflow-green font-mono">{i + 1}.</span>
                  {flow}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6 p-6 rounded-xl border border-white/[0.06] bg-white/[0.01]">
            <h2 className="text-sm font-mono text-devflow-green mb-4 flex items-center gap-2">
              <FiActivity className="w-4 h-4" />
              [ REGULATORY COMPLIANCE FRAMEWORKS ]
            </h2>
            <ul className="space-y-3 text-xs text-devflow-gray-300">
              {industry.compliance.map((comp, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green mt-1.5 shrink-0" />
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Definition & Core Overview */}
        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">Definition & Industry Standards</h2>
          <p className="text-sm text-devflow-gray-300 leading-relaxed font-light max-w-3xl">
            {industry.definition}
          </p>
          <div className="text-sm text-devflow-gray-400 font-light leading-relaxed max-w-3xl pt-2">
            {industry.content}
          </div>
        </div>

        {/* Pros & Cons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-xl">
            <h3 className="text-sm font-mono text-devflow-green mb-4">[ PROS OF BESPOKE SOLUTIONS ]</h3>
            <ul className="space-y-3 text-xs text-devflow-gray-300">
              {industry.pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-devflow-green">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-xl">
            <h3 className="text-sm font-mono text-devflow-gold mb-4">[ OUT-OF-BOX PLATFORM LIMITATIONS ]</h3>
            <ul className="space-y-3 text-xs text-devflow-gray-300">
              {industry.cons.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-devflow-gold">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features & Integration Modules */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl font-display font-semibold text-white">Operational Features</h2>
            <div className="grid grid-cols-1 gap-4">
              {industry.features.map((feature, index) => (
                <div key={index} className="p-5 rounded-xl border border-white/[0.06] bg-devflow-charcoal">
                  <h3 className="text-sm font-semibold text-white mb-1">{feature.name}</h3>
                  <p className="text-xs text-devflow-gray-400 font-light leading-relaxed">{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-2xl font-display font-semibold text-white">Target Integrations</h2>
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-4">
              {industry.integrations.map((item, index) => (
                <div key={index} className="flex gap-3 items-center text-xs text-devflow-gray-300">
                  <span className="w-2 h-2 bg-devflow-green rounded-full shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">Sector Development Timeline</h2>
          <div className="relative border-l border-white/[0.08] ml-4 space-y-8">
            {industry.process.map((step, index) => (
              <div key={index} className="relative pl-8 group">
                <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-devflow-black border-2 border-devflow-green/50 text-devflow-green font-mono text-xs flex items-center justify-center">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light max-w-xl">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Link */}
        <div className="space-y-4 pt-8">
          <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-wider">Industry Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.caseStudies.map((cs, i) => (
              <Link key={i} href={cs.link} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-devflow-green/20 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="text-xs font-semibold text-white mb-1">{cs.title}</h4>
                  <p className="text-[10px] text-devflow-gray-400">{cs.outcome}</p>
                </div>
                <FiChevronRight className="text-devflow-gray-500 group-hover:text-devflow-green group-hover:translate-x-0.5 transition-all w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {industry.faqs.map((faq, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/[0.06] bg-devflow-charcoal">
                <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-4 pt-8">
          <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-wider">Technology Stack Alignment</h3>
          <div className="flex flex-wrap gap-2">
            {industry.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-devflow-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Call To Action Block */}
        <div className="pt-12 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-devflow-green/10 to-transparent border border-devflow-green/20 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-white">Get in Touch with our Sector Engineers</h3>
            <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">
              Let's build compliant database systems, automated reporting, and secure dashboards matching your exact business workflows.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-devflow-green text-devflow-black font-mono font-medium rounded-lg text-xs hover:bg-devflow-green/90 transition-colors">
              {industry.ctaText} &rarr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
