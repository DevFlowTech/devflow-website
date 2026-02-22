"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Contact Options */}
      <motion.div
        initial={false}
        animate={{
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 20,
          pointerEvents: isExpanded ? "auto" : "none",
        }}
        className="absolute bottom-16 right-0 mb-2 flex flex-col gap-2"
      >
        {/* Email */}
        <motion.a
          href="mailto:devflowtechnology@gmail.com"
          className="flex items-center gap-3 px-4 py-3 bg-devflow-charcoal/95 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:border-devflow-green/30 transition-all duration-300 shadow-lg"
          whileHover={{ x: -5 }}
        >
          <span className="w-8 h-8 rounded-full bg-devflow-green/10 flex items-center justify-center">
            📧
          </span>
          <span className="text-sm font-medium">Email Us</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 bg-devflow-charcoal/95 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:border-green-500/30 transition-all duration-300 shadow-lg"
          whileHover={{ x: -5 }}
        >
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
            💬
          </span>
          <span className="text-sm font-medium">WhatsApp</span>
        </motion.a>

        {/* Schedule Call */}
        <motion.div whileHover={{ x: -5 }}>
          <Link
            href="#contact"
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-3 px-4 py-3 bg-devflow-charcoal/95 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:border-devflow-green/30 transition-all duration-300 shadow-lg"
          >
            <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              📅
            </span>
            <span className="text-sm font-medium">Schedule Call</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={
          isExpanded ? "Close contact options" : "Open contact options"
        }
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isExpanded
            ? "bg-devflow-gray-500 rotate-45"
            : "bg-devflow-green hover:bg-devflow-green/90"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className={`w-6 h-6 transition-colors ${isExpanded ? "text-white" : "text-devflow-black"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {isExpanded ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          )}
        </svg>
      </motion.button>

      {/* Pulse Animation */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 rounded-full bg-devflow-green"
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
}
