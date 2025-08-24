import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Heart, Sunrise, Moon } from 'lucide-react';
import { DevotionContext } from '../context/DevotionContext';
import { SettingsContext } from '../context/SettingsContext';

const Home = () => {
  const { todaysDevotions } = useContext(DevotionContext);
  const { settings } = useContext(SettingsContext);
  
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const todaysDevotion = todaysDevotions[dayOfYear % todaysDevotions.length];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gospel Guide</h1>
        <p className="text-gray-600">Daily devotions and spiritual guidance</p>
        <p className="text-sm text-indigo-600 font-medium mt-2">{formatDate(today)}</p>
      </div>

      {/* Today's Devotion Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
            <Sunrise className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Today's Devotion</h2>
            <p className="text-sm text-gray-600">Day {dayOfYear} of 365</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{todaysDevotion.title}</h3>
        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <p className="text-indigo-800 font-medium italic">"{todaysDevotion.verse}"</p>
          <p className="text-indigo-600 text-sm mt-2">- {todaysDevotion.reference}</p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          {todaysDevotion.content.substring(0, 150)}...
        </p>
        <Link
          to="/devotions"
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
        >
          Read Full Devotion
          <BookOpen className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link
          to="/bible"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Read Bible</h3>
          <p className="text-sm text-gray-600">Complete Bible with search</p>
        </Link>

        <Link
          to="/favorites"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Favorites</h3>
          <p className="text-sm text-gray-600">Saved verses & devotions</p>
        </Link>
      </div>

      {/* Daily Verse */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <Calendar className="w-6 h-6 mr-3" />
          <h3 className="text-lg font-semibold">Verse of the Day</h3>
        </div>
        <p className="text-lg italic mb-3">"{todaysDevotion.verse}"</p>
        <p className="text-indigo-200">- {todaysDevotion.reference}</p>
      </div>

      {/* Reading Streak */}
      <div className="bg-white rounded-xl p-6 mt-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Reading Streak</h3>
            <p className="text-sm text-gray-600">Keep up the great work!</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">7</div>
            <div className="text-sm text-gray-600">days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;