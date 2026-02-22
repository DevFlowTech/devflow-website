"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";

const services = [
  {
    title: "Business Websites",
    description: "Performance-focused sites that load fast and convert",
    path: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Web Applications",
    description: "Custom apps with dashboards and real-time data",
    path: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
  {
    title: "Internal Tools",
    description: "Admin panels and automation to streamline ops",
    path: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  },
  {
    title: "Custom Software",
    description: "End-to-end solutions for complex requirements",
    path: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
];

export default function ServicesQuickView() {
  return (
    <section className="py-24 relative bg-devflow-black">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Section Label */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <h2 className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-3">
                Our Expertise
              </h2>
              <h3 className="font-display text-3xl md:text-4xl text-white font-semibold">
                Comprehensive{" "}
                <span className="text-devflow-gray-500">IT Solutions</span>
              </h3>
            </div>
            <MagneticButton className="md:self-end">
              <Link href="#services" className="btn-secondary">
                View all services
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerItem}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <GlowCard key={service.title} className="h-full">
                <Link
                  href="#services"
                  className="block h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-devflow-green/30 transition-all duration-300 flex flex-col items-start min-h-[220px] relative"
                >
                  <div className="mb-6 p-3 rounded-xl bg-devflow-green/[0.05] text-devflow-green group-hover:scale-110 group-hover:bg-devflow-green group-hover:text-devflow-black transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={service.path}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-devflow-green transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-devflow-gray-400 text-sm leading-relaxed mb-6 group-hover:text-devflow-gray-300 transition-colors duration-200">
                    {service.description}
                  </p>

                  {/* Arrow at bottom */}
                  <div className="absolute bottom-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-devflow-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </GlowCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
