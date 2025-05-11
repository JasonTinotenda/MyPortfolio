// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
//import { Helmet } from 'react-helmet-async';
import { pageVariants, pageTransition } from '../utils/animations'; // Your shared animation variants

const NotFoundPage = () => {
  return (
    <>
      {/*<Helmet>
        <title>Page Not Found | Jason Kufakwatenzi</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>*/}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants} // Use your standard page transition
        transition={pageTransition}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 py-16" // Adjust min-h based on nav/footer
      >
        <motion.h1
          className="text-6xl md:text-9xl font-bold text-blue-500 mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NotFoundPage;