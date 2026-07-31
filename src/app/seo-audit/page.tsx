"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiCheckCircle, FiAlertCircle, FiTrendingUp, FiCpu, FiMail, FiGlobe } from "react-icons/fi";
import { easeOut } from "@/lib/motion";

export default function SEOAuditPage() {
  const [url, setUrl] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const auditSteps = [
    "Resolving domain name and checking SSL validity...",
    "Analyzing HTML structure and heading hierarchy (H1-H6)...",
    "Checking for JSON-LD schemas (Organization, LocalBusiness, Breadcrumb)...",
    "Testing page speed, TTFB, and Core Web Vitals...",
    "Scanning for AI indexing readiness (/llms.txt and GEO markup)..."
  ];

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAuditing(true);
    setAuditStep(0);
    setShowResult(false);
    setEmailSubmitted(false);

    // Simulate audit progress step-by-step
    const runSteps = (step: number) => {
      if (step < auditSteps.length) {
        setAuditStep(step);
        setTimeout(() => runSteps(step + 1), 1000);
      } else {
        setIsAuditing(false);
        setShowResult(true);
      }
    };
    runSteps(0);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-24 overflow-hidden relative">
      {/* Background Aurora Glow */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-devflow-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container max-w-4xl relative z-10">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block mb-4">
            [ LEAD CONVERSION / AUDIT CORE ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium mb-6">
            Free SEO &amp; GEO <span className="italic font-normal text-devflow-green font-display">Engine Auditor</span>
          </h1>
          <p className="text-devflow-gray-300 font-light text-sm md:text-base leading-relaxed">
            Audit your website for search visibility and Generative Engine Optimization (AEO/GEO) readiness. See how Gemini, ChatGPT, and Perplexity see your brand.
          </p>
        </div>

        {/* Input Form */}
        <div className="glass-panel p-8 rounded-2xl max-w-xl mx-auto mb-12">
          <form onSubmit={handleStartAudit} className="space-y-4">
            <label className="block text-xs font-mono text-devflow-gray-400 uppercase tracking-widest">
              Website URL
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
                  className="w-full bg-devflow-gray-600 border border-devflow-gray-200/20 rounded-xl pl-11 pr-4 py-3.5 text-sm text-devflow-gray-100 focus:outline-none focus:border-devflow-green/50 placeholder-devflow-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={isAuditing}
                className="px-6 py-3.5 bg-devflow-green text-white font-semibold rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 cursor-pointer text-sm shadow-[0_2px_12px_rgba(2,37,220,0.2)] hover:shadow-[0_4px_20px_rgba(2,37,220,0.35)]"
              >
                <FiSearch className="w-4 h-4" /> {isAuditing ? "Auditing..." : "Run Audit"}
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
                className="mt-6 space-y-4 pt-6 border-t border-devflow-gray-200/10 overflow-hidden"
              >
                <div className="flex justify-between text-xs font-mono text-devflow-gray-400">
                  <span>AUDITING PROGRESS</span>
                  <span>{Math.round(((auditStep + 1) / auditSteps.length) * 100)}%</span>
                </div>                  <div className="h-1 bg-devflow-gray-200/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-devflow-green"
                    initial={{ width: 0 }}
                    animate={{ width: `${((auditStep + 1) / auditSteps.length) * 100}%` }}
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
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-panel p-6 rounded-2xl text-center">
                  <span className="block text-3xl md:text-4xl font-bold font-mono text-devflow-green">94/100</span>
                  <span className="text-[10px] font-mono text-devflow-gray-400 block mt-2">SEO SCORE</span>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center">
                  <span className="block text-3xl md:text-4xl font-bold font-mono text-devflow-green">87/100</span>
                  <span className="text-[10px] font-mono text-devflow-gray-400 block mt-2">SPEED SCORE</span>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center">
                  <span className="block text-3xl md:text-4xl font-bold font-mono text-red-500">42/100</span>
                  <span className="text-[10px] font-mono text-devflow-gray-400 block mt-2">GEO READINESS</span>
                </div>
              </div>

              {/* Specific Recommendations */}
              <div className="glass-panel p-8 rounded-2xl space-y-6">
                <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                  <FiCpu className="text-devflow-green" /> Audit Diagnostics Report
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiCheckCircle className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">Valid Heading Structure:</strong> H1 and H2 tags conform to standard document models.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiCheckCircle className="text-devflow-green w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">Perfect SSL &amp; Security:</strong> HTTPS active with secure cipher suites.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiAlertCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">Missing JSON-LD Schemas:</strong> Your site has no local business schema markup. Chatbots like Perplexity AI require organization nodes to extract citations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiAlertCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">No `/llms.txt` file detected:</strong> LLM scraping agents have no instructions to summarize your brand correctly.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-devflow-gray-300">
                    <FiAlertCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white font-medium">Conversational Content Gap:</strong> Service descriptions do not match conversational search query mappings.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Lead Capture Module */}
              <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-devflow-green/[0.04] to-transparent border-devflow-green/20 relative overflow-hidden">
                <div className="relative z-10 max-w-lg mx-auto text-center space-y-6">
                  <FiTrendingUp className="w-10 h-10 text-devflow-green mx-auto" />
                  <div>
                    <h4 className="text-xl font-display font-medium text-white mb-2">
                      Get the Full AEO/GEO Optimization Blueprint
                    </h4>
                  <p className="text-xs text-devflow-gray-300 leading-relaxed font-light">
                    Leave your email below. Our founders, Prince &amp; Bhavin, will compile a custom SEO optimization report and send it to you within 24 hours.
                  </p>
                  </div>

                  {!emailSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-md mx-auto">
                      <div className="relative flex-grow">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-devflow-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          placeholder="name@company.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-devflow-gray-600 border border-devflow-gray-200/20 rounded-xl pl-11 pr-4 py-3 text-xs text-devflow-gray-100 focus:outline-none focus:border-devflow-green placeholder-devflow-gray-400"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-3 bg-devflow-green text-white font-semibold text-xs rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_2px_10px_rgba(2,37,220,0.2)] hover:shadow-[0_4px_16px_rgba(2,37,220,0.35)]"
                      >
                        Get Report
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-xs text-devflow-green font-mono py-2 bg-devflow-green/10 border border-devflow-green/20 rounded-xl"
                    >
                      ✓ Thank you! The custom audit blueprint has been queued for delivery.
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
