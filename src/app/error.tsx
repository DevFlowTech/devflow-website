"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console for diagnostics without exposing details
    console.error("Application error:", error.message, error.digest ?? "");
  }, [error]);

  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.04),transparent_50%)] pointer-events-none" />

      <div className="section-container max-w-3xl relative z-10">
        <div className="text-center">
          <p className="text-xs font-mono text-devflow-green uppercase tracking-widest mb-6">
            [ ERROR 500 ]
          </p>

          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-6 bg-gradient-to-r from-white via-white to-devflow-green/70 bg-clip-text text-transparent">
            500
          </h1>

          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">
            Something went wrong on our side.
          </h2>

          <p className="text-devflow-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            An unexpected error occurred while rendering this page. The issue has
            been logged — please try again in a moment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="btn-primary min-w-[200px] inline-flex items-center justify-center cursor-pointer"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="btn-secondary min-w-[200px] inline-flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
