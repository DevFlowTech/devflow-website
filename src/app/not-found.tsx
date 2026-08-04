import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-devflow-black text-white pt-40 pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,230,84,0.04),transparent_50%)] pointer-events-none" />

      <div className="section-container max-w-3xl relative z-10">
        <div className="text-center">
          <p className="text-xs font-mono text-devflow-green uppercase tracking-widest mb-6">
            [ ERROR 404 ]
          </p>

          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-6 bg-gradient-to-r from-white via-white to-devflow-green/70 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">
            Page not found.
          </h2>

          <p className="text-devflow-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or the
            link is broken. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="btn-primary min-w-[200px] inline-flex items-center justify-center">
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn-secondary min-w-[200px] inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Popular routes */}
          <div className="mt-16 pt-10 border-t border-white/[0.06]">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-devflow-gray-500 mb-5">
              Popular pages
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              <Link href="/services" className="text-devflow-gray-300 hover:text-devflow-green transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-devflow-gray-300 hover:text-devflow-green transition-colors">
                Blog
              </Link>
              <Link href="/work" className="text-devflow-gray-300 hover:text-devflow-green transition-colors">
                Case Studies
              </Link>
              <Link href="/knowledge-base" className="text-devflow-gray-300 hover:text-devflow-green transition-colors">
                Knowledge Base
              </Link>
              <Link href="/about" className="text-devflow-gray-300 hover:text-devflow-green transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
