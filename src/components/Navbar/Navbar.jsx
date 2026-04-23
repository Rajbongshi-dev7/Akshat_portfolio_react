import React from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    // This tells the library: "Wake up and start watching the sections!"
    scrollSpy.update();
  }, []);
  return (
    <div className="w-full px-16 md:px-24 lg:px-30 bg-[#171927]">
      <nav className="fixed top-0 left-0 px-16 md:px-24 lg:px-30 w-full z-50 bg-[#181b29] border-b border-white/5 backdrop-blur-md items-center flex justify-center">
        <div className="w-full lg:max-w-7xl  gap-13  h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex items-center transition-transform active:scale-95 gap-2"
            >
              <img
                src="./logo.svg"
                className="h-7 w-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-blue-300 drop-shadow-lg"
              />
              <span className="font-brand text-gray-200 tracking-tight font-bold text-sm md:text-lg lg:text-xl">
                AKSHAT
              </span>
            </a>
          </div>

          {/* Desktop Links - Using font-tech for that 'coding' feel */}
          <div className="links flex gap-20">
            <div className="hidden md:flex items-center md:gap-7 lg:gap-10 font-tech text-sm text-slate-text">
              <Link
                to="hero"
                smooth={true}
                offset={-200}
                spy={true}
                activeClass="text-white drop-shadow-glow" // This replaces your 'active' logic!
                className="font-tech text-gray-400 cursor-pointer hover:text-blue-300 transition-all"
              >
                /stack
              </Link>
              <Link
                to="builds"
                smooth={true}
                spy={true}
                offset={-300}
                activeClass="!text-white !drop-shadow-glow" // This replaces your 'active' logic!
                className="font-tech text-gray-400  cursor-pointer hover:text-blue-300 transition-all"
              >
                /builds
              </Link>
              <Link
                to="experieces"
                smooth={true}
                spy={true}
                offset={-200}
                activeClass="text-white drop-shadow-glow" // This replaces your 'active' logic!
                className="font-tech text-gray-400 cursor-pointer hover:text-blue-300 transition-all"
              >
                /proof
              </Link>
            </div>

            {/* Call to Action */}
            <button className="bg-[#00aeff] border-none text-black px-1 py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 rounded-full font-body text-sm md:text-lg cursor-pointer font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 w-18 md:w-24">
              Connect
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
