import type { CSSProperties } from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siCplusplus,
  siDart,
  siDocker,
  siFastapi,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siJavascript,
  siJsonwebtokens,
  siLangchain,
  siLivekit,
  siLocust,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siQwen,
  siReact,
  siSwagger,
} from "simple-icons";

const skillIcons: Record<string, SimpleIcon> = {
  "C++": siCplusplus,
  Python: siPython,
  JavaScript: siJavascript,
  Dart: siDart,
  Flutter: siFlutter,
  "React.js": siReact,
  "Node.js": siNodedotjs,
  "React Native": siReact,
  FastAPI: siFastapi,
  NestJS: siNestjs,
  LangChain: siLangchain,
  LiveKit: siLivekit,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  JWT: siJsonwebtokens,
  Postman: siPostman,
  Swagger: siSwagger,
  Locust: siLocust,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Figma: siFigma,
  Qwen: siQwen,
};

const monogramOverrides: Record<string, string> = {
  "REST APIs": "API",
  Authentication: "AUTH",
  MobSF: "MSF",
  "Manual Testing": "QA",
  Groq: "GRQ",
  Llama: "LMA",
  CNN: "CNN",
  LLMs: "LLM",
  "Data Structures & Algorithms": "DSA",
  DBMS: "DB",
  "System Design": "SYS",
  "Computer Vision": "CV",
  "Image Classification": "IMG",
  RAG: "RAG",
  "AI Chatbots": "BOT",
  "TTS & Voice AI": "TTS",
};

function getMonogram(skill: string) {
  if (monogramOverrides[skill]) return monogramOverrides[skill];

  const words = skill.match(/[A-Za-z0-9]+/g) ?? [];
  if (words.length > 1) return words.map((word) => word[0]).join("").slice(0, 4).toUpperCase();
  return skill.replace(/[^A-Za-z0-9+#]/g, "").slice(0, 4).toUpperCase();
}

export default function SkillSymbol({ skill }: { skill: string }) {
  const icon = skillIcons[skill];
  const style = icon ? ({ "--skill-color": `#${icon.hex}` } as CSSProperties) : undefined;

  return (
    <li className="skill-symbol" style={style} tabIndex={0} aria-label={skill} title={skill}>
      <span className={`skill-symbol__mark ${icon ? "skill-symbol__mark--brand" : "skill-symbol__mark--mono"}`} aria-hidden="true">
        {icon ? (
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path d={icon.path} />
          </svg>
        ) : (
          getMonogram(skill)
        )}
      </span>
      <span className="skill-symbol__label" aria-hidden="true">{skill}</span>
    </li>
  );
}
