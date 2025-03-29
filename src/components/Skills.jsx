import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Python"
          link="https://docs.python.org/"
        />
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="React js/native" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="Redux Toolkit" link="" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        <SkillsInput
          title="Django"
          link="https://www.djangoproject.com/"
        />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput
          title="Django Rest Framework"
          link="https://www.django-rest-framework.org/"
        />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Swagger" link="https://swagger.io/" />
        <SkillsInput title="Postman" link="https://www.postman.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
      </div>
    </div>
  );
};

export default Skills;
