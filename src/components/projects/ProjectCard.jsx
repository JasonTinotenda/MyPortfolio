// src/components/projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Example icons

const ProjectCard = ({ project, index }) => {
  const { title, description, imageUrl, tags, liveLink, repoLink } = project;

  // Variants for card entry animation (can be customized)
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        // delay: index * 0.1, // Stagger delay if applied here instead of parent
      },
    },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      variants={cardVariants}
      // `initial`, `animate` will be controlled by the parent `ProjectsGrid` for staggering
      // or use `initial="hidden"` `whileInView="visible"` `viewport={{ once: true }}` for individual scroll triggering
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          // Add group-hover to the parent if you want the image to zoom on card hover
        />
        {/* Optional: Overlay on image hover */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {/* Could put view project text or icons here */}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 flex-grow">
          {description.substring(0, 120)}{description.length > 120 && '...'} {/* Truncate description */}
        </p>

        <div className="mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex justify-start space-x-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 flex items-center"
              aria-label={`View live demo of ${title}`}
            >
              <FiExternalLink className="mr-2" size={20}/> Live Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center"
              aria-label={`View GitHub repository for ${title}`}
            >
              <FiGithub className="mr-2" size={20}/> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;