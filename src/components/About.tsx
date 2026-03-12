import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies Known", value: 15, suffix: "+" },
  { label: "Problems Solved", value: 100, suffix: "+" },
  { label: "Model Accuracy", value: 94, suffix: "%" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-heading font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Who I <span className="text-primary">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300" />
              <img
                src={profilePhoto}
                alt="Yogesh Yemul"
                className="relative w-full h-full object-cover rounded-2xl border-2 border-border group-hover:border-primary/50 transition-colors"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">Computer Engineering student</span> and{" "}
              <span className="text-primary font-semibold">Full Stack Developer</span> from India. I love building
              impactful web applications and exploring the frontiers of{" "}
              <span className="text-primary font-semibold">AI/ML</span>. My journey spans from creating sentiment
              analysis models with 94% accuracy to developing full-stack data analytics platforms.
            </p>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-10">
              When I'm not coding, you'll find me solving problems on LeetCode or exploring new technologies.
              I believe in continuous learning and building solutions that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ label, value, suffix }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <Counter target={value} suffix={suffix} />
                  <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
