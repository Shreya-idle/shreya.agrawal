import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Core",
      skills: ["Python", "C++", "Machine Learning", "Deep Learning"],
      color: "bg-primary/10 text-primary border-primary/30",
    },
    {
      category: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"],
      color: "bg-accent/10 text-accent border-accent/30",
    },
    {
      category: "AI/ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "NLP"],
      color: "bg-secondary/10 text-secondary border-secondary/30",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Full-stack development with a focus on AI/ML and data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </Badge>
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
