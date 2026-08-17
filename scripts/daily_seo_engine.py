#!/usr/bin/env python3
"""
DevFlow Technology - Autonomous Daily SEO/AEO/GEO Engine
Runs automatically on a daily schedule without paid APIs or external subscriptions.
1. Mines Google's real-time search suggestions across core B2B clusters.
2. Filters for high-intent, non-duplicate keywords.
3. Synthesizes AEO/GEO/SEO-optimized technical articles with Mermaid diagrams & tables.
4. Registers and indexes the article directly in DevFlow's Next.js codebase.
"""

import os
import sys
import argparse
from pathlib import Path

# Add scripts directory to path for imports
SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

from seo_engine.keyword_miner import mine_next_keyword, slugify
from seo_engine.content_synthesizer import generate_article
from seo_engine.codebase_publisher import publish_to_blog_data, publish_to_content_index

def main():
    parser = argparse.ArgumentParser(description="DevFlow Autonomous Daily SEO Engine")
    parser.add_argument("--dry-run", action="store_true", help="Simulate keyword mining and generation without modifying files")
    parser.add_argument("--topic", type=str, default="", help="Custom keyword topic to generate immediately")
    args = parser.parse_args()

    repo_root = SCRIPT_DIR.parent
    blog_data_path = repo_root / "src" / "data" / "blogData.ts"
    content_index_path = repo_root / "src" / "data" / "contentIndex.ts"

    if not blog_data_path.exists() or not content_index_path.exists():
        print(f"Error: Could not locate data files in {repo_root}")
        sys.exit(1)

    print("=" * 60)
    print("🚀 DevFlow Autonomous Daily SEO/AEO/GEO Engine Starting...")
    print("=" * 60)

    # 1. Mine or Pick Keyword
    if args.topic:
        keyword_data = {
            "keyword": args.topic.title(),
            "slug": slugify(args.topic),
            "seed": args.topic.lower()
        }
        print(f"🎯 Target Keyword (Manual): {keyword_data['keyword']}")
    else:
        print("🔍 Mining real-time Google search suggestions (Zero-API)...")
        keyword_data = mine_next_keyword(str(blog_data_path))
        print(f"🎯 Target Keyword (Mined): {keyword_data['keyword']}")
        print(f"🔗 Target Slug: {keyword_data['slug']}")

    # 2. Synthesize Content
    print("\n📝 Synthesizing AEO/GEO/SEO technical article...")
    article = generate_article(keyword_data)
    print(f"📄 Title: {article['title']}")
    print(f"📂 Category: {article['category']}")
    print(f"⏱️ Read Time: {article['readTime']}")
    print(f"🔑 Keywords: {', '.join(article['keywords'][:5])}...")

    # 3. Dry Run Check
    if args.dry_run:
        print("\n" + "=" * 60)
        print("🧪 [DRY RUN] Generated Article Preview:")
        print("=" * 60)
        print(article["content"][:600] + "\n\n... [Content continues] ...")
        print("\nDry run completed successfully. No files were modified.")
        return

    # 4. Codebase Publishing
    print("\n💾 Registering article in DevFlow codebase...")
    success_blog = publish_to_blog_data(str(blog_data_path), article)
    success_index = publish_to_content_index(str(content_index_path), article)

    if success_blog and success_index:
        print("\n" + "=" * 60)
        print(f"🎉 Successfully published: /blog/{article['slug']}")
        print("=" * 60)
    else:
        print("\n⚠️ Publication finished with warnings. Please inspect data files.")
        sys.exit(1)

if __name__ == "__main__":
    main()
