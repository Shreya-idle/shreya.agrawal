import { Mail, Github, Linkedin, ExternalLink, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import resume from "@/assets/resume.pdf.asset.json";

const Contact = () => {
  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "Shreya-idle",
      link: "https://github.com/Shreya-idle",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shreya-agrawal4",
      link: "https://www.linkedin.com/in/shreya-agrawal4/",
      color: "accent",
    },
    {
      icon: Mail,
      label: "Email",
      value: "agrawalshreya532@gmail.com",
      link: "mailto:agrawalshreya532@gmail.com",
      color: "secondary",
    },
    {
      icon: Globe,
      label: "OnitIndia",
      value: "onitindia.com",
      link: "https://onitindia.com",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Let's collaborate on full-stack, mobile, or AI projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactLinks.map((contact, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">{contact.label}</p>
                        <p className="text-lg font-semibold text-foreground break-all">{contact.value}</p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground/60 mb-4">
              Open to full-stack, backend, mobile, and AI/ML opportunities
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                asChild
              >
                <a href="https://github.com/Shreya-idle" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/shreya-agrawal4/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href={resume.url} download="Shreya_Agrawal_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
