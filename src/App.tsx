import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Bible from './pages/Bible';
import Devotions from './pages/Devotions';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import { DevotionProvider } from './context/DevotionContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { SettingsProvider, SettingsContext } from './context/SettingsContext';

function App() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    if (settings.theme === 'dark' || (settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.theme]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <SettingsProvider>
      <FavoritesProvider>
        <DevotionProvider>
          <Router>
            <div className="min-h-screen bg-gray-50">
              {isInstallable && (
                <div className="bg-indigo-600 text-white p-3 text-center">
                  <button
                    onClick={handleInstallClick}
                    className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Install Gospel Guide App
                  </button>
                </div>
              )}
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bible" element={<Bible />} />
                <Route path="/devotions" element={<Devotions />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
              
              <Navigation />
            </div>
          </Router>
        </DevotionProvider>
      </FavoritesProvider>
    </SettingsProvider>
  );
}

export default App;