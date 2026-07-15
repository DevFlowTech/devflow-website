"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiCheck, FiCpu, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";
import { easeOut } from "@/lib/motion";

export default function CustomERPPage() {
  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container max-w-4xl relative z-10">
        <div className="space-y-6 mb-16">
          <Link href="/services" className="text-xs font-mono text-devflow-green hover:underline">
            &larr; BACK TO SERVICES
          </Link>
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ SERVICE CORE // ERP ]
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-medium leading-tight">
            Custom Software <br />
            <span className="italic font-normal text-devflow-green font-display">&amp; ERP Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            Centralize your business inventory, fleet logistics, CRM data pipelines, and operations tracking inside one secure custom platform.
          </p>
        </div>

        {/* Breakdown Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-xl font-display font-medium text-white mb-4 flex items-center gap-2">
              <FiDatabase className="text-devflow-green" /> Key Capabilities
            </h2>
            <ul className="space-y-4 text-sm text-devflow-gray-300 font-light">
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                Real-time synchronization using WebSockets and SQL triggers.
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                Automated document reporting, invoice generators, and logs.
              </li>
              <li className="flex items-start gap-2.5">
                <FiCheck className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                Role-based access controls (RBAC) protecting sensitive files.
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-xl font-display font-medium text-white mb-4 flex items-center gap-2">
              <FiCpu className="text-devflow-green" /> Technical Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "WebSockets", "MySQL", "PHP", "Docker", "SQL Server"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded bg-devflow-black border border-white/5 font-mono text-[10px] text-devflow-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-devflow-green/[0.03] to-transparent text-center space-y-6">
          <FiTrendingUp className="w-8 h-8 text-devflow-green mx-auto animate-pulse" />
          <h3 className="text-xl font-display font-medium text-white">Need a Custom ERP System?</h3>
          <p className="text-xs text-devflow-gray-400 max-w-md mx-auto">
            Our engineers design tailor-made business software that streamlines internal operations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-5 py-3 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:scale-105 transition-transform duration-200">
              DISCUSS ERP SOLUTIONS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
