"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeUp, staggerContainer, easeOut } from "@/lib/motion";

const services = ["AI Automation", "Web Development", "Mobile App", "UI/UX Design", "Custom ERP", "Other"];
const budgets = ["Under ₹1L", "₹1L - ₹5L", "₹5L - ₹10L", "₹10L+"];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    setError("");
    if (step === 1 && !name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
    }
    if (step === 3 && !selectedService) {
      setError("Please select a project type.");
      return;
    }
    if (step === 4 && !selectedBudget) {
      setError("Please select your budget range.");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setError("");
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Persist details locally or log them
    console.log({
      name,
      email,
      service: selectedService,
      budget: selectedBudget,
      notes,
    });
  };

  return (
    <main className="min-h-screen bg-devflow-black pt-28 pb-16 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.02),transparent_70%)] pointer-events-none" />

      <div className="section-container relative z-10 max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="p-8 md:p-12 rounded-2xl border border-white/[0.05] bg-devflow-charcoal"
            >
              {/* Progress counter */}
              <div className="font-mono text-xs text-devflow-gray-500 mb-8 uppercase tracking-widest flex justify-between items-center">
                <span>[ Project Discovery ]</span>
                <span>Step {step} of 5</span>
              </div>

              {/* Form step routing */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <div className="space-y-4">
                    <label className="font-display text-2xl md:text-4xl font-medium text-white block">
                      Hello, what should we call you?
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/20 focus:border-devflow-green py-3 text-xl text-white outline-none transition-colors"
                      autoFocus
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <label className="font-display text-2xl md:text-4xl font-medium text-white block">
                      Nice to meet you, {name}. What is your email?
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@example.com"
                      className="w-full bg-transparent border-b border-white/20 focus:border-devflow-green py-3 text-xl text-white outline-none transition-colors"
                      autoFocus
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <label className="font-display text-2xl md:text-4xl font-medium text-white block mb-6">
                      What are we engineering?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`p-4 rounded-xl border text-sm font-mono tracking-wider uppercase transition-all ${
                            selectedService === srv
                              ? "bg-devflow-green text-devflow-black border-devflow-green"
                              : "bg-black/40 text-devflow-gray-300 border-white/5 hover:border-white/20"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <label className="font-display text-2xl md:text-4xl font-medium text-white block mb-6">
                      What is your estimated budget?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {budgets.map((bgt) => (
                        <button
                          key={bgt}
                          type="button"
                          onClick={() => setSelectedBudget(bgt)}
                          className={`p-4 rounded-xl border text-sm font-mono tracking-wider uppercase transition-all ${
                            selectedBudget === bgt
                              ? "bg-devflow-green text-devflow-black border-devflow-green"
                              : "bg-black/40 text-devflow-gray-300 border-white/5 hover:border-white/20"
                          }`}
                        >
                          {bgt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4">
                    <label className="font-display text-2xl md:text-4xl font-medium text-white block">
                      Any technical specs or goals to share?
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. integrations, feature requirements, timelines..."
                      className="w-full bg-transparent border border-white/10 rounded-xl p-4 focus:border-devflow-green h-32 text-white outline-none transition-colors text-sm font-light leading-relaxed resize-none"
                      autoFocus
                    />
                  </div>
                )}

                {/* Error Banner */}
                {error && (
                  <p className="text-xs text-red-500 font-mono">
                    [ ! ] {error}
                  </p>
                )}

                {/* Navigation Actions */}
                <div className="flex justify-between items-center pt-8 border-t border-white/[0.05]">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-xs font-mono text-devflow-gray-400 hover:text-white"
                    >
                      ← PREVIOUS STEP
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary py-2.5 px-6 font-semibold"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-primary py-2.5 px-8 font-semibold animate-pulse-green"
                    >
                      Submit Discovery Form
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-12 rounded-2xl border border-white/[0.05] bg-devflow-charcoal text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-devflow-green/10 text-devflow-green text-3xl flex items-center justify-center mx-auto border border-devflow-green/20">
                ✓
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-medium text-white">
                Clarity is on its way.
              </h1>
              <p className="text-devflow-gray-300 text-sm font-light max-w-md mx-auto leading-relaxed">
                Thank you, {name}. We have received your project requirements. Prince Gajjar and the DevFlow engineering team will review your specs and reach out at <span className="text-white font-medium">{email}</span> within 24 hours.
              </p>
              <div className="pt-6">
                <a href="/" className="btn-secondary py-2 px-6">
                  Back to Homepage
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
