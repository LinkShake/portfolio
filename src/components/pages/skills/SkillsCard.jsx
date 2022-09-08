import "../../../style/ProjectsSkillsPage.css";

export const SkillsCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h2>{skill.technologyName}</h2>
      <p>{skill.technologyDescription}</p>
      <div className="skill-links">
        {skill.resources && (
          <a href={skill.resources} target="_blank" rel="noreferrer">
            Resources &rarr;
          </a>
        )}
      </div>
    </div>
  );
};
