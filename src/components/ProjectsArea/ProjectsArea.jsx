import React from "react";

const ProjectsArea = () => {
  return (
    <div id="builds" className="bg-[#1D2132]">
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Section Anchor (The line we discussed) */}
        <div className="w-full mb-12 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="font-tech text-[10px] text-gray-400 uppercase tracking-[0.4em]">
              Featured_Builds_v1.0
            </span>
          </div>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 01. THE FLAGSHIP PROJECT (Large Card) */}
          <div className="md:col-span-8 group relative bg-[#1c1c1e]/40 border border-white/5 rounded-4xl overflow-hidden hover:border-blue-500/30 transition-all duration-700">
            {/* Visual Header */}
            <div className="h-64 md:h-80 bg-[#0f0f11] relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Project Image Placeholder */}
              <div className="absolute bottom-[-10%] right-[-5%] w-4/5 h-4/5 bg-white/5 rounded-tl-2xl border-t border-l border-white/10 group-hover:-translate-y-2.5 transition-transform duration-700">
                <div className="p-4 font-tech text-[10px] text-gray-700 uppercase">
                  System_Preview.png
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-brand font-black text-gray-200 uppercase tracking-tighter">
                    Akshat Portfolio React
                  </h3>
                  <p className="text-gray-500 font-tech text-[10px] mt-2 uppercase tracking-widest leading-relaxed max-w-md">
                    A high-end architectural portfolio featuring Bento-style
                    components and real-time Git status integration.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-400 font-tech uppercase">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-400 font-tech uppercase">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 02. THE REPO ARCHIVE (Small Card) */}
          <div className="md:col-span-4 bg-[#1c1c1e]/40 border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-green-500/30 transition-all duration-500 group">
            <div>
              <div className="w-10 h-10 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-brand font-bold text-gray-200 uppercase tracking-tighter">
                Component Lab
              </h3>
              <p className="text-gray-500 font-tech text-[10px] mt-4 uppercase tracking-widest leading-relaxed">
                Central repository for reusable UI patterns and motion
                experiments.
              </p>
            </div>

            <a
              href="#"
              className="mt-8 text-[10px] font-tech text-blue-500 hover:text-white transition-colors flex items-center gap-2 tracking-[0.2em]"
            >
              ACCESS ARCHIVE <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsArea;
