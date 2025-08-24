import React, { useContext, useState } from 'react';
import { Heart, BookOpen, Trash2, Search } from 'lucide-react';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredFavorites = favorites.filter(item => {
    const matchesSearch = item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.reference?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.title?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filter === 'all' || item.type === filter;
    
    return matchesSearch && matchesFilter;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-red-600 fill-current" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Favorites</h1>
        <p className="text-gray-600">Your saved verses and devotions</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search favorites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex space-x-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'verse', label: 'Verses' },
            { value: 'devotion', label: 'Devotions' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Favorites List */}
      {filteredFavorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
          <p className="text-gray-600 mb-6">
            {searchQuery || filter !== 'all' 
              ? 'No favorites match your search criteria'
              : 'Start adding verses and devotions to your favorites'
            }
          </p>
          {!searchQuery && filter === 'all' && (
            <div className="space-y-2">
              <button className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Browse Bible
              </button>
              <button className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Read Devotions
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFavorites.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    item.type === 'verse' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {item.type === 'verse' ? (
                      <BookOpen className={`w-4 h-4 ${item.type === 'verse' ? 'text-blue-600' : 'text-green-600'}`} />
                    ) : (
                      <Heart className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div>
                    <span className={`text-sm font-medium ${
                      item.type === 'verse' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {item.type === 'verse' ? 'Bible Verse' : 'Devotion'}
                    </span>
                    <p className="text-xs text-gray-500">Saved on {formatDate(item.date)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {item.title && (
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              )}

              {item.reference && (
                <p className="text-indigo-600 font-medium mb-2">{item.reference}</p>
              )}

              {item.verse && (
                <div className="bg-indigo-50 p-3 rounded-lg mb-3">
                  <p className="text-indigo-800 italic">"{item.verse}"</p>
                </div>
              )}

              <p className="text-gray-700 leading-relaxed">
                {item.text.length > 200 ? `${item.text.substring(0, 200)}...` : item.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;