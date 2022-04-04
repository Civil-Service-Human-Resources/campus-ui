import { useCallback, useEffect, useState } from 'react';

export const useScroll = (isAddEvent) => {
  const [currentPos, setCurrentPos] = useState([0, 0]);

  const handleScroll = useCallback(() => {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

    const scrollY = supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    const scrollX = supportPageOffset
      ? window.pageXOffset
      : isCSS1Compat
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;

    setCurrentPos([scrollX, scrollY]);
  }, []);

  useEffect(() => {
    if (isAddEvent) {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAddEvent, handleScroll]);

  return currentPos;
};
