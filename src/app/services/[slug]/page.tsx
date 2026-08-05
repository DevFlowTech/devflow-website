import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { FiCpu, FiLayers, FiCheck, FiInfo, FiChevronRight, FiList, FiTrendingUp } from "react-icons/fi";
import { buildSeoTitle } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | DevFlow",
    };
  }

  return {
    title: {
      absolute: buildSeoTitle(service.title, " | DevFlow Technology"),
    },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.devflow.co.in/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://www.devflow.co.in/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Dynamic SEO JSON-LD schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://www.devflow.co.in/services/${service.slug}#service`,
            "name": service.title,
            "description": service.metaDescription,
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.devflow.co.in/#localbusiness"
            },
            "areaServed": [
              { "@type": "Country", name: "India" },
              { "@type": "City", name: "Ahmedabad" }
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "0",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "0",
                "priceCurrency": "INR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "HUR"
                }
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.devflow.co.in/services/${service.slug}`
            }
          })
        }}
      />

      {/* Aurora overlays */}
      <div className="absolute top-[10%] right-[10%] aurora-bg-blue opacity-30 pointer-events-none" />
      <div className="absolute top-[60%] left-[5%] aurora-bg-gold opacity-15 pointer-events-none" />

      <div className="section-container max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <span className="text-devflow-green uppercase">{service.slug.replace("-", " ")}</span>
        </nav>

        {/* Hero Area / Title */}
        <div className="space-y-6">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ OUTCOME DRIVEN SERVICES ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            {service.summary}
          </p>
        </div>

        {/* TL;DR Summary Block (AEO / GEO Optimization) */}
        <div className="p-8 rounded-2xl glass-panel bg-gradient-to-br from-devflow-green/[0.03] to-transparent border border-devflow-green/20">
          <h2 className="text-xs font-mono text-devflow-green uppercase tracking-widest mb-4 flex items-center gap-2">
            <FiInfo className="w-4 h-4" />
            [ TL;DR KEY TAKEAWAYS ]
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.keyTakeaways.map((item, index) => (
              <li key={index} className="flex gap-3 text-sm text-devflow-gray-300">
                <FiCheck className="w-4 h-4 text-devflow-green shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Definition & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-xl font-display font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-devflow-green rounded-full" />
              Definition & Overview
            </h2>
            <p className="text-sm text-devflow-gray-300 leading-relaxed font-light">
              {service.definition}
            </p>
          </div>
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-xl font-display font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-devflow-green rounded-full" />
              Industry Challenges Solved
            </h2>
            <div className="space-y-3">
              {service.challenges.map((c, i) => (
                <div key={i} className="text-xs p-3 bg-white/[0.02] border border-white/[0.04] rounded-lg">
                  <strong className="block text-white mb-1">Issue: {c.issue}</strong>
                  <span className="text-devflow-gray-400">Solution: {c.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pros & Cons Decision Matrix (GEO Element) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-xl">
            <h3 className="text-sm font-mono text-devflow-green mb-4">[ SYSTEM PROS ]</h3>
            <ul className="space-y-3 text-xs text-devflow-gray-300">
              {service.pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-devflow-green">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-xl">
            <h3 className="text-sm font-mono text-devflow-gold mb-4">[ SYSTEM CONSIDERATIONS ]</h3>
            <ul className="space-y-3 text-xs text-devflow-gray-300">
              {service.cons.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-devflow-gold">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">System Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-white/[0.06] bg-devflow-charcoal hover:border-devflow-green/20 transition-all duration-300">
                <h3 className="text-base font-semibold text-white mb-2">{feature.name}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GEO Optimization Comparison Table */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">Decision Analysis Matrix</h2>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/[0.06] text-devflow-green">
                  {service.comparisonTable.headers.map((h, i) => (
                    <th key={i} className="p-4 font-mono font-medium">{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.comparisonTable.rows.map((row, index) => (
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

        {/* Process Timeline */}
        <div className="space-y-8 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">Engineering Process & Milestones</h2>
          <div className="relative border-l border-white/[0.08] ml-4 space-y-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative pl-8 group">
                <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-devflow-black border-2 border-devflow-green/50 text-devflow-green font-mono text-xs flex items-center justify-center group-hover:border-devflow-green transition-colors">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light max-w-xl">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics and Cost Factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-devflow-green">[ COST VARIABLES ]</h3>
            <ul className="space-y-2 text-xs text-devflow-gray-300">
              {service.costFactors.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-devflow-green">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-devflow-green">[ PROJECT CHECKLIST ]</h3>
            <ul className="space-y-2 text-xs text-devflow-gray-300">
              {service.checklist.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-devflow-green">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expert Insights */}
        <div className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01]">
          <h3 className="text-xs font-mono text-devflow-gray-400 mb-2">EXPERT ENGINEERING INSIGHT</h3>
          <p className="text-xs text-devflow-gray-300 italic font-light leading-relaxed">
          &ldquo;{service.expertInsights}&rdquo;
          </p>
        </div>

        {/* Accordion FAQ Section (AEO Target) */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-display font-semibold text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="p-5 rounded-xl border border-white/[0.06] bg-devflow-charcoal">
                <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-4 pt-8">
          <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-wider">Engineered With</h3>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-devflow-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Studies Link */}
        <div className="space-y-4 pt-8">
          <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-wider">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.caseStudies.map((cs, i) => (
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

        {/* Other Services Navigation Widget */}
        <div className="space-y-4 pt-8 border-t border-white/[0.04] mt-8">
          <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-wider">Other Capabilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.values(servicesData)
              .filter((item) => item.slug !== service.slug)
              .map((otherService) => (
                <Link
                  key={otherService.slug}
                  href={`/services/${otherService.slug}`}
                  className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] hover:border-devflow-green/20 hover:bg-white/[0.02] transition-all text-center block group"
                >
                  <span className="text-[10px] font-mono text-devflow-gray-300 group-hover:text-devflow-green transition-colors">
                    {otherService.title.split(" Company")[0].split(" in USA")[0]}
                  </span>
                </Link>
              ))}
          </div>
        </div>

        {/* Bottom Call To Action Block */}
        <div className="pt-12 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-devflow-green/10 to-transparent border border-devflow-green/20 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-white">Let&apos;s Design Your Solution</h3>
            <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">
              Get in touch with Bhavin Rajput (CTO) and Prince Gajjar (CEO) to draft your product blueprint, database logic, and timeline estimates.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-devflow-green text-devflow-black font-mono font-medium rounded-lg text-xs hover:bg-devflow-green/90 transition-colors">
              {service.ctaText} &rarr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
