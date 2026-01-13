"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

// Web3Forms Access Key - Get your FREE key at https://web3forms.com
// Replace this with your actual access key after registering
const WEB3FORMS_ACCESS_KEY = "bb31d03b-2ddd-4b0e-bfee-6a146d566e0a";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          company: formState.company || "Not provided",
          message: formState.message,
          from_name: "DevFlow Website",
          subject: `New Project Inquiry from ${formState.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 bg-devflow-charcoal overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-devflow-green/5 rounded-full blur-[150px]" />

      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-devflow-green mb-4"
            >
              <span className="w-8 h-px bg-devflow-green" />
              LET&apos;S CONNECT
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-md lg:text-display-lg text-white mb-6"
            >
              Ready to build
              <br />
              <span className="text-devflow-gray-300">something exceptional?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-devflow-gray-300 mb-10 max-w-md"
            >
              We partner with teams who value precision engineering and
              measurable results. Let&apos;s discuss how we can help you build
              something remarkable.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-devflow-dark border border-white/[0.06] flex items-center justify-center text-devflow-green">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-devflow-gray-400">Email us at</p>
                  <Link
                    href="mailto:devflowtechnology@gmail.com"
                    className="text-white hover:text-devflow-green transition-colors"
                  >
                    devflowtechnology@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-devflow-dark border border-white/[0.06] flex items-center justify-center text-devflow-green">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-devflow-gray-400">Response time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </motion.div>

            {/* Partnership note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 p-6 rounded-xl bg-devflow-dark/50 border border-devflow-green/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-devflow-green/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-devflow-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Partnership-focused approach
                  </h4>
                  <p className="text-sm text-devflow-gray-400">
                    We work with a select number of clients to ensure dedicated
                    attention and exceptional results. No sales pressure, just
                    honest conversations about what we can achieve together.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 lg:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-white mb-8">
                Start a conversation
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-devflow-gray-400 mb-2 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-devflow-black/50 border border-white/[0.06] text-white placeholder-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 focus:bg-devflow-black/70 transition-all duration-300"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-devflow-gray-400 mb-2 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-devflow-black/50 border border-white/[0.06] text-white placeholder-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 focus:bg-devflow-black/70 transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-devflow-gray-400 mb-2 uppercase tracking-wider"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-devflow-black/50 border border-white/[0.06] text-white placeholder-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 focus:bg-devflow-black/70 transition-all duration-300"
                    placeholder="Company name (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-devflow-gray-400 mb-2 uppercase tracking-wider"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-devflow-black/50 border border-white/[0.06] text-white placeholder-devflow-gray-600 focus:outline-none focus:border-devflow-green/40 focus:bg-devflow-black/70 transition-all duration-300 resize-none"
                    placeholder="What are you looking to build? What's the timeline?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-devflow-green/10 border border-devflow-green/20"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-devflow-green flex-shrink-0"
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
                      <div>
                        <p className="text-sm font-medium text-devflow-green">
                          Message sent successfully!
                        </p>
                        <p className="text-xs text-devflow-gray-400 mt-0.5">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-red-400 flex-shrink-0"
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
                      <div>
                        <p className="text-sm font-medium text-red-400">
                          Something went wrong
                        </p>
                        <p className="text-xs text-devflow-gray-400 mt-0.5">
                          Please try again or email us directly.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <p className="text-xs text-devflow-gray-500 text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll never
                  share your information.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
