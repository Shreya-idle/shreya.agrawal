import resume from "@/assets/resume.pdf.asset.json";
import figmaFood1 from "@/assets/figma-food-1.png";
import figmaFood2 from "@/assets/figma-food-2.png";
import figmaFood3 from "@/assets/figma-food-3.png";

export type SkillCategory = { category: string; skills: string[] };
export type WorkLink = { label: string; url: string; kind: "website" | "app" | "video" };
export type ExperienceEntry = { title: string; company: string; period: string; type: string; link?: string; bullets: string[]; workLinks?: WorkLink[] };
export type Project = { id: string; title: string; event: string; description: string; achievements: string[]; techStack: string[]; githubLink?: string; liveLink?: string; images?: string[] };
export type FeaturedWork = { title: string; label: string; links: WorkLink[] };
export type Achievement = { title: string; level: string; rank: string; organizer: string; date: string; team: string; description: string };
export type ContactLink = { label: string; value: string; link: string };
export type SceneWaypoint = { id: string; position: [number, number, number]; target: [number, number, number]; accent: string };
export type PortfolioContent = {
  identity: { name: string; role: string; intro: string; tags: string[] };
  about: string[];
  education: { school: string; degree: string; period: string };
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  projects: Project[];
  featuredWork: FeaturedWork[];
  achievements: Achievement[];
  research: { title: string; topics: string[]; description: string; meta: string };
  contacts: ContactLink[];
  resumeUrl: string;
  waypoints: SceneWaypoint[];
};

export const portfolio: PortfolioContent = {
  identity: {
    name: "Shreya Agrawal",
    role: "Software Engineer · Full-Stack Developer · AI/ML Engineer",
    intro: "I build production-oriented applications, backend systems, mobile experiences, and AI-powered solutions. My experience spans frontend and backend development, API integrations, database management, application performance, and experimentation with LLMs and AI systems.",
    tags: ["Full-Stack Development", "Backend Engineering", "AI / ML", "Mobile Development"],
  },
  about: [
    "I'm Shreya Agrawal, a software engineer who builds production-oriented applications across the stack — from Flutter mobile apps and React.js platforms to Node.js, NestJS, and FastAPI backends.",
    "With internship experience at Humanity Founders, OnitIndia, and amasQIS.ai, I work on real-time systems, API integrations, database design, and AI-powered features, alongside research in network coding for secure data transfer.",
  ],
  education: { school: "Vellore Institute of Technology, Bhopal", degree: "B.Tech in Computer Science and Engineering (AI-ML)", period: "2023 – 2027" },
  skills: [
    { category: "Languages", skills: ["C++", "Python", "JavaScript", "Dart"] },
    { category: "Frameworks & Libraries", skills: ["Flutter", "React.js", "Node.js", "React Native", "FastAPI", "NestJS", "LangChain", "LiveKit"] },
    { category: "Backend & APIs", skills: ["REST APIs", "PostgreSQL", "MongoDB", "JWT", "Authentication"] },
    { category: "Testing & Security", skills: ["Postman", "Swagger", "Locust", "MobSF", "Manual Testing"] },
    { category: "Tools & Infrastructure", skills: ["Git", "GitHub", "Docker", "Figma", "Groq"] },
    { category: "Models & Architectures", skills: ["Qwen", "Llama", "CNN", "LLMs"] },
    { category: "Core Competencies & Applications", skills: ["Data Structures & Algorithms", "DBMS", "System Design", "Computer Vision", "Image Classification", "RAG", "AI Chatbots", "TTS & Voice AI"] },
  ],
  experience: [
    { title: "Mobile App Developer Intern", company: "Humanity Founders", period: "Sep 2026 – Present", type: "Internship", bullets: ["Developed a real-time admin-to-user communication module in Flutter using WebSocket, enabling two-way interaction for an application with 5,000+ users, with automatic reconnection, heartbeat handling, and error recovery.", "Built responsive Flutter and Dart UI features — chat interfaces, message status indicators, and notification components — integrated with Bloc state management and REST APIs.", "Optimized app performance by managing connection lifecycles, minimizing widget rebuilds, and reducing unnecessary network calls, while collaborating with backend and design teams in an Agile environment."] },
    { title: "Flutter Developer Intern", company: "OnitIndia", period: "Apr 2026 – Jul 2026", type: "Internship", bullets: ["Contributed to a production Flutter app with 100+ Google Play Store downloads and a React.js web platform.", "Improved Flutter app performance by 15% through API integration, caching, debugging, testing, and UI optimizations.", "Developed and maintained features across Flutter, React.js, and NestJS — authentication, animations, responsive UI, and backend API integrations.", "Converted Figma designs into production-ready interfaces and contributed to HLD/LLD documentation, testing, deployment, bug fixes, and production releases."], workLinks: [{ label: "Visit website", url: "https://onitindia.com", kind: "website" }, { label: "View Android app", url: "https://play.google.com/store/apps/details?id=com.onitapp.india&pcampaignid=web_share", kind: "app" }] },
    { title: "AI Engineer Intern", company: "amasQIS.ai", period: "Apr 2025 – Sep 2025", type: "Internship", bullets: ["Annotated, curated, and quality-checked 3,000+ images for an AI-based worker safety system, labeling PPE classes and negative cases to improve model accuracy.", "Built a Linux-based (WSL) script to test feature compatibility across Windows and Linux environments, ensuring smooth cross-platform integration.", "Developed frontend UI with Vite.js, Tailwind CSS, and Figma, and evaluated LLM (Qwen via Ollama) and TTS models for virtual AI projects."] },
    { title: "Full-Stack Developer", company: "Grownity.tech", period: "Ed-Tech Platform", type: "Project Experience", bullets: ["Worked on an ed-tech platform — backend and REST API integrations using Node.js, Express.js, and MongoDB.", "Built features, fixed bugs, and improved application reliability and scalability."] },
  ],
  projects: [
    { id: "holographic", title: "Holographic Microplastic Image Classification", event: "Research & AI Project", description: "Engineered a CNN-based classification system leveraging digital holography to categorize microplastic particles, improving automatic micro-object classification accuracy by 15% and reducing manual review time.", achievements: ["15% improvement in classification accuracy", "Interactive visualization interface built with Streamlit", "Reduced manual micro-object review time"], techStack: ["Python", "CNN", "Computer Vision", "Streamlit", "HTML", "CSS"], githubLink: "https://github.com/Shreya-idle", liveLink: "https://holographic-microplastic-image-classification.streamlit.app/" },
    { id: "myntra", title: "Myntra HackerRamp Project", event: "Myntra HackerRamp WeForShe", description: "Designed and developed a feature-rich shopping platform incorporating Virtual Try-On, Pair Finder, and Modista (personal stylist bot). Boosted user engagement with Trend-Centric Recommendations, Weekly Quizzes, and a carbon footprint tracker.", achievements: ["Advanced to Round 2 among 29,000+ participants", "Virtual Try-On feature implementation", "AI-powered personal stylist bot (Modista)", "Carbon footprint tracker for sustainable shopping"], techStack: ["Flutter", "Firebase", "Python"], githubLink: "https://github.com/Shreya-idle" },
    { id: "agritech", title: "AgriTech Solution", event: "Jagran Lakecity University Hackathon", description: "Engineered an AgriTech platform assisting farmers with crop management, market prices, and weather forecasts. Designed the frontend interface, integrated real-time APIs, and improved data visualization.", achievements: ["Attracted 41 unique viewers on Streamlit profile", "Real-time API integration for weather and market data", "Enhanced data visualization for farmers"], techStack: ["HTML", "CSS", "Python", "APIs"], githubLink: "https://github.com/Shreya-idle", liveLink: "https://agritech-trailblazers.streamlit.app/" },
    { id: "figma-food", title: "Figma Project", event: "UI of Food Website", description: "UI of Food Website", achievements: [], techStack: ["Figma"], images: [figmaFood1, figmaFood2, figmaFood3] },
  ],
  featuredWork: [
    { title: "Assignment Grid Bricks", label: "DEPLOYED WORK", links: [{ label: "Live project", url: "https://assignmentgridbricks.vercel.app/overview", kind: "website" }, { label: "Watch demo", url: "https://youtu.be/20a7TIB7bik", kind: "video" }] },
  ],
  research: { title: "Secure Biological Data Transfer Using Network Coding", topics: ["Network Coding", "Data Security", "Biological Data", "Information Theory"], description: "Research on secure transmission of biological data using advanced network coding techniques to ensure data integrity and privacy in healthcare systems.", meta: "Springer Publication · DOI 10.1007/978-981-95-3841-6_34" },
  achievements: [
    { title: "Genesis X Hackathon", level: "University Level", rank: "1st Place 🏆", organizer: "Health-O-Tech Club VIT Bhopal", date: "Feb 2024", team: "Team Omkar", description: "Secured first position in Genesis X hackathon conducted during Advitya festival with comprehensive data analysis solution." },
    { title: "HackKronyX — SmartMaint.AI", level: "National Level", rank: "Top 35 / 3,355 teams", organizer: "HackKronyX", date: "2024", team: "Team entry", description: "Built SmartMaint.AI, an intelligent maintenance solution, finishing in the Top 35 out of 3,355 registered teams." },
    { title: "Smart India Hackathon 2024", level: "National Level", rank: "Internal Finalist — Top 50 / 369", organizer: "VIT Bhopal Centre of Innovation and Teaching", date: "2024", team: "Team Trailblazers", description: "Selected as an internal finalist from 369 teams, achieving a spot in the Top 50." },
    { title: "Smart India Hackathon 2023", level: "National Level", rank: "Internal Finalist", organizer: "VIT Bhopal Centre of Innovation and Teaching", date: "2023", team: "Team Trailblazers", description: "Cleared all internal rounds of Smart India Hackathon for 2 consecutive years (Nov 2023 – 2024)." },
    { title: "Myntra HackerRamp WeForShe", level: "National Level", rank: "Round 2 / 29,000+ participants", organizer: "Myntra", date: "2024", team: "Solo entry", description: "Advanced to Round 2 among 29,000+ participants with a feature-rich shopping platform concept." },
    { title: "Lakecity Hackathon 2024-25", level: "Regional", rank: "8th Rank", organizer: "JLU School of Engineering & Technology", date: "2024", team: "Trailblazers — Frontend Developer", description: "Developed AgriTech solution with comprehensive ML model development and deployment, contributing as frontend developer." },
  ],
  contacts: [
    { label: "GitHub", value: "Shreya-idle", link: "https://github.com/Shreya-idle" }, { label: "LinkedIn", value: "shreya-agrawal4", link: "https://www.linkedin.com/in/shreya-agrawal4" }, { label: "LeetCode", value: "Shreya_Agrawal19", link: "https://leetcode.com/u/Shreya_Agrawal19/" }, { label: "CodeChef", value: "stiffen", link: "https://www.codechef.com/users/stiffen" }, { label: "X (Twitter)", value: "@agrawal_sh65899", link: "https://x.com/agrawal_sh65899" }, { label: "GeeksforGeeks", value: "agrawalshs1f1", link: "https://www.geeksforgeeks.org/profile/agrawalshs1f1" }, { label: "Pinterest", value: "agrawalshreya532", link: "https://in.pinterest.com/agrawalshreya532/" }, { label: "Email", value: "agrawalshreya532@gmail.com", link: "mailto:agrawalshreya532@gmail.com" },
  ],
  resumeUrl: resume.url,
  waypoints: [
    { id: "home", position: [0, 0.2, 7], target: [0, 0, 0], accent: "#c47b52" }, { id: "about", position: [2.8, 0.5, 6], target: [0, 0, 0], accent: "#8dd5d2" }, { id: "skills", position: [-2.8, 1.2, 6.5], target: [0, 0, 0], accent: "#c47b52" }, { id: "projects", position: [0, -1, 5.2], target: [0, 0, 0], accent: "#8dd5d2" }, { id: "experience", position: [3.4, -0.4, 7], target: [0, 0, 0], accent: "#c47b52" }, { id: "archive", position: [-3.2, 0.2, 7], target: [0, 0, 0], accent: "#8dd5d2" }, { id: "contact", position: [0, 2.2, 6], target: [0, 0, 0], accent: "#c47b52" },
  ],
};
