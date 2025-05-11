// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from '../common/AnimatedText'; // Assuming this is a well-built component
import { bioData } from '../../data/bio';

// Material Design Inspired Button
// More closely aligns with Material Design's "Filled Button"
// https://m3.material.io/components/buttons/specs#28543f39-c07c-4f5f-b9cf-3f45111818f1
const MaterialAnimatedButton = ({ children, to, className, icon: IconComponent, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.5, ease: "circOut" }} // Slightly later delay, smoother ease
    whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }} // Subtle scale and elevation
    whileTap={{ scale: 0.98, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)" }}
  >
    <Link
      to={to}
      className={`
        inline-flex items-center justify-center
        px-6 py-3  /* Standard Material padding (adjust if too large/small) */
        text-sm sm:text-base font-medium /* Material: Label Large */
        tracking-wide /* Material buttons often have slight letter spacing */
        rounded-full /* Material often uses full radius for prominent CTAs or specific shapes */
        text-white /* On Primary Color */
        bg-blue-600 /* Primary Color */
        hover:bg-blue-700 /* Darken on hover */
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 /* Accessibility */
        transition-all duration-200 ease-in-out
        shadow-md hover:shadow-lg /* Elevation */
        ${className}
      `}
      {...props}
    >
      {IconComponent && <IconComponent className="w-5 h-5 mr-2" />}
      {children}
    </Link>
  </motion.div>
);

const HeroSection = () => {
  const title = `Hi, I'm ${bioData.name}.`;
  // For a senior portfolio, explicitly stating the primary role is strong.
  // If you want cycling, ensure it's smooth and doesn't cause layout shifts.
  const subtitle = bioData.titles[0] || "A Passionate Developer"; // Fallback

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
        delayChildren: 0.1,   // Delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 dark:bg-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Title - Name */}
      {/* Material Design: Display Medium/Large */}
      <motion.div variants={itemVariants}>
        <AnimatedText
          text={title}
          el="h1"
          className="mb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100"
          stagger={0.03} // Faster character stagger for impact
          delay={0} // Handled by parent stagger
        />
      </motion.div>

      {/* Subtitle - Role */}
      {/* Material Design: Headline Medium/Large */}
      <motion.div variants={itemVariants}>
        <AnimatedText
          text={subtitle}
          el="h2"
          className="mb-6 text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold"
          stagger={0.02}
          delay={0} // Handled by parent stagger
        />
      </motion.div>

      {/* Short Bio/Intro */}
      {/* Material Design: Body Large */}
      <motion.p
        variants={itemVariants}
        className="max-w-xl md:max-w-2xl mb-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
      >
        {bioData.shortIntro}
      </motion.p>

      {/* Call to Action Button */}
      {/* Button delay handled by its own component, but will start after parent's itemVariants are done */}
      <MaterialAnimatedButton to={bioData.cta.link || "#projects"}>
        {bioData.cta.text || "Explore My Work"}
      </MaterialAnimatedButton>
    </motion.section>
  );
};

export default HeroSection;