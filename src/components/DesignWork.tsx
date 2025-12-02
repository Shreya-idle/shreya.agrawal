import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

const DesignWork = () => {
  const designs = [
    {
      title: "Figma Design System",
      description: "Comprehensive design mockups and UI components",
      link: "https://www.figma.com/design/v2IbpvNHb3CB9YusUY10Oy/Untitled?node-id=0-1&p=f&t=FiX5QRtf7J9hbFcA-0"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="design" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
            Design Work
          </h2>
          <p className="text-foreground/60 mb-12 max-w-2xl">
            Visual design projects and UI/UX explorations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {designs.map((design, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover-scale border-border bg-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 text-card-foreground">
                        {design.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {design.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 minimal-hover"
                  >
                    View in Figma →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignWork;