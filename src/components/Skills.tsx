import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Dart", "C++", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "React Native", "Expo", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Figma-to-Code", "Responsive UI", "Animations"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "NestJS", "FastAPI", "Express.js", "REST APIs", "WebSocket", "JWT & Authentication", "Service Architecture", "Request Validation", "Error Handling", "Caching"],
    },
    {
      category: "Databases & Data",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma ORM", "Schema Design", "Data Modeling", "CRUD", "Migrations", "Cursor Pagination"],
    },
    {
      category: "AI / ML / GenAI",
      skills: ["LLMs", "RAG", "LangChain", "Groq", "Ollama", "Qwen", "Llama", "CNN", "Computer Vision", "Image Classification", "AI Chatbots", "TTS & Voice AI", "BLIP-2", "3D U-Net", "MONAI", "MLflow", "LiveKit"],
    },
    {
      category: "Testing & Security",
      skills: ["Postman", "Swagger", "Locust", "MobSF", "Appium", "WebdriverIO", "Manual Testing"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "Linux / WSL", "Android Studio", "Expo EAS", "Vercel", "Streamlit", "Figma"],
    },
    {
      category: "Core Concepts",
      skills: ["DSA", "DBMS", "System Design", "HLD / LLD", "API Contracts", "Scalability", "Containerization"],
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
            Full-stack engineering with mobile development and a strong AI/ML foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30 hover:scale-105 transition-transform"
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
