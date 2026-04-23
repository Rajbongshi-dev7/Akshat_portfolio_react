import React from "react";
import { motion } from "framer-motion";
import projectOne from "../../assets/placeholder_img.png"; // Use your actual file name

const projects = [
  {
    id: 1,
    title: "Akshat_Portfolio_OS",
    tag: "Core_System",
    desc: "A high-end architectural portfolio featuring Bento-style components and real-time Git status integration.",
    tech: ["React", "Tailwind", "Framer"],
    span: "md:col-span-8",
    status: "v1.0.4",
    link: "https://github.com",
  },
  {
    id: 2,
    title: "Component_Lab",
    tag: "R&D_Archive",
    desc: "Central repository for reusable UI patterns and motion experiments.",
    tech: ["TS", "Framer", "GLSL"],
    span: "md:col-span-4",
    status: "Stable",
    link: "https://github.com",
  },
];

const ProjectsArea = () => {
  return (
    <div
      id="builds"
      className="bg-[#141720] py-32 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER WITH SLIDE-IN */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-blue-500"></div>
            <span className="font-tech text-[10px] text-blue-500 uppercase tracking-[0.5em]">
              Selected_Deployments_v2.0
            </span>
          </div>
          <div className="h-px flex-1 bg-white/5"></div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // ENTRANCE: Staggered spring reveal
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              // INTERACTION: 3D Magnetic Hover
              whileHover={{
                y: -20,
                scale: 1.01,
                rotateX: 4,
                rotateY: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.98 }}
              className={`${project.span} group relative perspective-1000`}
            >
              {/* THE CARD OUTER FRAME */}
              <div className="relative bg-[#161618] border border-white/5 rounded-[2.5rem] overflow-hidden p-px hover:border-blue-500/50 transition-colors duration-500 h-full">
                {/* THE CARD INNER BODY */}
                <div className="bg-[#0f0f11] rounded-[2.4rem] h-full p-8 flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative Background Mesh */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none group-hover:bg-blue-500/15 transition-all duration-700" />

                  <div>
                    <div className="flex justify-between items-center mb-10">
                      <div className="flex items-center gap-3">
                        <span className="font-tech text-[9px] text-blue-500 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-widest">
                          {project.tag}
                        </span>
                        <span className="font-tech text-[9px] text-gray-600 uppercase">
                          [{project.status}]
                        </span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse"></div>
                    </div>

                    <h3 className="text-4xl font-brand font-black text-white italic uppercase tracking-tighter mb-4 leading-none group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 font-tech text-[11px] leading-relaxed uppercase tracking-wider max-w-sm mb-8">
                      {project.desc}
                    </p>
                  </div>

                  {/* VISUAL PLACEHOLDER (Only for the large card) */}
                  {/* THE PREVIEW VIEWPORT */}
                  {project.span.includes("col-span-8") && (
                    <div className="relative h-64 w-full bg-[#0a0a0c] rounded-2xl border border-white/5 mt-auto mb-8 overflow-hidden group-hover:border-blue-500/40 transition-all duration-700">
                      {/* Browser-style Header */}
                      <div className="absolute top-0 w-full h-6 bg-[#161618] border-b border-white/5 z-20 flex items-center px-3 gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                        <div className="ml-2 h-3 w-24 bg-white/5 rounded-full flex items-center px-2">
                          <div className="w-full h-0.5 bg-white/10"></div>
                        </div>
                      </div>

                      {/* The Scrolling Image Container */}
                      <div className="relative w-full h-full pt-6 overflow-hidden contain-strict">
                        <motion.div
                          initial={{ y: 0 }}
                          whileHover={{ y: "-65%" }} // Adjusted for your image length
                          transition={{
                            duration: 14, // Slower = Smoother. Try 8-10 seconds.
                            ease: "linear", // Essential for constant speed
                            repeat: 0, // Ensures it doesn't loop weirdly
                          }}
                          style={{ willChange: "transform" }}
                          className="w-full"
                        >
                          <img
                            src={projectOne} // Replace with your image path
                            alt="Project Preview"
                            className="w-full h-auto grayscale-50 group-hover:grayscale-0 transition-all duration-700"
                            onError={(e) => {
                              e.target.src =
                                "There was a problem loading the img";
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Glass Overlay for Depth */}
                      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#0f0f11] via-transparent to-transparent opacity-60"></div>
                    </div>
                  )}

                  {/* BOTTOM ACTIONS & TECH */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-tech text-gray-400 border border-white/10 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.2, x: 5 }}
                      className="text-blue-500 hover:text-white transition-colors"
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>
                  </div>
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
