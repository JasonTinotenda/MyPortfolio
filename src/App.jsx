// src/App.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AnimatePresence } from 'framer-motion'; // For page transitions

// Lazy load pages for better initial load time
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage')); // Optional

const PageLoader = () => ( // Simple loader for Suspense fallback
  <div className="flex justify-center items-center h-screen w-screen fixed inset-0 bg-white dark:bg-gray-900 z-[100]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation(); // Get location here if App is wrapped by Router

  return (
    <> {/* Use Fragment if Router is outside App */}
      <ScrollToTop />
      <Navbar />
      <main className="pt-16"> {/* Add padding to main to offset fixed navbar height */}
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait"> {/* 'wait' ensures exit animation completes before enter */}
            <Routes location={location} key={location.pathname}> {/* Key is important for AnimatePresence */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App; 