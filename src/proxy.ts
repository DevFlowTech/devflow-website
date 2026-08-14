import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. Strip spam query strings (e.g. ?marketxy.com, ?marketxy) and 301 redirect to clean URL
  if (search && (search.toLowerCase().includes("marketxy") || search.toLowerCase().includes("marketxy.com"))) {
    const cleanUrl = new URL(pathname, request.url);
    return NextResponse.redirect(cleanUrl, { status: 301 });
  }

  // 2. If system files (/robots.txt, /sitemap.xml, /llms.txt) are requested with ANY query string, 301 redirect to clean path
  if ((pathname === "/robots.txt" || pathname === "/sitemap.xml" || pathname === "/llms.txt") && search) {
    const cleanUrl = new URL(pathname, request.url);
    return NextResponse.redirect(cleanUrl, { status: 301 });
  }

  const response = NextResponse.next();

  // 3. Inject HTTP-level Canonical Link header for HTML pages
  if (!pathname.startsWith("/_next") && !pathname.startsWith("/api") && !pathname.match(/\.(png|jpg|jpeg|svg|webp|avif|ico|css|js|woff|woff2)$/)) {
    const siteUrl = "https://www.devflow.co.in";
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;
    response.headers.set("Link", `<${canonicalUrl}>; rel="canonical"`);
  }

  return response;
}

export function middleware(request: NextRequest) {
  return proxy(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static Next.js internal assets (_next/static, favicon.ico)
     */
    "/((?!_next/static|favicon.ico).*)",
  ],
};
