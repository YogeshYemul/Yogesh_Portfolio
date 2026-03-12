import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Trophy, Target } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    icon: Target,
    stats: "100+ Problems Solved",
    url: "https://leetcode.com/u/Yogesh_Yemul_2208/",
    color: "text-primary",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    stats: "Multiple Badges Earned",
    url: "https://www.hackerrank.com/profile/yogeshyemul2006",
    color: "text-primary",
  },
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Coding Profiles</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Competitive <span className="text-primary">Edge</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profiles.map(({ name, icon: Icon, stats, url }, idx) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:box-glow transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-xl bg-primary/10 mb-4">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{stats}</p>
              <span className="flex items-center gap-1 text-xs font-mono text-primary">
                Visit Profile <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
