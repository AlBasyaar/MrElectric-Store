import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all duration-300
            ${theme === 'dark'
              ? 'bg-gradient-to-b from-sky-400 to-sky-700 text-white hover:from-sky-500 hover:to-sky-800'
              : 'bg-gradient-to-b from-sky-300 to-sky-600 text-white hover:from-sky-400 hover:to-sky-700'
            }`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
