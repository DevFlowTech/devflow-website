"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectEstimate {
  projectType: string;
  features: string[];
  timeline: string;
  budget: { min: number; max: number };
}

const projectTypes = [
  { id: "website", label: "Website", basePrice: 50000 },
  { id: "webapp", label: "Web Application", basePrice: 200000 },
  { id: "mobile", label: "Mobile App", basePrice: 300000 },
  { id: "ecommerce", label: "E-Commerce", basePrice: 150000 },
  { id: "ai", label: "AI Integration", basePrice: 100000 },
  { id: "erp", label: "ERP System", basePrice: 500000 },
];

const features = [
  { id: "auth", label: "User Authentication", price: 25000 },
  { id: "payments", label: "Payment Integration", price: 40000 },
  { id: "admin", label: "Admin Dashboard", price: 50000 },
  { id: "api", label: "API Development", price: 60000 },
  { id: "ai-chat", label: "AI Chatbot", price: 75000 },
  { id: "analytics", label: "Analytics & Reporting", price: 35000 },
  { id: "notifications", label: "Push Notifications", price: 20000 },
  { id: "multilang", label: "Multi-language", price: 30000 },
];

const timelines = [
  { id: "urgent", label: "Urgent (2-4 weeks)", multiplier: 1.5 },
  { id: "normal", label: "Normal (1-2 months)", multiplier: 1.0 },
  { id: "relaxed", label: "Flexible (2-3 months)", multiplier: 0.9 },
];

export default function ProjectEstimator() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateEstimate = (): ProjectEstimate | null => {
    if (!selectedType || !selectedTimeline) return null;

    const projectType = projectTypes.find((p) => p.id === selectedType);
    const timeline = timelines.find((t) => t.id === selectedTimeline);

    if (!projectType || !timeline) return null;

    let basePrice = projectType.basePrice;

    // Add feature prices
    selectedFeatures.forEach((featureId) => {
      const feature = features.find((f) => f.id === featureId);
      if (feature) basePrice += feature.price;
    });

    // Apply timeline multiplier
    const minPrice = Math.round(basePrice * timeline.multiplier * 0.9);
    const maxPrice = Math.round(basePrice * timeline.multiplier * 1.2);

    return {
      projectType: projectType.label,
      features: selectedFeatures.map(
        (id) => features.find((f) => f.id === id)?.label || ""
      ),
      timeline: timeline.label,
      budget: { min: minPrice, max: maxPrice },
    };
  };

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((f) => f !== featureId)
        : [...prev, featureId]
    );
  };

  const resetEstimator = () => {
    setStep(1);
    setSelectedType(null);
    setSelectedFeatures([]);
    setSelectedTimeline(null);
    setShowResult(false);
  };

  const estimate = calculateEstimate();

  return (
    <>
      {/* Trigger Button - Lime Green to match theme */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-8 z-50 px-4 py-3 rounded-full bg-devflow-green text-devflow-black flex items-center gap-2 shadow-lg font-semibold"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(186, 230, 84, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm">Get Estimate</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-lg bg-devflow-dark border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Lime Green Gradient */}
              <div className="bg-gradient-to-r from-devflow-green/20 to-emerald-500/20 p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      AI Project Estimator
                    </h2>
                    <p className="text-sm text-devflow-gray-400 mt-1">
                      Get an instant cost estimate
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Progress - Lime Green */}
                <div className="flex gap-2 mt-4">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 h-1 rounded-full transition-colors ${
                        s <= step ? "bg-devflow-green" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Project Type */}
                  {step === 1 && !showResult && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-white font-semibold mb-4">
                        What type of project?
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              selectedType === type.id
                                ? "border-devflow-green bg-devflow-green/10"
                                : "border-white/10 hover:border-white/20"
                            }`}
                          >
                            <p className="text-white font-medium">
                              {type.label}
                            </p>
                            <p className="text-xs text-devflow-gray-400 mt-1">
                              From {formatPrice(type.basePrice)}
                            </p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Features */}
                  {step === 2 && !showResult && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-white font-semibold mb-4">
                        Select features (optional)
                      </h3>
                      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                        {features.map((feature) => (
                          <button
                            key={feature.id}
                            onClick={() => toggleFeature(feature.id)}
                            className={`p-3 rounded-lg border text-left transition-all ${
                              selectedFeatures.includes(feature.id)
                                ? "border-devflow-green bg-devflow-green/10"
                                : "border-white/10 hover:border-white/20"
                            }`}
                          >
                            <p className="text-sm text-white">
                              {feature.label}
                            </p>
                            <p className="text-xs text-devflow-gray-400">
                              +{formatPrice(feature.price)}
                            </p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Timeline */}
                  {step === 3 && !showResult && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-white font-semibold mb-4">
                        Project timeline?
                      </h3>
                      <div className="space-y-3">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline.id}
                            onClick={() => setSelectedTimeline(timeline.id)}
                            className={`w-full p-4 rounded-xl border text-left transition-all ${
                              selectedTimeline === timeline.id
                                ? "border-devflow-green bg-devflow-green/10"
                                : "border-white/10 hover:border-white/20"
                            }`}
                          >
                            <p className="text-white font-medium">
                              {timeline.label}
                            </p>
                            <p className="text-xs text-devflow-gray-400 mt-1">
                              {timeline.multiplier > 1 && "Rush fee applies"}
                              {timeline.multiplier < 1 && "10% discount"}
                              {timeline.multiplier === 1 && "Standard pricing"}
                            </p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Result */}
                  {showResult && estimate && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-devflow-green flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-devflow-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          Your Estimate
                        </h3>

                        <div className="bg-white/5 rounded-xl p-6 mt-4 border border-white/10">
                          <p className="text-sm text-devflow-gray-400 mb-2">
                            {estimate.projectType}
                          </p>
                          <p className="text-4xl font-bold text-devflow-green">
                            {formatPrice(estimate.budget.min)} -{" "}
                            {formatPrice(estimate.budget.max)}
                          </p>
                          <p className="text-sm text-devflow-gray-400 mt-2">
                            {estimate.timeline}
                          </p>

                          {estimate.features.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-white/10">
                              <p className="text-xs text-devflow-gray-400 mb-2">
                                Selected features:
                              </p>
                              <div className="flex flex-wrap gap-1 justify-center">
                                {estimate.features.map((f) => (
                                  <span
                                    key={f}
                                    className="px-2 py-1 text-xs bg-devflow-green/20 rounded-full text-devflow-green"
                                  >
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <p className="text-xs text-devflow-gray-400 mt-4">
                          This is an AI-generated estimate. Contact us for
                          accurate pricing.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 flex gap-3">
                {!showResult ? (
                  <>
                    {step > 1 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="px-6 py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 transition-colors"
                      >
                        Back
                      </button>
                    )}
                    <button
                      onClick={() => {
                        if (step < 3) {
                          setStep(step + 1);
                        } else {
                          setShowResult(true);
                        }
                      }}
                      disabled={step === 1 && !selectedType}
                      className="flex-1 px-6 py-3 bg-devflow-green rounded-xl text-devflow-black font-semibold disabled:opacity-50 hover:opacity-90 transition-opacity"
                    >
                      {step === 3 ? "Get Estimate" : "Next"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={resetEstimator}
                      className="px-6 py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 transition-colors"
                    >
                      Start Over
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-6 py-3 bg-devflow-green rounded-xl text-devflow-black font-semibold text-center hover:opacity-90 transition-opacity"
                    >
                      Get Exact Quote
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
