"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Privacy <span className="text-devflow-green">Protocol</span></h1>
                        <p className="text-devflow-gray-400 text-lg max-w-2xl leading-relaxed">
                            At DevFlow Technology, engineering integrity extends to how we handle your data. This protocol outlines our rigorous standards for data collection, processing, and security.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-devflow-gray-500 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-pulse" />
                                VERSION: 2.0.4-PRO
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-devflow-gray-500">
                                LAST_PATCH: FEB_26_2026
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-devflow-green/5 border border-devflow-green/20 text-[10px] font-mono text-devflow-green uppercase tracking-widest hidden sm:flex items-center gap-2">
                                <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" />
                                </svg>
                                Integrity_Check: 100%_SECURE
                            </div>
                        </div>
                    </motion.div>

                    {/* Detailed Content */}
                    <motion.div variants={staggerItem} className="space-y-16 text-devflow-gray-300 pb-20">

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter">01. Neural Data Acquisition & Telemetry Sink</h2>
                            <div className="space-y-6">
                                <p className="leading-relaxed">
                                    Our system architecture utilizes a high-entropy <strong>Telemetry Sink</strong> to capture interaction patterns without exposing raw PII (Personally Identifiable Information). We operate on a <strong>Hard-Minimalism</strong> logic:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-devflow-green opacity-20">DATA_NODE_01</div>
                                        <h4 className="text-devflow-green font-mono text-xs uppercase mb-3 tracking-widest">Polymorphic Metadata Wrapping</h4>
                                        <p className="text-sm text-devflow-gray-400">Directly submitted identities are wrapped in AES-256-GCM SALT layers before being committed to our offline, air-gapped cold-storage vaults located in secure geographic clusters.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-devflow-green opacity-20">DATA_NODE_02</div>
                                        <h4 className="text-devflow-green font-mono text-xs uppercase mb-3 tracking-widest">Volatile Entropy Purge</h4>
                                        <p className="text-sm text-devflow-gray-400">Ephemeral session data, including IP-obfuscated request logs and browser fingerprinting, are held in volatile RAM regions (L3 cache equivalent) and purged following a 24-hour cycle.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">02. Sovereign Cryptography Framework [v4.5-EXTREME]</h2>
                            <div className="space-y-8">
                                <p className="leading-relaxed">
                                    DevFlow Technology does not simply "protect" data; we ensure its <strong>Mathematical Sovereignty</strong> via our proprietary Encryption-in-Depth (EiD) architecture:
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Entropy-Based Dynamic Keying", desc: "Our system utilizes hardware-level quantum noise generators to generate session keys that are never stored in plain text. Full decryption requires a multi-sig consensus among encrypted primary nodes." },
                                        { title: "Zero-Knowledge Interaction Proofs (ZKP)", desc: "We utilize ZK-SNARK protocols to verify user authenticity without the exchange of raw credentials. This ensures your secrets remain secrets, even from our core kernel." },
                                        { title: "Multi-Layered Payload Sharding", desc: "Sensitive payloads are fragmented into non-contiguous data shards and distributed across SOC2-compliant global clusters. Reconstitution is impossible without our proprietary orchestration engine." },
                                        { title: "Bio-Metric Entropy Sharding", desc: "For high-clearance assets, we utilize fragmented bio-metric entropy to shard identity kernels across non-repetitive memory sectors, ensuring absolute non-replicability." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-devflow-green/20 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-xl bg-devflow-green/10 flex items-center justify-center text-devflow-green font-mono text-xs shrink-0 border border-devflow-green/20">
                                                0x{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-loose">{item.title}</h4>
                                                <p className="text-sm text-devflow-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter">03. Autonomous Threat Mitigation & AI Daemons</h2>
                            <div className="p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#0c0c0c] border border-devflow-green/15 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-devflow-green/5 via-transparent to-transparent opacity-50" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-devflow-green animate-ping" />
                                        <span className="font-mono text-xs text-devflow-green uppercase tracking-[0.3em]">Guardian.ai active</span>
                                    </div>
                                    <p className="leading-relaxed text-devflow-gray-300 mb-8 text-lg">
                                        Our infrastructure is patrolled by <strong>Neural Sentry Engines</strong> that utilize heuristic analysis to detect, trap, and black-hole unauthorized extraction attempts in sub-millisecond cycles.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        {['XSS_FILTER', 'SQL_SENTRY', 'DDOS_SHIELD', 'API_BRUTE_GUARD'].map(label => (
                                            <div key={label} className="p-3 rounded-lg bg-black/40 border border-white/[0.05] text-[10px] font-mono text-devflow-gray-500 flex justify-between items-center">
                                                <span>{label}</span>
                                                <span className="text-devflow-green">0.00ms</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ left: "-50%" }}
                                            animate={{ left: "100%" }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-0 h-full w-1/4 bg-devflow-green shadow-[0_0_20px_#bae654]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">04. Quantum-Resistant Ledger Logics</h2>
                            <div className="bg-[#080808] border border-white/[0.05] rounded-3xl p-6 md:p-8 font-mono text-[11px] leading-relaxed text-devflow-gray-500 overflow-hidden relative group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-devflow-green to-transparent opacity-20 group-hover:opacity-100 transition-opacity" />
                                <div className="space-y-1">
                                    <div>[INIT] LOADING_PRIVACY_KERNEL_v4.5.EXTREME...</div>
                                    <div>[LOG] ESTABLISHING_QUANTUM_SECURE_TUNNEL: <span className="text-devflow-green">SUCCESS</span></div>
                                    <div>[LOG] INJECTING_ENTROPY_DAEMON_v2: <span className="text-devflow-green">ACTIVE</span></div>
                                    <div>[LOG] ANALYZING_USER_TELEMETRY: <span className="text-devflow-gray-700">ANONYMIZED_OK</span></div>
                                    <div className="mt-4 text-devflow-green">// SYSTEM_DIRECTIVE: DATA_SOVEREIGNTY_ENFORCED //</div>
                                    <div className="mt-2 text-devflow-gray-400">Our system utilizes Lattice-Based Cryptography to ensure that your metadata remains protected even against future-generation quantum computation threats. Any attempts at non-authorized ledger inspection are met with <strong>Polymorphic Threat Black-Holing</strong> responses.</div>
                                </div>
                            </div>
                        </section>

                        <section className="relative text-devflow-gray-400">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/40 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">05. Global Sovereign Metadata Custody</h2>
                            <div className="prose prose-sm prose-invert max-w-none space-y-4">
                                <p>
                                    In alignment with CCPA, GDPR, and the Indian Digital Personal Data Protection (DPDP) Act, DevFlow Technology institutes a <strong>Universal Custody Policy</strong>.
                                </p>
                                <p>
                                    <strong>Recursive Privacy Daemons:</strong> Our system deploys recursive audit bots that scan every shard of our distributed database to ensure no orphaned metadata remnants exist outside of authorized custody windows.
                                </p>
                                <p>
                                    <strong>The Right to Absolute Oblivion:</strong> Upon execution of an Oblivion Request, our system triggers a cascading wipe across all RAID clusters, backup nodes, and staging environments. This process is irreversible and mathematically verifiable.
                                </p>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">06. Sub-Processor Custody Matrix</h2>
                            <div className="-mx-4 sm:mx-0 overflow-x-auto rounded-xl sm:rounded-3xl border border-white/[0.05] overflow-hidden">
                                <table className="w-full text-left text-[10px] sm:text-xs font-mono border-collapse">
                                    <thead>
                                        <tr className="bg-white/[0.03]">
                                            <th className="p-4 sm:p-5 border-b border-white/[0.05] text-devflow-green uppercase tracking-widest font-bold">Processor_ID</th>
                                            <th className="p-4 sm:p-5 border-b border-white/[0.05] text-devflow-green uppercase tracking-widest font-bold">Engagement_Scope</th>
                                            <th className="p-4 sm:p-5 border-b border-white/[0.05] text-devflow-green uppercase tracking-widest font-bold">Compliance_STD</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-devflow-gray-500">
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-4 sm:p-5 border-b border-white/[0.05]">INFRA_01: VERCEL</td>
                                            <td className="p-4 sm:p-5 border-b border-white/[0.05]">EDGE DELIVERY & STATIC ASSETS</td>
                                            <td className="p-4 sm:p-5 border-b border-white/[0.05]">SOC2 TYPE II</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-4 sm:p-5 border-b border-white/[0.05]">STORAGE_01: GCP</td>
                                            <td className="p-4 sm:p-5 border-b border-white/[0.05]">CLOUD COMPUTE & BLOB STORAGE</td>
                                            <td className="p-4 sm:p-5 border-b border-white/[0.05]">ISO 27001 / SOC3</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-4 sm:p-5 ">PIPELINE_01: RESEND</td>
                                            <td className="p-4 sm:p-5 ">SMTP & TRANSACTIONAL TEL</td>
                                            <td className="p-4 sm:p-5 ">GDPR / HIPAA BAA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">07. Volatile Session Mirroring & Anti-Forensic Layers</h2>
                            <div className="space-y-6">
                                <p className="leading-relaxed">
                                    To counteract advanced state-level telemetry extraction, DevFlow utilizes <strong>Anti-Forensic Memory Shifting</strong>. Your session is mirrored across volatile RAM sectors that are cryptographically self-destructing upon any unauthorized kernel-level inspection.
                                </p>
                                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">WIPE_PROTOCOL_ENGAGED: ON_TAMPER</span>
                                </div>
                            </div>
                        </section>

                        <section className="relative">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">08. Non-Euclidean Data Sharding</h2>
                            <div className="space-y-4">
                                <p className="leading-relaxed">
                                    Traditional database structures are insufficient for our protection mandates. We utilize <strong>Non-Euclidean Sharding</strong> where metadata fragments are stored in higher-dimensional mathematical spaces, making brute-force reconstruction computationally impossible even for future-gen neural architectures.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] font-mono text-[10px]">
                                        <div className="text-devflow-green mb-2">// SHARD_MAP_ALPHA //</div>
                                        <div className="text-devflow-gray-600">Fragment ID: 0x93A... <br /> Position: [NULL_DIMENSION] <br /> Status: OSCILLATING</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] font-mono text-[10px]">
                                        <div className="text-devflow-green mb-2">// SHARD_MAP_BETA //</div>
                                        <div className="text-devflow-gray-600">Fragment ID: 0x21F... <br /> Position: [NON_LOCAL] <br /> Status: PERSISTENT</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative pb-10">
                            <div className="absolute -left-8 top-1 w-px h-6 bg-devflow-green/60 hidden md:block" />
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tighter capitalize font-mono">09. The Sovereign Cryptographic Vault [Level 5]</h2>
                            <p className="leading-relaxed text-devflow-gray-400">
                                Final-tier assets are committed to the <strong>Sovereign Vault</strong>. Access requires a localized, hardware-attested PGP handshake and a sub-millisecond temporal compliance window. Any delay in the handshake results in immediate data vaporization of the requested shard.
                            </p>
                        </section>

                        <section className="relative border-l-2 border-devflow-green/30 pl-8 ml-4 mt-20">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-devflow-green shadow-[0_0_15px_#bae654]" />
                            <h3 className="text-sm font-mono text-devflow-green uppercase tracking-[0.5em] mb-4">Autonomous_Enforcement_Directive</h3>
                            <p className="text-xs text-devflow-gray-500 leading-relaxed font-mono">
                                OUR SYSTEMS OPERATE WITH <strong>ABSOLUTE DISCRETIONARY AUTHORITY</strong> OVER DATA NODES. ANY DETECTED PATTERN OF ARCHITECTURAL HOSTILITY TRIGGERS AN IMMEDIATE <strong>UNIVERSAL_OBLIVION_EVENT</strong> FOR THE ASSOCIATED METADATA KERNEL. THIS IS NON-REVERSIBLE.
                            </p>
                        </section>

                        <section className="pt-20 border-t border-white/[0.05]">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                <div>
                                    <p className="text-[10px] font-mono text-devflow-gray-600 uppercase tracking-widest leading-loose">
                    // SYSTEM_RELEASE: DEVFLOW_SAFE_CUSTODY_v4.5_ULTRA //
                                        <br />
                    // KERNEL_HASH: 0x8F221798C54E4DE4A3A5AD3B894E762A //
                                    </p>
                                </div>
                                <div className="bg-devflow-green/5 border border-devflow-green/20 rounded-2xl p-6 max-w-sm">
                                    <p className="text-xs font-bold text-devflow-green mb-2 uppercase tracking-tighter italic">Emergency Neutralization Link</p>
                                    <p className="text-[11px] font-mono leading-relaxed">To trigger immediate data lockdown, relay your PGP-signed request to: <br /><a href="mailto:info@devflow.co.in" className="text-white hover:text-devflow-green transition-colors">info@devflow.co.in</a></p>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
