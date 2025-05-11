// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'; // Example icons
// import { useReducedMotion } from '../../hooks/useReducedMotion'; // If needed for complex nav animations

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

// Dummy theme toggle functions - implement real logic
const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return [theme, toggleTheme];
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // const prefersReducedMotion = useReducedMotion();
  const [theme, toggleTheme] = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: '0%', transition: { type: 'spring', stiffness: 260, damping: 30 } },
  };

  const linkItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };


  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${isScrolled || isOpen ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent dark:bg-transparent'}`}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
            Jason K. {/* Or full name / logo component */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors
                   ${isActive
                    ? 'bg-blue-500 text-white dark:bg-blue-700'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg pb-3"
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.custom
                  key={link.to}
                  component={NavLink} // Using custom prop with NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors
                     ${isActive
                      ? 'bg-blue-500 text-white dark:bg-blue-700'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                  }
                  variants={linkItemVariants}
                  // Staggering directly in map might be tricky without a parent motion component for links
                  // So the variant itself might need a delay or use a parent motion.div for the list
                  // For simplicity, let's apply a slight delay in transition
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.custom>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;