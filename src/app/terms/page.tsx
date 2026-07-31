"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-devflow-black pt-32 pb-20">
            <div className="section-container">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={staggerItem} className="mb-16 border-b border-white/[0.05] pb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-devflow-green text-sm font-medium mb-8 hover:translate-x-[-4px] transition-transform group"
                        >
                            <svg className="w-4 h-4 rotate-180 group-hover:stroke-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            Return to Core System
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Terms of <span className="text-devflow-green">Engagement</span></h1>
                        <p className="text-devflow-gray-400 text-lg max-w-2xl leading-relaxed">
                            These terms define the legal parameters and operational frameworks for utilizing DevFlow Technology's engineering platforms and professional services.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-devflow-gray-500 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-pulse" />
                                REF: ENGAGE-2026-X
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-devflow-green/5 border border-devflow-green/20 text-[10px] font-mono text-devflow-green uppercase tracking-widest hidden sm:flex items-center gap-2">
                                <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" />
                                </svg>
                                COMPLIANCE_STATUS: VERIFIED
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={staggerItem} className="space-y-16 text-devflow-gray-300 pb-20">

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-[0.2em] font-mono">01. Absolute Operational Sovereign Immunity</h2>
                            <div className="space-y-6">
                                <p className="leading-relaxed">
                                    Utilization of any digital asset, neural architectural pattern, or source-level component within the <strong>DevFlow Technology</strong> ecosystem constitutes an immediate, irrevocable acknowledgment of our full <strong>Sovereign Ownership</strong>.
                                </p>
                                <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#0a0a0a] border border-devflow-green/30 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-devflow-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-xs font-mono text-devflow-green uppercase leading-loose tracking-[0.2em] mb-4">
                                        [CORE_INTELLECTUAL_DIRECTIVE]:
                                    </p>
                                    <ul className="text-sm text-devflow-gray-400 space-y-4 list-none font-medium">
                                        <li className="flex gap-3 items-start">
                                            <span className="text-devflow-green font-bold shrink-0">»</span>
                                            <div>
                                                <strong className="text-white">Absolute IP Sovereignty:</strong> Any attempt to replicate or scrape our proprietary logic results in immediate <strong>Total IP Erasure</strong> of the offending node via automated legal-tech daemons.
                                            </div>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-devflow-green font-bold shrink-0">»</span>
                                            <div>
                                                <strong className="text-white">Non-Negotiable Consent:</strong> Continuous interaction equals <strong>Irrevocable Systemic Consent</strong> to all present and future architectural mandates.
                                            </div>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-devflow-green font-bold shrink-0">»</span>
                                            <div>
                                                <strong className="text-white">Operational Immunity:</strong> DevFlow Technology maintains absolute immunity from any claims arising from experimental UI modules or kernel-level desyncs.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-widest">02. Irrevocable Systemic Consent & Compliance</h2>
                            <p className="leading-relaxed mb-8">
                                Accessing DevFlow infrastructure creates a binding <strong>Operational Contract</strong>. Our systems utilize <strong>Audit-Ready Telemetry</strong> to maintain a non-repudiable log of system interactions for security and quality assurance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Zero-Tolerance", desc: "Immediate termination of access for any activity deemed harmful to system integrity." },
                                    { title: "Telemetry Audit", desc: "All interaction nodes are logged with sub-second precision for forensic attribution." },
                                    { title: "Non-Repudiation", desc: "Users cannot deny system usage once authenticated via our edge gateways." }
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-devflow-green/20 transition-colors text-center">
                                        <h4 className="text-devflow-green font-bold text-[10px] uppercase tracking-widest mb-3">{item.title}</h4>
                                        <p className="text-xs text-devflow-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-[0.2em] font-mono">03. Algorithmic Enforcement & Liability Repudiation</h2>
                            <div className="space-y-6">
                                <p className="text-devflow-gray-300 leading-relaxed">
                                    DevFlow Technology utilizes <strong>Algorithmic Compliance Engines</strong> to enforce operational integrity. Any detected deviation from authorized usage patterns triggers immediate, autonomous enforcement actions.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: "IP Neutralization", desc: "Detected system exploitation results in immediate and permanent hardware-level IP black-listing across our global edge nodes." },
                                        { title: "Forensic Attribution", desc: "Every system packet is cryptographically tagged to ensure 100% accurate forensic attribution in case of architectural compromise." },
                                        { title: "Liability Repudiation", desc: "We maintain absolute immunity for any data loss occurring on non-certified hardware or legacy browser environments (v < latest)." },
                                        { title: "Sovereign Force Majeure", desc: "Systemic outages due to solar flares, global network desync, or quantum entropy shifts are classified under Sovereign Force Majeure." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.05] hover:border-devflow-green/20 transition-all duration-300">
                                            <h4 className="text-white font-bold text-xs uppercase mb-2 tracking-widest">{item.title}</h4>
                                            <p className="text-[11px] text-devflow-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-[0.2em] font-mono">04. Sovereign Jurisdiction & Arbitration Matrix</h2>
                            <div className="space-y-6">
                                <p className="leading-relaxed">
                                    All legal disputes are settled exclusively under the <strong>Gandhinagar Sovereign Jurisdiction</strong>. Arbitration is conducted via private engineering review boards to ensure technical literacy in all rulings.
                                </p>
                                <div className="bg-devflow-green/5 border border-devflow-green/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-devflow-green/5 blur-3xl rounded-full" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-2 h-2 rounded-full bg-devflow-green animate-pulse" />
                                            <span className="text-[10px] font-mono text-devflow-green uppercase tracking-[0.3em]">Sovereign_Protocol_Bound</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">LEGAL_MAINFRAME_READY</h4>
                                        <p className="text-sm text-devflow-gray-400 leading-relaxed max-w-xl">
                                            By establishing a telemetry session with our architecture, you grant <strong>Absolute Power of Attorney</strong> to our autonomous legal bots for the resolution of small-scale systemic discrepancies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-[0.2em] font-mono">05. Irrevocable Engineering Tribunals</h2>
                            <p className="leading-relaxed text-devflow-gray-300">
                                Conventional courts are decommissioned for DevFlow-related disputes. All conflicts are routed to <strong>Engineering Tribunals</strong> composed of Level-7 Architects who utilize code-level forensic audits as primary evidence. Rulings are <strong>Autonomously Enforced</strong> via smart-contract settlement nodes.
                            </p>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-[0.2em] font-mono">06. Temporal Compliance & Retroactive Updates</h2>
                            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.05] relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-devflow-green opacity-20">TIME_LOCK_ACTIVE</div>
                                <p className="text-sm leading-relaxed text-devflow-gray-400">
                                    DevFlow reserves the <strong>Sovereign Right</strong> to update these terms retroactively to maintain systemic stability. Your continuous presence within our network constitutes a <strong>Temporal Sync Mandate</strong>, acknowledging all past, present, and future iterations of this contract.
                                </p>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase tracking-[0.2em] font-mono">07. Trade Secret Enforcement & Self-Defense</h2>
                            <p className="leading-relaxed text-devflow-gray-400 mb-6">
                                Our intellectual property is protected by <strong>Active Systemic Self-Defense Protocols</strong>. Unauthorized inspection of our obfuscated source layers triggers an automated legal injunction and a localized telemetry-black-listing of the offending entity.
                            </p>
                            <div className="flex items-center gap-4 py-3 px-5 rounded-full bg-devflow-green/10 border border-devflow-green/20 w-fit">
                                <div className="w-2 h-2 rounded-full bg-devflow-green animate-ping" />
                                <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest font-bold">Guardian.logic active // integrity: 100%</span>
                            </div>
                        </section>

                        <section className="relative border-l-2 border-devflow-green/30 pl-8 ml-4 mt-20">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-devflow-green shadow-[0_0_15px_#bae654]" />
                            <h3 className="text-sm font-mono text-devflow-green uppercase tracking-[0.5em] mb-4">Irrevocable_Systemic_Binding</h3>
                            <p className="text-xs text-devflow-gray-500 leading-relaxed font-mono">
                                THIS CORE KERNEL AGREEMENT IS <strong>SELF-EXECUTING</strong>. BY CROSSING THE DIGITAL PERIMETER OF THIS PLATFORM, YOU ARE AUTOMATICALLY ENROLLED IN A <strong>PERPETUAL_COMPLIANCE_LOOP</strong>. ANY ATTEMPT AT REPUDIATION IS RENDERED MATHEMATICALLY NULL BY OUR DISTRIBUTED LEDGER ENFORCEMENT.
                            </p>
                        </section>

                        <section className="pt-20 border-t border-white/[0.05]">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                <p className="text-[10px] font-mono text-devflow-gray-600 uppercase tracking-[0.5em] text-center md:text-left leading-relaxed">
                                    // END_OF_SYSTEM_ENFORCEMENT_PROTOCOL //
                                    <br />
                                    // SECURITY_CLASS: [SIGMA-9] //
                                    <br />
                                    DOC_MASTER: DEVFLOW_TERMS_v4.5_EXTREME
                                </p>
                                <div className="px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-devflow-gray-400">
                                    SYSTEM_HASH: 0xDEADBEEF_PRO_MAINTAINED
                                </div>
                            </div>
                        </section>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
