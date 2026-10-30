import { Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import resume from "@/assets/resume.pdf.asset.json";

const Hero = () => {
  const tags = ["Full-Stack Development", "Backend Engineering", "AI / ML", "Mobile Development"];

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg text-foreground/60 mb-6 font-sans"
          >
            Software Engineer&nbsp;|&nbsp;Full-Stack Developer&nbsp;|&nbsp;AI/ML Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-normal mb-8 text-foreground leading-tight"
          >
            Shreya Agrawal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mb-10 leading-relaxed font-light"
          >
            I build production-oriented applications, backend systems, mobile experiences, and
            AI-powered solutions. My experience spans frontend and backend development, API
            integrations, database management, application performance, and experimentation
            with LLMs and AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm text-foreground/70 border border-border/60 rounded-full font-sans"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a
              href="https://github.com/Shreya-idle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground minimal-hover flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-agrawal4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground minimal-hover flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <Button
              asChild
              variant="outline"
              className="border-foreground/20 text-foreground/80 hover:text-foreground hover:border-foreground/40"
            >
              <a href={resume.url} download="Shreya_Agrawal_Resume.pdf">
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
