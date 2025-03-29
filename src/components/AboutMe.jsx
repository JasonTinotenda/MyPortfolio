import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a passionate Fullstack developer with a strong foundation in web development and a keen interest in creating dynamic and responsive applications. 
          I am eager to contribute my skills and knowledge to a dynamic team while continuing to grow as a developer.
          I am proficient in Python, Django, JavaScript, React, Node.js, Express, and MongoDB, and I am always eager to learn new technologies and frameworks. 
          I am a quick learner and a team player, and I thrive in collaborative environments where I can share ideas and learn from others.          
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
