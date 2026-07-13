"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { easeOut } from "@/lib/motion";
import ReCaptcha from "@/components/ui/ReCaptcha";

// ─── Data ──────────────────────────────────────────────────────────────────
const services = [
  { label: "AI Automation", icon: "🤖", desc: "Smart workflows & agents" },
  { label: "Web Development", icon: "🌐", desc: "Sites & web apps" },
  { label: "Mobile App", icon: "📱", desc: "iOS & Android" },
  { label: "UI/UX Design", icon: "🎨", desc: "Interfaces & experiences" },
  { label: "Custom ERP", icon: "⚙️", desc: "Enterprise systems" },
  { label: "Other", icon: "💡", desc: "Something else" },
];

const budgets = [
  { label: "Under ₹1L", icon: "🚀", desc: "Quick start" },
  { label: "₹1L - ₹5L", icon: "📈", desc: "Growing" },
  { label: "₹5L - ₹10L", icon: "🔥", desc: "Serious" },
  { label: "₹10L+", icon: "💎", desc: "Enterprise" },
];

const steps = [
  { num: 1, label: "Intro", icon: "👋" },
  { num: 2, label: "Contact", icon: "✉️" },
  { num: 3, label: "Service", icon: "🎯" },
  { num: 4, label: "Budget", icon: "💰" },
  { num: 5, label: "Details", icon: "📝" },
];

const stepLabels = [
  "Hello, what should we call you?",
  (name: string) => `Nice to meet you, ${name}. What is your email?`,
  "What are we engineering?",
  "What is your estimated budget?",
  "Any technical specs or goals to share?",
];

const stepDescriptions = [
  "Start with your name — we're friendly!",
  "So we can reach you about your project.",
  "Pick the type of project you have in mind.",
  "Help us understand the scope of your vision.",
  "The more detail, the better our proposal.",
];

// ─── Animated progress icon ────────────────────────────────────────────────
function ProgressDots({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      {steps.map((s, i) => {
        const isActive = s.num === current;
        const isPast = s.num < current;
        return (
          <div key={s.num} className="flex items-center gap-3">
            {/* Step dot */}
            <motion.div
              initial={false}
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className={`
                relative w-9 h-9 rounded-full flex items-center justify-center
                text-xs font-mono font-semibold
                transition-colors duration-300
                ${
                  isPast
                    ? "bg-devflow-green text-devflow-black"
                    : isActive
                      ? "bg-devflow-green/15 text-devflow-green border border-devflow-green/40"
                      : "bg-white/[0.03] text-devflow-gray-500 border border-white/[0.06]"
                }
              `}
            >
              {isPast ? (
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              ) : (
                s.icon
              )}
              {/* Active glow */}
              {isActive && (
                <motion.div
                  layoutId="step-glow"
                  className="absolute inset-0 rounded-full ring-2 ring-devflow-green/30 ring-offset-2 ring-offset-devflow-charcoal"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </motion.div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="w-6 md:w-10 h-[2px] rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.06]" />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isPast ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 bg-devflow-green origin-left"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Grid selector ─────────────────────────────────────────────────────────
function GridSelector({
  options,
  value,
  onChange,
}: {
  options: { label: string; icon: string; desc: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt, i) => {
        const selected = value === opt.label;
        return (
          <motion.button
            key={opt.label}
            type="button"
            onClick={() => onChange(opt.label)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3, ease: easeOut }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`
              group relative p-4 md:p-5 rounded-2xl text-left
              transition-all duration-300 overflow-hidden
              ${
                selected
                  ? "bg-devflow-green/[0.08] border-devflow-green/50 shadow-[0_0_20px_rgba(204,255,0,0.06)]"
                  : "bg-black/40 border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.03]"
              }
              border
            `}
          >
            {/* Selected ring glow */}
            {selected && (
              <motion.div
                layoutId="selector-bg"
                className="absolute inset-0 rounded-2xl"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute inset-0 rounded-2xl ring-1 ring-devflow-green/30 ring-inset" />
              </motion.div>
            )}

            <div className="relative z-10">
              <span className="text-2xl block mb-2">{opt.icon}</span>
              <span
                className={`
                  text-sm font-semibold block leading-tight
                  ${selected ? "text-devflow-green" : "text-white group-hover:text-devflow-green/80"}
                  transition-colors duration-200
                `}
              >
                {opt.label}
              </span>
              <span className="text-[10px] font-mono text-devflow-gray-500 mt-1 block uppercase tracking-wider">
                {opt.desc}
              </span>
            </div>

            {/* Corner accent */}
            <div
              className={`
                absolute top-0 right-0 w-6 h-6
                transition-all duration-300
                ${selected ? "opacity-100" : "opacity-0"}
              `}
            >
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr-lg border-devflow-green/50" />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

// ─── Floating input ────────────────────────────────────────────────────────
function StepInput({
  value,
  onChange,
  placeholder,
  type = "text",
  autoFocus = false,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  autoFocus?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="
          w-full bg-transparent
          border-b-2 border-white/[0.12]
          focus:border-devflow-green
          py-4 text-2xl md:text-3xl
          text-white
          outline-none
          transition-all duration-300
          placeholder:text-devflow-gray-600
          font-display font-medium
        "
      />
      {/* Bottom glow on focus */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-devflow-green/40 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

// ─── Success screen ────────────────────────────────────────────────────────
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
      {/* Trigger rotation */}

      <div className="relative z-10">
        {/* Checkmark */}
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
}  // ─── Main Component ────────────────────────────────────────────────────────
  export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");

  // Resolve step label (supports both strings and functions)
  const getStepLabel = (stepIndex: number): string => {
    const label = stepLabels[stepIndex];
    return typeof label === "function" ? label(name) : label;
  };

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
    setStep((p) => p + 1);
  };

  const handleBack = () => {
    setError("");
    if (step > 1) setStep((p) => p - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/meeyqenk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service: selectedService,
          budget: selectedBudget,
          notes,
          _subject: `New Project Inquiry from ${name}`,
          _replyto: email,
          ...(recaptchaToken
            ? { "g-recaptcha-response": recaptchaToken }
            : {}),
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
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-devflow-green/[0.015] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              {/* Premium card */}
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent">
                <div className="rounded-2xl bg-devflow-charcoal/95 backdrop-blur-xl p-8 md:p-10">
                  {/* Progress dots */}
                  <ProgressDots current={step} />

                  {/* Step info */}
                  <div className="mb-10">
                    <motion.p
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[11px] font-mono uppercase tracking-[0.15em] text-devflow-gray-500 mb-2"
                    >
                      Step {step} of 5 — {stepDescriptions[step - 1]}
                    </motion.p>
                    <motion.h2
                      key={`label-${step}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      className="font-display text-2xl md:text-3xl font-medium text-white leading-tight"
                    >
                      {getStepLabel(step - 1)}
                    </motion.h2>
                  </div>

                  {/* ── Form ──────────────────────────────────────── */}
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Step 1: Name */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <StepInput
                          value={name}
                          onChange={setName}
                          placeholder="Your name"
                          autoFocus
                        />
                      </motion.div>
                    )}

                    {/* Step 2: Email */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <StepInput
                          value={email}
                          onChange={setEmail}
                          placeholder="hello@example.com"
                          type="email"
                          autoFocus
                        />
                      </motion.div>
                    )}

                    {/* Step 3: Service */}
                    {step === 3 && (
                      <GridSelector
                        options={services}
                        value={selectedService}
                        onChange={setSelectedService}
                      />
                    )}

                    {/* Step 4: Budget */}
                    {step === 4 && (
                      <GridSelector
                        options={budgets}
                        value={selectedBudget}
                        onChange={setSelectedBudget}
                      />
                    )}

                    {/* Step 5: Notes */}
                    {step === 5 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. integrations, feature requirements, timelines..."
                          autoFocus
                          rows={5}
                          className="
                            w-full bg-white/[0.02]
                            border border-white/[0.08]
                            rounded-xl p-5
                            focus:border-devflow-green/40
                            focus:shadow-[0_0_20px_rgba(204,255,0,0.05)]
                            h-36
                            text-white
                            outline-none
                            transition-all duration-300
                            text-sm font-light leading-relaxed
                            resize-none
                            placeholder:text-devflow-gray-600
                          "
                        />
                      </motion.div>
                    )}

                    {/* reCAPTCHA */}
                    {step === 5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pt-2"
                      >
                        <ReCaptcha onChange={setRecaptchaToken} />
                      </motion.div>
                    )}

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

                    {/* Navigation */}
                    <div className="flex justify-between items-center pt-6 border-t border-white/[0.05]">
                      {step > 1 ? (
                        <motion.button
                          type="button"
                          onClick={handleBack}
                          whileHover={{ x: -3 }}
                          className="
                            group flex items-center gap-2
                            text-xs font-mono uppercase tracking-wider
                            text-devflow-gray-400 hover:text-white
                            transition-colors duration-200
                          "
                        >
                          <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </motion.button>
                      ) : (
                        <div />
                      )}

                      {step < 5 ? (
                        <motion.button
                          type="button"
                          onClick={handleNext}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="
                            btn-primary py-2.5 px-7 font-semibold
                            relative overflow-hidden group
                          "
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Continue
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                          className="
                            btn-primary py-2.5 px-8 font-semibold
                            relative overflow-hidden
                          "
                        >
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                          <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? (
                              <>
                                <motion.span
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="w-4 h-4 border-2 border-devflow-black/30 border-t-devflow-black rounded-full shrink-0"
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                Submit Discovery
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </>
                            )}
                          </span>
                        </motion.button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          ) : (
            <SuccessScreen name={name} email={email} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
