import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Gamepad2, Train, Eye } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    title: "Startup Crisis Management",
    description:
      "An interactive, decision-based web game that immerses players in the unpredictable world of startups. Navigate funding crises, team conflicts, and pivotal decisions — every choice shapes your startup's destiny.",
    tags: ["Web Game", "Interactive", "Decision Engine"],
  },
  {
    icon: Train,
    title: "Smart Rail Deployment Engine",
    description:
      "An ML-powered system designed for the Smart India Hackathon 2025 that optimizes train deployment scheduling using predictive analytics, balancing demand forecasting with operational efficiency.",
    tags: ["Machine Learning", "SIH 2025", "Optimization"],
  },
  {
    icon: Eye,
    title: "Peripheral Vision Trainer",
    description:
      "Built at St. Joseph Engineering College — a training tool for athletes that tests peripheral awareness using screen-based light stimuli, with ML-driven pupil tracking and distance calibration.",
    tags: ["Computer Vision", "ML", "Sports Tech"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">What I've Built</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group glass rounded-xl p-6 flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(152_45%_32%/0.2)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={22} className="text-primary" />
                </div>
                <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
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

export default ProjectsSection;
