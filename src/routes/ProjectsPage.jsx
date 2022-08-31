import { Fragment } from "react";
import { PROJECTS_ARR } from "../shared/config";
import ProjectCard from "../components/pages/projects/ProjectCard";
import TopBanner from "../components/pages/skills/TopBanner";
import "../style/ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <Fragment>
      <TopBanner />
      <div className="projects-box">
        {PROJECTS_ARR.map(project => {
          return <ProjectCard project={project} key={project.projectName} />;
        })}
      </div>
    </Fragment>
  );
}
