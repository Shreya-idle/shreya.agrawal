import { Trophy, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hackathons = () => {
  const hackathons = [
    {
      title: "Genesis X Hackathon",
      level: "University Level",
      rank: "1st Place 🏆",
      organizer: "Health-O-Tech Club VIT Bhopal",
      date: "Feb 2024",
      team: "Team Omkar",
      description: "Secured first position in Genesis X hackathon conducted during Advitya festival with comprehensive data analysis solution.",
    },
    {
      title: "HackKronyX — SmartMaint.AI",
      level: "National Level",
      rank: "Top 35 / 3,355 teams",
      organizer: "HackKronyX",
      date: "2024",
      team: "Team entry",
      description: "Built SmartMaint.AI, an intelligent maintenance solution, finishing in the Top 35 out of 3,355 registered teams.",
    },
    {
      title: "Smart India Hackathon 2024",
      level: "National Level",
      rank: "Internal Finalist — Top 50 / 369",
      organizer: "VIT Bhopal Centre of Innovation and Teaching",
      date: "2024",
      team: "Team Trailblazers",
      description: "Selected as an internal finalist from 369 teams, achieving a spot in the Top 50.",
    },
    {
      title: "Smart India Hackathon 2023",
      level: "National Level",
      rank: "Internal Finalist",
      organizer: "VIT Bhopal Centre of Innovation and Teaching",
      date: "2023",
      team: "Team Trailblazers",
      description: "Cleared all internal rounds of Smart India Hackathon for 2 consecutive years (Nov 2023 – 2024).",
    },
    {
      title: "Myntra HackerRamp WeForShe",
      level: "National Level",
      rank: "Round 2 / 29,000+ participants",
      organizer: "Myntra",
      date: "2024",
      team: "Solo entry",
      description: "Advanced to Round 2 among 29,000+ participants with a feature-rich shopping platform concept.",
    },
    {
      title: "Lakecity Hackathon 2024-25",
      level: "Regional",
      rank: "8th Rank",
      organizer: "JLU School of Engineering & Technology",
      date: "2024",
      team: "Trailblazers — Frontend Developer",
      description: "Developed AgriTech solution with comprehensive ML model development and deployment, contributing as frontend developer.",
    },
  ];

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Hackathons & Achievements</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Competitive achievements and collaborative innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {hackathon.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{hackathon.title}</CardTitle>
                <div className="flex items-center gap-2 text-accent font-bold text-lg">
                  <Award className="h-5 w-5" />
                  {hackathon.rank}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {hackathon.description}
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{hackathon.team}</span>
                  </div>
                  <div className="text-xs text-foreground/50 mt-2">
                    {hackathon.organizer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
