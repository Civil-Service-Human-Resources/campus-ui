import { createContext, useState, useCallback, useEffect } from 'react';

export const DeviceContext = createContext({});

export const DeviceContextProvider = ({ children }) => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const handleResizeWindow = useCallback(() => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth,
      smallSize: window.innerWidth <= 768,
      mediumSize: window.innerWidth <= 1024,
      xlargeSize: window.innerWidth <= 1200,
      xxlargeSize: window.innerWidth >= 1440,
    });
  }, []);

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [handleResizeWindow]);

  return (
    <DeviceContext.Provider
      value={{
        innerWidth: dimension.width,
        innerHeight: dimension.height,
        smallSize: dimension.smallSize,
        mediumSize: dimension.mediumSize,
        xlargeSize: dimension.xlargeSize,
        xxlargeSize: dimension.xxlargeSize,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
