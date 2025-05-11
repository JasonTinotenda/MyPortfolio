// src/data/skillsData.js

// You can use react-icons or import your own SVGs for icons
// Example: import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
// import { SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si';

export const skillsData = [
    {
      id: "s1",
      name: "React.js",
      level: 90, // Percentage
      // icon: <FaReact size={24} className="text-blue-500" />, // Example using react-icons
      iconName: "ReactIcon", // Or a string name if you have an icon mapping component
      category: "Frontend",
    },
    {
      id: "s2",
      name: "JavaScript (ES6+)",
      level: 90,
      // icon: <SiJavascript size={24} className="text-yellow-500" />,
      iconName: "JavaScriptIcon",
      category: "Frontend",
    },
    {
      id: "s3",
      name: "Tailwind CSS",
      level: 85,
      // icon: <SiTailwindcss size={24} className="text-teal-500" />,
      iconName: "TailwindIcon",
      category: "Frontend",
    },
    {
      id: "s4",
      name: "Framer Motion",
      level: 80,
      iconName: "FramerMotionIcon", // You might need to create a custom SVG for this
      category: "Animation",
    },
    {
      id: "s5",
      name: "GSAP",
      level: 75,
      iconName: "GSAPIcon", // Custom SVG
      category: "Animation",
    },
    {
      id: "s6",
      name: "Node.js",
      level: 70,
      // icon: <FaNodeJs size={24} className="text-green-500" />,
      iconName: "NodeJsIcon",
      category: "Backend",
    },
    {
      id: "s7",
      name: "Python",
      level: 70,
      // icon: <FaPython size={24} className="text-blue-400" />,
      iconName: "PythonIcon",
      category: "Backend",
    },
    {
      id: "s8",
      name: "Django",
      level: 65,
      iconName: "DjangoIcon", // Custom SVG or from a library like Devicons
      category: "Backend",
    },
    {
      id: "s9",
      name: "PostgreSQL",
      level: 60,
      // icon: <SiPostgresql size={24} className="text-indigo-500" />,
      iconName: "PostgresIcon",
      category: "Databases",
    },
    {
      id: "s10",
      name: "MongoDB",
      level: 60,
      // icon: <SiMongodb size={24} className="text-green-600" />,
      iconName: "MongoDBIcon",
      category: "Databases",
    },
    {
      id: "s11",
      name: "Git & GitHub",
      level: 90,
      iconName: "GitIcon",
      category: "Tools",
    },
    // Add more skills (HTML, CSS, Redux, Context API, UI/UX, CI/CD) as needed
  ];
  
  // Optional: Group skills by category for display
  export const skillCategories = [
    "Frontend",
    "Backend",
    "Databases",
    "Animation",
    "Tools",
    "Other", // For skills that don't fit neatly
  ];