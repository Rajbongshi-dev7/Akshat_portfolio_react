import { easeIn, easeOut, motion } from "framer-motion";

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
      className="w-full px-8 md:px-24 py-32 bg-[#1D2132] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-blue-500/50"></div>
          <h2 className="font-tech text-blue-400 text-xs uppercase tracking-[0.5em]">
            Identity / 03
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* THE IDENTITY CARD */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-[#1c1c1e]/40 border border-white/5 p-10 rounded-4xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-brand font-black text-3xl uppercase mb-8 tracking-tighter">
                The Architect
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Based in{" "}
                <span className="text-white font-bold">Bangladesh</span>, I
                architect digital interfaces that balance
                <span className="text-blue-400">
                  {" "}
                  structural integrity
                </span>{" "}
                with{" "}
                <span className="text-white font-bold">
                  {" "}
                  visual storytelling
                </span>
                . I specialize in high-performance frontend systems where every
                frame and every line of code serves a purpose.
              </p>
            </div>
            <div className="mt-12 text-gray-500 text-xs font-tech uppercase tracking-widest">
              Available for Global Projects
            </div>
          </motion.div>

          {/* THE ENGINEERING STANDARDS CARD (The Pivot) */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#1c1c1e]/40 border border-white/5 p-8 rounded-4xl"
          >
            <h4 className="text-blue-500 font-tech text-[10px] uppercase tracking-[0.3em] mb-4">
              Production Philosophy
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Precision requires a disciplined environment. I maintain a{" "}
              <span className="text-white font-bold">
                low-latency production workflow
              </span>
              engineered for speed and stability. This ensures{" "}
              <span className="text-blue-400 font-bold">rapid iteration</span>{" "}
              and the delivery of high-fidelity web applications that are
              optimized for the modern user.
            </p>
          </motion.div>

          {/* THE FOCUS CARD */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-[#1c1c1e]/40 border  border-white/5 hover:border-blue-500 p-8 rounded-4xl flex flex-col justify-center"
          >
            <h4 className="text-gray-500 font-tech text-[10px] uppercase mb-3">
              Current R&D
            </h4>
            <p className="text-white font-brand font-bold text-sm uppercase tracking-tight italic">
              Immersive 3D <br /> Narratives & <br /> Web Physics
            </p>
          </motion.div>

          {/* THE ACTION CARD */}
          <a
            href="#contact"
            className="md:col-span-1 bg-blue-600 p-8 rounded-4xl flex flex-col items-center justify-center text-center hover:bg-blue-500 transition-all"
          >
            <h4 className="text-white font-brand font-black text-xs uppercase tracking-widest">
              Initiate <br /> Build
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
