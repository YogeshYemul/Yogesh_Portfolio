import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/image.png";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs md:text-sm text-primary mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 md:mb-12">
            Who I <span className="text-primary">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Animated Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group flex justify-center px-2"
          >
            <div className="relative w-56 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[450px] mx-auto">
              {/* Animated floating orbs background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-primary/20 to-yellow-600/20 rounded-3xl blur-3xl"
              />

              {/* Floating water-like border animation */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  boxShadow: [
                    "0 0 30px rgba(250, 204, 21, 0.4), inset 0 0 30px rgba(250, 204, 21, 0.1)",
                    "0 0 50px rgba(59, 130, 246, 0.6), inset 0 0 50px rgba(59, 130, 246, 0.15)",
                    "0 0 30px rgba(250, 204, 21, 0.4), inset 0 0 30px rgba(250, 204, 21, 0.1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-primary to-yellow-500 rounded-3xl p-1.5"
              >
                <div className="absolute inset-0 bg-black rounded-3xl" />
              </motion.div>

              {/* Inner floating effect */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-yellow-400/40 group-hover:border-yellow-400 transition-colors duration-300"
              >
                <img
                  src={profilePhoto}
                  alt="Yogesh Yemul"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                
                {/* Overlay gradient on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-3xl"
                />
              </motion.div>

              {/* Floating accent orbs */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-12 sm:w-14 h-12 sm:h-14 bg-yellow-400/40 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  x: [10, -10, 10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 w-14 sm:w-16 h-14 sm:h-16 bg-primary/30 rounded-full blur-2xl"
              />

              {/* Wave effect particles */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-1/4 -right-10 sm:-right-12 w-6 sm:w-8 h-6 sm:h-8 border-2 border-yellow-400/40 rounded-full"
              />
              <motion.div
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-1/4 -left-10 sm:-left-12 w-5 sm:w-6 h-5 sm:h-6 border-2 border-primary/40 rounded-full"
              />
            </div>
          </motion.div>

          {/* Text Content with animations */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-muted-foreground font-body text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              I am a <span className="text-primary font-semibold">Computer Engineering student</span> and <span className="text-primary font-semibold">Full Stack Developer</span> with a strong passion for <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span>. I began my technical journey by completing a Diploma in Computer Engineering from Government Polytechnic Solapur, where I built a solid foundation in programming, software development, and problem-solving.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground font-body text-sm sm:text-base md:text-lg leading-relaxed">
              I enjoy building modern web applications and intelligent systems that solve real-world problems. My work focuses on combining AI technologies with full-stack development to create scalable, efficient, and impactful digital solutions.
            </motion.p>

            {/* Animated badges */}
            <motion.div
              variants={itemVariants}
              className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-3"
            >
              {["React", "Node.js", "Python", "AI/ML"].map((tech, idx) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-primary/20 border border-yellow-400/30 text-xs sm:text-sm font-body text-primary hover:border-yellow-400 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
