import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hariharasudhan423450@gmail.com", display: "hello@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com", display: "github.com/harihara" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", display: "linkedin.com/in/harihara" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
            Whether it's a project idea, collaboration, or just a conversation — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 w-full sm:w-auto"
            >
              <link.icon size={20} className="text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {link.display}
              </span>
              <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Harihara Sudhan B. Built with purpose.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
