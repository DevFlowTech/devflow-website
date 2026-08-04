import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogData";
import { blogCategories, getCategoryBySlug } from "@/data/blogCategories";
import BlogCard from "@/components/blog/BlogCard";
import { buildSeoTitle } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: {
        absolute: "Category Not Found | DevFlow Blog",
      },
    };
  }

  return {
    title: {
      absolute: buildSeoTitle(`${category.name} Articles`, " | DevFlow Blog"),
    },
    description: category.description,
    alternates: {
      canonical: `https://www.devflow.co.in/blog/category/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} Articles | DevFlow Blog`,
      description: category.description,
      type: "website",
      url: `https://www.devflow.co.in/blog/category/${category.slug}`,
      siteName: "DevFlow Technology",
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = blogPosts.filter((post) => post.category === category.name);
  const otherCategories = blogCategories.filter((c) => c.slug !== slug);

  return (
    <main className="min-h-screen bg-devflow-black pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="section-container mb-8">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-devflow-gray-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-devflow-green">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Hero */}
      <section className="section-container mb-14">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm font-medium text-devflow-green uppercase tracking-widest mb-4 block">
            Topic Cluster
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {category.name} Articles
          </h1>
          <p className="text-lg md:text-xl text-devflow-gray-300 leading-relaxed max-w-3xl">
            {category.description}
          </p>
          <p className="mt-6 text-sm font-mono text-devflow-gray-500">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in this
            topic
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-devflow-gray-400">
              No articles published in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Other Categories - cross-links the topic cluster hubs */}
      <section className="section-container mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Explore Other Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="group block bg-devflow-charcoal border border-white/[0.06] rounded-xl p-6 hover:border-devflow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-devflow-green/5"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-devflow-green transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-devflow-gray-400 line-clamp-3 leading-relaxed">
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-devflow-green uppercase tracking-widest">
                  View Articles
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
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
            Let&apos;s discuss how we can help transform your business with
            tailored technology solutions.
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
