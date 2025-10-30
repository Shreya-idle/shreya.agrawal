import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Projects", href: "#projects" },
    { name: "Stats", href: "#stats" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Name */}
          <a href="#" className="text-base text-foreground/80 hover:text-foreground minimal-hover font-sans">
            shreyaagrawal.com
          </a>

          {/* Center - Location/Status (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-foreground/60">
            <span>AI/ML Engineer</span>
          </div>

          {/* Right side - Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground/80 hover:text-foreground minimal-hover flex items-center gap-2"
          >
            <span className="text-base font-sans">Menu</span>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-6 pt-6 border-t border-border/50 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg text-foreground/80 hover:text-foreground minimal-hover font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
