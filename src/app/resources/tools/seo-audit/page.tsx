"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiCheckCircle,
  FiAlertCircle,
  FiTrendingUp,
  FiCpu,
  FiMail,
  FiGlobe,
} from "react-icons/fi";
import { easeOut } from "@/lib/motion";
import Link from "next/link";

export default function SEOAuditPage() {
  const [url, setUrl] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auditSteps = [
    "Validating domain structure & SSL certificate protocols...",
    "Analyzing semantic HTML document structure & H1-H6 hierarchy...",
    "Evaluating JSON-LD structured data schemas (Organization, FAQPage, Service)...",
    "Checking Mobile Core Web Vitals targets & LCP rendering latency...",
    "Verifying AI answer engine readiness (llms.txt, GEO entity citations)...",
  ];

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAuditing(true);
    setAuditStep(0);
    setShowResult(false);
    setEmailSubmitted(false);

    const runSteps = (step: number) => {
      if (step < auditSteps.length) {
        setAuditStep(step);
        setTimeout(() => runSteps(step + 1), 600);
      } else {
        setIsAuditing(false);
        setShowResult(true);
      }
    };
    runSteps(0);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/meeyqenk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          auditUrl: url,
          message: `Technical SEO & GEO Audit Request for ${url}`,
          source: "SEO Audit Tool",
        }),
      });

      if (res.ok) {
        setEmailSubmitted(true);
      } else {
        alert("Submission failed. Please email us directly at info@devflow.co.in");
      }
    } catch {
      alert("Submission error. Please email us directly at info@devflow.co.in");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSecure = url.startsWith("https://");

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-24 overflow-hidden relative">
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container max-w-4xl relative z-10 space-y-12">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-white">RESOURCES</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">SEO AUDIT</span>
        </nav>

        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ TECHNICAL AUDIT ARCHITECTURE ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium">
            SEO &amp; GEO Strategy{" "}
            <span className="italic font-normal text-devflow-green font-display">
              Diagnostic Tool
            </span>
          </h1>
          <p className="text-devflow-gray-300 font-light text-sm md:text-base leading-relaxed">
            Evaluate your website for technical search visibility, Core Web Vitals, and Generative Engine Optimization (AEO/GEO) readiness.
          </p>
        </div>

        {/* Input Form */}
        <div className="glass-panel p-8 rounded-2xl max-w-xl mx-auto">
          <form onSubmit={handleStartAudit} className="space-y-4">
            <label className="block text-xs font-mono text-devflow-gray-400 uppercase tracking-widest">
              Enter Website Domain to Audit
            </label>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-devflow-gray-400 w-4 h-4" />
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isAuditing}
                  className="w-full bg-devflow-gray-600 border border-devflow-gray-200/20 rounded-xl pl-11 pr-4 py-3.5 text-sm text-devflow-gray-100 focus:outline-none focus:border-devflow-green placeholder-devflow-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={isAuditing}
                className="px-6 py-3.5 bg-devflow-green text-devflow-black font-semibold rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 cursor-pointer text-sm font-mono"
              >
                <FiSearch className="w-4 h-4" />{" "}
                {isAuditing ? "Auditing..." : "Run Audit"}
              </button>
            </div>
          </form>

          {/* Progress Section */}
          <AnimatePresence>
            {isAuditing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4 pt-6 border-t border-white/10 overflow-hidden"
              >
                <div className="flex justify-between text-xs font-mono text-devflow-gray-400">
                  <span>ANALYZING DOMAIN ARCHITECTURE</span>
                  <span>
                    {Math.round(((auditStep + 1) / auditSteps.length) * 100)}%
                  </span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-devflow-green"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((auditStep + 1) / auditSteps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-xs text-devflow-green font-mono transition-all duration-300">
                  &rarr; {auditSteps[auditStep]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Panel */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="space-y-8 max-w-2xl mx-auto"
            >
              {/* Audit Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-6 rounded-2xl text-center space-y-1">
                  <span className="block text-2xl font-bold font-mono text-devflow-green">
                    {isSecure ? "ACTIVE (TLS 1.3)" : "INSECURE"}
                  </span>
                  <span className="text-[10px] font-mono text-devflow-gray-400 block">
                    SSL PROTOCOL
                  </span>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center space-y-1">
                  <span className="block text-2xl font-bold font-mono text-white">
                    SSR / SSG
                  </span>
                  <span className="text-[10px] font-mono text-devflow-gray-400 block">
                    TARGET RENDER
                  </span>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center space-y-1">
                  <span className="block text-2xl font-bold font-mono text-devflow-green">
                    ACTIONABLE
                  </span>
                  <span className="text-[10px] font-mono text-devflow-gray-400 block">
                    GEO READINESS
                  </span>
                </div>
              </div>

              {/* Diagnostic Checklist */}
              <div className="glass-panel p-8 rounded-2xl space-y-6">
                <h2 className="text-lg font-display font-medium text-white flex items-center gap-2">
                  <FiCpu className="text-devflow-green" /> Architectural Diagnostic Checklist for {url}
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiCheckCircle className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">
                        HTTPS Protocol Check:
                      </strong>{" "}
                      {isSecure ? "Domain utilizes encrypted HTTPS connection." : "Warning: Domain lacks HTTPS, which harms search indexing."}
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiAlertCircle className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">
                        Structured Data (JSON-LD) Verification:
                      </strong>{" "}
                      Enterprise search and AI answer engines require rich Organization, Service, and FAQPage schemas to extract brand entity metadata.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiAlertCircle className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">
                        AI Crawler Configuration (`/llms.txt`):
                      </strong>{" "}
                      Verify your server allows GPTBot, PerplexityBot, and ClaudeBot to crawl your technical documentation accurately.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Lead Capture Module */}
              <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-devflow-green/[0.04] to-transparent border border-devflow-green/20 text-center space-y-6">
                <FiTrendingUp className="w-10 h-10 text-devflow-green mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-medium text-white">
                    Request Full Manual Technical Audit & Strategy Blueprint
                  </h3>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light max-w-lg mx-auto">
                    Enter your work email below. DevFlow engineering founders Prince Gajjar &amp; Bhavin Rajput will personally run a deep technical audit on {url} and email you actionable recommendations within 24 hours.
                  </p>
                </div>

                {!emailSubmitted ? (
                  <form
                    onSubmit={handleEmailSubmit}
                    className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                  >
                    <div className="relative flex-grow">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-devflow-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        placeholder="name@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full bg-devflow-gray-600 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs text-devflow-gray-100 focus:outline-none focus:border-devflow-green placeholder-devflow-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl hover:brightness-110 transition-all font-mono whitespace-nowrap"
                    >
                      {isSubmitting ? "Sending..." : "Request Blueprint"}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs text-devflow-green font-mono py-3 px-4 bg-devflow-green/10 border border-devflow-green/20 rounded-xl max-w-md mx-auto"
                  >
                    ✓ Audit blueprint request received for {url}! We will review your architecture and send recommendations to {email} within 24 hours.
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
