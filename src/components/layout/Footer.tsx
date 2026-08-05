"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const footerLinks = {
  services: [
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Dedicated Teams", href: "/dedicated-development-teams" },
    { label: "Custom Software & ERP", href: "/services/custom-software-erp" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Node.js Development", href: "/services/node-js-development" },
    { label: "Enterprise SEO & AEO", href: "/services/enterprise-seo" },
    { label: "White Label Development", href: "/white-label-development" },
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
  ],
  trust: [
    { label: "NDA Protected", href: "/security" },
    { label: "99.9% Uptime SLA", href: "/sla" },
    { label: "Weekly Agile Sprints", href: "/engineering-process" },
    { label: "Ahmedabad Branch", href: "/software-development-company-ahmedabad" },
    { label: "Technology Stack", href: "/technology-stack" },
    { label: "Maintenance & SLA", href: "/maintenance" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  local: [
    { label: "Software Development Ahmedabad", href: "/software-development-company-ahmedabad" },
    { label: "AI Development Ahmedabad", href: "/ai-development-company-ahmedabad" },
    { label: "Web Development Ahmedabad", href: "/web-development-company-ahmedabad" },
    { label: "Mobile App Development Ahmedabad", href: "/mobile-app-development-company-ahmedabad" },
    { label: "SEO Company Ahmedabad", href: "/seo-company-ahmedabad" },
    { label: "IT Company Ahmedabad", href: "/it-company-ahmedabad" },
    { label: "IT Services Ahmedabad", href: "/it-services-ahmedabad" },
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-devflow-green/20 to-transparent" />
      <motion.div
        className="section-container py-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group mb-6">
              <Image
                src="/logo.png"
                alt="DevFlow Technology"
                width={56}
                height={56}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="font-display font-bold text-3xl tracking-tight text-devflow-gray-100 group-hover:text-devflow-green transition-colors duration-200">
                DevFlow
              </span>
            </Link>
            <p className="text-devflow-gray-300 mb-6 leading-relaxed text-sm max-w-sm">
              Scale your business operations with enterprise-grade engineering. Achieve 10x development velocity, 99.9% uptime availability, and complete source code ownership.
            </p>

            {/* Email & Trust Signals */}
            <div className="space-y-3">
              <a
                href={emailHref}
                className="text-devflow-green transition-colors duration-150 hover:text-devflow-green/80 text-sm block font-mono"
              >
                {emailText}
              </a>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">NDA Protected</span>
                <span className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">ISO Standard Code</span>
                <span className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">GDPR Compliant</span>
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
                <label className="text-[10px] font-mono uppercase tracking-widest text-devflow-gray-400 block mb-1">
                  [ REQUEST A QUICK CALLBACK ]
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                    className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder-devflow-gray-500 focus:border-devflow-green/30 outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="bg-devflow-green text-devflow-black px-4 py-2 rounded-xl text-xs font-semibold hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-300 uppercase tracking-wider mb-6">
              Capabilities
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-300 uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Trust/Standards Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-300 uppercase tracking-wider mb-6">
              Standards & Legal
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.trust.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[10px] font-mono text-devflow-gray-400 uppercase tracking-wider mb-3">
              Governance
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-400 transition-colors duration-150 hover:text-devflow-green text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nigeria Business Partners Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-300 uppercase tracking-wider mb-6">
              Nigeria Partners
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://onpointgroup.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  OnPoint Group
                </a>
              </li>
              <li>
                <a
                  href="https://navafoods.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  Nava Foods
                </a>
              </li>
              <li>
                <a
                  href="https://shipwithonpoint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  ShipWithOnPoint
                </a>
              </li>
              <li>
                <a
                  href="https://onpointmall.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  OnPoint Mall
                </a>
              </li>
            </ul>
          </motion.div>

          {/* India Business Partners Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-300 uppercase tracking-wider mb-6">
              India Partners
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://spontanneous.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  Spontanneous
                </a>
              </li>
              <li>
                <a
                  href="https://rajputbhavin.engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  Bhavin Rajput
                </a>
              </li>
              <li>
                <a
                  href="https://prince.devflow.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-devflow-gray-300 transition-colors duration-150 hover:text-devflow-green text-sm"
                >
                  Prince Gajjar
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Local SEO Landing Pages Links */}
        <motion.div
          variants={staggerItem}
          className="mt-12 pt-6 border-t border-white/[0.04] text-xs"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-devflow-gray-500 block mb-3">
            [ REGIONAL SERVICES & BRANCHES ]
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-devflow-gray-300">
            {footerLinks.local.map((link, index) => (
              <span key={link.label} className="flex items-center gap-2">
                <Link href={link.href} className="hover:text-devflow-green transition-colors font-mono text-[10px]">
                  {link.label}
                </Link>
                {index < footerLinks.local.length - 1 && (
                  <span className="text-white/10 select-none">•</span>
                )}
              </span>
            ))}
          </div>

          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-devflow-gray-500 block mb-3 mt-6">
            [ REGIONAL CENTERS, INDUSTRIES &amp; RESOURCES ]
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-devflow-gray-300">
            {footerLinks.systemIndex.map((link, index) => (
              <span key={link.label} className="flex items-center gap-2">
                <Link href={link.href} className="hover:text-devflow-green transition-colors font-mono text-[10px]">
                  {link.label}
                </Link>
                {index < footerLinks.systemIndex.length - 1 && (
                  <span className="text-white/10 select-none">•</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={staggerItem}
          className="mt-14 pt-8 border-t border-devflow-green/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-devflow-gray-400"
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
