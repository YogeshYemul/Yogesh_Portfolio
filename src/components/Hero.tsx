import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Computer Engineering Student",
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

      <div className="container mx-auto relative z-10 text-center px-4 py-8 md:py-0">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-3 md:mb-4 glow-yellow leading-tight"
        >
          Yogesh <span className="text-primary">Yemul</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 md:h-10 mb-4 md:mb-6"
        >
          <span className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
            {text}
            <span className="text-primary animate-pulse-glow">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-12 flex-wrap px-2"
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 text-black font-body font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-sm sm:text-base cursor-not-allowed"
          >
            Download Resume
          </a>
          <a
            href="#connect"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary/10 transition-colors text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
          transition={{ delay: 1.2 }}
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
