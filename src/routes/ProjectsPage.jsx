import { Fragment, useEffect } from "react";
import { PROJECTS_ARR } from "../shared/config";
import ProjectCard from "../components/pages/projects/ProjectCard";
import TopBanner from "../components/pages/common/TopBanner";
import "../style/ProjectsPage.css";
import Footer from "../components/global/Footer";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <TopBanner />
      <div className="projects-box">
        {PROJECTS_ARR.map(project => {
          return <ProjectCard project={project} key={project.projectName} />;
        })}
      </div>
      <Footer />
    </Fragment>
  );
}
