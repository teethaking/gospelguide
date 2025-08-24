export const bibleBooks = [
  // Old Testament
  { name: 'Genesis', chapters: 50 },
  { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 },
  { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 },
  { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 },
  { name: 'Ruth', chapters: 4 },
  { name: '1 Samuel', chapters: 31 },
  { name: '2 Samuel', chapters: 24 },
  { name: '1 Kings', chapters: 22 },
  { name: '2 Kings', chapters: 25 },
  { name: '1 Chronicles', chapters: 29 },
  { name: '2 Chronicles', chapters: 36 },
  { name: 'Ezra', chapters: 10 },
  { name: 'Nehemiah', chapters: 13 },
  { name: 'Esther', chapters: 10 },
  { name: 'Job', chapters: 42 },
  { name: 'Psalms', chapters: 150 },
  { name: 'Proverbs', chapters: 31 },
  { name: 'Ecclesiastes', chapters: 12 },
  { name: 'Song of Solomon', chapters: 8 },
  { name: 'Isaiah', chapters: 66 },
  { name: 'Jeremiah', chapters: 52 },
  { name: 'Lamentations', chapters: 5 },
  { name: 'Ezekiel', chapters: 48 },
  { name: 'Daniel', chapters: 12 },
  { name: 'Hosea', chapters: 14 },
  { name: 'Joel', chapters: 3 },
  { name: 'Amos', chapters: 9 },
  { name: 'Obadiah', chapters: 1 },
  { name: 'Jonah', chapters: 4 },
  { name: 'Micah', chapters: 7 },
  { name: 'Nahum', chapters: 3 },
  { name: 'Habakkuk', chapters: 3 },
  { name: 'Zephaniah', chapters: 3 },
  { name: 'Haggai', chapters: 2 },
  { name: 'Zechariah', chapters: 14 },
  { name: 'Malachi', chapters: 4 },
  
  // New Testament
  { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 },
  { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 },
  { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 },
  { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 },
  { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 },
  { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 },
  { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 },
  { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 },
  { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 },
  { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 },
  { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 },
  { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 },
  { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 },
  { name: 'Revelation', chapters: 22 }
];

// Sample Bible verses (in a real app, this would be a complete database)
export const bibleVerses = [
  // Genesis 1
  { book: 'Genesis', chapter: 1, verse: 1, text: 'In the beginning God created the heaven and the earth.' },
  { book: 'Genesis', chapter: 1, verse: 2, text: 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.' },
  { book: 'Genesis', chapter: 1, verse: 3, text: 'And God said, Let there be light: and there was light.' },
  
  // John 3
  { book: 'John', chapter: 3, verse: 16, text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
  { book: 'John', chapter: 3, verse: 17, text: 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.' },
  
  // Psalms 23
  { book: 'Psalms', chapter: 23, verse: 1, text: 'The LORD is my shepherd; I shall not want.' },
  { book: 'Psalms', chapter: 23, verse: 2, text: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.' },
  { book: 'Psalms', chapter: 23, verse: 3, text: 'He restoreth my soul: he leadeth me in the paths of righteousness for his name\'s sake.' },
  { book: 'Psalms', chapter: 23, verse: 4, text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.' },
  
  // Romans 8
  { book: 'Romans', chapter: 8, verse: 28, text: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.' },
  { book: 'Romans', chapter: 8, verse: 38, text: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,' },
  { book: 'Romans', chapter: 8, verse: 39, text: 'Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.' },
  
  // Philippians 4
  { book: 'Philippians', chapter: 4, verse: 13, text: 'I can do all things through Christ which strengtheneth me.' },
  { book: 'Philippians', chapter: 4, verse: 19, text: 'But my God shall supply all your need according to his riches in glory by Christ Jesus.' },
  
  // 1 Corinthians 13
  { book: '1 Corinthians', chapter: 13, verse: 4, text: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,' },
  { book: '1 Corinthians', chapter: 13, verse: 5, text: 'Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;' },
  { book: '1 Corinthians', chapter: 13, verse: 13, text: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.' },
  
  // Proverbs 3
  { book: 'Proverbs', chapter: 3, verse: 5, text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding.' },
  { book: 'Proverbs', chapter: 3, verse: 6, text: 'In all thy ways acknowledge him, and he shall direct thy paths.' },
  
  // Isaiah 40
  { book: 'Isaiah', chapter: 40, verse: 31, text: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.' },
  
  // Matthew 5
  { book: 'Matthew', chapter: 5, verse: 3, text: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven.' },
  { book: 'Matthew', chapter: 5, verse: 4, text: 'Blessed are they that mourn: for they shall be comforted.' },
  { book: 'Matthew', chapter: 5, verse: 14, text: 'Ye are the light of the world. A city that is set on an hill cannot be hid.' },
  
  // Jeremiah 29
  { book: 'Jeremiah', chapter: 29, verse: 11, text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.' },
  
  // 2 Timothy 1
  { book: '2 Timothy', chapter: 1, verse: 7, text: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.' },
  
  // Ephesians 2
  { book: 'Ephesians', chapter: 2, verse: 8, text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:' },
  { book: 'Ephesians', chapter: 2, verse: 9, text: 'Not of works, lest any man should boast.' },
  
  // 1 John 4
  { book: '1 John', chapter: 4, verse: 19, text: 'We love him, because he first loved us.' },
  
  // Revelation 21
  { book: 'Revelation', chapter: 21, verse: 4, text: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.' }
];