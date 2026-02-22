import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Zap, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "HackerRank 5-Star Gold",
    description: "Earned a 5-Star Gold Badge signifying elite-level competency in Data Structures and Algorithms.",
  },
  {
    icon: Zap,
    title: "100+ LeetCode Challenges",
    description: "Demonstrated mastery in computational logic and algorithmic problem-solving across diverse categories.",
  },
  {
    icon: Trophy,
    title: "24-Hour Hackathon",
    description: "Proven ability to deliver under strict constraints at St. Joseph Engineering College's rigorous hackathon.",
  },
  {
    icon: BookOpen,
    title: "Technical Paper Presentation",
    description: "Contributed to academic discourse by presenting a technical paper at the Chennai Institute of Technology.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Milestones</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
