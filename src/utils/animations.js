// src/utils/animations.js
export const pageVariants = {
    initial: { opacity: 0, x: -80 }, // Slide in from left slightly
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 80 },   // Slide out to right slightly
  };
  
  export const pageTransition = {
    type: 'tween',
    ease: 'anticipate', // A nice easing for page transitions
    duration: 0.5,
  };