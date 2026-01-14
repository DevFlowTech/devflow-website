"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVentures",
    image: null, // Replace with actual image
    content: "DevFlow transformed our digital presence completely. Their attention to detail and performance optimization resulted in a 40% increase in user engagement and significantly faster page loads.",
    rating: 5,
    metric: { value: "40%", label: "Engagement Increase" },
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Founder",
    company: "Innovate Labs",
    image: null,
    content: "Working with DevFlow was exceptional. They didn't just build a website – they engineered a complete digital experience that perfectly aligned with our brand vision and business goals.",
    rating: 5,
    metric: { value: "3x", label: "Conversion Rate" },
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Product",
    company: "CloudScale",
    image: null,
    content: "The technical expertise DevFlow brought to our project was outstanding. They solved complex challenges and delivered a scalable solution that handles millions of users effortlessly.",
    rating: 5,
    metric: { value: "10M+", label: "Users Served" },
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "NextGen AI",
    image: null,
    content: "DevFlow's approach to web engineering is truly next-level. Their focus on performance and user experience helped us launch a product that exceeded all our expectations.",
    rating: 5,
    metric: { value: "99.9%", label: "Uptime" },
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className={`w-4 h-4 ${i < rating ? "text-devflow-green" : "text-devflow-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        scale: isActive ? 1 : 0.9,
        filter: isActive ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${isActive ? "z-20" : "z-10"}`}
    >
      <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-devflow-charcoal via-devflow-charcoal to-devflow-dark border border-white/[0.06] overflow-hidden">
        {/* Quote decoration */}
        <div className="absolute top-6 right-8 text-[120px] font-serif text-devflow-green/5 leading-none select-none pointer-events-none">
          "
        </div>

        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-devflow-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Content */}
        <div className="relative z-10">
          {/* Rating */}
          <div className="mb-6">
            <StarRating rating={testimonial.rating} />
          </div>

          {/* Quote */}
          <blockquote className="text-lg lg:text-xl text-devflow-gray-100 leading-relaxed mb-8">
            "{testimonial.content}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 border border-devflow-green/20 flex items-center justify-center">
                <span className="text-lg font-bold text-devflow-green">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-devflow-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>

            {/* Metric badge */}
            <div className="hidden sm:block px-4 py-2 rounded-xl bg-devflow-green/10 border border-devflow-green/20">
              <p className="text-lg font-bold text-devflow-green">{testimonial.metric.value}</p>
              <p className="text-xs text-devflow-gray-400">{testimonial.metric.label}</p>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-devflow-green/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-devflow-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-devflow-green/3 rounded-full blur-[200px]" />

      <div className="relative section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-devflow-green mb-4"
          >
            <span className="w-8 h-px bg-devflow-green" />
            CLIENT SUCCESS STORIES
            <span className="w-8 h-px bg-devflow-green" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display-md lg:text-display-lg text-white mb-6"
          >
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-devflow-green">industry leaders</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-devflow-green/10 -z-0 origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* Testimonials carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[activeIndex].id}
              testimonial={testimonials[activeIndex]}
              isActive={true}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Prev button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-white/[0.1] bg-devflow-charcoal/50 flex items-center justify-center text-devflow-gray-300 hover:text-devflow-green hover:border-devflow-green/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative w-3 h-3 rounded-full"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-devflow-gray-600"
                    animate={{
                      backgroundColor: index === activeIndex ? "#bae654" : "rgb(75, 85, 99)",
                      scale: index === activeIndex ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-devflow-green"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ opacity: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-white/[0.1] bg-devflow-charcoal/50 flex items-center justify-center text-devflow-gray-300 hover:text-devflow-green hover:border-devflow-green/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: "🏆", label: "Award Winning" },
            { icon: "⭐", label: "5.0 Rating" },
            { icon: "🔒", label: "100% Secure" },
            { icon: "🚀", label: "Fast Delivery" },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.04] hover:border-devflow-green/20 transition-all duration-300"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium text-devflow-gray-300">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
