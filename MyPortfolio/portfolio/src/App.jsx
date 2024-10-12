import "./index.css";
import ProfilePhoto from "./assets/ProfilePhoto.jpg";
import Header from "./components/Header";
import Section from "./components/Section";
import SkillChildren from "./components/SkillChildren";
import Project from "./components/Project";
import Education from "./components/Education";
import List from "./components/List";

import {
  UserRound,
  FlaskConical,
  BriefcaseBusiness,
  Brain,
  GraduationCap,
  Heart,
  Medal,
  UserRoundSearch,
} from "lucide-react";
import ProjectSkill from "./components/ProjectSkill";

function App() {
  let aboutmeChild = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque
      eum accusantium consequatur! Tenetur et explicabo porro incidunt
      recusandae molestias sint beatae! Veritatis libero dolore quam quia
      itaque. Modi, doloribus.
    </p>
  );
  return (
    <>
      <div className="w-2/3 mx-auto mt-6 rounded-lg border-1 bg-slate-100 shadow-xl">
        <Header
          name="Ankur Soni"
          designation="Full Stack Developer"
          photoSrc={ProfilePhoto}
        ></Header>
        <Section Icon={UserRound} sectionName="About me">
          {aboutmeChild}
        </Section>
        <Section Icon={FlaskConical} sectionName="Experience">
          {aboutmeChild}
        </Section>
        <Section Icon={BriefcaseBusiness} sectionName="Projects">
          <Project
            projectTitle="E Commerce App"
            projectDescription="hgfhgdf fdhjs fghgdf fgkdsgfk fhdsfh fkjdsf "
            projectSkills={["Java", "JavaScript", "Python", "NodeJS"]}
          ></Project>
          <Project
            projectTitle="HealthCare App"
            projectDescription="hgfhgdf fdhjs fghgdf fgkdsgfk fhdsfh fkjdsf fdfd fdfdf fdfd fdf fdf fdf dfdf "
            projectSkills={[
              "PostgreSQL",
              "Salesforce",
              "Tableau",
              "NodeJS",
              "JavaScript",
            ]}
          ></Project>
        </Section>
        <Section Icon={Brain} sectionName="Skills">
          <SkillChildren></SkillChildren>
        </Section>
        <Section Icon={GraduationCap} sectionName="Education">
          <Education
            title="Bachelor of Technology in Electronics & Communication"
            description="Institute of Engineering and Technology, 2014-2018"
          ></Education>
          <Education
            title="Bachelor of Technology in Electronics & Communication"
            description="Institute of Engineering and Technology, 2014-2018"
          ></Education>
        </Section>
        <Section Icon={Heart} sectionName="Hobbies & Interests">
          <List
            list={["Reading Books", "Playing Cricket", "Watching Podcast"]}
          ></List>
        </Section>
        <Section Icon={Medal} sectionName="Extracurricular Activities">
          <List
            list={["Reading Books", "Playing Cricket", "Watching Podcast"]}
          ></List>
        </Section>
        <Section Icon={UserRoundSearch} sectionName="Contact & Social Media">
          {aboutmeChild}
        </Section>
      </div>
    </>
  );
}

export default App;
