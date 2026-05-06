import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../JSfiles/projects";
import { MdArrowOutward } from "react-icons/md";

const ProjectsSection = () => {
  // Animation Variants
  const leftSlide = {
    hidden: { x: -400, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], dealy: 0.2 },
    },
  };

  const rightSlide = {
    hidden: { x: 400, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], dealy: 0.2 },
    },
  };

  const bottomUp = {
    hidden: { y: 250, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="w-full px-6 sm:px-16 md:px-24 lg:px-30 mx-auto py-24 bg-[#060f27]"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif italic text-sm text-[#00e5ff]/60">
              03
            </span>
            <div className="w-8 h-px bg-[#00e5ff]/40" />
            <span className="text-[10px] tracking-[0.3em] font-tech uppercase text-gray-500">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-brand">
            Digital{" "}
            <span className="font-mono italic font-normal text-[#00e5ff]">
              Environments
            </span>
          </h2>
        </motion.div>

        {/* THE HYBRID GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. FEATURED (65% - Slides from Left) */}
          <motion.div
            variants={leftSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px", amount: 0.25 }}
            className="md:col-span-8 group relative min-h-100 overflow-hidden rounded-[30px] border border-white/5 bg-white/2 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#00e5ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 h-full flex flex-col justify-end relative z-10">
              <p className="text-[#00e5ff] font-tech text-xs uppercase tracking-widest mb-2">
                Featured Project
              </p>
              <h3 className="text-3xl font-bold text-white mb-4">
                Architectural Dashboard
              </h3>
              <div className="h-1 w-12 bg-[#00e5ff] rounded-full group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>

          {/* 2. SECONDARY (35% - Slides from Right) */}
          <motion.div
            variants={rightSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px", amount: 0.25 }}
            className="md:col-span-4 group relative min-h-100 overflow-hidden rounded-[30px] border border-white/5 bg-white/2 backdrop-blur-xl"
          >
            <div className="p-8 h-full flex flex-col justify-end">
              <p className="text-gray-500 font-tech text-xs uppercase tracking-widest mb-2">
                Side Project
              </p>
              <h3 className="text-xl font-bold text-white">Logic Engine</h3>
            </div>
          </motion.div>

          {/* BOTTOM ROW (Equal - Appear from Bottom) */}
          {PROJECTS.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={bottomUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1 }} // Staggered entrance
              className="md:col-span-4 group relative h-75 overflow-hidden  rounded-[30px] border border-white/5 bg-white/2 backdrop-blur-xl hover:bg-white/5 transition-colors"
            >
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={`p-8 h-full absolute flex flex-col justify-baseline bg-no-repeat w-full bg-cover bg-center`}
              >
                <div className=" mt-auto mb-1 ">
                  <h3
                    className={`text-xl group-hover:opacity-0 transition-opacity duration-600 font-bold mb-3 ${item.dark ? "text-gray-50" : "text-black"}`}
                  >
                    {item.title}
                  </h3>
                  <h4 className="text-fuchsia-500 ">
                    {item.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`border px-2 py-0.5 border-black  bg-black text-cyan-400 group-hover:opacity-0 shadow drop-shadow-2xl mx-2 ml-0 transition-opacity duration-600 font-mono rounded-2xl`}
                      >
                        {tech}
                      </span>
                    ))}
                  </h4>
                </div>
              </div>
              <div
                className={`relative w-full h-60 p-4 pt-2 text-white bg-[#060F27]  transition-all ease-in-out translate-y-4/2 border-t border-t-blue-400 group-hover:translate-y-1/3 duration-700`}
              >
                <h4 className="opacity-0 group-hover:opacity-100  transition-opacity">
                  {item.tech.map((tech, index) => (
                    <span
                      key={index}
                      className=" text-black text-sm  mx-2 ml-0 px-2  py-0.5 bg-[#eefbc2]  shadow drop-shadow-xl font-mono rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </h4>
                <h3 className="opacity-0 font-brand mt-1 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </h3>
                <p className="opacity-0 leading-5 font-mono tracking-tight text-gray-400 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
                <div className="flex flex-row mt-2 gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 flex items-center group bg-[#eefbc2]  group-hover:opacity-100  px-2 py-0.5  shadow drop-shadow-2xl text-black hover:text-indigo-600 rounded-2xl uppercase text-sm font-tech tracking-tight transition-opacity"
                    href={item.link}
                  >
                    Live Preview
                    <span className="ml-1">
                      <MdArrowOutward className=" group-hover:text-red-800" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 flex items-center group bg-[#eefbc2] group-hover:opacity-100 px-2 py-0.5 shadow drop-shadow-2xl rounded-2xl uppercase text-black hover:text-indigo-600 text-sm font-tech tracking-tight transition-opacity"
                    href={item.github}
                  >
                    Github
                    <span className="ml-1">
                      <MdArrowOutward className=" group-hover:text-red-800" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
