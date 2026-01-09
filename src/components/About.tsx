import { Brain, Trophy, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Focus",
      description: "Deep learning, neural networks, and intelligent systems development",
    },
    {
      icon: Trophy,
      title: "Competitive Coder",
      description: "Active on CodeChef and LeetCode, solving complex algorithmic challenges",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            AI researcher and developer passionate about solving real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">AI/ML Engineer & Researcher</h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              I'm Shreya Agrawal, an AI/ML engineer specializing in machine learning, deep learning, 
              and data science. My work focuses on developing intelligent systems and conducting research 
              in cutting-edge areas like network coding and EEG signal analysis.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              With experience as an AI intern at Amasqis and a strong foundation in competitive programming, 
              I combine theoretical knowledge with practical implementation skills. I'm passionate about 
              leveraging technology to create innovative solutions in healthcare, data security, and beyond.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-foreground/60">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
