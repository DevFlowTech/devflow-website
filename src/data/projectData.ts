export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  color: string;
  accent: string;
  url: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "pixsignerz-portal",
    title: "Pixsignerz Portal",
    category: "Enterprise Solutions",
    description: "Secure digital enterprise portal for Aureon, streamlining internal workflows and document management.",
    longDescription: "A complete custom-engineered document security and signature workflows system, Pixsignerz Portal was developed to resolve complex administrative file approvals and internal document workflows for enterprise clients. It features modern cryptographic security standards and role-based permissions.",
    tech: ["WordPress", "PHP", "MySQL", "Cryptography API", "Tailwind CSS"],
    color: "from-devflow-green/20 to-devflow-green/5",
    accent: "#CCFF00",
    url: "https://pixsignerz.aureon.co.in",
    challenge: "Managing thousands of confidential files with varied signature approvals across hierarchical corporate levels resulted in major operational drag and security risks.",
    solution: "We engineered a clean custom signature system with strict role-based authentications and automated progress tracking dashboard that sends immediate notifications.",
    results: [
      "Reduced contract execution cycle by 78%",
      "Zero compliance breach reports since launch",
      "94% active employee satisfaction rating",
    ],
  },
  {
    slug: "future-realty-space",
    title: "Future Realty Space",
    category: "Real Estate",
    description: "Modern property brokerage platform enabling seamless property discovery and client management.",
    longDescription: "A responsive, high-end real estate brokerage engine featuring an interactive search architecture and automated recommendation logic, helping brokers connect with potential buyers.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion", "Mapbox API"],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "#3b82f6",
    url: "https://futurerealtyspace.com",
    challenge: "Slow load times and confusing interface structures in real estate search applications caused massive lead attrition rates.",
    solution: "Introduced dynamic Next.js routes, localized database indexes, and customized search filters to allow sub-second property comparisons.",
    results: [
      "Improved mobile conversion rates by 42%",
      "Achieved average load times of 0.8 seconds",
      "Increased user session duration by 150%",
    ],
  },
  {
    slug: "aureon-india",
    title: "Aureon India",
    category: "Corporate Tech",
    description: "Professional corporate presence for a leading IT and managed services provider.",
    longDescription: "An agency corporate presentation site displaying capabilities and client reviews. High contrast, dynamic grids, and responsive components showcase their technical solutions.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    color: "from-purple-500/20 to-purple-500/5",
    accent: "#a855f7",
    url: "https://aureon.co.in",
    challenge: "The client needed a digital presentation that reflected high-end engineering authority rather than generic B2B visuals.",
    solution: "Designed a clean glassmorphism layout with scroll-triggered graphics to illustrate infrastructure support capabilities.",
    results: [
      "60% increase in digital lead inquires",
      "Perfect 100/100 Google Lighthouse SEO score",
      "Elevated search engine rankings for target IT keywords",
    ],
  },
  {
    slug: "vassu-infotech",
    title: "Vassu Infotech",
    category: "IT Services",
    description: "Comprehensive IT services and hardware solutions platform with e-commerce integration.",
    longDescription: "Hardware inventory listing and consultation booking platform, streamlining client hardware orders and support queries.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    color: "from-indigo-500/20 to-indigo-500/5",
    accent: "#6366f1",
    url: "https://vassuinfotech.com",
    challenge: "Scaling offline hardware sales and support consultations required manual order entry, slow processing times, and constant phone monitoring.",
    solution: "Built a clean e-commerce system with dynamic product syncs, instant consult schedulers, and Stripe credit checkout.",
    results: [
      "Automated 95% of incoming hardware quotes",
      "Generated ₹8.5L in new online revenue within first 30 days",
      "Reduced consultation scheduling overhead to zero",
    ],
  },
  {
    slug: "narmada-sales",
    title: "Narmada Sales",
    category: "Web Application",
    description: "Full-stack real estate management system optimizing property tracking and sales operations.",
    longDescription: "Internal ERP application tailored for real estate sales agents, displaying lead pipelines, construction milestones, and contract statuses in a unified control dashboard.",
    tech: ["PHP", "MySQL", "JavaScript", "Chart.js"],
    color: "from-orange-500/20 to-orange-500/5",
    accent: "#f97316",
    url: "https://narmadasales.pages.dev",
    challenge: "Sales teams tracked customer pipeline stages across disjointed sheets, leading to double-booked property units and manual document slip-ups.",
    solution: "Configured an enterprise-level database system tracking property statuses in real-time with automated contract builders.",
    results: [
      "Eliminated booking conflicts completely",
      "Sped up customer onboarding from 3 days to 15 minutes",
      "Saved 20+ administrative hours per week",
    ],
  },
  {
    slug: "path-visa-advisor",
    title: "Path Visa Advisor",
    category: "Web Application",
    description: "Trusted global visa partner providing expert guidance and fast processing for all visa types.",
    longDescription: "Interactive application wizard that lets clients check visa eligibility, upload documentation safely, and pay processing fees online.",
    tech: ["Next.js", "React", "TailwindCSS", "Firebase Auth", "Cloud Storage"],
    color: "from-cyan-500/20 to-cyan-500/5",
    accent: "#06b6d4",
    url: "https://path-visa-advisor.vercel.app/",
    challenge: "Confusing government rules and manual email file uploads resulted in high document submission error rates and delays.",
    solution: "Designed a clean step-by-step visa wizard validating documents before submission, with direct tracking of embassy updates.",
    results: [
      "Lowered document error rates by 90%",
      "Increased processing speeds by 40%",
      "Achieved average customer rating of 4.9/5 stars",
    ],
  },
];
