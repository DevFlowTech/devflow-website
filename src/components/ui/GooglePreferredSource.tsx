"use client";

import React, { useEffect, useState } from "react";
import { SiGoogle } from "react-icons/si";
import { FiStar, FiExternalLink, FiCheck } from "react-icons/fi";

interface GooglePreferredSourceProps {
  /** Visual variant: 'inline' for metadata bar, 'card' for editorial follow-box, 'badge' for simple badge */
  variant?: "inline" | "card" | "badge";
  /** Color theme for Google's official button ('dark' | 'light') */
  theme?: "dark" | "light";
  /** Optional custom CSS classes */
  className?: string;
}

/**
 * GooglePreferredSource Component
 *
 * Implements Google's official Preferred Sources feature following
 * Google Search Central documentation:
 * https://developers.google.com/search/docs/appearance/preferred-sources
 *
 * Allows readers to select DevFlow Technology (devflow.co.in) as a preferred source
 * in Google Search experiences (Top Stories, AI Overviews, AI Mode).
 */
export default function GooglePreferredSource({
  variant = "inline",
  theme = "dark",
  className = "",
}: GooglePreferredSourceProps) {
  const [isAdded, setIsAdded] = useState(false);
  const fallbackUrl = "https://www.google.com/preferences/source?q=devflow.co.in";

  useEffect(() => {
    // Notify Google Preferred Sources SDK on SPA route change / mount
    if (typeof window !== "undefined") {
      const gWindow = window as unknown as {
        PREFERRED_SOURCE?: Array<(api: { init: () => void; addPreferredSource: () => Promise<unknown> }) => void> | {
          api?: { init: () => void; addPreferredSource: () => Promise<unknown> };
        };
      };

      if (Array.isArray(gWindow.PREFERRED_SOURCE)) {
        gWindow.PREFERRED_SOURCE.push((api) => {
          if (api && typeof api.init === "function") {
            api.init();
          }
        });
      } else if (gWindow.PREFERRED_SOURCE?.api?.init) {
        gWindow.PREFERRED_SOURCE.api.init();
      }
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // Check if Google's Advanced SDK is loaded on window
    const gWindow = window as unknown as {
      PREFERRED_SOURCE?: {
        api?: { addPreferredSource?: () => Promise<{ getStatus: () => number }> };
      };
    };

    if (gWindow.PREFERRED_SOURCE?.api?.addPreferredSource) {
      e.preventDefault();
      gWindow.PREFERRED_SOURCE.api
        .addPreferredSource()
        .then(() => {
          setIsAdded(true);
        })
        .catch(() => {
          // If popup or internal flow encounters any issue, fallback to direct Google URL
          window.open(fallbackUrl, "_blank", "noopener,noreferrer");
        });
    }
    // If SDK is not initialized, default link behavior will open fallbackUrl
  };

  // Google Preferred Source Pill Button
  const renderPillButton = (size: "sm" | "md" = "sm") => {
    const isSmall = size === "sm";

    if (isAdded) {
      return (
        <span
          className={`inline-flex items-center gap-1.5 ${
            isSmall ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
          } font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 transition-all duration-200`}
        >
          <FiCheck className={isSmall ? "w-3.5 h-3.5" : "w-4 h-4"} />
          <span>Added to Preferred Sources</span>
        </span>
      );
    }

    return (
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        title="Add DevFlow Technology as a Preferred Source in Google Search"
        className={`group relative inline-flex items-center gap-2 ${
          isSmall ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
        } font-medium rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "bg-white/[0.06] text-white border border-white/[0.12] hover:bg-white/[0.12] hover:border-devflow-green/50 hover:text-devflow-green shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            : "bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 hover:border-devflow-blue"
        }`}
      >
        {/* Google G Brand Icon */}
        <span className="flex items-center justify-center shrink-0">
          <SiGoogle
            className={`${
              isSmall ? "w-3.5 h-3.5" : "w-4 h-4"
            } text-devflow-green group-hover:scale-110 transition-transform`}
            aria-hidden="true"
          />
        </span>

        <span className="tracking-tight">Add as preferred source</span>

        <FiStar
          className={`${
            isSmall ? "w-3 h-3" : "w-3.5 h-3.5"
          } opacity-60 group-hover:opacity-100 group-hover:text-yellow-400 transition-all`}
          aria-hidden="true"
        />

        {/* Declarative mount hook for Google publisher.js if active */}
        <span
          {...{ "google-add-preferred-source-btn": "", "data-theme": theme }}
          className="hidden"
          aria-hidden="true"
        />
      </a>
    );
  };

  if (variant === "card") {
    return (
      <aside
        aria-label="Google Search Source Preference"
        className={`w-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-devflow-charcoal/80 to-devflow-black p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-devflow-green/30 shadow-lg ${className}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-devflow-green">
              <SiGoogle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Google Search Publication</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
              Follow DevFlow in Google Search
            </h3>
            <p className="text-sm text-devflow-gray-300 leading-relaxed font-light">
              Add DevFlow Technology as a preferred source to receive our latest engineering
              architecture breakdowns, AI breakthroughs, and enterprise software insights directly
              in your Google Search feed and Top Stories.
            </p>
          </div>

          <div className="flex flex-col sm:items-end justify-center gap-2 shrink-0">
            {renderPillButton("md")}
            <span className="text-[11px] text-devflow-gray-400 flex items-center gap-1 font-mono">
              <span>Google Search Preferences</span>
              <FiExternalLink className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </aside>
    );
  }

  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderPillButton("sm")}
      </div>
    );
  }

  // Default 'inline' variant: for article metadata bar
  return (
    <div
      className={`inline-flex items-center gap-2 min-h-[32px] ${className}`}
      aria-label="Google Preferred Source"
    >
      {renderPillButton("sm")}
    </div>
  );
}
