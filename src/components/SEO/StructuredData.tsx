"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// ========== Organization Schema (Base Entity) ==========
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://devflow.co.in/#organization",
  name: "DevFlow Technology",
  alternateName: ["DevFlow", "DevFlow Tech"],
  url: "https://devflow.co.in",
  logo: "https://devflow.co.in/logo.png",
  description:
    "Full-service IT company delivering AI solutions, enterprise ERP systems, custom software development, and digital transformation services for businesses worldwide.",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Prince Gajjar",
      jobTitle: "Founder & Owner",
      url: "https://devflow.co.in/about",
      sameAs: ["https://github.com/princegajjar", "https://linkedin.com/in/princegajjar"],
    },
  ],
  sameAs: [
    "https://twitter.com/devflowtechnology",
    "https://linkedin.com/company/devflowtechnology",
    "https://github.com/devflowtechnology",
    "https://devflow.co.in",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "devflowtechnology@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN", "US", "GB", "AE", "AU"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Gandhinagar",
    addressRegion: "Gujarat",
  },
  brand: {
    "@type": "Brand",
    name: "DevFlow",
    slogan: "Custom software, clean code, fast execution.",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Enterprise Software",
    "ERP Systems",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Digital Transformation",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: "5-10" },
};

// ========== LocalBusiness Schema (Local SEO) ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ITService"],
  "@id": "https://devflow.co.in/#localbusiness",
  name: "DevFlow Technology",
  alternateName: "DevFlow - AI Agency & Web Development Company",
  description:
    "Leading AI agency and IT company in India offering AI solutions, web development, mobile apps, ERP systems, and cloud services.",
  url: "https://devflow.co.in",
  logo: "https://devflow.co.in/logo.png",
  image: "https://devflow.co.in/og-image.png",
  email: "devflowtechnology@gmail.com",
  priceRange: "$$-$$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Bank Transfer, UPI, Credit Card",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Gandhinagar",
    addressRegion: "Gujarat",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.2156",
    longitude: "72.6369",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: [
    "AI Development",
    "Web Development",
    "Mobile App Development",
    "ERP Systems",
    "Cloud Services",
    "IT Consulting",
  ],
  knowsLanguage: ["English", "Hindi"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Machine Learning Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise ERP Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting & Support" } },
    ],
  },
};

// ========== WebSite Schema with SearchAction and Speakable (AEO/GEO) ==========
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://devflow.co.in/#website",
  name: "DevFlow Technology - AI Agency & Web Development Company India",
  url: "https://devflow.co.in",
  description:
    "Leading AI agency and web development company in India. We build AI solutions, ERP systems, web apps, mobile apps, and provide cloud services.",
  publisher: { "@type": "Organization", "@id": "https://devflow.co.in/#organization" },
  inLanguage: ["en-US", "en-IN", "hi-IN"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://devflow.co.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  // SpeakableSpecification for AEO - marks content that can be read aloud by voice assistants
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable-content"],
  },
  // About entity association for GEO - tells AI what this site is topically about
  about: [
    { "@type": "Thing", name: "Artificial Intelligence", sameAs: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
    { "@type": "Thing", name: "Web Development", sameAs: "https://en.wikipedia.org/wiki/Web_development" },
    { "@type": "Thing", name: "Enterprise Resource Planning", sameAs: "https://en.wikipedia.org/wiki/Enterprise_resource_planning" },
    { "@type": "Thing", name: "Mobile App Development" },
    { "@type": "Thing", name: "Cloud Computing", sameAs: "https://en.wikipedia.org/wiki/Cloud_computing" },
  ],
  mentions: [
    { "@type": "Thing", name: "Next.js" },
    { "@type": "Thing", name: "React" },
    { "@type": "Thing", name: "TypeScript" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "Node.js" },
    { "@type": "Thing", name: "OpenAI" },
    { "@type": "Thing", name: "AWS" },
  ],
};

// ========== Product/Service Schema (GEO - entity-rich) ==========
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://devflow.co.in/#product",
  name: "DevFlow Technology Services",
  description:
    "Comprehensive technology services including AI development, custom web applications, enterprise ERP systems, mobile apps, and cloud infrastructure.",
  brand: { "@type": "Brand", "@id": "https://devflow.co.in/#organization" },
  offers: [
    {
      "@type": "Offer",
      name: "AI & Machine Learning Solutions",
      description: "Custom AI solutions including LLM integration, RAG systems, chatbots, and automation pipelines.",
      price: "0",
      priceCurrency: "INR",
      category: "AI Development",
    },
    {
      "@type": "Offer",
      name: "Custom Web Development",
      description: "High-performance web applications built with Next.js, React, and TypeScript.",
      price: "0",
      priceCurrency: "INR",
      category: "Web Development",
    },
    {
      "@type": "Offer",
      name: "Enterprise ERP Systems",
      description: "Custom ERP solutions for inventory, HR, accounting, CRM, and supply chain management.",
      price: "0",
      priceCurrency: "INR",
      category: "Enterprise Software",
    },
    {
      "@type": "Offer",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      price: "0",
      priceCurrency: "INR",
      category: "Mobile Development",
    },
    {
      "@type": "Offer",
      name: "Cloud & DevOps Services",
      description: "Cloud infrastructure, CI/CD pipelines, AWS/Azure/GCP deployments.",
      price: "0",
      priceCurrency: "INR",
      category: "Cloud Services",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  category: "IT Services",
};

// ========== HowTo Schema (AEO - Process/Steps) ==========
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Start a Custom Software Development Project with DevFlow",
  description:
    "Our streamlined process for building custom software solutions. From discovery to deployment, we ensure transparency and quality at every step.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Project Discovery Call",
      text: "Schedule a free consultation to discuss your requirements, goals, and timeline with our technical team.",
      url: "https://devflow.co.in/contact",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Technical Architecture Planning",
      text: "We design the system architecture, choose the right tech stack, and create a detailed project roadmap.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Agile Development & Iteration",
      text: "Build, test, and iterate in weekly sprints with continuous feedback and transparent progress updates.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deployment & Launch",
      text: "Deploy to production with automated CI/CD pipelines, monitoring, and performance optimization.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Ongoing Support & Maintenance",
      text: "Post-launch support including bug fixes, security updates, performance monitoring, and feature additions.",
    },
  ],
  totalTime: "P2W-P12W",
  tool: [
    { "@type": "Thing", name: "Next.js" },
    { "@type": "Thing", name: "React" },
    { "@type": "Thing", name: "TypeScript" },
    { "@type": "Thing", name: "AWS" },
    { "@type": "Thing", name: "PostgreSQL" },
  ],
};

// ========== BreadcrumbList Schema ==========
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://devflow.co.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://devflow.co.in/services" },
    { "@type": "ListItem", position: 3, name: "Our Work", item: "https://devflow.co.in/work" },
    { "@type": "ListItem", position: 4, name: "About", item: "https://devflow.co.in/about" },
    { "@type": "ListItem", position: 5, name: "Blog", item: "https://devflow.co.in/blog" },
    { "@type": "ListItem", position: 6, name: "Contact", item: "https://devflow.co.in/contact" },
  ],
};

// ========== FAQ Schema (AEO - Featured Snippets) ==========
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://devflow.co.in/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does DevFlow Technology offer as an IT company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevFlow Technology is a full-service IT company offering AI & Machine Learning solutions, Enterprise ERP systems, custom web development, mobile app development (iOS & Android), cloud & DevOps services, and 24/7 IT consulting and support. We help businesses with digital transformation using cutting-edge technologies.",
      },
    },
    {
      "@type": "Question",
      name: "Is DevFlow Technology an AI agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, DevFlow Technology is a leading AI agency in India. We specialize in AI solutions including ChatGPT integrations, custom LLMs, machine learning models, computer vision, NLP, and AI automation. We help businesses leverage artificial intelligence to improve operations and customer experiences.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build a custom web application in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom web application costs in India range from ₹3-8 lakhs for simple apps, ₹8-20 lakhs for medium complexity, and ₹20-50 lakhs for complex enterprise applications. DevFlow Technology offers transparent fixed-price and time-and-materials models with free initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What makes DevFlow the best web development company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevFlow Technology stands out as a top web development agency because we use modern technologies like Next.js, React, and TypeScript to build high-performance, SEO-optimized websites. We focus on conversion optimization, fast loading speeds (under 1 second), and scalable architecture that grows with your business.",
      },
    },
    {
      "@type": "Question",
      name: "Does DevFlow Technology build ERP systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop custom enterprise ERP systems tailored to your business needs. Our ERP solutions include inventory management, HR & payroll, accounting, CRM, supply chain management, and business analytics - all unified in one powerful platform.",
      },
    },
    {
      "@type": "Question",
      name: "Can DevFlow Technology develop mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We are a full-service mobile app development company. We build native iOS and Android apps, as well as cross-platform applications using React Native and Flutter. Our mobile apps are designed for exceptional user experience and performance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a custom software solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary by complexity: simple websites take 2-4 weeks, medium web applications take 1-3 months, and complex enterprise systems can take 3-6 months. We provide detailed timelines during our initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does DevFlow use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Next.js, React, TypeScript, Node.js, Python, PostgreSQL, AWS, Docker, and modern CSS frameworks like Tailwind CSS. We choose proven, reliable tech stacks that ensure your application is maintainable, scalable, and performant.",
      },
    },
  ],
};

// ========== ItemList Schema (for work/projects) ==========
const workItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DevFlow Technology Projects & Case Studies",
  description: "Our portfolio of custom web applications, enterprise systems, and digital solutions.",
  url: "https://devflow.co.in/work",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Pixsignerz Portal", url: "https://devflow.co.in/work/pixsignerz-portal" },
    { "@type": "ListItem", position: 2, name: "Future Realty Space", url: "https://devflow.co.in/work/future-realty-space" },
    { "@type": "ListItem", position: 3, name: "Aureon India", url: "https://devflow.co.in/work/aureon-india" },
    { "@type": "ListItem", position: 4, name: "Vassu Infotech", url: "https://devflow.co.in/work/vassu-infotech" },
    { "@type": "ListItem", position: 5, name: "Narmada Sales", url: "https://devflow.co.in/work/narmada-sales" },
    { "@type": "ListItem", position: 6, name: "Path Visa Advisor", url: "https://devflow.co.in/work/path-visa-advisor" },
  ],
};

// ========== SoftwareApplication Schema ==========
const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DevFlow Technology Services",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free consultation for AI, web development, and IT services",
  },
};

export default function StructuredData() {
  const pathname = usePathname();

  // Only render certain schemas on specific pages to avoid duplication
  const isHomePage = pathname === "/";
  const isServicesPage = pathname === "/services";
  const isWorkPage = pathname === "/work";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isWorkDetailPage = pathname.startsWith("/work/");

  return (
    <>
      {/* Base Organization Schema - Always present */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      {/* WebSite Schema with Speakable + Entity Mentions - Always present for GEO */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />

      {/* FAQ Schema - Always present for AEO featured snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      {/* BreadcrumbList - Always present */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      {/* HowTo Schema - Shows process steps for AEO */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        strategy="afterInteractive"
      />

      {/* LocalBusiness - Important for local SEO */}
      {isHomePage && (
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
      )}

      {/* Product/Service Schema with Offers - GEO entity richness */}
      {isServicesPage && (
        <Script
          id="product-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          strategy="afterInteractive"
        />
      )}

      {/* ItemList for Work/Portfolio pages */}
      {isWorkPage && (
        <Script
          id="work-item-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workItemListSchema) }}
          strategy="afterInteractive"
        />
      )}

      {/* SoftwareApplication Schema */}
      <Script
        id="software-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
