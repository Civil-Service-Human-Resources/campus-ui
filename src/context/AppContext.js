import { createContext, useCallback, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [strandCategories, setStrandCategories] = useState({});

  /**
   * @param {string[]} categories
   */
  const handleSetStrandCategories = useCallback((categories) => {
    if (categories && categories.length > 0) {
      const categoriesObj = {};
      categories.forEach((cat) => {
        const catkey = cat.toLowerCase().replace(/\s/g, '_');
        categoriesObj[catkey] = cat;
      });

      setStrandCategories({ ...categoriesObj });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        strandCategories,
        setStrandCategories: handleSetStrandCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
