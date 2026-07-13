"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeOut,
} from "@/lib/motion";
import BackgroundText from "@/components/ui/BackgroundText";
import ReCaptcha from "@/components/ui/ReCaptcha";

// ─── Floating Label Input ───────────────────────────────────────────────────
function FloatingInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative group">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ""}
        className={`
          w-full px-4 pt-6 pb-2.5
          bg-transparent
          text-white text-base
          rounded-xl
          outline-none
          border border-white/[0.08]
          transition-all duration-300
          peer
          ${
            focused
              ? "border-devflow-green/50 shadow-[0_0_20px_rgba(204,255,0,0.08),inset_0_1px_0_rgba(204,255,0,0.05)]"
              : "hover:border-white/[0.15]"
          }
        `}
      />
      {/* Animated label */}
      <label
        htmlFor={id}
        className={`
          absolute left-4 top-1/2 -translate-y-1/2
          pointer-events-none select-none
          transition-all duration-300 ease-out-expo
          ${
            active
              ? "top-3 translate-y-0 text-xs text-devflow-green/80"
              : "text-devflow-gray-400 text-base"
          }
        `}
      >
        {label}
        {required && (
          <span className="text-devflow-green/60 ml-0.5">*</span>
        )}
      </label>
      {/* Bottom glow line */}
      <div
        className={`
          absolute bottom-0 left-1/2 -translate-x-1/2
          h-[1px] rounded-full
          transition-all duration-500
          ${
            focused
              ? "w-full bg-gradient-to-r from-transparent via-devflow-green/60 to-transparent"
              : "w-0"
          }
        `}
      />
      {/* Corner accents */}
      <div
        className={`
          absolute top-0 left-0 w-3 h-3 border-l border-t rounded-tl-xl
          transition-all duration-500
          ${focused ? "border-devflow-green/40" : "border-transparent"}
        `}
      />
      <div
        className={`
          absolute top-0 right-0 w-3 h-3 border-r border-t rounded-tr-xl
          transition-all duration-500
          ${focused ? "border-devflow-green/40" : "border-transparent"}
        `}
      />
    </div>
  );
}

// ─── Success Screen ─────────────────────────────────────────────────────────
function SuccessScreen() {
  const [showParticles, setShowParticles] = useState(false);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setScale(1);
    const t = setTimeout(() => setShowParticles(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Animated checkmark circle */}
      <div className="p-14 md:p-16 bg-devflow-charcoal border border-devflow-green/20 rounded-2xl text-center relative">
        {/* Expanding ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 rounded-2xl border-2 border-devflow-green/30"
        />

        {/* Checkmark container */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 flex items-center justify-center mx-auto mb-8 relative"
        >
          <motion.svg
            className="w-10 h-10 text-devflow-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
          {/* Pulsing glow */}
          <div className="absolute inset-0 rounded-full animate-breathing-glow" />
        </motion.div>

        {/* Animated particles */}
        {showParticles && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((i * 60 * Math.PI) / 180) * 80,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 80,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-devflow-green/60"
              />
            ))}
          </>
        )}

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-10"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-3"
          >
            Message Received
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-devflow-gray-300"
          >
            We&apos;ll get back to you within 24 hours.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-devflow-gray-500 text-sm mt-1 font-mono"
          >
            v̴e̴r̴i̴f̴i̴e̴d̴ ✓
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const body: Record<string, unknown> = { ...formState };
      if (recaptchaToken) {
        body["g-recaptcha-response"] = recaptchaToken;
      }

      const response = await fetch("https://formspree.io/f/meeyqenk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", company: "", message: "" });
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Field data ─────────────────────────────────────────────────────────
  const fields = [
    {
      id: "name",
      label: "Your Name",
      value: formState.name,
      set: (v: string) => setFormState((s) => ({ ...s, name: v })),
      required: true,
      placeholder: "Ramesh Sharma",
    },
    {
      id: "email",
      label: "Email Address",
      value: formState.email,
      set: (v: string) => setFormState((s) => ({ ...s, email: v })),
      required: true,
      type: "email",
      placeholder: "hello@example.com",
    },
    {
      id: "company",
      label: "Company (Optional)",
      value: formState.company,
      set: (v: string) => setFormState((s) => ({ ...s, company: v })),
      required: false,
      placeholder: "DevFlow Technology",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-devflow-black relative overflow-hidden"
    >
      {/* Background elements */}
      <BackgroundText text="CONTACT" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-devflow-green/[0.02] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-white/[0.01] blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-devflow-green/20 bg-devflow-green/[0.03] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-pulse-slow" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-devflow-green/70">
                Let&apos;s Build Something
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight tracking-tight mb-6"
            >
              Let&apos;s Explore If{" "}
              <span className="text-gradient">We&apos;re a Good Fit</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-devflow-gray-300 max-w-2xl mx-auto"
            >
              No pitch decks. No sales pressure. Just a straightforward
              conversation about your requirements and how we might help.
            </motion.p>
          </motion.div>

          {/* ── Form Card ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <SuccessScreen />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Premium card container */}
                  <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent">
                    <div className="rounded-2xl bg-devflow-charcoal/95 backdrop-blur-xl p-8 md:p-10">
                      {/* Form fields with stagger */}
                      <div className="space-y-5">
                        {fields.map((f, i) => (
                          <motion.div
                            key={f.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{
                              delay: 0.08 * i,
                              duration: 0.4,
                              ease: easeOut,
                            }}
                          >
                            <FloatingInput
                              id={f.id}
                              label={f.label}
                              value={f.value}
                              onChange={f.set}
                              required={f.required}
                              type={f.type || "text"}
                              placeholder={f.placeholder}
                            />
                          </motion.div>
                        ))}

                        {/* Message field */}
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewportOnce}
                          transition={{
                            delay: 0.24,
                            duration: 0.4,
                            ease: easeOut,
                          }}
                          className="relative group"
                        >
                          <textarea
                            id="message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                message: e.target.value,
                              })
                            }
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Tell us about your project..."
                            className={`
                              w-full px-4 pt-10 pb-3
                              bg-transparent
                              text-white text-base
                              rounded-xl
                              outline-none resize-none
                              border border-white/[0.08]
                              transition-all duration-300
                              ${
                                focusedField === "message"
                                  ? "border-devflow-green/50 shadow-[0_0_20px_rgba(204,255,0,0.08),inset_0_1px_0_rgba(204,255,0,0.05)]"
                                  : "hover:border-white/[0.15]"
                              }
                            `}
                          />
                          {/* Floating label for textarea */}
                          <label
                            htmlFor="message"
                            className={`
                              absolute left-4 top-5 pointer-events-none select-none
                              transition-all duration-300 ease-out-expo
                              ${
                                focusedField === "message" ||
                                formState.message.length > 0
                                  ? "top-3 text-xs text-devflow-green/80"
                                  : "text-devflow-gray-400 text-base"
                              }
                            `}
                          >
                            Tell us about your project
                            <span className="text-devflow-green/60 ml-0.5">
                              *
                            </span>
                          </label>
                          {/* Bottom glow */}
                          <div
                            className={`
                              absolute bottom-0 left-1/2 -translate-x-1/2
                              h-[1px] rounded-full
                              transition-all duration-500
                              ${
                                focusedField === "message"
                                  ? "w-full bg-gradient-to-r from-transparent via-devflow-green/60 to-transparent"
                                  : "w-0"
                              }
                            `}
                          />
                          {/* Corner accents */}
                          <div
                            className={`
                              absolute top-0 left-0 w-3 h-3 border-l border-t rounded-tl-xl
                              transition-all duration-500
                              ${
                                focusedField === "message"
                                  ? "border-devflow-green/40"
                                  : "border-transparent"
                              }
                            `}
                          />
                          <div
                            className={`
                              absolute top-0 right-0 w-3 h-3 border-r border-t rounded-tr-xl
                              transition-all duration-500
                              ${
                                focusedField === "message"
                                  ? "border-devflow-green/40"
                                  : "border-transparent"
                              }
                            `}
                          />
                          {/* Character count */}
                          <div className="absolute bottom-3 right-4 text-[10px] font-mono text-devflow-gray-600">
                            {formState.message.length}
                          </div>
                        </motion.div>
                      </div>

                      {/* reCAPTCHA */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="mt-6 mb-4"
                      >
                        <ReCaptcha onChange={setRecaptchaToken} />
                      </motion.div>

                      {/* Submit button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.35, duration: 0.4 }}
                        className="mt-8"
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`
                            group relative w-full h-[54px]
                            rounded-xl font-semibold text-base
                            overflow-hidden
                            transition-all duration-300
                            ${
                              isSubmitting
                                ? "bg-devflow-green/80 text-devflow-black cursor-not-allowed"
                                : "bg-devflow-green text-devflow-black hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] active:scale-[0.98]"
                            }
                          `}
                        >
                          {/* Shine */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="w-4 h-4 border-2 border-devflow-black/30 border-t-devflow-black rounded-full"
                              />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Discuss Your Requirement
                              <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      </motion.div>

                      {/* Footer links */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-center mt-8 space-y-1"
                      >
                        <p className="text-sm text-devflow-gray-500">
                          Or email us directly:{" "}
                          <a
                            href="mailto:devflowtechnology@gmail.com"
                            className="text-devflow-green/80 hover:text-devflow-green transition-colors"
                          >
                            devflowtechnology@gmail.com
                          </a>
                        </p>
                        <p className="text-xs text-devflow-gray-600 font-mono">
                          ⏎ Response time: Usually within 24 hours.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
