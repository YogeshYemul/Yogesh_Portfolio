import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Server, Wrench } from "lucide-react";

type Skill = { name: string; level: string };

const categories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
    ],
  },
  {
    icon: Palette,
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", level: "Advanced" },
      { name: "React.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Android Studio", level: "Intermediate" },
    ],
  },
];

const levelColor = (level: string) =>
  level === "Advanced"
    ? "bg-primary/20 text-primary border-primary/30"
    : "bg-secondary text-muted-foreground border-border";

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">My Skills</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Tech <span className="text-primary">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon: Icon, title, skills }, catIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:box-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold">{title}</h3>
              </div>
              <div className="space-y-3">
                {skills.map(({ name, level }: Skill) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="font-body text-sm text-foreground">{name}</span>
                    <span className={`text-xs font-body font-medium px-2 py-0.5 rounded-full border ${levelColor(level)}`}>
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
