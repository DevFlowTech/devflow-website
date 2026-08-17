"""
DevFlow SEO Engine - Codebase Publisher
Safely updates blogData.ts and contentIndex.ts to register new articles
for site indexing, search engines, and the internal AI chatbot.
"""

import json
import re
from typing import Dict, Any

def format_ts_blog_post(post: Dict[str, Any]) -> str:
    """Format article dictionary as a clean TypeScript BlogPost object."""
    keywords_json = json.dumps(post["keywords"], indent=6)
    content_escaped = json.dumps(post["content"])
    excerpt_escaped = json.dumps(post["excerpt"])
    title_escaped = json.dumps(post["title"])
    meta_escaped = json.dumps(post["metaDescription"])
    
    return f"""  {{
    slug: "{post['slug']}",
    title: {title_escaped},
    excerpt: {excerpt_escaped},
    category: "{post['category']}",
    date: "{post['date']}",
    readTime: "{post['readTime']}",
    image: "{post['image']}",
    keywords: {keywords_json.strip()},
    metaDescription: {meta_escaped},
    content: {content_escaped},
  }},
"""

def publish_to_blog_data(blog_data_path: str, post: Dict[str, Any]) -> bool:
    """Append the new blog post object to src/data/blogData.ts."""
    try:
        with open(blog_data_path, "r", encoding="utf-8") as f:
            content = f.read()

        if f'slug: "{post["slug"]}"' in content or f"slug: '{post['slug']}'" in content:
            print(f"Skipping blogData.ts: Post with slug '{post['slug']}' already exists.")
            return True

        # Find the closing array bracket
        last_bracket_idx = content.rfind("];")
        if last_bracket_idx == -1:
            print("Error: Could not find closing '];' in blogData.ts")
            return False

        ts_entry = format_ts_blog_post(post)
        new_content = content[:last_bracket_idx] + ts_entry + content[last_bracket_idx:]

        with open(blog_data_path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Successfully published post to blogData.ts: /blog/{post['slug']}")
        return True
    except Exception as e:
        print(f"Error updating blogData.ts: {e}")
        return False

def publish_to_content_index(content_index_path: str, post: Dict[str, Any]) -> bool:
    """Append the new post metadata to src/data/contentIndex.ts."""
    try:
        with open(content_index_path, "r", encoding="utf-8") as f:
            content = f.read()

        entry_id = f"blog/{post['slug']}"
        if f'id: "{entry_id}"' in content:
            print(f"Skipping contentIndex.ts: Entry '{entry_id}' already exists.")
            return True

        # Find closing of siteContent array
        site_content_match = re.search(r"export const siteContent: ContentEntry\[\] = \[(.*?)\n\];", content, re.DOTALL)
        if not site_content_match:
            print("Error: Could not find siteContent array in contentIndex.ts")
            return False

        end_idx = site_content_match.end() - 2 # right before `];`
        
        keywords_json = json.dumps(post["keywords"][:6], indent=6)
        title_escaped = json.dumps(post["title"])
        summary_escaped = json.dumps(post["excerpt"])
        
        index_entry = f"""  {{
    id: "{entry_id}",
    title: {title_escaped},
    type: "blog",
    summary: {summary_escaped},
    keywords: {keywords_json.strip()},
    path: "/blog/{post['slug']}",
    icon: "📝",
  }},
"""
        new_content = content[:end_idx] + index_entry + content[end_idx:]

        with open(content_index_path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Successfully indexed post in contentIndex.ts: {entry_id}")
        return True
    except Exception as e:
        print(f"Error updating contentIndex.ts: {e}")
        return False
