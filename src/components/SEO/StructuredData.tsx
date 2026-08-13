"use client";

import { usePathname } from "next/navigation";

// ponytail: Global schemas (Organization, WebSite, Citation) are now
// server-rendered in ServerStructuredData.tsx so AI crawlers that do NOT
// execute JavaScript can read them. This client component only handles
// page-conditional schemas that require usePathname().

// Organization, WebSite, and Citation schemas are NOW in
// ServerStructuredData.tsx (server component). Removed from here.

// ========== LocalBusiness Schema (Local SEO - Ahmedabad Focus) ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.devflow.co.in/#localbusiness",
  name: "DevFlow Technology",
  alternateName: "DevFlow - AI Agency & Web Development Company Ahmedabad",
  description:
    "Top-rated AI development company and IT services provider in Ahmedabad, Gujarat. Specializing in AI solutions, custom web development, mobile app development, ERP systems, cloud services, and SEO. Serving clients across Gujarat (Ahmedabad, Gandhinagar, Surat, Vadodara) and globally.",
  url: "https://www.devflow.co.in",
  logo: "https://www.devflow.co.in/logo.png",
  image: "https://www.devflow.co.in/og-image.jpg",
  email: "info@devflow.co.in",
  telephone: ["+91-97261-13311", "+91-63550-43103"],
  priceRange: "$$-$$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Bank Transfer, UPI, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382210",
    streetAddress: "Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225",
    longitude: "72.5714",
  },
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
    {
      "@type": "City",
      name: "Rajkot",
      containedInPlace: { "@type": "State", name: "Gujarat" },
    },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Australia" },
  ],
  serviceType: [
    "AI Development",
    "Generative AI Solutions",
    "LLM Integration & RAG Systems",
    "AI Chatbot Development",
    "AI Automation & Workflow",
    "Web Development",
    "Custom Web Application Development",
    "Next.js Development",
    "React Development",
    "Node.js Development",
    "Mobile App Development",
    "iOS App Development",
    "Android App Development",
    "Flutter Development",
    "React Native Development",
    "Enterprise ERP Systems",
    "Custom CRM Development",
    "Cloud Services & DevOps",
    "AWS Cloud Solutions",
    "IT Consulting & Strategy",
    "Digital Transformation",
    "SEO Services",
    "Technical SEO Audit",
    "Local SEO Services",
    "GEO (Generative Engine Optimization)",
    "AEO (Answer Engine Optimization)",
  ],
  knowsLanguage: ["English", "Hindi", "Gujarati"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services in Ahmedabad",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Machine Learning Solutions",
          description:
            "Custom AI solutions including LLM integration, RAG systems, chatbots, and automation pipelines for businesses in Ahmedabad and Gujarat.",
          areaServed: { "@type": "City", name: "Ahmedabad" },
          provider: {
            "@type": "LocalBusiness",
            name: "DevFlow Technology",
            "@id": "https://www.devflow.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise ERP Systems",
          description:
            "Custom ERP solutions for inventory, HR, accounting, CRM, and supply chain management tailored for Gujarat enterprises.",
          areaServed: { "@type": "State", name: "Gujarat" },
          provider: {
            "@type": "LocalBusiness",
            name: "DevFlow Technology",
            "@id": "https://www.devflow.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          description:
            "High-performance web applications built with Next.js, React, and TypeScript for startups and enterprises in Ahmedabad.",
          areaServed: { "@type": "City", name: "Ahmedabad" },
          provider: {
            "@type": "LocalBusiness",
            name: "DevFlow Technology",
            "@id": "https://www.devflow.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Native and cross-platform mobile applications for iOS and Android using Flutter, React Native, and native technologies.",
          areaServed: { "@type": "State", name: "Gujarat" },
          provider: {
            "@type": "LocalBusiness",
            name: "DevFlow Technology",
            "@id": "https://www.devflow.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps Services",
          description:
            "Cloud infrastructure, CI/CD pipelines, AWS/Azure/GCP deployments for scalable applications.",
          areaServed: { "@type": "Country", name: "India" },
          provider: {
            "@type": "LocalBusiness",
            name: "DevFlow Technology",
            "@id": "https://www.devflow.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Digital Marketing",
          description:
            "Technical SEO, local SEO for Ahmedabad businesses, GEO/AEO optimization, and performance marketing.",
          areaServed: { "@type": "City", name: "Ahmedabad" },
          provider: {
            "@type": "LocalBusiness",
            name: "DevFlow Technology",
            "@id": "https://www.devflow.co.in/#localbusiness",
          },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "184",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jaydeep Patel" },
      datePublished: "2026-05-15",
      reviewBody:
        "DevFlow delivered an exceptional custom ERP system for our operations in Ahmedabad. Their expertise in Next.js and database optimization is unmatched.",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amit Sharma" },
      datePublished: "2026-06-02",
      reviewBody:
        "Best software development company in Gujarat. The AI automation workflows they designed saved us hundreds of hours of manual entry.",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Desai" },
      datePublished: "2026-07-10",
      reviewBody:
        "Top AI development company in Ahmedabad. They built our RAG-based chatbot with perfect Gujarati language support.",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
    },
  ],
};

// Citation and WebSite schemas moved to ServerStructuredData.tsx

// ========== Service Schema with Location (GEO - entity-rich) ==========
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/#services",
  name: "DevFlow Technology IT Services",
  description:
    "Comprehensive technology services including AI development, custom web applications, enterprise ERP systems, mobile apps, cloud infrastructure, and SEO services. Based in Ahmedabad, serving Gujarat and global clients.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services Portfolio",
    itemListElement: [
      {
        "@type": "Offer",
        name: "AI & Machine Learning Solutions",
        description:
          "Custom AI solutions including LLM integration, RAG systems, chatbots, and automation pipelines.",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Generative AI & LLM Integration",
        description:
          "GPT-4, Claude, Llama integration, RAG pipelines, vector databases, and AI agent development.",
        price: "0",
        priceCurrency: "INR",
        category: "Generative AI",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Custom Web Development",
        description:
          "High-performance web applications built with Next.js, React, and TypeScript.",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Enterprise ERP Systems",
        description:
          "Custom ERP solutions for inventory, HR, accounting, CRM, and supply chain management.",
        price: "0",
        priceCurrency: "INR",
        category: "Enterprise Software",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android.",
        price: "0",
        priceCurrency: "INR",
        category: "Mobile Development",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Cloud & DevOps Services",
        description:
          "Cloud infrastructure, CI/CD pipelines, AWS/Azure/GCP deployments.",
        price: "0",
        priceCurrency: "INR",
        category: "Cloud Services",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "SEO & Digital Marketing",
        description:
          "Technical SEO, local SEO for Ahmedabad, GEO/AEO optimization, and performance marketing.",
        price: "0",
        priceCurrency: "INR",
      },
    ],
  },
  category: "IT Services",
};

// ========== Service-Specific Schemas for Landing Pages ==========
const aiDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/ai-development-company-ahmedabad#service",
  name: "AI Development Services in Ahmedabad",
  description:
    "Leading AI development company in Ahmedabad offering custom AI solutions, LLM integration, RAG systems, chatbots, computer vision, NLP, and generative AI applications for businesses across Gujarat.",
  serviceType: "AI Development",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Custom AI Model Development",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
      },
      {
        "@type": "Offer",
        name: "LLM Integration & Fine-tuning",
        price: "0",
        priceCurrency: "INR",
        category: "Generative AI",
      },
      {
        "@type": "Offer",
        name: "RAG Systems & Vector Databases",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
      },
      {
        "@type": "Offer",
        name: "AI Chatbot & Virtual Assistant",
        price: "0",
        priceCurrency: "INR",
        category: "AI Automation",
      },
      {
        "@type": "Offer",
        name: "Computer Vision Solutions",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
      },
      {
        "@type": "Offer",
        name: "NLP & Text Analytics",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
      },
      {
        "@type": "Offer",
        name: "AI Workflow Automation",
        price: "0",
        priceCurrency: "INR",
        category: "Business Automation",
      },
      {
        "@type": "Offer",
        name: "Predictive Analytics & ML Models",
        price: "0",
        priceCurrency: "INR",
        category: "Machine Learning",
      },
    ],
  },
};

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/seo-company-ahmedabad#service",
  name: "SEO Services in Ahmedabad",
  description:
    "Top SEO company in Ahmedabad offering technical SEO audits, local SEO for Gujarat businesses, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and performance marketing to rank higher on Google and AI search.",
  serviceType: "SEO Services",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services Portfolio",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Technical SEO Audit",
        price: "0",
        priceCurrency: "INR",
        category: "Technical SEO",
      },
      {
        "@type": "Offer",
        name: "Local SEO Ahmedabad",
        price: "0",
        priceCurrency: "INR",
        category: "Local SEO",
      },
      {
        "@type": "Offer",
        name: "Google Business Profile Optimization",
        price: "0",
        priceCurrency: "INR",
        category: "Local SEO",
      },
      {
        "@type": "Offer",
        name: "Generative Engine Optimization (GEO)",
        price: "0",
        priceCurrency: "INR",
        category: "AI SEO",
      },
      {
        "@type": "Offer",
        name: "Answer Engine Optimization (AEO)",
        price: "0",
        priceCurrency: "INR",
        category: "AI SEO",
      },
      {
        "@type": "Offer",
        name: "Core Web Vitals Optimization",
        price: "0",
        priceCurrency: "INR",
        category: "Technical SEO",
      },
      {
        "@type": "Offer",
        name: "Schema Markup Implementation",
        price: "0",
        priceCurrency: "INR",
        category: "Technical SEO",
      },
      {
        "@type": "Offer",
        name: "Content SEO & Strategy",
        price: "0",
        priceCurrency: "INR",
        category: "Content SEO",
      },
    ],
  },
};

const webDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/web-development-company-ahmedabad#service",
  name: "Web Development Services in Ahmedabad",
  description:
    "Premier web development company in Ahmedabad building custom web applications, enterprise portals, e-commerce platforms, and progressive web apps using Next.js, React, Node.js, and TypeScript.",
  serviceType: "Web Development",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Custom Web Application Development",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
      {
        "@type": "Offer",
        name: "Next.js Development Company",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
      {
        "@type": "Offer",
        name: "React Development Services",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
      {
        "@type": "Offer",
        name: "E-commerce Website Development",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
      {
        "@type": "Offer",
        name: "Progressive Web App (PWA) Development",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
      {
        "@type": "Offer",
        name: "Enterprise Portal Development",
        price: "0",
        priceCurrency: "INR",
        category: "Enterprise Software",
      },
      {
        "@type": "Offer",
        name: "API Development & Integration",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
      {
        "@type": "Offer",
        name: "Website Redesign & Migration",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
      },
    ],
  },
};

const softwareDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/software-development-company-ahmedabad#service",
  name: "Software Development Services in Ahmedabad",
  description:
    "Top-rated software development company in Ahmedabad offering custom software engineering, ERP systems, mobile app development, AI solutions, and system integration for scaling startups and enterprises.",
  serviceType: "Software Development",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Custom Software Development",
        price: "0",
        priceCurrency: "INR",
        category: "Software Development",
      },
      {
        "@type": "Offer",
        name: "Enterprise ERP Software",
        price: "0",
        priceCurrency: "INR",
        category: "Enterprise Software",
      },
      {
        "@type": "Offer",
        name: "SaaS Product Development",
        price: "0",
        priceCurrency: "INR",
        category: "SaaS Development",
      },
      {
        "@type": "Offer",
        name: "Mobile App Development",
        price: "0",
        priceCurrency: "INR",
        category: "Mobile Apps",
      },
      {
        "@type": "Offer",
        name: "AI Solutions & Integrations",
        price: "0",
        priceCurrency: "INR",
        category: "AI Automation",
      },
      {
        "@type": "Offer",
        name: "System Integration & APIs",
        price: "0",
        priceCurrency: "INR",
        category: "Software Development",
      },
    ],
  },
};

const mobileAppDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.devflow.co.in/mobile-app-development-company-ahmedabad#service",
  name: "Mobile App Development Services in Ahmedabad",
  description:
    "Leading mobile app development company in Ahmedabad building native iOS, Android, and cross-platform apps using Flutter, React Native, Swift, and Kotlin for startups and enterprises in Gujarat.",
  serviceType: "Mobile App Development",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile App Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "iOS App Development",
        price: "0",
        priceCurrency: "INR",
        category: "Mobile Development",
      },
      {
        "@type": "Offer",
        name: "Android App Development",
        price: "0",
        priceCurrency: "INR",
        category: "Mobile Development",
      },
      {
        "@type": "Offer",
        name: "Flutter App Development",
        price: "0",
        priceCurrency: "INR",
        category: "Cross Platform",
      },
      {
        "@type": "Offer",
        name: "React Native Development",
        price: "0",
        priceCurrency: "INR",
        category: "Cross Platform",
      },
      {
        "@type": "Offer",
        name: "Cross-Platform App Development",
        price: "0",
        priceCurrency: "INR",
        category: "Cross Platform",
      },
      {
        "@type": "Offer",
        name: "Enterprise Mobile Apps",
        price: "0",
        priceCurrency: "INR",
        category: "Enterprise Software",
      },
      {
        "@type": "Offer",
        name: "App UI/UX Design",
        price: "0",
        priceCurrency: "INR",
        category: "Design",
      },
      {
        "@type": "Offer",
        name: "App Maintenance & Support",
        price: "0",
        priceCurrency: "INR",
        category: "Support",
      },
    ],
  },
};

const itCompanyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/it-company-ahmedabad#service",
  name: "IT Services & Consulting in Ahmedabad",
  description:
    "Top IT company in Ahmedabad providing end-to-end IT services including software development, IT consulting, digital transformation, cloud migration, DevOps, and managed IT services for businesses in Gujarat.",
  serviceType: "IT Services",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services Portfolio",
    itemListElement: [
      {
        "@type": "Offer",
        name: "IT Consulting & Strategy",
        price: "0",
        priceCurrency: "INR",
        category: "IT Consulting",
      },
      {
        "@type": "Offer",
        name: "Digital Transformation Services",
        price: "0",
        priceCurrency: "INR",
        category: "Digital Transformation",
      },
      {
        "@type": "Offer",
        name: "Cloud Migration Services",
        price: "0",
        priceCurrency: "INR",
        category: "Cloud Services",
      },
      {
        "@type": "Offer",
        name: "DevOps & CI/CD Implementation",
        price: "0",
        priceCurrency: "INR",
        category: "DevOps",
      },
      {
        "@type": "Offer",
        name: "Managed IT Services",
        price: "0",
        priceCurrency: "INR",
        category: "IT Support",
      },
      {
        "@type": "Offer",
        name: "Staff Augmentation & Dedicated Teams",
        price: "0",
        priceCurrency: "INR",
        category: "Staff Augmentation",
      },
      {
        "@type": "Offer",
        name: "Legacy System Modernization",
        price: "0",
        priceCurrency: "INR",
        category: "Software Modernization",
      },
      {
        "@type": "Offer",
        name: "Software Architecture Design",
        price: "0",
        priceCurrency: "INR",
        category: "Architecture",
      },
    ],
  },
};

const itServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.devflow.co.in/it-services-ahmedabad#service",
  name: "IT Services in Ahmedabad",
  description:
    "Comprehensive IT services provider in Ahmedabad offering software development, AI solutions, cloud services, cybersecurity, IT support, and digital transformation for SMEs and enterprises across Gujarat.",
  serviceType: "IT Services",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.devflow.co.in/#localbusiness",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Complete IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Custom Software Development",
        price: "0",
        priceCurrency: "INR",
        category: "Software Development",
      },
      {
        "@type": "Offer",
        name: "AI & Machine Learning Solutions",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
      },
      {
        "@type": "Offer",
        name: "Web & Mobile App Development",
        price: "0",
        priceCurrency: "INR",
        category: "App Development",
      },
      {
        "@type": "Offer",
        name: "Cloud Infrastructure & DevOps",
        price: "0",
        priceCurrency: "INR",
        category: "Cloud Services",
      },
      {
        "@type": "Offer",
        name: "ERP & CRM Development",
        price: "0",
        priceCurrency: "INR",
        category: "Enterprise Software",
      },
      {
        "@type": "Offer",
        name: "IT Security & Compliance",
        price: "0",
        priceCurrency: "INR",
        category: "Cybersecurity",
      },
      {
        "@type": "Offer",
        name: "IT Support & Maintenance",
        price: "0",
        priceCurrency: "INR",
        category: "IT Support",
      },
      {
        "@type": "Offer",
        name: "Digital Marketing & SEO",
        price: "0",
        priceCurrency: "INR",
        category: "Digital Marketing",
      },
    ],
  },
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
      url: "https://www.devflow.co.in/contact",
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

// ========== Dynamic BreadcrumbList Schema ==========
// Generates page-contextual breadcrumbs from the current pathname instead
// of a static list. Google and AI engines use this to understand page
// hierarchy and show breadcrumb rich results.
const SEGMENT_LABELS: Record<string, string> = {
  services: "Services",
  blog: "Blog",
  about: "About",
  work: "Our Work",
  contact: "Contact",
  compare: "Comparisons",
  glossary: "Glossary",
  industries: "Industries",
  locations: "Locations",
  faq: "FAQ",
  careers: "Careers",
  pricing: "Pricing",
  expertise: "Expertise",
  technology: "Technology",
  "technology-stack": "Technology Stack",
  "case-studies": "Case Studies",
  "knowledge-base": "Knowledge Base",
  resources: "Resources",
  partnerships: "Partnerships",
  "why-devflow": "Why DevFlow",
  "ai-solutions": "AI Solutions",
  "dedicated-development-teams": "Dedicated Teams",
  "offshore-development": "Offshore Development",
  "white-label-development": "White Label",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  security: "Security",
  sla: "SLA",
  maintenance: "Maintenance",
  "engineering-process": "Engineering Process",
  category: "Category",
  founders: "Founders",
  "agency-partners": "Agency Partners",
};

function buildBreadcrumbSchema(pathname: string) {
  const baseUrl = "https://www.devflow.co.in";
  const segments = pathname.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem" as const, position: 1, name: "Home", item: baseUrl },
  ];

  let path = "";
  for (let i = 0; i < segments.length; i++) {
    path += `/${segments[i]}`;
    const label =
      SEGMENT_LABELS[segments[i]] ||
      segments[i]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    items.push({
      "@type": "ListItem" as const,
      position: i + 2,
      name: label,
      item: `${baseUrl}${path}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

// ========== FAQ Schema (AEO - Featured Snippets) ==========
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.devflow.co.in/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization (GEO) and does DevFlow implement it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization (GEO) involves structuring content, entities, metadata, and structured data to improve discoverability across search engines and AI-powered search experiences. At DevFlow, our approach includes clear information architecture, entity consistency, standard Schema.org structured data, authoritative technical content, internal linking, semantic HTML, and machine-readable information to ensure factual consistency.",
      },
    },
    {
      "@type": "Question",
      name: "How does DevFlow build custom ERP and logistics databases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design custom ERP and business tracking systems using Next.js, Node.js, and SQL databases, integrated with real-time WebSockets. This eliminates discrepancies between legacy silos and unifies supply chain telemetry, saving operational overhead.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does DevFlow specialize in for SaaS launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in headless React frontends, Next.js, TypeScript, Go (Golang), and AWS microservices. We build secure multi-tenant isolation architectures and configure Stripe billing engines (recurring subscriptions and invoice workflows).",
      },
    },
    {
      "@type": "Question",
      name: "Can DevFlow help optimize our local Google Business Profile (GMB) pack ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We configure map api listings, align address footprints, and deploy review aggregation schemas. This helps capture the Google Maps 3-Pack rankings, driving inbound organic calls without paid ad campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide automated web crawling and data extraction services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We write multi-threaded Puppeteer scraping automation engines backed by Redis cache queues to crawl pages, parse complex structures, and update catalogs with zero blocks.",
      },
    },
    // Local SEO FAQs
    {
      "@type": "Question",
      name: "Why choose DevFlow Technology as your AI development company in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevFlow Technology is a leading AI development company in Ahmedabad with expertise in LLM integration, RAG systems, custom AI models, and generative AI applications. We serve clients across Gujarat including Ahmedabad, Gandhinagar, Surat, and Vadodara with local support and global delivery standards.",
      },
    },
    {
      "@type": "Question",
      name: "What makes DevFlow the best SEO company in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevFlow combines technical SEO expertise with AI-powered optimization including GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization). We deliver measurable results for Ahmedabad businesses through technical audits, local SEO, Core Web Vitals optimization, and schema markup implementation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom web development cost in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom web development costs in Ahmedabad vary based on complexity. A basic business website starts at ₹1,50,000, while complex web applications with custom features range from ₹5,00,000 to ₹50,00,000+. DevFlow offers transparent pricing and free project discovery consultations.",
      },
    },
    {
      "@type": "Question",
      name: "Does DevFlow provide mobile app development services in Gujarat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, DevFlow is a premier mobile app development company in Ahmedabad serving all of Gujarat. We build native iOS (Swift), Android (Kotlin), and cross-platform apps (Flutter, React Native) for startups and enterprises across Ahmedabad, Gandhinagar, Surat, Vadodara, and Rajkot.",
      },
    },
    {
      "@type": "Question",
      name: "What IT services does DevFlow offer as an IT company in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a full-service IT company in Ahmedabad, DevFlow provides: custom software development, AI/ML solutions, web and mobile app development, cloud & DevOps, ERP/CRM systems, IT consulting, digital transformation, staff augmentation, and managed IT services for businesses across Gujarat.",
      },
    },
    {
      "@type": "Question",
      name: "Where is DevFlow Technology located in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevFlow Technology is located at Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway, Ahmedabad, Gujarat 382210. We serve clients across Ahmedabad, Gandhinagar, Surat, Vadodara, and all of Gujarat with local presence and global delivery capabilities.",
      },
    },
  ],
};

// ========== ItemList Schema (for work/projects) ==========
const workItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DevFlow Technology Projects & Case Studies",
  description:
    "Our portfolio of custom web applications, enterprise systems, and digital solutions.",
  url: "https://www.devflow.co.in/work",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Pixsignerz Portal",
      url: "https://www.devflow.co.in/work/pixsignerz-portal",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Future Realty Space",
      url: "https://www.devflow.co.in/work/future-realty-space",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aureon India",
      url: "https://www.devflow.co.in/work/aureon-india",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Vassu Infotech",
      url: "https://www.devflow.co.in/work/vassu-infotech",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Narmada Sales",
      url: "https://www.devflow.co.in/work/narmada-sales",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Path Visa Advisor",
      url: "https://www.devflow.co.in/work/path-visa-advisor",
    },
  ],
};

// ponytail: SoftwareApplication schema REMOVED — DevFlow is a service
// company, not a software product. Using this schema type was semantically
// incorrect and could confuse Google's entity understanding.

// ========== Page-Specific Schema Generator ==========
// ponytail: paths updated to /services/* destinations because the old
// /[keyword]-company-ahmedabad slugs now 301-redirect via next.config.ts.
function getPageSpecificSchema(pathname: string) {
  const schemas: Record<string, unknown> = {
    "/services/ai-development": aiDevelopmentServiceSchema,
    "/services/seo": seoServiceSchema,
    "/services/web-application-development": webDevelopmentServiceSchema,
    "/services/mobile-app-development": mobileAppDevelopmentServiceSchema,
    "/services/custom-software-development": itCompanyServiceSchema,
    "/services": itServicesSchema,
    "/services/software-development": softwareDevelopmentServiceSchema,
  };
  return schemas[pathname] || null;
}

export default function StructuredData() {
  const pathname = usePathname();

  // Page type detection for conditional schema rendering
  const isHomePage = pathname === "/";
  const isServicesPage = pathname === "/services";
  const isServiceDetailPage = pathname.startsWith("/services/");
  const isWorkPage = pathname === "/work";
  const isContactPage = pathname === "/contact";
  const isFAQPage = pathname === "/faq";
  const isComparePage = pathname.startsWith("/compare/");

  // ponytail: FAQPage schema is now SCOPED to pages with visible FAQ content.
  // Previously rendered on every page, which violated Google guidelines.
  const showFAQ = isHomePage || isFAQPage || isServiceDetailPage || isComparePage;

  // HowTo schema only on pages describing the development process
  const showHowTo = isHomePage || isServicesPage || isServiceDetailPage;

  const pageSpecificSchema = getPageSpecificSchema(pathname);
  const breadcrumbSchema = buildBreadcrumbSchema(pathname);

  return (
    <>
      {/* Dynamic BreadcrumbList — page-contextual, not static */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* FAQ Schema — scoped to pages with visible FAQ content */}
      {showFAQ && (
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* HowTo Schema — only on process-relevant pages */}
      {showHowTo && (
        <script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* LocalBusiness — local SEO on homepage and contact */}
      {(isHomePage || isContactPage) && (
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      )}

      {/* Service Schema with Location — GEO entity richness */}
      {isServicesPage && (
        <script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {/* Page-specific service schemas for service landing pages */}
      {pageSpecificSchema && (
        <script
          id="page-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageSpecificSchema),
          }}
        />
      )}

      {/* ItemList for Work/Portfolio pages */}
      {isWorkPage && (
        <script
          id="work-item-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(workItemListSchema),
          }}
        />
      )}
    </>
  );
}
