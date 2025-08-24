import React, { createContext, useState, useEffect } from 'react';
import { devotionsData } from '../data/devotionsData';

interface DevotionContextType {
  todaysDevotions: any[];
  currentDevotion: any;
  setCurrentDevotion: (devotion: any) => void;
}

export const DevotionContext = createContext<DevotionContextType>({
  todaysDevotions: [],
  currentDevotion: null,
  setCurrentDevotion: () => {}
});

export const DevotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todaysDevotions] = useState(devotionsData);
  const [currentDevotion, setCurrentDevotion] = useState(null);

  return (
    <DevotionContext.Provider value={{
      todaysDevotions,
      currentDevotion,
      setCurrentDevotion
    }}>
      {children}
    </DevotionContext.Provider>
  );
};