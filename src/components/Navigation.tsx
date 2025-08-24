import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Heart, BookOpen, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/bible', icon: Book, label: 'Bible' },
    { path: '/devotions', icon: BookOpen, label: 'Devotions' },
    { path: '/favorites', icon: Heart, label: 'Favorites' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === path
                ? 'text-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;