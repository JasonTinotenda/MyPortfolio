// src/components/skills/SkillsDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import SectionTitle from '../common/SectionTitle';
import { skillsData, skillCategories } from '../../data/skillsData';

const SkillsDisplay = () => {
  // Group skills by category
  const groupedSkills = skillCategories.reduce((acc, category) => {
    const categorySkills = skillsData.filter(
      (skill) => skill.category === category || (category === "Other" && !skillCategories.includes(skill.category))
    );
    if (categorySkills.length > 0) {
      acc[category] = categorySkills;
    }
    return acc;
  }, {});

  const containerVariants = {
    hidden: {}, // No specific animation for the container itself here
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger SkillBar animations if they are direct children
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="My Technical Skills"
          subtitle="Technologies I work with"
        />

        {Object.keys(groupedSkills).length === 0 && skillsData.length > 0 ? (
          // Fallback if no categories defined but skills exist
          <motion.div
            className="max-w-3xl mx-auto mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Animate when component mounts (or use whileInView if section is far down)
          >
            {skillsData.map((skill) => (
              <SkillBar
                key={skill.id}
                name={skill.name}
                level={skill.level}
                iconName={skill.iconName}
              />
            ))}
          </motion.div>
        ) : (
          Object.entries(groupedSkills).map(([category, skillsInCategory], catIndex) => (
            <motion.div
              key={category}
              className="mb-12"
              initial={{ opacity: 0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6 sm:mb-8 text-center sm:text-left">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"> {/* Using grid for two columns */}
                {skillsInCategory.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                    iconName={skill.iconName}
                  />
                ))}
              </div>
            </motion.div>
          ))
        )}
        {skillsData.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-12">
                Skills section is currently being updated.
            </p>
        )}
      </div>
    </section>
  );
};

export default SkillsDisplay;