import React from "react";
import { motion } from "framer-motion";
import { steps } from "../JSfiles/process";

const Process = () => {
  return (
    <section
      id="process"
      className="w-full px-6 sm:px-16 md:px-24 lg:px-30 mx-auto py-24 bg-[#0D1117] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-white mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-[#00e5ff]">
              Blueprint
            </span>
          </h2>
          <p className="text-gray-400 font-tech tracking-widest text-xs">
            /HOW_I_SHIP_QUALITY
          </p>
        </div>

        <div className="relative">
          {/* The Vertical Git Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#00e5ff] via-blue-500/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-20 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
            >
              {/* Dot on the line */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black border-2 border-[#00e5ff] z-10 shadow-[0_0_10px_#00e5ff]" />

              {/* Content Card */}
              <div className="w-full md:w-[45%] ml-12 md:ml-0">
                <div className="p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 group">
                  <span className="text-[#00e5ff] font-tech text-[10px] tracking-tighter block mb-2">
                    {step.code}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-tech text-blue-300/60 uppercase border border-blue-500/10 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty Space for the other side on desktop */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
