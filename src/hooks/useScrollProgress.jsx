import React, { useState, useEffect } from 'react';

const useScrollProgress = () => {
  // const [progress, setProgress] = useState(0);
  const [completion, setCompletion] = useState(0);

  /*
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / scrollHeight;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }

      // const scrollProgress = scrollTop / scrollHeight;
      // setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);
    
  return completion;
};

export default useScrollProgress;