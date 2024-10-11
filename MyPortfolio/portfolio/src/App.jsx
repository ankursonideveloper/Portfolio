import "./index.css";
import ProfilePhoto from "./assets/ProfilePhoto.jpg";
import Header from "./components/Header";
import Section from "./components/Section";
import Skill from "./components/Skill";
import SkillChildren from "./components/SkillChildren";
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
          {aboutmeChild}
        </Section>
        <Section Icon={Brain} sectionName="Skills">
          <SkillChildren></SkillChildren>
        </Section>
        <Section Icon={GraduationCap} sectionName="Education">
          {aboutmeChild}
        </Section>
        <Section Icon={Heart} sectionName="Hobbies & Interests">
          {aboutmeChild}
        </Section>
        <Section Icon={Medal} sectionName="Extracurricular Activities">
          {aboutmeChild}
        </Section>
        <Section Icon={UserRoundSearch} sectionName="Contact & Social Media">
          {aboutmeChild}
        </Section>
      </div>
    </>
  );
}

export default App;
