// src/pages/ContactPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
//import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/contact/ContactForm';
import SectionTitle from '../components/common/SectionTitle';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { pageVariants, pageTransition } from '../utils/animations';

const ContactPage = () => {
  {/*const pageTitle = "Contact Me | Jason Kufakwatenzi";
  const pageDescription = "Get in touch with Jason Kufakwatenzi to discuss projects, collaborations, or any inquiries. Reach out via the contact form, email, or social media.";
  */}
  const email = "jasontinotenda2@gmail.com";
  const linkedinUser = "jasonkufakwatenzi";
  const githubUser = "jasonkufakwatenzi";

  return (
    <>
      {/*<Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" /> 
        <meta property="og:image" content="https://yourdomain.com/assets/images/og-contact.png" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/assets/images/twitter-contact.png" />
      </Helmet>*/}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16"
      >
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Get In Touch"
            subtitle="Let's connect and discuss your next project"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 sm:mt-16 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <ContactForm />
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Other Ways to Connect
              </h3>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <motion.a
                  href={`mailto:${email}`}
                  className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiMail className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  <span>{email}</span>
                </motion.a>
                <motion.a
                  href={`https://linkedin.com/in/${linkedinUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiLinkedin className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn Profile</span>
                </motion.a>
                <motion.a
                  href={`https://github.com/${githubUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FiGithub className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-200" />
                  <span>GitHub Profile</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;