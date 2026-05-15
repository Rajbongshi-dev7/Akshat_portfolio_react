import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-20">
          {/* Left Side: Status & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="font-tech text-xs tracking-[0.2em] text-gray-400 uppercase">
                System_Status: Available_for_Work
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-[#00e5ff]">
                next big thing.
              </span>
            </h2>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <a
              href="mailto:doyalrajbs7@gmail.com"
              className="group flex items-center gap-4 text-xl text-white font-tech hover:text-[#00e5ff] transition-all"
            >
              <span>HIRE_ME</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff]/50 group-hover:bg-[#00e5ff]/5 transition-all">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </a>

            <div className="flex gap-8 mt-4">
              {[
                { label: "GitHub", url: "https://github.com/Rajbongshi-dev7" },
                { label: "LinkedIn", url: "#" }, // Update these later
                { label: "Twitter", url: "#" },
                { label: "CV", url: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-gray-500 text-xs font-tech uppercase tracking-widest hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] font-tech text-gray-600 tracking-widest uppercase">
            Designed & Engineered by Akshat // {currentYear}
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] font-tech text-gray-700">
              24°23'27.7" N, 89°59'21.9"E
            </span>
            <span className="text-[10px] font-tech text-gray-700">
              V.2.0.26
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
