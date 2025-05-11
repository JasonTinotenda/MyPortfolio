// src/pages/SkillsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
//import { Helmet } from 'react-helmet-async';
import SkillsDisplay from '../components/skills/SkillsDisplay';
import { pageVariants, pageTransition } from '../utils/animations';

const SkillsPage = () => {
  {/*const pageTitle = "Technical Skills | Jason Kufakwatenzi";
  const pageDescription = "Discover the technical skills of Jason Kufakwatenzi, including expertise in frontend (React, JavaScript), backend (Node.js, Django, Python), databases, and animation libraries.";
*/}
  return (
    <>
      {/*<Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/skills" />
        <meta property="og:image" content="https://yourdomain.com/assets/images/og-skills.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/assets/images/twitter-skills.png" />
      </Helmet>*/}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-gray-50 dark:bg-gray-900"
      >
        <SkillsDisplay />
      </motion.div>
    </>
  );
};

export default SkillsPage;