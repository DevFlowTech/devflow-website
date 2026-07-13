"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const footerLinks = {
  company: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="DevFlow Technology"
                width={400}
                height={112}
                className="w-36 h-auto object-contain transition-opacity duration-150 hover:opacity-80"
              />
            </Link>
            <p className="text-devflow-gray-500 max-w-sm mb-6 leading-relaxed">
              We build custom internal tools and operational software for
              scaling startups. Small team. Focused scope. Fast execution.
            </p>

            {/* Email */}
            <a
              href="mailto:devflowtechnology@gmail.com"
              className="text-devflow-green transition-colors duration-150 hover:text-devflow-green/80"
            >
              devflowtechnology@gmail.com
            </a>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-500 uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-400 transition-colors duration-150 hover:text-white text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal + Social Column */}
          <motion.div variants={staggerItem}>
            <h4 className="text-xs font-medium text-devflow-gray-500 uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-devflow-gray-400 transition-colors duration-150 hover:text-white text-sm"
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
          className="mt-14 pt-8 border-t border-white/[0.04]"
        >
          <p className="text-devflow-gray-600 text-sm text-center">
            © {new Date().getFullYear()} DevFlow Technology. All rights
            reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
