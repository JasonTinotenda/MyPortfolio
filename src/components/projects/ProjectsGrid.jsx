// src/components/projects/ProjectsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData.js'; // Import your projects data
import SectionTitle from '../common/SectionTitle'; // Assuming you have this common component

const ProjectsGrid = () => {
  // Variants for the container to stagger children
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
        delayChildren: 0.3,   // Optional delay before first child starts
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle title="My Projects" subtitle="A selection of my recent work" />
        
        {projectsData.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            More projects coming soon!
          </p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible" // Animate when this grid comes into view
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of grid is visible
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;