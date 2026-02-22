import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Web Development Intern",
    org: "Altruisty (Startup)",
    period: "2024",
    points: [
      "Developed and optimized responsive web interfaces, gaining hands-on experience in full-stack development and startup agility.",
      "Collaborated on end-to-end project lifecycles, translating client requirements into functional code with cross-browser compatibility.",
    ],
  },
  {
    icon: Award,
    title: "Aptis ESOL International Certificate",
    org: "British Council",
    period: "2024",
    points: [
      "Attained C2 Proficiency (Mastery) — demonstrating an advanced command of the English language with precision and fluency in professional and academic environments.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">My Journey</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <exp.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground leading-tight">{exp.title}</h3>
                      <p className="text-sm text-primary">{exp.org}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
