import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Academic background and specialization
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      Vellore Institute of Technology, Bhopal
                    </CardTitle>
                    <p className="text-lg text-primary font-semibold flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      B.Tech in Computer Science and Engineering (AI-ML)
                    </p>
                  </div>
                </div>
                <div className="text-sm text-foreground/60 shrink-0">2023 – 2027</div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
