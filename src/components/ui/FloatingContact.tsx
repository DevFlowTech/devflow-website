"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMail, FiCalendar, FiX, FiMessageSquare } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const emailHref = mounted ? "mailto:info@devflow.co.in" : "#";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Contact Popover Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="menu"
            aria-label="Direct contact channels"
            className="absolute bottom-16 right-0 mb-2 w-64 p-3 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-1.5"
          >
            <div className="px-3 py-1.5 border-b border-white/10 mb-1">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Direct Contact
              </span>
            </div>

            {/* Email Us */}
            <a
              href={emailHref}
              role="menuitem"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-devflow-blue/20 flex items-center justify-center text-devflow-blue shrink-0">
                <FiMail className="w-4 h-4 text-blue-400" aria-hidden="true" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-zinc-100">Email Us</span>
                <span className="text-[10px] text-zinc-400 font-mono">info@devflow.co.in</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919726113311"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <SiWhatsapp className="w-4 h-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-zinc-100">Chat on WhatsApp</span>
                <span className="text-[10px] text-zinc-400 font-mono">+91 97261 13311</span>
              </div>
            </a>

            {/* Schedule Consultation */}
            <Link
              href="/contact"
              onClick={() => setIsExpanded(false)}
              role="menuitem"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <FiCalendar className="w-4 h-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-zinc-100">Schedule Consultation</span>
                <span className="text-[10px] text-zinc-400 font-mono">Book 30-min Blueprint</span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-haspopup="menu"
        aria-label={isExpanded ? "Close contact options" : "Open contact options"}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isExpanded
            ? "bg-zinc-700 text-white rotate-90"
            : "bg-devflow-blue hover:bg-devflow-blue/90 text-white hover:scale-105"
        }`}
      >
        {isExpanded ? (
          <FiX className="w-5 h-5" aria-hidden="true" />
        ) : (
          <FiMessageSquare className="w-5 h-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
