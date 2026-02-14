"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "The team delivered a robust enterprise portal that perfectly tailored to our specific operational needs. Highly recommended.",
    author: "Project Manager",
    role: "IT Operations",
    company: "Pixsignerz (Aureon)",
    rating: 5,
  },
  {
    quote:
      "Our online presence has transformed completely. We are seeing more inquiries and better client engagement with the new site.",
    author: "Lalsingh Rajput",
    role: "Director",
    company: "Future Realty Space",
    rating: 5,
  },
  {
    quote:
      "Professional execution and great attention to detail. The website truly reflects our corporate identity and service standards.",
    author: "Amit Shah",
    role: "Operations Head",
    company: "Aureon India",
    rating: 5,
  },
  {
    quote:
      "An excellent partner for our digital needs. The platform manages our diverse service offerings perfectly.",
    author: "Pradip Mishra",
    role: "Owner",
    company: "Vassu Infotech",
    rating: 5,
  },
  {
    quote:
      "The real estate management system they built has streamlined our property tracking and sales processes significantly.",
    author: "Sales Director",
    role: "Head of Sales",
    company: "Narmada Sales",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-devflow-charcoal relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devflow-green/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block"
          >
            Client Success Stories
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-display text-3xl md:text-5xl font-semibold text-white text-shadow-soft"
          >
            Trusted by{" "}
            <span className="text-devflow-green">Growing Companies</span>
          </motion.h2>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Quote */}
            <div className="relative mb-8 pt-8">
              <svg
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 text-devflow-green/15 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light italic relative z-10">
                "{testimonials[activeIndex].quote}"
              </p>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 border border-devflow-green/20 flex items-center justify-center">
                <span className="text-devflow-green font-semibold text-lg">
                  {testimonials[activeIndex].author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-devflow-gray-400 text-sm">
                  {testimonials[activeIndex].role},{" "}
                  {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-devflow-green w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
