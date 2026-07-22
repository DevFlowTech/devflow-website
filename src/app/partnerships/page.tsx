"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import Link from "next/link";
import { FiUsers, FiCpu, FiCheck, FiArrowRight, FiBriefcase, FiDollarSign } from "react-icons/fi";

const partnerModels = [
  {
    title: "White Label Engineering",
    description: "You manage the client relations; we build the system. Under complete NDA, we act as your silent technical engineering department, building clean, scalable code under your agency brand.",
    benefits: [
      "Keep 100% of client communication control",
      "Scale your project delivery without hiring overheads",
      "Robust Next.js & Python solutions delivered on schedule",
    ],
  },
  {
    title: "Dedicated Teams & Subcontracting",
    description: "Augment your existing projects with our staff-level software engineers. Scale resources up or down dynamically depending on sprint scope.",
    benefits: [
      "Fully integrated in your Slack, GitHub & Jira workflows",
      "Experienced Next.js, Node, and AWS architects ready",
      "Daily communication sync and weekly sprint deliverables",
    ],
  },
  {
    title: "Joint Delivery & Integration Partners",
    description: "Partner with us for complex client requirements. Combine your branding, UI design, or marketing expertise with our deep custom database and AI software infrastructure delivery.",
    benefits: [
      "Win high-value enterprise contracts together",
      "Deliver unified, end-to-end design & technical solutions",
      "Mitigate tech delivery risk with senior engineers",
    ],
  },
];

const workflows = [
  { step: "01", label: "NDA Execution", desc: "We sign a comprehensive bilateral NDA protecting your clients, leads, and proprietary system IP immediately." },
  { step: "02", label: "Discovery Workshop", desc: "Joint technical scoping session to outline software blueprints, timelines, and architectural constraints." },
  { step: "03", label: "Sprint Deployment", desc: "Weekly release cycles with complete access to staging builds, automated QA pipelines, and progress reporting." },
  { step: "04", label: "Transition & Handover", desc: "Complete code release and IP transfer, followed by maintenance SLA support protocols." },
];

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.04] relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.02),transparent_50%)] pointer-events-none" />
        <div className="section-container max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
              [ STRATEGIC ALLIANCES ]
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-medium text-white leading-tight">
              Scale Your Agency. <br />
              <span className="italic font-normal text-devflow-green font-display">Without the Overhead.</span>
            </h1>
            <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
              We serve as the high-fidelity engineering partner for consulting firms, digital design studios, and technology companies worldwide. You secure the relationships; we deliver the code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 section-container max-w-5xl mx-auto relative z-10">
        <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center md:text-left">
          Flexible Engagement Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerModels.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-devflow-green/20 transition-colors"
            >
              <div>
                <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block mb-3">[ MODEL 0{idx+1} ]</span>
                <h3 className="text-lg font-bold text-white mb-3">{model.title}</h3>
                <p className="text-xs text-devflow-gray-300 leading-relaxed font-light mb-6">{model.description}</p>
              </div>

              <div className="space-y-3 border-t border-white/5 pt-4">
                <span className="text-[9px] font-mono text-devflow-gold uppercase tracking-widest block">Key Benefits</span>
                <ul className="space-y-2 text-xs text-devflow-gray-300">
                  {model.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <FiCheck className="text-devflow-green shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-20 bg-devflow-charcoal border-t border-b border-white/[0.04]">
        <div className="section-container max-w-5xl">
          <h2 className="font-display text-2xl md:text-4xl text-white font-medium mb-12 text-center">
            Our Collaboration Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflows.map((flow) => (
              <div key={flow.step} className="p-6 bg-devflow-black border border-white/[0.05] rounded-xl relative group hover:border-devflow-green/20 transition-colors">
                <span className="font-mono text-3xl font-bold text-devflow-green/20 group-hover:text-devflow-green/40 transition-colors block mb-2">{flow.step}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{flow.label}</h3>
                <p className="text-xs text-devflow-gray-400 font-light leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="section-container max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Initiate Technical Discovery
          </h2>
          <p className="text-devflow-gray-400 max-w-xl mx-auto mb-8 font-light text-sm">
            Partner with us to expand your service portfolio. Get in touch with our architecture team to receive NDA parameters and case studies.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-primary min-w-[200px] inline-flex items-center justify-center gap-2">
              Book Strategy Call <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
