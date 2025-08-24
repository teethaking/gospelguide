import React, { useState, useContext } from 'react';
import { Search, BookOpen, Heart } from 'lucide-react';
import { FavoritesContext } from '../context/FavoritesContext';
import { bibleBooks, bibleVerses } from '../data/bibleData';

const Bible = () => {
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = bibleVerses.filter(verse =>
        verse.text.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 20);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const isFavorite = (verse: any) => {
    return favorites.some(fav => fav.id === `${verse.book}-${verse.chapter}-${verse.verse}`);
  };

  const toggleFavorite = (verse: any) => {
    const verseData = {
      id: `${verse.book}-${verse.chapter}-${verse.verse}`,
      type: 'verse',
      reference: `${verse.book} ${verse.chapter}:${verse.verse}`,
      text: verse.text,
      date: new Date().toISOString()
    };

    if (isFavorite(verse)) {
      removeFromFavorites(verseData.id);
    } else {
      addToFavorites(verseData);
    }
  };

  const getCurrentVerses = () => {
    if (!selectedBook) return [];
    return bibleVerses.filter(verse => 
      verse.book === selectedBook && verse.chapter === selectedChapter
    );
  };

  return (
    <div className="pb-20 px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Holy Bible</h1>
        <p className="text-gray-600">King James Version</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search verses..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Results</h3>
          <div className="space-y-3">
            {searchResults.map((verse, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-indigo-600">
                    {verse.book} {verse.chapter}:{verse.verse}
                  </span>
                  <button
                    onClick={() => toggleFavorite(verse)}
                    className={`p-1 rounded ${
                      isFavorite(verse) ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite(verse) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                <p className="text-gray-700">{verse.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Book Selection */}
      {!searchQuery && (
        <>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Book</h3>
            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
              {bibleBooks.map((book) => (
                <button
                  key={book.name}
                  onClick={() => {
                    setSelectedBook(book.name);
                    setSelectedChapter(1);
                  }}
                  className={`p-3 text-left rounded-lg border transition-colors ${
                    selectedBook === book.name
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{book.name}</div>
                  <div className="text-sm opacity-75">{book.chapters} chapters</div>
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Selection */}
          {selectedBook && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {selectedBook} - Select Chapter
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: bibleBooks.find(b => b.name === selectedBook)?.chapters || 1 }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setSelectedChapter(i + 1)}
                    className={`p-2 rounded-lg border transition-colors ${
                      selectedChapter === i + 1
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Verses */}
          {selectedBook && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {selectedBook} Chapter {selectedChapter}
              </h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="space-y-4">
                  {getCurrentVerses().map((verse, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-sm font-medium text-indigo-600 mt-1 min-w-[2rem]">
                        {verse.verse}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{verse.text}</p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(verse)}
                        className={`p-1 rounded ${
                          isFavorite(verse) ? 'text-red-500' : 'text-gray-400'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite(verse) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Bible;