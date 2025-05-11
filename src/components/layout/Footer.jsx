// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'; // Example icons

const socialLinks = [
  {
    href: 'https://github.com/jasonkufakwatenzi',
    label: 'GitHub',
    icon: <FiGithub className="w-5 h-5" />,
  },
  {
    href: 'https://linkedin.com/in/jasonkufakwatenzi',
    label: 'LinkedIn',
    icon: <FiLinkedin className="w-5 h-5" />,
  },
  {
    href: 'mailto:jasontinotenda2@gmail.com',
    label: 'Email',
    icon: <FiMail className="w-5 h-5" />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8"
      variants={footerVariants}
      initial="initial"
      whileInView="animate" // Animate when footer comes into view
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-sm">
          © {currentYear} Jason Kufakwatenzi. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with React, Tailwind CSS, Framer Motion & GSAP.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;