import TopBanner from "../components/pages/common/TopBanner";
import SkillsContainer from "../components/pages/skills/SkillsContainer";
import { Fragment, useLayoutEffect } from "react";
import { SKILLS_LIST } from "../shared/config";
import Footer from "../components/global/Footer";
import LazyLoad from "react-lazyload";
import "../style/TopBanner.css";

export default function SkillsPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <LazyLoad offset={0}>
      <Fragment>
        <TopBanner />
        <div className="skills-box">
          <SkillsContainer skillsList={SKILLS_LIST} />
        </div>
        <Footer />
      </Fragment>
    </LazyLoad>
  );
}
