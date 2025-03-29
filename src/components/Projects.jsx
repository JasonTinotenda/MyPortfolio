import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import foodDelivery from "../assets/projects/foodDelivery.PNG";
import paozTrailblazers from "../assets/projects/paozTrailblazers.PNG";;
import artPortfolio from "../assets/projects/artPortfolio.PNG";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={foodDelivery}
          title="Food Delivery"
          link="https://practicefooddelivery.vercel.app/"
        />
        <ProjectCard
          img={artPortfolio}
          title="PAOZ Trailblazers"
          link="https://paoztrailblazers.vercel.app/"
        />
        <ProjectCard
          img={paozTrailblazers}
          title="Art Portfolio"
          link="https://shalom-kufakwatenzi.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
