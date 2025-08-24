import React, { createContext, useState, useEffect } from 'react';

interface Settings {
  dailyReminder: boolean;
  readingReminder: boolean;
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  autoScroll: boolean;
  nightMode: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  dailyReminder: true,
  readingReminder: true,
  theme: 'light',
  fontSize: 'medium',
  autoScroll: false,
  nightMode: false
};

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {}
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem('gospel-guide-settings');
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gospel-guide-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};