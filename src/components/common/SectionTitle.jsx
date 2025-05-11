// src/components/common/SectionTitle.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <motion.div
      className={`text-center mb-10 sm:mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {subtitle && (
        <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1 sm:mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-3 sm:mt-4 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
    </motion.div>
  );
};

export default SectionTitle;