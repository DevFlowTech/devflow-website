"use client";

import Script from "next/script";

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevFlow Technology",
  alternateName: "DevFlow",
  url: "https://devflow.co.in",
  logo: "https://devflow.co.in/logo.png",
  description:
    "Full-service IT company delivering AI solutions, enterprise ERP systems, custom software development, and digital transformation services for businesses worldwide.",
  foundingDate: "2025",
  sameAs: [
    "https://twitter.com/devflowtechnology",
    "https://linkedin.com/company/devflowtechnology",
    "https://github.com/devflowtechnology",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "devflowtechnology@gmail.com",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  brand: {
    "@type": "Brand",
    name: "DevFlow",
  },
  founder: {
    "@type": "Person",
    name: "Prince Gajjar",
    jobTitle: "Founder & Owner",
    url: "https://devflow.co.in",
  },
};

// Professional Service Schema
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://devflow.co.in/#service",
  name: "DevFlow Technology",
  description:
    "Full-service IT company offering AI & ML solutions, enterprise ERP systems, custom web development, mobile apps, cloud infrastructure, and 24/7 IT support.",
  url: "https://devflow.co.in",
  logo: "https://devflow.co.in/logo.png",
  image: "https://devflow.co.in/og-image.png",
  priceRange: "$$$",
  telephone: "",
  email: "devflowtechnology@gmail.com",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Machine Learning Solutions",
          description:
            "Intelligent solutions powered by cutting-edge AI including machine learning models, NLP, computer vision, and custom AI integrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise ERP Systems",
          description:
            "End-to-end ERP solutions including inventory management, HR, accounting, CRM, and supply chain management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          description:
            "Bespoke web applications built with modern frameworks like Next.js, React, and TypeScript for high-performance experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud & DevOps Services",
          description:
            "Cloud infrastructure setup, CI/CD pipelines, AWS, Azure, and GCP deployments with automated scaling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Consulting & Support",
          description:
            "Strategic technology consulting, digital transformation, system audits, security assessments, and 24/7 support.",
        },
      },
    ],
  },
};

// WebSite Schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://devflow.co.in/#website",
  name: "DevFlow Technology - AI Agency & Web Development Company",
  url: "https://devflow.co.in",
  description:
    "Leading AI agency and web development company in India. We build AI solutions, ERP systems, web apps, mobile apps, and provide cloud services.",
  publisher: {
    "@type": "Organization",
    name: "DevFlow Technology",
    logo: {
      "@type": "ImageObject",
      url: "https://devflow.co.in/logo.png",
    },
  },
  inLanguage: "en-US",
};

// FAQ Schema for common questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
      name: "How can I hire DevFlow Technology for my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start by contacting us through our website contact form or emailing devflowtechnology@gmail.com. We offer flexible engagement models including project-based work, dedicated teams, and ongoing retainer services. We typically respond within 24 hours to discuss your project requirements.",
      },
    },
  ],
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://devflow.co.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Capabilities",
      item: "https://devflow.co.in/#capabilities",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Our Work",
      item: "https://devflow.co.in/#work",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Process",
      item: "https://devflow.co.in/#process",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://devflow.co.in/#contact",
    },
  ],
};

// LocalBusiness Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
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
    addressLocality: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.5937",
    longitude: "78.9629",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
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
};

// SoftwareApplication Schema for enhanced visibility
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function StructuredData() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="software-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
