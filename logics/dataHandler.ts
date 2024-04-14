import meccansData from '../assets/data/meccans.json';

interface Verse {
  verseId: number;
  text: string;
  translation: {
    tr: { type: String },
    en: { type: String }
};
}
  
interface Meccan {
  meccanId : number;
  name: String;
  transliteration: String;
  translation: {
      tr: String,
      en: String,
  };
  total_verses: String;
  verses: Verse[];
}

interface Question {
    verse: Verse[];
    meccanText: String;
    meccanTranslation: {
      tr: { type: String },
      en: { type: String }
  };
  }
    

let quranData: Meccan[] = meccansData;

export function getRandomVerse(): Question | null {
    if (!quranData) {
      return null;
    }
  
    const randomMeccanIndex = Math.floor(Math.random() * quranData.length);
    const randomMeccan = quranData[randomMeccanIndex];
  
    const randomVerses: Verse[] = [];
    const verseCount = randomMeccan.verses.length;
    for (let i = 0; i < 4; i++) {
      const randomVerseIndex = Math.floor(Math.random() * verseCount);
      randomVerses.push(randomMeccan.verses[randomVerseIndex]);
    }
  
    return {
      verses: randomVerses,
      meccanText: randomMeccan.name,
      meccanTranslation: {
        tr: randomMeccan.translation.tr,
        en: randomMeccan.translation.en,
      },
    };
  }
