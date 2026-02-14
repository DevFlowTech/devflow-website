"use client";

import { motion } from "framer-motion";

export default function HeroMockup() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto mt-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-devflow-green/15 via-devflow-green/10 to-transparent rounded-3xl blur-xl animate-pulse-slow" />

      {/* Laptop Frame */}
      <div className="relative">
        {/* Screen */}
        <div className="relative bg-devflow-charcoal rounded-t-xl border border-white/10 overflow-hidden">
          {/* Browser Bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-devflow-dark border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-devflow-black/50 rounded-md px-3 py-1.5 text-xs text-devflow-gray-400 font-mono">
                https://your-project.devflow.co.in
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="p-4 h-48 md:h-56 bg-gradient-to-br from-devflow-dark to-devflow-black">
            {/* Code Lines - staggered fade-in */}
            <div className="space-y-2">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-purple-400 font-mono text-xs">const</span>
                <span className="text-blue-400 font-mono text-xs">app</span>
                <span className="text-white font-mono text-xs">=</span>
                <span className="text-yellow-400 font-mono text-xs">
                  createApp
                </span>
                <span className="text-devflow-gray-400 font-mono text-xs">
                  ();
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-purple-400 font-mono text-xs">await</span>
                <span className="text-blue-400 font-mono text-xs">deploy</span>
                <span className="text-devflow-gray-400 font-mono text-xs">
                  (
                </span>
                <span className="text-devflow-green font-mono text-xs">
                  'production'
                </span>
                <span className="text-devflow-gray-400 font-mono text-xs">
                  );
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-devflow-green font-mono text-xs">✓</span>
                <span className="text-devflow-green font-mono text-xs">
                  Deployed successfully!
                </span>
              </motion.div>
            </div>

            {/* Dashboard Preview Elements */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="h-12 rounded-lg bg-white/5 border border-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="h-4 bg-gradient-to-b from-devflow-gray-500 to-devflow-gray-600 rounded-b-xl" />
        <div className="h-2 bg-devflow-gray-600 mx-16 rounded-b-lg" />
      </div>

      {/* Floating Elements - static positioning, CSS hover effect */}
      <div className="absolute -top-4 -right-4 w-14 h-14 bg-devflow-charcoal/80 backdrop-blur-sm rounded-xl border border-devflow-green/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">⚡</span>
      </div>

      <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-devflow-charcoal/80 backdrop-blur-sm rounded-xl border border-purple-500/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <span className="text-xl">🚀</span>
      </div>
    </motion.div>
  );
}
