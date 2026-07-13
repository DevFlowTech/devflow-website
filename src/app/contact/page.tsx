"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { easeOut } from "@/lib/motion";
import ReCaptcha from "@/components/ui/ReCaptcha";

// ─── Data ──────────────────────────────────────────────────────────────────
const services = [
  { label: "AI Automation", desc: "Smart workflows & agents" },
  { label: "Web Development", desc: "Sites & web apps" },
  { label: "Mobile App", desc: "iOS & Android" },
  { label: "UI/UX Design", desc: "Interfaces & experiences" },
  { label: "Custom ERP", desc: "Enterprise systems" },
  { label: "Other", desc: "Something else" },
];

// ─── Floating Label Input ──────────────────────────────────────────────────
function FloatingInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  multiline = false,
  rows = 3,
  placeholder = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag = multiline ? "textarea" : "input";

  return (
    <div className="relative group">
      <Tag
        id={id}
        type={multiline ? undefined : type}
        value={value}
        required={required}
        onChange={(e) =>
          onChange(
            multiline
              ? (e as React.ChangeEvent<HTMLTextAreaElement>).target.value
              : (e as React.ChangeEvent<HTMLInputElement>).target.value,
          )
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? rows : undefined}          placeholder={focused ? placeholder : ""}
          className={`
          w-full px-4 ${multiline ? "pt-9 pb-3" : "pt-6 pb-2.5"}
          bg-transparent text-white text-base rounded-xl outline-none
          border border-white/[0.08]
          transition-all duration-300
          ${multiline ? "resize-none" : ""}
          ${
            focused
              ? "border-devflow-green/50 shadow-[0_0_20px_rgba(204,255,0,0.08)]"
              : "hover:border-white/[0.15]"
          }
        `}
      />
      {/* Floating label */}
      <label
        htmlFor={id}
        className={`
          absolute left-4 pointer-events-none select-none
          transition-all duration-300 ease-out-expo
          ${
            multiline ? "top-4" : "top-1/2 -translate-y-1/2"
          }
          ${
            active
              ? "top-2.5 translate-y-0 text-[10px] font-mono uppercase tracking-wider text-devflow-green/70"
              : "text-devflow-gray-400 text-base"
          }
        `}
      >
        {label}
        {required && <span className="text-devflow-green/60 ml-0.5">*</span>}
      </label>
      {/* Bottom glow */}
      <div
        className={`
          absolute bottom-0 left-1/2 -translate-x-1/2
          h-[1px] rounded-full transition-all duration-500
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

// ─── Grid Selector ──────────────────────────────────────────────────────────
function GridSelector({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; desc: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-wider text-devflow-gray-500 mb-3 ml-1">
        {label} <span className="text-devflow-green/60">*</span>
      </p>
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt, i) => {
          const selected = value === opt.label;
          return (
            <motion.button
              key={opt.label}
              type="button"
              onClick={() => onChange(opt.label)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i, duration: 0.3, ease: easeOut }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`
                group relative p-3.5 md:p-4 rounded-xl text-left border
                transition-all duration-300 overflow-hidden
                ${
                  selected
                    ? "bg-devflow-green/[0.08] border-devflow-green/50 shadow-[0_0_15px_rgba(204,255,0,0.05)]"
                    : "bg-black/40 border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.02]"
                }
              `}
            >
              {selected && (
                <motion.div
                  layoutId="selector-ring"
                  className="absolute inset-0 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="absolute inset-0 rounded-xl ring-1 ring-devflow-green/30 ring-inset" />
                </motion.div>
              )}
              <div className="relative z-10">
                <div>
                  <span
                    className={`
                      text-sm font-semibold block leading-tight
                      ${selected ? "text-devflow-green" : "text-white group-hover:text-devflow-green/80"}
                      transition-colors duration-200
                    `}
                  >
                    {opt.label}
                  </span>
                  <span className="text-[9px] font-mono text-devflow-gray-500 block uppercase tracking-wider">
                    {opt.desc}
                  </span>
                </div>
              </div>
              {/* Corner accent */}
              <div
                className={`
                  absolute top-0 right-0 w-5 h-5 transition-all duration-300
                  ${selected ? "opacity-100" : "opacity-0"}
                `}
              >
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r rounded-tr-lg border-devflow-green/50" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Success Screen ────────────────────────────────────────────────────────
function SuccessScreen({ name, email }: { name: string; email: string }) {
  const numDots = 8;
  const r = 0;
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className="relative p-10 md:p-14 rounded-2xl border border-white/[0.05] bg-devflow-charcoal text-center overflow-hidden"
    >
      {/* Orbiting dots */}
      {[...Array(numDots)].map((_, i) => {
        const a = (i / numDots) * 360 + r;
        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-devflow-green/30"
            animate={{
              x: Math.cos((a * Math.PI) / 180) * 60,
              y: Math.sin((a * Math.PI) / 180) * 60,
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              x: { duration: 3, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "linear" },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              },
            }}
          />
        );
      })}

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.15,
          }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 flex items-center justify-center mx-auto mb-8 border border-devflow-green/20"
        >
          <motion.svg
            className="w-10 h-10 text-devflow-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-3xl md:text-5xl font-medium text-white"
        >
          Clarity is on its way.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-devflow-gray-300 text-sm font-light max-w-md mx-auto leading-relaxed mt-6"
        >
          Thank you, <span className="text-white font-medium">{name}</span>.
          We have received your project requirements. Prince Gajjar and the
          DevFlow engineering team will review your specs and reach out at{" "}
          <span className="text-white font-medium">{email}</span> within 24
          hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10"
        >
          <a
            href="/"
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              bg-white/[0.05] text-devflow-gray-200
              border border-white/[0.08]
              hover:bg-devflow-green/[0.08] hover:text-devflow-green hover:border-devflow-green/30
              transition-all duration-300
              text-sm font-medium
            "
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Homepage
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }
    if (!selectedService) { setError("Please select a service."); return; }
    if (!budget.trim()) { setError("Please enter your budget."); return; }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meeyqenk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, notes,
          service: selectedService,
          budget,
          _subject: `New Project Inquiry from ${name}`,
          _replyto: email,
          ...(recaptchaToken ? { "g-recaptcha-response": recaptchaToken } : {}),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-devflow-black pt-28 pb-16 overflow-hidden flex items-center justify-center">
      {/* Background orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-devflow-green/[0.015] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-2xl w-full">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            {/* Premium card */}
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent">
              <div className="rounded-2xl bg-devflow-charcoal/95 backdrop-blur-xl p-8 md:p-10">
                {/* Header */}
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-devflow-green/20 bg-devflow-green/[0.03] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-pulse-slow" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-devflow-green/70">
                      Project Discovery
                    </span>
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-medium text-white leading-tight">
                    Tell us about your project
                  </h1>
                  <p className="text-devflow-gray-400 text-sm mt-2 font-light">
                    All fields are required unless marked optional. We&apos;ll respond within 24 hours.
                  </p>
                </div>

                {/* ── Form ─────────────────────────────────── */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row: Name + Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FloatingInput
                      id="name"
                      label="Your Name"
                      value={name}
                      onChange={setName}
                      required
                    />
                    <FloatingInput
                      id="email"
                      label="Email Address"
                      value={email}
                      onChange={setEmail}
                      type="email"
                      required
                    />
                  </div>

                  {/* Service selector */}
                  <GridSelector
                    label="Select a Service"
                    options={services}
                    value={selectedService}
                    onChange={setSelectedService}
                  />

                  {/* Budget input */}
                  <FloatingInput
                    id="budget"
                    label="Estimated Budget"
                    value={budget}
                    onChange={setBudget}
                    required
                    placeholder="e.g. ₹2L - ₹3L"
                  />

                  {/* Notes */}
                  <FloatingInput
                    id="notes"
                    label="Project Details (Optional)"
                    value={notes}
                    onChange={setNotes}
                    multiline
                    rows={4}
                  />

                  {/* reCAPTCHA */}
                  <div className="pt-2">
                    <ReCaptcha onChange={setRecaptchaToken} />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-red-400 font-mono bg-red-500/5 border border-red-500/10 rounded-lg px-4 py-2"
                    >
                      ⚠ {error}
                    </motion.p>
                  )}

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        group relative w-full h-[54px] rounded-xl font-semibold text-base
                        overflow-hidden transition-all duration-300
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
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-devflow-black/30 border-t-devflow-black rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Submit Your Project
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Footer */}
                  <p className="text-center text-[11px] text-devflow-gray-500 font-mono">
                    ⏎ Response within 24 hours · Or email{" "}
                    <a href="mailto:devflowtechnology@gmail.com" className="text-devflow-green/70 hover:text-devflow-green transition-colors">
                      devflowtechnology@gmail.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        ) : (
          <SuccessScreen name={name} email={email} />
        )}
      </div>
    </main>
  );
}
