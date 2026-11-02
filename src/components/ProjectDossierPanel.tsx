import { ExternalLink, Github, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/data/portfolio";

export default function ProjectDossierPanel({ project, open, onOpenChange }: { project: Project | null; open: boolean; onOpenChange: (open: boolean) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="dossier-dialog max-w-4xl max-h-[88dvh] overflow-y-auto p-0">
    {project && <>
      <div className="dossier-dialog__header"><div><p className="record-label">PROJECT_RECORD / {project.id.toUpperCase()}</p><DialogTitle className="dossier-dialog__title">{project.title}</DialogTitle><DialogDescription>{project.event}</DialogDescription></div><DialogClose className="icon-control" aria-label="Close project dossier"><X aria-hidden="true" /></DialogClose></div>
      {project.images && <div className="project-gallery">{project.images.map((image, index) => <img key={image} src={image} alt={`${project.title} interface ${index + 1}`} loading="lazy" />)}</div>}
      <div className="dossier-dialog__body"><p className="project-description">{project.description}</p>{project.achievements.length > 0 && <div><h3>Key achievements</h3><ul className="record-list">{project.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div>}<div><h3>Technology stack</h3><div className="chip-row">{project.techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div><div className="project-actions">{project.githubLink && <a className="action-link" href={project.githubLink} target="_blank" rel="noreferrer"><Github aria-hidden="true" />View code</a>}{project.liveLink && <a className="action-link action-link--primary" href={project.liveLink} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />Live demo</a>}</div></div>
    </>}
  </DialogContent></Dialog>;
}
