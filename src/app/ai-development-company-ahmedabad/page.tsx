"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import StructuredData from "@/components/SEO/StructuredData";
import Link from "next/link";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck, HiStar, HiArrowRight, HiCpuChip, HiSparkles, HiArrowPath, HiMagnifyingGlass, HiChatBubbleLeftRight, HiBolt } from "react-icons/hi2";


const aiServices = [
  {
    icon: HiCpuChip,
    title: "Custom LLM Integration",
    description: "Fine-tune and deploy LLMs (Llama, Mistral, GPT) for your specific business use cases with RAG pipelines and vector databases.",
    features: ["Model Fine-tuning", "RAG Architecture", "Vector DB Setup", "Private Deployment"],
    href: "/services/ai-automation",
  },
  {
    icon: HiSparkles,
    title: "Generative AI Applications",
    description: "Build production-ready generative AI apps for content creation, code generation, design automation, and business workflows.",
    features: ["Text Generation", "Image Synthesis", "Code Generation", "Workflow Automation"],
    href: "/services/ai-automation",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI with multi-language support (English, Hindi, Gujarati) for customer support and sales automation.",
    features: ["Multi-language NLP", "Context Memory", "CRM Integration", "Voice Support"],
    href: "/services/ai-automation",
  },
  {
    icon: HiArrowPath,
    title: "AI Workflow Automation",
    description: "End-to-end business process automation using AI agents, document processing, data extraction, and intelligent routing.",
    features: ["Document AI", "Process Mining", "Agent Orchestration", "ROI Tracking"],
    href: "/services/ai-automation",
  },
  {
    icon: HiMagnifyingGlass,
    title: "Computer Vision & NLP",
    description: "Custom computer vision models for quality inspection, OCR, object detection and NLP pipelines for sentiment, classification, extraction.",
    features: ["Object Detection", "OCR/Document AI", "Sentiment Analysis", "Entity Extraction"],
    href: "/services/ai-automation",
  },
  {
    icon: HiBolt,
    title: "MLOps & Model Deployment",
    description: "Production-grade ML infrastructure with CI/CD for models, monitoring, drift detection, A/B testing, and auto-scaling on AWS/GCP/Azure.",
    features: ["Model Registry", "Drift Monitoring", "A/B Testing", "Auto-scaling"],
    href: "/services/ai-automation",
  },
];

const techStack = [
  "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Hugging Face", "OpenAI API",
  "Anthropic Claude", "Pinecone", "Weaviate", "Qdrant", "MLflow", "Kubeflow",
  "Docker", "Kubernetes", "AWS SageMaker", "GCP Vertex AI",
];

const localFaqs = [
  {
    question: "Why choose DevFlow as your AI development company in Ahmedabad?",
    answer: "DevFlow combines deep AI/ML expertise with local Gujarat market understanding. We've delivered LLM solutions, RAG systems, and AI automation for enterprises across Ahmedabad, Gandhinagar, Surat, and Vadodara. Our team works directly with your technical stakeholders—no account manager layers.",
  },
  {
    question: "Do you build AI solutions with Gujarati/Hindi language support?",
    answer: "Yes. We fine-tune models and build NLP pipelines with native Gujarati and Hindi support for chatbots, document processing, and voice AI. This is critical for businesses serving Gujarat's local markets and government sectors.",
  },
  {
    question: "What is your AI project delivery timeline and pricing model?",
    answer: "Typical AI MVPs: 4-8 weeks (₹3-15L). Production RAG/Chatbot systems: 8-16 weeks (₹10-50L). Enterprise AI platforms: 16-32 weeks (₹50L+). We offer fixed-price discovery phases, then milestone-based billing. Free technical consultation for Gujarat-based companies.",
  },
  {
    question: "Can you integrate AI with our existing ERP/CRM systems?",
    answer: "Absolutely. We specialize in integrating AI agents with SAP, Oracle, Salesforce, custom ERPs, and legacy systems via APIs, RPA, or direct database connections. Our Ahmedabad team has deep experience with Gujarat manufacturing and trading ERP landscapes.",
  },
  {
    question: "Do you provide AI consulting and strategy for Gujarat enterprises?",
    answer: "Yes. Our AI strategy workshops help leadership teams identify high-ROI use cases, assess data readiness, and build implementation roadmaps. We've advised family-owned enterprises in Ahmedabad, Surat, and Rajkot on AI adoption strategies.",
  },
];

export default function AIDevelopmentAhmedabadPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-28 pb-16 overflow-hidden">
      <StructuredData />
      
      {/* Hero Narrative */}
      <section className="pt-20 pb-16 border-b border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.03),transparent_50%)] pointer-events-none" />
        <div className="section-container relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.span variants={staggerItem} className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ AI SOLUTIONS // AHMEDABAD, GUJARAT ]
            </motion.span>
            
            <motion.h1 variants={staggerItem} className="font-display text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight max-w-4xl">
              Top <span className="italic font-normal font-display text-devflow-green">AI Development Company</span> in Ahmedabad.
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              DevFlow Technology engineers custom LLM integrations, RAG systems, generative AI applications, and intelligent automation for forward-thinking businesses across Gujarat. From Ahmedabad to Surat—we build AI that works in production.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                START AI PROJECT DISCOVERY <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/ai-automation" className="px-8 py-4 border border-white/[0.1] text-white font-semibold text-xs rounded-xl hover:border-devflow-green/50 transition-colors inline-flex items-center gap-2">
                VIEW AI SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">50+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">AI Models Deployed</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">15+</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">LLM/RAG Projects</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">8</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Gujarat Cities Served</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-1">
              <p className="text-3xl md:text-4xl font-display font-medium text-devflow-green">99.9%</p>
              <p className="text-xs text-devflow-gray-400 uppercase tracking-wide">Model Uptime SLA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ AI EXPERTISE DIRECTORY ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Engineered for Gujarat's AI-First Enterprises</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" aria-label={service.title} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-devflow-gray-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-devflow-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-devflow-green text-xs font-mono hover:underline inline-flex items-center gap-1">
                  EXPLORE <HiArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ PRODUCTION STACK ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">Battle-Tested AI/ML Technology Stack</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">We don't chase hype. We use proven tools that scale in production for our Gujarat enterprise clients.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-4 py-2 rounded-lg bg-devflow-charcoal border border-white/[0.05] text-xs font-mono text-devflow-gray-300 hover:border-devflow-green/30 hover:text-white transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Local Relevance / Location Card */}
      <section className="py-24 bg-devflow-charcoal border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ HEADQUARTERS ]</span>
              <h2 className="text-3xl font-display font-medium text-white">Our Ahmedabad AI Lab</h2>
              <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">
                Located on SG Highway near Gujarat High Court, our team of ML engineers and AI researchers builds production-grade AI systems for clients across Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot, and beyond.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiMapPin className="w-5 h-5" aria-label="Address" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">OFFICE ADDRESS</h4>
                    <p className="text-sm text-white font-medium">SG Highway, S.G. Road, Near Gujarat High Court, Ahmedabad, Gujarat 380015</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiPhone className="w-5 h-5" aria-label="Phone" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">TELEPHONE</h4>
                    <p className="text-sm text-white font-medium">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green shrink-0">
                    <HiEnvelope className="w-5 h-5" aria-label="Email" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-devflow-gray-500 uppercase">EMAIL</h4>
                    <p className="text-sm text-white font-medium">info@devflow.co.in</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Ahmedabad</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Gandhinagar</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Surat</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Vadodara</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Rajkot</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Jamnagar</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Bhavnagar</span>
                <span className="px-3 py-1 rounded-full bg-devflow-green/10 text-devflow-green text-xs font-mono">Anand</span>
              </div>
            </div>
            
            {/* Visual map placeholder */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.06] bg-devflow-black p-8 flex flex-col justify-between group hover:border-devflow-green/20 transition-all">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05),transparent_70%)]" />
              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono text-devflow-green">[ GOOGLE MAPS DATA ]</span>                  <HiShieldCheck className="w-6 h-6 text-devflow-green" aria-label="Verified" />

              </div>
              
              <div className="z-10 space-y-2">
                <div className="flex gap-1 text-devflow-green">
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                  <HiStar className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-white">DevFlow Technology — AI Division</h4>
                <p className="text-xs text-devflow-gray-400">Verified Google Business Profile • Ahmedabad, Gujarat</p>
                <p className="text-xs text-devflow-gray-500 mt-2">Serving: Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot, Jamnagar, Bhavnagar, Anand, Mehsana, Morbi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ section */}
      <section className="py-24 bg-devflow-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ LOCAL FAQS ]</span>
            <h2 className="text-3xl font-display font-medium text-white">Ahmedabad AI Development — Common Questions</h2>
          </div>
          
          <div className="space-y-6">
            {localFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-8 rounded-2xl border border-white/[0.04] bg-devflow-charcoal hover:border-devflow-green/10 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Portfolio */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">[ GUJARAT CASE STUDIES ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">AI Solutions Delivered for Gujarat Enterprises</h2>
            <p className="text-sm text-devflow-gray-400 font-light max-w-2xl mx-auto">Real projects. Real ROI. Local references available on request.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Gujarat Manufacturing ERP + AI", desc: "Custom ERP with AI-powered demand forecasting and inventory optimization for a Vadodara-based manufacturer.", tech: "Next.js, Python, PostgreSQL, Prophet", result: "32% inventory reduction" },
              { title: "Ahmedabad Real Estate Chatbot", desc: "Multilingual (Gujarati/Hindi/English) RAG chatbot for property queries, document search, and lead qualification.", tech: "LangChain, Pinecone, Llama-2, WhatsApp API", result: "4.8/5 user rating" },
              { title: "Surat Textile AI Quality Control", desc: "Computer vision system for fabric defect detection replacing manual inspection on production lines.", tech: "YOLOv8, OpenCV, AWS, React Native", result: "94% defect detection accuracy" },
              { title: "Gandhinagar Govt Document AI", desc: "Document intelligence pipeline for auto-classification, extraction, and routing of citizen service requests.", tech: "LayoutLM, Tesseract, FastAPI, Kubernetes", result: "80% processing time reduction" },
            ].map((cs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/[0.05] bg-devflow-charcoal/50 hover:border-devflow-green/25 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{cs.title}</h3>
                <p className="text-sm text-devflow-gray-300 font-light leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tech.split(", ").map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded text-xs font-mono bg-devflow-green/10 text-devflow-green">{t}</span>
                  ))}
                </div>
                <p className="text-xs font-medium text-devflow-green flex items-center gap-1">
                  <HiShieldCheck className="w-3 h-3" /> {cs.result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-devflow-charcoal text-center relative z-10">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-medium">Ready to Build Your AI Advantage in Gujarat?</h2>
          <p className="text-sm text-devflow-gray-400 font-light max-w-md mx-auto">
            Talk directly to our technical founders to outline your AI roadmap. No sales layers. Pure engineering consultation.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform inline-block"
          >
            START AI PROJECT DISCOVERY &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}