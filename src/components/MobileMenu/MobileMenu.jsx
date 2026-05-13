import React from "react";
import { Link } from "react-scroll";

const MobileMenu = () => {
  return (
    <>
      {/* links for small device */}
      <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-100 h-14 bg-[#131314]/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-around px-4 z-50 shadow-2xl">
        <Link
          to="about"
          smooth={true}
          offset={-80}
          spy={true}
          activeClass="text-white"
          className="font-tech text-[10px] uppercase tracking-widest text-gray-400"
        >
          about
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={-120}
          spy={true}
          activeClass="text-white"
          className="font-tech text-[10px] uppercase tracking-widest text-gray-400"
        >
          stack
        </Link>
        <Link
          to="builds"
          smooth={true}
          offset={-100}
          spy={true}
          activeClass="text-white"
          className="font-tech text-[10px] uppercase tracking-widest text-gray-400"
        >
          builds
        </Link>
        <Link
          to="why-me"
          smooth={true}
          offset={-30}
          spy={true}
          activeClass="text-white"
          className="font-tech text-[10px] uppercase tracking-widest text-gray-400"
        >
          why-me
        </Link>
      </div>
    </>
  );
};

export default MobileMenu;
