// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AboutContent from '../components/about/AboutContent';
import { pageVariants, pageTransition } from '../utils/animations';
// import SectionTitle from '../components/common/SectionTitle'; // If you want a title above AboutContent

const AboutPage = () => {
  const pageTitle = "About Me | Jason Kufakwatenzi";
  const pageDescription = "Learn more about Jason Kufakwatenzi, a Full Stack Developer with a passion for AI and sports technology. Discover my journey, philosophy, and core values.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" /> {/* Replace with your domain */}
        <meta property="og:image" content="https://yourdomain.com/assets/images/og-about.png" /> {/* Specific OG image for about page */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/assets/images/twitter-about.png" />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-gray-50 dark:bg-gray-900" // Apply bg here if not on root
      >
        {/* <SectionTitle title="About Me" subtitle="Get to know me better" /> */}
        <AboutContent />
      </motion.div>
    </>
  );
};

export default AboutPage;