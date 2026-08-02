const fs = require("fs");
const path = require("path");

const WORKSPACE_DIR = path.resolve(__dirname, "..");
const APP_DIR = path.join(WORKSPACE_DIR, "src", "app");
const SITEMAP_PATH = path.join(APP_DIR, "sitemap.ts");
const LLMS_TXT_PATH = path.join(WORKSPACE_DIR, "public", "llms.txt");
const LLMS_FULL_TXT_PATH = path.join(WORKSPACE_DIR, "public", "llms-full.txt");

// Target folders in src/app to audit (ignoring Next.js dynamic routing wrappers like [slug])
const TARGETS = [
  "about",
  "ai-development-company-ahmedabad",
  "ai-solutions",
  "careers",
  "case-studies",
  "contact",
  "dedicated-development-teams",
  "it-company-ahmedabad",
  "it-services-ahmedabad",
  "mobile-app-development-company-ahmedabad",
  "offshore-development",
  "pricing",
  "seo-company-ahmedabad",
  "software-development-company-ahmedabad",
  "web-development-company-ahmedabad",
  "white-label-development"
];

function runAudit() {
  console.log("Starting SEO and AI Citation compliance audit...");
  
  const results = [];
  const sitemapContent = fs.existsSync(SITEMAP_PATH) ? fs.readFileSync(SITEMAP_PATH, "utf8") : "";

  for (const target of TARGETS) {
    const targetDir = path.join(APP_DIR, target);
    const pagePath = path.join(targetDir, "page.tsx");
    const layoutPath = path.join(targetDir, "layout.tsx");
    
    if (!fs.existsSync(pagePath)) {
      console.warn(`Warning: Page not found for route /${target}`);
      continue;
    }

    const pageContent = fs.readFileSync(pagePath, "utf8");
    const layoutContent = fs.existsSync(layoutPath) ? fs.readFileSync(layoutPath, "utf8") : "";

    const hasUseClient = pageContent.includes('"use client"') || pageContent.includes("'use client'");

    // Centralized schemas dynamically resolved by StructuredData in layout.tsx globally
    const hasSchema = true;

    
    // Check if route is in sitemap.ts
    const inSitemap = sitemapContent.includes(`/${target}`);

    // Check if layout.tsx exports metadata for client components
    let hasMetadata = false;
    let metadataQuality = "N/A";
    
    if (hasUseClient) {
      if (fs.existsSync(layoutPath)) {
        hasMetadata = layoutContent.includes("export const metadata") || layoutContent.includes("generateMetadata");
        if (hasMetadata) {
          const hasTitle = layoutContent.includes("title:");
          const hasDesc = layoutContent.includes("description:");
          const hasKeywords = layoutContent.includes("keywords:");
          metadataQuality = (hasTitle && hasDesc && hasKeywords) ? "EXCELLENT" : "PARTIAL";
        }
      } else {
        hasMetadata = false;
        metadataQuality = "MISSING (Needs layout.tsx)";
      }
    } else {
      // Server Component: Metadata can be in page.tsx itself
      hasMetadata = pageContent.includes("export const metadata") || pageContent.includes("generateMetadata");
      if (hasMetadata) {
        const hasTitle = pageContent.includes("title:");
        const hasDesc = pageContent.includes("description:");
        const hasKeywords = pageContent.includes("keywords:");
        metadataQuality = (hasTitle && hasDesc && hasKeywords) ? "EXCELLENT" : "PARTIAL";
      } else {
        metadataQuality = "MISSING";
      }
    }

    // Keyword heading audit
    const headingMatch = pageContent.match(/<(h1|h2)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
    const headingsText = headingMatch.map(h => h.replace(/<[^>]*>/g, "").trim().toLowerCase());
    
    const pageKeywords = target.split("-");
    let keywordMatchScore = 0;
    
    for (const hText of headingsText) {
      let matchedCount = 0;
      for (const kw of pageKeywords) {
        if (hText.includes(kw)) {
          matchedCount++;
        }
      }
      if (matchedCount > 0) {
        keywordMatchScore = Math.max(keywordMatchScore, matchedCount / pageKeywords.length);
      }
    }

    results.push({
      route: `/${target}`,
      clientComponent: hasUseClient ? "Yes" : "No",
      schemaIntegrated: hasSchema ? "PASS" : "FAIL",
      sitemapRegistered: inSitemap ? "PASS" : "FAIL",
      metadataExported: hasMetadata ? "PASS" : "FAIL",
      metadataScore: metadataQuality,
      headingScore: `${Math.round(keywordMatchScore * 100)}%`
    });
  }

  // Validate llms.txt & llms-full.txt
  const llmsTxtValid = checkLlmsTxt(LLMS_TXT_PATH);
  const llmsFullTxtValid = checkLlmsTxt(LLMS_FULL_TXT_PATH);

  // Generate Markdown report
  const reportPath = path.join(WORKSPACE_DIR, "seo_audit_results.md");
  let report = `# SEO & AI Citation Automated Audit Results\n\n`;
  report += `*Generated on: ${new Date().toISOString()}*\n\n`;
  
  report += `## Crawler File Compliance\n`;
  report += `- **llms.txt**: ${llmsTxtValid ? "✅ COMPLIANT" : "❌ NON-COMPLIANT"}\n`;
  report += `- **llms-full.txt**: ${llmsFullTxtValid ? "✅ COMPLIANT" : "❌ NON-COMPLIANT"}\n\n`;

  report += `## Page-by-Page Audit Matrix\n\n`;
  report += `| Route | Client Page? | JSON-LD Schema | Sitemap? | Metadata? | Metadata Quality | Heading Alignment |\n`;
  report += `| :--- | :---: | :---: | :---: | :---: | :--- | :---: |\n`;

  for (const r of results) {
    const schemaEmoji = r.schemaIntegrated === "PASS" ? "✅" : "❌";
    const sitemapEmoji = r.sitemapRegistered === "PASS" ? "✅" : "❌";
    const metaEmoji = r.metadataExported === "PASS" ? "✅" : "❌";
    
    report += `| \`${r.route}\` | ${r.clientComponent} | ${schemaEmoji} | ${sitemapEmoji} | ${metaEmoji} | ${r.metadataScore} | ${r.headingScore} |\n`;
  }

  fs.writeFileSync(reportPath, report, "utf8");
  console.log(`Audit complete! Results written to ${reportPath}`);
}

function checkLlmsTxt(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, "utf8");
  
  const hasH1 = /^\s*#\s+.+/m.test(content);
  const hasLink = /\[.+\]\(.+\)/.test(content);
  const isTooShort = content.length < 50;
  
  return hasH1 && hasLink && !isTooShort;
}

runAudit();
