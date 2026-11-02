import type { CSSProperties } from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import { siCodechef, siGeeksforgeeks, siGithub, siLeetcode, siPinterest, siX } from "simple-icons";
import type { ContactLink } from "@/data/portfolio";

type SocialVisual = { icon?: SimpleIcon; color: string; contrastPlate?: boolean };

const socialVisuals: Record<string, SocialVisual> = {
  GitHub: { icon: siGithub, color: `#${siGithub.hex}`, contrastPlate: true },
  LinkedIn: { color: "#0A66C2" },
  LeetCode: { icon: siLeetcode, color: `#${siLeetcode.hex}` },
  CodeChef: { icon: siCodechef, color: `#${siCodechef.hex}` },
  "X (Twitter)": { icon: siX, color: `#${siX.hex}`, contrastPlate: true },
  GeeksforGeeks: { icon: siGeeksforgeeks, color: `#${siGeeksforgeeks.hex}` },
  Pinterest: { icon: siPinterest, color: `#${siPinterest.hex}` },
};

export default function SocialLinkCard({ contact }: { contact: ContactLink }) {
  const visual = socialVisuals[contact.label];
  const style = ({ "--social-color": visual?.color ?? "var(--signal)" } as CSSProperties);

  return (
    <a className="social-card" style={style} href={contact.link} target="_blank" rel="noreferrer" aria-label={`${contact.label}: ${contact.value}`}>
      <span className={`social-card__logo ${visual?.contrastPlate ? "social-card__logo--plate" : ""} ${contact.label === "LinkedIn" ? "social-card__logo--linkedin" : ""}`} aria-hidden="true">
        {contact.label === "LinkedIn" ? <Linkedin /> : visual?.icon ? <svg viewBox="0 0 24 24" focusable="false"><path d={visual.icon.path} /></svg> : null}
      </span>
      <span className="social-card__copy"><span>{contact.label}</span><strong>{contact.value}</strong></span>
      <ExternalLink className="social-card__external" aria-hidden="true" />
    </a>
  );
}
