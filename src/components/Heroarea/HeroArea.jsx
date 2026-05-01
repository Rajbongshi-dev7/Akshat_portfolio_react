import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { Link } from "react-scroll";
const HeroArea = () => {
  return (
    <div
      id="hero"
      className="w-full px-6 sm:px-16 md:px-24 lg:px-30 bg-[#151516]"
    >
      <section className="pt-32 max-w-7xl mx-auto">
        <div className="grid ">
          {/* 1. THE POWER HEADING TILE */}
          <div className=" bg-[#1c1c1e]/50 border border-blue-900 rounded-t-xl pt-8 md:pt-20 pb-10 md:pb-28 px-6 md:px-16  flex flex-col justify-center relative overflow-hidden group">
            {/* Micro-Header: Career-Safe Version */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-blue-500"></span>
              <span className="font-tech text-blue-400 text-xs uppercase tracking-normal sm:tracking-[0.3em]">
                Status: Ready for Production
              </span>
            </div>

            {/* The "Indestructible" Bold Heading */}
            <h1 className="font-brand font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-200 leading-[0.9] tracking-tighter uppercase mb-10">
              Building <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                Scalable
              </span>{" "}
              <br />
              Web Interfaces.
            </h1>

            <button className="px-3 md:px-10 py-2 md:py-4 w-fit bg-white text-black font-black font-brand tracking-normal cursor-pointer rounded-full hover:bg-blue-400 transition-all uppercase text-xs md:tracking-widest shadow-lg  shadow-cyan-500  hover:shadow-gray-300">
              <Link to="builds" smooth={true} spy={true} offset={-200}>
                Explore Builds
              </Link>
            </button>

            {/* Faint Delta Watermark */}
            <img
              src="./logo.svg"
              className="absolute w-1/2 h-1/2 right-3 bottom-20 md:right-28 md:bottom-22   opacity-[0.1] md:opacity-[0.07] -rotate-12 group-hover:rotate-8 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroArea;
