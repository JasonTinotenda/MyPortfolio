// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import { pageVariants, pageTransition } from '../utils/animations'; // Assuming you moved these

const HomePage = () => {
  const siteTitle = "Jason Kufakwatenzi | Full Stack Developer";
  const pageDescription = "Portfolio of Jason Kufakwatenzi, a Full Stack Developer and AI Generalist specializing in React, Node.js, and crafting immersive digital experiences.";

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" /> {/* Replace with your actual domain */}
        <meta property="og:image" content="https://yourdomain.com/assets/images/og-image.png" /> {/* Replace with a link to a preview image */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/assets/images/twitter-card-image.png" />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <HeroSection />
        {/* Other sections */}
      </motion.div>
    </>
  );
};

export default HomePage;