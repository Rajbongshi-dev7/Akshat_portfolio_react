import React from "react";
import { motion } from "framer-motion";

const WhyMe = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="why-me"
      className="relative py-24 bg-[#181b29] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] font-tech tracking-[0.2em] text-sm uppercase">
              Capability Report
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Partner With Me<span className="text-[#00e5ff]">?</span>
          </h2>
        </div>

        {/* The 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Performance Engineering */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative p-8 rounded-4xl border border-white/5 bg-white/2 backdrop-blur-xl hover:border-[#00e5ff]/30 transition-all duration-500"
          >
            <div className="text-[#00e5ff] font-tech text-xs mb-6 tracking-widest">
              /01_PERFORMANCE
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              High-Velocity Engineering
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I don't just build UI; I optimize for{" "}
              <span className="text-gray-200">Core Web Vitals</span>. Whether
              using Vanilla JS or React, I implement code-splitting and
              asset-compression to maintain{" "}
              <span className="text-[#00e5ff]">95+ Lighthouse scores</span> and
              sub-second load times.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Optimization", "SEO", "WebVitals"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pillar 2: Responsive Precision */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative p-8 rounded-4xl border border-white/5 bg-white/2 backdrop-blur-xl hover:border-[#00e5ff]/30 transition-all duration-500"
          >
            <div className="text-[#00e5ff] font-tech text-xs mb-6 tracking-widest">
              /02_ADAPTIVE
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pixel-Perfect Adaptation
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mastery of{" "}
              <span className="text-gray-200">
                Tailwind CSS and Modern Layouts
              </span>
              . I ensure your brand remains consistent across every viewport,
              eliminating layout shifts and horizontal overflow bugs for a
              flawless mobile-first experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Tailwind", "Mobile-First", "UI/UX"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pillar 3: Scalable React Architecture */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative p-8 rounded-4xl border border-white/5 bg-white/2 backdrop-blur-xl hover:border-[#00e5ff]/30 transition-all duration-500"
          >
            <div className="text-[#00e5ff] font-tech text-xs mb-6 tracking-widest">
              /03_SCALABILITY
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Component-Driven Logic
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I architect{" "}
              <span className="text-gray-200">Scalable React Applications</span>
              . By focusing on reusable component patterns, efficient state
              management, and clean hooks, I build codebases that are easy to
              test, maintain, and expand.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React.js", "CleanCode", "Architecture"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* THE SECRET SAUCE: Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto rounded-xl bg-black/40 border border-white/5 p-6 font-tech text-sm overflow-hidden"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-gray-500 mb-2">
            # Initializing deployment script...
          </div>
          <div className="flex gap-2 mb-2">
            <span className="text-[#00e5ff]">root@akshat:~$</span>
            <span className="text-white">
              ./deliver_results.sh --quality=max --speed=ultra
            </span>
          </div>
          <div className="text-green-400/80 mb-2">
            &gt; Performance Optimized [OK]
          </div>
          <div className="text-green-400/80 mb-4">
            &gt; Responsive Architecture Verified [OK]
          </div>
          <div className="text-white font-bold animate-pulse">
            "I don't just build websites; I engineer digital assets that work
            for your business 24/7."
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
