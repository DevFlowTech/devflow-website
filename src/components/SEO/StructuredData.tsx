'use client';

import Script from 'next/script';

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DevFlow Technology',
  alternateName: 'DevFlow',
  url: 'https://devflow.co.in',
  logo: 'https://devflow.co.in/logo.png',
  description: 'High-performance digital experiences engineered for businesses that demand precision, speed, and measurable impact. Elite web development for founders and agencies.',
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/devflowtechnology',
    'https://linkedin.com/company/devflowtechnology',
    'https://github.com/devflowtechnology',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'devflowtechnology@gmail.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

// Professional Service Schema
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://devflow.co.in/#service',
  name: 'DevFlow Technology',
  description: 'Premium web engineering and development services for businesses. We specialize in high-performance websites, custom web applications, and conversion-focused digital experiences.',
  url: 'https://devflow.co.in',
  logo: 'https://devflow.co.in/logo.png',
  image: 'https://devflow.co.in/og-image.png',
  priceRange: '$$$',
  telephone: '',
  email: 'devflowtechnology@gmail.com',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Engineering',
          description: 'Bespoke web applications built with modern frameworks like Next.js, React, and TypeScript for sub-second experiences.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'High-Performance Websites',
          description: 'Lightning-fast business and agency websites optimized for Core Web Vitals, lazy loading, and edge caching.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Conversion-Focused Experiences',
          description: 'Strategic digital experiences designed around user research, A/B tested solutions for maximum conversions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Scalable Systems Design',
          description: 'Architecture that grows with your business using microservices, API design, and cloud-native solutions.',
        },
      },
    ],
  },
};

// WebSite Schema with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://devflow.co.in/#website',
  name: 'DevFlow Technology',
  url: 'https://devflow.co.in',
  description: 'World-class web engineering for businesses that demand precision, speed, and measurable impact.',
  publisher: {
    '@type': 'Organization',
    name: 'DevFlow Technology',
    logo: {
      '@type': 'ImageObject',
      url: 'https://devflow.co.in/logo.png',
    },
  },
  inLanguage: 'en-US',
};

// FAQ Schema for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does DevFlow Technology offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DevFlow Technology offers premium web engineering services including custom web application development, high-performance website creation, conversion-focused UX design, and scalable systems architecture. We specialize in Next.js, React, TypeScript, and modern cloud infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical web development project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines vary based on complexity. A standard high-performance website typically takes 4-8 weeks, while complex web applications may require 8-16 weeks. We follow a structured process: Discovery, Design, Build, and Launch & Optimize.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does DevFlow use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use an enterprise-grade modern stack including Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Vercel, PostgreSQL, and Prisma. This ensures production-ready, scalable, and maintainable applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I start a project with DevFlow Technology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can start by contacting us through our website contact form or emailing devflowtechnology@gmail.com. We typically respond within 24 hours and schedule a consultation to discuss your project requirements.',
      },
    },
  ],
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://devflow.co.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Capabilities',
      item: 'https://devflow.co.in/#capabilities',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Our Work',
      item: 'https://devflow.co.in/#work',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Process',
      item: 'https://devflow.co.in/#process',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact',
      item: 'https://devflow.co.in/#contact',
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
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
    </>
  );
}
