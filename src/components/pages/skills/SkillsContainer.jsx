import ReactPath from "../../../icons/skills-icons/logo-react.svg";
import HtmlPath from "../../../icons/skills-icons/logo-html5.svg";
import CssPath from "../../../icons/skills-icons/logo-css3.svg";
import JsPath from "../../../icons/skills-icons/logo-javascript.svg";
import "../../../style/SkillsPage.css";

export default function SkillsContainer({ skillsList }) {
  return (
    <div className="skills-container">
      {skillsList.map(skill => {
        switch (skill) {
          case "html5":
            return (
              <img
                src={HtmlPath}
                alt={`${skill}-logo`}
                className="skill-logo"
                key={skill}
              />
            );
          case "css3":
            return (
              <img
                src={CssPath}
                alt={`${skill}-logo`}
                className="skill-logo"
                key={skill}
              />
            );
          case "javascript":
            return (
              <img
                src={JsPath}
                alt={`${skill}-logo`}
                className="skill-logo"
                key={skill}
              />
            );
          case "react":
            return (
              <img
                src={ReactPath}
                alt={`${skill}-logo`}
                className="skill-logo"
                key={skill}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
