import Skill from "./Skill";

function SkillChildren() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "Salesforce",
    "Tableau",
    "Python",
    "Git",
    "Bitbucket",
    "AWS",
    "Heroku",
  ];
  return (
    <div className="flex flex-wrap gap-y-1 mt-2 px-1">
      {skills.map((item) => {
        return <Skill skill={item}></Skill>;
      })}
    </div>
  );
}

export default SkillChildren;
