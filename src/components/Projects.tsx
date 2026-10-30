import { ExternalLink, Github, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Holographic Microplastic Image Classification",
      event: "Research & AI Project",
      description:
        "Engineered a CNN-based classification system leveraging digital holography to categorize microplastic particles, improving automatic micro-object classification accuracy by 15% and reducing manual review time.",
      achievements: [
        "15% improvement in classification accuracy",
        "Interactive visualization interface built with Streamlit",
        "Reduced manual micro-object review time",
      ],
      techStack: ["Python", "CNN", "Computer Vision", "Streamlit", "HTML", "CSS"],
      githubLink: "https://github.com/Shreya-idle",
      liveLink: "https://holographic-microplastic-image-classification.streamlit.app/",
    },
    {
      title: "Myntra HackerRamp Project",
      event: "Myntra HackerRamp WeForShe",
      description:
        "Designed and developed a feature-rich shopping platform incorporating Virtual Try-On, Pair Finder, and Modista (personal stylist bot). Boosted user engagement with Trend-Centric Recommendations, Weekly Quizzes, and a carbon footprint tracker.",
      achievements: [
        "Advanced to Round 2 among 29,000+ participants",
        "Virtual Try-On feature implementation",
        "AI-powered personal stylist bot (Modista)",
        "Carbon footprint tracker for sustainable shopping",
      ],
      techStack: ["Flutter", "Firebase", "Python"],
      githubLink: "https://github.com/Shreya-idle",
      liveLink: null as string | null,
    },
    {
      title: "AgriTech Solution",
      event: "Jagran Lakecity University Hackathon",
      description:
        "Engineered an AgriTech platform assisting farmers with crop management, market prices, and weather forecasts. Designed the frontend interface, integrated real-time APIs, and improved data visualization.",
      achievements: [
        "Attracted 41 unique viewers on Streamlit profile",
        "Real-time API integration for weather and market data",
        "Enhanced data visualization for farmers",
      ],
      techStack: ["HTML", "CSS", "Python", "APIs"],
      githubLink: "https://github.com/Shreya-idle",
      liveLink: "https://agritech-trailblazers.streamlit.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Innovative solutions and real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <p className="text-sm text-primary/80">{project.event}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/60">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                    {project.liveLink && (
                      <Button
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
