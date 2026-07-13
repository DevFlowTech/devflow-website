"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

// Use environment variable with fallback to empty string
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
}

export default function ReCaptcha({ onChange }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (token: string | null) => {
    onChange(token);
  };

  const handleExpired = () => {
    onChange(null);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  // If no site key is configured, show a graceful fallback notice
  if (!RECAPTCHA_SITE_KEY) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-4 rounded-xl border border-white/[0.06] bg-devflow-dark"
      >
        <p className="text-xs font-mono text-devflow-gray-500">
          [ RECAPTCHA NOT CONFIGURED ]
        </p>
        <p className="text-[10px] text-devflow-gray-600 mt-1">
          Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.local
        </p>
      </motion.div>
    );
  }

  if (!loaded) {
    return (
      <div className="h-[78px] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-devflow-green/30 border-t-devflow-green rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center"
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={handleChange}
        onExpired={handleExpired}
        onErrored={() => setError(true)}
        theme="dark"
        size="normal"
      />
      {error && (
        <p className="text-xs text-red-400 mt-2 font-mono">
          [ ! ] reCAPTCHA failed to load. Please refresh.
        </p>
      )}
    </motion.div>
  );
}
