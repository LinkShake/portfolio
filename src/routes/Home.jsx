import { Fragment } from "react";
import { InitialPage } from "../components/home/InitialPage";
import { ProjectsReference } from "../components/home/ProjectsReference";
import { SkillsReference } from "../components/home/SkillsReference";
import { Contacts } from "../components/home/Contacts";

export const Home = () => {
  return (
    <Fragment>
      <InitialPage />
      <SkillsReference />
      <ProjectsReference />
      <Contacts />
    </Fragment>
  );
};
