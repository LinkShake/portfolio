import { TopBanner } from "../components/pages/common/TopBanner";
import { SkillsCard } from "../components/pages/skills/SkillsCard";
import { Fragment, useLayoutEffect } from "react";
import { SKILLS_LIST } from "../shared/config";
import { Footer } from "../components/global/Footer";
import "../style/TopBanner.css";

export const SkillsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <TopBanner />
      <div className="skills-box">
        {SKILLS_LIST.map(skill => {
          return <SkillsCard skill={skill} key={skill.technologyName} />;
        })}
      </div>
      <Footer />
    </Fragment>
  );
};
