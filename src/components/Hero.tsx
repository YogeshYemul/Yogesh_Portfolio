import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Computer Engineering Student",
  "AI/ML Enthusiast",
  "Problem Solver",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(48 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(48 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-primary mb-6 tracking-widest uppercase"
        >
          {'<Hello World />'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 glow-yellow"
        >
          Yogesh <span className="text-primary">Yemul</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-10 mb-6"
        >
          <span className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground">
            {text}
            <span className="text-primary animate-pulse-glow">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-sm text-muted-foreground mb-10 tracking-wider"
        >
          Code. Train. Deploy. Repeat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/YogeshYemul" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/yogesh-yemul-902386264" },
            { icon: Mail, href: "mailto:yogeshyemul2006@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-block animate-bounce-slow text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
