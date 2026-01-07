import { useEffect, useState } from "react";
import figmaFood1 from "@/assets/figma-food-1.png";
import figmaFood2 from "@/assets/figma-food-2.png";
import figmaFood3 from "@/assets/figma-food-3.png";

const FigmaProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [figmaFood1, figmaFood2, figmaFood3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="figma-project" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Figma Project
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          UI of Food Website
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-2xl bg-card border">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img 
                    src={image} 
                    alt={`Food Website UI Design ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/40 hover:bg-primary/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaProject;
