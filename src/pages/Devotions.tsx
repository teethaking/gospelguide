import React, { useState, useContext } from 'react';
import { Calendar, Heart, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { DevotionContext } from '../context/DevotionContext';
import { FavoritesContext } from '../context/FavoritesContext';

const Devotions = () => {
  const { todaysDevotions } = useContext(DevotionContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const [currentDay, setCurrentDay] = useState(dayOfYear);
  
  const currentDevotion = todaysDevotions[currentDay % todaysDevotions.length];

  const isFavorite = (devotion: any) => {
    return favorites.some(fav => fav.id === `devotion-${currentDay}`);
  };

  const toggleFavorite = () => {
    const devotionData = {
      id: `devotion-${currentDay}`,
      type: 'devotion',
      title: currentDevotion.title,
      reference: currentDevotion.reference,
      text: currentDevotion.content,
      verse: currentDevotion.verse,
      date: new Date().toISOString()
    };

    if (isFavorite(currentDevotion)) {
      removeFromFavorites(devotionData.id);
    } else {
      addToFavorites(devotionData);
    }
  };

  const goToPreviousDay = () => {
    setCurrentDay(prev => prev > 1 ? prev - 1 : 365);
  };

  const goToNextDay = () => {
    setCurrentDay(prev => prev < 365 ? prev + 1 : 1);
  };

  const goToToday = () => {
    setCurrentDay(dayOfYear);
  };

  const formatDate = (day: number) => {
    const date = new Date(new Date().getFullYear(), 0, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Daily Devotions</h1>
        <p className="text-gray-600">365 days of spiritual guidance</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-6 bg-white rounded-lg p-4 shadow-md">
        <button
          onClick={goToPreviousDay}
          className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-900">Day {currentDay}</div>
          <div className="text-sm text-gray-600">{formatDate(currentDay)}</div>
        </div>
        
        <button
          onClick={goToNextDay}
          className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Today Button */}
      {currentDay !== dayOfYear && (
        <div className="text-center mb-6">
          <button
            onClick={goToToday}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Today
          </button>
        </div>
      )}

      {/* Devotion Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Daily Devotion</h2>
              <p className="text-sm text-gray-600">{formatDate(currentDay)}</p>
            </div>
          </div>
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full transition-colors ${
              isFavorite(currentDevotion)
                ? 'bg-red-100 text-red-600'
                : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite(currentDevotion) ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentDevotion.title}</h3>

        {/* Scripture Verse */}
        <div className="bg-indigo-50 p-4 rounded-lg mb-6">
          <p className="text-indigo-800 font-medium italic text-lg leading-relaxed">
            "{currentDevotion.verse}"
          </p>
          <p className="text-indigo-600 font-medium mt-3">- {currentDevotion.reference}</p>
        </div>

        {/* Devotion Content */}
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            {currentDevotion.content}
          </p>
        </div>

        {/* Prayer */}
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold text-gray-900 mb-2">Prayer</h4>
          <p className="text-gray-700 italic">{currentDevotion.prayer}</p>
        </div>

        {/* Reflection Questions */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">Reflection</h4>
          <div className="space-y-2">
            {currentDevotion.reflection.map((question: string, index: number) => (
              <div key={index} className="flex items-start">
                <span className="text-indigo-600 font-medium mr-2">{index + 1}.</span>
                <p className="text-gray-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h4 className="font-semibold text-gray-900 mb-3">Quick Navigation</h4>
        <div className="grid grid-cols-4 gap-2">
          {[1, 7, 30, 90, 180, 270, 365].map((day) => (
            <button
              key={day}
              onClick={() => setCurrentDay(day)}
              className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                currentDay === day
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devotions;