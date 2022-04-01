import { useEffect } from 'react';

export const useClickOutSide = (refObject, handler, isAddEvent) => {
  useEffect(() => {
    function onClickHandler(evt) {
      if (
        refObject.current &&
        !refObject.current.contains(evt.target) &&
        typeof handler === 'function'
      ) {
        handler(evt);
      }
    }

    if (isAddEvent && refObject?.current) {
      document.addEventListener('click', onClickHandler);
    } else {
      document.removeEventListener('click', onClickHandler);
    }

    return () => {
      document.removeEventListener('click', onClickHandler);
    };
  }, [refObject, handler, isAddEvent]);
};
