import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif font-normal mb-8 text-foreground leading-tight">
            Shreya Agrawal
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mb-12 leading-relaxed font-light">
            AI/ML Engineer and researcher specializing in deep learning models, competitive programming, and advanced AI applications. 
            Passionate about building intelligent systems that solve real-world problems.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
