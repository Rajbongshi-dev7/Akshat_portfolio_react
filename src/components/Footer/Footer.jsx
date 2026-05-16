import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const tags = [
    "React",
    "JavaScript",
    "Tailwind",
    "CSS3",
    "HTML5",
    "Mobile-First",
    "Open to Work",
    "Lighthouse 90+",
  ];
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // This creates a "timer" that runs every 1000ms (1 second)
    const timer = setInterval(() => {
      // It updates the state, which forces React to "re-render" the text
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    }, 1000);

    // This cleans up the timer if you leave the page (prevents memory leaks)
    return () => clearInterval(timer);
  }, []);
  return (
    <footer className="bg-[#070613] w-full px-6 sm:px-16 md:px-24 lg:px-30 mx-auto pt-24 pb-4 border-t border-gray-100">
      <div className="max-w-7xl">
        {/* TOP SECTION: Status & Location */}
        <div className="flex justify-between font-tech items-center mb-20 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
          <div className="flex items-center gap-3 border border-gray-100 py-2 px-4 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>
              Available for projects —{" "}
              {new Date().toLocaleString("en-US", { month: "long" })}{" "}
              {currentYear}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Dhaka</span>
            <span className="text-gray-200">•</span>
            <span>{time}</span>
          </div>
        </div>

        {/* MIDDLE SECTION: Big CTA */}
        <div className="relative mb-32">
          <h2 className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-gray-100 opacity-50">
            Let's build <br /> something great.
          </h2>
          <div className="md:absolute md:top-1/2 md:right-20 md:-translate-y-1/2 mt-8 md:mt-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-white cursor-pointer group shadow-md hover:shadow-lg shadow-blue-300"
            >
              <a href="mailto:doyalrajbs7@gmail.com">
                <FiArrowUpRight
                  strokeWidth={3}
                  size={25}
                  className="group-hover:rotate-z-45 transition-all"
                />
              </a>
            </motion.div>
          </div>
          <p className="max-w-md mt-10 text-gray-400 font-body text-lg leading-relaxed">
            Front-end developer focused on performance, clean code, and
            interfaces that actually feel good to use. Open to freelance
            projects and collaborations.
          </p>
        </div>

        {/* SKILLS MARQUEE  */}
        <div className="relative flex overflow-hidden py-4 bg-transparent border-y border-gray-100">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 35, // Adjust speed here
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-12 pr-12 items-center"
            >
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-12">
                  <span className="text-[11px] font-bold font-tech uppercase tracking-[0.2em] text-gray-400">
                    {tag}
                  </span>
                  <span className="text-indigo-400 text-lg">✦</span>
                </div>
              ))}
            </motion.div>

            {/* Second identical div for the seamless loop */}
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 35, // Must be the same duration as the first
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-12 pr-12 items-center"
            >
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-12">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {tag}
                  </span>
                  <span className="text-indigo-400 text-lg">✦</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* NAVIGATION & CONNECT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10 border-b pt-4 border-gray-50 pb-20">
          <div>
            <h4 className="text-[10px] font-bold text-gray-300 font-tech uppercase tracking-[0.3em] mb-8">
              About
            </h4>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              A self-taught front-end developer from Dhaka building fast,
              accessible, and beautifully crafted web experiences. Every project
              gets my full attention.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind", "CSS3", "HTML5"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border font-tech border-gray-200 text-[10px] rounded text-gray-500 font-medium"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="md:pl-20">
            <h4 className="text-[10px] font-bold font-tech text-gray-300 uppercase tracking-[0.3em] mb-8">
              Navigate
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              {["About", "Skills", "Builds", "Why-me"].map((item) => (
                <li>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    spy={true}
                    offset={-200}
                    key={item}
                    className="hover:text-indigo-500 transition-colors font-body cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold font-tech text-gray-300 uppercase tracking-[0.3em] mb-8">
              Connect
            </h4>
            <ul className="space-y-4">
              {[
                {
                  name: "GitHub",
                  icon: <FaGithub size={16} />,
                  url: "https://github.com/Rajbongshi-dev7",
                },
                { name: "LinkedIn", icon: <FaLinkedin size={16} />, url: "#" },
                {
                  name: "Twitter / X",
                  icon: <FaTwitter size={16} />,
                  url: "#",
                },
                {
                  name: "doyalrajbs7@gmail.com",
                  icon: <FaEnvelope size={16} />,
                  url: "mailto:doyalrajbs7@gmail.com",
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="flex items-center font-body gap-3 text-gray-500 text-sm hover:text-indigo-500 transition-colors"
                  >
                    <span className="text-gray-300">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-gray-400 tracking-widest uppercase">
          <p>
            © {currentYear}{" "}
            <span className="text-gray-300">Doyal Rajbongshi</span> — All rights
            reserved
          </p>
          <div className="flex items-center gap-2 border border-gray-100 py-2 px-4 rounded-full">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Lighthouse 90+ guaranteed</span>
          </div>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-400 font-serif">❤️</span> in
            Dhaka, BD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
