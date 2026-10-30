import { FileText, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const publications = [
    {
      title: "Secure Biological Data Transfer Using Network Coding",
      topics: ["Network Coding", "Data Security", "Biological Data", "Information Theory"],
      description:
        "Research on secure transmission of biological data using advanced network coding techniques to ensure data integrity and privacy in healthcare systems.",
      meta: "Springer Publication · DOI 10.1007/978-981-95-3841-6_34",
    },
  ];

  return (
    <section id="research" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Research Publications</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Contributing to research in network systems and data security
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((paper, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    {index === 0 ? (
                      <FileText className="h-6 w-6 text-secondary" />
                    ) : (
                      <BookOpen className="h-6 w-6 text-secondary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl mb-4 leading-relaxed">
                      {paper.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {paper.topics.map((topic, topicIndex) => (
                        <Badge
                          key={topicIndex}
                          variant="outline"
                          className="bg-secondary/10 text-secondary border-secondary/30"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed mb-3">{paper.description}</p>
                <p className="text-sm text-foreground/50 font-sans">{paper.meta}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
