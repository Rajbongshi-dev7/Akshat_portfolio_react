import React from "react";

const StatusRibbon = () => {
  return (
    <div className="bg-[#1D2132] w-full px-16 md:px-24 lg:px-30">
      <div className="flex items-center max-w-7xl mx-auto gap-4 px-6 py-8">
        <div className="h-px flex-1 bg-white/10"></div>
        <span className="font-tech text-[10px] text-gray-400 uppercase tracking-[0.3em]">
          System_Status
        </span>
        <div className="h-px flex-1 bg-white/10"></div>
      </div>
      {/* ribbon code */}
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Hours Coded (The "Grind" Stat) */}
          <div className="bg-[#1c1c1e]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-center text-center hover:border-blue-500/20 hover:shadow-blue-700 shadow-lg duration-400 hover:scale-y-110 transition-all group">
            <span className="font-tech text-blue-500 text-[10px] uppercase tracking-widest mb-2">
              Total Focus
            </span>
            <div className="flex justify-center items-baseline gap-1">
              <span className="text-3xl font-brand font-black text-gray-200">
                1,240+
              </span>
              <span className="text-[10px] text-gray-500 font-tech">HRS</span>
            </div>
            <p className="text-[9px] text-gray-500 font-body uppercase mt-2 tracking-tighter">
              Hours spent in VS Code
            </p>
          </div>

          {/* 2. Projects Completed (The "Output" Stat) */}
          <div className="bg-[#1c1c1e]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-center text-center hover:border-blue-500/20 hover:shadow-blue-700 shadow-lg duration-400 hover:scale-y-110 transition-all">
            <span className="font-tech text-blue-500 text-[10px] uppercase tracking-widest mb-2">
              Deployments
            </span>
            <div className="flex justify-center items-baseline gap-1">
              <span className="text-3xl  font-brand font-black text-gray-200">
                18
              </span>
              <span className="text-[10px] text-blue-400 font-tech font-bold">
                /PROD
              </span>
            </div>
            <p className="text-[9px] text-gray-500 font-body  uppercase mt-2 tracking-tighter">
              Production-ready builds
            </p>
          </div>

          {/* 3. GitHub Contributions (The "Consistency" Stat) */}
          <div className="bg-[#1c1c1e]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-center text-center hover:border-green-500/20 hover:shadow-blue-700 shadow-lg duration-400 hover:scale-y-110 transition-all">
            <span className="font-tech text-green-500 text-[10px] uppercase tracking-widest mb-2">
              Git Activity
            </span>
            <div className="flex justify-center items-center gap-2">
              <span className="text-3xl font-brand font-black text-gray-200">
                365
              </span>
              <div className="flex flex-col">
                <span className="text-[8px] text-green-500 leading-none">
                  DAY
                </span>
                <span className="text-[8px] text-green-500 leading-none font-bold uppercase">
                  Streak
                </span>
              </div>
            </div>
            <p className="text-[9px] text-gray-500 font-body  uppercase mt-2 tracking-tighter">
              Year-round contribution
            </p>
          </div>

          {/* 4. Active Node (The "Live" Stat) */}
          <div className="bg-[#1c1c1e]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-center text-center hover:border-cyan-500/20 hover:shadow-blue-700 shadow-lg duration-400 hover:scale-y-110 transition-all group">
            <span className="font-tech text-cyan-400 text-[10px] uppercase tracking-widest mb-2">
              Active Node
            </span>
            <div className="flex justify-center items-baseline gap-1">
              <span className="text-2xl font-brand font-black text-gray-200 uppercase">
                Dhaka
              </span>
              <span className="text-[10px] text-gray-500 font-tech">GMT+6</span>
            </div>
            <p className="text-[9px] text-gray-500 font-body  uppercase mt-2 tracking-tighter">
              Available for remote sync
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusRibbon;
