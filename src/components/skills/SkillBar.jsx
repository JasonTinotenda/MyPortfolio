// src/components/skills/SkillBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// ... (rest of the SkillBar component code we generated before) ...

const SkillBar = ({ name, level, iconName }) => {
  const prefersReducedMotion = useReducedMotion();

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  return (
    <motion.div
      className="mb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-center justify-between mb-1">
        <motion.div className="flex items-center" variants={textVariants}>
          {iconName && <span className="mr-2 text-xl">🛠️</span>} {/* Temporary Icon */}
          <span className="text-base font-medium text-gray-800 dark:text-gray-200">
            {name}
          </span>
        </motion.div>
        <motion.span
          className="text-sm font-medium text-blue-700 dark:text-blue-400"
          variants={textVariants}
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 sm:h-3">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-600 dark:to-teal-500 h-2.5 sm:h-3 rounded-full"
          variants={barVariants}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;