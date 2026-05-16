import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const WhyMe = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="why-me"
      className="relative w-full px-6 sm:px-16 md:px-24 lg:px-30 mx-auto py-24 bg-[#181b29] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-2/6 h-2/6 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Section Header */}
        <div className="mb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="italic text-sm text-[#00e5ff]">04</span>
            <span className="h-px w-8 bg-[#00e5ff]" />
            <span className="text-[#00e5ff] font-tech tracking-[0.3em] text-xs uppercase">
              Capability Report
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Why Partner With Me<span className="text-[#00e5ff]">?</span>
          </motion.h2>
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
      {/* Transition to Process */}
      <div className="flex flex-col items-center justify-center mt-20 pb-10">
        {/* The "Glow" line connecting the sections */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true }}
          className="w-px bg-linear-to-b from-[#00e5ff] to-transparent mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 font-tech text-[10px] tracking-[0.3em] mb-6 uppercase">
            Next Phase
          </p>

          <Link
            to="process"
            smooth={true}
            offset={-50}
            duration={800}
            className="group relative px-8 py-4 flex items-center gap-4 cursor-pointer"
          >
            {/* Button Background with Hover Effect */}
            <div className="absolute inset-0 bg-white/2 border border-white/10 rounded-full group-hover:border-[#00e5ff]/50 group-hover:bg-[#00e5ff]/5 transition-all duration-500" />

            <span className="relative font-tech text-sm text-white tracking-widest group-hover:text-[#00e5ff] transition-colors">
              SEE_MY_WORKFLOW
            </span>

            <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#00e5ff] transition-all duration-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-white group-hover:text-black transition-colors"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
