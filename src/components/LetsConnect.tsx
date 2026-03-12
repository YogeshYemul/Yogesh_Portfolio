import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Code2, Trophy, MessageCircle } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:from-yellow-400 hover:to-yellow-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:from-yellow-500 hover:to-yellow-400",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/Yogesh_Yemul_2208/",
    color: "hover:from-yellow-400 hover:to-amber-400",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    url: "https://www.hackerrank.com/profile/yogeshyemul2006",
    color: "hover:from-yellow-500 hover:to-yellow-400",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/917018226820",
    color: "hover:from-yellow-400 hover:to-yellow-500",
  },
];

const LetsConnect = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="connect" className="py-12 md:py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">Connect</span>
          </h2>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-2">
          {profiles.map(({ name, icon: Icon, url, color }, idx) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative w-36 h-32 sm:w-40 sm:h-36 md:w-44 md:h-40 rounded-2xl border border-yellow-600/40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 overflow-hidden hover:border-yellow-400/80 hover:shadow-lg hover:shadow-yellow-400/30`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 ${color}`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-2 sm:mb-4 p-2 sm:p-3 rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 group-hover:from-yellow-400/50 group-hover:to-yellow-500/40 transition-all duration-300">
                    <Icon
                      size={32}
                      className="sm:w-10 sm:h-10 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 text-center">
                    {name}
                  </h3>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 md:mt-16 px-4"
        >
          <p className="text-gray-300 font-body text-sm sm:text-base">
            Click any icon to connect with me or reach out directly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LetsConnect;
