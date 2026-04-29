import { motion } from "framer-motion";

const About = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="about"
      className="w-full px-6 sm:px-16 md:px-24 lg:px-30 mx-auto py-32 bg-[#151724] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-blue-500/50"></div>
          <h2 className="font-tech text-blue-400 text-xs uppercase tracking-[0.5em]">
            Identity /
          </h2>
        </div>

        <div className="grid max-w-7xl grid-cols-1 md:grid-cols-12 gap-6  md:gap-10">
          {/* THE IDENTITY CARD - FULL NARRATIVE VERSION */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="md:col-span-7 w-full lg:col-span-7 md:row-span-3 lg:row-span-3 bg-[#1c1c1e]/40 border border-white/5 p-3 lg:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-blue-500 relative  group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                {/* THE PHOTO SLOT: Essential for the "Personal Brand" Blueprint */}
                <div className="w-30 h-30 rounded-full overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="./doyal_dev7.jpg"
                    alt="The Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-brand font-black text-2xl uppercase tracking-tighter">
                    The Architect
                  </h3>
                  <p className="text-blue-500 font-tech text-[10px] uppercase tracking-widest">
                    Est. 2026 / BD
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  My journey into the digital realm began with a fascination for
                  how
                  <span className="text-white"> complex systems</span> could be
                  translated into
                  <span className="text-blue-400">
                    {" "}
                    simple, human experiences
                  </span>
                  . What started as a deep dive into 3D logic evolved into a
                  career dedicated to building high-performance web
                  architectures.
                </p>
                <p className="hidden lg:block">
                  Today, I bridge the gap between creative storytelling and
                  engineering discipline. I don't just build websites; I
                  engineer
                  <span className="text-white"> digital environments</span> that
                  are fast, accessible, and aesthetically indestructible.
                </p>
                <p>
                  I specialize in working with brands that value
                  <span className="text-blue-500"> precision over fluff</span>,
                  transforming abstract ideas into production-ready reality.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between relative z-10">
              <span className="text-gray-500 text-[10px] font-tech uppercase tracking-[0.3em]">
                Based in Bangladesh / Working Globally
              </span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-gray-400 uppercase font-tech tracking-widest">
                  Active
                </span>
              </div>
            </div>
          </motion.div>

          {/* THE ENGINEERING STANDARDS CARD (The Pivot) */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className=" md:col-span-5 md:col-start-8 md:row-span-1 bg-[#1c1c1e]/40 border hover:border-blue-500 border-white/5 p-8 rounded-4xl"
          >
            <h4 className="text-blue-500 font-tech text-[10px] uppercase tracking-[0.3em] mb-4">
              Production Philosophy
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Precision requires a disciplined environment. I maintain a{" "}
              <span className="text-white font-bold">
                low-latency production workflow
              </span>{" "}
              engineered for speed and stability.
              <span className="hidden lg:block">
                {" "}
                This ensures{" "}
                <span className="text-blue-400 font-bold">
                  rapid iteration
                </span>{" "}
                and the delivery of high-fidelity web applications that are
                optimized for the modern user.
              </span>
            </p>
          </motion.div>

          {/* THE FOCUS CARD */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className=" md:col-span-5 md:col-start-8  bg-[#1c1c1e]/40 border  border-white/5 hover:border-blue-500 p-8 rounded-4xl flex flex-col justify-center"
          >
            <h4 className="text-gray-500 font-tech text-[10px] uppercase mb-3">
              Current R&D
            </h4>
            <p className="text-white font-brand font-bold text-sm uppercase tracking-tight italic">
              Immersive 3D <br /> Narratives & <br /> Web Physics
            </p>
          </motion.div>

          {/* THE ACTION CARD */}
          <motion.a
            variants={item}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            href="mailto:doyalrajbs7@gmail.com?subject=Initiate Build: Project Inquiry"
            className="md:col-span-5 md:col-start-8  bg-blue-600 p-8 rounded-4xl flex flex-col items-center justify-center text-center hover:bg-blue-500 border hover:border-white transition-all"
          >
            <h4 className="text-white font-brand font-black text-xs uppercase tracking-widest">
              Initiate <br /> Build
            </h4>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
