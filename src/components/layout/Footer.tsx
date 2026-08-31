"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import GooglePreferredSource from "@/components/ui/GooglePreferredSource";

const footerLinks = {
  services: [
    { label: "AI Solutions Hub", href: "/ai-solutions" },
    { label: "Dedicated Teams", href: "/dedicated-development-teams" },
    { label: "Custom Software & ERP", href: "/services/custom-software-erp" },
    { label: "Enterprise Software", href: "/services/software-development" },
    { label: "ERP Systems Development", href: "/services/erp-development" },
    { label: "CRM Portal Development", href: "/services/crm-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Node.js Development", href: "/services/node-js-development" },
    { label: "Enterprise SEO & AEO", href: "/services/enterprise-seo" },
    { label: "White Label Hub", href: "/white-label-development" },
    { label: "White-Label Partnering", href: "/services/white-label-development" },
    { label: "Offshore Development", href: "/offshore-development" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Engineering Process", href: "/engineering-process" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Security & Compliance", href: "/security" },
    { label: "SLA Details", href: "/sla" },
    { label: "Pricing Models", href: "/pricing" },
    { label: "Frequently Asked Questions", href: "/faq" },
  ],
  trust: [
    { label: "NDA Protected", href: "/security" },
    { label: "99.9% Uptime SLA", href: "/sla" },
    { label: "Weekly Agile Sprints", href: "/engineering-process" },
    { label: "Ahmedabad Branch", href: "/locations/ahmedabad" },
    { label: "Technology Stack", href: "/technology-stack" },
    { label: "Technical Expertise", href: "/expertise" },
    { label: "Maintenance & SLA", href: "/maintenance" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  local: [
    { label: "Software Development Ahmedabad", href: "/services/custom-software-development" },
    { label: "AI Development Ahmedabad", href: "/services/ai-development" },
    { label: "Web Development Ahmedabad", href: "/services/web-application-development" },
    { label: "Mobile App Development Ahmedabad", href: "/services/mobile-app-development" },
    { label: "SEO Company Ahmedabad", href: "/services/seo" },
    { label: "IT Company Ahmedabad", href: "/services/custom-software-development" },
    { label: "IT Services Ahmedabad", href: "/services" },
  ],
  systemIndex: [
    { label: "Ahmedabad Center", href: "/locations/ahmedabad" },
    { label: "Gujarat Center", href: "/locations/gujarat" },
    { label: "Mumbai Center", href: "/locations/mumbai" },
    { label: "Healthcare Sector", href: "/industries/healthcare" },
    { label: "Manufacturing Sector", href: "/industries/manufacturing" },
    { label: "Knowledge Hub", href: "/knowledge-base" },
    { label: "Guide: What is ERP", href: "/knowledge-base/what-is-erp" },
    { label: "Guide: ERP vs CRM", href: "/knowledge-base/erp-vs-crm" },
    { label: "Tools & Resources Hub", href: "/resources" },
    { label: "Calculators Hub", href: "/resources/calculators" },
    { label: "SEO Checker Tool", href: "/resources/tools/seo-audit" },
    { label: "Quick SEO Audit", href: "/seo-audit" },
  ],
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const emailHref = mounted ? "mailto:info@devflow.co.in" : "#";
  const emailText = mounted ? "info@devflow.co.in" : "info [at] devflow.co.in";

  return (
    <footer className="bg-devflow-charcoal relative">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-devflow-blue/20 to-transparent" />
      <motion.div
        className="section-container py-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-8">
          {/* Brand Column (lg:col-span-2) */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group mb-6">
              <Image
                src="/logo.png"
                alt="DevFlow Technology"
                width={56}
                height={56}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="font-display font-bold text-3xl tracking-tight text-devflow-gray-100 group-hover:text-devflow-blue transition-colors duration-200">
                DevFlow
              </span>
            </Link>
            <p className="text-devflow-gray-300 mb-6 leading-relaxed text-sm max-w-sm">
              Architecting AI-powered custom software systems, ERPs, and automated digital infrastructure for growing businesses and enterprises with 100% source code ownership.
            </p>

            {/* Email & Trust Signals + NAP (Local SEO) */}
            <div className="space-y-3">
              <a
                href={emailHref}
                className="text-devflow-blue transition-colors duration-150 hover:underline text-sm block font-mono font-medium"
              >
                {emailText}
              </a>

              {/* Visible NAP — critical for Local SEO consistency */}
              <address className="not-italic text-xs text-devflow-gray-400 leading-relaxed">
                <span className="block font-semibold text-devflow-gray-300">DevFlow Technology</span>
                Opp. Empty Plot, Near Swaminarayan Temple,<br />
                Navapura, Sarkhej-Bavla Highway,<br />
                Ahmedabad, Gujarat 382210, India
              </address>
              <div className="flex flex-col gap-1 text-xs font-mono text-devflow-gray-400">
                <a href="tel:+919726113311" className="hover:text-devflow-blue transition-colors">+91-97261-13311</a>
                <a href="tel:+916355043103" className="hover:text-devflow-blue transition-colors">+91-63550-43103</a>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">NDA Available</span>
                <span className="text-xs font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">Security-Conscious Engineering</span>
                <span className="text-xs font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">GDPR-Aware Architecture</span>
              </div>

              {/* Google Preferred Source Badge */}
              <div className="pt-2">
                <GooglePreferredSource variant="badge" theme="dark" />
              </div>
            </div>

            {/* Quick Callback Form */}
            <div className="pt-6">
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const input = form.querySelector('input') as HTMLInputElement;
                  const email = input.value;
                  try {
                    const response = await fetch("https://formspree.io/f/meeyqenk", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email, message: "Quick Callback requested from Footer Form." }),
                    });
                    if (response.ok) {
                      alert("Callback request submitted! We will reach out to you within 24 hours.");
                      input.value = "";
                    } else {
                      alert("Something went wrong. Please email us directly.");
                    }
                  } catch {
                    alert("Something went wrong. Please email us directly.");
                  }
                }}
                className="space-y-2 max-w-sm"
              >
                <label className="text-xs font-mono tracking-wider text-devflow-gray-400 block mb-1">
                  [ Request a Quick Callback ]
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                    aria-label="Email address for callback"
                    className="bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white placeholder-devflow-gray-500 focus:border-devflow-blue/50 outline-none w-full"
                  />
                  <button
                    type="submit"
                    aria-label="Request a phone callback"
                    className="bg-devflow-blue text-white px-4 py-2 rounded-xl text-xs font-semibold hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
                  >
                    Request Callback
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Capabilities Column (lg:col-span-2) */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-devflow-gray-200 tracking-normal mb-4">
              Capabilities &amp; Solutions
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-blue text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-semibold text-devflow-gray-200 tracking-normal mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-blue text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Trust/Standards Column & Governance */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-semibold text-devflow-gray-200 tracking-normal mb-4">
              Standards &amp; Trust
            </h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.trust.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-blue text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/[0.06]">
              <h4 className="text-xs font-semibold text-devflow-gray-300 tracking-normal mb-3">
                Governance
              </h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-devflow-gray-400 transition-colors duration-150 hover:text-devflow-blue text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Partners Column (Combined) */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-semibold text-devflow-gray-200 tracking-normal mb-4">
              Partners &amp; Network
            </h4>
            <ul className="space-y-2.5 text-xs text-devflow-gray-300">
              <li>
                <a
                  href="https://onpointgroup.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-devflow-blue transition-colors"
                >
                  OnPoint Group (NG)
                </a>
              </li>
              <li>
                <a
                  href="https://navafoods.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-devflow-blue transition-colors"
                >
                  Nava Foods
                </a>
              </li>
              <li>
                <a
                  href="https://spontanneous.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-devflow-blue transition-colors"
                >
                  Spontanneous
                </a>
              </li>
              <li>
                <a
                  href="https://rajputbhavin.engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-devflow-blue transition-colors"
                >
                  Bhavin Rajput
                </a>
              </li>
              <li>
                <a
                  href="https://prince.devflow.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-devflow-blue transition-colors"
                >
                  Prince Gajjar
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Regional Hubs & Specialized Pages Accordion */}
        <motion.div
          variants={staggerItem}
          className="mt-12 pt-6 border-t border-white/[0.06] text-xs"
        >
          <details className="group">
            <summary className="cursor-pointer text-xs font-mono text-devflow-gray-400 hover:text-white flex items-center justify-between py-2 select-none">
              <span className="font-semibold text-devflow-gray-300">
                [ Regional Hubs, Specialized Industries &amp; Resource Directories ]
              </span>
              <span className="text-devflow-blue transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                ↓
              </span>
            </summary>

            <div className="pt-4 space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-devflow-gray-300 mb-3">
                  Regional Services &amp; Branches
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-devflow-gray-300">
                  {footerLinks.local.map((link, index) => (
                    <span key={link.label} className="flex items-center gap-2">
                      <Link
                        href={link.href}
                        className="hover:text-devflow-blue underline underline-offset-4 decoration-white/20 transition-colors font-mono text-xs"
                      >
                        {link.label}
                      </Link>
                      {index < footerLinks.local.length - 1 && (
                        <span className="text-white/20 select-none" aria-hidden="true">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-devflow-gray-300 mb-3">
                  Regional Centers, Industries &amp; Resources
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-devflow-gray-300">
                  {footerLinks.systemIndex.map((link, index) => (
                    <span key={link.label} className="flex items-center gap-2">
                      <Link
                        href={link.href}
                        className="hover:text-devflow-blue underline underline-offset-4 decoration-white/20 transition-colors font-mono text-xs"
                      >
                        {link.label}
                      </Link>
                      {index < footerLinks.systemIndex.length - 1 && (
                        <span className="text-white/20 select-none" aria-hidden="true">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </motion.div>

        {/* Google Preferred Sources Sitewide Follow Banner */}
        <motion.div
          variants={staggerItem}
          className="mt-12 p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.02] via-devflow-black to-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm"
        >
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-devflow-blue flex items-center justify-center sm:justify-start gap-1.5 font-semibold">
              <span>Google Preferred Source</span>
            </span>
            <p className="text-xs text-devflow-gray-300 font-light">
              Follow DevFlow Technology in Google Search to receive our latest engineering publications, AI releases, and enterprise software insights.
            </p>
          </div>
          <div className="shrink-0">
            <GooglePreferredSource variant="inline" theme="dark" />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={staggerItem}
          className="mt-14 pt-8 border-t border-devflow-blue/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-devflow-gray-400"
        >
          <p>© {new Date().getFullYear()} DevFlow Technology. All rights reserved.</p>
          <div className="flex gap-4">
            <span>SaaS • ERP • Dedicated Engineering Teams • AI Solutions</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
