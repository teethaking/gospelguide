import React, { createContext, useState, useEffect } from 'react';

interface Favorite {
  id: string;
  type: 'verse' | 'devotion';
  title?: string;
  reference?: string;
  text: string;
  verse?: string;
  date: string;
}

interface FavoritesContextType {
  favorites: Favorite[];
  addToFavorites: (item: Favorite) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('gospel-guide-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gospel-guide-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item: Favorite) => {
    setFavorites(prev => [...prev, item]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};