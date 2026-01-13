"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const workShowcase = [
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    category: "Enterprise Application",
    description: "Real-time data visualization platform with sub-100ms response times",
    metrics: { performance: "99", accessibility: "100", seo: "98" },
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "B2C Web Application",
    description: "High-conversion shopping experience with 40% faster checkout",
    metrics: { performance: "97", accessibility: "98", seo: "100" },
  },
  {
    id: "saas",
    title: "SaaS Product Suite",
    category: "Product Development",
    description: "Component-driven design system serving 50+ micro-frontends",
    metrics: { performance: "98", accessibility: "100", seo: "95" },
  },
];

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative py-32 bg-devflow-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-devflow-green/3 rounded-full blur-[200px]" />

      <div className="relative section-container">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-devflow-green mb-4"
            >
              <span className="w-8 h-px bg-devflow-green" />
              PROOF OF EXPERTISE
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-md lg:text-display-lg text-white mb-6"
            >
              The craft
              <br />
              <span className="text-devflow-gray-300">speaks for itself</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-devflow-gray-300"
            >
              Performance-oriented systems built with precision engineering.
              Every project reflects our commitment to excellence.
            </motion.p>
          </div>

          {/* Lighthouse scores legend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-devflow-green" />
              <span className="text-devflow-gray-300">Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-devflow-gray-300">Accessibility</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <span className="text-devflow-gray-300">SEO</span>
            </div>
          </motion.div>
        </div>

        {/* Work showcase grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {workShowcase.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col">
                {/* Project visual - cleaner gradient placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-devflow-dark via-devflow-charcoal to-devflow-dark">
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 grid-lines opacity-20" />
                    
                    {/* Abstract visual elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-devflow-green/20 to-devflow-green/5 border border-devflow-green/20"
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 0.5, scale: 1.2 } : {}}
                          transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                          className="absolute inset-0 rounded-2xl bg-devflow-green/10 blur-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-devflow-green/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-devflow-green/20 rounded-tl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-devflow-green/20 rounded-br-lg" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-devflow-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project info */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[11px] font-semibold text-devflow-green uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-devflow-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-devflow-gray-400 mb-5 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Lighthouse scores */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="relative w-9 h-9">
                        <svg className="w-9 h-9 -rotate-90">
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="2.5"
                          />
                          <motion.circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="#bae654"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: "0 88" }}
                            animate={
                              isInView
                                ? {
                                    strokeDasharray: `${
                                      parseInt(project.metrics.performance) * 0.88
                                    } 88`,
                                  }
                                : {}
                            }
                            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-devflow-green">
                          {project.metrics.performance}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="relative w-9 h-9">
                        <svg className="w-9 h-9 -rotate-90">
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="2.5"
                          />
                          <motion.circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="#60A5FA"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: "0 88" }}
                            animate={
                              isInView
                                ? {
                                    strokeDasharray: `${
                                      parseInt(project.metrics.accessibility) * 0.88
                                    } 88`,
                                  }
                                : {}
                            }
                            transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-blue-400">
                          {project.metrics.accessibility}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="relative w-9 h-9">
                        <svg className="w-9 h-9 -rotate-90">
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="2.5"
                          />
                          <motion.circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="none"
                            stroke="#A78BFA"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: "0 88" }}
                            animate={
                              isInView
                                ? {
                                    strokeDasharray: `${
                                      parseInt(project.metrics.seo) * 0.88
                                    } 88`,
                                  }
                                : {}
                            }
                            transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-purple-400">
                          {project.metrics.seo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              Built with modern technology
            </h3>
            <p className="text-sm text-devflow-gray-400">
              Enterprise-grade stack for production-ready applications
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { 
                name: "Next.js", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                )
              },
              { 
                name: "React", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                )
              },
              { 
                name: "TypeScript", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                )
              },
              { 
                name: "Tailwind", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                )
              },
              { 
                name: "Framer", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
                  </svg>
                )
              },
              { 
                name: "Vercel", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                )
              },
              { 
                name: "PostgreSQL", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4643a9.8753 9.8753 0 0 0-1.2839-.0906c-1.6188-.0476-3.0142.2873-4.1873.998-.1633-.0742-.34-.1522-.5765-.2453-.5765-.2266-1.6014-.6084-2.7894-.5765-1.8398.0476-3.2536.7178-4.0001 1.8916C.0932 4.6237-.299 7.7959.2852 11.3066c.2356 1.4152.6558 2.8619 1.2481 4.3028.4196 1.0205.8545 1.7969 1.3608 2.4358.7278.9182 1.4051 1.2853 2.0464 1.1185.4623-.1204.8169-.4847 1.0923-.8726.1572.0535.3169.0991.4789.1374.619.1461 1.2038.184 1.7373.189.1881.0018.3801-.0038.5765-.0148.0329.1084.0717.2162.1222.3217.4236.8836 1.0923 1.3608 2.0037 1.4397.1646.0143.3362.0186.5138.0129 1.0579-.0344 2.219-.4324 3.2536-1.1185.0412.0158.0835.0294.1269.0409.5765.1531 1.1961.1259 1.8017-.0763.571-.1907 1.1116-.5031 1.5859-.9166.1113.0914.2357.1747.3727.2491.853.4631 1.901.5765 2.9538.3217 1.1148-.2697 1.9262-.8378 2.3555-1.6468.0996-.1877.1531-.3611.1605-.5195.0072-.1549-.0341-.2929-.1031-.4027zM2.8636 10.1329c-.5765-3.462-.1531-6.261.5765-7.178.3361-.4226 1.1961-1.0574 3.0411-.9604 1.1961.0629 2.1185.4226 2.5256.6054a8.2946 8.2946 0 0 0-.4643.3361c-1.6188 1.2583-2.4617 3.1605-2.6013 5.8314-.1531 2.9078.3628 4.9089 1.5389 5.9773-.2322.0677-.4681.1416-.7074.2207-.2887.0953-.5765.1984-.8608.3101-.7278-1.4329-1.1719-2.913-1.4137-4.3549l-.0346-.0657zm10.9819 9.241c-.1531 0-.3024-.0129-.4476-.0423-.5765-.1157-1.0205-.4226-1.3608-.9604-.0148-.0231-.0278-.047-.0394-.0717.3361-1.1185.5053-2.4358.5053-3.9539 0-.2887-.0077-.5765-.0231-.8608a15.8285 15.8285 0 0 1-.0148-1.0574c0-.5765.0423-1.1185.1269-1.6196a.5765.5765 0 0 0-.1717-.5195.5765.5765 0 0 0-.5342-.1269c-.7618.1717-1.5427.5765-2.3173 1.1961-.1531.1222-.3024.2513-.4476.3873.2-.5765.4347-1.1185.7037-1.6196.6054-1.1185 1.3461-1.9559 2.2116-2.4941.8608-.5382 1.8017-.8072 2.8018-.8072.1717 0 .3434.0077.5195.0231 1.0574.0953 1.9559.4789 2.6945 1.1529.0677.0618.1347.1269.2009.1946.0347.0353.069.0714.1031.108-1.5614.3436-2.6945 1.2583-3.4143 2.757-.8608 1.7756-1.0574 3.8018-.6054 6.0197-.7618.8876-1.5918 1.4995-2.3896 1.5389-.0677.0035-.1347.0046-.2009.0035zm8.0469-.8169c-.2697.0677-.5382.098-.8072.098-.9027 0-1.6533-.2888-2.2116-.8653a.5765.5765 0 0 0-.8072.0765.5765.5765 0 0 0 .0765.8072c.3785.3938.8169.698 1.2998.9166-.6054.3785-1.2998.5765-2.0464.5765-.3361 0-.6685-.0423-.9981-.1269-.1723-.0443-.3396-.1026-.5009-.1746.0731-.1312.1415-.2677.2055-.4096.3024-.6745.5036-1.4212.6054-2.2226.1531-1.1961.0629-2.4358-.2697-3.6949-.3361-1.2773-.9181-2.3555-1.7304-3.217-.2697-.2887-.5765-.5574-.9166-.8072.5195-.2009 1.074-.3394 1.6533-.4096.3361-.0409.6685-.0595 1.0027-.0595 1.7746 0 3.3141.6685 4.62 2.0037.8072.8276 1.4769 1.5578 2.0037 2.188 1.0388 1.2425 1.5802 2.1185 1.6275 2.6257.0423.4643-.2009.8995-.7278 1.2998-.8072.6054-1.8017.8723-2.9804.8072-.3361-.0187-.6336-.0595-.8876-.1222-.5765-.1412-.8876-.5195-.9374-.9374-.0677-.5639.2009-1.1961.8072-1.8917.1639-.1877.3589-.3903.5859-.6083a.5765.5765 0 0 0-.6149-.9708 11.2687 11.2687 0 0 0-.7421.5859c-.7278.6054-1.2583 1.2425-1.5802 1.8917-.1846.3748-.28.7278-.2841 1.0574-.0077.6054.2185 1.1185.6685 1.5388.3361.3145.7618.529 1.2583.6685.0677.0189.1366.0352.2067.0495-.0859.3011-.2278.577-.4239.8276-.3024.3785-.7618.6685-1.3608.8608-.4789.1531-.9912.2009-1.5036.1531z"/>
                  </svg>
                )
              },
              { 
                name: "Prisma", 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                    <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7273-.5765 0-1.0818.3891-1.2287.9tried-.2766.8545-.8169 2.5183-1.4329 4.4344-.6162 1.9166-1.2953 4.0224-1.9789 6.1276-.6835 2.1048-1.3719 4.2095-1.9952 6.1247l-.0031.0097c-.0676.2067-.1031.4264-.1031.6533 0 .4716.1627.9295.4597 1.2953.2966.3658.7074.6197 1.1594.7178l7.0653 1.5315c.2287.0496.4595.0744.6907.0744.5953 0 1.1773-.1693 1.6801-.4895.5028-.3198.8874-.7791 1.1121-1.3289l4.5943-11.2969c.1949-.4791.2023-.9866.0209-1.4315zm-6.8388 2.808L9.5855 20.0422c-.2045.0445-.4175-.0185-.5592-.1658-.1421-.1469-.1847-.3618-.1122-.5641l3.0803-9.4667c.0766-.2338.2938-.3891.5389-.3891.0554 0 .1108.0072.1646.0217.2932.0762.4676.3823.3907.6849l-1.6109 6.153c-.0497.19.0046.3926.1414.5288.137.1359.337.1857.5215.1307l2.9552-.8828c.3022-.0905.613.099.7009.425.0879.3263-.0956.6639-.4116.7568z"/>
                  </svg>
                )
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-devflow-green/30 hover:bg-devflow-green/[0.03] transition-all duration-300 cursor-default"
              >
                <div className="text-devflow-gray-400 group-hover:text-devflow-green transition-colors duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-devflow-gray-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
