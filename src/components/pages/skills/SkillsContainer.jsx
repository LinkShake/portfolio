export default function SkillsContainer({ skillsList, skillsTitle }) {
  return (
    <div className="skills-container">
      <div className="title-container">
        <span className="title">{skillsTitle}</span>
      </div>
      {skillsList.map(skill => {
        return <li key={skill}>{skill}</li>;
      })}
    </div>
  );
}
