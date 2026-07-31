"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { easeOut } from "@/lib/motion";
import ReCaptcha from "@/components/ui/ReCaptcha";
import Link from "next/link";
import { FiCheckCircle, FiChevronRight, FiBriefcase, FiVideo, FiMessageCircle, FiBookOpen } from "react-icons/fi";

const services = [
  { label: "AI Solutions", desc: "LLMs, RAG & Agents" },
  { label: "Dedicated Team", desc: "Managed developers" },
  { label: "ERP & Custom Software", desc: "Enterprise core systems" },
  { label: "SaaS Development", desc: "Scalable web products" },
  { label: "Enterprise SEO/AEO", desc: "AI Search optimization" },
  { label: "Partnership & White Label", desc: "Agency engineering" },
];

const companySizes = [
  { label: "Startup", desc: "1-10 members" },
  { label: "SME / Growth", desc: "11-100 members" },
  { label: "Enterprise", desc: "100+ members" },
];

const budgets = [
  { label: "₹5L - ₹15L", desc: "Small ERP / MVP Apps" },
  { label: "₹15L - ₹30L", desc: "Medium Platform / AI Pipeline" },
  { label: "₹30L - ₹60L", desc: "Enterprise Core ERP" },
  { label: "₹60L+", desc: "Dedicated Team / Custom Scale" },
];

const timelines = [
  { label: "< 2 Months", desc: "Rapid release blueprint" },
  { label: "2 - 4 Months", desc: "Standard deployment cycles" },
  { label: "4+ Months", desc: "Enterprise milestones" },
];

const channels = [
  { label: "Google Meet", desc: "Video consultation Call" },
  { label: "WhatsApp", desc: "Direct developer messaging" },
  { label: "Calendly Link", desc: "Direct calendar slot booking" },
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
        rows={multiline ? rows : undefined}
        placeholder={focused ? placeholder : ""}
        className={`
          w-full px-4 ${multiline ? "pt-9 pb-3" : "pt-6 pb-2.5"}
          bg-devflow-gray-600 text-devflow-gray-100 text-base rounded-xl outline-none
          border border-white/[0.08]
          transition-all duration-300
          ${multiline ? "resize-none" : ""}
          ${
            focused
              ? "border-devflow-green/50 bg-devflow-black"
              : "hover:border-devflow-green/20"
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 pointer-events-none select-none
          transition-all duration-300 ease-out
          ${
            multiline ? "top-4" : "top-1/2 -translate-y-1/2"
          }
          ${
            active
              ? "top-2.5 translate-y-0 text-[10px] font-mono uppercase tracking-wider text-devflow-green"
              : "text-devflow-gray-300 text-base"
          }
        `}
      >
        {label}
        {required && <span className="text-devflow-green ml-0.5">*</span>}
      </label>
    </div>
  );
}

// ─── Button Selector Grid ──────────────────────────────────────────────────
function SelectorGrid({
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
    <div className="space-y-2">
      <span className="text-[10px] font-mono uppercase tracking-widest text-devflow-gray-400 block mb-1">
        {label}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {options.map((opt) => {
          const selected = value === opt.label;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onChange(opt.label)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                selected
                  ? "bg-devflow-green/10 border-devflow-green text-white"
                  : "bg-devflow-gray-600 border-white/[0.08] hover:border-devflow-green/30 text-devflow-gray-200"
              }`}
            >
              <span className={`text-sm font-semibold block leading-tight ${selected ? "text-devflow-green" : ""}`}>
                {opt.label}
              </span>
              <span className="text-[10px] text-devflow-gray-400 block mt-1 leading-snug">
                {opt.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Success Screen ────────────────────────────────────────────────────────
function SuccessScreen({ name, email, preferredChannel }: { name: string; email: string; preferredChannel: string }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 md:p-12 rounded-2xl border border-devflow-green/20 bg-devflow-charcoal text-center"
    >
      <div className="w-20 h-20 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center mx-auto mb-6">
        <FiCheckCircle className="w-10 h-10 text-devflow-green" />
      </div>
      <h1 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">
        Your blueprint discovery is initialized.
      </h1>
      <p className="text-devflow-gray-300 text-sm max-w-lg mx-auto leading-relaxed mb-8">
        Thank you, <span className="text-devflow-green font-medium">{name}</span>. We've received your requirements. 
        A senior systems architect will review your scope parameters and reach out via <span className="text-devflow-green font-medium">{email}</span> within 24 hours to schedule your strategy session.
      </p>
      
      {preferredChannel === "Calendly Link" && (
        <div className="mb-8 p-6 bg-devflow-green/5 border border-devflow-green/10 rounded-xl max-w-md mx-auto">
          <p className="text-xs text-white mb-3">Preferred booking channel: Calendly</p>
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-devflow-green text-devflow-black rounded-lg text-xs font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Directly Book Slots <FiChevronRight />
          </a>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <Link href="/" className="px-6 py-3 bg-devflow-gray-600 text-white rounded-lg text-xs font-semibold hover:bg-devflow-gray-500 transition-colors">
          Back to Homepage
        </Link>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("");
  const [notes, setNotes] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) { setError("Name is required."); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Valid email is required."); return; }
    if (!selectedService) { setError("Please select a primary service."); return; }
    if (!selectedSize) { setError("Please select your company scale."); return; }
    if (!selectedBudget) { setError("Please select an estimated budget range."); return; }
    if (!selectedTimeline) { setError("Please select a target timeline."); return; }
    if (!selectedChannel) { setError("Please select your preferred communication channel."); return; }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meeyqenk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          service: selectedService,
          companySize: selectedSize,
          budget: selectedBudget,
          timeline: selectedTimeline,
          channel: selectedChannel,
          notes,
          _subject: `Enterprise Discovery Inquiry from ${name} (${company || "No Company"})`,
          _replyto: email,
          ...(recaptchaToken ? { "g-recaptcha-response": recaptchaToken } : {}),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Network error. Please email info@devflow.co.in directly.");
      }
    } catch {
      setError("Network error. Please email info@devflow.co.in directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-devflow-black pt-32 pb-16 overflow-hidden flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(186,230,84,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="section-container relative z-10 max-w-4xl w-full">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent shadow-xl"
          >
            <div className="rounded-2xl bg-devflow-charcoal p-6 md:p-10">
              {/* Header */}
              <div className="mb-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-devflow-green/20 bg-devflow-green/5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-devflow-green animate-pulse" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-devflow-green">
                    STRATEGY & DISCOVERY BLUEPRINT
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-medium text-white leading-tight">
                  Design Your Architecture
                </h1>
                <p className="text-devflow-gray-300 text-xs mt-2 font-light">
                  Map your requirements, budget ranges, and SLA goals. A senior systems engineer will review your specs within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <FloatingInput id="name" label="Full Name" value={name} onChange={setName} required />
                  <FloatingInput id="email" label="Corporate Email" value={email} onChange={setEmail} type="email" required />
                  <FloatingInput id="company" label="Company Name (Optional)" value={company} onChange={setCompany} />
                </div>

                {/* Qualifiers selectors */}
                <SelectorGrid label="1. Primary Project Capability Needed" options={services} value={selectedService} onChange={setSelectedService} />
                
                <SelectorGrid label="2. Company Scale" options={companySizes} value={selectedSize} onChange={setSelectedSize} />
                
                <SelectorGrid label="3. Target Budget Scope (INR)" options={budgets} value={selectedBudget} onChange={setSelectedBudget} />
                
                <SelectorGrid label="4. Target Launch Timeline" options={timelines} value={selectedTimeline} onChange={setSelectedTimeline} />
                
                <SelectorGrid label="5. Preferred Strategy Session Channel" options={channels} value={selectedChannel} onChange={setSelectedChannel} />

                {/* Scope Notes */}
                <FloatingInput id="notes" label="Technical Constraints & Project Scope Details (Optional)" value={notes} onChange={setNotes} multiline rows={4} />

                {/* reCAPTCHA */}
                <div className="pt-2 flex justify-center md:justify-start">
                  <ReCaptcha onChange={setRecaptchaToken} />
                </div>

                {/* Error Banner */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs text-red-400 font-mono bg-red-500/5 border border-red-500/10 rounded-lg px-4 py-2"
                  >
                    ⚠ {error}
                  </motion.p>
                )}

                {/* Submit button */}
                <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-devflow-green text-devflow-black font-semibold text-xs rounded-xl tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    {isSubmitting ? "Generating Blueprint..." : "Get Software Blueprint"}
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                  
                  <div className="flex gap-6 text-[10px] font-mono text-devflow-gray-400">
                    <span className="flex items-center gap-1.5"><FiBriefcase className="text-devflow-green" /> NDA Protected</span>
                    <span className="flex items-center gap-1.5"><FiVideo className="text-devflow-green" /> 1-on-1 Architect Session</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        ) : (
          <SuccessScreen name={name} email={email} preferredChannel={selectedChannel} />
        )}
      </div>
    </main>
  );
}
