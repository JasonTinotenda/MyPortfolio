// src/pages/ProjectsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
//import { Helmet } from 'react-helmet-async';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { pageVariants, pageTransition } from '../utils/animations';

const ProjectsPage = () => {
  {/*const pageTitle = "My Projects | Jason Kufakwatenzi";
  const pageDescription = "Explore a selection of projects by Jason Kufakwatenzi, showcasing skills in React, Node.js, Django, and modern web development technologies.";
*/}
  return (
    <>
      {/*<Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/projects" /> 
        <meta property="og:image" content="https://yourdomain.com/assets/images/og-projects.png" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/assets/images/twitter-projects.png" />
      </Helmet>*/}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-gray-50 dark:bg-gray-900"
      >
        <ProjectsGrid />
      </motion.div>
    </>
  );
};

export default ProjectsPage;