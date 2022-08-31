import TopBanner from "../components/pages/common/TopBanner";
import SkillsContainer from "../components/pages/skills/SkillsContainer";
import { Fragment, useLayoutEffect } from "react";
import { PROGRAMMING_LANGUAGES, TECHNOLOGIES } from "../shared/config";
import Footer from "../components/global/Footer";
import LazyLoad from "react-lazyload";

export default function SkillsPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <LazyLoad offset={0}>
      <Fragment>
        <TopBanner />
        <div className="skills-box">
          <SkillsContainer
            skillsList={PROGRAMMING_LANGUAGES}
            skillsTitle="Languages"
          />
          <SkillsContainer
            skillsList={TECHNOLOGIES}
            skillsTitle="Technologies"
          />
        </div>
        <Footer />
      </Fragment>
    </LazyLoad>
  );
}
