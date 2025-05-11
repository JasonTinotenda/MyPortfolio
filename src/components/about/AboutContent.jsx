// src/components/about/AboutContent.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bioData } from '../../data/bio';
import { useReducedMotion } from '../../hooks/useReducedMotion'; // Import the hook

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      // Optionally, make elements visible immediately if motion is reduced
      gsap.set(".about-animate-element", { opacity: 1, y: 0 });
      return; // Skip setting up animations
    }

    const ctx = gsap.context(() => {
      // Animate the profile image
      gsap.fromTo(
        ".profile-image-animate",
        { opacity: 0, scale: 0.8, x: -50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".profile-image-animate",
            start: "top 80%", // When top of trigger hits 80% of viewport height
            toggleActions: "play none none none", // Play once
          },
        }
      );

      // Animate each content block (paragraphs, headings, lists)
      // We give them a common class "about-animate-element"
      const elementsToAnimate = gsap.utils.toArray(".about-animate-element");
      elementsToAnimate.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              // markers: process.env.NODE_ENV === 'development', // Uncomment for debugging
            },
            delay: index * 0.1, // Slight stagger based on natural order
          }
        );
      });

      // Example: Animate values/icons if you have them
      gsap.fromTo(".value-item-animate",
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2, // Stagger animation for each value item
            ease: "circ.out",
            scrollTrigger: {
                trigger: ".values-container-animate", // Trigger when the container is in view
                start: "top 75%",
                toggleActions: "play none none none",
            }
        }
      );

    }, sectionRef); // Scope the context to this component

    // Cleanup function
    return () => ctx.revert(); // Important: cleans up animations and ScrollTriggers
  }, [prefersReducedMotion]); // Rerun effect if prefersReducedMotion changes

  const renderContentBlock = (block) => {
    const commonClasses = "about-animate-element mb-6 text-gray-700 dark:text-gray-300 leading-relaxed";
    switch (block.type) {
      case "paragraph":
        return <p key={block.id} className={`${commonClasses} text-lg`}>{block.content}</p>;
      case "heading":
        const HeadingTag = block.level || 'h3';
        return <HeadingTag key={block.id} className={`${commonClasses} text-2xl font-semibold text-gray-800 dark:text-white mt-8`}>{block.content}</HeadingTag>;
      case "list":
        return (
          <ul key={block.id} className={`${commonClasses} list-disc list-inside pl-4 space-y-2 text-lg`}>
            {block.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={sectionRef} className="container mx-auto py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Optional: Profile Image Section */}
        {bioData.profileImageUrl && (
          <div className="mb-12 flex flex-col md:flex-row items-center md:space-x-10">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl mb-6 md:mb-0 profile-image-animate">
              <img
                src={bioData.profileImageUrl}
                alt={bioData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              {/* You can put a brief intro or quote here, also animatable */}
              <h2 className="about-animate-element text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                A Bit About Me
              </h2>
              <p className="about-animate-element text-lg text-blue-600 dark:text-blue-400">
                Driven by curiosity and a passion for creating.
              </p>
            </div>
          </div>
        )}

        {bioData.aboutMeDetailed.map(renderContentBlock)}

        {/* Optional: Values Section */}
        {bioData.values && bioData.values.length > 0 && (
          <div className="mt-16 values-container-animate">
            <h3 className="about-animate-element text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {bioData.values.map(value => (
                <div key={value.id} className="value-item-animate p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
                  {/* Add icon rendering here if you have an icon system */}
                  {/* <IconComponent name={value.icon} className="mx-auto mb-4 text-blue-500 h-10 w-10" /> */}
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutContent;