export interface LocationDetail {
  slug: string;
  name: string;
  region: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  introduction: string;
  mapEmbedUrl: string;
  napAddress: {
    name: string;
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    phone: string[];
    email: string;
  };
  nearbyLandmarks: string[];
  testimonials: { clientName: string; company: string; quote: string }[];
  caseStudies: { title: string; outcome: string; link: string }[];
  content: string;
  ctaText: string;
}

export const locationsData: Record<string, LocationDetail> = {
  "ahmedabad": {
    slug: "ahmedabad",
    name: "Ahmedabad",
    region: "Gujarat",
    title: "Software Development Company in Ahmedabad",
    metaDescription: "Leading software development company in Ahmedabad, Gujarat. DevFlow builds custom ERP, SaaS platforms, and AI automation systems.",
    keywords: ["software development company Ahmedabad", "IT company Ahmedabad", "web development company Ahmedabad", "local SEO Ahmedabad", "IT services Gujarat"],
    introduction: "DevFlow Technology is a premier software development partner in Ahmedabad, Gujarat, providing custom software, AI workflows, and enterprise web applications to growing and established regional brands.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!3m2!1d23.0225!2d72.5714!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    napAddress: {
      name: "DevFlow Technology",
      street: "Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway",
      locality: "Ahmedabad",
      region: "Gujarat",
      postalCode: "382210",
      country: "India",
      phone: ["+91-97261-13311", "+91-63550-43103"],
      email: "info@devflow.co.in"
    },
    nearbyLandmarks: [
      "Swaminarayan Temple Navapura",
      "Sarkhej Roza Heritage Site",
      "Sarkhej-Bavla National Highway 47",
      "Sanand GIDC Industrial Estate"
    ],
    testimonials: [
      {
        clientName: "Jaydeep Patel",
        company: "Vassu Infotech",
        quote: "DevFlow built a custom ERP that synchronized our warehouse locations. Best software development company in Ahmedabad."
      }
    ],
    caseStudies: [
      { title: "Vassu Infotech Layout Optimization", outcome: "Achieved perfect PageSpeed scores and sub-second load times.", link: "/work/vassu-infotech" }
    ],
    content: "Ahmedabad is Gujarat's premier industrial and technology hub. DevFlow operates right on the Sarkhej-Bavla highway, supporting local GIDC manufacturing companies in Sanand and Changodar. We unify logistics, audit workflows, and deploy AI chatbots designed to understand regional Hindi and Gujarati queries. Our local presence ensures absolute alignment during physical audits, client discovery sessions, and project rollouts.",
    ctaText: "Get Technical Blueprint in Ahmedabad"
  },
  "gujarat": {
    slug: "gujarat",
    name: "Gujarat",
    region: "Gujarat",
    title: "Custom Software Development Services Gujarat",
    metaDescription: "Enterprise software development company in Gujarat. We engineer custom database ERPs, AI automation tools, and Next.js web applications across Gujarat.",
    keywords: ["software development company Gujarat", "IT services Gujarat", "web development Gujarat", "ERP company Gujarat"],
    introduction: "DevFlow Technology serves the entire industrial belt of Gujarat, delivering bespoke ERP solutions, CRM pipelines, and AI automation systems for enterprises in Ahmedabad, Gandhinagar, Surat, Vadodara, and Rajkot.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!3m2!1d22.2587!2d71.1924!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    napAddress: {
      name: "DevFlow Technology",
      street: "Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway",
      locality: "Ahmedabad",
      region: "Gujarat",
      postalCode: "382210",
      country: "India",
      phone: ["+91-97261-13311", "+91-63550-43103"],
      email: "info@devflow.co.in"
    },
    nearbyLandmarks: [
      "Gujarat International Finance Tec-City (GIFT City)",
      "Sarkhej-Bavla Highway",
      "Sanand Industrial GIDC Area"
    ],
    testimonials: [
      {
        clientName: "Amit Sharma",
        company: "Gujarat Manufacturing Consortium",
        quote: "DevFlow's logistics portal reduced our dispatch processing timeline by 35%. Excellent IT partner for Gujarat industries."
      }
    ],
    caseStudies: [
      { title: "German Logistics Portal", outcome: "Optimized shipping workflows across 120+ active employees.", link: "/work/german-logistics-portal" }
    ],
    content: "Gujarat is India's manufacturing powerhouse. From the pharmaceutical clusters in Vadodara to the textile mills of Surat, industrial businesses need custom enterprise software to keep operations efficient. DevFlow engineers software that eliminates expensive SAP seats, automates invoice generation, and integrates with local GIDC shipping APIs. Our team provides on-site consulting for companies looking to transition legacy systems into Next.js and secure cloud architectures.",
    ctaText: "Schedule Consultation in Gujarat"
  },
  "mumbai": {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    title: "Software Development Company in Mumbai",
    metaDescription: "Hire custom software developers in Mumbai. DevFlow builds scalable SaaS products, AI automation systems, and high performance web apps.",
    keywords: ["software development company Mumbai", "IT company Mumbai", "web development Mumbai", "custom software Mumbai"],
    introduction: "DevFlow Technology provides Mumbai-based financial services, retail brands, and startups with bespoke enterprise software systems and dedicated engineering teams.",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!3m2!1d19.0760!2d72.8777!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    napAddress: {
      name: "DevFlow Technology",
      street: "Opp. Empty Plot, Near Swaminarayan Temple, Navapura, Sarkhej-Bavla Highway",
      locality: "Ahmedabad",
      region: "Gujarat",
      postalCode: "382210",
      country: "India",
      phone: ["+91-97261-13311", "+91-63550-43103"],
      email: "info@devflow.co.in"
    },
    nearbyLandmarks: [
      "Bandra Kurla Complex (BKC)",
      "Chhatrapati Shivaji Maharaj Terminus",
      "Nariman Point Business District"
    ],
    testimonials: [
      {
        clientName: "Rohan Mehta",
        company: "Bombay FinTech Lab",
        quote: "DevFlow delivered our multi-tenant SaaS dashboard on schedule. Their database caching speed is phenomenal."
      }
    ],
    caseStudies: [
      { title: "SaaS Billing Webhook Engine", outcome: "Reduced payment churn by 18% using resilient Stripe webhooks.", link: "/work/saas-billing-engine" }
    ],
    content: "Mumbai is the financial capital of India. Financial platforms, real estate groups, and B2B SaaS companies in Bandra, Andheri, and BKC choose DevFlow to build secure web applications and AI APIs. We implement robust JWT validation, SSL encryption, and high-performance WebSockets to handle thousands of concurrent queries with sub-second response times.",
    ctaText: "Get Technical Architecture Blueprint"
  }
};
