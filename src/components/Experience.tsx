import { Briefcase, Calendar, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const roles = [
    {
      title: "Mobile App Developer Intern",
      company: "Humanity Founders",
      period: "Sep 2026 – Present",
      type: "Internship",
      link: null as string | null,
      bullets: [
        "Developed a real-time admin-to-user communication module in Flutter using WebSocket, enabling two-way interaction for an application with 5,000+ users, with automatic reconnection, heartbeat handling, and error recovery.",
        "Built responsive Flutter and Dart UI features — chat interfaces, message status indicators, and notification components — integrated with Bloc state management and REST APIs.",
        "Optimized app performance by managing connection lifecycles, minimizing widget rebuilds, and reducing unnecessary network calls, while collaborating with backend and design teams in an Agile environment.",
      ],
    },
    {
      title: "Flutter Developer Intern",
      company: "OnitIndia",
      period: "Apr 2026 – Jul 2026",
      type: "Internship",
      link: "https://onitindia.com",
      bullets: [
        "Contributed to a production Flutter app with 100+ Google Play Store downloads and a React.js web platform.",
        "Improved Flutter app performance by 15% through API integration, caching, debugging, testing, and UI optimizations.",
        "Developed and maintained features across Flutter, React.js, and NestJS — authentication, animations, responsive UI, and backend API integrations.",
        "Converted Figma designs into production-ready interfaces and contributed to HLD/LLD documentation, testing, deployment, bug fixes, and production releases.",
      ],
    },
    {
      title: "AI Engineer Intern",
      company: "amasQIS.ai",
      period: "Apr 2025 – Sep 2025",
      type: "Internship",
      link: null as string | null,
      bullets: [
        "Annotated, curated, and quality-checked 3,000+ images for an AI-based worker safety system, labeling PPE classes and negative cases to improve model accuracy.",
        "Built a Linux-based (WSL) script to test feature compatibility across Windows and Linux environments, ensuring smooth cross-platform integration.",
        "Developed frontend UI with Vite.js, Tailwind CSS, and Figma, and evaluated LLM (Qwen via Ollama) and TTS models for virtual AI projects.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Grownity.tech",
      period: "Ed-Tech Platform",
      type: "Project Experience",
      link: null as string | null,
      bullets: [
        "Worked on an ed-tech platform — backend and REST API integrations using Node.js, Express.js, and MongoDB.",
        "Built features, fixed bugs, and improved application reliability and scalability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Work Experience</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Full-stack, mobile, and AI engineering across production products
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                      <a
                        href={role.link ?? undefined}
                        target={role.link ? "_blank" : undefined}
                        rel={role.link ? "noopener noreferrer" : undefined}
                        className={`text-lg font-semibold flex items-center gap-2 ${
                          role.link ? "text-primary hover:underline" : "text-primary"
                        }`}
                      >
                        <Building2 className="h-4 w-4" />
                        {role.company}
                      </a>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-2 text-foreground/60 justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{role.period}</span>
                    </div>
                    <Badge variant="outline" className="mt-2 bg-primary/10 text-primary border-primary/30">
                      {role.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground/70">
                  {role.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
