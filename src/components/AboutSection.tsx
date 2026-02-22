import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Globe } from "lucide-react";

const skills = [
  { icon: Code2, title: "Full-Stack Development", desc: "Building responsive, performant web applications from front to back." },
  { icon: Brain, title: "Problem Solving", desc: "100+ LeetCode challenges, 5-Star HackerRank Gold Badge in DSA." },
  { icon: Globe, title: "Communication", desc: "C2 English Mastery — British Council Aptis ESOL Certification." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm Harihara Sudhan B, an engineering student with a passion for building things that live on the internet. 
              My journey spans full-stack web development, machine learning, and competitive programming — always driven 
              by a desire to solve real-world problems with elegant, efficient code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From developing responsive web interfaces at a startup to creating ML-powered solutions at hackathons, 
              I thrive in environments that demand creativity under constraints. I believe the best software 
              is born where technical mastery meets thoughtful design.
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="glass rounded-xl p-5 flex gap-4 items-start hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <skill.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
