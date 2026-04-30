import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const SKILLS = [
  {
    name: "HTML5",
    level: "Expert",
    pct: 90,
    icon: "🏗️",
    color: "#00e5ff",
    desc: "Semantic markup, accessibility-first structure, SEO-conscious foundations built to last",
    wide: true,
  },
  {
    name: "CSS3",
    level: "Advanced",
    pct: 85,
    icon: "🎨",
    color: "#a78bfa",
    desc: "Flexbox, Grid, keyframes, custom properties and responsive mastery.",
    wide: false,
  },
  {
    name: "Tailwind",
    level: "Advanced",
    pct: 80,
    icon: "💨",
    color: "#38bdf8",
    desc: "Utility-first rapid development and design systems.",
    wide: false,
  },
  {
    name: "JavaScript",
    level: "Proficient",
    pct: 75,
    icon: "⚡",
    color: "#fbbf24",
    desc: "ES6+, DOM mastery, async/await, Fetch API, event-driven patterns.",
    wide: false,
  },
  {
    name: "React.js",
    level: "Learning . Growing Fast",
    pct: 65,
    icon: <FaReact color="#00FFFF" />,
    color: "#fb7185",
    desc: "Component architecture, hooks, state management, JSX — actively building projects to level up every week.",
    wide: true,
  },
  {
    name: "Dev Tools",
    level: "Proficient",
    pct: 70,
    icon: "🔧",
    color: "#34d399",
    desc: "Git, VS Code, Dev Tools and Figma basics.",
    wide: false,
  },
];

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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif italic text-sm text-[#00e5ff]/60">
              02
            </span>
            <div className="w-8 h-px bg-[#00e5ff]/40" />
            <span className="text-[10px] tracking-[0.3em] font-tech uppercase text-gray-500">
              The Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-brand leading-none">
            Tools I wield with
            <br />
            <span className="font-serif italic font-normal text-[#00e5ff]">
              precision
            </span>
          </h2>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className={`${skill.wide ? "md:col-span-2" : "md:col-span-1"} group relative overflow-hidden rounded-[22px] border border-white/5 bg-white/3 backdrop-blur-xl p-6 transition-colors hover:bg-white/5`}
            >
              <div
                className={`flex ${skill.wide ? "flex-row items-center gap-6" : "flex-col items-start gap-4"} h-full`}
              >
                {/* CIRCULAR PROGRESS */}
                <div className="relative shrink-0">
                  <svg className="w-20 h-20 md:w-24 md:h-24 -rotate-90 overflow-visible">
                    {/* 1. THE TRACK */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="38"
                      fill="none"
                      className="stroke-white/5"
                      strokeWidth="4"
                    />

                    {/* 2. THE NEON OUTER GLOW (Should be WIDER) */}
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="38"
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
                      r="38"
                      fill="none"
                      stroke={skill.color}
                      className="stroke-2 md:stroke-8" // Keep the core sharp and thin
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
                    {skill.icon}
                  </div>

                  {/* PERCENTAGE TAG */}
                  <span className="absolute -bottom-1 -right-1 bg-[#090c14] border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                    {skill.pct}%
                  </span>
                </div>
                {/* <div className="relative shrink-0">
                <svg className="w-20 h-20 md:w-24 md:h-24 -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="38"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: skill.pct / 100 }}
                    stroke="none"
                    strokeWidth="5"
                    style={{
                      filter: "blur(5px)",
                      opacity: 0.4,
                    }}
                    // className="fill-none stroke-white/5 stroke-4"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="38"
                    fill="none"
                    stroke={skill.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: skill.pct / 100 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    style={{
                      filter: `drop-shadow(0 0 15px ${skill.color})`,
                    }}
                  />
                </svg>
                <div className="absolute inset-2 rounded-full bg-[#03050a]/40 border border-white/5  flex items-center justify-center text-2xl transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="absolute -bottom-1 -right-1 bg-[#090c14] border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#00e5ff]">
                  {skill.pct}%
                </span>
              </div> */}

                {/* TEXT CONTENT */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-brand font-bold text-white text-lg truncate">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#00e5ff] mb-2">
                    {skill.level}
                  </p>
                  <p
                    className={`text-sm text-gray-400 font-light font-tech leading-relaxed ${!skill.wide && "hidden group-hover:block"}`}
                  >
                    {skill.desc}
                  </p>
                </div>
              </div>

              {/* AMBIENT GLOW OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
