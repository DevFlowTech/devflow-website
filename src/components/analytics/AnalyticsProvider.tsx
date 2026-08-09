"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

type Consent = "accepted" | "declined" | null;

/**
 * Subscribe to the `cookie-consent` CustomEvent dispatched by CookieBanner and
 * read the current localStorage value on every change.  useSyncExternalStore is
 * the React-authorized way to sync an external store with SSR support:
 * - Server snapshot → null (no analytics on server).
 * - Client snapshot → reads localStorage; re-reads when the banner fires.
 */
function useCookieConsent(): Consent {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("cookie-consent", onStoreChange);
      return () => window.removeEventListener("cookie-consent", onStoreChange);
    },
    () => (window.localStorage.getItem("cookie-consent") as Consent) ?? null,
    () => null,
  );
}

/**
 * Consent-gated analytics provider.
 *
 * Third-party tracking (Ahrefs, GA, Clarity, GTM) is only mounted once the
 * visitor explicitly accepts cookies.  The CookieBanner writes the choice to
 * localStorage and dispatches a `cookie-consent` CustomEvent; this component
 * subscribes via useSyncExternalStore so scripts load immediately on accept
 * and are dropped on decline with no page reload required.
 */
export default function AnalyticsProvider() {
  const consent = useCookieConsent();

  if (consent !== "accepted") return null;

  return (
    <>
      {/* Ahrefs Analytics */}
      <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="owsL0mOYqqNQ4Dc5F3yHRg"
        async
      />

      {/* Google Analytics (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1893RGH1FW"
        strategy="lazyOnload"
      />
      {/* Config is externalized so it can run under a strict CSP */}
      <Script src="/ga-config.js" strategy="lazyOnload" />

      {/* Microsoft Clarity (externalized for strict CSP) */}
      <Script src="/clarity-script.js" strategy="lazyOnload" />

      {/* Google Tag Manager (externalized for strict CSP) */}
      <Script src="/gtm-script.js" strategy="lazyOnload" />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PKQSRRN2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
