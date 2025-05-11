// src/components/common/AnimatedText.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({
  text,
  el: Wrapper = 'p', // Allow custom wrapper element (h1, p, etc.)
  className,
  stagger = 0.03,   // Default stagger time
  delay = 0,        // Default delay for the whole animation
  once = true,      // Animate only once
}) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: 'inline-block', overflow: 'hidden' }} // To prevent layout shift with y:20
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Use whileInView for scroll-triggered animation
        viewport={{ once }}   // Controls when the animation triggers based on viewport
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: 'inline-block' }} // Important for individual letter transform
          >
            {letter === ' ' ? '\u00A0' : letter} {/* Preserve spaces */}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;