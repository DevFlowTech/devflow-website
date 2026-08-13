import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiLinkedin, FiGithub, FiCode, FiLayers, FiShield, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Founders & Leadership | DevFlow Technology",
  description: "Meet the engineering leadership behind DevFlow Technology — Prince Gajjar (Founder & CEO) and Bhavin Rajput (Co-Founder & CTO).",
  alternates: {
    canonical: "https://www.devflow.co.in/about/founders",
  },
};

export default function FoundersPage() {
  const founders = [
    {
      name: "Prince Gajjar",
      role: "Founder & Chief Executive Officer",
      bio: "Software architect and CEO leading enterprise engineering, product strategy, and AI systems implementation for international clients.",
      linkedin: "https://www.linkedin.com/in/prince-gajjar/",
      github: "https://github.com/princegajjar",
      portfolio: "https://prince.devflow.co.in/",
      expertise: ["AI Systems Architecture", "Product Strategy", "Enterprise SaaS", "Engineering Delivery"],
    },
    {
      name: "Bhavin Rajput",
      role: "Co-Founder & Chief Technology Officer",
      bio: "Senior technical architect specializing in high-throughput backends, database scaling, cloud infrastructure, and security compliance.",
      linkedin: "https://www.linkedin.com/in/bhavin-rajput/",
      github: "https://github.com/bhavinrajput",
      portfolio: "https://rajputbhavin.engineer/",
      expertise: ["Distributed Systems", "Database Optimization", "Cloud Infrastructure (AWS/GCP)", "Security & Compliance"],
    },
  ];

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-20 overflow-hidden">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": founders.map((f) => ({
              "@type": "Person",
              "name": f.name,
              "jobTitle": f.role,
              "worksFor": {
                "@type": "Organization",
                "name": "DevFlow Technology",
                "url": "https://www.devflow.co.in"
              },
              "sameAs": [f.linkedin, f.github, f.portfolio]
            }))
          })
        }}
      />

      <div className="section-container max-w-5xl mx-auto space-y-16 relative z-10">
        <nav className="text-xs font-mono text-devflow-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <span>/</span>
          <span className="text-devflow-green font-semibold">FOUNDERS</span>
        </nav>

        <div className="space-y-4">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ LEADERSHIP & ENTITY AUTHORITY ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            Engineers Leading Engineering.
          </h1>
          <p className="text-lg text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            DevFlow is led directly by technical founders. When you partner with DevFlow, you work with experienced architects who design systems, inspect code, and own delivery outcomes.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="p-8 rounded-2xl glass-panel border border-white/[0.06] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-devflow-green/10 border border-devflow-green/30 flex items-center justify-center font-display font-bold text-2xl text-devflow-green">
                    {founder.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-medium text-white">{founder.name}</h2>
                    <span className="text-xs font-mono text-devflow-green block">{founder.role}</span>
                  </div>
                </div>

                <p className="text-sm text-devflow-gray-300 leading-relaxed font-light">
                  {founder.bio}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-devflow-gray-400 block">
                    Core Technical Domains
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-devflow-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-4 text-xs font-mono text-devflow-gray-400">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-devflow-green transition-colors"
                >
                  <FiLinkedin className="w-4 h-4 text-devflow-green" /> LinkedIn
                </a>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-devflow-green transition-colors"
                >
                  <FiGithub className="w-4 h-4 text-devflow-green" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-devflow-green/10 to-transparent border border-devflow-green/20 text-center space-y-4">
          <h3 className="text-2xl font-display font-medium text-white">Direct Founder Involvement</h3>
          <p className="text-xs text-devflow-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Every major project at DevFlow has direct founder oversight on database architecture, security boundaries, and release verification.
          </p>
          <Link href="/contact" className="btn-primary inline-block min-w-[200px]">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
