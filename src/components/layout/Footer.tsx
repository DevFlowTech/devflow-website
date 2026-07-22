"use client";

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
};

export default function Footer() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
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
                href="mailto:info@devflow.co.in"
                className="text-devflow-green transition-colors duration-150 hover:text-devflow-green/80 text-sm block font-mono"
              >
                info@devflow.co.in
              </a>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">NDA Protected</span>
                <span className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">ISO Standard Code</span>
                <span className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-devflow-gray-300">GDPR Compliant</span>
              </div>
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
        </div>

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
