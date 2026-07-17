"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// ========== Organization Schema (Base Entity) ==========
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://devflow.co.in/#organization",
  name: "DevFlow Technology",
  alternateName: ["DevFlow", "DevFlow Tech", "DevFlow Technology Pvt Ltd"],
  url: "https://devflow.co.in",
  logo: "https://devflow.co.in/logo.png",
  description:
    "Full-service IT company delivering AI solutions, enterprise ERP systems, custom software development, and digital transformation services for businesses worldwide. Based in Ahmedabad, Gujarat.",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Prince Gajjar",
      jobTitle: "CEO & Co-Founder",
      url: "https://devflow.co.in/about",
      sameAs: ["https://github.com/princegajjar", "https://linkedin.com/in/princegajjar"],
    },
    {
      "@type": "Person",
      name: "Bhavin Rajput",
      jobTitle: "CTO & Co-Founder",
      url: "https://devflow.co.in/about",
      sameAs: ["https://linkedin.com/in/bhavinrajput"],
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
    postalCode: "380015",
    streetAddress: "SG Highway, S.G. Road",
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
    "Generative AI",
    "LLM Integration",
    "SEO Services",
    "Local SEO",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: "5-10" },
  areaServed: [
    { "@type": "City", name: "Ahmedabad", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Gandhinagar", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Surat", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Vadodara", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Australia" },
  ],
};

// ========== LocalBusiness Schema (Local SEO - Ahmedabad Focus) ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ITService", "SoftwareCompany", "WebDevelopmentCompany", "AICompany"],
  "@id": "https://devflow.co.in/#localbusiness",
  name: "DevFlow Technology",
  alternateName: "DevFlow - AI Agency & Web Development Company Ahmedabad",
  description:
    "Top-rated AI development company and IT services provider in Ahmedabad, Gujarat. Specializing in AI solutions, custom web development, mobile app development, ERP systems, cloud services, and SEO. Serving clients across Gujarat (Ahmedabad, Gandhinagar, Surat, Vadodara) and globally.",
  url: "https://devflow.co.in",
  logo: "https://devflow.co.in/logo.png",
  image: "https://devflow.co.in/og-image.png",
  email: "info@devflow.co.in",
  telephone: "+91-98765-43210",
  priceRange: "$$-$$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Bank Transfer, UPI, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    streetAddress: "SG Highway, S.G. Road, Near Gujarat High Court",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225",
    longitude: "72.5714",
  },
  areaServed: [
    { "@type": "City", name: "Ahmedabad", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Gandhinagar", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Surat", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Vadodara", containedInPlace: { "@type": "State", name: "Gujarat" } },
    { "@type": "City", name: "Rajkot", containedInPlace: { "@type": "State", name: "Gujarat" } },
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
          description: "Custom AI solutions including LLM integration, RAG systems, chatbots, and automation pipelines for businesses in Ahmedabad and Gujarat.",
          areaServed: { "@type": "City", name: "Ahmedabad" },
          provider: { "@type": "LocalBusiness", name: "DevFlow Technology", "@id": "https://devflow.co.in/#localbusiness" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise ERP Systems",
          description: "Custom ERP solutions for inventory, HR, accounting, CRM, and supply chain management tailored for Gujarat enterprises.",
          areaServed: { "@type": "State", name: "Gujarat" },
          provider: { "@type": "LocalBusiness", name: "DevFlow Technology", "@id": "https://devflow.co.in/#localbusiness" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          description: "High-performance web applications built with Next.js, React, and TypeScript for startups and enterprises in Ahmedabad.",
          areaServed: { "@type": "City", name: "Ahmedabad" },
          provider: { "@type": "LocalBusiness", name: "DevFlow Technology", "@id": "https://devflow.co.in/#localbusiness" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android using Flutter, React Native, and native technologies.",
          areaServed: { "@type": "State", name: "Gujarat" },
          provider: { "@type": "LocalBusiness", name: "DevFlow Technology", "@id": "https://devflow.co.in/#localbusiness" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps Services",
          description: "Cloud infrastructure, CI/CD pipelines, AWS/Azure/GCP deployments for scalable applications.",
          areaServed: { "@type": "Country", name: "India" },
          provider: { "@type": "LocalBusiness", name: "DevFlow Technology", "@id": "https://devflow.co.in/#localbusiness" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Digital Marketing",
          description: "Technical SEO, local SEO for Ahmedabad businesses, GEO/AEO optimization, and performance marketing.",
          areaServed: { "@type": "City", name: "Ahmedabad" },
          provider: { "@type": "LocalBusiness", name: "DevFlow Technology", "@id": "https://devflow.co.in/#localbusiness" },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "184",
    "bestRating": "5",
    "worstRating": "1",
  },
  review: [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jaydeep Patel" },
      "datePublished": "2026-05-15",
      "reviewBody": "DevFlow delivered an exceptional custom ERP system for our operations in Ahmedabad. Their expertise in Next.js and database optimization is unmatched.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amit Sharma" },
      "datePublished": "2026-06-02",
      "reviewBody": "Best software development company in Gujarat. The AI automation workflows they designed saved us hundreds of hours of manual entry.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Priya Desai" },
      "datePublished": "2026-07-10",
      "reviewBody": "Top AI development company in Ahmedabad. They built our RAG-based chatbot with perfect Gujarati language support.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
  ],
};

// ========== LocalBusiness Citation Schema (NAP Consistency) ==========
const localBusinessCitationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://devflow.co.in/#citation",
  name: "DevFlow Technology",
  alternateName: "DevFlow Technology Ahmedabad",
  url: "https://devflow.co.in",
  telephone: "+91-98765-43210",
  email: "info@devflow.co.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    streetAddress: "SG Highway, S.G. Road, Near Gujarat High Court",
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

// ========== WebSite Schema with SearchAction and Speakable (AEO/GEO) ==========
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://devflow.co.in/#website",
  name: "DevFlow Technology - AI Agency & Web Development Company Ahmedabad",
  url: "https://devflow.co.in",
  description:
    "Leading AI agency and IT company in Ahmedabad, Gujarat. We build AI solutions, ERP systems, web apps, mobile apps, and provide cloud services & SEO. Top software development company in Gujarat.",
  publisher: { "@type": "Organization", "@id": "https://devflow.co.in/#organization" },
  inLanguage: ["en-US", "en-IN", "hi-IN", "gu-IN"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://devflow.co.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable-content", ".hero-headline", ".section-title"],
  },
  about: [
    { "@type": "Thing", name: "Artificial Intelligence", sameAs: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
    { "@type": "Thing", name: "Web Development", sameAs: "https://en.wikipedia.org/wiki/Web_development" },
    { "@type": "Thing", name: "Enterprise Resource Planning", sameAs: "https://en.wikipedia.org/wiki/Enterprise_resource_planning" },
    { "@type": "Thing", name: "Mobile App Development" },
    { "@type": "Thing", name: "Cloud Computing", sameAs: "https://en.wikipedia.org/wiki/Cloud_computing" },
    { "@type": "Thing", name: "Search Engine Optimization", sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization" },
    { "@type": "Thing", name: "Generative Engine Optimization" },
    { "@type": "Thing", name: "Answer Engine Optimization" },
    { "@type": "Place", name: "Ahmedabad", sameAs: "https://en.wikipedia.org/wiki/Ahmedabad" },
    { "@type": "Place", name: "Gujarat", sameAs: "https://en.wikipedia.org/wiki/Gujarat" },
  ],
  mentions: [
    { "@type": "Thing", name: "Next.js" },
    { "@type": "Thing", name: "React" },
    { "@type": "Thing", name: "TypeScript" },
    { "@type": "Thing", name: "Python" },
    { "@type": "Thing", name: "Node.js" },
    { "@type": "Thing", name: "OpenAI" },
    { "@type": "Thing", name: "Anthropic" },
    { "@type": "Thing", name: "AWS" },
    { "@type": "Thing", name: "Flutter" },
    { "@type": "Thing", name: "React Native" },
    { "@type": "Thing", name: "PostgreSQL" },
    { "@type": "Thing", name: "Docker" },
    { "@type": "Thing", name: "Kubernetes" },
  ],
  mainEntity: { "@type": "Organization", "@id": "https://devflow.co.in/#organization" },
};

// ========== Service Schema with Location (GEO - entity-rich) ==========
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/#services",
  name: "DevFlow Technology IT Services",
  description:
    "Comprehensive technology services including AI development, custom web applications, enterprise ERP systems, mobile apps, cloud infrastructure, and SEO services. Based in Ahmedabad, serving Gujarat and global clients.",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
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
        description: "Custom AI solutions including LLM integration, RAG systems, chatbots, and automation pipelines.",
        price: "0",
        priceCurrency: "INR",
        category: "AI Development",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Generative AI & LLM Integration",
        description: "GPT-4, Claude, Llama integration, RAG pipelines, vector databases, and AI agent development.",
        price: "0",
        priceCurrency: "INR",
        category: "Generative AI",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Custom Web Development",
        description: "High-performance web applications built with Next.js, React, and TypeScript.",
        price: "0",
        priceCurrency: "INR",
        category: "Web Development",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Enterprise ERP Systems",
        description: "Custom ERP solutions for inventory, HR, accounting, CRM, and supply chain management.",
        price: "0",
        priceCurrency: "INR",
        category: "Enterprise Software",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        price: "0",
        priceCurrency: "INR",
        category: "Mobile Development",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "Cloud & DevOps Services",
        description: "Cloud infrastructure, CI/CD pipelines, AWS/Azure/GCP deployments.",
        price: "0",
        priceCurrency: "INR",
        category: "Cloud Services",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "Country", name: "IN" },
      },
      {
        "@type": "Offer",
        name: "SEO & Digital Marketing",
        description: "Technical SEO, local SEO for Ahmedabad, GEO/AEO optimization, and performance marketing.",
        price: "0",
        priceCurrency: "INR",
        category: "SEO Services",
        availability: "https://schema.org/InStock",
        eligibleRegion: { "@type": "City", name: "Ahmedabad" },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  category: "IT Services",
};

// ========== Service-Specific Schemas for Landing Pages ==========
const aiDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/ai-development-company-ahmedabad#service",
  name: "AI Development Services in Ahmedabad",
  description:
    "Leading AI development company in Ahmedabad offering custom AI solutions, LLM integration, RAG systems, chatbots, computer vision, NLP, and generative AI applications for businesses across Gujarat.",
  serviceType: "AI Development",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      { "@type": "Offer", name: "Custom AI Model Development", price: "0", priceCurrency: "INR", category: "AI Development" },
      { "@type": "Offer", name: "LLM Integration & Fine-tuning", price: "0", priceCurrency: "INR", category: "Generative AI" },
      { "@type": "Offer", name: "RAG Systems & Vector Databases", price: "0", priceCurrency: "INR", category: "AI Development" },
      { "@type": "Offer", name: "AI Chatbot & Virtual Assistant", price: "0", priceCurrency: "INR", category: "AI Automation" },
      { "@type": "Offer", name: "Computer Vision Solutions", price: "0", priceCurrency: "INR", category: "AI Development" },
      { "@type": "Offer", name: "NLP & Text Analytics", price: "0", priceCurrency: "INR", category: "AI Development" },
      { "@type": "Offer", name: "AI Workflow Automation", price: "0", priceCurrency: "INR", category: "Business Automation" },
      { "@type": "Offer", name: "Predictive Analytics & ML Models", price: "0", priceCurrency: "INR", category: "Machine Learning" },
    ],
  },
};

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/seo-company-ahmedabad#service",
  name: "SEO Services in Ahmedabad",
  description:
    "Top SEO company in Ahmedabad offering technical SEO audits, local SEO for Gujarat businesses, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), and performance marketing to rank higher on Google and AI search.",
  serviceType: "SEO Services",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
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
      { "@type": "Offer", name: "Technical SEO Audit", price: "0", priceCurrency: "INR", category: "Technical SEO" },
      { "@type": "Offer", name: "Local SEO Ahmedabad", price: "0", priceCurrency: "INR", category: "Local SEO" },
      { "@type": "Offer", name: "Google Business Profile Optimization", price: "0", priceCurrency: "INR", category: "Local SEO" },
      { "@type": "Offer", name: "Generative Engine Optimization (GEO)", price: "0", priceCurrency: "INR", category: "AI SEO" },
      { "@type": "Offer", name: "Answer Engine Optimization (AEO)", price: "0", priceCurrency: "INR", category: "AI SEO" },
      { "@type": "Offer", name: "Core Web Vitals Optimization", price: "0", priceCurrency: "INR", category: "Technical SEO" },
      { "@type": "Offer", name: "Schema Markup Implementation", price: "0", priceCurrency: "INR", category: "Technical SEO" },
      { "@type": "Offer", name: "Content SEO & Strategy", price: "0", priceCurrency: "INR", category: "Content SEO" },
    ],
  },
};

const webDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/web-development-company-ahmedabad#service",
  name: "Web Development Services in Ahmedabad",
  description:
    "Premier web development company in Ahmedabad building custom web applications, enterprise portals, e-commerce platforms, and progressive web apps using Next.js, React, Node.js, and TypeScript.",
  serviceType: "Web Development",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      { "@type": "Offer", name: "Custom Web Application Development", price: "0", priceCurrency: "INR", category: "Web Development" },
      { "@type": "Offer", name: "Next.js Development Company", price: "0", priceCurrency: "INR", category: "Web Development" },
      { "@type": "Offer", name: "React Development Services", price: "0", priceCurrency: "INR", category: "Web Development" },
      { "@type": "Offer", name: "E-commerce Website Development", price: "0", priceCurrency: "INR", category: "Web Development" },
      { "@type": "Offer", name: "Progressive Web App (PWA) Development", price: "0", priceCurrency: "INR", category: "Web Development" },
      { "@type": "Offer", name: "Enterprise Portal Development", price: "0", priceCurrency: "INR", category: "Enterprise Software" },
      { "@type": "Offer", name: "API Development & Integration", price: "0", priceCurrency: "INR", category: "Web Development" },
      { "@type": "Offer", name: "Website Redesign & Migration", price: "0", priceCurrency: "INR", category: "Web Development" },
    ],
  },
};

const mobileAppDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/mobile-app-development-company-ahmedabad#service",
  name: "Mobile App Development Services in Ahmedabad",
  description:
    "Leading mobile app development company in Ahmedabad building native iOS, Android, and cross-platform apps using Flutter, React Native, Swift, and Kotlin for startups and enterprises in Gujarat.",
  serviceType: "Mobile App Development",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "State", name: "Gujarat" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile App Development Services",
    itemListElement: [
      { "@type": "Offer", name: "iOS App Development", price: "0", priceCurrency: "INR", category: "Mobile Development" },
      { "@type": "Offer", name: "Android App Development", price: "0", priceCurrency: "INR", category: "Mobile Development" },
      { "@type": "Offer", name: "Flutter App Development", price: "0", priceCurrency: "INR", category: "Cross Platform" },
      { "@type": "Offer", name: "React Native Development", price: "0", priceCurrency: "INR", category: "Cross Platform" },
      { "@type": "Offer", name: "Cross-Platform App Development", price: "0", priceCurrency: "INR", category: "Cross Platform" },
      { "@type": "Offer", name: "Enterprise Mobile Apps", price: "0", priceCurrency: "INR", category: "Enterprise Software" },
      { "@type": "Offer", name: "App UI/UX Design", price: "0", priceCurrency: "INR", category: "Design" },
      { "@type": "Offer", name: "App Maintenance & Support", price: "0", priceCurrency: "INR", category: "Support" },
    ],
  },
};

const itCompanyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/it-company-ahmedabad#service",
  name: "IT Services & Consulting in Ahmedabad",
  description:
    "Top IT company in Ahmedabad providing end-to-end IT services including software development, IT consulting, digital transformation, cloud migration, DevOps, and managed IT services for businesses in Gujarat.",
  serviceType: "IT Services",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
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
      { "@type": "Offer", name: "IT Consulting & Strategy", price: "0", priceCurrency: "INR", category: "IT Consulting" },
      { "@type": "Offer", name: "Digital Transformation Services", price: "0", priceCurrency: "INR", category: "Digital Transformation" },
      { "@type": "Offer", name: "Cloud Migration Services", price: "0", priceCurrency: "INR", category: "Cloud Services" },
      { "@type": "Offer", name: "DevOps & CI/CD Implementation", price: "0", priceCurrency: "INR", category: "DevOps" },
      { "@type": "Offer", name: "Managed IT Services", price: "0", priceCurrency: "INR", category: "IT Support" },
      { "@type": "Offer", name: "Staff Augmentation & Dedicated Teams", price: "0", priceCurrency: "INR", category: "Staff Augmentation" },
      { "@type": "Offer", name: "Legacy System Modernization", price: "0", priceCurrency: "INR", category: "Software Modernization" },
      { "@type": "Offer", name: "Software Architecture Design", price: "0", priceCurrency: "INR", category: "Architecture" },
    ],
  },
};

const itServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://devflow.co.in/it-services-ahmedabad#service",
  name: "IT Services in Ahmedabad",
  description:
    "Comprehensive IT services provider in Ahmedabad offering software development, AI solutions, cloud services, cybersecurity, IT support, and digital transformation for SMEs and enterprises across Gujarat.",
  serviceType: "IT Services",
  provider: { "@type": "LocalBusiness", "@id": "https://devflow.co.in/#localbusiness" },
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
      { "@type": "Offer", name: "Custom Software Development", price: "0", priceCurrency: "INR", category: "Software Development" },
      { "@type": "Offer", name: "AI & Machine Learning Solutions", price: "0", priceCurrency: "INR", category: "AI Development" },
      { "@type": "Offer", name: "Web & Mobile App Development", price: "0", priceCurrency: "INR", category: "App Development" },
      { "@type": "Offer", name: "Cloud Infrastructure & DevOps", price: "0", priceCurrency: "INR", category: "Cloud Services" },
      { "@type": "Offer", name: "ERP & CRM Development", price: "0", priceCurrency: "INR", category: "Enterprise Software" },
      { "@type": "Offer", name: "IT Security & Compliance", price: "0", priceCurrency: "INR", category: "Cybersecurity" },
      { "@type": "Offer", name: "IT Support & Maintenance", price: "0", priceCurrency: "INR", category: "IT Support" },
      { "@type": "Offer", name: "Digital Marketing & SEO", price: "0", priceCurrency: "INR", category: "Digital Marketing" },
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
      name: "What is Generative Engine Optimization (GEO) and does DevFlow implement it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization (GEO) is the practice of optimizing content so AI engines like ChatGPT, Claude, and Gemini cite your business in conversational search responses. At DevFlow, we implement comprehensive GEO schemas (JSON-LD), establish standardized NAP references, and structure headings specifically for LLM crawler readability.",
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
        text: "DevFlow Technology is located at SG Highway, S.G. Road, Near Gujarat High Court, Ahmedabad, Gujarat 380015. We serve clients across Ahmedabad, Gandhinagar, Surat, Vadodara, and all of Gujarat with local presence and global delivery capabilities.",
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

// ========== Page-Specific Schema Generator ==========
function getPageSpecificSchema(pathname: string) {
  const schemas: Record<string, any> = {
    "/ai-development-company-ahmedabad": aiDevelopmentServiceSchema,
    "/seo-company-ahmedabad": seoServiceSchema,
    "/web-development-company-ahmedabad": webDevelopmentServiceSchema,
    "/mobile-app-development-company-ahmedabad": mobileAppDevelopmentServiceSchema,
    "/it-company-ahmedabad": itCompanyServiceSchema,
    "/it-services-ahmedabad": itServicesSchema,
  };
  return schemas[pathname] || null;
}

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

  const pageSpecificSchema = getPageSpecificSchema(pathname);

  return (
    <>
      {/* Base Organization Schema - Always present */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      {/* LocalBusiness Citation Schema - NAP Consistency for directories */}
      <Script
        id="local-citation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCitationSchema) }}
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

      {/* LocalBusiness - Important for local SEO on homepage and contact */}
      {(isHomePage || isContactPage) && (
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
      )}

      {/* Service Schema with Location - GEO entity richness on services page */}
      {isServicesPage && (
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          strategy="afterInteractive"
        />
      )}

      {/* Page-specific service schemas for local landing pages */}
      {pageSpecificSchema && (
        <Script
          id="page-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSpecificSchema) }}
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