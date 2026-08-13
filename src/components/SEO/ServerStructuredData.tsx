/**
 * ServerStructuredData — Server Component
 *
 * Renders the core global JSON-LD schemas that MUST appear in the initial
 * server HTML for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) which
 * do NOT execute JavaScript. Google also benefits from seeing schemas in the
 * first-pass HTML rather than waiting for its rendering queue.
 *
 * Only schemas that require NO pathname / client state belong here.
 * Page-conditional schemas remain in the client-side StructuredData.tsx.
 */

const siteUrl = "https://www.devflow.co.in";

// ========== Organization Schema (Base Entity) ==========
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DevFlow Technology",
  alternateName: ["DevFlow", "DevFlow Tech", "DevFlow Technology Pvt Ltd"],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Full-service IT company delivering AI solutions, enterprise ERP systems, custom software development, and digital transformation services for businesses worldwide. Based in Ahmedabad, Gujarat.",
  foundingDate: "2026",
  founders: [
    {
      "@type": "Person",
      name: "Prince Gajjar",
      jobTitle: "CEO & Co-Founder",
      url: `${siteUrl}/about`,
      sameAs: [
        "https://github.com/princegajjar",
        "https://linkedin.com/in/princegajjar",
      ],
    },
    {
      "@type": "Person",
      name: "Bhavin Rajput",
      jobTitle: "CTO & Co-Founder",
      url: `${siteUrl}/about`,
      sameAs: ["https://linkedin.com/in/bhavinrajput"],
    },
  ],
  sameAs: [
    "https://twitter.com/devflowtechnology",
    "https://linkedin.com/company/devflowtechnology",
    "https://github.com/devflowtechnology",
    siteUrl,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@devflow.co.in",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Gujarati"],
      areaServed: ["IN", "US", "GB", "AE", "AU"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382210",
    streetAddress:
      "Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway",
  },
  brand: {
    "@type": "Brand",
    name: "DevFlow",
    slogan: "Custom software, clean code, fast execution.",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Agentic AI",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "Web Development",
    "Mobile App Development",
    "Enterprise Software",
    "ERP Systems",
    "SaaS Development",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Digital Transformation",
    "Generative AI",
    "LLM Integration",
    "SEO Services",
    "Local SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "AI Search Optimization",
    "Technical SEO",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: "5-10" },
  areaServed: [
    {
      "@type": "City",
      name: "Ahmedabad",
      containedInPlace: { "@type": "State", name: "Gujarat" },
    },
    {
      "@type": "City",
      name: "Gandhinagar",
      containedInPlace: { "@type": "State", name: "Gujarat" },
    },
    {
      "@type": "City",
      name: "Surat",
      containedInPlace: { "@type": "State", name: "Gujarat" },
    },
    {
      "@type": "City",
      name: "Vadodara",
      containedInPlace: { "@type": "State", name: "Gujarat" },
    },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Australia" },
  ],
};

// ========== LocalBusiness Citation Schema (NAP Consistency) ==========
const localBusinessCitationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#citation`,
  name: "DevFlow Technology",
  alternateName: "DevFlow Technology Ahmedabad",
  url: siteUrl,
  telephone: ["+91-97261-13311", "+91-63550-43103"],
  email: "info@devflow.co.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382210",
    streetAddress:
      "Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225",
    longitude: "72.5714",
  },
  sameAs: [
    "https://www.justdial.com/Ahmedabad/DevFlow-Technology-SG-Highway/9999PXXXXX",
    "https://www.indiamart.com/devflow-technology/",
    "https://www.sulekha.com/devflow-technology-ahmedabad",
    "https://www.crunchbase.com/organization/devflow-technology",
    "https://www.google.com/maps/place/DevFlow+Technology/@23.0225,72.5714",
  ],
  knowsAbout: [
    "AI Development Company Ahmedabad",
    "Software Development Company Ahmedabad",
    "Web Development Company Ahmedabad",
    "Mobile App Development Company Ahmedabad",
    "SEO Company Ahmedabad",
    "IT Company Ahmedabad",
    "IT Services Ahmedabad",
  ],
};

// ========== WebSite Schema with Speakable and Entity Links (GEO) ==========
// ponytail: SearchAction removed — no /search page exists. Adding a dead
// SearchAction triggers Google warnings and degrades schema trust.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "DevFlow Technology - AI Agency & Web Development Company Ahmedabad",
  url: siteUrl,
  description:
    "Leading AI agency and IT company in Ahmedabad, Gujarat. We build AI solutions, ERP systems, web apps, mobile apps, and provide cloud services & SEO. Top software development company in Gujarat.",
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: ["en-US", "en-IN", "hi-IN", "gu-IN"],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      "h1",
      "h2",
      ".speakable-content",
      ".hero-headline",
      ".section-title",
    ],
  },
  about: [
    {
      "@type": "Thing",
      name: "Artificial Intelligence",
      sameAs: [
        "https://en.wikipedia.org/wiki/Artificial_intelligence",
        "https://www.wikidata.org/wiki/Q11660",
      ],
    },
    {
      "@type": "Thing",
      name: "Web Development",
      sameAs: [
        "https://en.wikipedia.org/wiki/Web_development",
        "https://www.wikidata.org/wiki/Q386275",
      ],
    },
    {
      "@type": "Thing",
      name: "Enterprise Resource Planning",
      sameAs: [
        "https://en.wikipedia.org/wiki/Enterprise_resource_planning",
        "https://www.wikidata.org/wiki/Q131315",
      ],
    },
    {
      "@type": "Thing",
      name: "Mobile App Development",
      sameAs: [
        "https://en.wikipedia.org/wiki/Mobile_app_development",
        "https://www.wikidata.org/wiki/Q6887071",
      ],
    },
    {
      "@type": "Thing",
      name: "Cloud Computing",
      sameAs: [
        "https://en.wikipedia.org/wiki/Cloud_computing",
        "https://www.wikidata.org/wiki/Q483639",
      ],
    },
    {
      "@type": "Thing",
      name: "Search Engine Optimization",
      sameAs: [
        "https://en.wikipedia.org/wiki/Search_engine_optimization",
        "https://www.wikidata.org/wiki/Q180711",
      ],
    },
    {
      "@type": "Thing",
      name: "Generative Engine Optimization",
      sameAs: "https://en.wikipedia.org/wiki/Generative_engine_optimization",
    },
    { "@type": "Thing", name: "Answer Engine Optimization" },
    {
      "@type": "Place",
      name: "Ahmedabad",
      sameAs: [
        "https://en.wikipedia.org/wiki/Ahmedabad",
        "https://www.wikidata.org/wiki/Q1070",
      ],
    },
    {
      "@type": "Place",
      name: "Gujarat",
      sameAs: [
        "https://en.wikipedia.org/wiki/Gujarat",
        "https://www.wikidata.org/wiki/Q1061",
      ],
    },
  ],
  mentions: [
    {
      "@type": "Thing",
      name: "Next.js",
      sameAs: "https://www.wikidata.org/wiki/Q107572702",
    },
    {
      "@type": "Thing",
      name: "React",
      sameAs: "https://www.wikidata.org/wiki/Q19399674",
    },
    {
      "@type": "Thing",
      name: "TypeScript",
      sameAs: "https://www.wikidata.org/wiki/Q240237",
    },
    {
      "@type": "Thing",
      name: "Python",
      sameAs: "https://www.wikidata.org/wiki/Q28865",
    },
    {
      "@type": "Thing",
      name: "Node.js",
      sameAs: "https://www.wikidata.org/wiki/Q706782",
    },
    {
      "@type": "Thing",
      name: "OpenAI",
      sameAs: "https://www.wikidata.org/wiki/Q21708200",
    },
    {
      "@type": "Thing",
      name: "Anthropic",
      sameAs: "https://www.wikidata.org/wiki/Q111165243",
    },
    {
      "@type": "Thing",
      name: "AWS",
      sameAs: "https://www.wikidata.org/wiki/Q465132",
    },
    {
      "@type": "Thing",
      name: "Flutter",
      sameAs: "https://www.wikidata.org/wiki/Q44804368",
    },
    {
      "@type": "Thing",
      name: "React Native",
      sameAs: "https://www.wikidata.org/wiki/Q28402804",
    },
    {
      "@type": "Thing",
      name: "PostgreSQL",
      sameAs: "https://www.wikidata.org/wiki/Q192490",
    },
    {
      "@type": "Thing",
      name: "Docker",
      sameAs: "https://www.wikidata.org/wiki/Q16738927",
    },
    {
      "@type": "Thing",
      name: "Kubernetes",
      sameAs: "https://www.wikidata.org/wiki/Q22661308",
    },
  ],
  mainEntity: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
  },
};

export default function ServerStructuredData() {
  return (
    <>
      {/* Organization Schema — global entity, always server-rendered */}
      <script
        id="ssr-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* LocalBusiness Citation — NAP consistency for AI indexers */}
      <script
        id="ssr-local-citation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessCitationSchema),
        }}
      />

      {/* WebSite Schema — entity graph + speakable for GEO/AEO */}
      <script
        id="ssr-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
