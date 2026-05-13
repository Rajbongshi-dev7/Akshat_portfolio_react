import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SKILLS } from "../JSfiles/skills";

const Icon = {
  react: <FaReact color="#00FFFF" />,
};
// This checks if the screen is mobile (less than 768px)
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const responsiveRadius = isMobile ? 32 : 38; // 28 for mobile, 38 for desktop
const SkillSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      className="w-full px-6 sm:px-16 md:px-24 lg:px-30 mx-auto py-24 bg-[#060810]"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION LABEL */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-serif italic text-sm text-[#00e5ff]">02</span>
            <div className="w-8 h-px bg-[#00e5ff]" />
            <span className="text-xs tracking-[0.3em] font-tech uppercase text-[#00e5ff]">
              The Arsenal
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white font-brand leading-none"
          >
            Tools I wield with
            <br />
            <span className="font-mono italic font-normal text-[#00e5ff]">
              precision
            </span>
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {SKILLS.map((skill, index) => {
            const displayIcon = Icon[skill.icon] || skill.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className={`${skill.wide ? "md:col-span-2" : "md:col-span-1"} group relative overflow-hidden rounded-[22px] border border-white/5 bg-white/3 backdrop-blur-xl p-6 transition-colors hover:bg-white/5`}
              >
                <div
                  className={`flex ${skill.wide ? "flex-row items-center gap-6" : "flex-row items-center md:flex-col md:items-start gap-4"} h-full`}
                >
                  {/* CIRCULAR PROGRESS */}
                  <div className="relative shrink-0">
                    <svg className="w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 -rotate-90 overflow-visible">
                      {/* 1. THE TRACK */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r={responsiveRadius}
                        fill="none"
                        className="stroke-white/5"
                        strokeWidth="4"
                      />

                      {/* 2. THE NEON OUTER GLOW (Should be WIDER) */}
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r={responsiveRadius}
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="8" // Make this wide so the blur spreads out
                        strokeLinecap="round"
                        initial={{ pathLength: 0, strokeDashoffset: 20 }}
                        whileInView={{
                          pathLength: skill.pct / 100,
                          strokeDashoffset: 0,
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                        style={{
                          filter: "blur(6px)",
                          opacity: 0.4,
                        }}
                      />

                      {/* 3. THE NEON CORE (Should be THINNER) */}
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r={responsiveRadius}
                        fill="none"
                        stroke={skill.color}
                        className="stroke-2 md:stroke-2 lg:stroke-8" // Keep the core sharp and thin
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: skill.pct / 100 }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                        style={{
                          vectorEffect: "non-scaling-stroke",
                          filter: `drop-shadow(0 0 5px ${skill.color})`,
                        }}
                      />
                    </svg>

                    {/* ICON BOX */}
                    <div className="absolute inset-2 rounded-full bg-[#03050a]/60 border border-white/5 flex items-center justify-center text-2xl backdrop-blur-sm transition-transform duration-500">
                      {displayIcon}
                    </div>

                    {/* PERCENTAGE TAG */}
                    <span className="absolute -bottom-1 -right-1 bg-[#090c14] border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                      {skill.pct}%
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-brand font-bold text-white text-lg truncate">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-[#00e5ff] mb-2">
                      {skill.level}
                    </p>

                    {/* THE REVEAL ENGINE */}
                    <div
                      className={`grid grid-rows-[1fr] transition-all duration-800 ease-in-out ${
                        skill.wide
                          ? "grid-rows-[1fr]"
                          : "md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`text-sm text-gray-400 opacity-100 font-tech leading-relaxed transition-opacity duration-700 ${
                            skill.wide
                              ? "opacity-100"
                              : "md:opacity-0  md:group-hover:opacity-100 delay-300"
                          }`}
                        >
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AMBIENT GLOW OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
