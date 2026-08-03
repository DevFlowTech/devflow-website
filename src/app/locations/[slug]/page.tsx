import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { locationsData } from "@/data/locationsData";
import { FiMapPin, FiPhone, FiMail, FiChevronRight, FiCheck } from "react-icons/fi";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData[slug];

  if (!location) {
    return {
      title: "Location Not Found | DevFlow",
    };
  }

  return {
    title: `${location.title} | DevFlow Technology`,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `https://www.devflow.co.in/locations/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `https://www.devflow.co.in/locations/${location.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationsData[slug];

  if (!location) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Dynamic LocalBusiness Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": `https://www.devflow.co.in/locations/${location.slug}#localbusiness`,
            "name": location.napAddress.name,
            "url": `https://www.devflow.co.in/locations/${location.slug}`,
            "telephone": location.napAddress.phone,
            "email": location.napAddress.email,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.napAddress.locality,
              "addressRegion": location.napAddress.region,
              "postalCode": location.napAddress.postalCode,
              "addressCountry": location.napAddress.country,
              "streetAddress": location.napAddress.street
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.0225",
              "longitude": "72.5714"
            }
          })
        }}
      />

      {/* Aurora layers */}
      <div className="absolute top-[10%] right-[10%] aurora-bg-blue opacity-30 pointer-events-none" />
      <div className="absolute top-[60%] left-[5%] aurora-bg-gold opacity-15 pointer-events-none" />

      <div className="section-container max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <FiChevronRight className="w-3.5 h-3.5" />
          <span className="text-devflow-gray-500">LOCATIONS</span>
          <FiChevronRight className="w-3.5 h-3.5" />
          <span className="text-devflow-green uppercase">{location.name}</span>
        </nav>

        {/* Hero Title */}
        <div className="space-y-6">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ REGIONAL SERVICE CENTER ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            {location.title}
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            {location.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Left Column: Localized Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Core localized description */}
            <div className="prose prose-invert max-w-none text-sm text-devflow-gray-300 font-light leading-relaxed space-y-4">
              <h2 className="text-xl font-display font-semibold text-white mb-4">Enterprise Engineering in {location.name}</h2>
              <p>{location.content}</p>
            </div>

            {/* Testimonials */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-widest">[ LOCAL CLIENT TESTIMONIALS ]</h3>
              {location.testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.01] relative">
                  <p className="text-sm italic text-devflow-gray-300 font-light mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-devflow-green">—</span>
                    <strong className="text-white">{t.clientName}</strong>
                    <span className="text-devflow-gray-500">({t.company})</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Local Case Studies */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs font-mono text-devflow-gray-400 uppercase tracking-widest">[ REGIONAL CASE STUDIES ]</h3>
              <div className="grid grid-cols-1 gap-4">
                {location.caseStudies.map((cs, i) => (
                  <Link key={i} href={cs.link} className="p-4 rounded-xl border border-white/[0.06] bg-devflow-charcoal hover:border-devflow-green/20 transition-all flex items-center justify-between group">
                    <div>
                      <h4 className="text-xs font-semibold text-white mb-1">{cs.title}</h4>
                      <p className="text-[10px] text-devflow-gray-400">{cs.outcome}</p>
                    </div>
                    <FiChevronRight className="text-devflow-gray-500 group-hover:text-devflow-green group-hover:translate-x-0.5 transition-all w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Map Embed, NAP Address, Landmarks */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Map Frame */}
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] relative bg-white/[0.01]">
              <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`DevFlow Google Map Location in ${location.name}`}
              ></iframe>
            </div>

            {/* NAP Citation Card */}
            <div className="p-6 rounded-xl border border-devflow-green/20 bg-gradient-to-br from-devflow-green/[0.02] to-transparent space-y-4">
              <h3 className="text-sm font-mono text-devflow-green">[ NAP CITATION COMPLIANCE ]</h3>
              
              <div className="space-y-3 text-xs font-light text-devflow-gray-300">
                <div className="flex gap-3">
                  <FiMapPin className="w-4 h-4 text-devflow-green shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">{location.napAddress.name}</strong>
                    <span>{location.napAddress.street}, {location.napAddress.locality}, {location.napAddress.region} {location.napAddress.postalCode}, {location.napAddress.country}</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <FiPhone className="w-4 h-4 text-devflow-green shrink-0" />
                  <div className="flex flex-col">
                    {location.napAddress.phone.map((p, idx) => (
                      <span key={idx}>{p}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <FiMail className="w-4 h-4 text-devflow-green shrink-0" />
                  <span>{location.napAddress.email}</span>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.01] space-y-4">
              <h3 className="text-sm font-mono text-devflow-green">[ LOCAL LANDMARKS & SITES ]</h3>
              <ul className="space-y-2 text-xs text-devflow-gray-300">
                {location.nearbyLandmarks.map((landmark, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-green shrink-0" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Dynamic CTA Block */}
        <div className="pt-12 text-center border-t border-white/[0.04]">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-devflow-green/10 to-transparent border border-devflow-green/20 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-white">Let&apos;s Connect in {location.name}</h3>
            <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">
              Contact our team of developers for an instant software estimate, system audit checklist, and deployment roadmap.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-devflow-green text-devflow-black font-mono font-medium rounded-lg text-xs hover:bg-devflow-green/90 transition-colors">
              {location.ctaText} &rarr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
