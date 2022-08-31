import TopBanner from "../components/pages/skills/TopBanner";
import SkillsContainer from "../components/pages/skills/SkillsContainer";
import { Fragment, useLayoutEffect } from "react";
import { PROGRAMMING_LANGUAGES, TECHNOLOGIES } from "../shared/config";

export default function SkillsPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <TopBanner />
      <div className="skills-box">
        <SkillsContainer
          skillsList={PROGRAMMING_LANGUAGES}
          skillsTitle="Languages"
        />
        <SkillsContainer skillsList={TECHNOLOGIES} skillsTitle="Technologies" />
      </div>
    </Fragment>
  );
}
