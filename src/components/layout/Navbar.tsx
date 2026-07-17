"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { easeOut } from "@/lib/motion";
import Magnetic from "@/components/ui/Magnetic";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "Work", href: "/work" },
  { label: "Audit", href: "/seo-audit" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-devflow-black/70 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)] after:content-[''] after:absolute after:inset-0 after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] after:pointer-events-none"
          : "bg-transparent"
          }`}
      >
        <nav className="section-container">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/logo.png"
                alt="DevFlow Technology"
                width={56}
                height={56}
                className={`object-contain transition-all duration-300 group-hover:rotate-12 ${
                  isScrolled ? "w-11 h-11" : "w-14 h-14"
                }`}
                priority
              />
              <span className={`font-display font-bold tracking-tight text-devflow-gray-100 group-hover:text-devflow-green transition-all duration-300 ${
                isScrolled ? "text-2xl" : "text-3xl"
              }`}>
                DevFlow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.3,
                    ease: easeOut,
                  }}
                >                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium text-devflow-gray-200 hover:text-devflow-green transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Magnetic>
                  <Link
                    href="/contact"
                    className="relative overflow-hidden group px-5 py-2.5 bg-devflow-green hover:brightness-110 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(2,37,220,0.25)] hover:shadow-[0_0_30px_rgba(2,37,220,0.45)] flex items-center justify-center"
                  >
                    {/* Glare Reflection overlay for liquid glass effect */}
                    <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10">Let&apos;s Talk</span>
                  </Link>
                </Magnetic>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="w-full h-0.5 bg-current rounded-full origin-left"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="w-full h-0.5 bg-current rounded-full origin-left"
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Top Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-devflow-green origin-left z-50 shadow-[0_1px_8px_rgba(204,255,0,0.4)]"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 mobile-menu-backdrop"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm mobile-menu-panel pt-24 px-8"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.05,
                      duration: 0.25,
                      ease: easeOut,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-devflow-gray-200 hover:text-devflow-green transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.25, ease: easeOut }}
                  className="mt-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center py-4 bg-devflow-green text-devflow-black font-semibold rounded-lg"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
