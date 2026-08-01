export interface IndustryDetail {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  definition: string;
  summary: string;
  keyTakeaways: string[];
  pros: string[];
  cons: string[];
  challenges: { issue: string; solution: string }[];
  benefits: string[];
  features: { name: string; detail: string }[];
  process: { step: string; title: string; description: string }[];
  timeline: string;
  pricingPhilosophy: string;
  faqs: { question: string; answer: string }[];
  technologies: string[];
  caseStudies: { title: string; outcome: string; link: string }[];
  comparisonTable: { headers: string[]; rows: string[][] };
  costFactors: string[];
  checklist: string[];
  expertInsights: string;
  ctaText: string;
  compliance: string[];
  workflows: string[];
  integrations: string[];
  content: string;
}

export const industriesData: Record<string, IndustryDetail> = {
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare Software Development Company",
    metaDescription: "HIPAA compliant healthcare software development company. Build custom hospital management systems, patient portals, and electronic health records (EHR).",
    keywords: ["healthcare software development", "hospital management software", "HIPAA compliant software", "EHR development", "clinic software"],
    definition: "Healthcare Software Development is the design, creation, and deployment of secure, certified digital products tailored for hospital automation, patient recording, electronic health records (EHR), and clinic management.",
    summary: "Secure, compliant, and integrated clinical solutions designed to streamline workflows, coordinate patient care, and ensure data protection.",
    keyTakeaways: [
      "Full HIPAA, GDPR, and local medical data protection compliance.",
      "Seamless integrations with diagnostic laboratory equipment and pharmacy APIs.",
      "High reliability system architecture with zero-downtime failover targets.",
      "Optimized patient booking dashboards reducing administrative overhead."
    ],
    pros: [
      "Drastic reduction in manual patient record coordination.",
      "100% compliant data structures keeping patient records secure.",
      "Streamlined doctor scheduling and telemedicine features.",
      "Instant billing, payment gateway, and insurance claim handling."
    ],
    cons: [
      "Requires strict compliance validation testing.",
      "Must integrate with complex legacy medical standards (HL7/FHIR).",
      "Longer compliance certification timeline."
    ],
    challenges: [
      { issue: "Compliance breaches in transit", solution: "Enforce end-to-end encryption on all patient fields using TLS 1.3 and database encryption." },
      { issue: "Slow patient booking during spikes", solution: "Deploy Redis task queues and auto-scaling server configurations on AWS." }
    ],
    benefits: [
      "Patient Engagement: Self-service portal to book slots, view reports, and consult doctors.",
      "Staff Relief: Automated billing and queue alerts save hours of manual calling.",
      "Accurate Diagnoses: Instant access to historical EHR telemetry."
    ],
    features: [
      { name: "Hospital Management Dashboard", detail: "Real-time tracking of ward occupancy, doctor shifts, and equipment status." },
      { name: "Patient Portal", detail: "Telehealth consult triggers, medical chart reports, and secure bill pay modules." }
    ],
    process: [
      { step: "01", title: "Compliance Review", description: "Auditing health data security rules, regional laws, and third-party links." },
      { step: "02", title: "DB Schema Design", description: "Constructing secure relational schemas with strict data partition boundaries." },
      { step: "03", title: "Development", description: "Building HIPAA-compliant Next.js frontends and Node.js APIs." },
      { step: "04", title: "Penetration Testing", description: "Conducting data audits and vulnerability testing before release." }
    ],
    timeline: "8 to 16 weeks.",
    pricingPhilosophy: "Fixed-price milestone engagement covering audit documentation and deployment.",
    faqs: [
      { question: "Is the software HIPAA compliant?", answer: "Yes, all health solutions we build enforce strict access controls, encryption, and audit logs matching HIPAA standards." },
      { question: "Can we link the CRM to external diagnostic labs?", answer: "Yes, we build standard HL7/FHIR API adapters to sync diagnostic outputs instantly." }
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS KMS", "Redis", "WebSockets"],
    caseStudies: [
      { title: "Medicare AI Booking System", outcome: "Reduced patient queue lag times to 240ms, saving staff 15+ hours/week.", link: "/work/medicare-ai-system" }
    ],
    comparisonTable: {
      headers: ["Metric", "DevFlow Custom Healthcare App", "Standard Template EHR"],
      rows: [
        ["Compliance Security", "Dedicated custom encryption", "Generic standard templates"],
        ["Lab Integrations", "Custom HL7 adapters built to scope", "Rigid built-in links only"],
        ["User Experience", "Custom layouts for doctors", "Cluttered legacy panels"],
        ["Hosting", "Your private secure server", "Shared vendor cloud servers"]
      ]
    },
    costFactors: ["HL7/FHIR link density", "Number of clinics to sync", "Telehealth video streaming requirements", "Compliance certification audits"],
    checklist: ["Outline target compliance standards", "Map doctor/patient dashboard roles", "Establish database security keys", "List diagnostic lab connections"],
    expertInsights: "Healthcare in 2026 demands sub-second speeds and bulletproof privacy. Custom portal systems bridge this gap by linking EHRs to patient phones.",
    ctaText: "Build Secure Healthcare Platform",
    compliance: ["HIPAA (Health Insurance Portability and Accountability Act)", "GDPR (General Data Protection Regulation)", "FHIR / HL7 Standards"],
    workflows: ["Patient Intake & Online Registration", "Doctor Scheduling & Shift Allocations", "Telehealth Video Consultations", "Insurance Claims Filing & Billing"],
    integrations: ["EPIC / Cerner EHR APIs", "Stripe Healthcare Payments", "Twilio Video Consult API", "Laboratory Information Systems (LIS)"],
    content: "Healthcare organizations in 2026 demand modern portal networks to connect clinical staff and patient operations securely. DevFlow Technology builds certified clinical web tools, telemedicine portals, and custom hospital management systems designed to streamline doctor allocations and inventory tracking."
  },
  "manufacturing": {
    slug: "manufacturing",
    title: "Manufacturing ERP Software Solutions",
    metaDescription: "Optimize supply chains and inventory with bespoke manufacturing ERP software systems built by engineering experts in India.",
    keywords: ["manufacturing ERP software", "inventory management system", "warehouse automation", "supply chain solutions"],
    definition: "Manufacturing ERP Software refers to customized business platforms built to manage production scheduling, inventory replenishment, warehouse tracking, and equipment maintenance.",
    summary: "Industrial-grade inventory and shop-floor tracking systems built to automate logistics, manage inventory, and optimize yield.",
    keyTakeaways: [
      "Automated replenishment algorithms eliminating inventory gaps.",
      "Floor-to-warehouse dynamic tracking using barcodes and scanning.",
      "Preventive machine maintenance scheduling algorithms.",
      "Live operational telemetry dashboarding for business owners."
    ],
    pros: [
      "Zero vendor seat license overheads.",
      "Custom bill of materials (BOM) configurations.",
      "Unified inventory data across multiple warehouse yards.",
      "Predictive material delay triggers."
    ],
    cons: [
      "Requires internal hardware configuration (scanners, printers).",
      "Demands clear bill of material inputs.",
      "Implementation cycle of 10 to 18 weeks."
    ],
    challenges: [
      { issue: "Material inventory mismatches", solution: "Deploy barcode scanning adapters linked to real-time Postgres databases." },
      { issue: "Shop floor equipment downtime", solution: "Build predictive alerts using usage metrics to schedule maintenance before breakdown." }
    ],
    benefits: [
      "Inventory Speed: Track parts movement across bays instantly.",
      "Yield Optimization: Predict raw materials requirements based on incoming order pipelines.",
      "Zero Waste: First-in, first-out (FIFO) inventory algorithms."
    ],
    features: [
      { name: "Live BOM Tracker", detail: "Automated calculations of material costs and assembly labor rates." },
      { name: "Warehouse Mapping Grid", detail: "Visual layout grids displaying bin contents, slot locations, and stock levels." }
    ],
    process: [
      { step: "01", title: "Floor Audit", description: "Mapping parts routing, inventory lanes, and assembly steps." },
      { step: "02", title: "DB Architecture", description: "Design relational models for components, orders, suppliers, and locations." },
      { step: "03", title: "Development", description: "Coding the warehouse UI, barcode scanners, and reporting systems." },
      { step: "04", title: "UAT Sprints", description: "Deploying system in staging yard and debugging real floor usage errors." }
    ],
    timeline: "10 to 18 weeks.",
    pricingPhilosophy: "Milestone-driven fixed cost matching warehouse count and functional complexity.",
    faqs: [
      { question: "Can this ERP integrate with barcode scanners?", answer: "Yes, we build custom camera-based scanning and handheld barcode API hooks for instant logging." },
      { question: "How does it handle multiple warehouses?", answer: "It centralizes multiple locations into a single database, showing aggregate and yard-level metrics." }
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "Docker", "Nginx", "Redis"],
    caseStudies: [
      { title: "German Logistics Portal", outcome: "Reduced route delays by 35% across European ports using real-time sync.", link: "/work/german-logistics-portal" }
    ],
    comparisonTable: {
      headers: ["Metric", "DevFlow Custom ERP", "Odoo / NetSuite"],
      rows: [
        ["Licensing Overheads", "₹0 (Perpetual ownership)", "₹30,000+ / user / year"],
        ["Floor Customization", "100% bespoke tracking", "Rigid prebuilt modules"],
        ["Scan Latency", "Under 100ms via WebSockets", "Standard page refresh delay"],
        ["Hardware Sync", "Direct socket connections", "Needs expensive middleware"]
      ]
    },
    costFactors: ["Number of active warehouses", "BOM complexity parameters", "Barcode scanner API requirements", "Legacy accounting links"],
    checklist: ["Detail components and bill of materials", "Document current warehouse bin layouts", "Map shop floor user roles", "Identify necessary accounting exports"],
    expertInsights: "In manufacturing, a delay of 2 hours on raw parts halts assembly. A custom ERP updates inventory levels in real-time to avoid bottlenecks.",
    ctaText: "Optimize Production Line Now",
    compliance: ["ISO 9001 Compliance", "Safety and Health Regulations", "Local Tax / GST Guidelines"],
    workflows: ["Bill of Materials (BOM) Routing", "Raw Materials Reordering Automation", "Barcode Scanning Verification", "Shop Floor Shift Analytics"],
    integrations: ["Honeywell Scanner APIs", "SAP Legacy Database Adapters", "Tally ERP Accounting Bridge", "Logistics Shipping Carriers"],
    content: "Manufacturing operations require centralized data loops to prevent assembly delays. DevFlow designs custom manufacturing ERP platforms that track parts movements across yards and yards of floor space, automating material reordering and tracking shipping logistics."
  }
};
