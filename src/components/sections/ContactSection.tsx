"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";
import TextScramble from "@/components/ui/TextScramble";
import BackgroundText from "@/components/ui/BackgroundText";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xjgeyvve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormState({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-devflow-black relative overflow-hidden"
    >
      {/* Large Background Text */}
      <BackgroundText text="CONTACT" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-6"
            >
              Let's Explore If We're a Good Fit
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-devflow-gray-300"
            >
              No pitch decks. No sales pressure. Just a straightforward
              conversation about your requirements and how we might help.
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-14 bg-devflow-charcoal border border-devflow-green/20 rounded-2xl text-center shadow-lg shadow-devflow-green/10"
              >
                <div className="w-16 h-16 rounded-full bg-devflow-green/10 flex items-center justify-center mx-auto mb-6 animate-breathing-glow">
                  <svg
                    className="w-8 h-8 text-devflow-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Message Received
                </h3>
                <p className="text-white font-semibold">DevFlow Team</p>
                <p className="text-devflow-gray-400 text-sm">
                  DevFlow Technology
                </p>
                <p className="text-devflow-gray-400">
                  We'll get back to you within 24 hours. Talk soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-10 md:p-12 bg-devflow-charcoal border border-white/[0.06] rounded-2xl"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-devflow-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-devflow-dark border border-white/[0.08] rounded-lg text-white placeholder:text-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 transition-colors duration-150"
                      placeholder="Ramesh Sharma"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-devflow-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-devflow-dark border border-white/[0.08] rounded-lg text-white placeholder:text-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 transition-colors duration-150"
                      placeholder="devflowtechnology@gmail.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-devflow-gray-300 mb-2"
                  >
                    Company{" "}
                    <span className="text-devflow-gray-600">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-devflow-dark border border-white/[0.08] rounded-lg text-white placeholder:text-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 transition-colors duration-150"
                    placeholder="DevFlow Technology"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-devflow-gray-300 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-devflow-dark border border-white/[0.08] rounded-lg text-white placeholder:text-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 transition-colors duration-150 resize-none"
                    placeholder="What operational challenges are you facing? What does success look like?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-devflow-green text-devflow-black font-semibold rounded-lg transition-all duration-150 hover:bg-devflow-green/90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Discuss Your Requirement"
                  )}
                </button>

                <p className="text-center text-sm text-devflow-gray-500 mt-8">
                  Or email us directly:{" "}
                  <a
                    href="mailto:devflowtechnology@gmail.com"
                    className="text-devflow-green hover:underline"
                  >
                    devflowtechnology@gmail.com
                  </a>
                </p>
                <p className="text-center text-xs text-devflow-gray-600 mt-2">
                  Response time: Usually within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
