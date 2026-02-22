import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogData";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title:
    "Tech Blog - Latest Insights on AI, Web Development & Software Engineering | DevFlow",
  description:
    "Explore expert insights on AI integration, web development, custom software, and digital transformation. Stay updated with the latest tech trends and best practices.",
  keywords: [
    "tech blog",
    "AI integration",
    "web development",
    "software engineering",
    "digital transformation",
    "custom software development",
    "Next.js tutorials",
    "React best practices",
    "enterprise software",
    "DevFlow blog",
  ],
  openGraph: {
    title: "DevFlow Tech Blog - Expert Insights & Industry Trends",
    description:
      "Stay ahead with expert articles on AI, web development, and software engineering from DevFlow Technology.",
    type: "website",
    url: "https://devflow.co.in/blog",
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-devflow-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-container mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block">
            DevFlow Tech Blog
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Insights on Building Better Software
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 leading-relaxed">
            Expert perspectives on AI integration, web development, and digital
            transformation from the DevFlow team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-container mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-devflow-green animate-pulse" />
              Featured Article
            </h2>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-devflow-charcoal border border-white/[0.06] rounded-2xl overflow-hidden hover:border-devflow-green/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden bg-devflow-dark">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-devflow-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-devflow-green/10 text-devflow-green text-xs font-medium rounded-full border border-devflow-green/20">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-devflow-gray-500">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-devflow-green transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-devflow-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-devflow-green/10 flex items-center justify-center">
                      <span className="text-devflow-green font-semibold">
                        D
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">DevFlow Team</p>
                      <p className="text-sm text-devflow-gray-500">
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container mt-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-devflow-green/10 to-transparent border border-devflow-green/20 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom Software Solutions?
          </h2>
          <p className="text-devflow-gray-300 mb-8">
            Let's discuss how we can help transform your business with tailored
            technology solutions.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-devflow-green text-devflow-black font-semibold rounded-lg hover:bg-devflow-green/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
