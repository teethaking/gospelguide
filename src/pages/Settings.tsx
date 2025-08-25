import { useContext } from 'react';
import { Settings as SettingsIcon, Bell, Moon, Sun, Type, Download } from 'lucide-react';
import { SettingsContext } from '../context/SettingsContext';

const Settings = () => {
  const { settings, updateSettings } = useContext(SettingsContext);

  type ToggleableSetting = 'dailyReminder' | 'readingReminder' | 'autoScroll' | 'nightMode';

  const handleToggle = (key: ToggleableSetting) => {
    updateSettings({ [key]: !settings[key] });
  };

  const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
    updateSettings({ fontSize: size });
  };

  const handleThemeChange = (theme: string) => {
    updateSettings({ theme: theme as 'light' | 'dark' | 'auto' });
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SettingsIcon className="w-8 h-8 text-gray-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Customize your Gospel Guide experience</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Notifications */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Bell className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Daily Devotion Reminder</p>
                <p className="text-sm text-gray-600">Get notified for daily devotions</p>
              </div>
              <button
                onClick={() => handleToggle('dailyReminder')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.dailyReminder ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.dailyReminder ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Reading Reminders</p>
                <p className="text-sm text-gray-600">Reminders to read the Bible</p>
              </div>
              <button
                onClick={() => handleToggle('readingReminder')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.readingReminder ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.readingReminder ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Sun className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Appearance</h3>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900 mb-3">Theme</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'light', label: 'Light', icon: Sun },
                  { value: 'dark', label: 'Dark', icon: Moon },
                  { value: 'auto', label: 'Auto', icon: SettingsIcon }
                ].map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => handleThemeChange(value)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      settings.theme === value
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-900 mb-3">Font Size</p>
              <div className="grid grid-cols-3 gap-3">
                {([
                  { value: 'small' as 'small', label: 'Small' },
                  { value: 'medium' as 'medium', label: 'Medium' },
                  { value: 'large' as 'large', label: 'Large' }
                ] as { value: 'small' | 'medium' | 'large'; label: string }[]).map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => handleFontSizeChange(value)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      settings.fontSize === value
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Type className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reading */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <SettingsIcon className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Reading</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto-scroll</p>
                <p className="text-sm text-gray-600">Automatically scroll while reading</p>
              </div>
              <button
                onClick={() => handleToggle('autoScroll')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.autoScroll ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.autoScroll ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Night Mode</p>
                <p className="text-sm text-gray-600">Easier reading in low light</p>
              </div>
              <button
                onClick={() => handleToggle('nightMode')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.nightMode ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.nightMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Data */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <Download className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Data & Storage</h3>
          </div>

          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <p className="font-medium text-gray-900">Export Favorites</p>
              <p className="text-sm text-gray-600">Download your saved verses and devotions</p>
            </button>

            <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <p className="font-medium text-gray-900">Clear Cache</p>
              <p className="text-sm text-gray-600">Free up storage space</p>
            </button>

            <button className="w-full text-left p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors text-red-600">
              <p className="font-medium">Reset All Data</p>
              <p className="text-sm">This will delete all your favorites and settings</p>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About Gospel Guide</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Version 1.0.0</p>
            <p>© 2024 Gospel Guide. All rights reserved.</p>
            <p>Built with love for daily spiritual growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;