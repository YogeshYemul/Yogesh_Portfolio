import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Engineering",
    school: "G.H. Raisoni College of Engineering, Pune",
    year: "2025 – Present",
    detail: "Computer Engineering | Web Dev, AI, Software Engineering",
    tag: "Current",
  },
  {
    icon: GraduationCap,
    degree: "Diploma in Computer Engineering",
    school: "Government Polytechnic, Solapur",
    year: "2022 – 2025",
    detail: "Percentage: 90.74% | Programming, Web Dev, Software Fundamentals",
  },
  {
    icon: School,
    degree: "High School",
    school: "SMT. N.B. Banda Prashala, Solapur",
    year: "2019 – 2022",
    detail: "Score: 94.60% | Science & Mathematics",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-12 md:py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs md:text-sm text-primary mb-2 tracking-widest uppercase">Education</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 md:mb-16">
            My <span className="text-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="p-4 md:p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 flex-wrap ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Icon size={14} className="md:w-4 md:h-4 text-primary" />
                      <span className="font-mono text-xs text-primary">{item.year}</span>
                      {item.tag && (
                        <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 whitespace-nowrap">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-base md:text-lg font-bold mb-1">{item.degree}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-body mb-1">{item.school}</p>
                    <p className="text-xs text-muted-foreground font-body">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
