import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Sentiment Analysis Model",
    description:
      "Deep learning model using RoBERTa + LSTM for advanced sentiment analysis with 94% accuracy on large text datasets.",
    tech: ["Python", "PyTorch", "TensorFlow", "NLP"],
    category: "AI-ML",
    featured: true,
    github: "https://github.com/YogeshYemul",
    live: "#",
  },
  {
    title: "INSYTE Data Analytics",
    description:
      "AI-powered automated data analytics platform that converts raw datasets into actionable insights and machine learning models.",
    tech: ["React", "Vite", "FastAPI", "Python"],
    category: "Web",
    github: "https://github.com/YogeshYemul",
    live: "#",
  },
  {
    title: "Diploma Dost",
    description:
      "Centralized study material hub providing comprehensive resources for diploma students with interactive learning tools.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    category: "Web",
    github: "https://github.com/YogeshYemul",
    live: "#",
  },
];

const filters = ["All", "AI-ML", "Web"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs md:text-sm text-primary mb-2 tracking-widest uppercase">My Work</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 md:mb-8">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:box-glow transition-all duration-300 flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs font-mono font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4 w-fit">
                  ⭐ Featured — 94% Accuracy
                </span>
              )}
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
