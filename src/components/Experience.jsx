import Title from "./Title";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Interact Health PRO"
          location={"Ontario, Canada"}
          subTitle="Fullstack Developer Mar 2025 - Present"          
          description=" Develop & Optimize Web Applications: Assist in building responsive and interactive web applications using React.js for the front end and Node.js with Express.js for the back end. Work on writing clean, reusable code to enhance application performance and maintainability.
          Collaborate on UI/UX & Feature Development: Work closely with designers, product managers, and senior developers to understand project requirements and deliver intuitive, user-friendly interfaces. Contribute to feature development by implementing dynamic UI components and improving user experience.
          Integrate Databases & External APIs: Support backend development by integrating MongoDB databases, handling data models, and ensuring efficient API communication. Learn to implement authentication, authorization, and secure data handling using JWT and OAuth.
          Testing, Debugging & Code Optimization: Participate in testing and debugging processes to identify and resolve issues in both front-end and back-end code. Use tools like Postman, Jest, and Chrome DevTools to ensure smooth application functionality and optimal performance.
          Learn & Implement New Technologies: Stay updated with the latest advancements in MERN stack development, including new frameworks, libraries, and best coding practices. Apply emerging technologies to improve application efficiency and contribute to a culture of continuous learning."  
        />
        <ExperienceCard
          title="BlitzTech Electronics"
          location={"Harare, Zimbabwe"}
          subTitle="Junior Developer Mar 2024 - Feb 2025"
          description="Assist in Software Architecture & Design: Work alongside senior developers to understand and implement scalable software architectures. Participate in design discussions, document system structures, and gain insights into best practices for building robust applications.
          Develop & Optimize Web Applications: Build interactive user interfaces using React, ensuring responsiveness and smooth user experience. Support backend development with Django, writing clean and efficient code to improve application performance.
          Implement & Manage RESTful APIs: Assist in developing and managing RESTful APIs to enable seamless data exchange between front-end and back-end systems. Ensure API security, scalability, and integration with third-party services.
          Deploy & Maintain Cloud Applications: Learn to deploy applications on cloud platforms like Vercel and Digital Ocean. Monitor and troubleshoot deployments, ensuring high availability and performance.
          Version Control & Continuous Improvement: Use Git and GitHub for source code management. Participate in code reviews, follow best coding practices, and contribute to improving software quality."
        />
      </div>
    </div>
  );
};

export default Experience;
