import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-devflow-charcoal border border-white/[0.06] rounded-xl overflow-hidden hover:border-devflow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-devflow-green/5 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-devflow-dark border-b border-white/[0.06]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-devflow-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-1 bg-devflow-green/10 text-devflow-green text-xs font-medium rounded-full border border-devflow-green/20">
            {post.category}
          </span>
          <span className="text-xs text-devflow-gray-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-devflow-green transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-devflow-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] mt-auto">
          <div className="w-8 h-8 rounded-full bg-devflow-green/10 flex items-center justify-center flex-shrink-0">
            <span className="text-devflow-green font-semibold text-sm">D</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">DevFlow Team</p>
            <p className="text-xs text-devflow-gray-500">{post.date}</p>
          </div>
          <svg
            className="w-5 h-5 text-devflow-gray-500 group-hover:text-devflow-green group-hover:translate-x-1 transition-all duration-300"
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
        </div>
      </div>
    </Link>
  );
}
