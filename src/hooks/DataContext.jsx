import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cachedData, setCachedData] = useState(null);
  return (
    <DataContext.Provider value={{ cachedData, setCachedData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataCache = () => useContext(DataContext);