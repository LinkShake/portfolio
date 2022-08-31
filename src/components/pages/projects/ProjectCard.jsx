import "../../../style/ProjectsPage.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.projectName}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        {project.githubRepo && (
          <a href={project.githubRepo} target="_blank" rel="noreferrer">
            Repo
          </a>
        )}
        {project.liveSite && (
          <a href={project.liveSite} target="_blank" rel="noreferrer">
            Live site
          </a>
        )}
      </div>
    </div>
  );
}
