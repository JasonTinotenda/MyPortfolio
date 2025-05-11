// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import AnimatedText from '../common/AnimatedText';
import { bioData } from '../../data/bio'; // Import your bio data

// Optional: Define a Button component or use Tailwind directly
const AnimatedButton = ({ children, to, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }} // Delay after text
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      className={`inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  </motion.div>
);

const HeroSection = () => {
  const title = `Hi, I'm ${bioData.name}.`;
  // Pick one title or implement a cycling effect later if desired
  const subtitle = bioData.titles[0];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Main Title - Name */}
      <AnimatedText
        text={title}
        el="h1"
        className="mb-4 text-5xl font-bold md:text-7xl text-gray-800 dark:text-white"
        stagger={0.05}
        delay={0.2}
      />

      {/* Subtitle - Role */}
      <AnimatedText
        text={subtitle}
        el="h2"
        className="mb-6 text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium"
        stagger={0.04}
        delay={0.8} // Start after the main title has animated a bit
      />

      {/* Short Bio/Intro */}
      <motion.p
        className="max-w-2xl mb-8 text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }} // Delay after subtitle
      >
        {bioData.shortIntro}
      </motion.p>

      {/* Call to Action Button */}
      <AnimatedButton to={bioData.cta.link}>
        {bioData.cta.text}
      </AnimatedButton>
    </section>
  );
};

export default HeroSection;