import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | DevFlow Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["DevFlow Team"],
      url: `https://devflow.co.in/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-devflow-black pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="section-container mb-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-devflow-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-devflow-gray-500">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="section-container mb-16">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 bg-devflow-green/10 text-devflow-green text-sm font-medium rounded-full border border-devflow-green/20">
              {post.category}
            </span>
            <span className="text-devflow-gray-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 pb-8 border-b border-white/[0.06] mb-8">
            <div className="w-12 h-12 rounded-full bg-devflow-green/10 flex items-center justify-center">
              <span className="text-devflow-green font-semibold text-lg">
                D
              </span>
            </div>
            <div>
              <p className="text-white font-medium">DevFlow Team</p>
              <p className="text-sm text-devflow-gray-500">{post.date}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-white/[0.06]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-devflow-green/80 bg-clip-text text-transparent mt-16 mb-8 leading-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-14 mb-6 pb-3 border-b border-devflow-green/20 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-devflow-green to-devflow-green/50 rounded-full" />
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mt-10 mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-devflow-green animate-pulse" />
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-devflow-gray-300 leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-devflow-gray-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-6 text-devflow-gray-300">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-devflow-gray-300">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                code: ({ children }) => (
                  <code className="px-2 py-1 bg-devflow-charcoal text-devflow-green rounded text-sm font-mono border border-white/[0.06]">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-devflow-charcoal p-6 rounded-xl overflow-x-auto mb-6 border border-white/[0.06]">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-devflow-green pl-6 py-2 my-6 italic text-devflow-gray-400">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Keywords/Tags */}
          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <h3 className="text-sm font-medium text-devflow-gray-500 mb-4">
              TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1.5 bg-white/[0.02] text-devflow-gray-400 text-sm rounded-lg border border-white/[0.06] hover:border-devflow-green/30 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-container mb-16">
        <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-devflow-green/10 to-transparent border border-devflow-green/20 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Expert Help with Your Project?
          </h2>
          <p className="text-devflow-gray-300 mb-6 max-w-2xl mx-auto">
            Our team specializes in custom software development, AI integration,
            and digital transformation. Let's discuss your requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-devflow-green text-devflow-black font-semibold rounded-lg hover:bg-devflow-green/90 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-devflow-charcoal border border-white/[0.06] rounded-xl overflow-hidden hover:border-devflow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-devflow-green/5"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-devflow-dark border-b border-white/[0.06]">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-devflow-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-devflow-green transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-devflow-gray-400 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-devflow-gray-500">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
