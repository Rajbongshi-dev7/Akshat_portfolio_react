import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Akshat_Portfolio_OS",
    tag: "Core_System",
    desc: "A high-end architectural interface with real-time state management and custom-built Bento components.",
    tech: ["React", "Tailwind", "Framer"],
    span: "md:col-span-7",
    color: "blue",
  },
  {
    id: 2,
    title: "Component_Lab",
    tag: "R&D_Archive",
    desc: "Central repository for reusable UI patterns and motion experiments.",
    tech: ["TS", "Framer"],
    span: "md:col-span-5",
    color: "green",
  },
];

const ProjectsArea = () => {
  return (
    <div id="builds" className="bg-[#0f0f11] py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-blue-500"></div>
            <span className="font-tech text-[10px] text-blue-500 uppercase tracking-[0.5em]">
              Selected_Deployments_v2.0
            </span>
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${project.span} group relative bg-[#161618] border border-white/5 rounded-[2.5rem] overflow-hidden p-1 hover:border-blue-500/30 transition-all duration-700`}
            >
              {/* INNER CONTENT CONTAINER */}
              <div className="bg-[#0f0f11] rounded-[2.4rem] h-full p-8 flex flex-col justify-between overflow-hidden relative">
                {/* Background "Pulse" Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-700"></div>

                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-tech text-[9px] text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  </div>

                  <h3 className="text-3xl font-brand font-black text-white italic uppercase tracking-tighter mb-4 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 font-tech text-[11px] leading-relaxed uppercase tracking-wider max-w-sm">
                    {project.desc}
                  </p>
                </div>

                {/* BOTTOM TECH STACK */}
                <div className="mt-12 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-tech text-gray-600 bg-white/5 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-500 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsArea;
