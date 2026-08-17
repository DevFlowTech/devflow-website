"""
DevFlow SEO Engine - Keyword Miner
Mines real-time search queries and suggestions from Google's public Suggest protocol
without requiring any paid APIs or API keys.
"""

import urllib.request
import urllib.parse
import json
import re
from typing import List, Dict, Set

SEED_TOPICS = [
    # Cluster 1: AI & Automation
    "generative ai enterprise implementation",
    "autonomous ai agents for business",
    "rag vs fine tuning enterprise",
    "custom llm workflow automation",
    "ai agents vs chatbots",
    "enterprise prompt engineering",
    "local llm deployment architecture",
    
    # Cluster 2: Custom ERP & Software Engineering
    "custom erp vs sap oracle",
    "legacy application modernization nextjs",
    "custom crm system development",
    "microservices architecture nodejs",
    "serverless architecture vs microservices",
    "zero seat licensing enterprise software",
    
    # Cluster 3: Cloud, FinOps & DevOps
    "cloud cost optimization finops strategies",
    "aws migration services for growing business",
    "cut aws database bill optimization",
    "kubernetes container security enterprise",
    "postgresql query performance optimization",
    "zero downtime deployment nextjs",
    
    # Cluster 4: Dedicated Teams & Offshore Development
    "dedicated development team vs in house",
    "hire software developers in ahmedabad",
    "offshore engineering team benefits",
    "software development outsourcing best practices",
    "fixed price vs dedicated team contract",
    
    # Cluster 5: Security & Compliance
    "hipaa compliant cloud database architecture",
    "owasp top 10 api security nextjs",
    "database encryption at rest postgresql",
    "zero trust security web application",
    "it disaster recovery sla targets"
]

HIGH_INTENT_MODIFIERS = [
    "best practices",
    "architecture guide",
    "implementation steps",
    "comparison",
    "cost breakdown",
    "how to build",
    "enterprise guide 2026"
]

def fetch_google_suggestions(query: str) -> List[str]:
    """Fetch search suggestions from Google public suggest endpoint (No API key needed)."""
    try:
        url = f"https://suggestqueries.google.com/complete/search?client=firefox&q={urllib.parse.quote(query)}"
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        )
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode("utf-8"))
            if len(data) > 1 and isinstance(data[1], list):
                return [s.strip() for s in data[1] if len(s.strip()) > 5]
    except Exception as e:
        pass
    return []

def get_existing_slugs(blog_data_path: str) -> Set[str]:
    """Extract existing slugs from blogData.ts to ensure 100% deduplication."""
    existing_slugs = set()
    try:
        with open(blog_data_path, "r", encoding="utf-8") as f:
            content = f.read()
            matches = re.findall(r'slug:\s*["\']([^"\']+)["\']', content)
            existing_slugs = set(matches)
    except Exception as e:
        print(f"Warning reading existing slugs: {e}")
    return existing_slugs

def slugify(text: str) -> str:
    """Generate clean URL slug from title/keyword."""
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")

def mine_next_keyword(blog_data_path: str) -> Dict[str, str]:
    """
    Mines real-time keywords, filters for high B2B intent, and returns
    the next best candidate that has not been published yet.
    """
    existing_slugs = get_existing_slugs(blog_data_path)
    candidates = []

    # 1. Gather suggestions from seed topics
    for topic in SEED_TOPICS:
        slug = slugify(topic)
        if slug not in existing_slugs:
            candidates.append({"keyword": topic.title(), "slug": slug, "seed": topic})
            
        suggestions = fetch_google_suggestions(topic)
        for s in suggestions:
            s_slug = slugify(s)
            if s_slug not in existing_slugs and len(s) > 10:
                candidates.append({"keyword": s.title(), "slug": s_slug, "seed": topic})

    # 2. Add modifier permutations if needed
    if not candidates:
        for topic in SEED_TOPICS[:10]:
            for mod in HIGH_INTENT_MODIFIERS:
                combo = f"{topic} {mod}"
                combo_slug = slugify(combo)
                if combo_slug not in existing_slugs:
                    candidates.append({"keyword": combo.title(), "slug": combo_slug, "seed": topic})

    # Pick the best candidate
    if candidates:
        # Prioritize keywords with high-intent terms
        for cand in candidates:
            kw_lower = cand["keyword"].lower()
            if any(k in kw_lower for k in ["enterprise", "vs", "implementation", "cost", "architecture", "guide"]):
                return cand
        return candidates[0]

    # Fallback
    fallback_kw = f"Enterprise Software Modernization Strategy {len(existing_slugs) + 1}"
    return {
        "keyword": fallback_kw,
        "slug": slugify(fallback_kw),
        "seed": "software engineering"
    }

if __name__ == "__main__":
    result = mine_next_keyword("../../src/data/blogData.ts")
    print(f"Mined Keyword: {result['keyword']}")
    print(f"Slug: {result['slug']}")
