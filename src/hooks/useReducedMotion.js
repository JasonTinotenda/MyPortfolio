// src/hooks/useReducedMotion.js
import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion() {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event) => setMatches(event.matches);

    // Older browsers might not have addEventListener for matchMedia
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener); // Deprecated but for older browser support
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  return matches;
}