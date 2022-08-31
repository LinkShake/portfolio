import { Fragment } from "react";
import InitialPage from "../components/home/InitialPage";
import ProjectsReference from "../components/home/ProjectsReference";
import SkillsReference from "../components/home/SkillsReference";
import LazyLoad from "react-lazyload";
import Contacts from "../components/home/Contacts";

export default function Home() {
  return (
    <Fragment>
      <InitialPage />
      <LazyLoad offset={0}>
        <SkillsReference />
      </LazyLoad>
      <LazyLoad offset={0}>
        <ProjectsReference />
      </LazyLoad>
      <LazyLoad offset={0}>
        <Contacts />
      </LazyLoad>
    </Fragment>
  );
}
