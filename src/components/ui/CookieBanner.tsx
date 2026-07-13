"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCheck } from "react-icons/hi";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:bottom-6 md:left-auto md:right-6 md:p-0 md:max-w-md lg:max-w-xl"
                >
                    <div className="bg-devflow-dark/95 border border-white/[0.08] rounded-2xl p-5 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                        {/* Subtle Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-devflow-green/5 via-transparent to-transparent opacity-50" />

                        <div className="relative z-10">
                            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-devflow-green/10 flex items-center justify-center flex-shrink-0 border border-devflow-green/20">
                                    <svg
                                        className="w-5 h-5 md:w-6 md:h-6 text-devflow-green"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
                                        Cookie Settings
                                    </h3>
                                    <div className="max-h-[20vh] overflow-y-auto pr-2 custom-scrollbar md:max-h-none md:overflow-visible md:pr-0">
                                        <p className="text-devflow-gray-300 text-xs md:text-sm leading-relaxed">
                                            This website stores cookies on your computer. These cookies are used to improve your experience and provide more personalized services. To find out more, see our <a href="/privacy" className="text-devflow-green hover:underline">Privacy Policy</a>.
                                            <br /><br className="hidden md:block" />
                                            We won&apos;t track your information, but to comply with your preferences, we&apos;ll use one tiny cookie so you&apos;re not asked again.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 px-5 py-2.5 md:py-3 bg-devflow-green text-devflow-black text-sm md:text-base font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 active:scale-95"
                                >
                                    <HiCheck className="w-4 h-4 md:w-5 md:h-5" />
                                    Accept All
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 px-5 py-2.5 md:py-3 bg-white/[0.03] border border-white/[0.08] text-white text-sm md:text-base font-medium rounded-xl hover:bg-white/[0.06] transition-all flex items-center justify-center gap-2 active:scale-95"
                                >
                                    <HiX className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
